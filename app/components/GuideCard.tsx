"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '../theme/theme';

export interface GuideCardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  imageAlt: string;
  bgGradient: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large' | 'wide';
  onClick?: () => void;
  className?: string;
}

export default function GuideCard({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  bgGradient,
  textColor = 'text-white',
  size = 'medium',
  onClick,
  className,
}: GuideCardProps) {
  const sizeClasses = {
    small: 'h-48 /* 192px */',
    medium: 'h-56 /* 224px */',
    large: 'h-64 /* 256px */',
    wide: 'h-48 /* 192px */ md:col-span-2',
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        'group relative overflow-hidden rounded-2xl /* 16px */ cursor-pointer transition-all duration-300',
        'hover:scale-[1.02] hover:shadow-strong focus:outline-none focus:ring-4 focus:ring-primary-500/20',
        'animate-fade-in',
        bgGradient,
        sizeClasses[size],
        className
      )}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10" />
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={false}
      />
      
      {/* Content Overlay */}
      <div className={cn(
        'absolute inset-0 z-20 flex flex-col justify-center p-4 /* 16px */ md:p-6 /* 24px */',
        textColor
      )}>
        <div className="space-y-2 /* 8px */ md:space-y-3 /* 12px */">
          {subtitle && (
            <p className="text-sm /* 14px */ md:text-base /* 16px */ font-medium opacity-90">
              {subtitle}
            </p>
          )}
          
          <h3 className={cn(
            'font-bold leading-tight transition-colors duration-200',
            size === 'large' ? 'text-2xl /* 24px */ md:text-3xl /* 30px */ lg:text-4xl /* 36px */' :
            size === 'wide' ? 'text-xl /* 20px */ md:text-2xl /* 24px */ lg:text-3xl /* 30px */' :
            'text-lg /* 18px */ md:text-xl /* 20px */ lg:text-2xl /* 24px */'
          )}>
            {title}
          </h3>
          
          {description && (
            <p className={cn(
              'text-sm /* 14px */ md:text-base /* 16px */ opacity-80 leading-relaxed',
              size === 'large' ? 'max-w-md' : 'max-w-sm'
            )}>
              {description}
            </p>
          )}
        </div>
        
        {/* Hover indicator */}
        <div className="mt-4 /* 16px */ opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  );
}