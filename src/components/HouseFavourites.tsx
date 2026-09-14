import React from "react";
import { motion } from "motion/react";

interface FavouriteItem {
  id: string;
  name: string;
  ingredients: string;
  category: string;
  image: string;
  alt: string;
  badge?: string;
}

const FAVOURITES: FavouriteItem[] = [
  {
    id: "lox",
    name: "The Classic Lox",
    category: "Signature Bagel",
    badge: "House Cured",
    ingredients: "House-cured ocean trout, whipped dill cream cheese, caper berries, Spanish onion, fresh dill, lemon zest.",
    image: "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?auto=format&fit=crop&w=1000&q=85",
    alt: "Manchester Press signature lox bagel loaded with cured trout and whipped herb cream cheese"
  },
  {
    id: "reuben",
    name: "Rankins Pastrami Reuben",
    category: "Warm Pressed",
    badge: "12-Hr Brisket",
    ingredients: "12-hour spiced beef brisket, warm sauerkraut, melted aged gruyère, house Russian dressing, dill spear.",
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=1000&q=85",
    alt: "Warm pastrami reuben bagel with melted cheese and house Russian dressing"
  },
  {
    id: "ricotta",
    name: "Whipped Ricotta & Thyme",
    category: "Morning Bagel",
    badge: "Sweet Dough",
    ingredients: "Lemon-scented ricotta, macerated wild blueberries, warm thyme blossom honey, roasted Sicilian pistachios.",
    image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1000&q=85",
    alt: "Toasted sweet bagel with whipped ricotta, fresh berries, and warm honey drizzle"
  },
  {
    id: "coffee",
    name: "Single Origin & Flat White",
    category: "House Roast",
    badge: "5 Senses",
    ingredients: "5 Senses Manchester roast espresso extracted on our custom Synesso, paired with weekly single-origin filter.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1000&q=85",
    alt: "Melbourne specialty flat white on rustic communal warehouse timber table"
  }
];

export const HouseFavourites: React.FC = () => {
  return (
    <section
      id="house-favourites"
      className="relative pt-16 sm:pt-22 pb-16 sm:pb-22 border-t-2 border-[#111111] overflow-hidden bg-[#F0ECE4]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Header: Natural, Clean, Customer-Facing */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#111111] pb-4 mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#91493B] font-mono-press font-bold mb-2">
              <span>BAGELS & COFFEE</span>
              <span className="reg-crosshair text-[#111111] ml-2" />
            </div>
            <h2 className="font-condensed font-black text-[clamp(2.2rem,4.5vw,3.75rem)] text-[#111111] tracking-tight uppercase leading-none">
              House Favourites.
            </h2>
          </div>

          <div className="text-left sm:text-right font-mono-press">
            <span className="text-xs uppercase font-bold text-[#111111] tracking-[0.16em] block">
              Boiled & Baked Daily
            </span>
            <p className="text-[11px] text-[#91493B] font-bold tracking-wider uppercase mt-0.5">
              Kitchen open until 15:00
            </p>
          </div>
        </div>
      </div>

      {/* Grid on Desktop / Smooth Horizontal Rail on Mobile */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        <div
          id="favourites-rail"
          className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-none pb-4 lg:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none"
          }}
        >
          {FAVOURITES.map((item, idx) => (
            <motion.div
              key={item.id}
              id={`favourite-item-${item.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-[82vw] sm:w-[46vw] lg:w-auto shrink-0 snap-start flex flex-col justify-between bg-[#FAF9F5] border-2 border-[#111111] p-3 group"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-[#292725] overflow-hidden border border-[#111111] mb-3">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center grayscale-[3%] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Badge */}
                {item.badge && (
                  <div className="absolute top-2 left-2 bg-[#111111] text-[#FAF9F5] text-[9px] uppercase font-mono-press font-bold tracking-[0.2em] px-2 py-0.5">
                    {item.badge}
                  </div>
                )}

                <div className="absolute bottom-2 right-2 bg-[#91493B] text-[#FAF9F5] text-[9px] uppercase font-mono-press font-bold tracking-[0.16em] px-2 py-0.5">
                  {item.category}
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col pt-1">
                <div className="border-b border-[#C9C3B8] pb-1.5 mb-2">
                  <h3 className="font-condensed font-black text-2xl text-[#111111] tracking-tight uppercase">
                    {item.name}
                  </h3>
                </div>
                <p className="text-xs text-[#292725] leading-relaxed font-sans">
                  {item.ingredients}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="mt-4 flex items-center justify-between lg:hidden text-[10.5px] uppercase font-mono-press text-[#AAA69E] pt-2 border-t border-[#C9C3B8]">
          <span className="text-[#111111] font-bold">← Swipe for Bagels →</span>
          <span>Boiled In-House</span>
        </div>
      </div>
    </section>
  );
};
