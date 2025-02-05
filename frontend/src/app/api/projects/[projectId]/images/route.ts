import {NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { Readable } from "stream";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params;

    const formData = await req.formData();
    const files = formData.getAll("images") as File[];

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "No files uploaded" }, { status: 400 });
    }

    const images = [];
    // Process images sequentially to maintain order
    for (let index = 0; index < files.length; index++) {
      const file = files[index];
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Upload to Cloudinary
      const result = await new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "cg-viz-studios",
          },
          (error, result) => {
            if (error) {
                reject(error);
            } else if (result) {
                resolve(result);
            } else {
                reject(new Error('No result returned from upload'));
            }
          }
        );

        // Convert buffer to stream and pipe to Cloudinary
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);
        stream.pipe(uploadStream);
      });

      // Create image record in database with Cloudinary URL
      const image = await prisma.image.create({
        data: {
          url: result.secure_url,
          sequence: index,
          projectId,
        },
      });
      images.push(image);
    }

    return NextResponse.json(images);
  } catch (error) {
    console.error("Error uploading images:", error);
    return NextResponse.json(
      { error: "Failed to upload images" },
      { status: 500 }
    );
  }
}
