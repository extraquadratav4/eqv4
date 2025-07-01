import { events } from "@/utils/sitconf";
import { cn } from "@/lib/utils";
import Link from "next/link";
import NavBar from "@/components/nav";
import { TypewriterEffect } from "@/components/typewriter";

export default function Register() {
  const words_head = [
    { text: "register", className: "md:text-4xl font-bold uppercase" },
    { text: "for", className: "md:text-4xl font-bold uppercase" },
    { text: "events", className: "md:text-4xl font-bold uppercase" },
  ];
  return (
    <section className="h-screen background-image bg-cover bg-center">
      <NavBar />
      <div className="piece output flex flex-col h-screen backdrop-brightness-50 font-mono animate-(--textflicker)">
        <div className="mt-5">
          <TypewriterEffect
            words={words_head}
            className="text-2xl md:text-4xl font-bold uppercase"
            cursorClassName="md:h-[2rem] md:w-[32px]"
          />
        </div>
        <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2 gap-10">
          {events.map((event, key) => (
            <div
              key={key}
              className={cn(
                key % 3 == 0 ? "md:col-span-2 text-center" : "",
                key == 2 || key == 5 || key == 8 ? "text-right" : "",
                "transition border p-5 shadow-2xl shadow-green-950/50",
              )}
            >
              <h2 className="text-4xl font-bold">{event.name}</h2>
              <p className="text-lg">{event.shortDescription}</p>
              <Link href={`/register/${event.slug}`} className="transition">
                register
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
