import { connectDB } from "@/lib/connect";
import member from "@/models/member";

export default async function GET(req: Request) {
  const body = await req.json();
  const memberid = body.member;

  const memberinfo = [];

  try {
    // Connect to the database
    await connectDB();

    const memberData = await member.findById(memberid);
    if (!memberData) {
      console.log(`Member with ID ${memberid} not found`);
    } else {
      memberinfo.push({
        name: memberData.name,
        phoneno: memberData.phoneno,
        email: memberData.email,
      });
    }

    // Return the members as a JSON response
    return new Response(JSON.stringify(memberinfo), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching members:", error);

    // Return an error response
    return new Response("Internal Server Error", { status: 500 });
  }
}
