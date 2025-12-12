"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { cn } from '../theme/theme';

export default function BuyingGuideHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <section className="relative min-h-[350px] /* 350px */ overflow-hidden">
      {/* Background with proper gradient matching screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-dental-blue via-dental-blue-dark to-[#2A5F7F]" />
      
      {/* Hero Background Image - Professional with tablet */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* Using the actual hero image from screenshot with proper positioning */}
            <div className="absolute right-0 top-0 w-3/5 h-full">
              <div className="relative w-full h-full bg-gradient-to-l from-transparent to-dental-blue/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for the professional woman image */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-200/30 to-blue-300/20 flex items-center justify-end pr-12">
                    <div className="text-white/20 text-8xl">👩‍💼</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 /* 16px */ sm:px-6 /* 24px */ lg:px-8 /* 32px */ py-8 /* 32px */ lg:py-10 /* 40px */">
        <div className="max-w-3xl">
          {/* DentalKart Logo */}
          <div className="mb-6 /* 24px */ lg:mb-8 /* 32px */">
            <div className="flex items-center">
              <Image
                src="/dentalkart-logo.svg"
                alt="DentalKart"
                width={240}
                height={60}
                className="h-12 /* 48px */ lg:h-16 /* 64px */ w-auto"
                priority
              />
            </div>
          </div>

          {/* Main Content - Matching screenshot layout */}
          <div className="space-y-4 /* 16px */ lg:space-y-6 /* 24px */">
            {/* Large "Buying Guide" heading */}
            <div className="space-y-1 /* 4px */">
              <h1 className="text-2xl /* 24px */ lg:text-4xl /* 36px */ xl:text-5xl /* 48px */ font-bold text-white leading-none tracking-tight">
                Buying Guide
              </h1>
            </div>
            
            {/* Subtitle matching screenshot */}
            <div className="space-y-0.5 /* 2px */">
              <p className="text-sm /* 14px */ lg:text-base /* 16px */ font-normal text-white/95 leading-relaxed">
                From diagnosis to execution refine your skills
              </p>
              <p className="text-xl /* 20px */ lg:text-2xl /* 24px */ font-normal text-white/95 leading-relaxed">
                with expert-curated guides!
              </p>
            </div>
          </div>

          {/* Search Bar - Matching screenshot style */}
          <div className="mt-4 /* 16px */ lg:mt-6 /* 24px */">
            <form onSubmit={handleSearch} className="w-full max-w-md">
              <div className={cn(
                'relative bg-white rounded-full /* full radius */ shadow-md transition-all duration-300',
                'border border-white/10',
                isSearchFocused && 'ring-2 ring-white/20 scale-[1.01]'
              )}>
                <div className="flex items-center">
                  <div className="pl-3 /* 12px */ pr-1 /* 4px */ py-2 /* 8px */">
                    <MagnifyingGlassIcon className="h-3 /* 12px */ w-3 /* 12px */ text-gray-400" />
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Search Buying Guide"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className={cn(
                      'flex-1 bg-transparent border-0 py-2 /* 8px */ pr-3 /* 12px */',
                      'text-xs /* 12px */ lg:text-sm /* 14px */ text-gray-700 placeholder-gray-400',
                      'focus:outline-none focus:ring-0'
                    )}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}