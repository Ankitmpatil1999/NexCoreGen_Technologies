import React, { useState } from 'react';
import { 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import type { PitchDeckSlide } from '../types';

interface InvestorSectionProps {
  onOpenPitchDeckModal: () => void;
  onOpenContact: () => void;
}

const slides: PitchDeckSlide[] = [
  {
    id: 1,
    slideNumber: '01 / 06',
    category: 'EXECUTIVE OVERVIEW',
    title: 'NexCoreGen Technologies',
    subtitle: 'Architecting Next-Generation Operating Systems for the Physical Economy',
    bullets: [
      'Founded by Ankit Patil to bridge high-concurrency cloud software with sub-200ms IoT hardware.',
      'Flagship Product: FitCore OS — the Pan-India Gym Management, Turnstile IoT & Commerce platform.',
      'R&D Pipeline: Expanding the core stack into autonomous retail (NexRetail), enterprise security (NexAccess), and predictive churn AI (NexPulse).',
      'Currently initiating conversations with angel syndicates and strategic seed-stage venture partners.'
    ],
    highlightMetric: {
      value: '₹28,000+ Cr',
      label: 'Target Addressable Market in India'
    },
    takeaway: 'A deep-tech infrastructure play combining recurring B2B software with hardware-locked enterprise stickiness.'
  },
  {
    id: 2,
    slideNumber: '02 / 06',
    category: 'THE MARKET PAIN POINT',
    title: 'The Fragmented Physical Club Dilemma',
    subtitle: '85% of Fitness Operators Suffer From Heavy Capital & Revenue Leakage',
    bullets: [
      'Hardware Disconnect: Turnstiles and biometric sensors operate offline without synchronization to member billing.',
      'Unauthorized Access: Buddy-punching and shared passes cause an estimated 18-24% uncollected revenue loss.',
      'Blind Multi-Branch Operations: Franchise leaders lack centralized real-time telemetry across multi-city clubs.',
      'Lost Secondary Commerce: Thousands of crores spent on sports nutrition are lost to cash grey markets instead of in-app monetization.'
    ],
    highlightMetric: {
      value: '22% Leakage',
      label: 'Average Annual Gym Revenue Lost to Disconnected Systems'
    },
    takeaway: 'Fitness operators are desperate for a single unified system that controls gates, tracks finances, and automates sales.'
  },
  {
    id: 3,
    slideNumber: '03 / 06',
    category: 'THE FLAGSHIP SOLUTION',
    title: 'FitCore OS: Unified Hardware-Cloud Platform',
    subtitle: 'End-to-End Multi-Tenant Operating System with Sub-200ms Turnstile IoT',
    bullets: [
      'Proprietary Turnstile Gateway: Dynamic rotating QR & NFC mobile passes grant gate access in under 200ms.',
      'Zero-Trust Anti-Passback: Eliminates badge sharing; gates immediately flag and lock out expired accounts.',
      'Franchise Command Center: Super Admin dashboard tracking live footfall, KYC compliance, and branch revenue nationwide.',
      'Integrated Nutrition Store: In-app supplement catalog providing frictionless ordering with automated 10% platform take-rate.'
    ],
    highlightMetric: {
      value: '<200ms',
      label: 'Hardware Turnstile Access Verification Latency'
    },
    takeaway: 'FitCore OS provides an immediate, tangible ROI to gym owners within the first 30 days of deployment.'
  },
  {
    id: 4,
    slideNumber: '04 / 06',
    category: 'MARKET OPPORTUNITY & TIMING',
    title: 'Explosive Indian Market Tailwinds',
    subtitle: 'Why The Right Time to Back NexCoreGen Is Right Now',
    bullets: [
      'Macro Growth: India’s fitness and physical wellness economy is growing at a 19.2% CAGR.',
      'Organized Franchises: Unbranded gyms are rapidly consolidating into multi-branch chains requiring enterprise SaaS.',
      'Hardware Retrofit Need: 65,000+ clubs are actively replacing manual receptionist desks with automated turnstiles.',
      'Pan-India Focus: Deep distribution focus on high-density metros (Mumbai, NCR, BLR, Pune, Hyderabad).'
    ],
    highlightMetric: {
      value: '19.2% CAGR',
      label: 'Annual Growth Rate of Indian Fitness & Health Sector'
    },
    takeaway: 'The transition from pen-and-paper to smart access is irreversible; NexCoreGen is positioned to become the market standard.'
  },
  {
    id: 5,
    slideNumber: '05 / 06',
    category: 'UNIT ECONOMICS & MONETIZATION',
    title: 'Dual-Engine High-Margin Revenue Model',
    subtitle: 'Recurring B2B Software Licenses + 10% Gross Commerce Take-Rate',
    bullets: [
      'Annual SaaS Tiers: Starter (₹14,999/yr), Pro Studio (₹34,999/yr), Enterprise Flagship (₹69,999/yr).',
      '10% Platform Rake: Automated deduction on every supplement, whey protein, and merchandise transaction.',
      'Hardware Gateway Margin: Upfront deployment fee (₹35k - ₹85k) covers IoT hardware setup with 35% gross margin.',
      'High Retention: Hardware installation makes customer switching friction exceptionally high (projected &gt;96% retention).'
    ],
    highlightMetric: {
      value: '4.5x LTV/CAC',
      label: 'Projected Enterprise Unit Economics Payback &lt; 4 Months'
    },
    takeaway: 'Every new gym onboarded compounds both high-margin recurring ARR and transactional GMV commission.'
  },
  {
    id: 6,
    slideNumber: '06 / 06',
    category: 'THE EXPANSION & THE ASK',
    title: 'Platform Vision & Investment Allocation',
    subtitle: 'Scaling FitCore OS & Accelerating The Next-Gen Product Pipeline',
    bullets: [
      'Phase 1 (Months 1-12): Onboard 500+ premium gyms across Top 5 Indian metros; scale FitCore ARR.',
      'Phase 2 (Months 12-24): Expand IoT hardware supply chain; launch NexRetail OS and NexAccess in private alpha.',
      'Capital Allocation: 45% Enterprise Sales & Distribution, 35% Engineering & Hardware R&D, 20% Working Capital.',
      'Founder-Led: Engineered with relentless execution discipline by Ankit Patil (Founder & Lead Architect).'
    ],
    highlightMetric: {
      value: 'Seed Round',
      label: 'Currently Welcoming Strategic Investor Discussions'
    },
    takeaway: 'NexCoreGen is building the foundational operating infrastructure for the physical economy.'
  }
];

export const InvestorSection: React.FC<InvestorSectionProps> = ({ onOpenPitchDeckModal, onOpenContact }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const slide = slides[currentSlideIndex];

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  return (
    <section id="pitch-deck" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3.5rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} color="#00f2fe" />
            <span>INVESTOR RELATIONS & CONFIDENTIAL DECK</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Executive Pitch Deck & <span className="gradient-text-cyan">Investor Briefing.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Explore our confidential investor presentation directly through our interactive slide deck viewer, 
            or request the comprehensive PDF one-pager and founder briefing.
          </p>
        </div>

        {/* Interactive Pitch Deck Slide Viewer */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 3.5rem auto',
            border: '1px solid rgba(0, 242, 254, 0.35)',
            boxShadow: '0 25px 65px -15px rgba(0, 0, 0, 0.9), 0 0 50px rgba(0, 242, 254, 0.15)',
            overflow: 'hidden'
          }}
        >
          {/* Deck Top Control Bar */}
          <div 
            style={{
              padding: '1rem 1.75rem',
              background: 'rgba(11, 17, 30, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="pill-badge pill-cyan" style={{ fontSize: '0.75rem', padding: '0.25rem 0.75rem' }}>
                {slide.category}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                SLIDE {slide.slideNumber}
              </span>
            </div>

            {/* Slide Navigation Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button
                onClick={handlePrev}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '6px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={18} />
              </button>

              <div style={{ display: 'flex', gap: '0.35rem', padding: '0 0.5rem' }}>
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlideIndex(idx)}
                    style={{
                      width: idx === currentSlideIndex ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      background: idx === currentSlideIndex ? '#00f2fe' : 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    aria-label={`Jump to Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
                  borderRadius: '6px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                aria-label="Next Slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Slide Body */}
          <div style={{ padding: '2.5rem', background: 'rgba(8, 12, 22, 0.98)', minHeight: '380px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              {/* Left Content */}
              <div>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>
                  {slide.title}
                </h3>
                <div style={{ color: '#00f2fe', fontSize: '1.05rem', fontWeight: 600, marginBottom: '1.75rem' }}>
                  {slide.subtitle}
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem', marginBottom: '2rem' }}>
                  {slide.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <span style={{ color: '#00f2fe', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1 }}>›</span>
                      <span style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6 }}>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Callout Box */}
              <div>
                <div 
                  className="telemetry-box"
                  style={{
                    padding: '2rem',
                    background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(5, 9, 18, 0.9) 100%)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    textAlign: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                    {slide.highlightMetric.label}
                  </div>
                  <div style={{ fontSize: '2.6rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
                    {slide.highlightMetric.value}
                  </div>
                  <div className="pill-badge pill-emerald" style={{ fontSize: '0.75rem' }}>
                    VERIFIED TRACTION METRIC
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem' }}>
                  <strong style={{ color: '#fff' }}>Key Takeaway:</strong>{' '}
                  <span style={{ color: '#94a3b8' }}>{slide.takeaway}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Banner for Investors */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(99, 102, 241, 0.08) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem'
          }}
        >
          <div>
            <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
              Interested in joining our journey as an investor or advisor?
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
              We are currently allocating our pre-seed angel tranche for high-conviction partners.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenPitchDeckModal}
              className="btn btn-secondary"
              style={{ padding: '0.85rem 1.4rem' }}
            >
              <Download size={16} />
              Download Deck Summary
            </button>
            <button
              onClick={onOpenContact}
              className="btn btn-primary"
              style={{ padding: '0.85rem 1.5rem' }}
            >
              <Calendar size={16} />
              Schedule Founder Call
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
