/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [showStickyNav, setShowStickyNav] = useState(false);

  // Monitor scroll position for active section spy and sticky navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowStickyNav(scrollY > 220);

      // Section spy logic matching original structure
      const sections = ['overview', 'work', 'about', 'experiments', 'stack', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (scrollY < 100) {
        setActiveSection('overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync with initial URL hash if present
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 150);
    }
  }, []);

  const scrollToSection = (targetId: string) => {
    const cleanId = targetId.replace('#', '');
    setActiveSection(cleanId);

    if (cleanId === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '#overview');
      return;
    }

    const element = document.getElementById(cleanId);
    if (element) {
      const headerOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.replaceState(null, '', `#${cleanId}`);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen w-full relative selection:bg-[#55FB46] selection:text-black">
      {/* ========================================================================= */}
      {/* STICKY TOP NAV: Appears when scrolled down past the hero                   */}
      {/* ========================================================================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 px-5 sm:px-6 md:px-10 lg:px-14 py-3.5 transition-all duration-300 ${
          showStickyNav
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-label="Sticky Quick Navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => scrollToSection('overview')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#55FB46]"
            aria-label="Return to top overview"
          >
            <Logo size={24} />
            <span className="text-xs uppercase tracking-[0.2em] text-white/90 group-hover:text-white transition-colors font-mono">
              {PERSONAL_INFO.name}
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
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
              onClick={() => scrollToSection('contact')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-white/20 text-xs font-mono text-white hover:border-[#55FB46] hover:text-[#55FB46] transition-colors"
            >
              <span>LET'S BUILD</span>
              <ArrowUpRight size={12} />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className="w-full h-0.5 bg-white" />
                <span className="w-3/4 h-0.5 bg-white" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION                                                           */}
      {/* ========================================================================= */}
      <section
        id="overview"
        className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between"
      >
        {/* Immersive Technological Background */}
        <TechBackground />

        {/* Outer Content Wrapper */}
        <div className="relative z-10 flex min-h-screen flex-col justify-between px-5 sm:px-6 md:px-10 lg:px-14 pb-5 sm:pb-6">
          {/* Top Region: Navbar + Metadata Grid */}
          <div className="w-full flex flex-col">
            <Navbar
              onOpenMenu={() => setMenuOpen(true)}
              onNavigate={scrollToSection}
              activeSection={activeSection}
            />
            <MetaGrid />
          </div>

          {/* Bottom Region: Hero Statement, Actions & Credibility Chips */}
          <Hero
            onViewProjects={() => scrollToSection('work')}
            onContactClick={() => scrollToSection('contact')}
          />

          {/* Footer Strip with Scroll Indicator */}
          <div className="w-full">
            <FooterStrip
              onStartConversation={() => scrollToSection('contact')}
            />

            {/* Subtle Scroll Down Indicator */}
            <div className="pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-white/30">
              <button
                onClick={() => scrollToSection('work')}
                className="inline-flex items-center gap-1.5 hover:text-[#55FB46] transition-colors focus:outline-none"
                aria-label="Scroll to featured work"
              >
                <span>EXPLORE WORK</span>
                <ChevronDown size={13} className="animate-bounce" />
              </button>
              <span className="hidden sm:inline">2026 EDITION</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED WORK (PROJECTS)                                               */}
      {/* ========================================================================= */}
      <ProjectSection />

      {/* ========================================================================= */}
      {/* 3. ABOUT SECTION                                                          */}
      {/* ========================================================================= */}
      <AboutSection />

      {/* ========================================================================= */}
      {/* 4. EXPERIMENTS SECTION                                                    */}
      {/* ========================================================================= */}
      <ExperimentsSection />

      {/* ========================================================================= */}
      {/* 5. STACK SECTION                                                          */}
      {/* ========================================================================= */}
      <StackSection />

      {/* ========================================================================= */}
      {/* 6. CONTACT SECTION                                                        */}
      {/* ========================================================================= */}
      <ContactSection />

      {/* ========================================================================= */}
      {/* 7. FOOTER                                                                 */}
      {/* ========================================================================= */}
      <Footer />

      {/* Mobile Overlay Menu */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
        activeSection={activeSection}
      />
    </div>
  );
}
