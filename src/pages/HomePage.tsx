import React, { useState } from 'react';
import { Page, PillarCategory, Modality } from '../types';
import { BRAND, CORE_PILLARS, STRATEGIC_VECTORS, FAQS, MODALITIES_CATALOG } from '../data/wellnessData';
import { ArrowUpRight, ArrowRight, ChevronDown, CheckCircle2, ShieldCheck, TrendingUp, Sparkles, Building, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onSelectModality: (modality: Modality) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectModality }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [activePathway, setActivePathway] = useState<'scale' | 'exit'>('scale');

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  const findModalityByName = (name: string): Modality | undefined => {
    return MODALITIES_CATALOG.find(m => m.name.toLowerCase() === name.toLowerCase()) ||
           MODALITIES_CATALOG.find(m => m.name.toLowerCase().includes(name.toLowerCase()));
  };

  return (
    <div className="space-y-24 sm:space-y-32">

      {/* 1. HIGH-IMPACT HERO SECTION */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Messaging & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              
              {/* Brand kicker - clean unboxed metadata */}
              <div className="flex items-center gap-3 text-xs tracking-[0.25em] uppercase text-[#785D41] font-medium">
                <img src={BRAND.emblemSvg} alt="" className="w-4 h-4 object-contain" />
                <span>The Platform for Regenerative Medicine</span>
                <span aria-hidden="true">·</span>
                <span>Est. 18 Wellness</span>
              </div>

              {/* Exact Original Brand Headline */}
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-[1.12] tracking-tight text-balance">
                18 Wellness is building the leading platform in regenerative medicine, longevity and wellness.
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg leading-relaxed text-[#232B32]/80 max-w-2xl font-light">
                Our group invests in growing clinics to actively help them scale, expand studio locations, and reduce patient acquisition costs—while offering seasoned clinic owners structured, clean exit and retirement solutions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  <span>Evaluate Your Clinic</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onNavigate('offerings')}
                  className="px-7 py-4 text-xs uppercase tracking-[0.18em] font-medium text-[#232B32] bg-transparent hover:bg-[#232B32]/5 border border-[#232B32]/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore 3 Pillars</span>
                  <ArrowRight className="w-4 h-4 text-[#785D41]" />
                </button>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-[#232B32]/10 grid grid-cols-3 gap-6 max-w-lg">
                <div>
                  <div className="font-display text-xl sm:text-2xl text-[#232B32]">3 Pillars</div>
                  <div className="text-xs text-[#232B32]/65 uppercase tracking-wider mt-0.5">Integrated Care</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl text-[#785D41]">Turnkey</div>
                  <div className="text-xs text-[#232B32]/65 uppercase tracking-wider mt-0.5">Capital & Ops</div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl text-[#232B32]">100%</div>
                  <div className="text-xs text-[#232B32]/65 uppercase tracking-wider mt-0.5">Confidential</div>
                </div>
              </div>

            </div>

            {/* Right Column: Architectural Hero Visual */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md sm:max-w-lg aspect-[4/5] bg-[#F0EBE1] border border-[#232B32]/10 p-3 sm:p-4 shadow-lg">
                
                {/* Arch Silhouette Frame */}
                <div className="w-full h-full overflow-hidden arch-mask-top relative bg-[#E5DFC9]">
                  <img
                    src={BRAND.images.heroSculptural}
                    alt="18 Wellness Sculptural Aesthetic"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E252B]/60 via-transparent to-transparent" />
                  
                  {/* Subtle lower card overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#F9F7F4]/90 backdrop-blur-sm border border-[#232B32]/10">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-[#785D41] font-semibold">
                      Regenerative Ecosystem
                    </p>
                    <p className="font-display text-sm sm:text-base text-[#232B32] mt-0.5">
                      Empowering clinic founders through scale, innovation & legacy preservation.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. STRATEGIC GROWTH VECTORS (PROPOSITION STRIP) */}
      <section className="bg-[#F0EBE1] border-y border-[#232B32]/10 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#785D41] font-semibold">
                Strategic Framework
              </span>
              <h2 className="font-display text-2xl sm:text-4xl text-[#232B32] mt-2">
                Four Pillars of Clinic Partnership
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#232B32]/70 max-w-md">
              We invest capital, clinical technology, and centralized operational muscle to turn exceptional local practices into enduring market leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STRATEGIC_VECTORS.map((vector) => (
              <div
                key={vector.step}
                className="bg-[#F9F7F4] p-8 border border-[#232B32]/10 flex flex-col justify-between hover:border-[#785D41]/40 transition-colors"
              >
                <div>
                  <div className="font-display text-3xl text-[#785D41]/80 mb-4">
                    {vector.step}
                  </div>
                  <h3 className="font-display text-xl text-[#232B32] mb-3">
                    {vector.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#232B32]/75">
                    {vector.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#232B32]/10">
                  <span className="text-[10px] tracking-wider uppercase text-[#785D41] font-semibold block">
                    {vector.metric}
                  </span>
                  <span className="text-xs text-[#232B32]/70 block mt-0.5">
                    {vector.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. THE THREE CORE OFFERING PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            <img src={BRAND.emblemSvg} alt="" className="w-3.5 h-3.5 object-contain" />
            <span>Target Clinic Offerings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl text-[#232B32] font-normal">
            The Three Pillars of Care
          </h2>
          <p className="text-sm sm:text-base text-[#232B32]/75 leading-relaxed font-light">
            Our clinics synthesize advanced aesthetic dermatology, state-of-the-art recovery modalities, and biomarker-driven longevity diagnostics into one unified continuum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F9F7F4] border border-[#232B32]/10 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div>
                
                {/* Visual Artwork with Arch Masking */}
                <div className="w-full aspect-[4/3] bg-[#F0EBE1] border border-[#232B32]/10 overflow-hidden mb-6 arch-mask-top relative">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 text-white text-xs uppercase tracking-widest font-medium">
                    {pillar.title}
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <h3 className="font-display text-2xl text-[#232B32]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-[#785D41] font-medium">
                    {pillar.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#232B32]/80 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Modalities list */}
                <div className="space-y-3 mb-6 pt-4 border-t border-[#232B32]/10">
                  <span className="text-[11px] tracking-wider uppercase text-[#232B32] font-semibold block">
                    Core Modalities
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {pillar.modalities.map((item, idx) => {
                      const modObj = findModalityByName(item);
                      return (
                        <button
                          key={idx}
                          onClick={() => modObj && onSelectModality(modObj)}
                          className="px-2.5 py-1 text-xs bg-[#F0EBE1] hover:bg-[#785D41] hover:text-white text-[#232B32] transition-colors cursor-pointer border border-[#232B32]/10 text-left"
                          title="Click to view modality clinical profile"
                        >
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-[#232B32]/10">
                <button
                  onClick={() => onNavigate('offerings')}
                  className="w-full py-2.5 text-xs uppercase tracking-wider font-medium text-[#785D41] hover:text-[#232B32] flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Explore Full Modality Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 4. PLATFORM ARCHITECTURE & CLINIC SANCTUARY SPOTLIGHT */}
      <section className="bg-[#1E252B] text-[#F0EBE1] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#9E8062] font-semibold">
                Operational Sanctuary
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#F9F7F4] leading-tight">
                Hospitality-Grade Sanctuaries For Advanced Care
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#F0EBE1]/80 font-light">
                We believe regenerative medicine thrives in spaces that evoke peace, calm, and luxury. 18 Wellness elevates partner clinic facilities with architectural natural stone, acoustic tranquility, and streamlined digital reception.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#785D41]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#9E8062]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F9F7F4]">Turnkey Modality Integration</h4>
                    <p className="text-xs text-[#F0EBE1]/70 mt-0.5 leading-relaxed">
                      We finance and install high-yield equipment—from AI Bodyscans to Hyperbaric Oxygen Chambers—without burdening clinic balance sheets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#785D41]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#9E8062]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F9F7F4]">Predictable Membership Models</h4>
                    <p className="text-xs text-[#F0EBE1]/70 mt-0.5 leading-relaxed">
                      Transform episodic patient transactions into high-retention annual memberships spanning aesthetics and mitochondrial longevity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#785D41]/30 flex items-center justify-center shrink-0 mt-0.5 text-[#9E8062]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[#F9F7F4]">Comprehensive Marketing & CAC Reduction</h4>
                    <p className="text-xs text-[#F0EBE1]/70 mt-0.5 leading-relaxed">
                      Centralized digital acquisition campaigns, refined SEO, and corporate executive health programs that drive qualified appointments.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors cursor-pointer"
                >
                  Learn About Our Model
                </button>
              </div>

            </div>

            <div className="lg:col-span-6">
              <div className="relative border border-[#F0EBE1]/15 p-3 bg-[#232B32]">
                <img
                  src={BRAND.images.clinicInterior}
                  alt="Eighteen Wellness Clinic Interior Design"
                  className="w-full h-auto object-cover arch-mask-top shadow-2xl"
                  loading="lazy"
                />
                <div className="mt-3 flex items-center justify-between text-xs text-[#F0EBE1]/60 px-2">
                  <span>Eighteen Wellness Studio Standard</span>
                  <span>Travertine & Natural Light Architecture</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. INTERACTIVE CLINIC PARTNERSHIP PATHWAYS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            Tailored Engagement
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
            Two Distinct Paths For Clinic Owners
          </h2>
          <p className="text-sm text-[#232B32]/75 leading-relaxed font-light">
            Whether your objective is aggressive multi-location expansion or a graceful, fully liquid retirement, our team crafts a customized partnership.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-[#F0EBE1] border border-[#232B32]/10">
            <button
              onClick={() => setActivePathway('scale')}
              className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePathway === 'scale'
                  ? 'bg-[#232B32] text-white shadow-xs'
                  : 'text-[#232B32]/70 hover:text-[#232B32]'
              }`}
            >
              01. Active Scaling & Growth
            </button>
            <button
              onClick={() => setActivePathway('exit')}
              className={`px-6 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activePathway === 'exit'
                  ? 'bg-[#232B32] text-white shadow-xs'
                  : 'text-[#232B32]/70 hover:text-[#232B32]'
              }`}
            >
              02. Succession & Retirement Exit
            </button>
          </div>
        </div>

        {/* Dynamic Pathway Content */}
        <div className="bg-[#F9F7F4] border border-[#232B32]/10 p-8 sm:p-12">
          {activePathway === 'scale' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <span className="text-xs uppercase tracking-widest text-[#785D41] font-semibold">
                  For Growth-Oriented Clinic Founders
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#232B32]">
                  Accelerate Your Expansion With Institutional Backing
                </h3>
                <p className="text-sm text-[#232B32]/80 leading-relaxed">
                  You love clinical medicine and see vast opportunity in your region, but you need capital to build studios 2, 3, and 4, finance advanced aesthetic equipment, and offload administrative overhead.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F0EBE1]/60 border border-[#232B32]/5">
                    <span className="font-semibold text-xs uppercase tracking-wider text-[#785D41] block mb-1">
                      Capital Injection
                    </span>
                    <p className="text-xs text-[#232B32]/80">Growth capital for new real estate leases, buildouts, and flagship aesthetic devices.</p>
                  </div>
                  <div className="p-4 bg-[#F0EBE1]/60 border border-[#232B32]/5">
                    <span className="font-semibold text-xs uppercase tracking-wider text-[#785D41] block mb-1">
                      Centralized Marketing
                    </span>
                    <p className="text-xs text-[#232B32]/80">Turnkey patient acquisition funnels driving high-ticket longevity consultations.</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="px-6 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors"
                  >
                    Discuss Scaling Capital
                  </button>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[#232B32]/10 p-2 bg-[#F0EBE1]">
                  <img
                    src={BRAND.images.recoveryLounge}
                    alt="Clinic Optimization Suite"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-5">
                <span className="text-xs uppercase tracking-widest text-[#785D41] font-semibold">
                  For Established Practice Owners
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#232B32]">
                  Protect Your Clinical Legacy While Unlocking Life\'s Value
                </h3>
                <p className="text-sm text-[#232B32]/80 leading-relaxed">
                  You have built a thriving clinic over years or decades. You are ready to monetize your equity, de-risk your financial life, or retire completely—knowing your patients and team are in compassionate hands.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-[#F0EBE1]/60 border border-[#232B32]/5">
                    <span className="font-semibold text-xs uppercase tracking-wider text-[#785D41] block mb-1">
                      Clean Liquidity
                    </span>
                    <p className="text-xs text-[#232B32]/80">Straightforward valuation and structured cash purchase without predatory lockups.</p>
                  </div>
                  <div className="p-4 bg-[#F0EBE1]/60 border border-[#232B32]/5">
                    <span className="font-semibold text-xs uppercase tracking-wider text-[#785D41] block mb-1">
                      Legacy Protection
                    </span>
                    <p className="text-xs text-[#232B32]/80">Your trusted staff, clinic brand, and standards of patient care remain intact.</p>
                  </div>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('clinic-owners')}
                    className="px-6 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#785D41] hover:bg-[#232B32] transition-colors"
                  >
                    View Succession Blueprint
                  </button>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[#232B32]/10 p-2 bg-[#F0EBE1]">
                  <img
                    src={BRAND.images.partnerCollaboration}
                    alt="Confidential Partner Collaboration"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

      </section>

      {/* 6. SIGNATURE OFFERING SPOTLIGHT: LONGEVITY & BIOMARKER DIAGNOSTICS */}
      <section className="bg-[#F0EBE1] py-20 border-y border-[#232B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <div className="relative border border-[#232B32]/15 p-3 bg-[#F9F7F4]">
                <img
                  src={BRAND.images.diagnosticSuite}
                  alt="Longevity & Diagnostics Suite"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
                Signature Innovation
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-[#232B32]">
                Precision Biomarkers & Longevity Diagnostics
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#232B32]/80 font-light">
                Traditional medspas rely entirely on short-term aesthetic visits. 18 Wellness introduces turnkey clinical biomarker suites that transition clients from episodic wrinkle relaxers into lifelong proactive healthspan members.
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 bg-[#F9F7F4] border border-[#232B32]/10">
                  <span className="font-semibold text-[#232B32] block">Metabolic & CGM Profiling</span>
                  <span className="text-[#232B32]/70 mt-1 block">Real-time glucose dynamics & insulin sensitivity</span>
                </div>
                <div className="p-3 bg-[#F9F7F4] border border-[#232B32]/10">
                  <span className="font-semibold text-[#232B32] block">Epigenetic Biological Age</span>
                  <span className="text-[#232B32]/70 mt-1 block">DNA methylation and telomere pacing</span>
                </div>
                <div className="p-3 bg-[#F9F7F4] border border-[#232B32]/10">
                  <span className="font-semibold text-[#232B32] block">Peptide Therapy Protocols</span>
                  <span className="text-[#232B32]/70 mt-1 block">Cellular regeneration & tissue repair signaling</span>
                </div>
                <div className="p-3 bg-[#F9F7F4] border border-[#232B32]/10">
                  <span className="font-semibold text-[#232B32] block">NAD+ Cellular Infusions</span>
                  <span className="text-[#232B32]/70 mt-1 block">Mitochondrial restoration & ATP optimization</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('offerings')}
                  className="px-6 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors"
                >
                  Explore All Longevity Modalities
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            Clarity & Governance
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#232B32]/70 font-light">
            Answers for clinic founders, medical directors, and healthcare practitioners considering the 18 Wellness platform.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.slice(0, 6).map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-[#232B32]/15 bg-[#F9F7F4] transition-colors"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41]"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg sm:text-xl text-[#232B32]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#785D41] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#232B32]/80 leading-relaxed border-t border-[#232B32]/5">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-[11px] text-[#785D41] uppercase tracking-wider font-medium">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('faq')}
            className="text-xs uppercase tracking-wider text-[#785D41] hover:text-[#232B32] font-semibold inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>View All Questions & Clinical Policies</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* 8. CONVERSION-FOCUSED CLOSING SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative bg-[#232B32] text-[#F0EBE1] border border-[#232B32] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-14 lg:p-16">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#9E8062] font-semibold">
                <img src={BRAND.emblemSvg} alt="" className="w-4 h-4 object-contain invert" />
                <span>Begin the Conversation</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl text-[#F9F7F4] leading-tight">
                Ready to explore scaling capital or a discreet succession evaluation?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#F0EBE1]/80 max-w-xl font-light">
                Every inquiry is held under strict mutual non-disclosure. We review your clinic profile, clinical specialties, and strategic objectives to determine alignment.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Start Confidential Evaluation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="px-6 py-4 text-xs uppercase tracking-[0.18em] font-medium text-[#F0EBE1] border border-[#F0EBE1]/30 hover:border-[#F0EBE1] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Email Directly: {BRAND.email}</span>
                </a>
              </div>

            </div>

            {/* Original Arch Contact Asset */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[3/4] bg-[#1E252B] border border-[#F0EBE1]/20 p-3 arch-mask-top overflow-hidden">
                <img
                  src={BRAND.images.contactInterior}
                  alt="Eighteen Wellness Clinic Portal"
                  className="w-full h-full object-cover arch-mask-top"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
