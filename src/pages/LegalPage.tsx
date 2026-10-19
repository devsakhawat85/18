import React from 'react';
import { Page } from '../types';
import { BRAND } from '../data/wellnessData';
import { ShieldCheck, Lock, Mail, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms';
  onNavigate: (page: Page) => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#785D41] hover:text-[#232B32] mb-6 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold mb-2">
          <Lock className="w-3.5 h-3.5" />
          <span>Governance & Compliance</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl text-[#232B32]">
          {type === 'privacy' ? 'Privacy Policy & Confidentiality Protocol' : 'Terms of Service & Platform Governance'}
        </h1>
        <p className="text-xs text-[#232B32]/60 mt-2">
          Effective Date: {new Date().getFullYear()} · Eighteen Wellness Group
        </p>
      </div>

      <div className="bg-[#F9F7F4] border border-[#232B32]/10 p-6 sm:p-10 space-y-8 text-sm text-[#232B32]/80 leading-relaxed font-light">
        
        {type === 'privacy' ? (
          <>
            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                1. Strict Clinic Partner Non-Disclosure Commitment
              </h2>
              <p>
                Eighteen Wellness ("18 Wellness", "we", "our") holds all clinic evaluation inquiries, financial disclosures, patient volume statistics, and ownership identities under strict commercial confidentiality. We will never sell, lease, publicize, or distribute proprietary clinic information to third-party brokers, lenders, or competitors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                2. Information We Collect
              </h2>
              <p>
                When you initiate an evaluation for your practice or register interest as a healthcare provider, we collect:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Professional contact details: Full name, clinic email address, telephone number.</li>
                <li>Practice operational parameters: Geographic location, operational treatment mix, estimated annual revenue bands, and strategic timeline.</li>
                <li>Digital usage data: Standard analytics strictly necessary to maintain portal security and platform performance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                3. Purpose of Processing
              </h2>
              <p>
                All submitted information is reviewed exclusively by 18 Wellness investment principals to assess partnership compatibility, calculate non-binding valuation estimates, and draft tailored letters of intent (LOIs).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                4. Data Security & Storage
              </h2>
              <p>
                We enforce industry-standard encryption protocols and administrative safeguards to protect your records against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                5. Contacting the Compliance Officer
              </h2>
              <p>
                If you have inquiries regarding our data confidentiality practices, or wish to request data purging following a discussion, please email <a href={`mailto:${BRAND.email}`} className="text-[#785D41] underline">{BRAND.email}</a>.
              </p>
            </section>
          </>
        ) : (
          <>
            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and utilizing the Eighteen Wellness web portal, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services or submit clinic information.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                2. Nature of Platform & Valuation Estimates
              </h2>
              <p>
                All calculators, financial ranges, and modeling tools provided on eighteenwellness.com are for illustrative and strategic discussion purposes only. They do not constitute a formal binding purchase offer, legal commitment, or certified appraisal until an executed Letter of Intent and Definitive Purchase Agreement are signed by authorized officers of 18 Wellness.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                3. Medical Practice Compliance
              </h2>
              <p>
                All clinical modalities described on our platform are subject to federal, state, and local healthcare regulations, including corporate practice of medicine (CPOM) statutes and professional licensing standards. Partner clinics operate with dedicated licensed medical directors and board-certified supervisors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                4. Intellectual Property
              </h2>
              <p>
                All brand identity assets, logos, visual compositions, architectural representations, and proprietary operational playbooks displayed on this website are the intellectual property of Eighteen Wellness Group and may not be reproduced without prior written authorization.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-display text-xl text-[#232B32] font-normal">
                5. Inquiries & Legal Notice
              </h2>
              <p>
                For legal inquiries, formal notices, or partnership correspondence, contact us directly at <a href={`mailto:${BRAND.email}`} className="text-[#785D41] underline">{BRAND.email}</a>.
              </p>
            </section>
          </>
        )}

      </div>

    </div>
  );
};
