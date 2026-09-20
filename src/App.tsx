import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Play,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  Code,
  Smartphone,
  Cloud,
  Palette,
  Server,
  Headphones,
  Check,
  ExternalLink,
  MessageCircle,
  Copy,
  Menu,
  Sparkles
} from 'lucide-react';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { FitCorePage } from './components/FitCorePage';
import { Logo } from './components/Logo';

interface CaseStudy {
  id: string;
  name: string;
  category: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  techStack: string[];
}

const portfolioData: CaseStudy[] = [
  {
    id: 'fitcore',
    name: 'FitCore',
    category: 'Gym Management SaaS & Smart IoT',
    tagline: 'Complete Operating System for Pan-India Gyms & Clubs',
    problem: 'Fitness clubs were struggling with manual registers, unauthorized entries, lost fee payments, and disconnected turnstile hardware.',
    solution: 'Built an end-to-end multi-tenant platform with member mobile app, QR/NFC gate access under 200ms, and automated fee collections.',
    features: ['Sub-200ms Turnstile IoT Gateway', 'Member Mobile Pass & Attendance', 'Automated Fees & WhatsApp Reminders', 'Multi-Branch Franchise Telemetry', 'POS Supplement Store'],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'ESP32 MQTT', 'Tailored REST API']
  },
  {
    id: 'bhishipe',
    name: 'BhishiPe',
    category: 'Digital Chit Fund & Savings Platform',
    tagline: 'Modernizing Traditional Community Savings with Trust & Transparency',
    problem: 'Traditional Bhishi (Chit Fund) groups in India rely on paper ledgers, causing disputes, trust deficits, and payment delays.',
    solution: 'Engineered a transparent digital ledger with real-time bidding, automated installment tracking, and secure UPI payment settlements.',
    features: ['Transparent Digital Auction Bidding', 'Automated Installment Ledger', 'Instant UPI Payouts & Escrow', 'SMS & WhatsApp Due Alerts', 'KYC & Member Verification'],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Razorpay UPI API']
  }
];

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'fitcore'>('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('nexcoregen@ankitpatil1999.online');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Web Development',
    budget: '₹50,000 - ₹1,50,000',
    details: ''
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacypolicy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms' || hash === '#termsconditions') {
        setCurrentPage('terms');
      } else if (hash === '#fitcore' || hash === '#fitcore-product' || hash === '#product') {
        setCurrentPage('fitcore');
      } else if (hash === '' || hash === '#home' || hash === '#') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'privacy' | 'terms' | 'fitcore') => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.location.hash = '#privacy';
    } else if (page === 'terms') {
      window.location.hash = '#terms';
    } else if (page === 'fitcore') {
      window.location.hash = '#fitcore';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (currentPage === 'privacy') {
    return (
      <PrivacyPolicy
        onBackToHome={() => navigateTo('home')}
        onNavigateToTerms={() => navigateTo('terms')}
      />
    );
  }

  if (currentPage === 'terms') {
    return (
      <TermsConditions
        onBackToHome={() => navigateTo('home')}
        onNavigateToPrivacy={() => navigateTo('privacy')}
      />
    );
  }

  if (currentPage === 'fitcore') {
    return (
      <FitCorePage
        onBackToHome={() => navigateTo('home')}
        onNavigateToContact={() => {
          navigateTo('home');
          setTimeout(() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 150);
        }}
      />
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      {/* 1. NAVBAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-color)',
          padding: '0.85rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
          {/* Brand Logo & Sabado-Inspired Live Availability Dot */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                background: '#071A3A',
                padding: '0.4rem 0.95rem',
                borderRadius: '12px',
                boxShadow: '0 4px 14px rgba(7, 26, 58, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                flexShrink: 0
              }}
            >
              <Logo variant="dark" size="sm" />
            </a>

            {/* Sabado-Inspired Status Badge (Desktop) */}
            <div className="desktop-nav-links" style={{ display: 'none', alignItems: 'center', gap: '0.45rem', background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#15803D', fontWeight: 600 }}>
              <span className="status-dot"></span>
              <span>Available for Projects</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav-links" style={{ display: 'none', alignItems: 'center', gap: '1.65rem' }}>
            <a href="#home" style={navLinkStyle}>Home</a>
            <a href="#about" style={navLinkStyle}>About</a>
            <a href="#services" style={navLinkStyle}>Services</a>
            <a href="#fitcore" onClick={(e) => { e.preventDefault(); navigateTo('fitcore'); }} style={navLinkStyle}>Our Product</a>
            <a href="#portfolio" style={navLinkStyle}>Portfolio</a>
            <a href="#why-us" style={navLinkStyle}>Why Us</a>
            <a href="#contact" style={navLinkStyle}>Contact</a>
          </nav>

          {/* Right Action: CTA & Mobile Hamburger Trigger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#contact" className="btn btn-primary desktop-nav-links" style={{ display: 'none', padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
              Let's Talk <ArrowRight size={14} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: mobileMenuOpen ? '#EFF6FF' : '#F8FAFC',
                border: '1px solid var(--border-color)',
                color: 'var(--color-navy)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            {/* Drawer Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid #E2E8F0', marginBottom: '1.25rem' }}>
              <div style={{ background: '#071A3A', padding: '0.35rem 0.8rem', borderRadius: '10px' }}>
                <Logo variant="dark" size="sm" />
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#F1F5F9',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-navy)'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#F0FDF4', border: '1px solid #BBF7D0', padding: '0.4rem 0.85rem', borderRadius: '9999px', fontSize: '0.78rem', color: '#15803D', fontWeight: 600, marginBottom: '1.5rem', alignSelf: 'flex-start' }}>
              <span className="status-dot"></span>
              <span>Available for New Projects</span>
            </div>

            {/* Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
              {[
                { label: 'Home', action: () => { navigateTo('home'); setMobileMenuOpen(false); } },
                { label: 'About Us', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Services', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Our Product (FitCore OS)', action: () => { navigateTo('fitcore'); setMobileMenuOpen(false); } },
                { label: 'Portfolio & Case Studies', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Why Nexcoregen', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('why-us')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                { label: 'Contact', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={link.action}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1rem',
                    borderRadius: '12px',
                    color: 'var(--color-navy)',
                    background: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    width: '100%'
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={16} color="var(--color-primary)" />
                </button>
              ))}
            </div>

            {/* Quick Contact & Action CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                Instant Connect
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                <a
                  href="https://wa.me/919209282289"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.7rem 0.9rem',
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    borderRadius: '10px',
                    color: '#15803D',
                    textDecoration: 'none',
                    fontSize: '0.88rem',
                    fontWeight: 600
                  }}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setEmailModalOpen(true);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    padding: '0.7rem 0.9rem',
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    borderRadius: '10px',
                    color: 'var(--color-primary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left'
                  }}
                >
                  <Mail size={18} /> Send an Email
                </button>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                }}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem', borderRadius: '12px' }}
              >
                Let's Talk <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section id="home" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: 'clamp(2rem, 4vw, 3rem)', alignItems: 'center' }}>
            {/* Left Column: Headline & Action CTAs */}
            <div>
              {/* Pill Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.95rem',
                  borderRadius: '9999px',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  marginBottom: '1.25rem',
                  letterSpacing: '0.04em'
                }}
              >
                • IDEAS › PRODUCTS › IMPACT
              </div>

              {/* Main Headline */}
              <h1 style={{ fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                We Build Digital{' '}
                <span className="gradient-title-purple">
                  Solutions That Matter.
                </span>
              </h1>

              {/* Subheading */}
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '2rem' }}>
                <strong>Nexcoregen Technologies</strong> is a technology company focused on building modern, scalable and user-friendly digital products for businesses and a better tomorrow.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a href="#contact" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem' }}>
                  Get in Touch <ArrowRight size={16} />
                </a>
                <button onClick={() => setVideoModalOpen(true)} className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem' }}>
                  <Play size={15} color="var(--color-primary)" fill="var(--color-primary)" /> Watch Our Story
                </button>
              </div>

              {/* 3 Micro-Trust Badges */}
              <div style={{ display: 'flex', gap: 'clamp(1rem, 2.5vw, 1.5rem)', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.86rem', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  ⚡ Modern Technology
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  👥 Client Focused
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  💙 Long-Term Partnership
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual with Overlays matching Mockup */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 25px 50px -12px rgba(7, 26, 58, 0.25)',
                  border: '1px solid rgba(0,0,0,0.08)',
                  position: 'relative'
                }}
              >
                <img
                  src="/assets/hero-workspace.jpg"
                  alt="Nexcoregen Tech Workspace"
                  style={{ width: '100%', height: '100%', maxHeight: '490px', objectFit: 'cover', display: 'block' }}
                />

                {/* Top Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(7, 26, 58, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    padding: '0.45rem 0.95rem',
                    borderRadius: '12px',
                    fontSize: 'clamp(0.72rem, 1.8vw, 0.82rem)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                  }}
                >
                  Turning Ideas Into Real Products
                </div>

                {/* Bottom Overlay Badge */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-navy)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '12px',
                    fontSize: 'clamp(0.72rem, 1.8vw, 0.8rem)',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    border: '1px solid rgba(0,0,0,0.06)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16A34A' }}></span>
                  Build • Innovate • Grow
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Column: Story */}
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                • ABOUT US
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                Who We Are
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                <strong>Nexcoregen Technologies</strong> is a software development company founded by <strong>Ankit Patil</strong>. We architect scalable web platforms, high-concurrency mobile applications, and connected IoT hardware systems built on solid engineering foundations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    ⚡ Robust Architecture
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Clean, modular code built for high throughput, security, and long-term reliability.
                  </div>
                </div>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    🤝 Founder-Led Delivery
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Direct technical leadership and personal attention across every stage of your build.
                  </div>
                </div>
              </div>

              <a href="#services" className="btn btn-primary">
                Explore Our Services <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Column: Authentic Team Image & Clean Dedicated Philosophy Card */}
            <div>
              <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-card)', border: '1px solid var(--border-color)' }}>
                <img
                  src="/assets/team-collab.jpg"
                  alt="Nexcoregen Team Collaboration"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
                
                {/* Developer Culture Tag on Image (Clean, sleek, unobtrusive top-left) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    background: 'rgba(7, 26, 58, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#FFFFFF',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  <Sparkles size={14} color="#38BDF8" /> Engineering Culture
                </div>
              </div>

              {/* Dedicated Philosophy & Quote Card Placed Cleanly BELOW Image (NO OVERLAP) */}
              <div className="quote-box-modern">
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'var(--color-primary-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    fontSize: '1.4rem',
                    fontWeight: 800,
                    flexShrink: 0
                  }}
                >
                  “
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.35, marginBottom: '0.25rem' }}>
                    Great products are built by great people.
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '0.35rem' }}>
                    Ideas Today. A Better Tomorrow.
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Our team architects software with relentless dedication to craft, performance, and long-term business impact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section id="services" style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3.5rem' }}>
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                • OUR SERVICES
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)' }}>
                End-to-End Technology Services
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem', maxWidth: '600px' }}>
                We provide complete technology solutions to help your business grow in the digital world.
              </p>
            </div>

            <div>
              <a href="#contact" className="btn btn-secondary">
                View All Services <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* 6 Services Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
            {/* Service 1 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code size={22} color="#9333EA" />
                </div>
                <span className="badge-tech badge-tech-blue">Full-Stack Web</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Web Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                Modern, responsive and high-converting business websites, custom web applications, and customer portals.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 2 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={22} color="#0284C7" />
                </div>
                <span className="badge-tech badge-tech-blue">iOS & Android</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Mobile App Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                High-performance Android and iOS native & cross-platform applications with intuitive user experience.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 3 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cloud size={22} color="#16A34A" />
                </div>
                <span className="badge-tech badge-tech-green">Multi-Tenant</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>SaaS Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                Scalable cloud-based SaaS software with multi-tenant architecture, automated subscription billing, and dashboards.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 4 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Palette size={22} color="#D97706" />
                </div>
                <span className="badge-tech badge-tech-amber">Design System</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>UI/UX Product Design</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                Clean, world-class user interfaces and wireframes that delight users and maximize conversion rates.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 5 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={22} color="#DB2777" />
                </div>
                <span className="badge-tech badge-tech-blue">High Concurrency</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>API & Backend Solutions</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                Secure, high-concurrency microservices, REST APIs, and database architectures using Node.js & Python.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>

            {/* Service 6 */}
            <div className="tech-card-sabado">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Headphones size={22} color="#7C3AED" />
                </div>
                <span className="badge-tech badge-tech-green">24/7 SLA</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Maintenance & Support</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                24/7 server monitoring, performance tuning, security patches, and ongoing continuous feature updates.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FITCORE OS FLAGSHIP SPOTLIGHT (MATCHING IMAGE 4 & 5) */}
      <section id="fitcore" style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'var(--color-green-light)',
                color: 'var(--color-green)',
                fontSize: '0.82rem',
                fontWeight: 700,
                marginBottom: '1rem',
                letterSpacing: '0.04em'
              }}
            >
              • OUR PRODUCT
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              FitCore <span style={{ color: 'var(--color-green)' }}>— Gym Management Made Simple</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              A complete gym management SaaS platform that helps gym owners manage members, subscriptions, trainer bookings, payments, attendance and more — all in one place.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigateTo('fitcore')} className="btn btn-green">
                Explore FitCore Page →
              </button>
              <button onClick={() => navigateTo('fitcore')} className="btn btn-secondary">
                <Play size={14} color="var(--color-navy)" /> View Full Demo & Videos
              </button>
            </div>
          </div>

          {/* Central Visual: Laptop Dashboard Mockup + Mobile Phone Mockup */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(1.2rem, 3.5vw, 2.5rem)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '3.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2.5rem', alignItems: 'center' }}>
              {/* Realistic Laptop Device Mockup */}
              <div style={{ position: 'relative', width: '100%', maxWidth: '580px', margin: '0 auto' }}>
                {/* Screen frame */}
                <div
                  style={{
                    background: '#0B132B',
                    borderRadius: '16px 16px 4px 4px',
                    padding: '0.75rem 0.75rem 1rem 0.75rem',
                    border: '4px solid #1E293B',
                    borderBottom: 'none',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Laptop camera dot */}
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#334155', margin: '0 auto 0.6rem auto' }} />

                  {/* Dashboard Interior Screen */}
                  <div style={{ background: '#0F172A', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                    {/* Top Bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 1rem', background: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 800, color: '#22C55E', fontSize: '0.95rem' }}>FitCore</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}>Admin Pro</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.72rem', color: '#94A3B8' }}>
                        <span>Total: <strong style={{ color: '#fff' }}>248</strong></span>
                        <span>Active: <strong style={{ color: '#22C55E' }}>186</strong></span>
                        <span>Rev: <strong style={{ color: '#FBBF24' }}>₹48k</strong></span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(80px, 120px) 1fr', minHeight: '190px' }}>
                      {/* Sidebar */}
                      <div style={{ background: '#090E1A', padding: '0.75rem 0.5rem', borderRight: '1px solid rgba(255,255,255,0.05)', fontSize: '0.68rem', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ color: '#22C55E', fontWeight: 700, padding: '0.25rem 0.4rem', borderRadius: '4px', background: 'rgba(34,197,94,0.1)' }}>📊 Dashboard</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>👥 Members</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>📱 Check-in</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>💳 Plans</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>🏋️ Trainers</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>⚙️ Settings</div>
                      </div>

                      {/* Main screen area */}
                      <div style={{ padding: '0.85rem' }}>
                        {/* 7 Days Bar Chart */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '0.65rem', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                            <span>Member Activity (7 Days)</span>
                            <span style={{ color: '#22C55E', fontWeight: 700 }}>+28%</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-end', height: '55px', gap: '6px', justifyContent: 'space-between' }}>
                            {[40, 65, 52, 85, 70, 96, 88].map((h, i) => (
                              <div key={i} style={{ width: '100%', height: `${h}%`, background: '#22C55E', borderRadius: '3px', opacity: 0.9 }} />
                            ))}
                          </div>
                        </div>

                        {/* Recent members */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', background: 'rgba(255,255,255,0.04)', padding: '0.35rem 0.5rem', borderRadius: '5px', color: '#fff' }}>
                            <span>Rahul Sharma (VIP Gold)</span>
                            <span style={{ color: '#22C55E' }}>07:15 AM</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', background: 'rgba(255,255,255,0.04)', padding: '0.35rem 0.5rem', borderRadius: '5px', color: '#fff' }}>
                            <span>Priya Verma (Pro)</span>
                            <span style={{ color: '#22C55E' }}>07:42 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metallic Laptop Base Chassis */}
                <div
                  style={{
                    width: '100%',
                    height: '14px',
                    background: 'linear-gradient(180deg, #94A3B8 0%, #475569 100%)',
                    borderRadius: '0 0 14px 14px',
                    position: 'relative',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }}
                >
                  {/* Laptop opening notch */}
                  <div
                    style={{
                      width: '60px',
                      height: '4px',
                      background: '#1E293B',
                      borderRadius: '0 0 4px 4px',
                      margin: '0 auto'
                    }}
                  />
                </div>
              </div>

              {/* Mobile Phone Mockup with Device Bezel */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div
                  style={{
                    width: '260px',
                    background: '#0B132B',
                    borderRadius: '34px',
                    border: '7px solid #1E293B',
                    padding: '1.1rem 1rem',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                    color: '#fff',
                    position: 'relative'
                  }}
                >
                  {/* Camera / Dynamic Island pill */}
                  <div style={{ width: '60px', height: '14px', background: '#000', borderRadius: '10px', margin: '0 auto 0.85rem auto' }} />

                  <div style={{ textAlign: 'center', marginBottom: '0.85rem' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', letterSpacing: '0.04em' }}>MEMBER MOBILE PASS</div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800 }}>FitCore App</div>
                  </div>

                  <div style={{ background: '#16A34A', borderRadius: '12px', padding: '0.85rem', textAlign: 'center', marginBottom: '0.85rem', boxShadow: '0 6px 16px rgba(22, 163, 74, 0.4)' }}>
                    <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.9 }}>Tap Gate to Enter</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0.15rem 0' }}>QR CHECK-IN</div>
                    <div style={{ fontSize: '0.68rem', opacity: 0.9 }}>Active VIP Plan</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.74rem' }}>
                    <div style={{ padding: '0.45rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
                      📋 Today: Chest & Cardio
                    </div>
                    <div style={{ padding: '0.45rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
                      🥗 Diet: 2,400 kcal (Active)
                    </div>
                    <div style={{ padding: '0.45rem 0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
                      🏋️ Trainer: Coach Amit (6:00 PM)
                    </div>
                  </div>
                </div>

                {/* Handwritten style tag pointing to device */}
                <div style={{ marginTop: '1.25rem', color: 'var(--color-green)', fontWeight: 700, fontSize: '1rem', fontStyle: 'italic', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span>⤴</span> Build a Healthier Tomorrow
                </div>
              </div>
            </div>
          </div>

          {/* 6 Clean Feature Badges Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))', gap: '0.85rem' }}>
            {[
              { icon: '👥', label: 'Member Management' },
              { icon: '📱', label: 'QR Check-in / Check-out' },
              { icon: '💳', label: 'Subscription Plans' },
              { icon: '🏋️', label: 'Trainer Booking' },
              { icon: '🛒', label: 'POS & Payments' },
              { icon: '📊', label: 'Reports & Analytics' }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO SECTION ("TRUSTED BY AMAZING BUSINESSES") */}
      <section id="portfolio" style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • OUR CLIENTS & PORTFOLIO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              Trusted by Amazing Businesses
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Explore our core production deployments and platforms built for high-growth businesses.
            </p>
          </div>

          {/* Branded Client Logo Bar matching Mockup Image 4 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2.5rem',
              flexWrap: 'wrap',
              padding: '1.25rem 2rem',
              background: '#F8FAFC',
              borderRadius: '16px',
              border: '1px solid var(--border-color)',
              marginBottom: '3.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#16A34A' }}>
              <span>🏋️</span> FitCore
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#8B5CF6' }}>
              <span>🟣</span> BhishiPe
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              And upcoming platforms in development...
            </div>
          </div>

          {/* 5 Project Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {portfolioData.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setActiveCaseStudy(proj)}
                className="saas-card"
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.4rem' }}>
                    {proj.category}
                  </div>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                    {proj.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {proj.tagline}
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-primary)', fontWeight: 700 }}>
                    View Case Study
                  </span>
                  <ExternalLink size={15} color="var(--color-primary)" />
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            Click any project card to view comprehensive problem, solution, features, and technology stack.
          </div>
        </div>
      </section>

      {/* 8. WHY NEXCOREGEN SECTION (2-COLUMN LAYOUT MATCHING IMAGE 4) */}
      <section id="why-us" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left side: Heading & CTA */}
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                • WHY NEXCOREGEN
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.15 }}>
                More Than a Development Company
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                We are passionate developers, designers and problem solvers. Our mission is to help businesses and enterprises turn their ideas into powerful digital products.
              </p>
              <a href="#about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </a>
            </div>

            {/* Right side: 2x2 Grid of 4 Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  🌐
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Innovation Driven</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  We love solving real world problems with forward-thinking tech.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FDF2F8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  ⚙️
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Quality First</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Clean code, scalable architecture & engineering best practices.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  🛡️
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Transparent Process</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Regular updates and clear, honest communication at every step.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  💜
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Long-Term Support</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  We grow with your business and provide continuous reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HOW WE WORK (PROCESS TIMELINE MATCHING IMAGE 5) */}
      <section style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • OUR PROCESS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)' }}>
              How We Work
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '0.5rem' }}>
              A proven 5-step engineering methodology that turns your vision into a successful product.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Horizontal Timeline Connector Bar (Desktop) */}
            <div
              className="desktop-timeline-line"
              style={{
                position: 'absolute',
                top: '24px',
                left: '10%',
                right: '10%',
                height: '3px',
                background: 'linear-gradient(90deg, #1769E0 0%, #8B5CF6 25%, #10B981 50%, #F59E0B 75%, #EC4899 100%)',
                zIndex: 0,
                opacity: 0.3
              }}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ padding: '0.5rem 0.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem auto', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(23, 105, 224, 0.4)' }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Understand</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>We listen deeply to your business goals and user needs.</p>
              </div>

              <div style={{ padding: '0.5rem 0.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#8B5CF6', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem auto', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)' }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Plan</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Create architecture, strategy and interactive UI roadmap.</p>
              </div>

              <div style={{ padding: '0.5rem 0.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#10B981', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem auto', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)' }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Develop</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Build clean, scalable code with modern tech stack.</p>
              </div>

              <div style={{ padding: '0.5rem 0.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#F59E0B', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem auto', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)' }}>
                  4
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Test</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Rigorous QA testing for speed, security and performance.</p>
              </div>

              <div style={{ padding: '0.5rem 0.5rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EC4899', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, margin: '0 auto 1rem auto', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)' }}>
                  5
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem' }}>Launch</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Seamless deployment and ongoing 24/7 technical support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TECHNOLOGY STACK LOGOS */}
      <section style={{ padding: '4rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
            TECHNOLOGY STACK WE USE
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {['React', 'React Native', 'Angular', 'Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Prisma', 'Cloud & AWS'].map((tech, i) => (
              <span
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--color-navy)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CONTACT & CTA BANNER (MATCHING IMAGE 4 & 5) */}
      <section id="contact" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #071A3A 0%, #0F2D6B 100%)',
              borderRadius: '24px',
              padding: 'clamp(2rem, 5vw, 4rem)',
              color: '#FFFFFF',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background Corporate Image overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("/assets/office-building.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                pointerEvents: 'none'
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ maxWidth: '750px', marginBottom: '2.5rem' }}>
                <div style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  LET'S BUILD SOMETHING GREAT TOGETHER
                </div>
                <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Have a Project in Mind?
                </h2>
                <p style={{ color: '#CBD5E1', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Let's discuss your ideas. Get in touch with us via WhatsApp or Email — We'd love to hear from you!
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                <a
                  href="https://wa.me/919209282289"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: '#16A34A', color: '#fff', padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>

                <button
                  id="btn-send-email"
                  type="button"
                  onClick={() => setEmailModalOpen(true)}
                  className="btn btn-white"
                  style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={18} color="var(--color-navy)" /> Send an Email
                </button>
              </div>

              {/* Quick Contact & Interactive Form */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
                {/* Contact Details Card */}
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>
                    Quick Contact
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div
                      id="quick-contact-email"
                      onClick={() => setEmailModalOpen(true)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        cursor: 'pointer',
                        padding: '0.4rem 0.5rem',
                        borderRadius: '8px',
                        transition: 'background 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                      title="Click to send an email or copy address"
                    >
                      <Mail size={18} color="#38BDF8" />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>DROP US AN EMAIL</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem', textDecoration: 'underline', textUnderlineOffset: '3px' }}>nexcoregen@ankitpatil1999.online</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Phone size={18} color="#38BDF8" />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>CALL OR WHATSAPP</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>+91 9209282289</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <MapPin size={18} color="#38BDF8" />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>HEADQUARTERS</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Nagpur, Maharashtra, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div id="contact-form" style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  {formSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank You!</div>
                      <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        Your project inquiry has been received. Our team will contact you within 24 hours.
                      </p>
                      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=nexcoregen@ankitpatil1999.online&su=${encodeURIComponent(`Project Enquiry from ${formData.name || 'Client'}`)}&body=${encodeURIComponent(`Hi Nexcoregen Team,\n\nName: ${formData.name}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nProject Details:\n${formData.details}\n`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-primary"
                          style={{ fontSize: '0.85rem', padding: '0.6rem 1.2rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                        >
                          <Mail size={15} /> Also Open in Gmail
                        </a>
                        <button
                          onClick={() => setFormSubmitted(false)}
                          className="btn btn-white"
                          style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={formLabel}>YOUR NAME *</label>
                          <input
                            type="text"
                            required
                            placeholder="Rahul Sharma"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            style={formInput}
                          />
                        </div>
                        <div>
                          <label style={formLabel}>COMPANY / ORG</label>
                          <input
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            style={formInput}
                          />
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={formLabel}>PHONE NUMBER *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 9209282289"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            style={formInput}
                          />
                        </div>
                        <div>
                          <label style={formLabel}>EMAIL ADDRESS *</label>
                          <input
                            type="email"
                            required
                            placeholder="rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            style={formInput}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={formLabel}>PROJECT DETAILS *</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Tell us about your project requirements or what you are looking to build..."
                          value={formData.details}
                          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                          style={{ ...formInput, resize: 'vertical' }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn"
                        style={{ background: '#1769E0', color: '#fff', padding: '0.85rem', width: '100%', fontSize: '0.95rem' }}
                      >
                        <Send size={16} /> Submit Project Enquiry
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer style={{ padding: '3.5rem 0 2rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Official Logo (2nd Dark Edition) */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                background: '#071A3A',
                padding: '0.55rem 1.25rem',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(7, 26, 58, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
              onClick={() => {
                navigateTo('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <Logo variant="dark" size="md" />
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1.5rem)', fontSize: '0.88rem', flexWrap: 'wrap' }}>
              <a href="#home" style={footerLink}>Home</a>
              <a href="#about" style={footerLink}>About</a>
              <a href="#services" style={footerLink}>Services</a>
              <a href="#fitcore" onClick={(e) => { e.preventDefault(); navigateTo('fitcore'); }} style={footerLink}>Our Product (FitCore)</a>
              <a href="#portfolio" style={footerLink}>Portfolio</a>
              <a href="#contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <div>
              © {new Date().getFullYear()} Nexcoregen Technologies. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: 'clamp(0.75rem, 2vw, 1.5rem)', alignItems: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigateTo('privacy')}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.82rem', padding: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateTo('terms')}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.82rem', padding: 0 }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                Terms & Conditions
              </button>
              <span
                style={{ cursor: 'pointer', color: 'var(--text-muted)', fontSize: '0.82rem' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                Back to Top ↑
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* VIDEO DEMO MODAL */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div
            style={{
              maxWidth: '850px',
              width: '100%',
              background: '#040711',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>
                FitCore — Real Gym Environment Demo Reel
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <X size={20} />
              </button>
            </div>
            <video
              src="/assets/fitcore-reel.mp4"
              autoPlay
              controls
              style={{ width: '100%', maxHeight: '520px', display: 'block' }}
            />
          </div>
        </div>
      )}

      {/* CASE STUDY DETAIL MODAL */}
      {activeCaseStudy && (
        <div className="modal-overlay" onClick={() => setActiveCaseStudy(null)}>
          <div
            style={{
              maxWidth: '680px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCaseStudy(null)}
              style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: '#F1F5F9', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <X size={18} color="var(--color-navy)" />
            </button>

            <div style={{ fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.35rem' }}>
              {activeCaseStudy.category}
            </div>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
              {activeCaseStudy.name}
            </h3>
            <div style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem', fontWeight: 500 }}>
              {activeCaseStudy.tagline}
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#EF4444', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                The Problem
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {activeCaseStudy.problem}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-green)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                The Nexcoregen Solution
              </div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                {activeCaseStudy.solution}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Key Implemented Features
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {activeCaseStudy.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--text-dark)' }}>
                    <Check size={16} color="var(--color-green)" /> {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-navy)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Technology Stack
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {activeCaseStudy.techStack.map((tech, idx) => (
                  <span key={idx} style={{ padding: '0.3rem 0.75rem', background: '#EFF6FF', color: 'var(--color-primary)', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600 }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {activeCaseStudy.id === 'fitcore' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={() => {
                    setActiveCaseStudy(null);
                    navigateTo('fitcore');
                  }}
                  className="btn"
                  style={{ width: '100%', background: '#16A34A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  Open Dedicated FitCore Product Page →
                </button>
                <button
                  onClick={() => {
                    setActiveCaseStudy(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Discuss Custom Fitness Hardware with Us
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setActiveCaseStudy(null);
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Build a Similar Solution with Us <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      )}

      {/* SMART EMAIL LAUNCH MODAL */}
      {emailModalOpen && (
        <div className="modal-overlay" onClick={() => setEmailModalOpen(false)}>
          <div
            style={{
              maxWidth: '520px',
              width: '100%',
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2rem',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="email-modal-close"
              onClick={() => setEmailModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: '#F1F5F9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={18} color="var(--color-navy)" />
            </button>

            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #1769E0, #38BDF8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 14px rgba(23, 105, 224, 0.3)'
                }}
              >
                <Mail size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                  Send an Email
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', margin: '0.15rem 0 0 0' }}>
                  Choose your email client or copy the address below
                </p>
              </div>
            </div>

            {/* Email Address + Copy Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: '#F8FAFC',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                marginBottom: '1.25rem',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                <Mail size={15} color="var(--color-primary)" />
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-navy)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  nexcoregen@ankitpatil1999.online
                </span>
              </div>
              <button
                id="btn-copy-email"
                onClick={handleCopyEmail}
                style={{
                  background: copiedEmail ? '#DCFCE7' : '#FFFFFF',
                  border: `1px solid ${copiedEmail ? '#86EFAC' : '#CBD5E1'}`,
                  color: copiedEmail ? '#15803D' : 'var(--color-navy)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  flexShrink: 0
                }}
              >
                {copiedEmail ? (
                  <>
                    <Check size={14} color="#15803D" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy Address
                  </>
                )}
              </button>
            </div>

            {/* Options List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '1.25rem' }}>
              {/* Option 1: Google Gmail */}
              <a
                id="link-open-gmail"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=nexcoregen@ankitpatil1999.online&su=Project%20Enquiry%20%7C%20Nexcoregen%20Technologies&body=Hello%20Ankit%20%26%20Nexcoregen%20Team,%0A%0AI%20would%20like%20to%20discuss%20a%20project.%0A%0AService%20Needed:%20%0ABudget:%20%0A%0AThanks!"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1rem',
                  background: '#FFFFFF',
                  border: '2px solid #BFDBFE',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px rgba(23, 105, 224, 0.08)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#1769E0';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#BFDBFE';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem' }}>
                    ✉️
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--color-navy)' }}>
                        Google Gmail (Browser)
                      </span>
                      <span style={{ background: '#EFF6FF', color: 'var(--color-primary)', fontSize: '0.65rem', fontWeight: 800, padding: '0.15rem 0.45rem', borderRadius: '999px', border: '1px solid #BFDBFE' }}>
                        RECOMMENDED
                      </span>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Opens Gmail compose directly in browser — 100% reliable
                    </div>
                  </div>
                </div>
                <ArrowRight size={16} color="var(--color-primary)" />
              </a>

              {/* Option 2: Outlook Web */}
              <a
                id="link-open-outlook"
                href="https://outlook.live.com/mail/0/deeplink/compose?to=nexcoregen@ankitpatil1999.online&subject=Project%20Enquiry%20%7C%20Nexcoregen%20Technologies"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1rem',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#94A3B8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem' }}>
                    📬
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)' }}>
                      Microsoft Outlook Web
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Opens Outlook.com webmail in a new tab
                    </div>
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>

              {/* Option 3: Default Desktop Mail App */}
              <a
                id="link-open-mailto"
                href="mailto:nexcoregen@ankitpatil1999.online?subject=Project%20Enquiry%20%7C%20Nexcoregen%20Technologies"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.9rem 1rem',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#94A3B8';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#F1F5F9', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.15rem' }}>
                    💻
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-navy)' }}>
                      Default Desktop App (Mailto)
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Opens Windows Mail, Mac Mail or Outlook Desktop
                    </div>
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>
            </div>

            {/* Footer Form Shortcut */}
            <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.9rem', textAlign: 'center' }}>
              <button
                id="btn-scroll-to-form"
                onClick={() => {
                  setEmailModalOpen(false);
                  const el = document.getElementById('contact-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  cursor: 'pointer'
                }}
              >
                Or fill the Project Enquiry form below ↓
              </button>
            </div>
          </div>
        </div>
      )}



      {/* Responsive helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-links { display: flex !important; }
          .mobile-menu-trigger { display: none !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav-links { display: none !important; }
          .mobile-menu-trigger { display: inline-flex !important; }
        }
        @media (max-width: 768px) {
          .desktop-timeline-line { display: none !important; }
        }
      `}</style>
    </div>
  );
}

const navLinkStyle: React.CSSProperties = {
  color: '#475569',
  textDecoration: 'none',
  fontSize: '0.92rem',
  fontWeight: 600,
  transition: 'color 0.2s ease'
};

const footerLink: React.CSSProperties = {
  color: '#64748B',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};

const formLabel: React.CSSProperties = {
  display: 'block',
  fontSize: '0.72rem',
  fontWeight: 700,
  color: '#CBD5E1',
  marginBottom: '0.35rem',
  letterSpacing: '0.04em'
};

const formInput: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '8px',
  color: '#FFFFFF',
  fontSize: '0.88rem',
  outline: 'none',
  fontFamily: 'inherit'
};

export default App;
