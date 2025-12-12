"use client";

import React from 'react';
import Image from 'next/image';
import { theme, cn } from '../theme/theme';

interface Brand {
  name: string;
  logo: string;
  description?: string;
}

export function BrandsSection() {
  const topBrands: Brand[] = [
    { name: 'Waldent', logo: '/brands/waldent.png' },
    { name: 'Mani', logo: '/brands/mani.png' },
    { name: 'GC', logo: '/brands/gc.png' },
    { name: 'SuperEndo', logo: '/brands/superendo.png' },
    { name: 'Waldent Instruments', logo: '/brands/waldent-instruments.png' },
    { name: 'Dentsply', logo: '/brands/dentsply.png' },
    { name: 'Endoking', logo: '/brands/endoking.png' },
    { name: 'Waldent Alchem', logo: '/brands/waldent-alchem.png' },
    { name: '3M ESPE', logo: '/brands/3m-espe.png' },
    { name: 'Nobel Biocare', logo: '/brands/nobel.png' },
    { name: 'Straumann', logo: '/brands/straumann.png' },
    { name: 'Zimmer', logo: '/brands/zimmer.png' }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className={cn(theme.layout.sectionSmall, "bg-white")}>
      <div className={cn(theme.layout.container)}>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn(theme.text.h3, theme.colors.textPrimary, "flex items-center")}>
            <span className="text-2xl mr-2">✨</span>
            Top Brands
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
            View All
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Brands Scroll Container */}
        <div className="relative">
          {/* Scroll Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
          >
            {topBrands.map((brand, index) => (
              <BrandCard key={`${brand.name}-${index}`} brand={brand} />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-200 group"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-200 group"
          >
            <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </section>
  );
}

function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="min-w-[160px] w-[160px] bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer p-4 text-center flex flex-col items-center justify-center h-28">
      {/* Brand Logo */}
      <div className="relative w-14 h-10 mb-2 flex items-center justify-center overflow-hidden">
        <Image
          src={brand.logo || "/1.png"}
          alt={brand.name}
          width={56}
          height={40}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Brand Name */}
      <h3 className="text-xs font-medium text-gray-800 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
        {brand.name}
      </h3>
    </div>
  );
}