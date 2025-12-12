import React from 'react';
import BuyingGuideHero from '../components/BuyingGuideHero';
import BuyingGuideGrid from '../components/BuyingGuideGrid';
import BuyingGuideFooter from '../components/BuyingGuideFooter';

export default function BuyingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <BuyingGuideHero />
      
      {/* Guide Cards Grid */}
      <BuyingGuideGrid />
      
      {/* Footer Section */}
      <BuyingGuideFooter />
    </div>
  );
}

export const metadata = {
  title: "Buying Guide - DentalKart | Expert Dental Equipment Guides",
  description: "From diagnosis to execution refine your skills with expert-curated guides! Comprehensive dental procedure guides, equipment selection, and best practices.",
};