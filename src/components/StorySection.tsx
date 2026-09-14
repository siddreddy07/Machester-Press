import React from "react";
import { motion } from "motion/react";

export const StorySection: React.FC = () => {
  return (
    <section
      id="story"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 border-t-2 border-[#111111] bg-[#FAF9F5] text-[#111111] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3 mb-8 sm:mb-12 text-[11px] font-mono-press font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center space-x-2">
            <span className="text-[#91493B]">ON RANKINS LANE</span>
            <span className="text-[#AAA69E]">/</span>
            <span>MELBOURNE CBD</span>
          </div>
          <div className="flex items-center space-x-2 text-[#AAA69E]">
            <span className="hidden sm:inline">FORMER PRINTING WAREHOUSE</span>
            <span className="reg-crosshair text-[#111111]" />
          </div>
        </div>

        {/* Dynamic Grid: Bold Graphic Editorial + Layered Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <span className="font-script font-bold text-2xl sm:text-3xl text-[#91493B] block mb-1">
                From Print to Pour
              </span>
              <h2 className="font-condensed font-black text-[clamp(2.5rem,5.5vw,4.5rem)] text-[#111111] uppercase tracking-tight leading-[0.92]">
                Industrial Bones.
                <br />
                <span className="text-[#91493B]">Laneway Soul.</span>
              </h2>

              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#292725] leading-relaxed font-sans">
                <p>
                  Before it filled with the scent of boiled dough and freshly pulled espresso,
                  8 Rankins Lane was home to heavy industrial presses, mechanical rollers, and paper stock.
                  The thick red brick, exposed rafters, and generous proportions were built for physical production.
                </p>
                <p>
                  Today, that print-house heritage remains the foundation of Manchester Press.
                  We preserved the weathered timber communal tables, raw brick surfaces, and laneway intimacy—transforming
                  the warehouse into an independent Melbourne staple where good coffee, generous food, and unhurried mornings converge.
                </p>
              </div>
            </div>

            {/* Warehouse Details */}
            <div className="mt-8 pt-6 border-t-2 border-[#111111] grid grid-cols-2 gap-4 text-xs font-mono-press uppercase">
              <div>
                <span className="text-[#AAA69E] block mb-1">THE WAREHOUSE</span>
                <span className="font-bold text-[#111111]">EXPOSED BRICK & RAFTERS</span>
              </div>
              <div>
                <span className="text-[#AAA69E] block mb-1">SEATING</span>
                <span className="font-bold text-[#91493B]">COMMUNAL WALK-INS</span>
              </div>
            </div>
          </motion.div>

          {/* Photography Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="relative border-2 border-[#111111] bg-[#292725] overflow-hidden aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1600&q=85"
                alt="Manchester Press communal tables and exposed industrial brick"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center grayscale-[5%] contrast-[1.03]"
              />

              <div className="absolute bottom-3 left-3 bg-[#111111] text-[#FAF9F5] text-[10px] uppercase font-mono-press font-bold tracking-[0.2em] px-3 py-1">
                8 Rankins Lane · Melbourne
              </div>
            </div>

            {/* Inset Box */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#F0ECE4] border-2 border-[#111111] p-4 max-w-xs shadow-md">
              <div className="flex items-center justify-between text-[9.5px] font-mono-press uppercase tracking-[0.16em] text-[#AAA69E] mb-1">
                <span>EST. 2011</span>
                <span className="text-[#91493B]">8 RANKINS LANE</span>
              </div>
              <p className="font-condensed font-black text-xl text-[#111111] uppercase tracking-tight leading-tight">
                No bookings needed. Walk in anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
