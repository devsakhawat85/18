import React, { useState, useMemo } from 'react';
import { Page, FAQItem } from '../types';
import { BRAND, FAQS } from '../data/wellnessData';
import { Search, ChevronDown, Mail, ArrowUpRight } from 'lucide-react';

interface FAQPageProps {
  onNavigate: (page: Page) => void;
}

export const FAQPage: React.FC<FAQPageProps> = ({ onNavigate }) => {
  const [activeFaq, setActiveFaq] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Partnership & Capital', 'Exit & Retirement', 'Clinical Operations', 'Client Experience'];

  const filteredFaqs = useMemo(() => {
    return FAQS.filter(faq => {
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const toggleFaq = (id: string) => {
    setActiveFaq(prev => prev === id ? null : id);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            <img src={BRAND.emblemSvg} alt="" className="w-4 h-4 object-contain" />
            <span>Knowledge Base</span>
            <span aria-hidden="true">·</span>
            <span>Platform Governance</span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#232B32]/80 font-light">
            Clear, transparent answers regarding clinic investment, valuation multiples, operational scaling, and medical succession.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0EBE1] p-4 sm:p-6 border border-[#232B32]/10 space-y-4">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-[#232B32]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic, keyword (e.g. 'retirement', 'valuation', 'CAC', 'equipment')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#F9F7F4] text-xs sm:text-sm text-[#232B32] placeholder-[#232B32]/40 border border-[#232B32]/10 focus:outline-none focus:border-[#785D41]"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#232B32] text-white'
                    : 'bg-[#F9F7F4] text-[#232B32]/80 hover:bg-[#232B32]/10'
                }`}
              >
                {cat === 'all' ? 'All Questions' : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#F0EBE1]/40 border border-[#232B32]/10 p-8">
            <p className="font-display text-xl text-[#232B32] mb-2">No matching questions found</p>
            <p className="text-xs text-[#232B32]/70 mb-4">Feel free to contact our team directly with any specific inquiries.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="px-4 py-2 text-xs uppercase tracking-wider bg-[#232B32] text-white"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
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
                    <div className="px-6 pb-6 pt-1 text-sm text-[#232B32]/85 leading-relaxed border-t border-[#232B32]/5">
                      <p>{faq.answer}</p>
                      <div className="mt-3 text-[11px] text-[#785D41] uppercase tracking-wider font-semibold">
                        Category: {faq.category}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-[#F0EBE1] border border-[#232B32]/10 text-center space-y-4">
          <h3 className="font-display text-2xl text-[#232B32]">
            Have a Specific Question About Your Practice?
          </h3>
          <p className="text-xs sm:text-sm text-[#232B32]/75 max-w-lg mx-auto">
            Our investment team responds to all verified clinic inquiries within 24 business hours under strict mutual non-disclosure.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors"
            >
              Submit Confidential Inquiry
            </button>
            <a
              href={`mailto:${BRAND.email}`}
              className="px-6 py-3 text-xs uppercase tracking-wider font-medium text-[#232B32] border border-[#232B32]/20 hover:border-[#232B32] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-4 h-4 text-[#785D41]" />
              <span>Email: {BRAND.email}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
