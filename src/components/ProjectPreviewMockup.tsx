import React from 'react';
import { Calendar, MapPin, Sparkles, Clock, Wine, Scissors, UtensilsCrossed, MessageSquare, Star, Users } from 'lucide-react';
import { Project } from '../types';

interface ProjectPreviewMockupProps {
  project: Project;
  onOpenDetails: () => void;
}

export const ProjectPreviewMockup: React.FC<ProjectPreviewMockupProps> = ({
  project,
  onOpenDetails
}) => {
  return (
    <div
      onClick={onOpenDetails}
      className="group/mockup relative w-full aspect-[16/10] rounded-none border border-[#262626] bg-[#0B0B0B] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#55FB46]/60 shadow-2xl"
    >
      {/* Top Browser Window Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#262626] bg-[#111111] select-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626] group-hover/mockup:bg-[#55FB46]/70 transition-colors" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#262626]" />
        </div>

        {/* Browser Address Bar */}
        <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0B0B0B] border border-[#262626] text-[10px] font-mono text-[#A1A1AA] max-w-[240px] sm:max-w-xs truncate">
          <span className="text-[#55FB46]">https://</span>
          <span className="truncate">
            {project.liveUrl ? project.liveUrl.replace('https://', '').replace(/\/$/, '') : 'concept.vaultclub-ikeja.ng'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {project.liveUrl ? (
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#55FB46] bg-[#55FB46]/10 px-2 py-0.5 border border-[#55FB46]/30">
              LIVE
            </span>
          ) : (
            <span className="text-[9px] font-mono uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 border border-amber-400/30">
              CONCEPT
            </span>
          )}
        </div>
      </div>

      {/* Screen Body */}
      <div className="relative w-full h-[calc(100%-37px)] p-4 sm:p-6 overflow-hidden flex flex-col justify-between select-none">
        {/* ========================================================================= */}
        {/* THEME 1: IKÖKÖ RESTAURANT PREVIEW                                         */}
        {/* ========================================================================= */}
        {project.previewTheme === 'restaurant' && (
          <div className="h-full flex flex-col justify-between text-white relative">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#16120e] via-[#0d0a08] to-[#0B0B0B] opacity-95 -z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-600 via-transparent to-transparent" />

            {/* Restaurant Brand Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <UtensilsCrossed size={14} className="text-[#55FB46]" />
                <span className="font-serif tracking-widest text-sm sm:text-base font-semibold text-white">
                  IKÖKÖ
                </span>
                <span className="text-[9px] font-mono text-[#71717A] hidden sm:inline">
                  · CONTEMPORARY DINING
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[#A1A1AA] uppercase">
                <span>OUR STORY</span>
                <span>MENU</span>
                <span className="text-[#55FB46]">RESERVATIONS</span>
              </div>
            </div>

            {/* Hero & Reservation Highlight */}
            <div className="my-auto py-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-400/90 block mb-1">
                CONTEMPORARY GASTRONOMY
              </span>
              <h4 className="text-lg sm:text-2xl lg:text-3xl font-serif font-normal tracking-tight text-white leading-tight">
                An Unforgettable Culinary Experience
              </h4>
              <p className="text-[11px] sm:text-xs text-[#A1A1AA] max-w-sm mt-1.5 font-light line-clamp-2">
                Authentic flavors presented with modern culinary storytelling, seamless table bookings, and direct WhatsApp confirmations.
              </p>

              {/* Verified Reservation Form Fields Preview */}
              <div className="mt-3.5 p-2.5 sm:p-3 bg-[#0B0B0B]/80 border border-[#262626] max-w-md">
                <div className="grid grid-cols-3 gap-2 text-[10px] font-mono text-[#A1A1AA]">
                  <div className="border border-[#262626] p-1.5 bg-[#151515]">
                    <span className="text-[#71717A] block text-[8px]">PARTY SIZE</span>
                    <span className="text-white flex items-center gap-1 mt-0.5">
                      <Users size={10} className="text-[#55FB46]" /> 4 Guests
                    </span>
                  </div>
                  <div className="border border-[#262626] p-1.5 bg-[#151515]">
                    <span className="text-[#71717A] block text-[8px]">DATE & TIME</span>
                    <span className="text-white flex items-center gap-1 mt-0.5">
                      <Clock size={10} className="text-[#55FB46]" /> 19:30
                    </span>
                  </div>
                  <div className="border border-[#262626] p-1.5 bg-[#151515]">
                    <span className="text-[#71717A] block text-[8px]">CONFIRMATION</span>
                    <span className="text-[#55FB46] flex items-center gap-1 mt-0.5 truncate">
                      <MessageSquare size={10} /> WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Telemetry */}
            <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
              <span>VALIDATED RESERVATION FORM · WHATSAPP FALLBACK</span>
              <span className="text-[#55FB46]">RESPONSIVE RESTAURANT SITE</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THEME 2: VAULT CLUB GRA IKEJA PREVIEW                                     */}
        {/* ========================================================================= */}
        {project.previewTheme === 'nightlife' && (
          <div className="h-full flex flex-col justify-between text-white relative">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#120a16] via-[#09050c] to-[#0B0B0B] opacity-95 -z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500 via-purple-900 to-transparent" />

            {/* Nightlife Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <Wine size={14} className="text-amber-400" />
                <span className="font-mono tracking-widest text-sm sm:text-base font-bold text-white">
                  VAULT CLUB
                </span>
                <span className="text-[9px] font-mono text-[#71717A] hidden sm:inline">
                  // GRA IKEJA, LAGOS
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[#A1A1AA] uppercase">
                <span>SERVICES</span>
                <span>REVIEWS</span>
                <span className="text-amber-400">VIP RESERVATIONS</span>
              </div>
            </div>

            {/* Hero & VIP Booking Interface */}
            <div className="my-auto py-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-amber-300 block mb-1">
                PREMIUM HOSPITALITY & NIGHTLIFE
              </span>
              <h4 className="text-lg sm:text-2xl lg:text-3xl font-light uppercase tracking-wide text-white leading-tight">
                Lagos' Premier Nightlife & Lounge
              </h4>
              <p className="text-[11px] sm:text-xs text-[#A1A1AA] max-w-sm mt-1.5 font-light line-clamp-2">
                Upscale dining, VIP bottle service and curated nightlife experiences in the heart of Ikeja GRA.
              </p>

              {/* Verified Sections: Services & Reviews & Location */}
              <div className="mt-3.5 grid grid-cols-2 sm:grid-cols-3 gap-2 max-w-md">
                <div className="p-2 border border-[#262626] bg-[#151515]">
                  <div className="text-[8px] font-mono text-[#71717A] uppercase">VIP TABLE TIERS</div>
                  <div className="text-xs font-mono text-white font-medium mt-0.5">Onyx / Gold Booths</div>
                  <div className="text-[9px] text-[#55FB46] mt-0.5">Booking Available</div>
                </div>
                <div className="p-2 border border-[#262626] bg-[#151515]">
                  <div className="text-[8px] font-mono text-[#71717A] uppercase">LOCATION</div>
                  <div className="text-xs font-mono text-white font-medium mt-0.5">GRA Ikeja</div>
                  <div className="text-[9px] text-[#A1A1AA] mt-0.5">Lagos, Nigeria</div>
                </div>
                <div className="hidden sm:block p-2 border border-[#262626] bg-[#151515]">
                  <div className="text-[8px] font-mono text-[#71717A] uppercase">GUEST REVIEWS</div>
                  <div className="text-xs font-mono text-amber-400 flex items-center gap-1 mt-0.5">
                    <Star size={10} fill="currentColor" /> 4.9 Rating
                  </div>
                  <div className="text-[9px] text-[#71717A] mt-0.5">Curated Feedback</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
              <span className="flex items-center gap-1">
                <MapPin size={10} className="text-amber-400" /> GRA IKEJA, LAGOS
              </span>
              <span className="text-amber-300">HOSPITALITY WEBSITE CONCEPT</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* THEME 3: TEJ SALON BEAUTY & SANCTUARY PREVIEW                             */}
        {/* ========================================================================= */}
        {project.previewTheme === 'salon' && (
          <div className="h-full flex flex-col justify-between text-white relative">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#121413] via-[#090b0a] to-[#0B0B0B] opacity-95 -z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-2/3 opacity-25 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600 via-transparent to-transparent" />

            {/* Salon Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#262626]">
              <div className="flex items-center gap-2">
                <Scissors size={14} className="text-[#55FB46]" />
                <span className="tracking-widest text-sm sm:text-base font-light uppercase text-white">
                  TEJ SALON
                </span>
                <span className="text-[9px] font-mono text-[#71717A] hidden sm:inline">
                  · IKEJA SANCTUARY
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[#A1A1AA] uppercase">
                <span>SERVICES</span>
                <span>ABOUT SANCTUARY</span>
                <span className="text-[#55FB46]">GET IN TOUCH</span>
              </div>
            </div>

            {/* Hero & Beauty Services Showcase */}
            <div className="my-auto py-2">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#55FB46] block mb-1">
                BEAUTY, HAIR & WELLNESS
              </span>
              <h4 className="text-lg sm:text-2xl lg:text-3xl font-light uppercase tracking-tight text-white leading-tight">
                A Modern Sanctuary for Beauty
              </h4>
              <p className="text-[11px] sm:text-xs text-[#A1A1AA] max-w-sm mt-1.5 font-light line-clamp-2">
                Showcasing salon services, business information, and seamless customer contact flows for prospective clients.
              </p>

              {/* Service Modules Preview */}
              <div className="mt-3.5 flex flex-wrap gap-2 max-w-md">
                <div className="px-2.5 py-1.5 border border-[#262626] bg-[#151515] text-[10px] font-mono text-[#A1A1AA]">
                  HAIR STYLING & TREATMENTS
                </div>
                <div className="px-2.5 py-1.5 border border-[#262626] bg-[#151515] text-[10px] font-mono text-[#A1A1AA]">
                  BEAUTY & SANCTUARY CARE
                </div>
                <div className="px-2.5 py-1.5 border border-[#55FB46]/30 bg-[#55FB46]/10 text-[10px] font-mono text-[#55FB46] flex items-center gap-1">
                  <span>CONTACT FLOW ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-2 border-t border-[#262626] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
              <span>SALON & BEAUTY BUSINESS WEBSITE</span>
              <span className="text-[#55FB46]">LIVE DEPLOYMENT</span>
            </div>
          </div>
        )}

        {/* Hover Inspection Overlay */}
        <div className="absolute inset-0 bg-[#0B0B0B]/80 backdrop-blur-[2px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <div className="border border-[#262626] bg-[#151515] px-4 py-2 font-mono text-xs uppercase tracking-wider text-white flex items-center gap-2">
            <Sparkles size={14} className="text-[#55FB46]" />
            <span>CLICK TO VIEW PROJECT CASE STUDY & SPEC</span>
          </div>
        </div>
      </div>
    </div>
  );
};
