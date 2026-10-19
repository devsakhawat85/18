import React, { useState } from 'react';
import { Page } from '../types';
import { BRAND } from '../data/wellnessData';
import { ArrowUpRight, CheckCircle2, ShieldCheck, DollarSign, Building, Sparkles, Clock, Lock } from 'lucide-react';

interface ClinicOwnersPageProps {
  onNavigate: (page: Page) => void;
}

export const ClinicOwnersPage: React.FC<ClinicOwnersPageProps> = ({ onNavigate }) => {
  // Interactive Clinic Calculator State
  const [revenueBand, setRevenueBand] = useState<string>('1m-2m');
  const [clinicType, setClinicType] = useState<string>('medspa');
  const [locationCount, setLocationCount] = useState<number>(1);
  const [primaryGoal, setPrimaryGoal] = useState<'scale' | 'exit'>('scale');

  const calculateEstimates = () => {
    let baseRevenue = 1500000;
    if (revenueBand === 'sub-500k') baseRevenue = 400000;
    if (revenueBand === '500k-1m') baseRevenue = 750000;
    if (revenueBand === '1m-2m') baseRevenue = 1500000;
    if (revenueBand === '2m-4m') baseRevenue = 2800000;
    if (revenueBand === '4m-plus') baseRevenue = 5000000;

    const totalRev = baseRevenue * locationCount;
    const estValuationMin = Math.round(totalRev * 1.8);
    const estValuationMax = Math.round(totalRev * 3.2);
    const estExpansionLocations = locationCount >= 2 ? '+2 to 4 locations' : '+1 to 2 locations';
    const estCacReduction = '30% – 45%';

    return {
      totalRev,
      estValuationMin: (estValuationMin / 1000000).toFixed(1),
      estValuationMax: (estValuationMax / 1000000).toFixed(1),
      estExpansionLocations,
      estCacReduction,
    };
  };

  const estimates = calculateEstimates();

  return (
    <div className="py-12 sm:py-16 space-y-24">
      
      {/* 1. Hero: Strategic Home for Clinic Owners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
              <Lock className="w-3.5 h-3.5 text-[#785D41]" />
              <span>Strictly Confidential</span>
              <span aria-hidden="true">·</span>
              <span>For Clinic Founders</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-[1.12]">
              The Strategic Capital & Exit Partner for Wellness Clinics
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[#232B32]/80 font-light max-w-xl">
              Whether you are an ambitious founder seeking capital to open locations 2, 3, and 4, or a seasoned practice owner seeking an orderly retirement, 18 Wellness provides institutional strength without corporate bureaucracy.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors flex items-center justify-center gap-2"
              >
                <span>Request Practice Valuation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={`mailto:${BRAND.email}?subject=Confidential%20Clinic%20Owner%20Inquiry`}
                className="px-6 py-4 text-xs uppercase tracking-wider font-medium text-[#232B32] border border-[#232B32]/25 hover:border-[#232B32] transition-colors flex items-center justify-center"
              >
                Direct: {BRAND.email}
              </a>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#232B32]/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#785D41]" />
                Mutual Non-Disclosure Agreement
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#785D41]" />
                Preserve Local Clinic Brand Equity
              </span>
            </div>

          </div>

          <div className="lg:col-span-5">
            <div className="border border-[#232B32]/10 p-3 bg-[#F0EBE1]">
              <img
                src={BRAND.images.partnerCollaboration}
                alt="Executive Consultation"
                className="w-full h-auto object-cover arch-mask-top shadow-lg"
              />
              <div className="p-3 bg-[#F9F7F4] mt-3 text-xs text-[#232B32]/75">
                <span className="font-semibold block text-[#232B32]">Discreet Owner Consultation</span>
                <span>Personalized equity & liquidity planning for medical entrepreneurs</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Clinic Value & Growth Potential Estimator */}
      <section className="bg-[#F0EBE1] py-16 border-y border-[#232B32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
              Interactive Tool
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
              Clinic Value & Growth Potential Simulator
            </h2>
            <p className="text-sm text-[#232B32]/75 font-light">
              Select your clinic parameters to model potential platform synergies, valuation ranges, and expansion timelines under 18 Wellness backing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 bg-[#F9F7F4] p-6 sm:p-8 border border-[#232B32]/10 space-y-6">
              
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-2">
                  Primary Strategic Goal
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setPrimaryGoal('scale')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer text-left ${
                      primaryGoal === 'scale'
                        ? 'bg-[#232B32] text-white border-[#232B32]'
                        : 'bg-white text-[#232B32] border-[#232B32]/15 hover:border-[#785D41]'
                    }`}
                  >
                    Active Scaling & Expansion
                  </button>
                  <button
                    onClick={() => setPrimaryGoal('exit')}
                    className={`py-3 px-4 text-xs font-semibold uppercase tracking-wider border transition-colors cursor-pointer text-left ${
                      primaryGoal === 'exit'
                        ? 'bg-[#232B32] text-white border-[#232B32]'
                        : 'bg-white text-[#232B32] border-[#232B32]/15 hover:border-[#785D41]'
                    }`}
                  >
                    Retirement & Equity Exit
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-2">
                  Annual Revenue (per location average)
                </label>
                <select
                  value={revenueBand}
                  onChange={(e) => setRevenueBand(e.target.value)}
                  className="w-full p-3 bg-white border border-[#232B32]/20 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                >
                  <option value="sub-500k">&lt; $500,000 / year</option>
                  <option value="500k-1m">$500,000 – $1,000,000 / year</option>
                  <option value="1m-2m">$1,000,000 – $2,000,000 / year (Typical Target)</option>
                  <option value="2m-4m">$2,000,000 – $4,000,000 / year</option>
                  <option value="4m-plus">$4,000,000+ / year (Premier Flagship)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-2">
                  Current Number of Operational Studios
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <button
                      key={num}
                      onClick={() => setLocationCount(num)}
                      className={`flex-1 py-2.5 text-xs font-semibold border transition-colors cursor-pointer ${
                        locationCount === num
                          ? 'bg-[#785D41] text-white border-[#785D41]'
                          : 'bg-white text-[#232B32] border-[#232B32]/15 hover:border-[#785D41]'
                      }`}
                    >
                      {num} {num === 5 ? '+' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-2">
                  Core Practice Focus
                </label>
                <select
                  value={clinicType}
                  onChange={(e) => setClinicType(e.target.value)}
                  className="w-full p-3 bg-white border border-[#232B32]/20 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                >
                  <option value="medspa">Aesthetics & Medspa (Injectables, Laser, Body Contouring)</option>
                  <option value="recovery">Wellness & Recovery (Cryotherapy, Sauna, Hyperbaric, IV)</option>
                  <option value="longevity">Integrative & Longevity (Hormones, Diagnostics, Peptides)</option>
                  <option value="multi">Hybrid Multi-Modality Practice</option>
                </select>
              </div>

            </div>

            {/* Output Display Card */}
            <div className="lg:col-span-6 bg-[#232B32] text-[#F0EBE1] p-6 sm:p-8 border border-[#232B32] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#F0EBE1]/10 pb-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#9E8062] font-semibold block">
                    Modeled Enterprise Indicator
                  </span>
                  <span className="font-display text-xl text-[#F9F7F4]">
                    Estimated Platform Potential
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#F0EBE1]/60">Confidential Estimate</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#1E252B] border border-[#F0EBE1]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E8062] block mb-1">
                    Indicative Valuation Band
                  </span>
                  <div className="font-display text-2xl sm:text-3xl text-white">
                    ${estimates.estValuationMin}M – ${estimates.estValuationMax}M
                  </div>
                  <span className="text-[11px] text-[#F0EBE1]/60 mt-1 block">Based on clean EBITDA multiples</span>
                </div>

                <div className="p-4 bg-[#1E252B] border border-[#F0EBE1]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E8062] block mb-1">
                    Estimated CAC Reduction
                  </span>
                  <div className="font-display text-2xl sm:text-3xl text-emerald-400">
                    {estimates.estCacReduction}
                  </div>
                  <span className="text-[11px] text-[#F0EBE1]/60 mt-1 block">Via 18 Wellness media engine</span>
                </div>

                <div className="p-4 bg-[#1E252B] border border-[#F0EBE1]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E8062] block mb-1">
                    Expansion Runway
                  </span>
                  <div className="font-display text-xl sm:text-2xl text-white">
                    {estimates.estExpansionLocations}
                  </div>
                  <span className="text-[11px] text-[#F0EBE1]/60 mt-1 block">Funded expansion capacity</span>
                </div>

                <div className="p-4 bg-[#1E252B] border border-[#F0EBE1]/10">
                  <span className="text-[10px] uppercase tracking-wider text-[#9E8062] block mb-1">
                    Turnaround Horizon
                  </span>
                  <div className="font-display text-xl sm:text-2xl text-white">
                    30 – 45 Days
                  </div>
                  <span className="text-[11px] text-[#F0EBE1]/60 mt-1 block">LOI to initial capital close</span>
                </div>
              </div>

              <div className="p-4 bg-[#785D41]/20 border border-[#785D41]/40 text-xs text-[#F0EBE1]/85 leading-relaxed">
                <span className="font-semibold text-white block mb-0.5">Custom Valuation Available</span>
                Every clinic is evaluated individually based on patient recurring revenue, margin profile, local demographic Moat, and practitioner retention.
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-4 text-xs uppercase tracking-wider font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Submit Practice for Formal Evaluation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* 3. The 4-Stage Transaction Roadmap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            Predictable Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#232B32]">
            The Four-Stage Partnership Roadmap
          </h2>
          <p className="text-sm text-[#232B32]/75 font-light">
            We respect your time and confidentiality. Here is exactly how our partnership conversations progress from initial inquiry to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-4">
            <span className="font-display text-3xl text-[#785D41]">01</span>
            <h4 className="font-display text-lg text-[#232B32]">Discreet NDA & Introduction</h4>
            <p className="text-xs text-[#232B32]/75 leading-relaxed">
              We execute a strict mutual non-disclosure agreement. A 30-minute private discussion with our partners to understand your goals.
            </p>
            <div className="text-[11px] text-[#785D41] font-medium">Timeline: Days 1–3</div>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-4">
            <span className="font-display text-3xl text-[#785D41]">02</span>
            <h4 className="font-display text-lg text-[#232B32]">Operational & Financial Review</h4>
            <p className="text-xs text-[#232B32]/75 leading-relaxed">
              We review historical treatment mix, patient acquisition costs, and facility leases to calculate an exact fair-market valuation.
            </p>
            <div className="text-[11px] text-[#785D41] font-medium">Timeline: Days 4–14</div>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-4">
            <span className="font-display text-3xl text-[#785D41]">03</span>
            <h4 className="font-display text-lg text-[#232B32]">Customized Term Sheet</h4>
            <p className="text-xs text-[#232B32]/75 leading-relaxed">
              A clear, transparent offer detailing purchase price, equity roll, growth capital commitment, and your desired involvement level.
            </p>
            <div className="text-[11px] text-[#785D41] font-medium">Timeline: Day 15</div>
          </div>

          <div className="p-6 bg-[#F9F7F4] border border-[#232B32]/10 space-y-4">
            <span className="font-display text-3xl text-[#785D41]">04</span>
            <h4 className="font-display text-lg text-[#232B32]">Execution & Capital Deployment</h4>
            <p className="text-xs text-[#232B32]/75 leading-relaxed">
              Expedited closing. Immediate infusion of expansion funds, technology installation, or seamless retirement transition.
            </p>
            <div className="text-[11px] text-[#785D41] font-medium">Timeline: Days 30–45</div>
          </div>
        </div>

      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E252B] text-[#F0EBE1] p-8 sm:p-14 border border-[#232B32] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#9E8062] font-semibold">
              Begin Today
            </span>
            <h3 className="font-display text-2xl sm:text-4xl text-white">
              Take the first step in unlocking your clinic's true potential.
            </h3>
            <p className="text-xs sm:text-sm text-[#F0EBE1]/75 leading-relaxed font-light">
              No brokers, no public listings, no disruption to your staff or patients.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 text-xs uppercase tracking-wider font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Confidential Intake</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
