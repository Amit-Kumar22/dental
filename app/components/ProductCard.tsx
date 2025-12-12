'use client';

import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon, StarIcon as StarSolidIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { cn } from '../theme/theme';

interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  originalPrice?: number;
  currentPrice: number;
  discount?: number;
  badge?: string;
  badgeColor?: 'blue' | 'green' | 'red' | 'orange';
  isWishlisted?: boolean;
  offers?: number;
  freebie?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: string) => void;
  onToggleWishlist?: (productId: string) => void;
}

export default function ProductCard({ product, onAddToCart, onToggleWishlist }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onToggleWishlist?.(product.id);
  };

  const handleAddToCart = () => {
    onAddToCart?.(product.id);
  };

  const formatPrice = (price: number) => {
    return `₹ ${price.toLocaleString()}`;
  };

  const getBadgeColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 text-white shadow-md',
      green: 'bg-green-600 text-white shadow-md',
      red: 'bg-red-600 text-white shadow-md',
      orange: 'bg-orange-600 text-white shadow-md',
    };
    return colors[color as keyof typeof colors] || 'bg-blue-600 text-white shadow-md';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => {
      if (index < Math.floor(rating)) {
        return <StarSolidIcon key={index} className="w-3 /* 12px */ h-3 /* 12px */ text-yellow-400" />;
      }
      if (index < rating) {
        return (
          <div key={index} className="relative w-3 /* 12px */ h-3 /* 12px */">
            <StarIcon className="absolute inset-0 text-gray-300" />
            <StarSolidIcon className="absolute inset-0 text-yellow-400 clip-path-half" />
          </div>
        );
      }
      return <StarIcon key={index} className="w-3 /* 12px */ h-3 /* 12px */ text-gray-300" />;
    });
  };

  // Placeholder image with dental theme
  const placeholderImage = "data:image/svg+xml,%3Csvg width='240' height='240' viewBox='0 0 240 240' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='240' height='240' fill='%23F8FAFC'/%3E%3Cpath d='M120 60C100 60 84 76 84 96C84 116 100 132 120 132C140 132 156 116 156 96C156 76 140 60 120 60Z' fill='%23E2E8F0'/%3E%3Cpath d='M120 140C96 140 76 160 76 184V200H164V184C164 160 144 140 120 140Z' fill='%23CBD5E1'/%3E%3Ctext x='120' y='220' text-anchor='middle' fill='%23475569' font-family='sans-serif' font-size='12'%3EDental Product%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-white rounded-lg /* 8px */ border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group relative h-full flex flex-col">
      {/* Top badges and wishlist */}
      <div className="absolute top-2 /* 8px */ left-2 /* 8px */ right-2 /* 8px */ flex justify-between items-start z-10">
        {/* Left side badges */}
        <div className="flex flex-col space-y-1 /* 4px */">
          {product.badge && (
            <div className={cn(
              'px-1.5 /* 6px */ py-0.5 /* 2px */ rounded text-xs /* 12px */ font-medium backdrop-blur-sm',
              getBadgeColor(product.badgeColor || 'blue')
            )}>
              {product.badge}
            </div>
          )}
          {product.freebie && (
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-1.5 /* 6px */ py-0.5 /* 2px */ rounded text-xs /* 12px */ font-medium shadow-md">
              🎁 Freebies
            </div>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlistClick}
          className="p-1 /* 4px */ rounded-full bg-white/90 backdrop-blur-sm hover:bg-white border border-gray-200 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          {isWishlisted ? (
            <HeartSolidIcon className="w-3.5 /* 14px */ h-3.5 /* 14px */ text-red-500" />
          ) : (
            <HeartIcon className="w-3.5 /* 14px */ h-3.5 /* 14px */ text-gray-400 hover:text-red-500" />
          )}
        </button>
      </div>

      {/* Product Image */}
      <div className="aspect-square p-3 /* 12px */ bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className={cn(
            "w-full h-full object-contain transition-all duration-500",
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95",
            "group-hover:scale-105"
          )}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            e.currentTarget.src = placeholderImage;
            setImageLoaded(true);
          }}
        />
        {!imageLoaded && (
          <div className="absolute inset-3 /* 12px */ flex items-center justify-center">
            <div className="w-8 /* 32px */ h-8 /* 32px */ rounded-full border-2 border-blue-200 border-t-blue-600 animate-spin"></div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 /* 12px */ flex-1 flex flex-col">
        {/* Rating and Reviews */}
        <div className="flex items-center justify-between mb-2 /* 8px */">
          <div className="flex items-center space-x-1 /* 4px */">
            {renderStars(product.rating)}
            <span className="text-xs /* 12px */ font-medium text-gray-700 ml-1 /* 4px */">
              {product.rating}
            </span>
          </div>
          <span className="text-xs /* 12px */ text-gray-500 bg-gray-100 px-1.5 /* 6px */ py-0.5 /* 2px */ rounded">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-xs /* 12px */ font-medium text-gray-900 mb-2 /* 8px */ line-clamp-2 leading-4 /* 16px */ flex-1 min-h-[32px] /* 32px */">
          {product.name}
        </h3>

        {/* Pricing Section */}
        <div className="mb-3 /* 12px */">
          <div className="flex items-baseline space-x-1.5 /* 6px */ mb-1 /* 4px */">
            <span className="text-sm /* 14px */ font-bold text-gray-900">
              {formatPrice(product.currentPrice)}
            </span>
            {product.originalPrice && product.originalPrice > product.currentPrice && (
              <span className="text-xs /* 12px */ text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="flex items-center justify-between">
            {product.discount && (
              <span className="text-xs /* 12px */ font-medium text-green-700 bg-green-100 px-1.5 /* 6px */ py-0.5 /* 2px */ rounded">
                ↓{product.discount}% OFF
              </span>
            )}
            {product.offers && (
              <div className="flex items-center text-xs /* 12px */ text-orange-600 font-medium">
                <span className="bg-orange-100 px-1.5 /* 6px */ py-0.5 /* 2px */ rounded">
                  🔥 {product.offers}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 /* 8px */ mt-auto">
          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs /* 12px */ font-medium py-1.5 /* 6px */ px-3 /* 12px */ rounded transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            ADD
            {product.offers && (
              <span className="ml-1 /* 4px */ text-xs /* 12px */ opacity-90">
                • {product.offers}
              </span>
            )}
          </button>

          {/* View Similar Products */}
          <button className="w-full text-center text-blue-600 hover:text-blue-700 text-xs /* 12px */ font-medium py-1 /* 4px */ border-t border-gray-100 transition-colors duration-200 hover:bg-blue-50 rounded-b-lg -mx-3 /* -12px */ -mb-3 /* -12px */ px-3 /* 12px */ pb-3 /* 12px */">
            View Similar →
          </button>
        </div>
      </div>
    </div>
  );
}