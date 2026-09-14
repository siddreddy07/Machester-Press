import React, { useEffect } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
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
          {/* Dark Ink Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/75"
          />

          {/* Modal Panel */}
          <motion.div
            role="dialog"
            aria-labelledby="visit-modal-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#F0ECE4] border-2 border-[#111111] p-6 sm:p-8 z-10 text-[#111111]"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b-2 border-[#111111] pb-3 mb-6">
              <div className="flex items-center space-x-2 text-[11px] font-mono-press font-bold uppercase tracking-[0.18em]">
                <span className="text-[#91493B]">8 RANKINS LANE</span>
                <span className="text-[#AAA69E]">/</span>
                <span className="text-[#111111]">MELBOURNE CBD</span>
              </div>
              <button
                id="close-visit-modal-btn"
                onClick={onClose}
                className="p-1 text-[#111111] hover:text-[#91493B] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Content */}
            <h3
              id="visit-modal-title"
              className="font-condensed font-black text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight mb-1"
            >
              8 Rankins Lane
            </h3>
            <p className="text-xs font-mono-press text-[#AAA69E] uppercase tracking-widest mb-6">
              Off Little Bourke St, Melbourne VIC 3000
            </p>

            <div className="space-y-3 border-y-2 border-[#111111] py-5 mb-6 text-xs sm:text-sm font-mono-press">
              <div className="flex justify-between items-baseline py-1 border-b border-[#C9C3B8]">
                <span className="font-bold text-[#111111]">MONDAY — FRIDAY</span>
                <span className="text-[#111111]">07:00 — 16:00</span>
              </div>
              <div className="flex justify-between items-baseline py-1 border-b border-[#C9C3B8]">
                <span className="font-bold text-[#111111]">SATURDAY — SUNDAY</span>
                <span className="text-[#111111]">08:00 — 16:00</span>
              </div>
              <div className="flex justify-between items-baseline pt-1 text-xs text-[#91493B] font-bold">
                <span>KITCHEN ORDERS</span>
                <span>UNTIL 15:00 DAILY</span>
              </div>
              <div className="flex justify-between items-baseline text-xs text-[#AAA69E]">
                <span>SEATING POLICY</span>
                <span>COMMUNAL WALK-IN ONLY</span>
              </div>
            </div>

            {/* Directions Link */}
            <div className="flex flex-col sm:flex-row gap-3 font-condensed font-bold uppercase tracking-wider">
              <a
                id="modal-map-button"
                href="https://maps.google.com/?q=Manchester+Press+8+Rankins+Lane+Melbourne"
                target="_blank"
                rel="noreferrer noopener"
                className="flex-1 inline-flex items-center justify-center space-x-2 bg-[#111111] text-[#FAF9F5] hover:bg-[#91493B] py-3.5 px-4 text-xs transition-colors focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
              </a>
              <button
                onClick={onClose}
                className="border-2 border-[#111111] bg-[#FAF9F5] py-3.5 px-6 text-xs text-[#111111] hover:bg-[#111111] hover:text-[#FAF9F5] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#91493B] focus-visible:outline-none"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
