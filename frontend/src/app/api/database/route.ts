import { NextResponse } from "next/server";
import { testDatabaseConnection } from "@/utils/database";

export async function GET() {
  try {
    const success = await testDatabaseConnection();
    if (!success) {
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 }
      );
    }
    return NextResponse.json({ status: "connected" });
  } catch (error) {
    console.error("Error during database initialization:", error);
    return NextResponse.json(
      { error: "Database initialization error" },
      { status: 500 }
    );
  }
}
