import { TypewriterEffect } from "@/components/typewriter";
import { cn } from "@/lib/utils";

import { events } from "@/utils/sitconf";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";

export default function EventList() {
  const eventdetailhead = [
    { text: "event", className: "text-4xl" },
    { text: "details", className: "text-4xl" },
  ]

  return (
    <section className="font-mono flex flex-col justify-center output min-h-screen bg-[#001408]">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5">
          <TypewriterEffect words={eventdetailhead} />
        </div>
        <div className="mt-10 max-w-7xl grid md:grid-cols-2 gap-10">
          {events.map((eventinf, key) =>
            <div
              key={key}
              className={cn(
                key % 3 == 0 ? "md:col-span-2 text-center" : "",
                key == 2 || key == 5 || key == 8 ? "text-right" : "",
                "transition-all border p-5 shadow-2xl shadow-green-950/50"
              )}>
              <p className="font-bold text-4xl mb-1">{eventinf.name}</p>
              <p className="text-lg">{eventinf.shortDescription}</p>
              <Drawer>
                <DrawerTrigger asChild className="mt-5">
                  <button className="hover:bg-green-950 px-4 py-2 border">
                    <span className="text-lg font-semibold">View Rules</span>
                  </button>
                </DrawerTrigger>
                <DrawerContent className="font-mono text-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-5xl">{eventinf.name}</DrawerTitle>
                    <DrawerDescription>
                      {eventinf.description}
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 text-sm">
                    <div className="mt-2">{eventinf.rules}</div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}