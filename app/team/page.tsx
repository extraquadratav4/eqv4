import { core_mem } from "@/utils/sitconf";
import NavBar from "@/components/nav";
import { TypewriterEffect } from "@/components/typewriter";
import { cn } from "@/lib/utils";

import Image from "next/image";

export default function TechfestTeam() {
  const words_head = [
    { text: "team", className: "md:text-6xl font-bold uppercase" },
    { text: "members", className: "md:text-6xl font-bold uppercase" },
  ];
  return (
    <section className="h-screen background-image bg-cover bg-center">
      <NavBar />
      <div className="output flex flex-col h-screen backdrop-brightness-50 font-mono animate-(--textflicker)">
        <div className="mt-5">
          <TypewriterEffect words={words_head} className="text-2xl md:text-6xl font-bold uppercase" cursorClassName="md:h-[3rem] md:w-[32px]" />
        </div>
        <div className="mt-5">
          <TypewriterEffect words={[{ text: "thecore", className: "text-xl md:text-4xl font-bold uppercase" }]} className="text-2xl md:text-6xl font-bold uppercase text-left" cursorClassName="md:h-[2rem] md:w-[32px]" />
        </div>
        <div className=" mt-10 grid md:grid-cols-2 gap-10">
          {core_mem.map((member, key) => (
            <div key={key}
              className={cn(
                "transition-all border p-5 shadow-2xl shadow-green-950/50 z-50"
              )}>
              <Image src={member.image} alt={member.name} height={200} width={200} className="" />
              <h2 className="mt-5 text-4xl font-bold">{member.name}</h2>
              <p className="text-lg">{member.role}</p>
              <p className="mt-5 text-sm">{member.profile}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="piece scanlines noclick"></div>
      <div className="piece glow noclick"></div>
    </section>
  )
}