import { connectDB } from "@/lib/connect";
import team from "@/models/team";

export async function GET() {
  try {
    // Connect to the database
    await connectDB();

    // Fetch all teams from the database
    const teams = await team.find({});

    // Return the teams as a JSON response
    return new Response(JSON.stringify(teams), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching teams:", error);

    // Return an error response
    return new Response("Internal Server Error", { status: 500 });
  }
}
