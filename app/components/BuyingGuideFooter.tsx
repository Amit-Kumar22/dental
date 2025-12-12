"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '../theme/theme';

export default function BuyingGuideFooter() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log('Newsletter signup:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section - Ultra Compact */}
      <div className="bg-dental-orange py-1.5 /* 6px */">
        <div className="max-w-7xl mx-auto px-4 /* 16px */">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 /* 8px */">
            <div>
              <h3 className="text-xs /* 12px */ font-medium text-white">
                Subscribe to our Newsletter
              </h3>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto max-w-sm">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={cn(
                  'flex-1 px-2 /* 8px */ py-1 /* 4px */ rounded-l-full text-xs',
                  'text-gray-900 placeholder-gray-500 border-0 focus:outline-none focus:ring-1 focus:ring-white/30'
                )}
                required
              />
              <button
                type="submit"
                className={cn(
                  'bg-white text-dental-orange font-medium px-3 /* 12px */ py-1 /* 4px */ rounded-r-full text-xs',
                  'hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-white/30'
                )}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content - Ultra Compact */}
      <div className="py-2 /* 8px */">
        <div className="max-w-7xl mx-auto px-4 /* 16px */">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 /* 12px */">
            {/* Stay Connected */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                Stay Connected
              </h4>
              <div className="flex space-x-1 /* 4px */">
                {[
                  { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
                  { name: 'Instagram', icon: '📷', color: 'bg-pink-600' },
                  { name: 'Twitter', icon: '🐦', color: 'bg-blue-400' },
                  { name: 'YouTube', icon: '📺', color: 'bg-red-600' },
                  { name: 'LinkedIn', icon: '💼', color: 'bg-blue-700' },
                  { name: 'Pinterest', icon: '📌', color: 'bg-red-500' },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={cn(
                      'w-4 /* 16px */ h-4 /* 16px */ rounded flex items-center justify-center text-white text-xs',
                      'hover:opacity-80 transition-opacity',
                      social.color
                    )}
                    title={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <div>
              <h4 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                ABOUT
              </h4>
              <ul className="space-y-0.5 /* 2px */ text-gray-300 text-xs">{/* Ultra compact spacing */}
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                CONNECT WITH US
              </h4>
              <ul className="space-y-0.5 /* 2px */ text-gray-300 text-xs">
                <li>
                  <Link href="/buying-guide" className="hover:text-white transition-colors">
                    Buying Guide
                  </Link>
                </li>
                <li>
                  <Link href="/investor-relations" className="hover:text-white transition-colors">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="/waldent-dealership" className="hover:text-white transition-colors">
                    Waldent Dealership
                  </Link>
                </li>
                <li>
                  <Link href="/dealer-inquiry" className="hover:text-white transition-colors">
                    Dealer Price Bulk Inquiry
                  </Link>
                </li>
                <li>
                  <Link href="/international" className="hover:text-white transition-colors">
                    Dentalkart International
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                HELP
              </h4>
              <ul className="space-y-0.5 /* 2px */ text-gray-300 text-xs">
                <li>
                  <Link href="/orders" className="hover:text-white transition-colors">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/refunds" className="hover:text-white transition-colors">
                    Refunds
                  </Link>
                </li>
                <li>
                  <Link href="/payments" className="hover:text-white transition-colors">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/rewards" className="hover:text-white transition-colors">
                    Rewards
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policy & Contact */}
            <div>
              <h4 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                POLICY
              </h4>
              <ul className="space-y-0.5 /* 2px */ text-gray-300 text-xs mb-2 /* 8px */">
                <li>
                  <Link href="/return-policy" className="hover:text-white transition-colors">
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms Of Use
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap" className="hover:text-white transition-colors">
                    Sitemap
                  </Link>
                </li>
              </ul>

              {/* Registered Office */}
              <div>
                <h5 className="font-medium text-xs /* 12px */ mb-1 /* 4px */ text-white">
                  REGISTERED OFFICE ADDRESS:
                </h5>
                <div className="text-xs /* 12px */ text-gray-300 space-y-0.5 /* 2px */">
                  <p>VASA DENTICITY LIMITED</p>
                  <p>Khasra No. 714, Village, P.O.- Chattarpur</p>
                  <p>Opp. DLF Gate No.-2, Near Geetanjali Salon</p>
                  <p>New Delhi, India.</p>
                  <p className="mt-1 /* 4px */">
                    1100741-91-728-9999-456-Mon to Sat
                  </p>
                  <p>(10:00 AM to 7:00 PM)</p>
                  <p className="mt-1 /* 4px */">
                    2016-2023. VASA DENTICITY LIMITED
                  </p>
                  <p>
                    Crafted with <span className="text-red-500">❤️</span> in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}