import React from "react";

interface ManchesterPressLogoProps {
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
}

export const ManchesterPressLogo: React.FC<ManchesterPressLogoProps> = ({
  className = "",
  light = false,
  size = "md",
}) => {
  const scriptSizeClasses =
    size === "sm"
      ? "text-[22px] sm:text-[24px]"
      : size === "lg"
      ? "text-[38px] sm:text-[46px]"
      : "text-[28px] sm:text-[32px]";

  const pressSizeClasses =
    size === "sm"
      ? "text-[9px] tracking-[0.34em]"
      : size === "lg"
      ? "text-[13px] tracking-[0.44em]"
      : "text-[11px] tracking-[0.38em]";

  const textColor = light ? "text-[#FAF9F5]" : "text-[#111111]";
  const subTextColor = light ? "text-[#FAF9F5]/90" : "text-[#111111]";

  return (
    <div
      className={`inline-flex flex-col items-start leading-none select-none ${className}`}
      aria-label="Manchester Press"
    >
      {/* Loose Handwritten / Brush-Script "Manchester" */}
      <span
        className={`font-script font-bold leading-none ${scriptSizeClasses} ${textColor} transform -rotate-1 origin-left`}
        style={{
          fontFamily: "'Caveat', cursive",
          fontFeatureSettings: '"kern" 1',
        }}
      >
        Manchester
      </span>

      {/* Directly underneath: widely spaced uppercase sans-serif "PRESS" */}
      <span
        className={`font-sans font-extrabold uppercase ${pressSizeClasses} ${subTextColor} block mt-0.5 sm:mt-1 pl-0.5`}
      >
        PRESS
      </span>
    </div>
  );
};
