import { TypewriterEffect } from "@/components/typewriter";
import { cn } from "@/lib/utils";

import { events } from "@/utils/sitconf";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import Link from "next/link";

export default function EventList() {
  const eventdetailhead = [
    { text: "event", className: "text-4xl" },
    { text: "details", className: "text-4xl" },
  ];

  return (
    <section
      className="font-mono flex flex-col justify-center output min-h-screen bg-[#001408]"
      id="events"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="mt-5">
          <TypewriterEffect words={eventdetailhead} />
        </div>
        <div className="mt-10 max-w-7xl grid md:grid-cols-2 gap-10">
          {events.map((eventinf, key) => (
            <div
              key={key}
              className={cn(
                key == 0 || key == 7 ? "md:col-span-2 text-center" : "",
                key == 2 || key == 4 || key == 6 ? "text-right" : "",
                "transition-all border p-5 shadow-2xl shadow-green-950/50",
              )}
            >
              <p className="font-bold text-4xl mb-1">{eventinf.name}</p>
              <p className="text-lg">{eventinf.shortDescription}</p>
              <Link
                href={`/register/${eventinf.slug}`}
                className="text-lg mx-5"
              >
                register
              </Link>
              <Drawer>
                <DrawerTrigger asChild className="mt-5">
                  <button className="hover:bg-green-950 px-4 py-2 border">
                    <span className="text-lg font-semibold">view rules</span>
                  </button>
                </DrawerTrigger>
                <DrawerContent className="font-mono text-sm">
                  <DrawerHeader>
                    <DrawerTitle className="text-4xl">
                      {eventinf.name}
                    </DrawerTitle>
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
          ))}
        </div>
      </div>
    </section>
  );
}
