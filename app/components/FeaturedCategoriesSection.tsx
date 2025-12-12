"use client";

import React from 'react';
import { theme, cn } from '../theme/theme';

interface FeaturedCategory {
  title: string;
  subtitle: string;
  description?: string;
  buttonText: string;
  backgroundImage: string;
  backgroundColor: string;
  textColor: string;
  size: 'large' | 'medium';
}

export function FeaturedCategoriesSection() {
  const featuredCategories: FeaturedCategory[] = [
    {
      title: 'Implant',
      subtitle: 'Prosthetics',
      description: 'Dentaltech, Mediden, Juli-Dent, & More',
      buttonText: 'SHOP NOW',
      backgroundImage: '/featured/implant-prosthetics.jpg',
      backgroundColor: 'from-slate-700 to-slate-800',
      textColor: 'text-white',
      size: 'medium'
    },
    {
      title: 'Orthodontic',
      subtitle: 'Bands',
      description: 'U Ortho, OSL, OrthoMetric & More',
      buttonText: 'SHOP NOW',
      backgroundImage: '/featured/orthodontic-bands.jpg',
      backgroundColor: 'from-gray-800 to-gray-900',
      textColor: 'text-white',
      size: 'medium'
    },
    {
      title: 'Implant',
      subtitle: 'Surgical Kits',
      description: 'Waldent, Cotisen, Sweden & Martina & More',
      buttonText: 'SHOP NOW',
      backgroundImage: '/featured/surgical-kits.jpg',
      backgroundColor: 'from-slate-600 to-slate-800',
      textColor: 'text-white',
      size: 'large'
    },
    {
      title: 'Dental',
      subtitle: 'Autoclaves',
      description: 'Waldent, Runyes, W&H Life Steriware, Unident & More',
      buttonText: 'SHOP NOW',
      backgroundImage: '/featured/autoclaves.jpg',
      backgroundColor: 'from-slate-700 to-slate-900',
      textColor: 'text-white',
      size: 'medium'
    },
    {
      title: 'Extraction',
      subtitle: 'Forceps',
      description: 'Waldent, API, GDC Oracraft, & More',
      buttonText: 'SHOP NOW',
      backgroundImage: '/featured/forceps.jpg',
      backgroundColor: 'from-slate-800 to-slate-900',
      textColor: 'text-white',
      size: 'medium'
    }
  ];

  return (
    <section className={cn(theme.layout.sectionSmall, "bg-white")}>
      <div className={cn(theme.layout.container)}>
        {/* Section Header */}
        <div className="mb-6">
          <h2 className={cn(theme.text.h3, theme.colors.textPrimary, "text-center md:text-left")}>
            Featured Categories
          </h2>
        </div>

        {/* Featured Categories Grid - Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Row 1: Two medium cards */}
          <FeaturedCard category={featuredCategories[0]} />
          <FeaturedCard category={featuredCategories[1]} />
          
          {/* Large card - spans full height on larger screens */}
          <div className="md:col-span-2 lg:col-span-1 lg:row-span-2">
            <FeaturedCard category={featuredCategories[2]} isLarge />
          </div>

          {/* Row 2: Two medium cards */}
          <FeaturedCard category={featuredCategories[3]} />
          <FeaturedCard category={featuredCategories[4]} />
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ category, isLarge = false }: { category: FeaturedCategory, isLarge?: boolean }) {
  return (
    <div className={cn(
      "relative rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02]",
      `bg-gradient-to-br ${category.backgroundColor}`,
      isLarge ? "h-80 lg:h-full" : "h-64"
    )}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
      
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col justify-between">
        <div className="space-y-3">
          <h3 className={cn(
            "font-bold leading-tight",
            category.textColor,
            isLarge ? "text-3xl lg:text-4xl" : "text-2xl lg:text-3xl"
          )}>
            {category.title}
          </h3>
          <h4 className={cn(
            "font-bold leading-tight",
            isLarge ? "text-2xl lg:text-3xl text-blue-300" : "text-xl lg:text-2xl",
            category.textColor
          )}>
            {category.subtitle}
          </h4>
          {category.description && (
            <p className={cn(
              "opacity-90 leading-relaxed",
              isLarge ? "text-base lg:text-lg" : "text-sm lg:text-base",
              category.textColor
            )}>
              {category.description}
            </p>
          )}
        </div>
        
        <button className={cn(
          "self-start bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg",
          isLarge ? "px-5 py-2.5 text-base mt-4" : "px-4 py-2 text-sm mt-3"
        )}>
          {category.buttonText}
        </button>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}