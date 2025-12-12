'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '../theme/theme';
import ProductCard from './ProductCard';

// Sample product data based on the screenshots
const sampleProducts = [
  {
    id: '1',
    name: 'Waldent Stainless Steel Bone Mill',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 16,
    originalPrice: 36800,
    currentPrice: 11250,
    discount: 69,
    offers: 563,
    freebie: true,
    badge: '★4.5',
    badgeColor: 'green' as const,
  },
  {
    id: '2',
    name: 'Waldent Premium Taper Gold Rotary Files - 31mm',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 8,
    currentPrice: 984,
    offers: 30,
    freebie: true,
  },
  {
    id: '3',
    name: 'Waldent Retreatment Rotary Files',
    image: 'https://images.unsplash.com/photo-1559757175-b1c4c46bcd76?w=300&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 8,
    currentPrice: 1120,
    offers: 30,
    freebie: true,
  },
  {
    id: '4',
    name: 'Waldent Wal-flex Gold Rotary Files 21mm',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccf?w=300&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 73,
    currentPrice: 890,
    offers: 30,
    freebie: true,
  },
  {
    id: '5',
    name: 'Waldent Atraumatic Extraction Instruments',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=300&fit=crop&auto=format',
    rating: 4.5,
    reviews: 2,
    originalPrice: 15980,
    currentPrice: 8446,
    discount: 47,
    offers: 349,
    freebie: true,
    badge: '★4.5',
    badgeColor: 'green' as const,
  },
  {
    id: '6',
    name: 'GDC Sickle Scalers Tower - Jaquette #6 (Su15/30)',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=300&h=300&fit=crop&auto=format',
    rating: 4.2,
    reviews: 2,
    originalPrice: 1650,
    currentPrice: 953,
    discount: 42,
    offers: 20,
    freebie: true,
    badge: 'Only 2 Left',
    badgeColor: 'red' as const,
  },
  // Add more products for pagination...
  {
    id: '7',
    name: 'Waldent Wal-flex Glide Rotary Files',
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=300&h=300&fit=crop&auto=format',
    rating: 4.8,
    reviews: 15,
    currentPrice: 639,
    offers: 30,
    freebie: true,
  },
  {
    id: '8',
    name: 'GDC LuxAtip - 3mm Straight (L3)',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=300&fit=crop&auto=format',
    rating: 5.0,
    reviews: 1,
    originalPrice: 2700,
    currentPrice: 1519,
    discount: 44,
    offers: 30,
    freebie: true,
  },
  {
    id: '9',
    name: 'Waldent K-flex Files 21mm K-Flex files to prepare root canals',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop&auto=format',
    rating: 4.2,
    reviews: 5,
    currentPrice: 260,
    offers: 5,
    freebie: true,
  },
  {
    id: '10',
    name: 'IDENTical Steps for Implant Model Maxi 2018',
    image: 'https://images.unsplash.com/photo-1559757175-b1c4c46bcd76?w=300&h=300&fit=crop&auto=format',
    rating: 4.0,
    reviews: 2,
    originalPrice: 4200,
    currentPrice: 3500,
    discount: 17,
    offers: 175,
    freebie: true,
  },
  {
    id: '11',
    name: 'Waldent Wal-Pex 5 Pro Gold Apex Locator',
    image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccf?w=300&h=300&fit=crop&auto=format',
    rating: 3.5,
    reviews: 2,
    originalPrice: 15000,
    currentPrice: 10336,
    discount: 31,
    offers: 480,
    freebie: true,
    badge: 'Only 4 Left',
    badgeColor: 'red' as const,
  },
  {
    id: '12',
    name: 'Codyson Ultrasonic Cleaner CD-4875 (1.5 Liter)',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=300&fit=crop&auto=format',
    rating: 4.7,
    reviews: 6,
    originalPrice: 82560,
    currentPrice: 26248,
    discount: 68,
    offers: 250,
    freebie: true,
  },
];

export default function FreebiesGrid() {
  const [sortBy, setSortBy] = useState('Recommended');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [] as string[],
    priceRange: '',
    rating: '',
  });

  const sortOptions = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Rating', 'Newest'];
  const filterCategories = [
    { name: 'Brands', options: ['Waldent', 'GDC', 'Codyson', 'IDENTical'] },
    { name: 'Price Range', options: ['Under ₹500', '₹500 - ₹2000', '₹2000 - ₹10000', 'Above ₹10000'] },
    { name: 'Rating', options: ['4★ & above', '3★ & above', '2★ & above', '1★ & above'] },
  ];

  const totalProducts = sampleProducts.length;
  const productsPerPage = 12;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = sampleProducts.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50 py-8 /* 32px */ min-h-screen">
      <div className="container mx-auto px-4 /* 16px */ max-w-7xl /* 1280px */">
        {/* Filters and Sort Section */}
        <div className="bg-white rounded-lg p-6 /* 24px */ mb-6 /* 24px */ shadow-sm border border-gray-200">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 /* 16px */ lg:space-y-0">
            {/* Filters */}
            <div className="text-sm /* 14px */ font-medium text-gray-700 mb-4 /* 16px */ lg:mb-0">
              FILTERS BY
            </div>
            
            <div className="flex flex-wrap gap-4 /* 16px */ lg:flex-1 lg:justify-center">
              {filterCategories.map((category) => (
                <div key={category.name} className="relative">
                  <button className="flex items-center space-x-2 /* 8px */ px-4 /* 16px */ py-2 /* 8px */ border border-gray-300 rounded-full text-sm /* 14px */ font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
                    <span>{category.name}</span>
                    <ChevronDownIcon className="w-4 /* 16px */ h-4 /* 16px */" />
                  </button>
                </div>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-4 /* 16px */">
              <span className="text-sm /* 14px */ text-gray-600 whitespace-nowrap">Sort by</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-md px-4 /* 16px */ py-2 /* 8px */ pr-8 /* 32px */ text-sm /* 14px */ font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="absolute right-2 /* 8px */ top-1/2 transform -translate-y-1/2 w-4 /* 16px */ h-4 /* 16px */ text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 /* 1 column on mobile (320px+) */ xs:grid-cols-2 /* 2 columns on extra small (480px+) */ sm:grid-cols-2 /* 2 columns on small (640px+) */ md:grid-cols-3 /* 3 columns on medium (768px+) */ lg:grid-cols-4 /* 4 columns on large (1024px+) */ xl:grid-cols-5 /* 5 columns on extra large (1280px+) */ 2xl:grid-cols-6 /* 6 columns on 2xl (1536px+) */ gap-3 /* 12px */ sm:gap-4 /* 16px */ lg:gap-5 /* 20px */ mb-8 /* 32px */">
          {currentProducts.map((product) => (
            <div key={product.id} className="w-full min-h-[320px] /* 320px */ flex">
              <ProductCard
                product={product}
                onAddToCart={(id) => console.log('Add to cart:', id)}
                onToggleWishlist={(id) => console.log('Toggle wishlist:', id)}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-2 /* 8px */ bg-white rounded-lg p-4 /* 16px */ shadow-sm border border-gray-200">
          {/* Previous button */}
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-8 /* 32px */ h-8 /* 32px */ rounded-md border border-gray-300 text-sm /* 14px */ font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            ‹‹
          </button>

          {/* Page numbers */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, index) => {
            let pageNum;
            if (totalPages <= 5) {
              pageNum = index + 1;
            } else if (currentPage <= 3) {
              pageNum = index + 1;
            } else if (currentPage > totalPages - 3) {
              pageNum = totalPages - 4 + index;
            } else {
              pageNum = currentPage - 2 + index;
            }

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={cn(
                  'flex items-center justify-center w-8 /* 32px */ h-8 /* 32px */ rounded-md text-sm /* 14px */ font-medium transition-colors duration-200',
                  currentPage === pageNum
                    ? 'bg-orange-500 text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                )}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Show ellipsis and last page if needed */}
          {totalPages > 5 && currentPage < totalPages - 2 && (
            <>
              <span className="text-gray-500">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="flex items-center justify-center w-8 /* 32px */ h-8 /* 32px */ rounded-md border border-gray-300 text-sm /* 14px */ font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                {totalPages}
              </button>
            </>
          )}

          {/* Next button */}
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-8 /* 32px */ h-8 /* 32px */ rounded-md border border-gray-300 text-sm /* 14px */ font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            ››
          </button>
        </div>
      </div>
    </div>
  );
}