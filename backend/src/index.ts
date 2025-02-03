import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import multer from "multer";
import path from "path";
import { z } from "zod";

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3001;

// Test database connection
async function testDatabaseConnection() {
  try {
    console.log("Testing database connection...");
    await prisma.$connect();
    console.log("✅ Successfully connected to PostgreSQL database");

    // Test query to verify Prisma operations
    const projectCount = await prisma.project.count();
    console.log(
      `✅ Database is operational. Current project count: ${projectCount}`
    );
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
}

// Initialize database connection
testDatabaseConnection();

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Validation schemas
const createProjectSchema = z.object({
  name: z.string().min(1),
  description: z.string().optional(),
});

// Routes
app.post("/api/projects", async (req, res) => {
  try {
    const { name, description } = createProjectSchema.parse(req.body);
    const project = await prisma.project.create({
      data: { name, description },
    });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: "Invalid project data" });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      include: { images: true },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

app.post(
  "/api/projects/:projectId/images",
  upload.array("images"),
  async (req, res) => {
    try {
      const { projectId } = req.params;
      const files = req.files as Express.Multer.File[];

      const images = [];
      // Process images sequentially to maintain order
      for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const image = await prisma.image.create({
          data: {
            url: `/uploads/${file.filename}`,
            sequence: index,
            projectId,
          },
        });
        images.push(image);
      }

      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to upload images" });
    }
  }
);

app.get("/api/projects/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: {
        images: {
          orderBy: { sequence: "asc" },
        },
      },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch project" });
  }
});

app.delete("/api/projects/:projectId", async (req, res) => {
  try {
    const { projectId } = req.params;

    // Find the project and its images
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Delete all associated images from storage
    const fs = require("fs");
    const path = require("path");

    for (const image of project.images) {
      const imagePath = path.join(__dirname, "..", image.url);
      try {
        fs.unlinkSync(imagePath);
      } catch (err) {
        console.error(`Failed to delete image file: ${imagePath}`, err);
      }
    }

    // Delete the project and all associated images from the database
    await prisma.project.delete({
      where: { id: projectId },
    });

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Delete project error:", error);
    res.status(500).json({ error: "Failed to delete project" });
  }
});

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something broke!" });
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
