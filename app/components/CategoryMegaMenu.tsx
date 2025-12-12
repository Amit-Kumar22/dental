"use client";

import React from "react";
import { theme, cn } from "../theme/theme";
import { MagnifyingGlassIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Data shape: Category -> Groups (like "ESSENTIALS", "Books") -> Items
export type CategoryMenuData = {
  [category: string]: {
    [group: string]: string[];
  };
};

// Seed data inspired by the screenshot; easy to expand later
export const defaultCategoryData: CategoryMenuData = {
  "Dental Brands": {
    Essentials: [
      "Diagnostics",
      "Mouth Masks",
      "Sterilization Pouches",
      "Green Cloth",
      "Patient Drapes",
      "Suction Tips",
      "Gloves",
      "Mackintosh Sheet",
      "Cotton Products",
      "Metallic Scale",
      "Glass Slab",
    ],
  },
  Pharmacy: {
    Essentials: ["Antibiotics", "Analgesics", "Anesthetics", "Antiseptics"],
  },
  "Offer Zone": {
    Essentials: ["Deals of the Day", "Clearance", "Combo Offers", "Bulk Discounts"],
  },
  "General Dentistry": {
    Essentials: ["Handpieces", "Burs", "Prophy", "Sterilization"],
  },
  Equipments: {
    Essentials: ["Dental Units", "Compressors", "Autoclaves", "Lights"],
  },
  "Student Section": {
    ESSENTIALS: [
      "Diagnostics",
      "Mouth Masks",
      "Sterilization Pouches",
      "Green Cloth",
      "Patient Drapes",
      "Suction Tips",
      "Gloves",
      "Mackintosh Sheet",
      "Cotton Products",
      "Metallic Scale",
      "Glass Slab",
    ],
    Books: ["First Year", "Second Year", "Third Year", "Fourth Year"],
    Materials: ["Plaster", "Wax", "Impression", "Acrylic"],
    Miscellaneous: ["Stationery", "Kits", "Accessories"],
    "1st Year BDS": [],
    "2nd Year BDS": [],
    "3rd Year BDS": [],
    "4th Year BDS": [],
  },
  Restorative: {
    Essentials: ["Composites", "Cements", "Bonding Agents", "Matrices"],
  },
  Endodontics: {
    Essentials: ["Files", "Sealers", "Gutta Percha", "Irrigants"],
  },
};

interface CategoryMegaMenuProps {
  data?: CategoryMenuData;
  onClose?: () => void;
}

// Accessible mega menu panel. Keyboard friendly and responsive.
export default function CategoryMegaMenu({ data = defaultCategoryData, onClose }: CategoryMegaMenuProps) {
  const [query, setQuery] = React.useState<string>("");

  // Filter the data based on query across category, group and item names
  const filteredData = React.useMemo<CategoryMenuData>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    const result: CategoryMenuData = {};
    for (const [cat, groups] of Object.entries(data)) {
      const catMatches = cat.toLowerCase().includes(q);
      const matchedGroups: { [group: string]: string[] } = {};
      for (const [group, items] of Object.entries(groups)) {
        const groupMatches = group.toLowerCase().includes(q);
        const matchedItems = items.filter((i) => i.toLowerCase().includes(q));
        if (catMatches || groupMatches || matchedItems.length > 0) {
          // If cat or group itself matches, show all items of that group
          matchedGroups[group] = (catMatches || groupMatches) ? items : matchedItems;
        }
      }
      if (catMatches || Object.keys(matchedGroups).length > 0) {
        result[cat] = matchedGroups;
      }
    }
    return result;
  }, [data, query]);

  const categories = Object.keys(filteredData);
  const [activeCategory, setActiveCategory] = React.useState<string>(categories[0] || "");
  const groups = Object.keys(filteredData[activeCategory] || {});
  const [activeGroup, setActiveGroup] = React.useState<string>(groups[0] || "");

  // Reset active group when category changes
  React.useEffect(() => {
    const firstCategory = categories[0] || "";
    if (firstCategory && !filteredData[firstCategory]) return; // safety
    if (!activeCategory || !filteredData[activeCategory]) {
      setActiveCategory(firstCategory);
    }
    const firstGroup = Object.keys(filteredData[activeCategory] || {})[0] || "";
    setActiveGroup(firstGroup);
  }, [activeCategory, filteredData, categories]);

  return (
    <div
      className="relative"
      role="dialog"
      aria-label="Browse categories"
    >
      {/* Panel */}
      <div
        className={cn(
          // size tuned smaller on desktop; still responsive on mobile
          "bg-white shadow-2xl border border-gray-200 rounded-xl",
          "w-full md:w-[880px] lg:w-[960px] xl:w-[1000px]",
          "flex flex-col",
          "max-h-[420px]",
        )}
      >
        {/* Search */}
        <div className="p-3 border-b border-gray-100 flex-shrink-0">
          <div className="relative">
            <input
              type="text"
              inputMode="search"
              placeholder="Search Category"
              aria-label="Search Category"
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 flex-1 overflow-hidden">
          {/* Column 1: Category */}
          <section aria-labelledby="menu-column-category" className="bg-gray-50 flex flex-col h-full overflow-hidden">
            <h3 id="menu-column-category" className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex-shrink-0 bg-gray-50 z-10">Category</h3>
            <ul className="overflow-y-auto py-1 flex-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm",
                      activeCategory === cat ? "bg-blue-100 text-blue-800" : "hover:bg-gray-100 text-gray-800",
                    )}
                    onClick={() => setActiveCategory(cat)}
                    aria-current={activeCategory === cat ? "true" : undefined}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 2: Sub Category (groups) */}
          <section aria-labelledby="menu-column-subcategory" className="bg-white border-l border-gray-200 flex flex-col h-full overflow-hidden">
            <h3 id="menu-column-subcategory" className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex-shrink-0 bg-white z-10">Sub Category</h3>
            <ul className="py-1 overflow-y-auto flex-1">
              {Object.keys(filteredData[activeCategory] || {}).map((group) => (
                <li key={group}>
                  <button
                    className={cn(
                      "w-full text-left px-4 py-3 text-sm flex items-center justify-between",
                      activeGroup === group ? "bg-blue-50 text-blue-700" : "hover:bg-gray-100 text-gray-800",
                    )}
                    onClick={() => setActiveGroup(group)}
                    aria-current={activeGroup === group ? "true" : undefined}
                  >
                    {group}
                    <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* Column 3: Items under selected group */}
          <section aria-labelledby="menu-column-items" className="bg-white border-l border-gray-200 flex flex-col h-full overflow-hidden">
            <h3 id="menu-column-items" className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide flex-shrink-0 bg-white z-10">
              {activeGroup || "Items"}
            </h3>
            <div className="overflow-y-auto flex-1 px-4 pb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                {(filteredData[activeCategory]?.[activeGroup] || []).map((item) => (
                  <button
                    key={item}
                    className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded"
                  >
                    {item}
                  </button>
                ))}
                {(!filteredData[activeCategory] || (filteredData[activeCategory]?.[activeGroup] || []).length === 0) && (
                  <div className="text-sm text-gray-500 px-2 py-4">No items found.</div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
