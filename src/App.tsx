import React, { useState } from 'react';
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
  MessageCircle
} from 'lucide-react';

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
  },
  {
    id: 'ringpe',
    name: 'RingPe',
    category: 'Fintech & Wearable Payments',
    tagline: 'Next-Generation Contactless Smart Ring & Merchant Payments',
    problem: 'Users need faster, hands-free payment methods at POS terminals without taking out phones or physical plastic cards.',
    solution: 'Developed a companion fintech wallet app that securely tokenizes NFC smart rings for tap-and-pay transactions at any standard POS.',
    features: ['Tokenized NFC Contactless Pay', 'Instant Card Management & Lock', 'Real-Time Transaction Feed', 'Biometric Authentication', 'Cashback & Merchant Rewards'],
    techStack: ['React Native', 'TypeScript', 'Go Backend', 'Redis', 'PCI-DSS Tokenization']
  }
];

export function App() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: 'Web Development',
    budget: '₹50,000 - ₹1,50,000',
    details: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      {/* 1. NAVBAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--border-color)',
          padding: '0.9rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #1769E0, #38BDF8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 900,
                fontSize: '1.25rem',
                boxShadow: '0 4px 12px rgba(23, 105, 224, 0.3)'
              }}
            >
              N
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-navy)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                NextcoreGent
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Technologies
              </div>
            </div>
          </a>

          {/* Nav Links */}
          <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-menu">
            <a href="#home" style={navLinkStyle}>Home</a>
            <a href="#about" style={navLinkStyle}>About</a>
            <a href="#services" style={navLinkStyle}>Services</a>
            <a href="#fitcore" style={navLinkStyle}>Our Product</a>
            <a href="#portfolio" style={navLinkStyle}>Portfolio</a>
            <a href="#why-us" style={navLinkStyle}>Why Us</a>
            <a href="#contact" style={navLinkStyle}>Contact</a>
          </nav>

          {/* CTA Button */}
          <div>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.88rem' }}>
              Let's Talk <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section id="home" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '3rem', alignItems: 'center' }}>
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
              <h1 style={{ fontSize: 'clamp(2.5rem, 4.2vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                We Build Digital{' '}
                <span className="gradient-title-purple">
                  Solutions That Matter.
                </span>
              </h1>

              {/* Subheading */}
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '520px', marginBottom: '2rem' }}>
                <strong>NextcoreGent Technologies</strong> is a technology company focused on building modern, scalable and user-friendly digital products for businesses and a better tomorrow.
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
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', color: 'var(--text-muted)', fontSize: '0.86rem', fontWeight: 600 }}>
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
                  alt="NextcoreGent Tech Workspace" 
                  style={{ width: '100%', height: '100%', maxHeight: '490px', objectFit: 'cover', display: 'block' }}
                />

                {/* Top Overlay Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    background: 'rgba(7, 26, 58, 0.88)',
                    backdropFilter: 'blur(8px)',
                    color: '#fff',
                    padding: '0.55rem 1.1rem',
                    borderRadius: '12px',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
                  }}
                >
                  Turning Ideas Into Real Products ✨
                </div>

                {/* Bottom Overlay Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                    color: 'var(--color-navy)',
                    padding: '0.55rem 1rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
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

      {/* 3. TRUST STATS BAR */}
      <section style={{ padding: '2.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                📦
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>10+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Projects Delivered</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                👥
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>5+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Happy Clients</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                📊
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>100%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Client Satisfaction</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                🏆
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--color-navy)' }}>3+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>Years of Experience</div>
              </div>
            </div>

            <div style={{ padding: '0.75rem 1rem', background: '#F8FAFC', borderRadius: '12px', borderLeft: '3px solid var(--color-primary)', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              "Technology is best when it brings people together."
              <span style={{ display: 'block', fontStyle: 'normal', fontWeight: 700, color: 'var(--color-navy)', marginTop: '0.2rem' }}>— Matt Mullenweg</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Column: Story */}
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                • ABOUT US
              </div>
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '1.25rem' }}>
                Who We Are
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
                <strong>NextcoreGent Technologies</strong> is a team of passionate developers, designers and problem solvers founded by <strong>Ankit Patil</strong>. We help startups, businesses and enterprises turn their ideas into powerful digital products that scale reliably.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ padding: '1rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>10+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Projects Delivered</div>
                </div>
                <div style={{ padding: '1rem', background: '#fff', borderRadius: '12px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary)' }}>100%</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Client Satisfaction</div>
                </div>
              </div>

              <a href="#services" className="btn btn-primary">
                Learn More About Us <ArrowRight size={16} />
              </a>
            </div>

            {/* Right Column: Authentic Team Image */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img 
                  src="/assets/team-collab.jpg" 
                  alt="NextcoreGent Team" 
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </div>

              {/* Quote Card on Image */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  boxShadow: 'var(--shadow-card)',
                  maxWidth: '300px'
                }}
              >
                <div style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '0.35rem' }}>“</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--color-navy)', lineHeight: 1.4 }}>
                  Great products are built by great people.
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Let's build something amazing together.
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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
            {/* Service 1 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Code size={22} color="#9333EA" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Web Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Modern, responsive and high-converting business websites, custom web applications, and customer portals.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
              </a>
            </div>

            {/* Service 2 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Smartphone size={22} color="#0284C7" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Mobile App Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                High-performance Android and iOS native & cross-platform applications with intuitive user experience.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
              </a>
            </div>

            {/* Service 3 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cloud size={22} color="#16A34A" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>SaaS Development</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Scalable cloud-based SaaS software with multi-tenant architecture, automated subscription billing, and dashboards.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
              </a>
            </div>

            {/* Service 4 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Palette size={22} color="#D97706" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>UI/UX Product Design</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Clean, world-class user interfaces and wireframes that delight users and maximize conversion rates.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
              </a>
            </div>

            {/* Service 5 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FCE7F3', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Server size={22} color="#DB2777" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>API & Backend Solutions</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Secure, high-concurrency microservices, REST APIs, and database architectures using Node.js & Python.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
              </a>
            </div>

            {/* Service 6 */}
            <div className="saas-card">
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EDE9FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Headphones size={22} color="#7C3AED" />
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Maintenance & Support</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                24/7 server monitoring, performance tuning, security patches, and ongoing continuous feature updates.
              </p>
              <a href="#contact" style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                Discuss Your Project →
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
              <button onClick={() => setActiveCaseStudy(portfolioData[0])} className="btn btn-green">
                Explore FitCore →
              </button>
              <button onClick={() => setVideoModalOpen(true)} className="btn btn-secondary">
                <Play size={14} color="var(--color-navy)" /> View Demo
              </button>
            </div>
          </div>

          {/* Central Visual: Laptop Dashboard Mockup + Mobile Phone Mockup */}
          <div 
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-lg)',
              marginBottom: '3.5rem',
              position: 'relative'
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.65rem 1rem', background: '#1E293B', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontWeight: 800, color: '#22C55E', fontSize: '0.95rem' }}>FitCore</span>
                        <span style={{ fontSize: '0.7rem', color: '#94A3B8', padding: '0.15rem 0.45rem', borderRadius: '4px', background: 'rgba(255,255,255,0.06)' }}>Admin Pro</span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.72rem', color: '#94A3B8' }}>
                        <span>Total: <strong style={{ color: '#fff' }}>248</strong></span>
                        <span>Active: <strong style={{ color: '#22C55E' }}>186</strong></span>
                        <span>Revenue: <strong style={{ color: '#FBBF24' }}>₹48,250</strong></span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', minHeight: '190px' }}>
                      {/* Sidebar */}
                      <div style={{ background: '#090E1A', padding: '0.75rem 0.5rem', borderRight: '1px solid rgba(255,255,255,0.05)', fontSize: '0.68rem', color: '#94A3B8', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <div style={{ color: '#22C55E', fontWeight: 700, padding: '0.25rem 0.4rem', borderRadius: '4px', background: 'rgba(34,197,94,0.1)' }}>📊 Dashboard</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>👥 Members</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>📱 Check-in</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>💳 Subscriptions</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>🏋️ Trainers</div>
                        <div style={{ padding: '0.25rem 0.4rem' }}>⚙️ Settings</div>
                      </div>

                      {/* Main screen area */}
                      <div style={{ padding: '0.85rem' }}>
                        {/* 7 Days Bar Chart */}
                        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '0.65rem', marginBottom: '0.75rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#94A3B8', marginBottom: '0.4rem' }}>
                            <span>Member Activity (Past 7 Days)</span>
                            <span style={{ color: '#22C55E', fontWeight: 700 }}>+28% this week</span>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'flex-end', height: '55px', gap: '8px', justifyContent: 'space-between' }}>
                            {[40, 65, 52, 85, 70, 96, 88].map((h, i) => (
                              <div key={i} style={{ width: '100%', height: `${h}%`, background: '#22C55E', borderRadius: '3px', opacity: 0.9 }} />
                            ))}
                          </div>
                        </div>

                        {/* Recent members */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', background: 'rgba(255,255,255,0.04)', padding: '0.35rem 0.5rem', borderRadius: '5px', color: '#fff' }}>
                            <span>Rahul Sharma (VIP Gold)</span>
                            <span style={{ color: '#22C55E' }}>Checked in 07:15 AM</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', background: 'rgba(255,255,255,0.04)', padding: '0.35rem 0.5rem', borderRadius: '5px', color: '#fff' }}>
                            <span>Priya Verma (Pro Member)</span>
                            <span style={{ color: '#22C55E' }}>Checked in 07:42 AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metallic Laptop Base Chassis */}
                <div 
                  style={{
                    width: '106%',
                    margin: '0 -3%',
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
                  <span>⤴</span> Build a Healthier Tomorrow ✨
                </div>
              </div>
            </div>
          </div>

          {/* 6 Clean Feature Badges Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.15rem', color: '#0284C7' }}>
              <span>🔵</span> RingPe
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
            ✨ Click any project card to view comprehensive problem, solution, features, and technology stack.
          </div>
        </div>
      </section>

      {/* 8. WHY NEXTCOREGENT SECTION (2-COLUMN LAYOUT MATCHING IMAGE 4) */}
      <section id="why-us" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left side: Heading & CTA */}
            <div>
              <div style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                • WHY NEXTCOREGENT
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

                <a 
                  href="mailto:nexcoregen@ankitpatil1999.online" 
                  className="btn btn-white" 
                  style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}
                >
                  <Mail size={18} color="var(--color-navy)" /> Send an Email
                </a>
              </div>

              {/* Quick Contact & Interactive Form */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'flex-start' }}>
                {/* Contact Details Card */}
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem', color: '#fff' }}>
                    Quick Contact
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <Mail size={18} color="#38BDF8" />
                      <div>
                        <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>DROP US AN EMAIL</div>
                        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>nexcoregen@ankitpatil1999.online</div>
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
                <div style={{ background: 'rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(255, 255, 255, 0.15)' }}>
                  {formSubmitted ? (
                    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✅</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Thank You!</div>
                      <p style={{ color: '#CBD5E1', fontSize: '0.95rem' }}>
                        Your project inquiry has been received. Our team will contact you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setFormSubmitted(false)}
                        className="btn btn-white"
                        style={{ marginTop: '1.5rem', padding: '0.6rem 1.4rem', fontSize: '0.85rem' }}
                      >
                        Submit Another Inquiry
                      </button>
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
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1769E0, #38BDF8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1.1rem'
                }}
              >
                N
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                NextcoreGent Technologies
              </span>
            </div>

            {/* Links */}
            <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.88rem' }}>
              <a href="#home" style={footerLink}>Home</a>
              <a href="#about" style={footerLink}>About</a>
              <a href="#services" style={footerLink}>Services</a>
              <a href="#fitcore" style={footerLink}>Our Product</a>
              <a href="#portfolio" style={footerLink}>Portfolio</a>
              <a href="#contact" style={footerLink}>Contact</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <div>
              © {new Date().getFullYear()} NextcoreGent Technologies. All rights reserved.
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
              <span>Sitemap</span>
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
                The NextcoreGent Solution
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
          </div>
        </div>
      )}

      {/* Responsive helper */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-menu { display: flex !important; }
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
