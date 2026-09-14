import React from "react";

export const PrintIdentityStrip: React.FC = () => {
  const printSequence = [
    "MANCHESTER PRESS",
    "8 RANKINS LANE",
    "MELBOURNE",
    "HOUSE-BOILED BAGELS",
    "SPECIALTY COFFEE",
    "COMMUNAL TABLES",
    "EST. 2011",
  ];

  return (
    <section
      id="print-identity-strip"
      className="relative py-8 sm:py-12 border-y-2 border-[#111111] bg-[#292725] text-[#FAF9F5] overflow-hidden select-none"
    >
      {/* Top Ledger: Clear location and offerings */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 mb-4 flex items-center justify-between text-[10.5px] uppercase font-mono-press tracking-[0.22em] text-[#AAA69E]">
        <div className="flex items-center space-x-2">
          <span className="reg-crosshair text-[#FAF9F5]" />
          <span className="text-[#FAF9F5]">8 RANKINS LANE</span>
          <span className="text-[#6F3C43]">/</span>
          <span>MELBOURNE CBD</span>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-[#91493B]">SPECIALTY COFFEE & BAGELS</span>
          <span className="hidden sm:inline text-[#FAF9F5]/30">/</span>
          <span className="hidden sm:inline">WALK-INS WELCOME</span>
        </div>
      </div>

      {/* Slow typographic marquee strip */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex shrink-0 animate-marquee items-center text-[#FAF9F5]">
          {printSequence.map((word, i) => (
            <div key={i} className="flex items-center">
              <span className="font-condensed font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase px-5 sm:px-8">
                {word}
              </span>
              <span className="text-[#91493B] font-mono-press text-2xl sm:text-4xl font-bold">
                /
              </span>
            </div>
          ))}
        </div>

        <div className="flex shrink-0 animate-marquee items-center text-[#FAF9F5]" aria-hidden="true">
          {printSequence.map((word, i) => (
            <div key={`dup-${i}`} className="flex items-center">
              <span className="font-condensed font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight uppercase px-5 sm:px-8">
                {word}
              </span>
              <span className="text-[#91493B] font-mono-press text-2xl sm:text-4xl font-bold">
                /
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom technical rule */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12 mt-4 flex items-center justify-between text-[10px] font-mono-press text-[#AAA69E] uppercase tracking-[0.2em] pt-3 border-t border-[#FAF9F5]/20">
        <div className="flex items-center space-x-3">
          <span className="w-2 h-2 bg-[#91493B]" />
          <span>KETTLE BOILED & BAKED DAILY</span>
        </div>
        <div className="flex items-center space-x-3">
          <span>NO BOOKINGS NEEDED</span>
          <span className="reg-crosshair text-[#FAF9F5]" />
        </div>
      </div>
    </section>
  );
};
