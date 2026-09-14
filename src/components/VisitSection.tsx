import React from "react";
import { ArrowUpRight } from "lucide-react";

export const VisitSection: React.FC = () => {
  return (
    <section
      id="visit"
      className="relative pt-16 sm:pt-24 pb-16 sm:pb-24 border-t-2 border-[#111111] bg-[#F0ECE4] text-[#111111]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#111111] pb-4 mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#91493B] font-mono-press font-bold mb-2">
              <span>VISIT US</span>
              <span className="reg-crosshair text-[#111111] ml-2" />
            </div>
            <h2 className="font-condensed font-black text-[clamp(2.4rem,5vw,4.25rem)] text-[#111111] tracking-tight uppercase leading-none">
              Visit Manchester Press.
            </h2>
          </div>

          <div className="text-left sm:text-right font-mono-press">
            <span className="text-xs uppercase font-bold text-[#111111] tracking-[0.16em] block">
              Walk-Ins Welcome
            </span>
            <p className="text-[11px] text-[#91493B] font-bold tracking-wider uppercase mt-0.5">
              No Bookings Required
            </p>
          </div>
        </div>

        {/* Utilitarian Grid: Real Customer Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Practical Information */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Address & Laneway Guide */}
            <div className="bg-[#FAF9F5] border-2 border-[#111111] p-6">
              <span className="text-[10px] uppercase font-mono-press font-bold text-[#91493B] tracking-[0.22em] block mb-2">
                FIND US
              </span>
              <p className="font-condensed font-black text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
                8 Rankins Lane
              </p>
              <p className="text-sm sm:text-base text-[#292725] font-sans mt-1">
                Melbourne CBD, VIC 3000
              </p>
              <p className="text-xs text-[#AAA69E] font-mono-press uppercase mt-3 pt-3 border-t border-[#C9C3B8]">
                Tucked off Little Bourke St, between Elizabeth & Queen Streets
              </p>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#FAF9F5] border-2 border-[#111111] p-6">
              <span className="text-[10px] uppercase font-mono-press font-bold text-[#91493B] tracking-[0.22em] block mb-3">
                OPENING HOURS
              </span>

              <div className="space-y-3 font-mono-press text-xs sm:text-sm">
                <div className="flex justify-between py-1.5 border-b border-[#C9C3B8]">
                  <span className="text-[#292725] font-bold">MONDAY — FRIDAY</span>
                  <span className="font-bold text-[#111111]">07:00 — 16:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-[#C9C3B8]">
                  <span className="text-[#292725] font-bold">SATURDAY — SUNDAY</span>
                  <span className="font-bold text-[#111111]">08:00 — 16:00</span>
                </div>
                <div className="flex justify-between py-1.5 text-xs text-[#91493B] font-bold">
                  <span>KITCHEN CLOSES</span>
                  <span>15:00 DAILY</span>
                </div>
              </div>
            </div>

            {/* Inside Manchester Press / Seating */}
            <div className="bg-[#FAF9F5] border-2 border-[#111111] p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono-press font-bold text-[#91493B] tracking-[0.22em] block mb-2">
                  INSIDE MANCHESTER PRESS
                </span>
                <p className="text-xs sm:text-sm text-[#292725] font-sans leading-relaxed">
                  Manchester Press operates exclusively on a relaxed walk-in basis with long timber communal tables. Come as you are—tables turn over steadily throughout the morning and afternoon.
                </p>
              </div>

              {/* Action Links */}
              <div className="mt-6 pt-4 border-t border-[#C9C3B8] flex flex-wrap items-center gap-3">
                <a
                  id="visit-directions-action"
                  href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="min-h-[44px] inline-flex items-center space-x-2 bg-[#111111] text-[#FAF9F5] hover:bg-[#91493B] px-6 py-3 text-xs uppercase font-condensed font-bold tracking-[0.18em] transition-colors focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </a>

                <a
                  id="visit-instagram-action"
                  href="https://www.instagram.com/manchesterpress"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="min-h-[44px] inline-flex items-center space-x-1.5 border-2 border-[#111111] bg-[#FAF9F5] text-[#111111] hover:bg-[#111111] hover:text-[#FAF9F5] px-5 py-3 text-xs uppercase font-condensed font-bold tracking-[0.16em] transition-colors focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                >
                  <span>@manchesterpress</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Warehouse Image */}
          <div className="lg:col-span-6 relative border-2 border-[#111111] bg-[#292725] overflow-hidden min-h-[380px] lg:min-h-full group">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=85"
              alt="Communal dining tables inside Manchester Press"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center grayscale-[4%] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            />

            <div className="absolute top-4 left-4 bg-[#111111] text-[#FAF9F5] text-[10px] uppercase font-mono-press font-bold tracking-[0.2em] px-3 py-1">
              Communal Seating
            </div>

            <div className="absolute bottom-4 left-4 right-4 bg-[#111111]/90 text-[#FAF9F5] p-4 border border-[#FAF9F5]/20 backdrop-blur-xs">
              <span className="text-[10px] uppercase font-mono-press text-[#91493B] font-bold block mb-1">
                LANEWAY TIP
              </span>
              <p className="text-xs font-sans text-[#FAF9F5] leading-relaxed">
                Walk through Rankins Lane until you see the Manchester Press painted signage. Take any open seat at the long communal tables.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
