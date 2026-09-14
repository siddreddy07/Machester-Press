import React, { useState } from "react";

interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

interface MenuCategory {
  title: string;
  key: string;
  note?: string;
  items: MenuItem[];
}

const MENU_CATEGORIES: MenuCategory[] = [
  {
    title: "BAGELS",
    key: "bagels",
    note: "House-boiled daily",
    items: [
      {
        name: "The Classic Lox",
        description: "House-cured ocean trout, whipped dill cream cheese, caper berries, Spanish onion, lemon zest"
      },
      {
        name: "Rankins Pastrami Reuben",
        description: "12-hour spiced beef brisket, warm sauerkraut, melted gruyère, Russian dressing, dill spear"
      },
      {
        name: "Chorizo & Folded Egg",
        description: "Grilled artisan chorizo, free-range folded egg, chipotle aioli, baby rocket, sharp cheddar"
      },
      {
        name: "Roasted Mushroom & Truffle",
        description: "Thyme-roasted field mushrooms, whipped lemon ricotta, white truffle oil, baby spinach"
      },
      {
        name: "Whipped Ricotta & Thyme",
        description: "Sweet toasted bagel, whipped ricotta, macerated wild blueberries, thyme honey, crushed pistachios"
      }
    ]
  },
  {
    title: "BREAKFAST",
    key: "breakfast",
    note: "Served until 15:00",
    items: [
      {
        name: "Citrus Smashed Avocado",
        description: "Seasoned avocado, Yarra Valley feta, house dukkah, fresh mint, lemon on toasted seeded bagel"
      },
      {
        name: "Chilli Scramble",
        description: "Creamy folded eggs, fresh red chilli, spring onion, crispy fried shallots, coriander on bagel"
      },
      {
        name: "Toasted House Granola",
        description: "Rolled oats, roasted pepitas, seasonal poached stonefruit, organic Greek yoghurt, leatherwood honey"
      },
      {
        name: "Brioche French Toast",
        description: "Thick-cut brioche, seasonal berry compote, vanilla mascarpone, toasted pecans, pure maple"
      }
    ]
  },
  {
    title: "COFFEE",
    key: "coffee",
    note: "5 Senses & Guest Roasters",
    items: [
      {
        name: "House Espresso / Short Black",
        description: "5 Senses Manchester custom roast, extracted through our custom Synesso"
      },
      {
        name: "Flat White / Latte / Cappuccino",
        description: "Full cream St David Dairy or Bonsoy / Oatly barista oat"
      },
      {
        name: "Single Origin Batch Brew",
        description: "Rotating light roast filter with weekly independent farm origins"
      },
      {
        name: "Pourover V60",
        description: "Hand-poured single origin filter, delicate and floral cup profile"
      },
      {
        name: "Slow Cold Drip",
        description: "12-hour chilled water extraction, served over hand-cut ice block"
      }
    ]
  },
  {
    title: "COLD DRINKS",
    key: "cold_drinks",
    note: "House-made & local",
    items: [
      {
        name: "Iced Cold Brew Tonic",
        description: "Single origin concentrate, premium Mediterranean tonic, fresh orange slice"
      },
      {
        name: "Iced Latte / Iced Batch",
        description: "Double shot espresso poured over cold milk or chilled batch filter"
      },
      {
        name: "Cold Pressed Citrus & Apple",
        description: "Valencia oranges, Granny Smith apples, ginger root, lemon"
      },
      {
        name: "Sparkling Laneway Soda",
        description: "Locally crafted sparkling mineral water, lemon myrtle infusion"
      }
    ]
  }
];

export const MenuSection: React.FC = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>("bagels");
  const activeCategory = MENU_CATEGORIES.find((c) => c.key === activeCategoryKey) || MENU_CATEGORIES[0];

  return (
    <section
      id="menu"
      className="relative pt-18 sm:pt-24 pb-18 sm:pb-24 border-t-2 border-[#111111] bg-[#111111] text-[#FAF9F5]"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-12">
        {/* Section Heading: Dark Ink Broadsheet Header with Natural Titles */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b-2 border-[#FAF9F5] pb-4 mb-8 sm:mb-12 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.2em] text-[#91493B] font-mono-press font-bold mb-2">
              <span>OUR MENU</span>
              <span className="reg-crosshair text-[#FAF9F5] ml-2" />
            </div>
            <h2 className="font-condensed font-black text-[clamp(2.4rem,5vw,4.25rem)] text-[#FAF9F5] tracking-tight uppercase leading-none">
              The Menu.
            </h2>
          </div>

          <div className="text-left sm:text-right font-mono-press">
            <span className="text-xs uppercase font-bold text-[#FAF9F5] tracking-[0.18em] block">
              Prepared Fresh Daily
            </span>
            <p className="text-[11px] text-[#91493B] font-bold tracking-wider uppercase mt-0.5">
              Kitchen Closes at 15:00
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP BROADSHEET: 4 Columns with Clean Natural Typography (No 01, 02)   */}
        {/* ========================================================================= */}
        <div className="hidden xl:grid xl:grid-cols-4 gap-8">
          {MENU_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.key}
              className={`flex flex-col ${
                idx !== MENU_CATEGORIES.length - 1 ? "border-r border-[#292725] pr-8" : ""
              }`}
            >
              {/* Column Header */}
              <div className="border-b-2 border-[#FAF9F5] pb-3 mb-6">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[11px] font-mono-press font-bold text-[#91493B] uppercase tracking-[0.16em]">
                    {cat.title}
                  </span>
                  {cat.note && (
                    <span className="text-[10px] text-[#AAA69E] uppercase tracking-[0.14em] font-mono-press">
                      {cat.note}
                    </span>
                  )}
                </div>
                <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-[#FAF9F5]">
                  {cat.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-6">
                {cat.items.map((item, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="pb-5 border-b border-[#292725] last:border-b-0"
                  >
                    <h4 className="font-condensed font-bold text-xl uppercase tracking-wide text-[#FAF9F5] leading-snug">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="mt-1.5 text-xs text-[#AAA69E] leading-relaxed font-sans font-normal">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* TABLET / MEDIUM VIEW: 2x2 Clean Broadsheet                                */}
        {/* ========================================================================= */}
        <div className="hidden md:grid xl:hidden grid-cols-2 gap-10">
          {MENU_CATEGORIES.map((cat) => (
            <div key={cat.key} className="flex flex-col border-t-2 border-[#FAF9F5] pt-5">
              <div className="border-b border-[#292725] pb-2 mb-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-[#FAF9F5]">
                    {cat.title}
                  </h3>
                </div>
                {cat.note && (
                  <span className="text-[10px] uppercase font-mono-press text-[#AAA69E]">
                    {cat.note}
                  </span>
                )}
              </div>

              <div className="space-y-5">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="pb-4 border-b border-[#292725] last:border-b-0">
                    <h4 className="font-condensed font-bold text-lg uppercase text-[#FAF9F5]">
                      {item.name}
                    </h4>
                    {item.description && (
                      <p className="mt-1 text-xs text-[#AAA69E] leading-relaxed font-sans">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Graphic Category Selector + Pure Typography List            */}
        {/* ========================================================================= */}
        <div className="block md:hidden">
          {/* Category Tabs: Clean buttons */}
          <div
            id="mobile-menu-categories"
            className="flex items-center space-x-2 overflow-x-auto scrollbar-none border-b-2 border-[#292725] pb-3 mb-6 -mx-4 px-4"
          >
            {MENU_CATEGORIES.map((cat) => {
              const isSelected = cat.key === activeCategoryKey;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategoryKey(cat.key)}
                  className={`min-h-[44px] px-4 py-2.5 text-xs uppercase font-condensed font-bold tracking-[0.18em] whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:ring-[#91493B] focus-visible:outline-none ${
                    isSelected
                      ? "bg-[#FAF9F5] text-[#111111]"
                      : "bg-[#292725] text-[#AAA69E] hover:text-[#FAF9F5] border border-[#33312E]"
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Active Category Header */}
          <div className="flex items-baseline justify-between border-b-2 border-[#FAF9F5] pb-2 mb-6">
            <h3 className="font-condensed font-black text-3xl uppercase tracking-tight text-[#FAF9F5]">
              {activeCategory.title}
            </h3>
            {activeCategory.note && (
              <span className="text-[10px] uppercase font-mono-press text-[#91493B]">
                {activeCategory.note}
              </span>
            )}
          </div>

          {/* Active Category Items */}
          <div className="space-y-4">
            {activeCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="pb-4 border-b border-[#292725] last:border-b-0"
              >
                <h4 className="font-condensed font-bold text-xl uppercase tracking-wide text-[#FAF9F5]">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="mt-1.5 text-xs text-[#AAA69E] leading-relaxed font-sans">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dietary and Service Footer */}
        <div className="mt-12 pt-6 border-t border-[#292725] flex flex-col sm:flex-row sm:items-center justify-between text-[11px] uppercase tracking-[0.16em] font-mono-press text-[#AAA69E] gap-2">
          <span>Gluten-free & plant-based options available upon request</span>
          <span className="text-[#FAF9F5] font-bold">Kitchen closes at 15:00 daily</span>
        </div>
      </div>
    </section>
  );
};
