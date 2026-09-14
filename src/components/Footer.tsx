import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#111111] text-[#FAF9F5] pt-16 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 border-t-2 border-[#111111] relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Ledger: Location and Calibration */}
        <div className="flex items-center justify-between border-b border-[#33312E] pb-4 mb-10 text-[11px] font-mono-press uppercase tracking-[0.2em] text-[#AAA69E]">
          <div className="flex items-center space-x-3">
            <span className="reg-crosshair text-[#FAF9F5]" />
            <span className="text-[#FAF9F5]">8 RANKINS LANE</span>
            <span className="text-[#33312E]">/</span>
            <span className="text-[#91493B]">MELBOURNE VIC 3000</span>
          </div>

          <div className="flex items-center space-x-1" aria-hidden="true">
            <span className="w-2.5 h-2.5 bg-[#FAF9F5] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#91493B] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#6F3C43] inline-block" />
            <span className="w-2.5 h-2.5 bg-[#9A744E] inline-block" />
          </div>
        </div>

        {/* Massive Graphic Manchester Press Block */}
        <motion.div
          id="footer-wordmark-block"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="my-6 sm:my-10"
        >
          {/* Handwritten Brush "Manchester" */}
          <span
            className="font-script text-[clamp(4.5rem,14vw,11rem)] text-[#FAF9F5] leading-[0.82] block transform -rotate-1 select-none font-bold"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Manchester
          </span>

          {/* Bold Graphic Condensed "PRESS" */}
          <span className="font-condensed font-black uppercase text-[clamp(3.5rem,12vw,9.5rem)] tracking-tight text-[#FAF9F5] block leading-[0.88] mt-1">
            PRESS
          </span>
        </motion.div>

        {/* Info Grid: Address, Hours, Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t-2 border-[#FAF9F5] mt-8 sm:mt-12 items-start">
          {/* Location Block */}
          <div className="md:col-span-5 font-mono-press">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#91493B] block mb-2 font-bold">
              LOCATION
            </span>
            <p className="font-condensed font-black text-2xl sm:text-3xl text-[#FAF9F5] uppercase tracking-tight">
              8 Rankins Lane
            </p>
            <p className="text-base text-[#AAA69E] mt-0.5">
              Melbourne CBD, Victoria 3000
            </p>
            <p className="text-xs text-[#7A7670] mt-2 font-sans">
              Off Little Bourke St, between Elizabeth & Queen
            </p>
          </div>

          {/* Hours Block */}
          <div className="md:col-span-4 font-mono-press text-xs">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#91493B] block mb-2 font-bold">
              OPENING HOURS
            </span>
            <div className="space-y-1.5 text-[#AAA69E]">
              <div className="flex justify-between">
                <span>Mon — Fri</span>
                <span className="text-[#FAF9F5] font-bold">07:00 — 16:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sat — Sun</span>
                <span className="text-[#FAF9F5] font-bold">08:00 — 16:00</span>
              </div>
              <div className="flex justify-between text-[#91493B] pt-1">
                <span>Kitchen Service</span>
                <span>Closes 15:00</span>
              </div>
            </div>
          </div>

          {/* Action Links */}
          <div className="md:col-span-3 flex flex-col space-y-3 font-condensed font-bold text-lg uppercase tracking-wider">
            <span className="text-[10px] uppercase font-mono-press tracking-[0.24em] text-[#91493B] block mb-1">
              CONNECT
            </span>

            <a
              id="footer-instagram-link"
              href="https://instagram.com/manchesterpress"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center space-x-2 text-[#FAF9F5] hover:text-[#91493B] transition-colors group focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              id="footer-directions-link"
              href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center space-x-2 text-[#FAF9F5] hover:text-[#91493B] transition-colors group focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              <span>Directions</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.2] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-10 border-t border-[#33312E] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono-press text-[#AAA69E] uppercase tracking-[0.18em] gap-3">
          <span>8 RANKINS LANE · MELBOURNE VIC 3000</span>
          <span>WALK-IN CAFÉ · EST. 2011 · © MANCHESTER PRESS</span>
        </div>
      </div>
    </footer>
  );
};
