"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { cn } from '../theme/theme';

export default function BuyingGuideHeader() {
  return (
    <header className="bg-dental-blue-dark text-white py-2 /* 8px */ shadow-lg">
      <div className="max-w-7xl mx-auto px-4 /* 16px */ lg:px-6 /* 24px */">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/dentalkart-logo.svg"
              alt="DentalKart"
              width={140}
              height={35}
              className="h-6 /* 24px */ lg:h-8 /* 32px */ w-auto"
              priority
            />
          </Link>

          {/* Navigation Title */}
          <div className="flex items-center space-x-4 /* 16px */">
            <h1 className="text-base /* 16px */ lg:text-lg /* 18px */ font-medium">
              Buying Guide
            </h1>
            
            {/* Search Icon */}
            <button className="p-1 /* 4px */ hover:bg-white/10 rounded-full transition-colors">
              <MagnifyingGlassIcon className="h-4 /* 16px */ w-4 /* 16px */" />
            </button>
            
            {/* Cart Icon */}
            <Link href="/cart" className="p-1 /* 4px */ hover:bg-white/10 rounded-full transition-colors">
              <ShoppingCartIcon className="h-4 /* 16px */ w-4 /* 16px */" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}