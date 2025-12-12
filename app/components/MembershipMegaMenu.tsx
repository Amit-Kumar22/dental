"use client";

import React from "react";
import Image from "next/image";
import { cn } from "../theme/theme";

export default function MembershipMegaMenu() {
  return (
    <div className="w-full md:w-[700px] lg:w-[800px] xl:w-[900px] bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100 border border-gray-200 rounded-xl shadow-2xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-5">
        {/* Left Content Section */}
        <div className="flex flex-col justify-center space-y-2">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
            Plus membership pays the buyer with double benefits.
          </h2>
          
          <p className="text-gray-700 text-sm md:text-base leading-snug">
            Delivery gets free on any purchase above 499 and bonus of double reward coins.
          </p>

          <div className="pt-1">
            <p className="text-orange-600 font-semibold text-sm md:text-base mb-2">
              See Membership Plan For More Offers And Services
            </p>
            
            <button className="inline-flex items-center justify-center px-5 py-2 border-2 border-gray-800 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-50 transition-colors text-sm">
              Explore More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-48 md:h-56 rounded-xl overflow-hidden shadow-lg">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-300 to-orange-300"></div>
            
            {/* White Card with Text */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-xl px-5 py-2 shadow-lg z-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-600">
                MEMBERSHIP
              </h3>
            </div>

            {/* Handshake Image */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 flex items-end justify-center">
              <div className="relative w-full h-full">
                <Image 
                  src="/membership-handshake.png" 
                  alt="Membership Benefits" 
                  fill
                  className="object-contain object-bottom"
                  onError={(e) => {
                    // Fallback to emoji if image not found
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Fallback emoji */}
                <div className="absolute inset-0 flex items-end justify-center pb-2">
                  <span className="text-5xl">🤝</span>
                </div>
              </div>
            </div>

            {/* Decorative Wave Elements */}
            <svg className="absolute bottom-0 left-0 w-16 h-8 text-purple-400 opacity-50" viewBox="0 0 100 50" fill="currentColor">
              <path d="M0,25 Q25,10 50,25 T100,25 L100,50 L0,50 Z" />
            </svg>
            
            <svg className="absolute top-8 right-3 w-12 h-12 text-blue-300 opacity-40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
              <circle cx="50" cy="50" r="20" />
              <path d="M30,50 L70,50 M50,30 L50,70" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
