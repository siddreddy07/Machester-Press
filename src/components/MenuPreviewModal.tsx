import React, { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface MenuPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuPreviewModal: React.FC<MenuPreviewModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/80"
          />

          <motion.div
            role="dialog"
            aria-labelledby="menu-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-xl bg-[#111111] border-2 border-[#FAF9F5] p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto text-[#FAF9F5]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#FAF9F5] pb-3 mb-6">
              <div className="flex items-center space-x-2 text-[11px] font-mono-press font-bold uppercase tracking-[0.18em]">
                <span className="text-[#91493B]">OUR MENU</span>
                <span className="text-[#AAA69E]">/</span>
                <span className="text-[#FAF9F5]">HOUSE SELECTION</span>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-[#FAF9F5] hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <h3
              id="menu-modal-title"
              className="font-condensed font-black text-3xl sm:text-4xl text-[#FAF9F5] uppercase tracking-tight mb-1"
            >
              The Bagel Board
            </h3>
            <p className="text-xs font-mono-press text-[#AAA69E] uppercase tracking-widest mb-6">
              Boiled & baked in-house daily · Served until 15:00
            </p>

            <div className="space-y-4 text-xs sm:text-sm border-y-2 border-[#FAF9F5] py-5 mb-6">
              <div className="border-b border-[#292725] pb-3">
                <span className="font-condensed font-bold uppercase tracking-wide text-lg text-[#FAF9F5] block">
                  The Classic Lox
                </span>
                <span className="text-[#AAA69E] text-xs font-sans">
                  House-cured ocean trout, whipped dill cream cheese, caper berries, Spanish onion, lemon
                </span>
              </div>

              <div className="border-b border-[#292725] pb-3">
                <span className="font-condensed font-bold uppercase tracking-wide text-lg text-[#FAF9F5] block">
                  Rankins Pastrami Reuben
                </span>
                <span className="text-[#AAA69E] text-xs font-sans">
                  12-hour spiced beef brisket, warm sauerkraut, melted gruyère, Russian dressing
                </span>
              </div>

              <div className="border-b border-[#292725] pb-3">
                <span className="font-condensed font-bold uppercase tracking-wide text-lg text-[#FAF9F5] block">
                  Whipped Ricotta & Thyme
                </span>
                <span className="text-[#AAA69E] text-xs font-sans">
                  Sweet toasted bagel, whipped ricotta, macerated wild blueberries, thyme blossom honey
                </span>
              </div>

              <div>
                <span className="font-condensed font-bold uppercase tracking-wide text-lg text-[#FAF9F5] block">
                  Melbourne Specialty Coffee
                </span>
                <span className="text-[#AAA69E] text-xs font-sans">
                  5 Senses custom roast espresso, rotating single origin batch brew, filter V60
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="bg-[#FAF9F5] text-[#111111] hover:bg-[#91493B] hover:text-[#FAF9F5] py-3 px-6 text-xs uppercase font-condensed font-bold tracking-[0.18em] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
              >
                Close Board
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
