import { connectDB } from "@/lib/connect";
import team from "@/models/team";
import member from "@/models/member";

export async function GET() {
  try {
    const teaminfo: {
      _id: string;
      school: string;
      event: string;
      teacher: string;
      verified: boolean;
      members: { _id: string; name: string; phoneno: string; email: string }[];
    }[] = [];
    // Connect to the database
    await connectDB();

    // Fetch all teams from the database
    const teams = await team.find({});

    // get the info of the members of the team from their id
    // and push the member's info into an array under the teaminfo
    for (const team of teams) {
      const members = await member.find({ _id: { $in: team.members } });
      teaminfo.push({
        _id: team._id,
        school: team.school,
        teacher: team.teacher,
        event: team.event,
        verified: team.verified,
        members: members.map((member) => ({
          _id: member._id,
          name: member.name,
          phoneno: member.phoneno,
          email: member.email,
        })),
      });
    }

    // Return the teams as a JSON response
    return new Response(JSON.stringify(teaminfo), {
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
