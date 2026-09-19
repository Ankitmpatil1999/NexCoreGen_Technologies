import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { BentoFeatures } from './components/BentoFeatures';
import { FitCoreSpotlight } from './components/FitCoreSpotlight';
import { ProductPipeline } from './components/ProductPipeline';
import { MarketOpportunity } from './components/MarketOpportunity';
import { TechArchitecture } from './components/TechArchitecture';
import { InvestorSection } from './components/InvestorSection';
import { Leadership } from './components/Leadership';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PitchDeckModal } from './components/PitchDeckModal';

export function App() {
  const [pitchDeckModalOpen, setPitchDeckModalOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-grid-pattern" style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Top Fixed Navigation */}
      <Navbar 
        onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 2. Problem & Solution Comparison */}
        <ProblemSolution />

        {/* 3. Bento Grid Visual Feature Architecture */}
        <BentoFeatures />

        {/* 4. Flagship Product Spotlight: FitCore OS & Pricing */}
        <FitCoreSpotlight 
          onOpenContact={scrollToContact}
        />

        {/* 5. Innovation Pipeline: "Many More Products to Come" */}
        <ProductPipeline 
          onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 6. Market Opportunity (TAM/SAM/SOM) & Economics */}
        <MarketOpportunity />

        {/* 7. Deep-Tech Architecture & Hardware Moat */}
        <TechArchitecture />

        {/* 8. Interactive Pitch Deck Slider */}
        <InvestorSection 
          onOpenPitchDeckModal={() => setPitchDeckModalOpen(true)}
          onOpenContact={scrollToContact}
        />

        {/* 9. Leadership & Founder Philosophy */}
        <Leadership />

        {/* 10. Direct Contact & Founder Briefings */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer 
        onOpenPitchDeck={() => setPitchDeckModalOpen(true)}
        onOpenContact={scrollToContact}
      />

      {/* Confidential Pitch Deck Request Modal */}
      <PitchDeckModal 
        isOpen={pitchDeckModalOpen}
        onClose={() => setPitchDeckModalOpen(false)}
      />
    </div>
  );
}

export default App;
