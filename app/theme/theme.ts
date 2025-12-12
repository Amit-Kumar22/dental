// Central theme configuration for DentalKart e-commerce website
export const theme = {
  colors: {
    // Primary brand colors
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    primaryLight: "bg-blue-50 text-blue-600",
    primaryDark: "bg-blue-800 text-white",
    
    // Secondary colors
    secondary: "bg-gray-100 text-gray-900",
    secondaryDark: "bg-gray-800 text-white",
    
    // Accent colors
    orange: "bg-orange-500 text-white",
    orangeLight: "bg-orange-50 text-orange-600",
    red: "bg-red-500 text-white",
    green: "bg-green-500 text-white",
    
    // Background colors
    pageBg: "bg-gray-50",
    cardBg: "bg-white",
    darkBg: "bg-gray-900",
    lightBg: "bg-gray-100",
    
    // Border and divider colors
    border: "border border-gray-200",
    borderDark: "border border-gray-300",
    divider: "border-t border-gray-100",
    
    // Text colors
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-600",
    textMuted: "text-gray-400",
    textWhite: "text-white",
  },
  
  text: {
    // Headings
    h1: "text-3xl md:text-4xl lg:text-5xl font-bold",
    h2: "text-2xl md:text-3xl lg:text-4xl font-bold", 
    h3: "text-xl md:text-2xl font-semibold",
    h4: "text-lg md:text-xl font-semibold",
    
    // Body text
    body: "text-base",
    bodyLarge: "text-lg",
    bodySmall: "text-sm",
    
    // Special text styles
    caption: "text-xs text-gray-500",
    price: "text-lg font-bold text-gray-900",
    priceStrike: "text-sm line-through text-gray-400",
    badge: "text-xs font-medium",
  },
  
  layout: {
    // Container styles
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    containerNarrow: "max-w-4xl mx-auto px-4 sm:px-6",
    
    // Grid layouts
    gridCols2: "grid grid-cols-1 md:grid-cols-2 gap-4",
    gridCols3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    gridCols4: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
    gridCols5: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3",
    gridCols6: "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3",
    
    // Card styles
    card: "bg-white rounded-lg shadow-sm border border-gray-200",
    cardHover: "bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow",
    cardPadding: "p-3 md:p-4",
    
    // Spacing
    section: "py-6 md:py-8 lg:py-10",
    sectionSmall: "py-4 md:py-6",
  },
  
  components: {
    // Button styles
    buttonPrimary: "inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium",
    buttonSecondary: "inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors font-medium",
    buttonOutline: "inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium",
    buttonSmall: "inline-flex items-center justify-center px-3 py-1.5 text-sm",
    buttonLarge: "inline-flex items-center justify-center px-6 py-3 text-lg",
    
    // Input styles
    input: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    inputLarge: "w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
    
    // Badge styles
    badge: "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
    badgeSuccess: "bg-green-100 text-green-800",
    badgeWarning: "bg-yellow-100 text-yellow-800",
    badgeError: "bg-red-100 text-red-800",
    badgeInfo: "bg-blue-100 text-blue-800",
    
    // Navigation styles
    navLink: "text-gray-700 hover:text-blue-600 font-medium transition-colors",
    navLinkActive: "text-blue-600 font-medium",
  },
  
  animations: {
    transition: "transition-all duration-200 ease-in-out",
    transitionSlow: "transition-all duration-300 ease-in-out",
    hover: "hover:scale-105 transition-transform duration-200",
    fadeIn: "animate-fade-in",
  },

  buyingGuide: {
    heroGradient: "bg-gradient-to-r from-teal-700 via-teal-600 to-teal-700",
    sectionTitle: "bg-blue-100 px-6 py-4 rounded-lg text-base md:text-lg font-medium text-gray-800",
    guideCard: "rounded-2xl shadow-lg overflow-hidden",
    newsletterGradient: "bg-gradient-to-r from-orange-400 to-orange-500",
  },
};

// Helper function to combine classes
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

// Common combinations
export const themeClasses = {
  heroSection: cn(
    theme.layout.container,
    theme.layout.section,
    "bg-gradient-to-r from-blue-600 to-blue-800 text-white"
  ),
  
  productCard: cn(
    theme.layout.cardHover,
    theme.layout.cardPadding,
    "group cursor-pointer"
  ),
  
  sectionTitle: cn(
    theme.text.h2,
    theme.colors.textPrimary,
    "mb-8 text-center"
  ),
  
  ctaButton: cn(
    theme.components.buttonPrimary,
    theme.components.buttonLarge,
    "shadow-lg hover:shadow-xl"
  ),
};