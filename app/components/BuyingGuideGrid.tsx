"use client";

import React from 'react';
import GuideCard from './GuideCard';
import { cn } from '../theme/theme';

// Guide interface
interface Guide {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  bgGradient: string;
  textColor?: string;
  size: 'small' | 'medium' | 'large' | 'wide';
}

interface GuideSection {
  category: string;
  guides: Guide[];
}

// Guide data based on the screenshots
const guideData: GuideSection[] = [
  // First section
  {
    category: "Maxillary Sinus Augmentation | Frenectomy | Gingivectomy",
    guides: [
      {
        id: 'maxillary-sinus',
        title: 'Maxillary Sinus Augmentation',
        subtitle: 'Step-by-Step Guide. Product-by-Product Confidence.',
        image: '/1.png', // Using provided images
        imageAlt: 'Maxillary Sinus Augmentation procedure',
        bgGradient: 'bg-card-gradient-purple',
        size: 'wide',
      }
    ]
  },
  
  // Second section 
  {
    category: "Composite Restoration | New Clinic Must Have Consumable | Indirect Pulp Capping",
    guides: [
      {
        id: 'composite-restoration',
        title: 'Composite Restoration',
        description: 'Unlock clinical perfection-dive into an expert-crafted composite restoration guide!',
        image: '/2.png',
        imageAlt: 'Composite Restoration procedure',
        bgGradient: 'bg-gradient-to-r from-gray-900 to-gray-700',
        size: 'wide',
      }
    ]
  },

  // Third section - Two side by side
  {
    category: "In-Office Vital Tooth Bleaching |Broken File Retrieval| Non-vital Thermocatalytic Tooth Bleaching | Non Surgical Tooth Extraction",
    guides: [
      {
        id: 'tooth-bleaching',
        title: 'In-Office Vital Tooth Bleaching',
        description: 'Your Step-by-Step Guide to Safer Brighter Smiles!',
        image: '/3.png',
        imageAlt: 'Tooth Bleaching procedure',
        bgGradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700',
        size: 'medium',
      },
      {
        id: 'broken-file-retrieval',
        title: 'Broken File Retrieval',
        description: 'Tools & Techniques for Stress-Free Retrieval!',
        image: '/4.png',
        imageAlt: 'Broken File Retrieval procedure',
        bgGradient: 'bg-card-gradient-blue',
        size: 'medium',
      }
    ]
  },

  // Fourth section
  {
    category: "Apexification | Root Canal Treatments | New Clinic Must Have Instruments",
    guides: [
      {
        id: 'apexification',
        title: 'Apexification',
        subtitle: 'Step-by-Step Procedure - Materials & Techniques',
        description: 'for Lasting Apical Closure!',
        image: '/5.png',
        imageAlt: 'Apexification procedure',
        bgGradient: 'bg-gradient-to-r from-orange-100 to-orange-200',
        textColor: 'text-gray-900',
        size: 'wide',
      }
    ]
  },

  // Fifth section  
  {
    category: "Ceramic Veneers | Pit & Fissure Sealant | Zirconia Crowns Placement Steps",
    guides: [
      {
        id: 'ceramic-veneers',
        title: 'Ceramic Veneers:',
        subtitle: 'Preparation & Cementation Protocol',
        description: 'From Technique to Tools—We\'ve Got You Covered.',
        image: '/6.png',
        imageAlt: 'Ceramic Veneers procedure',
        bgGradient: 'bg-gradient-to-r from-gray-900 to-red-900',
        size: 'wide',
      }
    ]
  },

  // Sixth section
  {
    category: "Apexogenesis |Direct Pulp Capping | Complete Denture",
    guides: [
      {
        id: 'apexogenesis',
        title: 'APEXOGENESIS',
        subtitle: 'Your Procedure. Our Products. One',
        description: 'Seamless Workflow.',
        image: '/7.png',
        imageAlt: 'Apexogenesis procedure',
        bgGradient: 'bg-card-gradient-teal',
        size: 'wide',
      }
    ]
  },

  // Additional sections for completeness
  {
    category: "New Clinic Must Have Equipments | Scaling and Root Planing",
    guides: [
      {
        id: 'new-clinic-equipment',
        title: 'Must Have Equipments',
        subtitle: 'New Clinic',
        description: 'From X-ray to autoclave—equip your clinic with the best tools of the trade!',
        image: '/5.png', // Reusing image as placeholder
        imageAlt: 'New Clinic Equipment setup',
        bgGradient: 'bg-card-gradient-blue',
        size: 'wide',
      }
    ]
  },

  {
    category: "Tooth Jewellery Placement | Orthodontic Bracket Bonding",
    guides: [
      {
        id: 'tooth-jewellery',
        title: 'Tooth Jewellery Placement',
        description: 'Your Resource for Safe, Non-Invasive Tooth Jewellery Placement',
        image: '/6.png', // Reusing image as placeholder
        imageAlt: 'Tooth Jewellery Placement',
        bgGradient: 'bg-gradient-to-r from-gray-800 to-black',
        size: 'wide',
      }
    ]
  },
];

export default function BuyingGuideGrid() {
  const handleGuideClick = (guideId: string) => {
    // Navigate to specific guide page
    console.log('Opening guide:', guideId);
    // You can implement navigation here
  };

  return (
    <div className="bg-white py-8 /* 32px */ lg:py-12 /* 48px */">
      <div className="max-w-7xl mx-auto px-6 /* 24px */ sm:px-8 /* 32px */ lg:px-12 /* 48px */">
        {guideData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-10 /* 40px */ lg:mb-12 /* 48px */">
            {/* Category Header */}
            <div className="mb-4 /* 16px */ lg:mb-6 /* 24px */">
              <div className="bg-blue-50 rounded-xl /* 12px */ px-6 /* 24px */ py-4 /* 16px */ lg:py-5 /* 20px */ border-l-4 border-blue-500 shadow-sm">
                <h2 className="text-sm /* 14px */ lg:text-base /* 16px */ font-semibold text-gray-800 leading-relaxed">
                  {section.category}
                </h2>
              </div>
            </div>

            {/* Guides Grid */}
            <div className={cn(
              'grid gap-8 /* 32px */ lg:gap-10 /* 40px */',
              section.guides.length === 1 ? 'grid-cols-1' :
              section.guides.length === 2 ? 'grid-cols-1 lg:grid-cols-2' :
              'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            )}>
              {section.guides.map((guide) => (
                <GuideCard
                  key={guide.id}
                  title={guide.title}
                  subtitle={guide.subtitle}
                  description={guide.description}
                  image={guide.image}
                  imageAlt={guide.imageAlt}
                  bgGradient={guide.bgGradient}
                  textColor={guide.textColor}
                  size={guide.size}
                  onClick={() => handleGuideClick(guide.id)}
                  className="animate-slide-up"
                />
              ))}
            </div>
          </div>
        ))}

        {/* Additional Categories - Compact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 /* 24px */ lg:gap-8 /* 32px */ mb-8 /* 32px */">
          {[
            {
              category: "Complete Guide to Implant Placement – Part 1 | Complete Guide to Implant Placement – Part 2",
              title: "Complete Guide to Implant Placement",
              subtitle: "Part 1: From Case Assessment to Cover Screw Placement",
              bgGradient: "bg-gradient-to-br from-gray-900 to-gray-700"
            },
            {
              category: "Emergency Medicine & Monitoring Kit for Dental Clinics | Dental Infection Management: Antibiotics & Adjunctive Care Products | Instrument Sterilization & Maintenance Protocol",
              title: "Emergency Medicine & Monitoring Kit for Dental Clinics",
              subtitle: "Stay Prepared for the Unexpected in Every Procedure!",
              bgGradient: "bg-gradient-to-br from-orange-800 to-red-800"
            },
            {
              category: "Crown Lengthening Procedure | Alveoloplasty",
              title: "Crown Lengthening Procedure",
              subtitle: "Topical Fluoride Varnish Application",
              description: "One Quick Coat for Lasting Cavity Defense!",
              bgGradient: "bg-gradient-to-br from-gray-900 to-blue-900"
            }
          ].map((item, index) => (
            <div key={index} className="space-y-6 /* 24px */">
              <div className="bg-blue-50 rounded-xl /* 12px */ px-4 /* 16px */ py-3 /* 12px */ border-l-4 border-blue-500 shadow-sm">
                <p className="text-xs /* 12px */ lg:text-sm /* 14px */ font-medium text-gray-700 leading-relaxed">
                  {item.category}
                </p>
              </div>
              
              <div className={cn(
                'relative rounded-2xl /* 16px */ p-8 /* 32px */ lg:p-10 /* 40px */ text-white h-64 /* 256px */ lg:h-72 /* 288px */',
                'cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl',
                'flex flex-col justify-center group',
                item.bgGradient
              )}>
                <div className="space-y-4 /* 16px */">
                  <h3 className="text-xl /* 20px */ lg:text-2xl /* 24px */ font-bold leading-tight">
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p className="text-base /* 16px */ lg:text-lg /* 18px */ opacity-90 leading-relaxed">
                      {item.subtitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-sm /* 14px */ lg:text-base /* 16px */ opacity-80">
                      {item.description}
                    </p>
                  )}
                </div>
                
                {/* Hover indicator */}
                <div className="mt-6 /* 24px */ opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="inline-flex items-center text-sm /* 14px */ font-medium">
                    Learn More
                    <svg 
                      className="ml-2 /* 8px */ w-4 /* 16px */ h-4 /* 16px */ transition-transform duration-200 group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}