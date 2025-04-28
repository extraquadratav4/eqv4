import { TypewriterEffect } from "@/components/typewriter";
import { cn } from "@/lib/utils";

import { events } from "@/utils/sitconf";

export default function EventList() {
  const eventdetailhead = [
    { text: "event", className: "text-2xl" },
    { text: "details", className: "text-2xl" },
  ]
  return (
    <section className="font-mono output min-h-screen bg-[#001408]">
      <div className="mt-5">
        <TypewriterEffect words={eventdetailhead} />
      </div>
      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {events.map((eventinf, key) =>
          <div 
            key={key} 
            className={cn(
              key % 3 == 0 ? "md:col-span-2 text-center" : "",
              key == 2 || key == 5 || key == 8 ? "text-right" : "",
              "transition-all border p-5 hover:border-4 shadow-2xl shadow-green-950/50 output"
            )}>
              <p className="font-bold text-2xl">{eventinf.name}</p>
              <p>{eventinf.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}