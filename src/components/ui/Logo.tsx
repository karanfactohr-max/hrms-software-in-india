import React from 'react';
import Image from 'next/image';

export function LogoIcon({ className = "", size = 42 }: { className?: string, size?: number }) {
  return (
    <Image 
      src="/logo.jpg" 
      alt="HRMS Software Logo" 
      width={180} 
      height={size} 
      style={{ height: `${size}px`, width: 'auto' }}
      className={className} 
    />
  );
}

export function Logo({ className = "", showText = true, size = 42 }: { className?: string, showText?: boolean, size?: number }) {
  // Since the user's PNG already includes the text, we can just render the image.
  // We'll keep the component structure so existing imports don't break.
  return (
    <div className={`flex items-center ${className}`}>
      <LogoIcon size={size} />
    </div>
  );
}

