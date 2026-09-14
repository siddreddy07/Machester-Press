import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenVisit?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToBagels = () => {
    const el = document.getElementById("house-favourites");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-20 sm:pt-24 md:pt-26 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 max-w-[1440px] mx-auto overflow-hidden bg-[#F0ECE4]"
    >
      {/* Top Header Bar: Location, Coordinates, Service hours */}
      <motion.div
        id="hero-print-bar"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center justify-between border-b-2 border-[#111111] pb-2 mb-6 sm:mb-8 text-[11px] uppercase font-mono-press font-bold tracking-[0.16em] text-[#292725]"
      >
        <div className="flex items-center space-x-3">
          <span className="reg-crosshair text-[#111111]" />
          <span className="text-[#111111]">8 RANKINS LANE</span>
          <span className="text-[#C9C3B8]">/</span>
          <span className="text-[#91493B]">MELBOURNE VIC 3000</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <span className="text-[#AAA69E]">WALK-INS WELCOME</span>
          {/* Subtle color squares */}
          <div className="flex items-center space-x-1" aria-hidden="true">
            <span className="w-2.5 h-2.5 bg-[#111111] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#91493B] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#6F3C43] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#9A744E] inline-block" />
          </div>
          <span className="text-[#111111]">OPEN DAILY UNTIL 16:00</span>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* DESKTOP & TABLET EDITORIAL HERO                                           */}
      {/* ========================================================================= */}
      <div className="hidden md:block relative">
        {/* Large Warehouse / Laneway Interior Image */}
        <div className="grid grid-cols-12 gap-6 items-start">
          <motion.div
            id="hero-large-warehouse-container"
            initial={{ opacity: 0, clipPath: "inset(0% 100% 0% 0%)" }}
            animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-9 relative border-2 border-[#111111] overflow-hidden bg-[#292725] h-[46svh] lg:h-[52svh] group"
          >
            <img
              id="hero-warehouse-image"
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1800&q=85"
              alt="Manchester Press former printing warehouse with high ceilings, exposed brick, and communal tables"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale-[6%] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            {/* Natural Location Tag */}
            <div className="absolute top-3 left-3 bg-[#111111] text-[#FAF9F5] text-[10px] uppercase font-mono-press font-bold tracking-[0.2em] px-2.5 py-1 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-[#91493B]" />
              <span>8 RANKINS LANE · MELBOURNE</span>
            </div>

            {/* Bottom-right caption */}
            <div className="absolute bottom-3 right-3 bg-[#111111]/85 text-[#FAF9F5] text-[10px] uppercase font-sans tracking-[0.16em] px-2.5 py-1">
              Communal Seating · Walk-ins Welcome
            </div>
          </motion.div>

          {/* Right Column: Daily Baking & Hours */}
          <div className="hidden lg:flex lg:col-span-3 flex-col justify-between h-[52svh] border-y-2 lg:border-y-0 lg:border-l-2 border-[#111111] pl-6 py-2">
            <div>
              <span className="text-[10px] uppercase font-mono-press font-bold text-[#91493B] tracking-[0.22em] block mb-2">
                FRESH DAILY
              </span>
              <h3 className="font-condensed font-extrabold text-2xl uppercase tracking-tight text-[#111111] leading-tight">
                Boiled In-House. Pulled Fresh.
              </h3>
              <p className="mt-3 text-xs text-[#292725] leading-relaxed font-sans">
                Melbourne's original warehouse bagel destination. Freshly rolled dough, kettle-boiled and baked each morning, served alongside seasonal single origins from 5 Senses.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#C9C3B8]">
              <div className="flex justify-between text-xs font-mono-press">
                <span className="text-[#AAA69E]">MON — FRI</span>
                <span className="font-bold text-[#111111]">07:00 — 16:00</span>
              </div>
              <div className="flex justify-between text-xs font-mono-press">
                <span className="text-[#AAA69E]">SAT — SUN</span>
                <span className="font-bold text-[#111111]">08:00 — 16:00</span>
              </div>
              <div className="flex justify-between text-[11px] font-mono-press text-[#91493B] font-bold pt-1 border-t border-[#C9C3B8]">
                <span>KITCHEN ORDERS</span>
                <span>UNTIL 15:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Row: Asymmetric Bold Typography Block & Overlapping Bagel Photo */}
        <div className="grid grid-cols-12 gap-6 items-end mt-8 sm:mt-10 pt-6 border-t-2 border-[#111111] relative">
          {/* Bold Typography Block */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Distinctive Brush Subtitle */}
              <div className="flex items-center space-x-3 mb-1">
                <span className="font-script font-bold text-2xl sm:text-3xl text-[#91493B]">
                  Melbourne Laneway Café
                </span>
                <span className="h-[2px] w-8 bg-[#91493B]" />
              </div>

              {/* Massive Condensed Display Heading */}
              <h1
                id="hero-main-title"
                className="font-condensed font-black uppercase text-[clamp(2.75rem,6.2vw,5.5rem)] text-[#111111] tracking-tight leading-[0.92]"
              >
                Coffee. Bagels.
                <br />
                <span className="text-[#91493B]">Rankins Lane.</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base text-[#292725] max-w-lg leading-relaxed font-sans">
                Tucked down the narrow brick bends off Little Bourke Street. Raw industrial warehouse character, communal timber tables, and Melbourne's benchmark bagel board.
              </p>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  id="hero-view-bagels-btn"
                  onClick={scrollToBagels}
                  className="min-h-[44px] inline-flex items-center space-x-2 bg-[#111111] text-[#FAF9F5] hover:bg-[#91493B] px-6 py-3 text-xs uppercase font-condensed font-bold tracking-[0.18em] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                >
                  <span>Explore House Bagels</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  id="hero-view-menu-btn"
                  onClick={scrollToMenu}
                  className="min-h-[44px] inline-flex items-center space-x-2 bg-[#FAF9F5] border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-[#FAF9F5] px-6 py-3 text-xs uppercase font-condensed font-bold tracking-[0.18em] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                >
                  <span>Our Menu</span>
                </button>

                <a
                  id="hero-maps-btn"
                  href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="min-h-[44px] inline-flex items-center space-x-1.5 text-[#111111] hover:text-[#91493B] px-4 py-3 text-xs uppercase font-condensed font-bold tracking-[0.16em] transition-colors focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                >
                  <span>8 Rankins Lane</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Overlapping Bagel Craft Image */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative -mt-16 xl:-mt-24 border-2 border-[#111111] bg-[#FAF9F5] p-2 shadow-sm group"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#292725]">
                <img
                  id="hero-bagel-accent-image"
                  src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1200&q=85"
                  alt="Manchester Press signature house-cured trout bagel with dill cream cheese"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale-[4%] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 bg-[#91493B] text-[#FAF9F5] text-[9.5px] uppercase font-mono-press font-bold tracking-[0.2em] px-2 py-0.5">
                  HOUSE SIGNATURE
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="pt-2 px-1 flex items-center justify-between text-[10.5px] font-mono-press uppercase tracking-[0.14em] text-[#111111]">
                <span className="font-bold">The Classic Lox</span>
                <span className="text-[#AAA69E]">Boiled Daily</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE EDITORIAL HERO                                                     */}
      {/* ========================================================================= */}
      <div className="block md:hidden space-y-5">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-script font-bold text-2xl text-[#91493B]">
              Melbourne Laneway Café
            </span>
          </div>

          <h1 className="font-condensed font-black uppercase text-[2.85rem] text-[#111111] tracking-tight leading-[0.92]">
            Coffee. Bagels.
            <br />
            <span className="text-[#91493B]">Rankins Lane.</span>
          </h1>

          <p className="mt-3 text-xs text-[#292725] leading-relaxed font-sans">
            Melbourne's original warehouse bagel destination. Kettle-boiled bagels, specialty coffee, and exposed brick tucked off Little Bourke Street.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5 pt-2">
          <button
            onClick={scrollToBagels}
            className="min-h-[44px] w-full flex items-center justify-center space-x-2 bg-[#111111] text-[#FAF9F5] py-3 text-xs uppercase font-condensed font-bold tracking-[0.18em]"
          >
            <span>Explore House Bagels</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          <a
            href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
            target="_blank"
            rel="noreferrer noopener"
            className="min-h-[44px] w-full flex items-center justify-center space-x-1.5 border-2 border-[#111111] bg-[#FAF9F5] text-[#111111] py-3 text-xs uppercase font-condensed font-bold tracking-[0.16em]"
          >
            <span>Find Us: 8 Rankins Lane</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
          </a>
        </div>

        {/* Staggered Mobile Images */}
        <div className="grid grid-cols-2 gap-3 pt-3">
          <div className="relative border-2 border-[#111111] overflow-hidden aspect-[3/4] bg-[#292725]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=85"
              alt="Manchester Press warehouse interior"
              className="w-full h-full object-cover grayscale-[6%]"
            />
            <div className="absolute bottom-2 left-2 bg-[#111111] text-[#FAF9F5] text-[9px] uppercase font-mono-press px-1.5 py-0.5">
              Inside
            </div>
          </div>

          <div className="relative border-2 border-[#111111] overflow-hidden aspect-[3/4] bg-[#292725]">
            <img
              src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=900&q=85"
              alt="House bagel with cured trout"
              className="w-full h-full object-cover grayscale-[4%]"
            />
            <div className="absolute bottom-2 left-2 bg-[#91493B] text-[#FAF9F5] text-[9px] uppercase font-mono-press px-1.5 py-0.5">
              Fresh Bagels
            </div>
          </div>
        </div>

        {/* Mobile Hours Footnote */}
        <div className="flex items-center justify-between text-[10.5px] font-mono-press uppercase tracking-[0.14em] text-[#AAA69E] pt-2 border-t border-[#C9C3B8]">
          <span>Mon–Sun 7/8am–4pm</span>
          <span className="text-[#91493B]">Kitchen until 3pm</span>
        </div>
      </div>
    </section>
  );
};
