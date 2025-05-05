
const sitetitle = "Extraquadrata V4";
const sitedesc = "Extraquadrata V4";

const herotitle = "Extraquadrata V4";
const herodesc =
  "We are invigorated and thrilled to announce that our school, DPS Kolar, is hosting the Extra Quadrata Tech Fest on Wednesday, 6th of August 2025. Our event encompasses a diverse array of sub-events, ranging from gaming to programming.";

const events = [
  {
    name: "scio",
    description: "Quizzing is an art form for people who find solace in perpetually striving to attain more knowledge about everything. Scio tests a person's level of knowledge about current affairs and general awareness related to IT, the history of companies, and their products. Along with that, it further challenges participants by adding another layer of complexity: teamwork. Along with being well-informed, to succeed in this event, participants ought to have a strong command of communication and coordination ",
    shortDescription: "A quiz event testing IT knowledge, teamwork, and general awareness.",
    rules: (
      <ul>
        <li>One school can have one team registered</li>
        <li>Each team will consist of two members from classes 8-12</li>
        <li>The quiz will be conducted in 2 parts: A written preliminary and the main quiz</li>
        <li>The top 6 teams would qualify for the main quiz on the basis of preliminary marks</li>
        <li>Participants are expected to prepare on the following topics:
          <ul>
            <li>Current Affairs and General Awareness related to the world of Information Technology</li>
            <li>Prominent Tech giants: their history and inventions</li>
            <li>AI; its evolution and emerging technologies</li>
            <li>Reflecting the retro tech theme, students should familiarize themselves with devices from around the 1970s-90s.</li>
          </ul>
        </li>
        <li>Use of Unfair Means will lead to immediate disqualification.</li>
        <li>The decision of the ExtraQuadrata managing committee would be final and binding.</li>
      </ul>
    ),
  },
  {
    name: "site incroyable",
    description: "Site Incroyable is a Web Development event where we test participants' masterships to create fast, efficient, optimized, and spellbinding websites. Web development languages are among the most aspired after programming skill sets, with JavaScript currently in the lead as a growing number of conventional applications move to web platforms. Web design encompasses many different skills and domains in the exhibition and supervision of websites, from ingenious design and scripting. Accessibility remains a rudimentary of any website development project, transpiring that websites are accessible by anyone, on any device, anywhere in the world.",
    shortDescription: "A web development event testing creativity and optimization skills.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "esprit decode",
    description:
      "The dawn of this century came with the advent of a new sport, competitive programming. This competition challenges participants' ability to produce optimized, efficient, scalable, and readable solutions to tricky questions in four highly challenging rounds. To excel at this competition, a person needs to have outstanding skills and knowledge about data structures and algorithms and either python or the javascript programming language. However, to enjoy this event, there are no such requirements. We have curated a diverse array of questions that challenge and force participants to think outside the box, some of which require little expertise while others require exceptionalism.",
    shortDescription: "A competitive programming event with four challenging rounds.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "suiveur",
    description: "This is a description for the fourth event.",
    shortDescription: "A brief description of the fourth event.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "polemos",
    description: "Minecraft UHC and BuildBattle are thrilling minigames that captivate players by fusing strategy and creativity. Bedwars challenges teams to protect their beds while launching daring offensives, while BuildBattle lets players unleash artistic prowess within Minecraft's blocky world. These games celebrate the core spirit of Minecraft and have thrived by fostering a sense of camaraderie and endless creativity. They're a testament to the game's enduring appeal, thriving thanks to a dedicated community that constantly innovates, creating a timeless blend of strategy, artistry, and shared fun.",
    shortDescription: "Minecraft minigames blending strategy, creativity, and teamwork.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "parabellum",
    description: "Dive into the electrifying world of esports at our premier gaming event. Immerse yourself in the realm of competitive gaming, where top-tier gamers clash in epic battles. Witness the latest gaming innovations, join discussions on the future of esports, and experience the thrill of victory and the agony of defeat in a dynamic fusion of skill, strategy, and adrenaline.",
    shortDescription: "An esports event showcasing skill, strategy, and adrenaline.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "lux veritas implica",
    description: "This is a description for the seventh event.",
    shortDescription: "A brief description of the seventh event.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "chroma",
    description: "This is a description for the sixth event.",
    shortDescription: "A brief description of the sixth event.",
    rules: <p>No specific rules provided for this event.</p>,
  },
  {
    name: "memesis",
    description: "This is a description for the seventh event.",
    shortDescription: "A brief description of the seventh event.",
    rules: <p>No specific rules provided for this event.</p>,
  },
];

const info_blocks = [
  {
    k: 1,
    head: "offline events will start on",
    subtext: "6th August, 2025",
  },
  {
    k: 2,
    head: "online events will start on",
    subtext: "3rd August, 2025",
  },
  {
    k: 3,
    head: "registrations from",
    subtext: "1st July - 20th July, 2025",
  },
  {
    k: 4,
    head: "number of events",
    subtext: "9 - 3 online + 6 offline",
  },
];

export { events, sitetitle, sitedesc, herotitle, herodesc, info_blocks };
