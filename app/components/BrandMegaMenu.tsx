"use client";

import React from "react";
import Image from "next/image";
import { cn } from "../theme/theme";

type Brand = {
  name: string;
  logo: string; // Path to logo image in public/brands/
};

const tabs = [
  "Top Brand",
  "Newly Added Brands",
  "Featured Brands",
  "Dentalkart Suggests",
];

// Brand logos - put your actual logo images in public/brands/ folder
// Format: /brands/waldent.png, /brands/mani.png, etc.
const brandCatalog: Record<string, Brand[]> = {
  "Top Brand": [
    { name: "Waldent", logo: "/brands/waldent.png" },
    { name: "MANI", logo: "/brands/mani.png" },
    { name: "GC", logo: "/brands/gc.png" },
    { name: "SuperEndo", logo: "/brands/superendo.png" },
    { name: "Waldent Pro", logo: "/brands/waldent-pro.png" },
    { name: "Dentsply", logo: "/brands/dentsply.png" },
    { name: "Endoking", logo: "/brands/endoking.png" },
    { name: "Waldent Alchem", logo: "/brands/waldent-alchem.png" },
    { name: "3M ESPE", logo: "/brands/3m-espe.png" },
    { name: "Woodpecker", logo: "/brands/woodpecker.png" },
    { name: "Orthometric", logo: "/brands/orthometric.png" },
    { name: "iDENTical", logo: "/brands/identical.png" },
  ],
  "Newly Added Brands": [
    { name: "NewBrand A", logo: "/brands/newbrand-a.png" },
    { name: "NewBrand B", logo: "/brands/newbrand-b.png" },
    { name: "NewBrand C", logo: "/brands/newbrand-c.png" },
  ],
  "Featured Brands": [
    { name: "Premium A", logo: "/brands/premium-a.png" },
    { name: "Premium B", logo: "/brands/premium-b.png" },
    { name: "Premium C", logo: "/brands/premium-c.png" },
  ],
  "Dentalkart Suggests": [
    { name: "Suggested A", logo: "/brands/suggested-a.png" },
    { name: "Suggested B", logo: "/brands/suggested-b.png" },
    { name: "Suggested C", logo: "/brands/suggested-c.png" },
  ],
};

export default function BrandMegaMenu() {
  const [activeTab, setActiveTab] = React.useState<string>(tabs[0]);

  return (
    <div className="w-full md:w-[880px] lg:w-[960px] xl:w-[1000px] bg-white border border-gray-200 rounded-xl shadow-2xl">
      {/* Tabs */}
      <div className="flex items-center gap-3 px-4 pt-4 pb-2 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={cn(
              "px-4 py-2 rounded-xl text-sm whitespace-nowrap border",
              activeTab === tab
                ? "bg-gray-900 text-white border-gray-900"
                : "bg-white text-gray-900 border-gray-300 hover:bg-gray-100"
            )}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="ml-auto">
          <button className="px-4 py-2 rounded-xl text-sm border border-gray-300 text-gray-900 hover:bg-gray-100">View All</button>
        </div>
      </div>

      {/* Brands grid */}
      <div className="px-4 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {brandCatalog[activeTab].map((b) => (
            <button 
              key={b.name} 
              className="flex items-center justify-center h-20 rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-md transition-all p-3"
              title={b.name}
            >
              <Image 
                src={b.logo} 
                alt={b.name} 
                width={120} 
                height={60} 
                className="object-contain w-full h-full"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
