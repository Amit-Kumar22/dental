'use client';

import { useState } from 'react';
import { cn } from '../theme/theme';

const socialIcons = [
  { name: 'Facebook', icon: '📘', followers: '203K+' },
  { name: 'Instagram', icon: '📸', followers: '203K+' },
  { name: 'Twitter', icon: '🐦', followers: '203K+' },
  { name: 'YouTube', icon: '📺', followers: '203K+' },
  { name: 'LinkedIn', icon: '💼', followers: '203K+' },
];

const paymentMethods = [
  'Google Pay', 'Paytm', 'RuPay', 'Net Banking', 'Visa', 'Mastercard'
];

const footerSections = [
  {
    title: 'ABOUT',
    links: ['Contact Us', 'About Us', 'Careers']
  },
  {
    title: 'CONTACT WITH US',
    links: ['Buying Guide', 'Investor Relations', 'Dealer Price Bulk Inquiry', 'Waldent Dealership', 'Sell On DentalKart']
  },
  {
    title: 'HELP',
    links: ['Orders', 'Refunds', 'Payments', 'Rewards']
  },
  {
    title: 'POLICY',
    links: ['Return Policy', 'Term Of Use', 'Privacy', 'Sitemap']
  }
];

export default function FreebiesNewsletter() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log('Newsletter subscription:', { email, phone });
  };

  return (
    <>
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 /* 64px */ text-white">
        <div className="container mx-auto px-4 /* 16px */ max-w-4xl /* 896px */ text-center">
          <h2 className="text-3xl /* 24px */ md:text-4xl /* 32px */ font-bold mb-4 /* 16px */">
            Stay Connected with DentalKart
          </h2>
          <p className="text-blue-100 text-lg /* 18px */ mb-8 /* 32px */ max-w-2xl /* 512px */ mx-auto">
            Get the latest updates on new freebies, exclusive offers, and dental innovations delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 /* 16px */ max-w-lg /* 512px */ mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 /* 16px */ py-3 /* 12px */ rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              onClick={handleSubscribe}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 /* 32px */ py-3 /* 12px */ rounded-md transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 /* 48px */">
        <div className="container mx-auto px-4 /* 16px */ max-w-7xl /* 1280px */">
          {/* Social Media Section */}
          <div className="text-center mb-8 /* 32px */">
            <div className="flex items-center justify-center space-x-6 /* 24px */ mb-4 /* 16px */">
              <span className="text-gray-700 font-medium">STAY CONNECTED</span>
              {socialIcons.map((social) => (
                <div key={social.name} className="flex items-center space-x-2 /* 8px */">
                  <span className="text-2xl /* 24px */">{social.icon}</span>
                  <span className="text-sm /* 14px */ text-gray-600">Over {social.followers} Followers</span>
                </div>
              ))}
            </div>
            
            {/* Mobile App Section */}
            <div className="flex items-center justify-center space-x-4 /* 16px */ text-sm /* 14px */ text-gray-600 mb-6 /* 24px */">
              <span>📱 EXPERIENCE THE MOBILE APP</span>
              <button className="bg-black text-white px-4 /* 16px */ py-2 /* 8px */ rounded-md text-xs /* 12px */">
                🎮 GET IT ON GOOGLE PLAY
              </button>
              <button className="bg-black text-white px-4 /* 16px */ py-2 /* 8px */ rounded-md text-xs /* 12px */">
                🍎 DOWNLOAD ON THE APP STORE
              </button>
              <span className="font-medium">🏆 500K+ USERS</span>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 /* 2 columns on mobile */ md:grid-cols-4 /* 4 columns on medium+ screens */ gap-8 /* 32px */ mb-8 /* 32px */">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-gray-900 mb-4 /* 16px */ text-sm /* 14px */">
                  {section.title}
                </h3>
                <ul className="space-y-2 /* 8px */">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-600 hover:text-blue-600 text-sm /* 14px */ transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Registered Office */}
          <div className="bg-white rounded-lg p-6 /* 24px */ mb-6 /* 24px */ border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4 /* 16px */">REGISTERED OFFICE ADDRESS</h3>
            <div className="grid md:grid-cols-3 gap-4 /* 16px */ text-sm /* 14px */ text-gray-600">
              <div className="flex items-start space-x-2 /* 8px */">
                <span>📍</span>
                <span>VASA DENTICITY LIMITED, Chattarpur, New Delhi, India, 110074.</span>
              </div>
              <div className="flex items-start space-x-2 /* 8px */">
                <span>📞</span>
                <span>+91-728-9999-458</span>
              </div>
              <div className="flex items-start space-x-2 /* 8px */">
                <span>📧</span>
                <span>support@dentalkart.com</span>
              </div>
            </div>
            <div className="mt-2 /* 8px */ text-xs /* 12px */ text-gray-500">
              <span>🕒 Mon to Sun (9:00 AM to 9:00 PM)</span>
            </div>
            
            <div className="mt-4 /* 16px */ text-xs /* 12px */ text-gray-500">
              Our Warehouses: Gurugram, Delhi, Chennai.
            </div>
          </div>

          {/* Payment Partners */}
          <div className="text-center mb-6 /* 24px */">
            <span className="text-sm /* 14px */ text-gray-600 mr-4 /* 16px */">Our Payment Partners</span>
            <div className="inline-flex items-center space-x-4 /* 16px */">
              {paymentMethods.map((method) => (
                <span key={method} className="text-xs /* 12px */ px-3 /* 12px */ py-1 /* 4px */ bg-gray-200 rounded text-gray-700">
                  {method}
                </span>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-300 pt-6 /* 24px */">
            <p className="text-sm /* 14px */ text-gray-600">
              2016-2025, VASA DENTICITY LIMITED
            </p>
            <p className="text-xs /* 12px */ text-gray-500 mt-2 /* 8px */">
              Crafted with ❤️ In India
            </p>
            
            {/* Rating Badge */}
            <div className="inline-flex items-center mt-4 /* 16px */ bg-blue-50 px-4 /* 16px */ py-2 /* 8px */ rounded-full">
              <span className="text-blue-600 font-medium text-sm /* 14px */">
                ⭐ 4.5 ⭐ Average 🛡️ Help
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}