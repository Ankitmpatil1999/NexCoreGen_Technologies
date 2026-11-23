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
  Sparkles,
  GraduationCap,
  Clock,
  CheckCircle2,
  Calculator,
  Shield,
  Award,
  ChevronDown,
  Activity
} from 'lucide-react';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsConditions } from './components/TermsConditions';
import { FitCorePage } from './components/FitCorePage';
import { CampusOnePage } from './components/CampusOnePage';
import { AdmissionZenPage } from './components/AdmissionZenPage';
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
  status?: string;
  statusBadgeColor?: string;
  isClientProject?: boolean;
}

const portfolioData: CaseStudy[] = [
  {
    id: 'campusone',
    name: 'CampusOne Enterprise',
    category: 'Higher Education ERP & Smart Campus OS',
    tagline: 'Unified Smart Campus Operating System for Indian Engineering Colleges & Universities',
    problem: 'Indian engineering colleges and universities struggle with fragmented student ERPs, manual NBA/NAAC accreditation audits, fee leakages in floating-point financial ledgers, and disconnected biometric turnstile hardware.',
    solution: 'Architected a dual-database multi-tenant cloud platform with an immutable 64-bit integer Paise financial ledger, automated CO-PO-PSO direct/indirect attainment matrices, sub-200ms RFID/biometric IoT turnstiles, and 20+ production modules.',
    features: [
      'Dual-Database Multi-Tenant Isolation (Control Plane vs Institutional Schema)',
      'Immutable 64-bit Integer Paise Double-Entry Financial Ledger (Zero Leakage)',
      'Automated Outcome-Based Education (OBE CO-PO-PSO) for NBA Tier-I/II',
      'One-Click NAAC RAF & IQAC Auto-Compilation (SSR & AQAR Reports)',
      'Sub-200ms RFID & Biometric Turnstile IoT Gateway Integration',
      'Dynamic No-Code Approvals & Workflow Engine with Multi-Stage Escalation'
    ],
    techStack: ['Node.js 24 LTS', 'Express 5', 'TypeScript 6', 'Kysely', 'Angular 22', 'Tauri Desktop', 'React Native', 'DPDP Act 2023'],
    status: 'Flagship Live • Higher Education OS',
    statusBadgeColor: '#1D4ED8'
  },
  {
    id: 'fitcore',
    name: 'FitCore OS',
    category: 'Gym Management SaaS & Turnstile IoT OS',
    tagline: 'Pan-India Gym Management, Turnstile IoT & Commerce Operating System',
    problem: 'Gym franchises and fitness clubs were losing up to 18% of their annual revenue due to manual paper registers, unauthorized proxy entries, expired memberships slipping past staff, and disconnected turnstile hardware.',
    solution: 'Built an end-to-end multi-tenant platform featuring custom ESP32 MQTT turnstile hardware controllers, sub-200ms QR/NFC gate sync, Pan-India franchise Super Admin HUD, automated WhatsApp fee billing, and in-gym POS nutrition store.',
    features: [
      'Sub-200ms ESP32 Turnstile IoT Gateway (Wiegand & OSDP protocols)',
      'Member Mobile Pass with NFC & Dynamic Anti-Screenshot QR Code',
      'Automated WhatsApp Fee Billing & Payment Links via Razorpay',
      'Pan-India Franchise Multi-Branch Telemetry & Live Heatmaps',
      'In-Gym POS Supplement Store with 10% Margin Tracking',
      'Trainer Workspaces with Custom Workout & Nutrition Macro Planners'
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'MongoDB', 'Prisma', 'ESP32 MQTT', 'Tailored REST API'],
    status: 'Flagship Live • Smart Gym & IoT OS',
    statusBadgeColor: '#16A34A'
  },
  {
    id: 'admissionzen',
    name: 'AdmissionZen',
    category: 'Student Admission CRM & WhatsApp Outreach',
    tagline: 'Client Commissioned High-Velocity Admission CRM with Automated 80 msgs/s WhatsApp Outreach',
    problem: 'An educational client was losing valuable student admissions due to delayed caller follow-ups, slow spreadsheet ingestion of 5,000+ leads, and data leakage where counselors could view or reassign other team members\' high-intent leads.',
    solution: 'Engineered a streaming bulk Excel ingestion engine parsing 5,000+ leads in under 3 seconds, Meta Cloud WhatsApp API broadcast engine with BullMQ rate limiting at 80 msgs/sec, backend IDOR Shield counselor privacy, and active conversational AI development.',
    features: [
      'Streaming 5,000+ Bulk Excel & CSV Ingestion Engine (Under 3 seconds)',
      'Meta Cloud WhatsApp API Engine with BullMQ Rate Limiting (80 msgs/sec)',
      'Backend-Enforced Counselor Data Isolation (IDOR Shield Privacy)',
      'NutriZen Forest Green Mobile App with Bottom Nav & Circular Action FAB',
      'Public 1-Tap Student Admission Inquiry Portal with Mobile OTP',
      'Active Ongoing Sprint: 24/7 AI WhatsApp Chatbot & Application Fee Gateway'
    ],
    techStack: ['React 19', 'Node.js', 'Express', 'MongoDB', 'BullMQ', 'Meta WhatsApp Cloud API', 'HMAC SHA-256'],
    status: 'Client Project • Active Ongoing Sprint',
    statusBadgeColor: '#D97706',
    isClientProject: true
  },
  {
    id: 'bhishipe',
    name: 'BhishiPe',
    category: 'Digital Chit Fund & Savings Platform',
    tagline: 'Modernizing Traditional Community Savings with Trust & Transparency',
    problem: 'Traditional Bhishi (Chit Fund) groups in India rely on paper ledgers, causing disputes, trust deficits, and payment delays.',
    solution: 'Engineered a transparent digital ledger with real-time bidding, automated installment tracking, and secure UPI payment settlements.',
    features: [
      'Transparent Digital Auction Bidding Engine',
      'Automated Double-Entry Installment Ledger',
      'Instant UPI Payouts & Escrow Settlement',
      'SMS & WhatsApp Due Alerts with Deep Links',
      'Automated KYC & Member Identity Verification'
    ],
    techStack: ['React Native', 'Node.js', 'PostgreSQL', 'Prisma', 'Razorpay UPI API'],
    status: 'Production Live • FinTech',
    statusBadgeColor: '#7C3AED'
  }
];

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'terms' | 'fitcore' | 'campusone' | 'admissionzen'>('home');
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [formIsSubmitting, setFormIsSubmitting] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && !target.closest('.products-dropdown-container')) {
        setProductsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
      } else if (hash === '#campusone' || hash === '#campus-one' || hash === '#erp') {
        setCurrentPage('campusone');
      } else if (hash === '#admissionzen' || hash === '#admission-zen' || hash === '#crm') {
        setCurrentPage('admissionzen');
      } else if (hash === '' || hash === '#home' || hash === '#') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: 'home' | 'privacy' | 'terms' | 'fitcore' | 'campusone' | 'admissionzen') => {
    setCurrentPage(page);
    if (page === 'privacy') {
      window.location.hash = '#privacy';
    } else if (page === 'terms') {
      window.location.hash = '#terms';
    } else if (page === 'fitcore') {
      window.location.hash = '#fitcore';
    } else if (page === 'campusone') {
      window.location.hash = '#campusone';
    } else if (page === 'admissionzen') {
      window.location.hash = '#admissionzen';
    } else {
      window.location.hash = '#home';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormIsSubmitting(true);

    const whatsappMessage = encodeURIComponent(
      `*New Project Inquiry from Nexcoregen Website* 🚀\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `🏢 *Company:* ${formData.company || 'N/A'}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `✉️ *Email:* ${formData.email}\n` +
      `🛠️ *Service:* ${formData.service}\n` +
      `💰 *Budget:* ${formData.budget}\n` +
      `📝 *Details:* ${formData.details}\n`
    );
    const waUrl = `https://wa.me/919209282289?text=${whatsappMessage}`;

    try {
      await fetch('https://formsubmit.co/ajax/Ankitmpatil1999@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `🚀 New Project Lead: ${formData.name} (${formData.service})`,
          _cc: 'nexcoregen@ankitpatil1999.online',
          _template: 'table',
          Name: formData.name,
          Company: formData.company || 'N/A',
          Phone: formData.phone,
          Email: formData.email,
          Service: formData.service,
          Budget: formData.budget,
          ProjectDetails: formData.details,
          SubmissionTime: new Date().toLocaleString()
        })
      });
    } catch (err) {
      console.warn('FormSubmit notification error:', err);
    } finally {
      setFormIsSubmitting(false);
      setFormSubmitted(true);
      try {
        window.open(waUrl, '_blank');
      } catch (err) {
        // popup fallback
      }
    }
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

  if (currentPage === 'campusone') {
    return (
      <CampusOnePage
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

  if (currentPage === 'admissionzen') {
    return (
      <AdmissionZenPage
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
          {/* Brand Logo */}
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
          </div>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav-links" style={{ display: 'none', alignItems: 'center', gap: '0.35rem' }}>
            <a href="#home" className="nav-link-item">Home</a>
            <a href="#about" className="nav-link-item">About</a>
            <a href="#services" className="nav-link-item">Services</a>

            {/* Products Dropdown */}
            <div
              className="products-dropdown-container"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
              style={{ position: 'relative' }}
            >
              <button
                type="button"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="nav-link-item"
                style={{
                  background: productsDropdownOpen ? '#F1F5F9' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  gap: '0.35rem'
                }}
                aria-expanded={productsDropdownOpen}
              >
                <span>Products</span>
                <ChevronDown
                  size={14}
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: productsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: '#64748B'
                  }}
                />
              </button>

              {/* Floating Dropdown Card */}
              {productsDropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '390px',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    boxShadow: '0 20px 45px -10px rgba(7, 26, 58, 0.18), 0 0 0 1px rgba(0, 0, 0, 0.08)',
                    padding: '0.85rem',
                    zIndex: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem'
                  }}
                >
                  {/* Item 1: CampusOne */}
                  <button
                    type="button"
                    onClick={() => {
                      navigateTo('campusone');
                      setProductsDropdownOpen(false);
                    }}
                    className="dropdown-item-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background 0.15s ease',
                      fontFamily: 'inherit'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <GraduationCap size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-navy)' }}>CampusOne Enterprise</span>
                        <span style={{ background: '#DBEAFE', color: '#1E40AF', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>Flagship</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.77rem', color: '#64748B', lineHeight: 1.35 }}>
                        Dual-DB Higher Education ERP, NBA/NAAC Attainment & Smart Turnstiles
                      </p>
                    </div>
                  </button>

                  {/* Item 2: FitCore OS */}
                  <button
                    type="button"
                    onClick={() => {
                      navigateTo('fitcore');
                      setProductsDropdownOpen(false);
                    }}
                    className="dropdown-item-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background 0.15s ease',
                      fontFamily: 'inherit'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#F0FDF4', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Activity size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-navy)' }}>FitCore OS</span>
                        <span style={{ background: '#DCFCE7', color: '#15803D', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>Live IoT</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.77rem', color: '#64748B', lineHeight: 1.35 }}>
                        Sub-200ms ESP32 Turnstile Gateway, Member NFC & Franchise Telemetry
                      </p>
                    </div>
                  </button>

                  {/* Item 3: AdmissionZen */}
                  <button
                    type="button"
                    onClick={() => {
                      navigateTo('admissionzen');
                      setProductsDropdownOpen(false);
                    }}
                    className="dropdown-item-hover"
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.85rem',
                      padding: '0.75rem',
                      borderRadius: '12px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                      width: '100%',
                      transition: 'background 0.15s ease',
                      fontFamily: 'inherit'
                    }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Smartphone size={22} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--color-navy)' }}>AdmissionZen</span>
                        <span style={{ background: '#FEF3C7', color: '#B45309', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '9999px' }}>Client Sprint</span>
                      </div>
                      <p style={{ margin: 0, fontSize: '0.77rem', color: '#64748B', lineHeight: 1.35 }}>
                        Streaming 5k+ Lead Ingestion, 80 msgs/s WhatsApp Outreach & IDOR Privacy
                      </p>
                    </div>
                  </button>

                  {/* Bottom Bar */}
                  <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '0.65rem', marginTop: '0.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '0.5rem', paddingRight: '0.5rem' }}>
                    <span style={{ fontSize: '0.73rem', color: '#94A3B8' }}>3 Production Architectures</span>
                    <a
                      href="#portfolio"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateTo('home');
                        setProductsDropdownOpen(false);
                        setTimeout(() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' }), 100);
                      }}
                      style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      View All Portfolio →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#portfolio" className="nav-link-item">Portfolio</a>
            <a href="#why-us" className="nav-link-item">Why Us</a>
            <a href="#contact" className="nav-link-item">Contact</a>
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

            {/* Products Group */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', fontWeight: 700, marginBottom: '0.5rem', paddingLeft: '0.25rem' }}>
                Flagship Systems & Products
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button
                  type="button"
                  onClick={() => { navigateTo('campusone'); setMobileMenuOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '12px',
                    background: '#EFF6FF',
                    border: '1px solid #BFDBFE',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#DBEAFE', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <GraduationCap size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1E3A8A' }}>CampusOne Enterprise</div>
                      <div style={{ fontSize: '0.72rem', color: '#3B82F6' }}>Higher Ed ERP & Smart Campus OS</div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#1D4ED8" />
                </button>

                <button
                  type="button"
                  onClick={() => { navigateTo('fitcore'); setMobileMenuOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '12px',
                    background: '#F0FDF4',
                    border: '1px solid #BBF7D0',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Activity size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#14532D' }}>FitCore OS</div>
                      <div style={{ fontSize: '0.72rem', color: '#16A34A' }}>Gym Turnstile IoT & Commerce</div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#16A34A" />
                </button>

                <button
                  type="button"
                  onClick={() => { navigateTo('admissionzen'); setMobileMenuOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 0.95rem',
                    borderRadius: '12px',
                    background: '#FFFBEB',
                    border: '1px solid #FDE68A',
                    cursor: 'pointer',
                    textAlign: 'left',
                    width: '100%'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '34px', height: '34px', borderRadius: '8px', background: '#FEF3C7', color: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Smartphone size={18} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#78350F' }}>AdmissionZen CRM</div>
                      <div style={{ fontSize: '0.72rem', color: '#D97706' }}>WhatsApp Outreach (Ongoing Sprint)</div>
                    </div>
                  </div>
                  <ArrowRight size={16} color="#D97706" />
                </button>
              </div>
            </div>

            {/* General Navigation Group */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#94A3B8', fontWeight: 700, marginBottom: '0.5rem', paddingLeft: '0.25rem' }}>
                Navigation
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {[
                  { label: 'Home', action: () => { navigateTo('home'); setMobileMenuOpen(false); } },
                  { label: 'About Us', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
                  { label: 'Services', action: () => { navigateTo('home'); setMobileMenuOpen(false); setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100); } },
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
                      padding: '0.75rem 0.95rem',
                      borderRadius: '10px',
                      color: 'var(--color-navy)',
                      background: '#F8FAFC',
                      border: '1px solid #E2E8F0',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease',
                      width: '100%'
                    }}
                  >
                    <span>{link.label}</span>
                    <ArrowRight size={15} color="#94A3B8" />
                  </button>
                ))}
              </div>
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
                We Build Scalable Digital{' '}
                <span className="gradient-title-purple">
                  Solutions That Matter.
                </span>
              </h1>

              {/* Subheading */}
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '540px', marginBottom: '2rem' }}>
                <strong>Nexcoregen Technologies</strong> brings senior software engineering, cloud multi-tenancy, and hardware IoT architecture to build scalable, mission-critical digital products for enterprises, institutions, and high-growth businesses.
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

              {/* 4 Micro-Trust Badges */}
              <div style={{ display: 'flex', gap: 'clamp(0.85rem, 2vw, 1.4rem)', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.84rem', fontWeight: 600 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  ⚡ Senior Systems Engineering
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  🏛️ Enterprise Multi-Tenancy & IoT
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  👥 Founder-Led Direct Delivery
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  💙 99.9% Production SLA
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
                Who We Are & Our Engineering Track Record
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                <strong>Nexcoregen Technologies</strong> is a software development and enterprise systems engineering company founded by <strong>Ankit Patil</strong>. Backed by <strong>full-stack engineering and systems architecture experience</strong>, we architect scalable web platforms, high-concurrency mobile applications, zero-leakage financial ledgers, and connected IoT hardware systems built on uncompromising engineering foundations.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    ⚡ Systems Architecture
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Clean, modular code built for high throughput, sub-200ms latency, and 99.9% production SLA.
                  </div>
                </div>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    🤝 Founder-Led Direct Delivery
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Direct technical leadership and personal architectural attention across every stage of your build.
                  </div>
                </div>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    🛡️ Multi-Tenant Sovereignty
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Strict physical dual-database schemas and IDOR shields guaranteeing zero data leakage.
                  </div>
                </div>
                <div style={{ padding: '1.1rem 1.25rem', background: '#F8FAFC', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--color-navy)', marginBottom: '0.35rem' }}>
                    🔌 Hardware & IoT Telemetry
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    Custom microcontroller integration (ESP32 MQTT, RFID, biometric turnstiles, Wiegand & OSDP).
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

      {/* 6A. CAMPUSONE ENTERPRISE OS FLAGSHIP SPOTLIGHT */}
      <section id="campusone" style={{ padding: '6rem 0', background: 'radial-gradient(circle at 50% 0%, #EFF6FF 0%, #F8FAFC 85%)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 3.5rem auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: '#DBEAFE',
                color: '#1D4ED8',
                fontSize: '0.82rem',
                fontWeight: 800,
                marginBottom: '1rem',
                letterSpacing: '0.04em'
              }}
            >
              • FLAGSHIP HIGHER EDUCATION OS
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 900 }}>
              CampusOne <span style={{ color: '#1D4ED8' }}>— Unified Smart Campus Operating System</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Engineered by NexCoreGen for Indian Engineering Colleges & Universities. Unifies <strong>Academic ERP</strong>, <strong>Dual-DB Multi-Tenancy</strong>, an <strong>Immutable 64-bit Paise Financial Ledger</strong>, <strong>Biometric/RFID IoT Turnstiles</strong>, and <strong>Automated NBA/NAAC Outcome-Based Accreditation</strong> into one resilient platform.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => navigateTo('campusone')}
                className="btn"
                style={{ background: '#1D4ED8', color: '#fff', padding: '0.85rem 1.8rem', borderRadius: '10px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 6px 20px rgba(29, 78, 216, 0.25)' }}
              >
                Explore CampusOne Enterprise Page →
              </button>
              <button
                type="button"
                onClick={() => navigateTo('campusone')}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.8rem', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Calculator size={16} color="#1D4ED8" /> Test 64-bit Paise Ledger Simulator
              </button>
            </div>
          </div>

          {/* Central Architectural Showcase Box */}
          <div
            style={{
              background: '#0B132B',
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              border: '1px solid #1E293B',
              boxShadow: '0 25px 50px -12px rgba(7, 26, 58, 0.35)',
              color: '#F8FAFC',
              marginBottom: '3rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.75rem', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <GraduationCap size={22} color="#38BDF8" />
                <span style={{ fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>CampusOne Enterprise Platform Architecture</span>
                <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(56, 189, 248, 0.15)', color: '#38BDF8', fontWeight: 700 }}>v4.0.0 Unified Release</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: '#94A3B8' }}>
                <span>DB: <strong style={{ color: '#6EE7B7' }}>Dual Physical Schemas</strong></span>
                <span>Ledger: <strong style={{ color: '#FDE047' }}>Paise Zero-Leakage</strong></span>
                <span>Gate: <strong style={{ color: '#38BDF8' }}>&lt; 200ms Turnstile IoT</strong></span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#93C5FD', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Shield size={16} /> Dual-DB Physical Tenant Isolation
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Strict physical database boundary between <code>campusone</code> control plane and institutional <code>campusone_cug</code> schema. Complies with DPDP Act 2023.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#86EFAC', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Calculator size={16} /> Double-Entry Ledger in Paise
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  All fees, concessions, hostel mess dues, and fines handled in <code>BIGINT UNSIGNED</code> Paise. Zero micro-rounding losses across institutional audits.
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1.25rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#FDE047', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Award size={16} /> NBA & NAAC Automation
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: 1.6 }}>
                  Automated CO-PO-PSO direct/indirect attainment matrices conforming to Washington Accord Tier-I/II and one-click NAAC SSR/AQAR report compilation.
                </div>
              </div>
            </div>
          </div>

          {/* 6 Clean Feature Badges Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '0.85rem' }}>
            {[
              { icon: '🏛️', label: 'Dual-DB Isolation' },
              { icon: '💰', label: 'Paise Integer Ledger' },
              { icon: '📊', label: 'NBA CO-PO Matrices' },
              { icon: '🏆', label: 'NAAC SSR Auto-Compiler' },
              { icon: '⚡', label: 'Sub-200ms Turnstiles' },
              { icon: '💼', label: 'TPO Placement CRM' }
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

      {/* 6B. FITCORE OS FLAGSHIP SPOTLIGHT */}
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
              • FLAGSHIP GYM & IOT OS
            </div>

            <h2 style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 900 }}>
              FitCore <span style={{ color: 'var(--color-green)' }}>— Pan-India Gym & Turnstile IoT OS</span>
            </h2>

            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              A complete Pan-India gym management operating system unifying <strong>sub-200ms ESP32 turnstile edge controllers</strong>, <strong>multi-branch franchise telemetry</strong>, <strong>member mobile NFC passes</strong>, <strong>automated WhatsApp fee billing</strong>, and <strong>in-gym POS commerce</strong> into one cohesive platform.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => navigateTo('fitcore')} className="btn btn-green">
                Explore Dedicated FitCore Page →
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
              { icon: '📱', label: 'QR / NFC Check-in' },
              { icon: '💳', label: 'WhatsApp Fee Dues' },
              { icon: '🏋️', label: 'Trainer & Workouts' },
              { icon: '🛒', label: 'POS Supplement Store' },
              { icon: '📊', label: 'Franchise Telemetry' }
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

      {/* 6C. ADMISSIONZEN CLIENT PROJECT HIGHLIGHT BANNER */}
      <section id="admissionzen" style={{ padding: '5.5rem 0', background: 'radial-gradient(circle at 50% 0%, #FFFBEB 0%, #FFFFFF 85%)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(1.75rem, 4.5vw, 3rem)',
              border: '2px solid #FDE68A',
              boxShadow: '0 15px 40px rgba(217, 119, 6, 0.08)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: '9999px',
                  background: '#FEF3C7',
                  color: '#92400E',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  marginBottom: '1rem',
                  border: '1px solid #FCD34D'
                }}
              >
                <Clock size={14} color="#92400E" /> CLIENT COMMISSIONED PROJECT • ACTIVE SPRINT IN PROGRESS
              </div>

              <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.7rem)', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 900 }}>
                AdmissionZen <span style={{ color: '#D97706' }}>— High-Velocity CRM & WhatsApp Outreach</span>
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Commissioned by an educational client. Built to ingest <strong>5,000+ student records in under 3 seconds</strong>, broadcast personalized WhatsApp templates at <strong>80 messages/second with BullMQ</strong>, and protect counselor privacy with an architectural <strong>IDOR Shield</strong>.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#16A34A' }}>⚡ 5,000+ Ingest / 3s</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Streaming Excel/CSV parser</div>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0284C7' }}>📱 80 msgs/s Queue</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>BullMQ Meta Cloud API</div>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#9333EA' }}>🛡️ IDOR Shield</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Zero cross-counselor leaks</div>
                </div>
                <div style={{ padding: '0.75rem', background: '#F8FAFC', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#D97706' }}>🤖 AI Sprint 2 Active</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Conversational WhatsApp bot</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => navigateTo('admissionzen')}
                  className="btn"
                  style={{ background: '#D97706', color: '#fff', padding: '0.85rem 1.8rem', borderRadius: '10px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', boxShadow: '0 6px 20px rgba(217, 119, 6, 0.25)' }}
                >
                  Inspect Client Project Specs & Simulator →
                </button>
                <a
                  href="#contact"
                  className="btn btn-secondary"
                  style={{ padding: '0.85rem 1.6rem', borderRadius: '10px' }}
                >
                  Discuss Custom CRM Build
                </a>
              </div>
            </div>

            {/* Visual preview card */}
            <div style={{ background: '#0F172A', borderRadius: '18px', padding: '1.75rem', color: '#F8FAFC', border: '1px solid #1E293B', boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#22C55E' }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38BDF8' }}>Meta Cloud WhatsApp Dispatcher</span>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#FBBF24', background: 'rgba(251,191,36,0.15)', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>Sprint 2 In Progress</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.82rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color: '#4ADE80', fontWeight: 700, marginBottom: '0.25rem' }}>✓ Bulk CSV Parser Streamed</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.74rem' }}>5,000 records normalized & deduplicated in 2.8 seconds.</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color: '#38BDF8', fontWeight: 700, marginBottom: '0.25rem' }}>✓ BullMQ Queue Active (80/sec)</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.74rem' }}>Zero Meta rate-limit drops. Dynamic template variables verified.</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '0.85rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color: '#FDE047', fontWeight: 700, marginBottom: '0.25rem' }}>⚙️ Active Sprint: WhatsApp AI Bot</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.74rem' }}>Automating campus visit booking & course eligibility verification.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO SECTION ("PROVEN PRODUCTION PLATFORMS & CLIENT ENGAGEMENTS") */}
      <section id="portfolio" style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • OUR CLIENTS & PORTFOLIO
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '0.75rem', fontWeight: 800 }}>
              Proven Production Platforms & Active Client Engagements
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
              Explore our core production deployments and active client-commissioned platforms built for high-scale enterprise impact.
            </p>
          </div>

          {/* Branded Client Logo Bar */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#1D4ED8' }}>
              <span>🎓</span> CampusOne Enterprise
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#16A34A' }}>
              <span>🏋️</span> FitCore OS
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#D97706' }}>
              <span>📱</span> AdmissionZen
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#8B5CF6' }}>
              <span>🟣</span> BhishiPe
            </div>
          </div>

          {/* 4 Rich Project Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.75rem', marginBottom: '2.5rem' }}>
            {portfolioData.map((proj) => (
              <div
                key={proj.id}
                className="saas-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  padding: '1.75rem',
                  background: '#FFFFFF',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--color-primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {proj.category}
                    </span>
                    {proj.status && (
                      <span
                        style={{
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '999px',
                          background: `${proj.statusBadgeColor || '#1769E0'}15`,
                          color: proj.statusBadgeColor || '#1769E0',
                          border: `1px solid ${proj.statusBadgeColor || '#1769E0'}30`
                        }}
                      >
                        {proj.status}
                      </span>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', color: 'var(--color-navy)', marginBottom: '0.45rem', fontWeight: 800 }}>
                    {proj.name}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                    {proj.tagline}
                  </p>

                  {/* Top 3 Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid #F1F5F9' }}>
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.8rem', color: '#334155' }}>
                        <CheckCircle2 size={14} color="#16A34A" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                    {proj.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} style={{ padding: '0.2rem 0.55rem', background: '#F1F5F9', color: '#475569', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600 }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.65rem', paddingTop: '1rem', borderTop: '1px solid var(--border-light)', flexWrap: 'wrap' }}>
                  {proj.id === 'campusone' ? (
                    <button
                      type="button"
                      onClick={() => navigateTo('campusone')}
                      className="btn"
                      style={{ flexGrow: 1, background: '#1D4ED8', color: '#fff', fontSize: '0.82rem', padding: '0.55rem 0.95rem', borderRadius: '8px', fontWeight: 700 }}
                    >
                      Explore CampusOne OS →
                    </button>
                  ) : proj.id === 'fitcore' ? (
                    <button
                      type="button"
                      onClick={() => navigateTo('fitcore')}
                      className="btn"
                      style={{ flexGrow: 1, background: '#16A34A', color: '#fff', fontSize: '0.82rem', padding: '0.55rem 0.95rem', borderRadius: '8px', fontWeight: 700 }}
                    >
                      Explore FitCore OS →
                    </button>
                  ) : proj.id === 'admissionzen' ? (
                    <button
                      type="button"
                      onClick={() => navigateTo('admissionzen')}
                      className="btn"
                      style={{ flexGrow: 1, background: '#D97706', color: '#fff', fontSize: '0.82rem', padding: '0.55rem 0.95rem', borderRadius: '8px', fontWeight: 700 }}
                    >
                      Inspect Client Specs →
                    </button>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => setActiveCaseStudy(proj)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.82rem', padding: '0.55rem 0.95rem', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <span>Case Study</span>
                    <ExternalLink size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>
            Click any project to explore live product interactive pages, architecture specifications, and client deliverables.
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
                • ENGINEERING EXCELLENCE
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', color: 'var(--color-navy)', marginBottom: '1rem', lineHeight: 1.15, fontWeight: 800 }}>
                Architectural Leadership & Execution
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                We are seasoned systems architects, full-stack engineers, and IoT specialists. Our founder-led team engineers multi-tenant institutional operating systems, turnstile hardware gateways, and high-velocity outreach engines built to withstand massive scale.
              </p>
              <a href="#about" className="btn btn-primary">
                Learn More About Our Track Record <ArrowRight size={16} />
              </a>
            </div>

            {/* Right side: 2x2 Grid of 4 Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  ⚡
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>Systems Architecture</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Proven track record of building multi-tenant SaaS, hardware IoT firmware, and distributed queues.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FDF2F8', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  🛡️
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>Zero-Leakage Precision</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  64-bit integer money ledgers, IDOR security shields, and DPDP 2023 compliance.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  ⚙️
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>High-Throughput Speed</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Sub-200ms turnstile gate sync and 80 msgs/second BullMQ streaming dispatchers.
                </p>
              </div>

              <div className="saas-card" style={{ padding: '1.75rem' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', fontSize: '1.3rem' }}>
                  💜
                </div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-navy)', marginBottom: '0.35rem', fontWeight: 800 }}>Founder-Led SLA Support</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  Direct technical ownership from Lead Architect Ankit Patil with continuous 24/7 reliability.
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
            ENTERPRISE TECHNOLOGY STACK WE ARCHITECT WITH
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', maxWidth: '920px', margin: '0 auto' }}>
            {[
              'Node.js 24 LTS',
              'Express 5',
              'TypeScript 6',
              'React 19',
              'Angular 22',
              'React Native',
              'Tauri Desktop',
              'Kysely Query Builder',
              'MongoDB',
              'PostgreSQL & Prisma',
              'ESP32 MQTT (IoT)',
              'BullMQ Queues',
              'Meta WhatsApp Cloud API',
              'Docker & Cloud VPS'
            ].map((tech, i) => (
              <span
                key={i}
                style={{
                  background: '#FFFFFF',
                  padding: '0.55rem 1.15rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
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
              padding: 'clamp(1.35rem, 4vw, 3.5rem)',
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
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Have a Project in Mind?
                </h2>
                <p style={{ color: '#CBD5E1', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', lineHeight: 1.6 }}>
                  Let's discuss your ideas. Get in touch with us via WhatsApp or Email — We'd love to hear from you!
                </p>
              </div>

              {/* Direct Instant Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <a
                  href="https://wa.me/919209282289"
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{ background: '#16A34A', color: '#fff', padding: '0.85rem 1.6rem', fontSize: '0.95rem' }}
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>

                <button
                  id="btn-send-email"
                  type="button"
                  onClick={() => setEmailModalOpen(true)}
                  className="btn btn-white"
                  style={{ padding: '0.85rem 1.6rem', fontSize: '0.95rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <Mail size={18} color="var(--color-navy)" /> Send an Email
                </button>
              </div>

              {/* Quick Contact & Interactive Form */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', alignItems: 'flex-start' }}>
                {/* Contact Details Card */}
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: 'clamp(1.2rem, 3.5vw, 2rem)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
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
                      <Mail size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>DROP US AN EMAIL</div>
                        <div style={{ fontWeight: 600, fontSize: 'clamp(0.82rem, 2.2vw, 0.95rem)', textDecoration: 'underline', textUnderlineOffset: '3px', wordBreak: 'break-all' }}>
                          nexcoregen@ankitpatil1999.online
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Phone size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>CALL OR WHATSAPP</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>+91 9209282289</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <MapPin size={18} color="#38BDF8" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>HEADQUARTERS</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Nagpur, Maharashtra, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div id="contact-form" style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: 'clamp(1.2rem, 3.5vw, 2rem)', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  {formSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank You {formData.name}!</div>
                      <p style={{ color: '#CBD5E1', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                        Your project inquiry has been received and emailed to our engineering team. For fastest response, connect directly on WhatsApp:
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxWidth: '380px', margin: '0 auto 1.25rem auto' }}>
                        <a
                          href={`https://wa.me/919209282289?text=${encodeURIComponent(
                            `*Project Inquiry from Website*\n👤 Name: ${formData.name}\n📱 Phone: ${formData.phone}\n✉️ Email: ${formData.email}\n🛠️ Service: ${formData.service}\n💰 Budget: ${formData.budget}\n📝 Details: ${formData.details}`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn"
                          style={{
                            background: '#25D366',
                            color: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            fontWeight: 700,
                            padding: '0.8rem 1.2rem',
                            borderRadius: '10px',
                            fontSize: '0.92rem',
                            textDecoration: 'none'
                          }}
                        >
                          <MessageCircle size={18} /> Connect on WhatsApp (+91 9209282289)
                        </a>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({
                              name: '',
                              company: '',
                              phone: '',
                              email: '',
                              service: 'Web Development',
                              budget: '₹50,000 - ₹1,50,000',
                              details: ''
                            });
                          }}
                          className="btn btn-white"
                          style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
                        >
                          Submit Another Inquiry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div className="contact-form-grid">
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

                      <div className="contact-form-grid">
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
                        disabled={formIsSubmitting}
                        className="btn"
                        style={{
                          background: '#1769E0',
                          color: '#fff',
                          padding: '0.85rem',
                          width: '100%',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                          cursor: formIsSubmitting ? 'not-allowed' : 'pointer',
                          opacity: formIsSubmitting ? 0.8 : 1
                        }}
                      >
                        {formIsSubmitting ? (
                          <span>Sending Inquiry to Engineering Team...</span>
                        ) : (
                          <>
                            <Send size={16} /> Submit Project Enquiry
                          </>
                        )}
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
          <div className="footer-main-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {/* Official Logo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: 'pointer',
                  background: '#071A3A',
                  padding: '0.55rem 1.25rem',
                  borderRadius: '14px',
                  boxShadow: '0 4px 16px rgba(7, 26, 58, 0.25)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  alignSelf: 'flex-start'
                }}
                onClick={() => {
                  navigateTo('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Logo variant="dark" size="md" />
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Ideas Today. A Better Tomorrow.
              </div>
            </div>

            {/* Links */}
            <div className="footer-links-container">
              <a href="#home" style={footerLink}>Home</a>
              <a href="#about" style={footerLink}>About</a>
              <a href="#services" style={footerLink}>Services</a>
              <a href="#fitcore" onClick={(e) => { e.preventDefault(); navigateTo('fitcore'); }} style={footerLink}>Our Product</a>
              <a href="#portfolio" style={footerLink}>Portfolio</a>
              <a href="#contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div className="footer-bottom-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
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
                style={{ cursor: 'pointer', color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.82rem' }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

            {activeCaseStudy.id === 'campusone' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCaseStudy(null);
                    navigateTo('campusone');
                  }}
                  className="btn"
                  style={{ width: '100%', background: '#1D4ED8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}
                >
                  Open Dedicated CampusOne Enterprise Page →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCaseStudy(null);
                    navigateTo('campusone');
                    setTimeout(() => {
                      const el = document.getElementById('demo-request');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Schedule Institutional Presentation
                </button>
              </div>
            ) : activeCaseStudy.id === 'fitcore' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCaseStudy(null);
                    navigateTo('fitcore');
                  }}
                  className="btn"
                  style={{ width: '100%', background: '#16A34A', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}
                >
                  Open Dedicated FitCore Product Page →
                </button>
                <button
                  type="button"
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
            ) : activeCaseStudy.id === 'admissionzen' ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCaseStudy(null);
                    navigateTo('admissionzen');
                  }}
                  className="btn"
                  style={{ width: '100%', background: '#D97706', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontWeight: 700 }}
                >
                  Open Dedicated AdmissionZen Client Page & Simulator →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveCaseStudy(null);
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Discuss Custom CRM & WhatsApp Outreach Engine
                </button>
              </div>
            ) : (
              <button
                type="button"
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



      {/* Responsive helper & Modern Header Nav Styles */}
      <style>{`
        @media (min-width: 980px) {
          .desktop-nav-links { display: flex !important; }
          .mobile-menu-trigger { display: none !important; }
        }
        @media (max-width: 979px) {
          .desktop-nav-links { display: none !important; }
          .mobile-menu-trigger { display: inline-flex !important; }
        }
        @media (max-width: 768px) {
          .desktop-timeline-line { display: none !important; }
        }
        .nav-link-item {
          color: #475569;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          white-space: nowrap;
          transition: all 0.15s ease;
          display: inline-flex;
          align-items: center;
        }
        .nav-link-item:hover {
          color: #071A3A !important;
          background-color: #F1F5F9;
        }
        .dropdown-item-hover:hover {
          background-color: #F8FAFC !important;
        }
      `}</style>
    </div>
  );
}

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
