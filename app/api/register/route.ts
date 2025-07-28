import { connectDB } from "@/lib/connect";
import member from "@/models/member";
import teacher from "@/models/teacher";
import team from "@/models/team";

const createMember = async (memberData: {
  name: string;
  phoneno: string;
  email: string;
}) => {
  const existingMember = await member.findOne({
    email: memberData.email.toLowerCase(),
  });
  if (existingMember) {
    throw new Error(`Member with email ${memberData.email} already exists`);
  }
  const newMember = new member({
    name: memberData.name,
    phoneno: memberData.phoneno,
    email: memberData.email.toLowerCase(),
  });
  await newMember.save();
  return newMember;
};

const createTeacher = async (teacherData: {
  school: string;
  name: string;
  email: string;
  phoneno: string;
}) => {
  const existingTeacher = await teacher.findOne({
    email: teacherData.email.toLowerCase(),
  });
  if (existingTeacher) {
    console.log(
      `Teacher with email ${teacherData.email} already exists, continuing with the existing one`
    );
    return existingTeacher;
  }
  const newTeacher = new teacher({
    ...teacherData,
    email: teacherData.email.toLowerCase(),
  });
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
      "site-incroyable": 2,
      suiveur: 3,
      polemos: 2,
      parabellum: 6,
      "lux-captis": 1,
      chroma: 1,
      memesis: 2,
    };

    const existingTeam = await team.findOne({
      school,
      event,
    });
    if (existingTeam) {
      if (event === "lux-veritas-implicas") {
        return new Response(
          JSON.stringify({ message: "Team already exists" }),
          {
            status: 400,
          }
        );
      }
    }

    if (!teamSizes[event]) {
      return new Response("Invalid event slug", { status: 400 });
    }

    if (members.length !== teamSizes[event]) {
      return new Response(
        JSON.stringify({
          message: `Invalid team size for event ${event}. Expected ${teamSizes[event]} members, got ${members.length}.`,
        }),
        {
          status: 400,
        }
      );
    }

    // Check for duplicate emails within the current request
    const allEmails = [
      teacherData.email,
      ...members.map((member: { email: string }) => member.email),
    ];
    const emailSet = new Set();
    const duplicateEmails = [];

    for (const email of allEmails) {
      if (emailSet.has(email.toLowerCase())) {
        duplicateEmails.push(email);
      } else {
        emailSet.add(email.toLowerCase());
      }
    }

    if (duplicateEmails.length > 0) {
      return new Response(
        JSON.stringify({
          message: `Duplicate emails found in the registration: ${duplicateEmails.join(
            ", "
          )}. Each person must have a unique email address.`,
        }),
        { status: 400 }
      );
    }

    // Check if any email already exists in database
    const existingMembers = await member.find({
      email: { $in: allEmails.map((email) => email.toLowerCase()) },
    });

    if (existingMembers.length > 0) {
      const existingEmails = existingMembers.map((m) => m.email);
      return new Response(
        JSON.stringify({
          message: `The following email(s) are already registered: ${existingEmails.join(
            ", "
          )}. Please use different email addresses.`,
        }),
        { status: 400 }
      );
    }

    // Create or validate teacher
    let teacherId;
    try {
      const newTeacher = await createTeacher(teacherData);
      teacherId = newTeacher._id;
    } catch (error) {
      console.error("Error creating teacher:", error);
      return new Response(
        JSON.stringify({
          message:
            error instanceof Error ? error.message : "Error creating teacher",
        }),
        { status: 400 }
      );
    }

    // Create members (we already validated no duplicates exist)
    const memberIds = [];
    for (const memberData of members) {
      try {
        const newMember = await createMember(memberData);
        memberIds.push(newMember._id);
      } catch (error) {
        console.error("Error creating member:", error);
        return new Response(
          JSON.stringify({
            message:
              error instanceof Error ? error.message : "Error creating member",
          }),
          {
            status: 400,
          }
        );
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
