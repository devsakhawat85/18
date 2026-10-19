import React, { useEffect } from 'react';
import { Modality, Page } from '../types';
import { X, CheckCircle2, Clock, Sparkles, Building2, ArrowRight } from 'lucide-react';

interface ModalityModalProps {
  modality: Modality | null;
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

export const ModalityModal: React.FC<ModalityModalProps> = ({ modality, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (modality) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modality, onClose]);

  if (!modality) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#F9F7F4] border border-[#232B32]/10 shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-[#232B32]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#232B32]/60 hover:text-[#232B32] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#785D41]"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Header */}
        <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#785D41] font-semibold mb-2">
          <span>{modality.categoryName}</span>
          <span aria-hidden="true">·</span>
          <span>Clinical Modality</span>
        </div>

        <h3 id="modal-title" className="font-display text-2xl sm:text-3xl text-[#232B32] mb-3">
          {modality.name}
        </h3>

        <p className="text-sm sm:text-base leading-relaxed text-[#232B32]/80 mb-6">
          {modality.shortDescription}
        </p>

        {/* Clinical Focus and Cadence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#F0EBE1]/70 border border-[#232B32]/5 mb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#785D41] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Clinical Focus</span>
            </div>
            <p className="text-xs text-[#232B32]/85 leading-relaxed">
              {modality.clinicalFocus}
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#785D41] font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Recommended Cadence</span>
            </div>
            <p className="text-xs text-[#232B32]/85 leading-relaxed">
              {modality.typicalCadence}
            </p>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs tracking-wider uppercase text-[#232B32] font-semibold">
            Key Patient Benefits
          </h4>
          <ul className="space-y-2">
            {modality.keyBenefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#232B32]/85">
                <CheckCircle2 className="w-4 h-4 text-[#785D41] shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Clinic Value */}
        <div className="p-4 bg-[#232B32] text-[#F0EBE1] mb-6 space-y-1.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#9E8062] font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>18 Wellness Clinic Integration</span>
          </div>
          <p className="text-xs text-[#F0EBE1]/85 leading-relaxed">
            {modality.clinicValue}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#232B32]/10">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-medium text-[#232B32]/70 hover:text-[#232B32] border border-[#232B32]/20 hover:border-[#232B32] transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-medium text-white bg-[#785D41] hover:bg-[#232B32] transition-colors flex items-center justify-center gap-2"
          >
            <span>Inquire for Your Clinic</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
