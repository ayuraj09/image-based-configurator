import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params;
    console.log("This is the project id" + projectId);

    // Find the project and its images
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });
    console.log(project);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Delete the project and all associated images from the database
    await prisma.image.deleteMany({
      where: { projectId: projectId },
    });

    // Now delete the project
    await prisma.project.delete({
      where: { id: projectId },
    });

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    // console.error("Delete project error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function GET(
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    const { projectId } = await params;
    console.log("This is the project id" + projectId);

    // Find the project and its images
    const project = await prisma.project.findUnique({
      where: { id: projectId },
      include: { images: true },
    });
    console.log(project);
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    // console.error("Delete project error:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
