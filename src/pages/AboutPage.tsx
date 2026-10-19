import React from 'react';
import { Page } from '../types';
import { BRAND } from '../data/wellnessData';
import { Shield, Sparkles, Building2, TrendingUp, Users, HeartHandshake, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-24">
      
      {/* 1. Header & Vision Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
              <img src={BRAND.emblemSvg} alt="" className="w-4 h-4 object-contain" />
              <span>Platform Vision</span>
              <span aria-hidden="true">·</span>
              <span>18 Wellness</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-[1.12]">
              Elevating the Future of Regenerative Medicine
            </h1>

            <div className="p-6 bg-[#F0EBE1] border-l-2 border-[#785D41] text-[#232B32]">
              <p className="font-display text-lg sm:text-xl leading-relaxed italic text-[#232B32]/90">
                "{BRAND.mission}"
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#232B32]/80 font-light">
              We founded 18 Wellness with a single realization: the most talented clinic owners spend up to 70% of their bandwidth fighting fragmented back-office administration, unpredictable customer acquisition costs, and capital constraints—diverting focus from clinical craft.
            </p>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => onNavigate('clinic-owners')}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors"
              >
                For Clinic Owners
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#232B32] border border-[#232B32]/25 hover:border-[#232B32] transition-colors"
              >
                Confidential Inquiry
              </button>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#232B32]/10 p-3 bg-[#F0EBE1]">
              <img
                src={BRAND.images.clinicInterior}
                alt="18 Wellness Clinic Architecture"
                className="w-full h-auto object-cover arch-mask-top shadow-lg"
              />
              <div className="p-3 bg-[#F9F7F4] mt-3 text-xs text-[#232B32]/70 flex items-center justify-between">
                <span>Sanctuary Environment</span>
                <span>Eighteen Wellness Platform</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Three-Fold Convergence */}
      <section className="bg-[#F0EBE1] py-16 border-y border-[#232B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
              Market Shift
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
              Why We Bring Three Disciplines Under One Roof
            </h2>
            <p className="text-sm text-[#232B32]/75 leading-relaxed font-light">
              Historically, patients visited three separate businesses: a medspa for aesthetic injectables, a recovery studio for cold plunges and sauna, and a functional medicine MD for blood panels. 18 Wellness integrates them into one seamless clinical journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F9F7F4] p-8 border border-[#232B32]/10 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#785D41]/10 flex items-center justify-center text-[#785D41]">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl text-[#232B32]">Aesthetic Precision</h3>
              <p className="text-xs sm:text-sm text-[#232B32]/75 leading-relaxed">
                Addressing surface vitality, collagen regeneration, and facial structural integrity through conservative, natural biostimulation.
              </p>
            </div>

            <div className="bg-[#F9F7F4] p-8 border border-[#232B32]/10 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#785D41]/10 flex items-center justify-center text-[#785D41]">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl text-[#232B32]">Physical Recovery</h3>
              <p className="text-xs sm:text-sm text-[#232B32]/75 leading-relaxed">
                Optimizing mitochondrial output, cellular oxygenation, and autonomic nervous system balance through hyperbaric and contrast therapy.
              </p>
            </div>

            <div className="bg-[#F9F7F4] p-8 border border-[#232B32]/10 space-y-4">
              <div className="w-8 h-8 rounded-full bg-[#785D41]/10 flex items-center justify-center text-[#785D41]">
                <Shield className="w-4 h-4" />
              </div>
              <h3 className="font-display text-xl text-[#232B32]">Longevity Analytics</h3>
              <p className="text-xs sm:text-sm text-[#232B32]/75 leading-relaxed">
                Empirical diagnostic testing, hormonal balancing, and peptide protocols extending healthy active human healthspan.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. The Operational Blueprint */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            Institutional Support
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
            What Partner Clinics Gain
          </h2>
          <p className="text-sm text-[#232B32]/75 font-light">
            When 18 Wellness invests in your practice, we unlock operational leverage typically reserved for nationwide healthcare conglomerates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <TrendingUp className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Expansion Real Estate</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Demographic analytics and site selection capital to open profitable secondary studios in premier suburban and metropolitan enclaves.
            </p>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <Building2 className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Equipment Financing</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Direct capital allocation for FDA-cleared aesthetic lasers, AI scanners, and hyperbaric suites without onerous commercial lease debt.
            </p>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <Users className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Staffing & Training Academies</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Standardized clinical onboarding, injector training certifications, and performance incentive models that retain top medical talent.
            </p>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <Shield className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Medical Director Oversight</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Robust multi-state compliance infrastructure, clinical standard operating procedures, and risk mitigation protocols.
            </p>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <Sparkles className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Tier-1 Supply Chain Discounts</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Economies of scale purchasing power on neurotoxins, dermal fillers, IV compounding formulas, and diagnostic kits.
            </p>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-3">
            <HeartHandshake className="w-5 h-5 text-[#785D41]" />
            <h4 className="font-display text-lg text-[#232B32]">Founder Retirement Security</h4>
            <p className="text-xs leading-relaxed text-[#232B32]/75">
              Guaranteed liquidity events, fair-market enterprise valuations, and structured continuity programs for retiring physicians.
            </p>
          </div>
        </div>

      </section>

      {/* 4. Strategic Collaboration CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#232B32] text-[#F0EBE1] p-8 sm:p-14 border border-[#232B32] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#9E8062] font-semibold">
              Confidential Discussion
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-white">
              Discover How Your Clinic Fits Into Our Platform
            </h3>
            <p className="text-xs sm:text-sm text-[#F0EBE1]/75 leading-relaxed font-light">
              Speak with our investment team under strict NDA. Learn about our valuation multiples, capital availability, and operational integration process.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 text-xs uppercase tracking-wider font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Request Confidential Meeting</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
