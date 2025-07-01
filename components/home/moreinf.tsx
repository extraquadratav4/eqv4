import { info_blocks } from "@/utils/sitconf";
import { cn } from "@/lib/utils";

export default function MoreInfo() {
  
  return (
    <section className="flex justify-center">
      <div className="md:mt-16 md:mb-16 flex flex-col md:flex-row gap-10 max-w-5xl justify-center">
        {/* info block */}
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          {info_blocks.map((info, key) =>
            <div key={key} className={cn(key == 2 ? "col-span-2" : "" ,"font-mono output m-5 shadow-2xl shadow-green-950/50")}>
              <p className="text-lg mb-5">{info.head}</p>
              <p className="font-bold text-2xl md:text-3xl">{info.subtext}</p>
              <div className="scanlines-txt noclick"></div>
            </div>
          )}
        </div>

        {/* map snipper + brochure */}
        <div className="flex mb-5 justify-center content-center align-middle">
          <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3422716734694!2d77.39607657437197!3d23.15770481127364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c44a073baa9e9%3A0x631bb328a32d81f4!2sDelhi%20Public%20School%20Kolar%20Road%2C%20Bhopal!5e0!3m2!1sen!2sin!4v1745810413456!5m2!1sen!2sin" width="400" height="500" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-5 rounded"></iframe></div>
        </div>
      </div>
    </section>
  )
}