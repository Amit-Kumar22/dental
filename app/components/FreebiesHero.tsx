'use client';

import { cn } from '../theme/theme';

export default function FreebiesHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Banner Image */}
      <div 
        className="w-full h-48 /* 192px */ bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center relative"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI5NiIgaGVpZ2h0PSIxOTIiIHZpZXdCb3g9IjAgMCAxMjk2IDE5MiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBmMTcyYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxZTQwYWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzBmMTcyYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjk2IiBoZWlnaHQ9IjE5MiIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KICA8IS0tIERlbnRhbCBwcm9kdWN0cyBpbGx1c3RyYXRpb24gLS0+CiAgPGNpcmNsZSBjeD0iMjAwIiBjeT0iOTYiIHI9IjMwIiBmaWxsPSIjNjM2NmYxIiBvcGFjaXR5PSIwLjMiLz4KICA8Y2lyY2xlIGN4PSI0MDAiIGN5PSI3MCIgcj0iMjAiIGZpbGw9IiNmNTllYzkiIG9wYWNpdHk9IjAuNCIvPgogIDxjaXJjbGUgY3g9IjYwMCIgY3k9IjEyMCIgcj0iMjUiIGZpbGw9IiM5MzMzZWEiIG9wYWNpdHk9IjAuMyIvPgogIDxjaXJjbGUgY3g9IjgwMCIgY3k9IjUwIiByPSIxOCIgZmlsbD0iIzEwYjk4MSIgb3BhY2l0eT0iMC4zNSIvPgogIDxjaXJjbGUgY3g9IjEwMDAiIGN5PSIxMDAiIHI9IjIyIiBmaWxsPSIjZjU5ZWM5IiBvcGFjaXR5PSIwLjQiLz4KICA8Y2lyY2xlIGN4PSIxMTAwIiBjeT0iMTMwIiByPSIxNSIgZmlsbD0iIzYzNjZmMSIgb3BhY2l0eT0iMC4zIi8+Cjwvc3ZnPg==')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 /* 16px */ text-center relative z-10">
          <div className="max-w-4xl /* 896px */ mx-auto">
            {/* Title */}
            <h1 className="text-4xl /* 36px */ md:text-5xl /* 48px */ lg:text-6xl /* 60px */ font-bold text-white mb-4 /* 16px */ tracking-tight">
              Freebies
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-center space-x-2 /* 8px */ text-white/80 text-sm /* 14px */ mb-6 /* 24px */">
              <span className="text-white/60">Home</span>
              <span className="text-white/40">›</span>
              <span className="text-white/60">Offer Zone</span>
              <span className="text-white/40">›</span>
              <span className="text-white">Freebies</span>
            </div>

            {/* Description */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 /* 24px */ border border-white/20">
              <h2 className="text-xl /* 20px */ md:text-2xl /* 24px */ font-semibold text-white mb-3 /* 12px */">
                Dentalkart's Exclusive Freebies Collection: Elevate Your Practice With Extra Perks!
              </h2>
              <p className="text-white/90 text-base /* 16px */ md:text-lg /* 18px */ leading-relaxed">
                Dentalkart's Newest Innovation, Where Dental Professionals Like You Can Unlock A World Of Bonuses And Complimentary Delights! We're Thrilled To Present Our Latest Addition: The Freebies Section! Explore An Array Of Exciting Offers, From Complimentary Products To Exclusive Samples, All Designed To Enhance Your Dental Practice Experience.
              </p>
              
              {/* Read more link */}
              <button className="inline-flex items-center text-blue-300 hover:text-blue-200 font-medium text-sm /* 14px */ mt-4 /* 16px */ transition-colors duration-200">
                Read more
                <svg className="w-4 /* 16px */ h-4 /* 16px */ ml-1 /* 4px */" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 /* 40px */ left-10 /* 40px */ w-20 /* 80px */ h-20 /* 80px */ bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 /* 40px */ right-10 /* 40px */ w-32 /* 128px */ h-32 /* 128px */ bg-gradient-to-tl from-pink-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 /* 64px */ h-16 /* 64px */ bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-lg"></div>
        </div>
      </div>
    </section>
  );
}