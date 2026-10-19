import React, { useState } from 'react';
import { Page } from '../types';
import { BRAND } from '../data/wellnessData';
import { Mail, ShieldCheck, CheckCircle2, ArrowRight, Lock, Building, Phone, User, MapPin } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    clinicName: '',
    email: '',
    phone: '',
    location: '',
    inquiryType: 'scaling',
    revenueBand: '1m-2.5m',
    timeline: '30-60days',
    message: '',
    ndaAccepted: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    if (!formData.clinicName.trim()) {
      setErrorMsg('Please provide your clinic or practice name.');
      return;
    }

    setIsSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const mailtoUrl = `mailto:${BRAND.email}?subject=${encodeURIComponent(
    `Confidential Clinic Inquiry - ${formData.clinicName || 'Practice'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nPractice: ${formData.clinicName}\nPhone: ${formData.phone}\nLocation: ${formData.location}\nInquiry Type: ${formData.inquiryType}\nRevenue Band: ${formData.revenueBand}\nTimeline: ${formData.timeline}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <div className="py-12 sm:py-16 space-y-16">
      
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#785D41] font-semibold">
            <Lock className="w-3.5 h-3.5" />
            <span>Confidential Communication</span>
            <span aria-hidden="true">·</span>
            <span>18 Wellness Group</span>
          </div>
          
          {/* Exact Original Canva Headline: "Get in Touch" */}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#232B32] font-normal leading-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-[#232B32]/80 font-light">
            Whether you are considering strategic expansion capital, seeking an orderly retirement exit, or exploring modality integration, our principals are ready to connect.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-[#F9F7F4] border border-[#232B32]/10 p-6 sm:p-10 shadow-xs">
            
            {submitted ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#785D41]/10 flex items-center justify-center text-[#785D41]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest text-[#785D41] font-semibold">
                    Inquiry Transmitted
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-[#232B32]">
                    Thank you, {formData.name}
                  </h3>
                  <p className="text-sm text-[#232B32]/80 max-w-md mx-auto leading-relaxed">
                    Your confidential practice evaluation inquiry for <strong>{formData.clinicName}</strong> has been logged. Our partnership principals will review your details and respond within 24 business hours.
                  </p>
                </div>

                <div className="p-4 bg-[#F0EBE1] border border-[#232B32]/10 text-xs text-[#232B32]/80 max-w-md mx-auto space-y-2 text-left">
                  <div className="flex items-center gap-2 text-[#785D41] font-semibold uppercase tracking-wider text-[10px]">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Non-Disclosure Protocol In Effect</span>
                  </div>
                  <p>All shared metrics remain strictly confidential and will never be disclosed to third parties or brokers.</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors"
                  >
                    Open Direct Email Backup
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        clinicName: '',
                        email: '',
                        phone: '',
                        location: '',
                        inquiryType: 'scaling',
                        revenueBand: '1m-2.5m',
                        timeline: '30-60days',
                        message: '',
                        ndaAccepted: true,
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-medium text-[#232B32] border border-[#232B32]/20 hover:border-[#232B32]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="border-b border-[#232B32]/10 pb-4">
                  <h3 className="font-display text-xl text-[#232B32]">
                    Confidential Clinic Intake
                  </h3>
                  <p className="text-xs text-[#232B32]/65 mt-1">
                    Please provide basic details about yourself and your practice.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Your Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#232B32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Dr. Jane Smith / John Doe"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Clinic or Practice Name *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-[#232B32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="clinicName"
                        required
                        value={formData.clinicName}
                        onChange={handleChange}
                        placeholder="e.g. Elite Aesthetics & Longevity"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Direct Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#232B32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="owner@clinic.com"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#232B32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Location / Market
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#232B32]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="City, State"
                        className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Primary Objective
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                    >
                      <option value="scaling">Scaling Capital (Grow)</option>
                      <option value="exit">Exit / Retirement (Sell)</option>
                      <option value="equipment">Equipment Financing</option>
                      <option value="general">General Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                      Annual Revenue
                    </label>
                    <select
                      name="revenueBand"
                      value={formData.revenueBand}
                      onChange={handleChange}
                      className="w-full p-2.5 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                    >
                      <option value="sub-500k">&lt; $500k</option>
                      <option value="500k-1m">$500k – $1M</option>
                      <option value="1m-2.5m">$1M – $2.5M</option>
                      <option value="2.5m-5m">$2.5M – $5M</option>
                      <option value="5m-plus">$5M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#232B32] mb-1.5">
                    Confidential Notes / Context (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share brief context on your current modalities, team size, expansion goals, or retirement timeline..."
                    className="w-full p-3 bg-white border border-[#232B32]/15 text-xs text-[#232B32] focus:outline-none focus:border-[#785D41]"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="ndaAccepted"
                    name="ndaAccepted"
                    checked={formData.ndaAccepted}
                    onChange={handleChange}
                    className="mt-0.5 accent-[#785D41]"
                  />
                  <label htmlFor="ndaAccepted" className="text-xs text-[#232B32]/80 leading-normal">
                    I agree to initiate discussions under mutual non-disclosure. All information is confidential.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs uppercase tracking-wider font-medium text-white bg-[#232B32] hover:bg-[#785D41] transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Transmitting...' : 'Submit Confidential Evaluation'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Original Branding & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Email Card */}
            <div className="bg-[#F0EBE1] border border-[#232B32]/10 p-6 sm:p-8 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#785D41] font-semibold">
                Direct Communications
              </span>
              <h3 className="font-display text-2xl text-[#232B32]">
                Prefer Direct Email?
              </h3>
              <p className="text-xs sm:text-sm text-[#232B32]/80 leading-relaxed font-light">
                You can write directly to our platform investment directors. We review every business submission personally.
              </p>

              <div className="pt-2">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#785D41] hover:text-[#232B32] transition-colors underline underline-offset-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>{BRAND.email}</span>
                </a>
              </div>
            </div>

            {/* Arch Artwork Card */}
            <div className="border border-[#232B32]/10 p-2 bg-[#F0EBE1] arch-mask-top overflow-hidden">
              <img
                src={BRAND.images.contactInterior}
                alt="Eighteen Wellness Clinic Entry"
                className="w-full h-auto object-cover arch-mask-top"
              />
              <div className="p-4 bg-[#F9F7F4] text-xs text-[#232B32]/75 flex items-center justify-between">
                <span>Eighteen Wellness Headquarters</span>
                <span>Regenerative Medicine Platform</span>
              </div>
            </div>

            {/* Trust Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-[#232B32]/80">
                <ShieldCheck className="w-4 h-4 text-[#785D41] shrink-0 mt-0.5" />
                <span>Strict non-disclosure agreements prior to reviewing financial records</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#232B32]/80">
                <CheckCircle2 className="w-4 h-4 text-[#785D41] shrink-0 mt-0.5" />
                <span>Transparent valuation models based on verified practice earnings</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#232B32]/80">
                <CheckCircle2 className="w-4 h-4 text-[#785D41] shrink-0 mt-0.5" />
                <span>Seamless transition options: stay on as Medical Director or full retirement</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
