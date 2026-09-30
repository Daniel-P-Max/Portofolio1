import React from 'react';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS } from '../data/portfolioData';

interface NavbarProps {
  onOpenMenu: () => void;
  onNavigate: (href: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenMenu,
  onNavigate,
  activeSection
}) => {
  return (
    <nav className="flex items-center justify-between py-5 sm:py-6 w-full select-none" aria-label="Main Navigation">
      {/* Left: Original Daniel P monogram logo */}
      <a
        href="#overview"
        onClick={(e) => {
          e.preventDefault();
          onNavigate('#overview');
        }}
        className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
        aria-label="Daniel P. Home"
      >
        <Logo size={28} />
        <span className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-white/70 group-hover:text-white transition-colors font-mono">
          DANIEL P.
        </span>
      </a>

      {/* Right Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
        {NAV_LINKS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.href);
              }}
              className={`relative py-1 uppercase text-xs tracking-widest transition-opacity hover:opacity-70 ${
                isActive ? 'text-[#55FB46] opacity-100 font-medium' : 'text-white/90'
              }`}
            >
              {item.label}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#55FB46]" />
              )}
            </a>
          );
        })}
      </div>

      {/* Mobile Hamburger Menu Toggle */}
      <button
        onClick={onOpenMenu}
        className="md:hidden p-2 -mr-2 text-white/90 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
        aria-label="Open Navigation Menu"
      >
        <Menu size={22} />
      </button>
    </nav>
  );
};
