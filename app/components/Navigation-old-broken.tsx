"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { theme, cn } from '../theme/theme';
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  ShoppingCartIcon,
  HeartIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

// Top Navigation (nav-1.png style)
export function TopNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.category-dropdown')) {
        setActiveCategory(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const categories = [
    'Category',
    'Brand', 
    'Buying Guide',
    'Freebies',
    'Best Seller',
    'Membership',
    'Events',
    'New Clinic Setup'
  ];

  // Simple category dropdown for TopNavbar
  const categoryDropdown = {
    'Category': [
      'Instruments', 'Equipment', 'Materials', 'Consumables', 
      'Implants', 'Orthodontics', 'Endodontics', 'Periodontics',
      'Oral Surgery', 'Prosthetics', 'Lab Equipment', 'Digital Solutions'
    ],
    'Brand': [
      '3M ESPE', 'Dentsply Sirona', 'Nobel Biocare', 'Straumann',
      'GC Corporation', 'Kerr Corporation', 'Coltene', 'Mani',
      'Waldent', 'Endoking', 'SuperEndo', 'Medident'
    ]
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className={cn(theme.layout.container, "py-1 border-b border-gray-100 bg-gray-800")}>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-gray-200">
            <span>📞 +91-728-9999-458</span>
            <span>📧 support@dentalkart.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-gray-200">
            <span>Mon to Sun (9:00 AM to 9:00 PM)</span>
            <span>🏆 4.5 ⭐ Average online rating</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className={cn(theme.layout.container, "py-2 bg-white")}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/dentalkart-logo.svg"
              alt="DentalKart"
              width={130}
              height={32}
              className="h-6 w-auto"
              priority
            />
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-6">
            <div className={cn(
              "relative w-full",
              isSearchFocused ? "ring-2 ring-blue-500" : "",
              "rounded-full overflow-hidden"
            )}>
              <input
                type="text"
                placeholder="Search over 20,000 Dental Products"
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-500"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-1.5 rounded-full hover:bg-blue-700 transition-colors">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-3">
            {/* Search button - Mobile */}
            <button className="lg:hidden p-1.5 text-gray-800 hover:text-blue-600 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>

            {/* Login */}
            <div className="hidden md:flex items-center space-x-1 text-gray-800 hover:text-blue-600 cursor-pointer transition-colors">
              <UserIcon className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </div>

            {/* Wishlist */}
            <button className="relative p-1.5 text-gray-800 hover:text-red-500 transition-colors">
              <HeartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium">
                0
              </span>
            </button>

            {/* Cart */}
            <button className="relative p-1.5 text-gray-800 hover:text-blue-600 transition-colors flex items-center">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-medium">
                0
              </span>
              <span className="hidden md:inline ml-2 text-sm font-medium">Cart</span>
            </button>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-1.5 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-5 h-5" />
              ) : (
                <Bars3Icon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <div className="hidden lg:block border-t border-gray-200 bg-blue-600 category-dropdown">
        <div className={cn(theme.layout.container, "py-0")}>
          <nav className="flex items-center justify-center space-x-6">
            {categories.map((category) => (
              <div key={category} className="relative">
                <button
                  className={cn(
                    "py-3 text-sm font-medium whitespace-nowrap text-white",
                    "hover:text-yellow-300 hover:border-b-2 hover:border-yellow-300 transition-all duration-200 flex items-center"
                  )}
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                >
                  {category}
                  {categoryDropdown[category as keyof typeof categoryDropdown] && (
                    <ChevronDownIcon className={cn("w-3 h-3 ml-1 transition-transform", activeCategory === category ? "rotate-180" : "")} />
                  )}
                </button>
                
                {/* Simple Dropdown */}
                {activeCategory === category && categoryDropdown[category as keyof typeof categoryDropdown] && (
                  <div className="absolute top-full left-0 bg-white shadow-xl border border-gray-200 rounded-lg mt-1 w-64 z-50">
                    <div className="grid grid-cols-2 gap-1 p-3">
                      {categoryDropdown[category as keyof typeof categoryDropdown].map((item) => (
                        <button
                          key={item}
                          className="text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4">
            {/* Mobile search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </div>

            {/* Mobile navigation links */}
            <nav className="space-y-2">
              <button className="w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg flex items-center justify-between font-medium transition-all">
                Login
                <UserIcon className="w-5 h-5" />
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-gray-50 hover:text-blue-600 rounded-lg font-medium transition-all"
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// Alternative compact navigation (nav-2.png style)
export function CompactNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-container')) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Multi-level menu structure
  const menuStructure = {
    "Categories": {
      "Instruments": {
        "Hand Instruments": ["Scalers", "Curettes", "Probes", "Mirrors"],
        "Rotary Instruments": ["Burs", "Discs", "Mandrels", "Points"],
        "Surgical Instruments": ["Forceps", "Elevators", "Scalpels", "Scissors"]
      },
      "Equipment": {
        "Diagnostic Equipment": ["X-Ray", "Intraoral Camera", "Laser", "Ultrasonic"],
        "Treatment Equipment": ["Dental Units", "Compressors", "Autoclaves", "Lights"],
        "Laboratory Equipment": ["Impression", "Casting", "Polishing", "Vacuum"]
      },
      "Materials": {
        "Restorative Materials": ["Composite", "Amalgam", "Glass Ionomer", "Cements"],
        "Impression Materials": ["Alginate", "Silicone", "Polyether", "Compound"],
        "Endodontic Materials": ["Files", "Sealers", "Gutta Percha", "Irrigants"]
      },
      "Consumables": {
        "Disposables": ["Gloves", "Masks", "Barriers", "Cups"],
        "Prophylaxis": ["Paste", "Brushes", "Floss", "Rinse"],
        "Sterilization": ["Pouches", "Indicators", "Solutions", "Wraps"]
      }
    },
    "Brands": {
      "Premium Brands": {
        "3M ESPE": ["Restoratives", "Orthodontics", "Preventive", "Digital"],
        "Dentsply Sirona": ["Endodontics", "Restorative", "Equipment", "Digital"],
        "Nobel Biocare": ["Implants", "CAD/CAM", "Digital", "Prosthetics"]
      },
      "Popular Brands": {
        "GC Corporation": ["Restoratives", "Preventive", "Lab Products", "Equipment"],
        "Kerr Corporation": ["Endodontics", "Restoratives", "Lab", "Digital"],
        "Coltene": ["Endodontics", "Restoratives", "Impression", "Accessories"]
      }
    },
    "Solutions": {
      "By Practice Type": {
        "General Practice": ["Basic Setup", "Advanced Care", "Digital Upgrade", "Maintenance"],
        "Specialist Practice": ["Endo Setup", "Ortho Setup", "Oral Surgery", "Periodontics"],
        "Dental Labs": ["CAD/CAM", "Traditional", "Digital", "Materials"]
      },
      "By Treatment": {
        "Preventive": ["Cleaning", "Fluoride", "Sealants", "Education"],
        "Restorative": ["Fillings", "Crowns", "Bridges", "Veneers"],
        "Surgical": ["Extractions", "Implants", "Bone Grafts", "Soft Tissue"]
      }
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className={cn(theme.layout.container, "py-3")}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">
              DentalKart
            </div>
          </div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-1 dropdown-container">
            {Object.keys(menuStructure).map((mainMenu) => (
              <div key={mainMenu} className="relative group">
                <button
                  className="px-4 py-2 text-white hover:text-yellow-300 font-medium transition-colors flex items-center"
                  onClick={() => setActiveDropdown(activeDropdown === mainMenu ? null : mainMenu)}
                >
                  {mainMenu}
                  <ChevronDownIcon className={cn("w-4 h-4 ml-1 transition-transform", activeDropdown === mainMenu ? "rotate-180" : "")} />
                </button>
                
                {/* Main Dropdown */}
                {activeDropdown === mainMenu && (
                  <div 
                    className="dropdown-menu absolute top-full left-0 bg-white shadow-xl border border-gray-200 rounded-lg mt-1 w-80 z-50"
                  >
                    <div className="grid grid-cols-1">
                      {Object.entries(menuStructure[mainMenu as keyof typeof menuStructure]).map(([category, subcategories]) => (
                        <div key={category} className="relative">
                          <button
                            className="w-full text-left px-4 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100 flex items-center justify-between group/item"
                            onClick={() => setActiveSubmenu(activeSubmenu === category ? null : category)}
                          >
                            {category}
                            <ChevronDownIcon className={cn("w-4 h-4 transition-transform", activeSubmenu === category ? "rotate-180" : "")} />
                          </button>
                          
                          {/* Submenu */}
                          {activeSubmenu === category && (
                            <div className="dropdown-submenu absolute left-full top-0 bg-white shadow-xl border border-gray-200 rounded-lg ml-1 w-72 z-60">
                              {Object.entries(subcategories).map(([subcat, items]) => (
                                <div key={subcat} className="relative group/sub">
                                  <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
                                    <h4 className="text-sm font-semibold text-gray-900">{subcat}</h4>
                                  </div>
                                  <div className="px-4 py-2">
                                    {(items as string[]).map((item) => (
                                      <button
                                        key={item}
                                        className="block w-full text-left py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                                      >
                                        {item}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Centered search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-4 pr-10 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-900 placeholder-gray-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors">
                <MagnifyingGlassIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Compact right actions */}
          <div className="flex items-center space-x-3">
            <button className="md:hidden p-1.5 text-white hover:text-yellow-300 transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            
            <button className="hidden sm:flex items-center space-x-1 text-sm text-white hover:text-yellow-300 transition-colors font-medium">
              <UserIcon className="w-4 h-4" />
              <span>Login</span>
            </button>

            <button className="relative p-1.5 text-white hover:text-yellow-300 transition-colors">
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-blue-600 text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                0
              </span>
            </button>

            <button 
              className="md:hidden p-1.5 text-white hover:text-yellow-300 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu for compact navbar */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-blue-500 bg-blue-600 max-h-96 overflow-y-auto">
          <div className="px-4 py-3">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-3 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 text-gray-900 placeholder-gray-500"
              />
            </div>
            <nav className="space-y-1">
              <button className="w-full text-left px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-yellow-300 rounded font-medium transition-all">
                Login
              </button>
              
              {/* Mobile Multi-level Menu */}
              {Object.entries(menuStructure).map(([mainMenu, categories]) => (
                <MobileMenuSection
                  key={mainMenu}
                  title={mainMenu}
                  categories={categories}
                />
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

// Mobile Menu Component for multi-level navigation
function MobileMenuSection({ title, categories }: { 
  title: string; 
  categories: any;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (submenu: string) => {
    const newOpenSubmenus = new Set(openSubmenus);
    if (newOpenSubmenus.has(submenu)) {
      newOpenSubmenus.delete(submenu);
    } else {
      newOpenSubmenus.add(submenu);
    }
    setOpenSubmenus(newOpenSubmenus);
  };

  return (
    <div className="border-b border-blue-500 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-3 py-2 text-sm text-white hover:bg-blue-500 hover:text-yellow-300 rounded font-medium transition-all flex items-center justify-between"
      >
        {title}
        <ChevronDownIcon className={cn("w-4 h-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      
      {isOpen && (
        <div className="pl-4 pb-2">
          {Object.entries(categories).map(([category, subcategories]) => (
            <div key={category}>
              <button
                onClick={() => toggleSubmenu(category)}
                className="w-full text-left px-2 py-1.5 text-xs text-blue-100 hover:text-yellow-300 transition-all flex items-center justify-between"
              >
                {category}
                <ChevronDownIcon className={cn("w-3 h-3 transition-transform", openSubmenus.has(category) ? "rotate-180" : "")} />
              </button>
              
              {openSubmenus.has(category) && (
                <div className="pl-3 space-y-1">
                  {Object.entries(subcategories as any).map(([subcat, items]) => (
                    <div key={subcat}>
                      <div className="text-xs font-medium text-yellow-200 py-1">
                        {subcat}
                      </div>
                      <div className="pl-2 space-y-0.5">
                        {(items as string[]).map((item) => (
                          <button
                            key={item}
                            className="block text-xs text-blue-100 hover:text-yellow-300 transition-colors py-0.5"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}