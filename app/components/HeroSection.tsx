"use client";

import React from 'react';
import Image from 'next/image';
import { theme, cn, themeClasses } from '../theme/theme';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
}

export function HeroSection() {
  const slides: HeroSlide[] = [
    {
      id: 1,
      title: "Abutments,",
      subtitle: "COPINGS,",
      description: "More – Prosthetics for Every Implant!",
      price: "Starting at ₹120/-",
      image: "/1.png",
      badge: "NEW ARRIVAL"
    }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const stats = [
    { icon: "📦", label: "Products", value: "20,000+" },
    { icon: "⭐", label: "Brands", value: "450+" },
    { icon: "✓", label: "100% Original", value: "100%" },
    { icon: "₹", label: "Best price", value: "Best" },
  ];

  return (
    <section className="relative bg-gray-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/1.png"
          alt="Dental Products Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/90 via-gray-900/85 to-black/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <div className={cn(theme.layout.container, "py-6 lg:py-10")}>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center min-h-[350px]">
            {/* Left Content */}
            <div className="space-y-4 lg:space-y-6">
              {/* Badge */}
              <div className="flex items-center">
                <div className="inline-flex items-center px-3 py-2 bg-red-600 text-white text-sm font-bold rounded-tr-2xl rounded-bl-2xl shadow-lg">
                  <span className="mr-2">🆕</span>
                  {slides[currentSlide].badge}
                </div>
              </div>
              
              {/* Brand Name */}
              <div className="text-base font-semibold text-gray-300">
                DentalTech
              </div>
              
              {/* Main Title */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-cyan-400">{slides[currentSlide].title}</span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-white">{slides[currentSlide].subtitle}</span>
                  <span className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-normal ml-4">&</span>
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mt-3">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Price Badge */}
              <div className="inline-block">
                <div className="bg-cyan-400 text-black px-5 py-2.5 rounded-lg font-bold text-base shadow-lg">
                  {slides[currentSlide].price}
                </div>
              </div>
            </div>

            {/* Right Content - Product Highlight */}
            <div className="relative lg:mt-0 mt-6">
              <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Featured Products</h3>
                  <p className="text-gray-300 text-sm">Premium dental equipment & supplies</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-cyan-500/10 to-blue-500/20 rounded-xl blur-xl"></div>
              <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-between items-center mt-8 lg:mt-12">
            <button 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-colors",
                    currentSlide === index ? "bg-cyan-400" : "bg-white/30"
                  )}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            
            <button 
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-cyan-50 text-gray-800 py-6 border-t border-cyan-100">
        <div className={cn(theme.layout.container)}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white text-xl">
                  {stat.icon}
                </div>
                <div className="text-center md:text-left">
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}