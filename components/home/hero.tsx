import { herotitle, herodesc } from "@/utils/sitconf";

export default function Hero() {
  return (
    <section className="h-screen background-image backdrop-brightness-50 bg-cover bg-center bg-[url('/static_final.jpg')]">
      <div className="flex flex-col items-center justify-center h-screen backdrop-brightness-50 font-mono animate-(--textflicker)">
        <h1 className="text-4xl font-bold uppercase">{herotitle}</h1>
        <p className="mt-4 text-lg text-center max-w-2xl">
          {herodesc}
        </p>
      </div>
    </section>
  );
}