import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  activeSection
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const staggerDelays = ['100ms', '160ms', '220ms', '280ms', '340ms'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col px-6 py-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <span className="text-xs uppercase tracking-widest text-white/50 font-mono">
            PORTFOLIO // DP
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-2 -mr-2 text-white/80 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links - Centered Vertically */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-7 pl-2">
        {NAV_LINKS.map((link, index) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.href);
                onClose();
              }}
              style={{
                transitionDelay: isOpen ? staggerDelays[index] : '0ms'
              }}
              className={`text-2xl sm:text-3xl tracking-widest uppercase text-left font-light transition-all duration-300 flex items-center gap-4 ${
                isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              } ${
                isActive
                  ? 'text-[#55FB46]'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <span className="font-pixel text-xs text-white/40">
                0{index + 1}
              </span>
              <span>{link.label}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#55FB46]" />
              )}
            </button>
          );
        })}
      </div>

      {/* Footer Info inside Mobile Menu */}
      <div
        style={{
          transitionDelay: isOpen ? '400ms' : '0ms'
        }}
        className={`pt-6 border-t border-white/10 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="text-xs text-white/50 uppercase tracking-widest">
          {PERSONAL_INFO.title}
        </div>
        <div className="flex items-center justify-between text-xs text-white/70">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#55FB46] transition-colors flex items-center gap-1"
          >
            {PERSONAL_INFO.email}
            <ArrowUpRight size={12} />
          </a>
          <span className="text-white/40">2026 EDITION</span>
        </div>
      </div>
    </div>
  );
};
