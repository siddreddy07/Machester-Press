import React from "react";
import { motion } from "motion/react";

export const ExteriorMoment: React.FC = () => {
  return (
    <section
      id="exterior-moment"
      className="relative w-full border-t-2 border-[#111111] overflow-hidden bg-[#111111]"
    >
      {/* Cinematic Laneway Exterior Image leading into Footer */}
      <div className="relative w-full h-[40svh] sm:h-[48svh] lg:h-[56svh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-full relative"
        >
          <img
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1800&q=85"
            alt="Atmospheric Melbourne laneway exterior leading toward 8 Rankins Lane"
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center grayscale-[8%] brightness-[0.88] contrast-[1.08]"
          />

          {/* Vignette blending seamlessly into ink footer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent pointer-events-none" />

          {/* Industrial Laneway Caption */}
          <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8 md:left-12 max-w-[1440px] text-[#FAF9F5] pointer-events-none">
            <div className="flex items-center space-x-2 text-[10px] sm:text-[11px] uppercase font-mono-press tracking-[0.24em] text-[#AAA69E] mb-1">
              <span className="w-1.5 h-1.5 bg-[#91493B]" />
              <span>8 RANKINS LANE · OFF LITTLE BOURKE ST</span>
              <span className="reg-crosshair text-[#FAF9F5] ml-2" />
            </div>
            <p className="font-condensed font-black text-2xl sm:text-3xl lg:text-4xl text-[#FAF9F5] uppercase tracking-tight">
              Tucked away in the Melbourne grid.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
