import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/wellnessData';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: Page }[] = [
    { label: 'Offerings', page: 'offerings' },
    { label: 'Platform & About', page: 'about' },
    { label: 'For Clinic Owners', page: 'clinic-owners' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F9F7F4]/95 backdrop-blur-md border-b border-[#232B32]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single Clean Brand Wordmark & Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41]"
          >
            <img
              src={BRAND.emblemSvg}
              alt="18 Wellness Emblem"
              className="w-8 h-8 object-contain transition-transform duration-300 group-hover:rotate-45"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl tracking-[0.18em] text-[#232B32] font-normal uppercase whitespace-nowrap">
                18 Wellness
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#785D41] uppercase -mt-1 font-medium hidden sm:block">
                Regenerative Platform
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#232B32]/80">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`relative py-1 whitespace-nowrap transition-colors hover:text-[#232B32] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41] ${
                  currentPage === link.page
                    ? 'text-[#232B32] font-semibold'
                    : 'text-[#232B32]/70'
                }`}
              >
                {link.label}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#785D41] transition-all" />
                )}
              </button>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 text-xs tracking-wider uppercase font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors rounded-none flex items-center gap-1.5 cursor-pointer shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41]"
            >
              <span>Partner Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#232B32] hover:text-[#785D41] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F7F4] border-b border-[#232B32]/10 px-6 pt-4 pb-8 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4 text-base font-medium text-[#232B32]">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => handleNavClick(link.page)}
                className={`py-2 text-left transition-colors flex items-center justify-between border-b border-[#232B32]/5 ${
                  currentPage === link.page
                    ? 'text-[#785D41] font-semibold'
                    : 'text-[#232B32]/80'
                }`}
              >
                <span>{link.label}</span>
                {currentPage === link.page && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#785D41]" />
                )}
              </button>
            ))}
            <div className="pt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 text-xs tracking-wider uppercase font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors flex items-center justify-center gap-2"
              >
                <span>Partner Inquiry & Valuation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
