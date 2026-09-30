import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 28 }) => {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
      aria-label="Daniel P. Monogram"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full text-white transition-transform duration-300 hover:scale-105"
      >
        {/* Outer boundary frame with precision notch */}
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white/80"
        />

        {/* Geometric 'D' on left: vertical backbone and angular enclosure */}
        <path
          d="M6 6V22H11C13.5 22 15 20.2 15 17V11C15 7.8 13.5 6 11 6H6Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="miter"
          fill="none"
        />

        {/* Inner hollow for D */}
        <path
          d="M9 9.5V18.5H11C12 18.5 12.5 17.5 12.5 16V12C12.5 10.5 12 9.5 11 9.5H9Z"
          fill="currentColor"
        />

        {/* Geometric 'P' on right: elevated stem and top loop */}
        <path
          d="M17 6V22M17 6H21C22.6569 6 24 7.34315 24 9V12C24 13.6569 22.6569 15 21 15H17"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="square"
          fill="none"
        />

        {/* Accent focal dot - electric green */}
        <rect x="20" y="9.5" width="2" height="2" fill="#55FB46" />
      </svg>
    </div>
  );
};
