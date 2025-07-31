const sitetitle = "Extraquadrata V4";
const sitedesc =
  "Technology like art is a soaring exercise of the human imagination.” To be steady with our motion of development, it is vital for the youth to grasp every facet of technology and innovation. DPS Kolar Road has taken an initiative to contribute to this field. Extraquadrata would be our fourth annual tech meet up hosted by and for high schoolers which will be held on the 6th of August. Our competitions would test the participant’s creativity and logical thinking to response time and sheer skill for tech savvies to people who crave to be";

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
    name: "lux captis",
    slug: "lux-captis",
    description:
      "Embark on a visual journey through the lens at our exclusive photography event. Elevate your appreciation of the art as we showcase the works of renowned photographers, explore cutting-edge techniques, and engage in thought-provoking discussions on visual storytelling. A harmonious convergence of artistry, innovation, and inspiration awaits.",
    shortDescription: "Photography event.",
    rules: (
      <ul>
        <li>Judged on creativity, composition, and storytelling.</li>
        <li>The theme will be provided on the spot.</li>
        <li>
          Each participant has to send 2 photographs: 1 photograph for each
          theme.
        </li>
        <li>Participants have to attach their raw image(if any).</li>
        <li>
          Participants need to provide the Exif(Exchangeable Image File Format)
          details along with each of their entries.
        </li>
        <li>
          Any type of Manipulation is not allowed; however, basic
          post-processing will be considered.
        </li>
        <li>
          Participants may bring their own computers to run basic edits(at their
          own risk).
        </li>
        <li>The format for the photographs to be submitted in .jpeg.</li>
      </ul>
    ),
  },
  {
    name: "chroma",
    slug: "chroma",
    description:
      "A competition on how can make the best social media page with details given on-spot with random attributes.",
    shortDescription: "Social media management competiton.",
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
    head: "event will start on",
    subtext: "6th August, 2025",
  },
  {
    k: 2,
    head: "registrations from",
    subtext: "1st July - 30th July, 2025",
  },
  {
    k: 3,
    head: "number of events",
    subtext: "6 (in-person)",
  },
];

const core_mem = [
  {
    name: "Varad Sharma",
    role: "CyberDirector Student Council'25",
    profile: "",
    image: "/favicon.svg",
  },
  {
    name: "Aarush Shrivastava",
    role: "TechClub President",
    profile: "",
    image: "/favicon.svg",
  },
];

const team_leads = [
  {
    name: "Akshada Prajapati",
    role: "Chroma",
    profile:
      "Meet Akshda Prajapati, a spirited 11th grader and the powerhouse team lead behind Chroma at Extraquadrata! With a love for books, a deep curiosity for psychology, and the occasional doom scroll detour, Akshda brings both heart and insight to the table. She’s not one to flaunt achievements—yet—but her leadership, calm energy, and eye for detail are already making waves. With Akshda at the helm, Chroma is more than just an event—it’s a perfectly-coded experience in the making.",
    image: "/akshada.jpg",
  },
  {
    name: "Anshuman Pandey",
    role: "EspritDecode",
    profile: "",
    image: "/favicon.svg",
  },
];

const event_mem = [
  {
    name: "",
    role: "",
    profile: "",
    image: "/favicon.svg",
  },
];

const alumini = [
  {
    name: "Dhairya Garg",
    role: "CyberDirector'23",
    profile: "",
    image: "/favicon.svg",
  },
  {
    name: "Shreshth Verma",
    role: "CyberDirector'22",
    profile: "",
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
