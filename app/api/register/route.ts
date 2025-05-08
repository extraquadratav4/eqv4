import { connectDB } from "@/lib/connect";
import member from "@/models/member";
import teacher from "@/models/teacher";
import team from "@/models/team";

const createMember = async (memberData: { name: string; email: string }) => {
  const existingMember = await member.findOne({ email: memberData.email });
  if (existingMember) {
    throw new Error(`Member with email ${memberData.email} already exists`);
  }
  const newMember = new member(memberData);
  await newMember.save();
  return newMember;
};

const createTeacher = async (teacherData: {
  school: string;
  name: string;
  email: string;
}) => {
  const existingTeacher = await teacher.findOne({ email: teacherData.email });
  if (existingTeacher) {
    console.log(
      `Teacher with email ${teacherData.email} already exists, continuing with the existing one`
    );
    return existingTeacher;
  }
  const newTeacher = new teacher(teacherData);
  await newTeacher.save();
  return newTeacher;
};

export async function POST(request: Request) {
  const body = await request.json();
  const { school, teacher: teacherData, event, members } = body;

  try {
    await connectDB();

    // Validate team size
    const teamSizes: { [key: string]: number } = {
      scio: 2,
      "esprit-decode": 2,
      suiveur: 3,
      polemos: 2,
      parabellum: 6,
      "lux-veritas-implica": 1,
      chroma: 1,
      memesis: 2,
    };

    if (!teamSizes[event]) {
      return new Response("Invalid event slug", { status: 400 });
    }

    if (members.length !== teamSizes[event]) {
      return new Response(`Invalid team size for event ${event}`, {
        status: 400,
      });
    }

    // Create or validate teacher
    let teacherId;
    try {
      const newTeacher = await createTeacher(teacherData);
      teacherId = newTeacher._id;
    } catch (error) {
      console.error("Error creating teacher:", error);
      return new Response(JSON.stringify({ message: error }), { status: 400 });
    }

    // Create members
    const memberIds = [];
    for (const memberData of members) {
      try {
        const newMember = await createMember(memberData);
        memberIds.push(newMember._id);
      } catch (error) {
        console.error("Error creating member:", error);
        return new Response(JSON.stringify({ message: error }), {
          status: 400,
        });
      }
    }

    // Create team
    const newTeam = new team({
      school,
      teacher: teacherId,
      event,
      members: memberIds,
    });
    await newTeam.save();

    return new Response("Registration successful", { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    console.error("Detailed error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function GET() {
  return new Response("Method not supported", { status: 405 });
}
