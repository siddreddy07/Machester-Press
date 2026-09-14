import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ManchesterPressLogo } from "./ManchesterPressLogo";

interface HeaderProps {
  onOpenVisit: () => void;
  onOpenMenuPreview?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVisit, onOpenMenuPreview }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className="fixed top-0 left-0 right-0 z-40 bg-[#F0ECE4] border-b-2 border-[#111111] h-[64px] sm:h-[72px] transition-colors"
      >
        <div className="max-w-[1440px] h-full mx-auto px-4 sm:px-8 md:px-12 flex items-center justify-between">
          {/* LEFT: Manchester Press Logo Lockup (Left-aligned, asymmetric) */}
          <a
            id="nav-brand-logo"
            href="#"
            aria-label="Manchester Press Home"
            className="flex items-center focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none py-1 group"
          >
            <ManchesterPressLogo size="md" />
          </a>

          {/* RIGHT: Utilitarian & Graphic Navigation */}
          {/* BAGELS · COFFEE · MENU · THE PRESS · VISIT · INSTAGRAM ↗ */}
          <nav
            id="desktop-nav"
            className="hidden md:flex items-center space-x-6 lg:space-x-8 text-[11.5px] uppercase font-condensed font-bold tracking-[0.16em] text-[#111111]"
          >
            <button
              id="nav-bagels-btn"
              onClick={() => scrollTo("house-favourites")}
              className="py-1 hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              Bagels
            </button>

            <button
              id="nav-coffee-btn"
              onClick={() => scrollTo("house-favourites")}
              className="py-1 hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              Coffee
            </button>

            <button
              id="nav-menu-btn"
              onClick={() => {
                const el = document.getElementById("menu");
                if (el) {
                  scrollTo("menu");
                } else if (onOpenMenuPreview) {
                  onOpenMenuPreview();
                }
              }}
              className="py-1 hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              Menu
            </button>

            <button
              id="nav-the-press-btn"
              onClick={() => scrollTo("story")}
              className="py-1 hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              The Press
            </button>

            <button
              id="nav-visit-btn"
              onClick={() => {
                const el = document.getElementById("visit");
                if (el) {
                  scrollTo("visit");
                } else {
                  onOpenVisit();
                }
              }}
              className="py-1 hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              Visit
            </button>

            <a
              id="nav-instagram-link"
              href="https://www.instagram.com/manchesterpress"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center space-x-1 py-1 text-[#91493B] hover:text-[#111111] transition-colors focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" />
            </a>

            {/* Print registration mark detail */}
            <div className="hidden lg:flex items-center pl-2 text-[#AAA69E]" title="Registration Mark">
              <span className="reg-crosshair" />
            </div>
          </nav>

          {/* MOBILE TOGGLE: Graphic & Crisp */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[10px] uppercase font-condensed font-bold tracking-[0.14em] text-[#91493B] px-2 py-1 border border-[#91493B]"
            >
              8 Rankins
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="min-h-[44px] inline-flex items-center justify-center text-[11px] uppercase font-condensed font-bold tracking-[0.2em] text-[#FAF9F5] px-4 bg-[#111111] hover:bg-[#292725] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
            >
              MENU
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER: Crisp Industrial Ink Aesthetic */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div
            id="mobile-menu-backdrop"
            className="fixed inset-0 z-50 md:hidden flex justify-end"
          >
            {/* Dark tint backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#111111]/70"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-xs bg-[#F0ECE4] border-l-2 border-[#111111] h-full p-6 flex flex-col justify-between z-10"
            >
              <div>
                {/* Header in Drawer */}
                <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4 mb-6">
                  <ManchesterPressLogo size="sm" />
                  <button
                    id="mobile-menu-close-btn"
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] min-w-[44px] flex items-center justify-center text-[#111111] hover:text-[#91493B] cursor-pointer focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                {/* Print Registration / Subtitle */}
                <div className="flex items-center justify-between text-[10px] uppercase font-mono-press text-[#AAA69E] tracking-[0.2em] mb-6">
                  <span>8 RANKINS LANE</span>
                  <span className="reg-crosshair" />
                </div>

                {/* Vertical Navigation Links */}
                <nav className="space-y-4 text-left font-condensed">
                  <div>
                    <button
                      onClick={() => scrollTo("house-favourites")}
                      className="min-h-[44px] text-left text-2xl font-extrabold tracking-[0.04em] text-[#111111] hover:text-[#91493B] transition-colors w-full uppercase py-1 border-b border-[#C9C3B8]"
                    >
                      Bagels
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => scrollTo("house-favourites")}
                      className="min-h-[44px] text-left text-2xl font-extrabold tracking-[0.04em] text-[#111111] hover:text-[#91493B] transition-colors w-full uppercase py-1 border-b border-[#C9C3B8]"
                    >
                      Coffee
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => {
                        scrollTo("menu");
                        if (onOpenMenuPreview) onOpenMenuPreview();
                      }}
                      className="min-h-[44px] text-left text-2xl font-extrabold tracking-[0.04em] text-[#111111] hover:text-[#91493B] transition-colors w-full uppercase py-1 border-b border-[#C9C3B8]"
                    >
                      Menu
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => scrollTo("story")}
                      className="min-h-[44px] text-left text-2xl font-extrabold tracking-[0.04em] text-[#111111] hover:text-[#91493B] transition-colors w-full uppercase py-1 border-b border-[#C9C3B8]"
                    >
                      The Press
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => scrollTo("visit")}
                      className="min-h-[44px] text-left text-2xl font-extrabold tracking-[0.04em] text-[#111111] hover:text-[#91493B] transition-colors w-full uppercase py-1 border-b border-[#C9C3B8]"
                    >
                      Visit & Hours
                    </button>
                  </div>

                  <div>
                    <a
                      href="https://www.instagram.com/manchesterpress"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="min-h-[44px] inline-flex items-center space-x-1.5 text-2xl font-extrabold tracking-[0.04em] text-[#91493B] hover:text-[#111111] transition-colors uppercase py-1"
                    >
                      <span>Instagram</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </nav>
              </div>

              {/* Drawer Footer: Utilitarian Melbourne Address */}
              <div className="border-t-2 border-[#111111] pt-4 text-xs text-[#292725] space-y-1 font-sans">
                <p className="font-bold uppercase tracking-[0.14em] text-[#111111]">
                  8 Rankins Lane · Melbourne CBD
                </p>
                <p className="text-[11px] text-[#AAA69E] uppercase tracking-[0.12em]">
                  Mon–Fri 7:00–16:00 · Sat–Sun 8:00–16:00
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
