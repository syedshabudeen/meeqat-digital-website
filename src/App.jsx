import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import Services from './components/Services';
import Industries from './components/Industries';
import CaseStudies from './components/CaseStudies';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');

  const openConsultation = (service = '', industry = '') => {
    setSelectedService(service);
    setSelectedIndustry(industry);
    setModalOpen(true);
  };

  const closeConsultation = () => {
    setModalOpen(false);
    setSelectedService('');
    setSelectedIndustry('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenConsultation={() => openConsultation()} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        {/* Hero with Trust Badges and Live Infrastructure Telemetry */}
        <Hero onOpenConsultation={() => openConsultation()} />

        {/* Quantifiable Enterprise Metrics Bar */}
        <MetricsBar />

        {/* 8 Core Services Showcase */}
        <Services onSelectService={(serviceName) => openConsultation(serviceName)} />

        {/* 7 Key Industries Served */}
        <Industries onSelectIndustry={(indName) => openConsultation('', indName)} />

        {/* Client Case Studies with Quantifiable Results */}
        <CaseStudies onOpenConsultation={(caseContext) => openConsultation(caseContext)} />

        {/* Why Meeqat Technologies / Enterprise Advantage */}
        <WhyUs onOpenConsultation={() => openConsultation()} />

        {/* Frequently Asked Questions (FAQ) for AI Search, SEO & Due Diligence */}
        <FAQ onOpenConsultation={() => openConsultation()} />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenConsultation={() => openConsultation()} />

      {/* Interactive Consultation / Contact Form Modal */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={closeConsultation}
        initialService={selectedService}
        initialIndustry={selectedIndustry}
      />
    </div>
  );
}
