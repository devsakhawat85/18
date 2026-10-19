import React, { useState, useMemo } from 'react';
import { Page, PillarCategory, Modality } from '../types';
import { BRAND, CORE_PILLARS, MODALITIES_CATALOG } from '../data/wellnessData';
import { Search, Sparkles, Clock, CheckCircle2, ArrowRight, ArrowUpRight } from 'lucide-react';

interface OfferingsPageProps {
  onNavigate: (page: Page) => void;
  onSelectModality: (modality: Modality) => void;
  initialCategory?: PillarCategory | null;
}

export const OfferingsPage: React.FC<OfferingsPageProps> = ({
  onNavigate,
  onSelectModality,
  initialCategory = null
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModalities = useMemo(() => {
    return MODALITIES_CATALOG.filter((mod) => {
      const matchesCategory = selectedCategory === 'all' || mod.category === selectedCategory;
      const matchesSearch =
        mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.clinicalFocus.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mod.keyBenefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            <img src={BRAND.emblemSvg} alt="" className="w-4 h-4 object-contain" />
            <span>Clinical Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>20 Core Modalities</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-tight">
            Integrated Modalities & Treatment Ecosystem
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#232B32]/80 font-light">
            Our platform equips partner clinics with protocols spanning preventative aesthetic medicine, physical biological recovery, and cellular longevity diagnostics.
          </p>
        </div>
      </section>

      {/* 3 Pillar Summary Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => setSelectedCategory(pillar.id)}
              className={`p-6 border transition-all cursor-pointer ${
                selectedCategory === pillar.id
                  ? 'bg-[#232B32] text-white border-[#232B32] shadow-md'
                  : 'bg-[#F0EBE1]/60 text-[#232B32] border-[#232B32]/10 hover:border-[#785D41]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] uppercase tracking-wider font-semibold ${
                  selectedCategory === pillar.id ? 'text-[#9E8062]' : 'text-[#785D41]'
                }`}>
                  Pillar
                </span>
                <span className={`text-xs ${
                  selectedCategory === pillar.id ? 'text-white/70' : 'text-[#232B32]/60'
                }`}>
                  {pillar.modalities.length} Modalities
                </span>
              </div>
              <h3 className="font-display text-xl mb-2">{pillar.title}</h3>
              <p className={`text-xs leading-relaxed ${
                selectedCategory === pillar.id ? 'text-[#F0EBE1]/80' : 'text-[#232B32]/75'
              }`}>
                {pillar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0EBE1] p-4 sm:p-6 border border-[#232B32]/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs (Buttons) */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#232B32] text-white'
                  : 'bg-[#F9F7F4] text-[#232B32] hover:bg-[#232B32]/10'
              }`}
            >
              All Modalities ({MODALITIES_CATALOG.length})
            </button>
            <button
              onClick={() => setSelectedCategory('anti-aging')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                selectedCategory === 'anti-aging'
                  ? 'bg-[#232B32] text-white'
                  : 'bg-[#F9F7F4] text-[#232B32] hover:bg-[#232B32]/10'
              }`}
            >
              Anti-Aging (5)
            </button>
            <button
              onClick={() => setSelectedCategory('wellness-optimization')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                selectedCategory === 'wellness-optimization'
                  ? 'bg-[#232B32] text-white'
                  : 'bg-[#F9F7F4] text-[#232B32] hover:bg-[#232B32]/10'
              }`}
            >
              Wellness Optimization (7)
            </button>
            <button
              onClick={() => setSelectedCategory('longevity')}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                selectedCategory === 'longevity'
                  ? 'bg-[#232B32] text-white'
                  : 'bg-[#F9F7F4] text-[#232B32] hover:bg-[#232B32]/10'
              }`}
            >
              Longevity & Diagnostics (8)
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-[#232B32]/50 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by treatment, symptom, or focus..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F9F7F4] text-xs text-[#232B32] placeholder-[#232B32]/40 border border-[#232B32]/10 focus:outline-none focus:border-[#785D41]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#232B32]/50 hover:text-[#232B32]"
              >
                Clear
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Modalities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredModalities.length === 0 ? (
          <div className="text-center py-16 bg-[#F0EBE1]/40 border border-[#232B32]/10 p-8">
            <p className="font-display text-xl text-[#232B32] mb-2">No modalities matched your search</p>
            <p className="text-xs text-[#232B32]/70 mb-4">Try searching for terms like "NAD", "Peptides", "Laser", "Cryo", or "Diagnostics".</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs uppercase tracking-wider bg-[#232B32] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModalities.map((mod) => (
              <div
                key={mod.id}
                className="bg-[#F9F7F4] border border-[#232B32]/10 p-6 flex flex-col justify-between hover:border-[#785D41]/50 hover:shadow-sm transition-all group cursor-pointer"
                onClick={() => onSelectModality(mod)}
              >
                <div>
                  
                  {/* Category and Cadence */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-widest text-[#785D41] font-semibold">
                      {mod.categoryName}
                    </span>
                    <span className="text-[11px] text-[#232B32]/60 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#785D41]" />
                      <span className="truncate max-w-[140px]">{mod.typicalCadence.split(',')[0]}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-[#232B32] group-hover:text-[#785D41] transition-colors mb-2">
                    {mod.name}
                  </h3>

                  <p className="text-xs text-[#232B32]/80 leading-relaxed mb-4">
                    {mod.shortDescription}
                  </p>

                  <div className="p-3 bg-[#F0EBE1]/60 border border-[#232B32]/5 text-xs text-[#232B32]/85 mb-4">
                    <div className="font-semibold text-[10px] uppercase tracking-wider text-[#785D41] mb-1">
                      Clinical Focus
                    </div>
                    {mod.clinicalFocus}
                  </div>

                  <div className="space-y-1.5 mb-4">
                    {mod.keyBenefits.slice(0, 2).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#232B32]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#785D41] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{benefit}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-4 border-t border-[#232B32]/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#785D41] font-semibold group-hover:translate-x-1 transition-transform">
                    View Protocol Details
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#785D41]" />
                </div>

              </div>
            ))}
          </div>
        )}
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E252B] text-[#F0EBE1] p-8 sm:p-12 border border-[#232B32] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#9E8062] font-semibold">
              Clinic Expansion
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              Want to integrate these modalities into your clinic?
            </h3>
            <p className="text-xs sm:text-sm text-[#F0EBE1]/75 leading-relaxed">
              We provide equipment financing, protocol training, medical director oversight, and marketing funnels to turn your studio into a comprehensive longevity destination.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 text-xs uppercase tracking-wider font-medium text-[#1E252B] bg-[#F0EBE1] hover:bg-[#9E8062] hover:text-white transition-colors shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Inquire for Your Practice</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
