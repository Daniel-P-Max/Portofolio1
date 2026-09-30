/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { TechBackground } from './components/TechBackground';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { MetaGrid } from './components/MetaGrid';
import { Hero } from './components/Hero';
import { FooterStrip } from './components/FooterStrip';
import { ProjectSection } from './components/ProjectSection';
import { AboutSection } from './components/AboutSection';
import { ExperimentsSection } from './components/ExperimentsSection';
import { StackSection } from './components/StackSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { NAV_LINKS, PERSONAL_INFO } from './data/portfolioData';

type ViewMode = 'landing' | 'portfolio';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('landing');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const portfolioScrollRef = useRef<HTMLDivElement | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['work', 'about', 'experiments', 'stack', 'contact'].includes(hash)) {
        setViewMode('portfolio');
        setActiveSection(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (hash === 'overview' || !hash) {
        setViewMode('landing');
        setActiveSection('overview');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Check initial hash
    if (window.location.hash) {
      handleHashChange();
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (target: string) => {
    const id = target.replace('#', '');
    if (id === 'overview' || id === '') {
      setViewMode('landing');
      setActiveSection('overview');
      window.location.hash = 'overview';
      return;
    }

    setViewMode('portfolio');
    setActiveSection(id);
    window.location.hash = id;

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 80);
  };

  // Optional wheel handler on landing page to allow intuitive transition
  const handleLandingWheel = (e: React.WheelEvent) => {
    if (e.deltaY > 60) {
      navigateTo('#work');
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full relative selection:bg-[#55FB46] selection:text-black">
      {/* ========================================================================= */}
      {/* 1. LOCKED FULL-VIEWPORT FIRST SCREEN (LANDING EXPERIENCE)                 */}
      {/* Exactly as requested: relative h-screen w-full overflow-hidden bg-black   */}
      {/* ========================================================================= */}
      {viewMode === 'landing' ? (
        <main
          className="relative h-screen w-full overflow-hidden bg-black text-white flex flex-col justify-between"
          onWheel={handleLandingWheel}
        >
          {/* Immersive Technological Background */}
          <TechBackground />

          {/* Outer Content Wrapper */}
          <div className="relative z-10 flex h-full flex-col justify-between px-5 sm:px-6 md:px-10 lg:px-14 pb-4 sm:pb-6">
            {/* Top Region: Navbar + Metadata Grid */}
            <header className="w-full flex flex-col">
              <Navbar
                onOpenMenu={() => setMenuOpen(true)}
                onNavigate={navigateTo}
                activeSection="overview"
              />
              <MetaGrid />
            </header>

            {/* Bottom Region: Hero Statement, Actions & Credibility Chips */}
            <Hero
              onViewProjects={() => navigateTo('#work')}
              onContactClick={() => navigateTo('#contact')}
            />

            {/* Footer Strip */}
            <FooterStrip
              onStartConversation={() => navigateTo('#contact')}
            />
          </div>

          {/* Mobile Overlay Menu */}
          <MobileMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onNavigate={navigateTo}
            activeSection="overview"
          />
        </main>
      ) : (
        /* ========================================================================= */
        /* 2. FULL EDITORIAL SECTIONS PORTFOLIO VIEW                                 */
        /* Accessible seamlessly through navigation, preserving the exact visual     */
        /* language, typography, zero-pill discipline, and restrained aesthetic.     */
        /* ========================================================================= */
        <div ref={portfolioScrollRef} className="relative w-full bg-black text-white min-h-screen">
          {/* Sticky Editorial Header */}
          <header className="sticky top-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-5 sm:px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigateTo('#overview')}
                className="group flex items-center gap-2 text-xs font-mono text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
                aria-label="Return to full-screen hero overview"
              >
                <ArrowLeft size={14} className="text-[#55FB46] group-hover:-translate-x-1 transition-transform" />
                <span className="hidden sm:inline">HERO OVERVIEW</span>
              </button>

              <div className="h-4 w-[1px] bg-white/20 hidden sm:block" />

              <a
                href="#overview"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('#overview');
                }}
                className="flex items-center gap-2.5 group"
              >
                <Logo size={22} />
                <span className="font-mono text-xs uppercase tracking-widest text-white/90">
                  DANIEL P.
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => navigateTo(link.href)}
                    className={`transition-colors py-1 ${
                      isActive ? 'text-[#55FB46]' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-xs font-mono text-white hover:border-[#55FB46] hover:text-[#55FB46] transition-colors"
              >
                <span>LET'S BUILD</span>
                <ArrowUpRight size={12} />
              </button>

              <button
                onClick={() => setMenuOpen(true)}
                className="md:hidden p-2 text-white/80 hover:text-white"
                aria-label="Open Menu"
              >
                <div className="w-5 flex flex-col gap-1">
                  <span className="w-full h-0.5 bg-white" />
                  <span className="w-3/4 h-0.5 bg-white" />
                </div>
              </button>
            </div>
          </header>

          {/* Editorial Sections */}
          <main>
            <ProjectSection />
            <AboutSection />
            <ExperimentsSection />
            <StackSection />
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Overlay Menu */}
          <MobileMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
            onNavigate={navigateTo}
            activeSection={activeSection}
          />
        </div>
      )}
    </div>
  );
}
