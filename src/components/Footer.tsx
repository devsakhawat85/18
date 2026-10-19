import React from 'react';
import { Page, PillarCategory } from '../types';
import { Mail, ArrowUpRight } from 'lucide-react';
import { BRAND, CORE_PILLARS } from '../data/wellnessData';

interface FooterProps {
  onNavigate: (page: Page) => void;
  onSelectPillar?: (pillar: PillarCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectPillar }) => {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePillarNav = (pillar: PillarCategory) => {
    if (onSelectPillar) {
      onSelectPillar(pillar);
    }
    onNavigate('offerings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E252B] text-[#F0EBE1] border-t border-[#F0EBE1]/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F0EBE1]/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={BRAND.emblemSvg}
                alt="18 Wellness"
                className="w-9 h-9 object-contain invert opacity-90"
              />
              <span className="font-display text-2xl tracking-[0.2em] text-[#F9F7F4] uppercase font-normal">
                18 Wellness
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-[#F0EBE1]/75 max-w-md">
              Building the leading platform in regenerative medicine, longevity and wellness. Investing in growing clinics, active scaling, and founder retirement solutions.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${BRAND.email}`}
                className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-[#9E8062] hover:text-[#F9F7F4] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{BRAND.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Core Pillars */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#9E8062] font-semibold">
              Clinical Pillars
            </h4>
            <ul className="space-y-3 text-sm text-[#F0EBE1]/75">
              {CORE_PILLARS.map((pillar) => (
                <li key={pillar.id}>
                  <button
                    onClick={() => handlePillarNav(pillar.id)}
                    className="hover:text-[#F9F7F4] transition-colors text-left cursor-pointer focus:outline-none"
                  >
                    {pillar.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform & Navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#9E8062] font-semibold">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-[#F0EBE1]/75">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#F9F7F4] transition-colors cursor-pointer">
                  About Platform
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('clinic-owners')} className="hover:text-[#F9F7F4] transition-colors cursor-pointer">
                  For Clinic Owners
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#F9F7F4] transition-colors cursor-pointer">
                  Partnership FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#F9F7F4] transition-colors cursor-pointer">
                  Confidential Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Direct CTA */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#9E8062] font-semibold">
              Clinic Owners
            </h4>
            <p className="text-xs leading-relaxed text-[#F0EBE1]/65">
              Ready to scale or evaluate succession options for your practice?
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="inline-block w-full text-center px-4 py-2.5 text-xs tracking-wider uppercase font-medium bg-[#785D41] hover:bg-[#9E8062] text-white transition-colors cursor-pointer"
            >
              Evaluate Clinic
            </button>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F0EBE1]/50">
          <p>© {new Date().getFullYear()} Eighteen Wellness Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#F0EBE1]/80 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => handleNav('terms')} className="hover:text-[#F0EBE1]/80 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <span aria-hidden="true">·</span>
            <a href={`mailto:${BRAND.email}`} className="hover:text-[#F0EBE1]/80 transition-colors">
              Direct Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
