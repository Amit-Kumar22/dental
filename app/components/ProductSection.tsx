"use client";

import React from 'react';
import Image from 'next/image';
import { theme, cn } from '../theme/theme';

interface Product {
  id: string;
  name: string;
  brand?: string;
  currentPrice: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  image: string;
  badge?: string;
  inStock: boolean;
  options?: number;
  description?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
  sectionIcon?: string;
}

export function ProductSection({ title, products, showViewAll = true, sectionIcon }: ProductSectionProps) {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className={cn(theme.layout.sectionSmall, "bg-white")}>
      <div className={cn(theme.layout.container)}>
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className={cn(theme.text.h3, theme.colors.textPrimary, "flex items-center")}>
            {sectionIcon && <span className="text-3xl mr-3">{sectionIcon}</span>}
            {title}
          </h2>
          {showViewAll && (
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group">
              View All
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Products Scroll Container */}
        <div className="relative">
          {/* Scroll Area */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <ProductCard key={`${product.id}-${index}`} product={product} />
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

function ProductCard({ product }: { product: Product }) {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={cn(
      "min-w-[260px] w-[260px] bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col"
    )}>
      {/* Wishlist Heart */}
      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 hover:bg-red-50 z-10 group-hover:scale-110 transition-all border border-gray-200">
        <svg className="w-3 h-3 text-gray-400 hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      {/* Product Badge */}
      {product.badge && (
        <div className="absolute top-2 left-2 z-10">
          <span className={cn(
            "px-2 py-1 rounded-md text-xs font-semibold",
            product.badge === 'Only 4 Left' || product.badge.includes('Left') 
              ? "bg-red-500 text-white" 
              : "bg-green-500 text-white"
          )}>
            {product.badge}
          </span>
        </div>
      )}

      {/* Product Image */}
      <div className="aspect-square bg-gray-50 flex items-center justify-center p-4 group-hover:bg-gray-100 transition-colors border-b border-gray-100 overflow-hidden">
        <Image
          src={product.image || "/1.png"}
          alt={product.name}
          width={120}
          height={120}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info - Flex grow to push buttons to bottom */}
      <div className="p-3 flex flex-col flex-grow">
        {/* Content Section - Flex grow */}
        <div className="flex flex-col flex-grow space-y-2">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight h-9">
            {product.name}
          </h3>
          
          {product.description && (
            <p className="text-xs text-gray-500 line-clamp-2 h-7">
              {product.description}
            </p>
          )}

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={cn("w-3 h-3", i < product.rating ? "text-yellow-400" : "text-gray-300")} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ₹{product.currentPrice.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm line-through text-gray-400">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {discountPercentage > 0 && (
              <div className="flex items-center space-x-2">
                <span className="text-xs text-green-600 font-medium">
                  ↓{discountPercentage}% Off
                </span>
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full font-medium">
                  {product.reviewCount}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Buttons Section - Always at bottom */}
        <div className="space-y-2 mt-3">
          {/* Add Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors flex items-center justify-center space-x-2">
            <span>ADD</span>
            {product.options && (
              <span className="text-xs opacity-80">
                {product.options} Options
              </span>
            )}
          </button>

          {/* View Similar */}
          <button className="w-full text-xs text-green-600 hover:text-green-700 flex items-center justify-center space-x-1 group/similar">
            <span>View Similar Products</span>
            <svg className="w-3 h-3 group-hover/similar:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Add custom CSS for hiding scrollbars
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;