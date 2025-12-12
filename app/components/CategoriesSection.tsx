"use client";

import React from 'react';
import Image from 'next/image';
import { theme, cn } from '../theme/theme';

interface Category {
  name: string;
  image: string;
  description?: string;
  icon?: string;
}

export function CategoriesSection() {
  const categories: Category[] = [
    {
      name: 'Implant Prosthetics',
      image: '/categories/implant-prosthetics.jpg',
      description: 'Complete implant solutions',
      icon: '🦷'
    },
    {
      name: 'Airotors',
      image: '/categories/airotors.jpg',
      description: 'High-speed handpieces',
      icon: '⚙️'
    },
    {
      name: 'Composite',
      image: '/categories/composite.jpg',
      description: 'Restorative materials',
      icon: '🔧'
    },
    {
      name: 'Intra Oral Camera',
      image: '/categories/intraoral-camera.jpg',
      description: 'Digital imaging',
      icon: '📹'
    },
    {
      name: 'Endomotors',
      image: '/categories/endomotors.jpg',
      description: 'Root canal equipment',
      icon: '🔌'
    },
    {
      name: 'Autoclave',
      image: '/categories/autoclave.jpg',
      description: 'Sterilization equipment',
      icon: '♨️'
    },
    {
      name: 'Rotary Files',
      image: '/categories/rotary-files.jpg',
      description: 'Endodontic instruments',
      icon: '📏'
    },
    {
      name: 'Cements',
      image: '/categories/cements.jpg',
      description: 'Dental adhesives',
      icon: '🧪'
    },
    {
      name: 'Impression Materials',
      image: '/categories/impression.jpg',
      description: 'Molding compounds',
      icon: '🏺'
    },
    {
      name: 'Brackets',
      image: '/categories/brackets.jpg',
      description: 'Orthodontic solutions',
      icon: '🔗'
    },
    {
      name: 'Sutures & Needles',
      image: '/categories/sutures.jpg',
      description: 'Surgical supplies',
      icon: '🪡'
    },
    {
      name: 'Spare parts',
      image: '/categories/spare-parts.jpg',
      description: 'Equipment components',
      icon: '⚡'
    }
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={cn(theme.layout.sectionSmall, "bg-gray-50")}>
      <div className={cn(theme.layout.container)}>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn(theme.text.h3, theme.colors.textPrimary)}>
            Top Categories
          </h2>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
            View All
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Categories Scroll Container */}
        <div className="relative">
          {/* Grid Layout for larger screens, Scroll for smaller */}
          <div className="hidden lg:grid lg:grid-cols-6 gap-3">
            {categories.slice(0, 12).map((category, index) => (
              <CategoryCard key={index} category={category} />
            ))}
          </div>

          {/* Horizontal Scroll for mobile/tablet */}
          <div className="lg:hidden">
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            >
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category} isScrollable />
              ))}
            </div>

            {/* Navigation Arrows for mobile */}
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-200 group lg:hidden"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow z-10 border border-gray-200 group lg:hidden"
            >
              <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Gradient Overlays for mobile */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10 lg:hidden"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10 lg:hidden"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, isScrollable = false }: { category: any, isScrollable?: boolean }) {
  return (
    <div className={cn(
      "bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer text-center p-3 flex flex-col items-center justify-center h-32",
      isScrollable ? "min-w-[140px] w-[140px]" : ""
    )}>
      {/* Category Image/Icon */}
      <div className="relative w-12 h-12 mb-2 flex items-center justify-center rounded-lg overflow-hidden bg-gray-50 group-hover:bg-gray-100 transition-colors">
        <Image
          src={category.image || "/1.png"}
          alt={category.name}
          width={48}
          height={48}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Category Name */}
      <h3 className="text-xs font-medium text-gray-800 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
        {category.name}
      </h3>
    </div>
  );
}