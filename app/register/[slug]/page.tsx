"use client";

import { use, useState, useEffect } from "react";

import NavBar from "@/components/nav";
import { TypewriterEffect } from "@/components/typewriter";

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

export default function RegisterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const slug = use(params);

  const [schoolName, setSchoolName] = useState("");
  const [teacher, setTeacher] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  const [teamMembers, setTeamMembers] = useState([
    { name: "", phoneno: "", email: "" },
  ]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Update teamMembers state based on the slug
  useEffect(() => {
    const teamSize = teamSizes[slug.slug] || 2; // Default to 2 if slug is not found
    setTeamMembers(
      Array.from({ length: teamSize }, () => ({
        name: "",
        phoneno: "",
        email: "",
      })),
    );
  }, [slug.slug]);

  const handleTeamMemberChange = (
    index: number,
    field: keyof (typeof teamMembers)[number],
    value: string,
  ) => {
    const updatedTeamMembers = [...teamMembers];
    updatedTeamMembers[index][field] = value;
    setTeamMembers(updatedTeamMembers);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setIsSuccess(false);
    setErrorMessage("");
    // Handle form submission logic here
    console.log("submitting form with the following data", {
      schoolName,
      teacher,
      slug,
      teamMembers,
    });
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          school: schoolName,
          teacher: {
            school: schoolName,
            name: teacher.name,
            email: teacher.email,
            phoneno: teacher.phoneno,
          },
          event: slug.slug,
          members: teamMembers,
        }),
      });

      if (response.ok) {
        console.log("Form submitted successfully", { schoolName, teacher, teamMembers });
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        // Handle API errors
        let errorMessage = "An error occurred while submitting the form. Please try again.";
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          }
        } catch (parseError) {
          // If response is not JSON, use the default error message
          console.error("Error parsing error response:", parseError);
        }
        setIsError(true);
        setIsLoading(false);
        setErrorMessage(errorMessage);
        console.error("API Error:", response.status, errorMessage);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
      setErrorMessage(
        "Network error occurred while submitting the form. Please check your connection and try again.",
      );
      console.error("Network error submitting form", error);
    }
  };

  const words_head = [
    { text: "register", className: "md:text-4xl font-bold uppercase" },
    { text: "for", className: "md:text-4xl font-bold uppercase" },
    { text: slug.slug, className: "md:text-4xl font-bold uppercase" },
  ];

  return (
    <section className="h-screen background-image bg-cover bg-center">
      {slug.slug !== "scio" &&
        slug.slug !== "esprit-decode" &&
        slug.slug !== "site-incroyable" &&
        slug.slug !== "suiveur" &&
        slug.slug !== "polemos" &&
        slug.slug !== "parabellum" &&
        slug.slug !== "lux-captis" &&
        slug.slug !== "chroma" &&
        slug.slug !== "memesis" ? (
        <h1>this event does not exist</h1>
      ) : (
        <div className="piece output flex flex-col items-center h-screen backdrop-brightness-50 font-mono animate-(--textflicker)">
          <NavBar />
          <TypewriterEffect
            words={words_head}
            className="text-2xl md:text-4xl font-bold uppercase"
            cursorClassName="md:h-[2rem] md:w-[32px]"
          />
          <div className="max-w-7xl mx-auto mt-10">
            <form
              onSubmit={handleSubmit}
              className="p-5 border shadow-2xl shadow-green-950/50"
            >
              <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-3 flex flex-col">
                  <label htmlFor="teamname" className="text-lg font-semibold">
                    School Name*
                  </label>
                  <input
                    type="text"
                    id="teamname"
                    name="teamname"
                    className="border-2 p-2 mt-2"
                    onChange={(e) => {
                      setSchoolName(e.target.value);
                    }}
                    required
                  />
                </div>
                {/* teacher 1 */}
                <div className="flex flex-col">
                  <label htmlFor="teachname" className="text-lg font-semibold">
                    Teacher-InCharge Name*
                  </label>
                  <input
                    type="text"
                    id="teachname"
                    name="teachname"
                    className="border-2 p-2 mt-2"
                    onChange={(e) => {
                      setTeacher({ ...teacher, name: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="teachmail" className="text-lg font-semibold">
                    Teacher-InCharge Email*
                  </label>
                  <input
                    type="email"
                    id="teachmail"
                    name="teachmail"
                    className="border-2 p-2 mt-2"
                    onChange={(e) => {
                      setTeacher({ ...teacher, email: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="teachmail" className="text-lg font-semibold">
                    Teacher-InCharge Phone*
                  </label>
                  <input
                    type="text"
                    id="teachphone"
                    name="teachphone"
                    className="border-2 p-2 mt-2"
                    onChange={(e) => {
                      setTeacher({ ...teacher, phoneno: e.target.value });
                    }}
                    required
                  />
                </div>
              </div>

              {/* Team Members */}
              <div className="mt-5">
                <h2 className="text-lg font-semibold">Team Members</h2>
                {teamMembers.map((member, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-10 mt-4">
                    <div className="flex flex-col">
                      <label
                        htmlFor={`member-name-${index}`}
                        className="text-lg font-semibold"
                      >
                        Member {index + 1} Name*
                      </label>
                      <input
                        type="text"
                        id={`member-name-${index}`}
                        name={`member-name-${index}`}
                        className="border-2 p-2 mt-2"
                        value={member.name}
                        onChange={(e) =>
                          handleTeamMemberChange(index, "name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor={`member-email-${index}`}
                        className="text-lg font-semibold"
                      >
                        Member {index + 1} Email*
                      </label>
                      <input
                        type="email"
                        id={`member-email-${index}`}
                        name={`member-email-${index}`}
                        className="border-2 p-2 mt-2"
                        value={member.email}
                        onChange={(e) =>
                          handleTeamMemberChange(index, "email", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        htmlFor={`member-email-${index}`}
                        className="text-lg font-semibold"
                      >
                        Member {index + 1} Phone Number*
                      </label>
                      <input
                        type="text"
                        id={`member-phone-${index}`}
                        name={`member-phone-${index}`}
                        className="border-2 p-2 mt-2"
                        value={member.phoneno}
                        onChange={(e) =>
                          handleTeamMemberChange(
                            index,
                            "phoneno",
                            e.target.value,
                          )
                        }
                        required
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col md:flex-row mt-5">
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-950 text-white"
                  >
                    Register
                  </button>
                  <span className="text-red-500 text-sm">*required</span>
                </div>
                <div className="mt-2 px-5 text-center md:text-left">
                  {isLoading && <p className="text-green-800">Loading...</p>}
                  {isError && (
                    <p className="text-red-500">
                      An error occurred. Please try again.
                    </p>
                  )}
                  {isSuccess && (
                    <p className="text-green-500">Registration successful!</p>
                  )}
                  {/* Error Message */}
                  {isError && <p className="text-red-500">{errorMessage}</p>}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="piece scanlines noclick"></div>
      <div className="piece glow noclick"></div>
    </section>
  );
}
