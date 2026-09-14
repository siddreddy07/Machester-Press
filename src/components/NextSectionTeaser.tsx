import React from "react";
import { motion } from "motion/react";

export const NextSectionTeaser: React.FC = () => {
  return (
    <section
      id="next-section"
      className="relative max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 pt-16 sm:pt-24 pb-20 overflow-hidden"
    >
      {/* Top Hairline Divider & Registration Notation */}
      <div className="border-t border-[#CDC6BA] pt-6 mb-10 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#72705A]">
        <div className="flex items-center space-x-3">
          <span className="font-mono-press font-semibold text-[#8A4E3C]">01</span>
          <span className="text-[#CDC6BA]">/</span>
          <span className="text-[#171717] font-medium tracking-[0.2em]">
            THE FORMER PRESS ROOM
          </span>
        </div>
        <span className="hidden sm:inline font-mono-press text-[10px] text-[#72705A]">
          EST. PRINT HOUSE HERITAGE
        </span>
      </div>

      {/* Editorial Teaser Headline */}
      <div className="grid grid-cols-12 gap-6 sm:gap-10 mb-12">
        <div className="col-span-12 lg:col-span-8">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#171717] leading-[1.12] tracking-tight">
            Tucked deep into Rankins Lane, a former printing warehouse reborn around wood-fired bagels and Melbourne coffee culture.
          </h2>
        </div>
        <div className="col-span-12 lg:col-span-4 flex flex-col justify-end">
          <p className="text-sm sm:text-base text-[#343331] leading-relaxed max-w-md">
            Before the espresso machines and toasted poppyseeds, these brick walls held the rhythm of industrial presses. Today, the ink has settled, making way for tactile morning rituals and Melbourne laneway life.
          </p>
        </div>
      </div>

      {/* Visual Peek: Top Edge of Next Photography Frame (Disciplined glimpse without gradients) */}
      <div className="relative h-40 sm:h-52 md:h-64 overflow-hidden border border-[#CDC6BA] bg-[#CDC6BA]/20">
        <img
          src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1600&q=85"
          alt="Barista pulling an espresso shot in Manchester Press warehouse"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top filter grayscale-[10%]"
        />
        <div className="absolute bottom-3 left-3 text-[10px] uppercase font-mono-press tracking-[0.2em] text-[#171717] bg-[#F3EFE6] px-3 py-1 border border-[#CDC6BA]">
          08 Rankins Lane — Melbourne
        </div>
      </div>
    </section>
  );
};
