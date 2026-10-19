import React, { useState, useEffect } from 'react';
import { Page, Modality, PillarCategory } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ModalityModal } from './components/ModalityModal';
import { HomePage } from './pages/HomePage';
import { OfferingsPage } from './pages/OfferingsPage';
import { AboutPage } from './pages/AboutPage';
import { ClinicOwnersPage } from './pages/ClinicOwnersPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedModality, setSelectedModality] = useState<Modality | null>(null);
  const [initialCategory, setInitialCategory] = useState<PillarCategory | null>(null);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      const validPages: Page[] = ['home', 'offerings', 'about', 'clinic-owners', 'faq', 'contact', 'privacy', 'terms'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPillar = (pillar: PillarCategory) => {
    setInitialCategory(pillar);
    handleNavigate('offerings');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F7F4] text-[#232B32] selection:bg-[#785D41] selection:text-white">
      {/* Top Bar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Body */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onSelectModality={(mod) => setSelectedModality(mod)}
          />
        )}
        {currentPage === 'offerings' && (
          <OfferingsPage
            onNavigate={handleNavigate}
            onSelectModality={(mod) => setSelectedModality(mod)}
            initialCategory={initialCategory}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'clinic-owners' && (
          <ClinicOwnersPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'faq' && (
          <FAQPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'privacy' && (
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        )}
        {currentPage === 'terms' && (
          <LegalPage type="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} onSelectPillar={handleSelectPillar} />

      {/* Treatment Modality Detail Modal */}
      <ModalityModal
        modality={selectedModality}
        onClose={() => setSelectedModality(null)}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
