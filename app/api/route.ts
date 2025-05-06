import { connectDB } from "@/lib/connect";

export async function GET() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");
    return new Response("Connected to MongoDB", { status: 200 });
  } catch (error) {
    console.error("Connection error:", error);
    return new Response("Failed to connect to MongoDB", { status: 500 });
  }
}
