const sitetitle = "Extraquadrata V4";
const sitedesc =
  "Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation. DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our very first annual tech meet up hosted by and for high schoolers which will be held on the 6th of August. Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies to people who crave to be";

const herotitle = "Extraquadrata V4";
const herodesc =
  "We are invigorated and thrilled to announce that our school, DPS Kolar, is hosting the Extra Quadrata Tech Fest on Wednesday, 6th of August 2025. Our event encompasses a diverse array of sub-events, ranging from gaming to programming.";

const events = [
  {
    name: "scio",
    slug: "scio",
    description:
      "Quizzing is an art form for people who find solace in perpetually striving to attain more knowledge about everything. Scio tests a person's level of knowledge about current affairs and general awareness related to IT, the history of companies, and their products. Along with that, it further challenges participants by adding another layer of complexity: teamwork. Along with being well-informed, to succeed in this event, participants ought to have a strong command of communication and coordination ",
    shortDescription:
      "A quiz event testing IT knowledge, teamwork, and general awareness.",
    rules: (
      <ul>
        <li>One team per school (2 members, Classes 8–12).</li>
        <li>2 rounds: prelims and main quiz (top 6 qualify).</li>
        <li>
          Topics: IT current affairs, tech giants, AI, retro tech (1970s–90s).
        </li>
        <li>Unfair means lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
  },
  {
    name: "site incroyable",
    slug: "site-incroyable",
    description:
      "Site Incroyable is a Web Development event where we test participants' masterships to create fast, efficient, optimized, and spellbinding websites. Web development languages are among the most aspired after programming skill sets, with JavaScript currently in the lead as a growing number of conventional applications move to web platforms. Web design encompasses many different skills and domains in the exhibition and supervision of websites, from ingenious design and scripting. Accessibility remains a rudimentary of any website development project, transpiring that websites are accessible by anyone, on any device, anywhere in the world.",
    shortDescription:
      "A web development event testing creativity and optimization skills.",
    rules: (
      <ul>
        <li>One team per school (2 members, Classes 9–12).</li>
        <li>
          Build a website and presentation on a given topic during the event.
        </li>
        <li>
          Any tech stack allowed; templates and AI tools (except autonomous
          agents) permitted.
        </li>
        <li>
          Judged on creativity, presentation, relevance, performance, and
          design.
        </li>
        <li>Unfair means lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
  },
  {
    name: "esprit decode",
    slug: "esprit-decode",
    description:
      "The dawn of this century came with the advent of a new sport, competitive programming. This competition challenges participants' ability to produce optimized, efficient, scalable, and readable solutions to tricky questions in four highly challenging rounds. To excel at this competition, a person needs to have outstanding skills and knowledge about data structures and algorithms and either python or the javascript programming language. However, to enjoy this event, there are no such requirements. We have curated a diverse array of questions that challenge and force participants to think outside the box, some of which require little expertise while others require exceptionalism.",
    shortDescription:
      "A competitive programming event with four challenging rounds.",
    rules: (
      <ul>
        <li>One team per school (2 members, Classes 9–12).</li>
        <li>2 parts: problem-solving and debugging rounds.</li>
        <li>No AI tools or internet; only official docs allowed.</li>
        <li>Languages: Python3, C++ (ISO23), Java24.</li>
        <li>Judged on code quality, test cases, logic, and efficiency.</li>
        <li>Unfair means lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
  },
  {
    name: "suiveur",
    slug: "suiveur",
    description: "Race showdown of line follower robots",
    shortDescription: "Race showdown of line follower robots",
    rules: (
      <ul>
        <li>One team per school (2–3 members, Classes 9–12).</li>
        <li>
          Bring a pre-built line follower robot; knockout races on event day.
        </li>
        <li>Brackets decided on the spot.</li>
        <li>No external control or shortcuts; bring your own equipment.</li>
        <li>Unfair means lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
  },
  {
    name: "polemos",
    slug: "polemos",
    description:
      "Minecraft UHC and BuildBattle are thrilling minigames that captivate players by fusing strategy and creativity. Bedwars challenges teams to protect their beds while launching daring offensives, while BuildBattle lets players unleash artistic prowess within Minecraft's blocky world. These games celebrate the core spirit of Minecraft and have thrived by fostering a sense of camaraderie and endless creativity. They're a testament to the game's enduring appeal, thriving thanks to a dedicated community that constantly innovates, creating a timeless blend of strategy, artistry, and shared fun.",
    shortDescription:
      "Minecraft minigames blending strategy, creativity, and teamwork.",
    rules: (
      <ul>
        <li>One team per school (2 members, Classes 6–8).</li>
        <li>2 phases: UHC and BedWars; participation in both required.</li>
        <li>Any Minecraft Java client allowed (version 1.8.9).</li>
        <li>
          Build Battle: submit a ≤4 min MP4 video with commentary by 30th July;
          original builds only.
        </li>
        <li>No hacked clients; plagiarism leads to disqualification.</li>
        <li>Further details on Discord.</li>
      </ul>
    ),
  },
  {
    name: "lux veritas implicas",
    slug: "lux-veritas-imlica",
    description: "Online scavanger and cryptic hunt.",
    shortDescription: "Online scavanger and cryptic hunt.",
    rules: (
      <ul>
        <li>Open to all; multiple participants per school (Classes 6–12).</li>
        <li>Online scavenger hunt with cryptic clues.</li>
        <li>Fastest to solve all clues wins.</li>
        <li>Unfair means will lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
  },
  {
    name: "chroma",
    slug: "chroma",
    description: "Social media management competiton.",
    shortDescription:
      "A competition on how can make the best social media page with details given on-spot with random attributes.",
    rules: (
      <ul>
        <li>One participant per school (Classes 9–12).</li>
        <li>Pick a topic from provided options.</li>
        <li>
          Create 4 social media posts, a profile picture, bio, and hashtags.
        </li>
      </ul>
    ),
  },
  {
    name: "memesis",
    slug: "memesis",
    description: "AI-gen meme making competition.",
    shortDescription:
      "A competition where participants are expected to generate quality memes using AI tools on the given specifics on-spot.",
    rules: (
      <ul>
        <li>One team per school (2 members, Classes 5–6).</li>
        <li>Create original memes on given topics; AI tools allowed.</li>
        <li>Can use Canva or AI meme generators.</li>
        <li>Judged on creativity, relevance, humor, and design.</li>
        <li>Plagiarism or unfair means lead to disqualification.</li>
        <li>Committee decisions are final.</li>
      </ul>
    ),
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

const core_mem = [
  {
    name: "Varad Sharma",
    role: "Head",
    profile:
      "Varad is an enthusiastic supporter of Free and open source software (FOSS), using and contributing to Linux. A VIM user, an upcoming programmer, and a web developer, he believes that 'Vim was the best thing created by mankind'",
    image: "/favicon.svg",
  },
  {
    name: "Aarush Shrivastava",
    role: "Head",
    profile:
      "Aarush Shrivastava is an enterprising 9th grader. He is a curious quizzer, and a true technology connoisseur. He is fond of Mathematics, Artificial Intelligence, and Economics. When he’s free, you can find him gaming or playing chess. He takes a great interest in debating, understanding foreign relations and getting to know about the latest happenings of the world. He is associated with the school’s ATL and aspires to make an Artificially Intelligent robot this year.",
    image: "/favicon.svg",
  },
];

const team_leads = [
  {
    name: "Aarush Shrivastava",
    role: "Scio",
    profile:
      "Aarush is an enterprising 9th grader. He is a curious quizzer, and a true technology connoisseur. He is fond of Mathematics, Artificial Intelligence, and Economics. When he’s free, you can find him gaming or playing chess. He takes a great interest in debating, understanding foreign relations and getting to know about the latest happenings of the world. He is associated with the school’s ATL and aspires to make an Artificially Intelligent robot this year.",
    image: "/favicon.svg",
  },
  {
    name: "Varad Sharma",
    role: "Esprit Decode, Site Incroyable",
    profile:
      "Varad is an enthusiastic supporter of Free and open source software (FOSS), using and contributing to Linux. A VIM user, an upcoming programmer, and a web developer, he believes that 'Vim was the best thing created by mankind'",
    image: "/favicon.svg",
  },
  {
    name: "Anshuman Pandey",
    role: "Polemos",
    profile: ".",
    image: "/favicon.svg",
  },
];

const event_mem = [
  {
    name: "Anshuman Pandey",
    role: "Event 1",
    profile: ".",
    image: "/favicon.svg",
  },
];

const alumini = [
  {
    name: "Dhairya Garg",
    role: "Alumini",
    profile: ".",
    image: "/favicon.svg",
  },
  {
    name: "Om Pratap Dhakar",
    role: "Alumini",
    profile: ".",
    image: "/favicon.svg",
  },
];

export {
  events,
  sitetitle,
  sitedesc,
  herotitle,
  herodesc,
  info_blocks,
  core_mem,
  team_leads,
  event_mem,
  alumini,
};
