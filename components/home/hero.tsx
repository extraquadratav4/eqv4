import { herodesc } from "@/utils/sitconf";
import NavBar from "../nav";
import { TypewriterEffect } from "../typewriter";

export default function Hero() {
  const words_head = [
    { text: "Extraquadrata", className: "text-8xl font-bold uppercase" },
    { text: "V4", className: "text-8xl font-bold uppercase" },
  ]
  return (
    // <section className="h-screen background-image backdrop-brightness-50 bg-cover bg-center bg-[url('/static_final.jpg')]">
    <section className="h-screen background-image bg-cover bg-center">
      <div className="piece output flex flex-col items-center justify-center h-screen backdrop-brightness-50 font-mono animate-(--textflicker)">
        <NavBar />
        {/* <h1 className="text-8xl font-bold uppercase">{herotitle}</h1> */}
        <TypewriterEffect words={words_head} className="text-8xl font-bold uppercase" cursorClassName="hidden" />
        <p className="mt-4 text-lg text-center max-w-2xl">
          {herodesc}
        </p>
      </div>
      <div className="piece scanlines noclick"></div>
      <div className="piece glow noclick"></div>
    </section>
  );
}