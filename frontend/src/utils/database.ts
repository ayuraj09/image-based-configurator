import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function testDatabaseConnection() {
  try {
    console.log("Testing database connection from frontend...");
    await prisma.$connect();
    console.log("✅ Successfully connected to PostgreSQL database");

    // Test query to verify Prisma operations
    const projectCount = await prisma.project.count();
    console.log(
      `✅ Database is operational. Current project count: ${projectCount}`
    );
    return true;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    return false;
  }
}
