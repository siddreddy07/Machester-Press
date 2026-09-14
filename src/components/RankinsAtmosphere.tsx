import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const RankinsAtmosphere: React.FC = () => {
  return (
    <section
      id="rankins-atmosphere"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 border-t-2 border-[#111111] overflow-hidden bg-[#F0ECE4]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Tag & Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#111111] pb-4 mb-6 sm:mb-8 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#91493B] font-mono-press font-bold mb-2">
              <span>ON RANKINS LANE</span>
              <span className="reg-crosshair text-[#111111] ml-2" />
            </div>
            <h2 className="font-condensed font-black text-[clamp(2.2rem,4.5vw,3.75rem)] text-[#111111] tracking-tight uppercase leading-none">
              Tucked Off Little Bourke.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-[#292725] max-w-md leading-relaxed font-sans">
            Down the cobblestone bend of Rankins Lane, past street art and exposed red brick,
            the former print warehouse opens into soaring ceilings, timber communal tables, and Melbourne's steady morning cadence.
          </p>
        </div>

        {/* Large Atmospheric Laneway Photography */}
        <div className="relative border-2 border-[#111111] overflow-hidden bg-[#292725] h-[48svh] sm:h-[58svh] lg:h-[66svh] group">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full relative"
          >
            <img
              src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1800&q=85"
              alt="Rankins Lane atmosphere outside Manchester Press with natural Melbourne laneway brickwork"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale-[4%] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Natural gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent pointer-events-none" />

            {/* Natural Location Badge */}
            <div className="absolute top-4 left-4 bg-[#111111] text-[#FAF9F5] text-[10px] uppercase font-mono-press font-bold tracking-[0.2em] px-3 py-1 flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#91493B]" />
              <span>8 RANKINS LANE · MELBOURNE</span>
            </div>

            {/* Bottom Info */}
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between text-[#FAF9F5] gap-4">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase font-mono-press tracking-[0.24em] text-[#AAA69E] block mb-1">
                  WALK-INS WELCOME · NO BOOKINGS NEEDED
                </span>
                <p className="font-condensed font-black text-2xl sm:text-4xl uppercase text-[#FAF9F5] tracking-tight">
                  Find the brick alley. Follow the coffee aroma.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
                target="_blank"
                rel="noreferrer noopener"
                className="min-h-[44px] inline-flex items-center space-x-2 bg-[#FAF9F5] text-[#111111] hover:bg-[#91493B] hover:text-[#FAF9F5] px-5 py-3 text-xs uppercase font-condensed font-bold tracking-[0.18em] transition-colors shrink-0 self-start sm:self-auto border-2 border-[#111111] focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
