import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PrintIdentityStrip } from "./components/PrintIdentityStrip";
import { HouseFavourites } from "./components/HouseFavourites";
import { StorySection } from "./components/StorySection";
import { MenuSection } from "./components/MenuSection";
import { RankinsAtmosphere } from "./components/RankinsAtmosphere";
import { VisitSection } from "./components/VisitSection";
import { ExteriorMoment } from "./components/ExteriorMoment";
import { Footer } from "./components/Footer";
import { VisitModal } from "./components/VisitModal";
import { MenuPreviewModal } from "./components/MenuPreviewModal";

export default function App() {
  const [isVisitOpen, setIsVisitOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0ECE4] text-[#111111] selection:bg-[#91493B] selection:text-[#FAF9F5] relative">
      {/* Utilitarian Asymmetric Header */}
      <Header
        onOpenVisit={() => setIsVisitOpen(true)}
        onOpenMenuPreview={() => setIsMenuOpen(true)}
      />

      {/* Main Editorial Experience */}
      <main>
        {/* Layered Editorial Hero: Warehouse + Bagels + Bold Condensed Typography */}
        <Hero onOpenVisit={() => setIsVisitOpen(true)} />

        {/* Charcoal Print Strip Ticker */}
        <PrintIdentityStrip />

        {/* 01: House Favourites / Boiled Bagels & Specialty Brews */}
        <HouseFavourites />

        {/* 02: Archive / From Print Works to Café */}
        <StorySection />

        {/* 03: The Menu / Real Dark Ink Section with Strong White Typography */}
        <MenuSection />

        {/* 04: Laneway Atmosphere / 8 Rankins Lane */}
        <RankinsAtmosphere />

        {/* 05: Visit & Dispatch / Hours, Location, Walk-in Guidance */}
        <VisitSection />

        {/* Exterior Laneway Moment leading to Footer */}
        <ExteriorMoment />
      </main>

      {/* Ink Black Footer */}
      <Footer />

      {/* Print-house Styled Modals */}
      <VisitModal
        isOpen={isVisitOpen}
        onClose={() => setIsVisitOpen(false)}
      />

      <MenuPreviewModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
