import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck,
  MessageCircle,
  Phone,
  Zap,
  Building,
  Sparkles,
  Sliders
} from 'lucide-react';
import { Logo } from './Logo';

interface FitCorePageProps {
  onBackToHome: () => void;
  onNavigateToContact?: () => void;
}

export const FitCorePage: React.FC<FitCorePageProps> = ({ onBackToHome, onNavigateToContact }) => {
  // Video player controls
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Showcase Active Tab
  const [activeTab, setActiveTab] = useState<'web' | 'mobile' | 'video'>('web');

  // ROI Calculator State
  const [memberCount, setMemberCount] = useState<number>(250);
  const avgMonthlyFee = 1500; // avg gym fee in INR
  const leakageRate = 0.18; // ~18% lost fees due to proxy/expired members
  const uncollectedFeesRecovered = Math.round(memberCount * avgMonthlyFee * leakageRate);
  const hoursSavedPerMonth = Math.round(memberCount * 0.18); // ~45 hours for 250 members
  const annualProfitIncrease = uncollectedFeesRecovered * 12;

  // Interactive Gate Tap Simulation in Mobile tab
  const [mobileGateStatus, setMobileGateStatus] = useState<'IDLE' | 'SCANNING' | 'UNLOCKED'>('IDLE');

  const triggerMobileGateTap = () => {
    if (mobileGateStatus !== 'IDLE') return;
    setMobileGateStatus('SCANNING');
    setTimeout(() => {
      setMobileGateStatus('UNLOCKED');
      setTimeout(() => setMobileGateStatus('IDLE'), 3000);
    }, 180); // 180ms sub-200ms target!
  };

  // Demo form state
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [demoData, setDemoData] = useState({
    gymName: '',
    ownerName: '',
    phone: '',
    city: 'Nagpur',
    hasTurnstile: 'no'
  });

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDemoSubmitted(true);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF', color: '#0F172A', fontFamily: 'inherit' }}>
      {/* 1. TOP STICKY NAVBAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '0.85rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Brand and Back Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button
              onClick={onBackToHome}
              className="btn btn-secondary"
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                borderRadius: '8px'
              }}
            >
              <ArrowLeft size={16} /> Back to NexCoreGen
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                onClick={onBackToHome}
                style={{
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#071A3A',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 8px rgba(7, 26, 58, 0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <Logo variant="dark" size="sm" />
              </div>
              <div style={{ height: '24px', width: '1px', background: '#E2E8F0' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #16A34A, #10B981)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontWeight: 900,
                    fontSize: '0.95rem',
                    boxShadow: '0 2px 8px rgba(22, 163, 74, 0.3)'
                  }}
                >
                  🏋️
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                  FitCore <span style={{ color: '#16A34A', fontSize: '0.82rem', fontWeight: 700 }}>OS</span>
                </span>
              </div>
            </div>
          </div>

          {/* Quick Page Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.88rem', fontWeight: 600 }}>
            <a href="#showcase" style={navLink}>Product Demos</a>
            <a href="#why-fitcore" style={navLink}>Why Gyms Buy</a>
            <a href="#comparison" style={navLink}>Old vs FitCore</a>
            <a href="#roi-calculator" style={navLink}>ROI Calculator</a>
            <a href="#pricing" style={navLink}>Hardware & Pricing</a>
            <a
              href="#book-demo"
              className="btn"
              style={{ background: '#16A34A', color: '#fff', padding: '0.55rem 1.25rem', fontSize: '0.85rem', borderRadius: '8px' }}
            >
              Book Live Demo →
            </a>
          </nav>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section style={{ padding: '4.5rem 0 3.5rem 0', background: 'radial-gradient(circle at 50% 0%, #ECFDF5 0%, #FFFFFF 70%)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {/* Product Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 1rem',
              background: '#DCFCE7',
              border: '1px solid #86EFAC',
              borderRadius: '999px',
              fontSize: '0.82rem',
              fontWeight: 800,
              color: '#15803D',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em'
            }}
          >
            <Sparkles size={15} /> FLAGSHIP GYM MANAGEMENT SAAS & TURNSTILE IOT
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: 'var(--color-navy)',
              marginBottom: '1.25rem'
            }}
          >
            The Operating System for{' '}
            <span style={{ background: 'linear-gradient(135deg, #16A34A, #059669)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Modern Smart Gyms.
            </span>
          </h1>

          {/* Subheading */}
          <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.65, maxWidth: '750px', margin: '0 auto 2.25rem auto' }}>
            FitCore connects your <strong>Web Admin Portal</strong>, <strong>Member Mobile Pass</strong>, and <strong>Hardware Turnstile Flap Barriers</strong> into one unified system. Stop revenue leakage, automate fee collection via WhatsApp, and manage 100 to 10,000+ members seamlessly.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a
              href="#showcase"
              className="btn"
              style={{
                background: '#16A34A',
                color: '#fff',
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                boxShadow: '0 4px 18px rgba(22, 163, 74, 0.35)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <Play size={18} fill="#fff" /> Watch Application Tour
            </a>

            <a
              href="#book-demo"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Book Live Turnstile Demo <ArrowRight size={16} />
            </a>

            <a
              href="https://wa.me/919209282289?text=Hello%20Ankit,%20I%20want%20to%20know%20more%20about%20FitCore%20Gym%20Management%20and%20Turnstile%20Hardware"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <MessageCircle size={18} /> Chat with Founder
            </a>
          </div>

          {/* 4 Trust Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))',
              gap: '1.25rem',
              padding: '1.25rem',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 8px 30px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Zap size={20} color="#16A34A" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-navy)' }}>&lt; 180ms</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Turnstile Gate Speed</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={20} color="#1769E0" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-navy)' }}>Zero Proxy</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Anti-Passback Lock</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MessageCircle size={20} color="#D97706" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-navy)' }}>WhatsApp Dues</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Automated Reminders</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Building size={20} color="#9333EA" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--color-navy)' }}>Multi-Branch</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Franchise Cloud HUD</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DUAL APPLICATION & VIDEO SHOWCASE SECTION */}
      <section id="showcase" style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • SEE FITCORE IN ACTION
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Web Admin Portal, Mobile Pass & Hardware Gate
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
              Everything a gym owner needs on desktop, plus a sleek mobile experience for members and automated turnstile gate sync.
            </p>
          </div>

          {/* Showcase Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('web')}
              style={{
                ...tabBtnStyle,
                background: activeTab === 'web' ? '#16A34A' : '#F1F5F9',
                color: activeTab === 'web' ? '#FFFFFF' : 'var(--color-navy)',
                boxShadow: activeTab === 'web' ? '0 4px 14px rgba(22,163,74,0.3)' : 'none'
              }}
            >
              🖥️ Gym Owner Web Admin Portal
            </button>

            <button
              onClick={() => setActiveTab('mobile')}
              style={{
                ...tabBtnStyle,
                background: activeTab === 'mobile' ? '#16A34A' : '#F1F5F9',
                color: activeTab === 'mobile' ? '#FFFFFF' : 'var(--color-navy)',
                boxShadow: activeTab === 'mobile' ? '0 4px 14px rgba(22,163,74,0.3)' : 'none'
              }}
            >
              📱 Member Mobile Pass (App)
            </button>

            <button
              onClick={() => setActiveTab('video')}
              style={{
                ...tabBtnStyle,
                background: activeTab === 'video' ? '#16A34A' : '#F1F5F9',
                color: activeTab === 'video' ? '#FFFFFF' : 'var(--color-navy)',
                boxShadow: activeTab === 'video' ? '0 4px 14px rgba(22,163,74,0.3)' : 'none'
              }}
            >
              🎬 Live Turnstile Hardware Video
            </button>
          </div>

          {/* TAB 1: WEB ADMIN DASHBOARD SIMULATION */}
          {activeTab === 'web' && (
            <div
              style={{
                background: '#040711',
                borderRadius: '24px',
                padding: '1.75rem',
                border: '1px solid rgba(255,255,255,0.1)',
                boxShadow: '0 25px 50px -12px rgba(7, 26, 58, 0.35)',
                color: '#fff'
              }}
            >
              {/* Window Controls Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.85rem', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', gap: '0.45rem' }}>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#EF4444' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#F59E0B' }}></span>
                  <span style={{ width: '11px', height: '11px', borderRadius: '50%', background: '#10B981' }}></span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#94A3B8', fontWeight: 600 }}>
                  FitCore OS • Central Gym Owner Management Console (Live Demo Simulator)
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.78rem', fontWeight: 700 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span> Turnstile IoT Connected
                </div>
              </div>

              {/* Dashboard Layout */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {/* Metric 1: Live Members */}
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Total Registered Members</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', margin: '0.35rem 0' }}>348</div>
                  <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.78rem' }}>
                    <span style={{ color: '#10B981', fontWeight: 700 }}>🟢 294 Active</span>
                    <span style={{ color: '#F59E0B', fontWeight: 700 }}>🟡 38 Due Soon</span>
                    <span style={{ color: '#EF4444', fontWeight: 700 }}>🔴 16 Blocked</span>
                  </div>
                </div>

                {/* Metric 2: Today's Revenue */}
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Today's Collections (UPI + Cash)</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#38BDF8', margin: '0.35rem 0' }}>₹48,250</div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                    Automated invoices issued • GST compliant
                  </div>
                </div>

                {/* Metric 3: Live Floor Footfall */}
                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase', fontWeight: 700 }}>Current Gym Floor Occupancy</div>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: '#10B981', margin: '0.35rem 0' }}>42 / 120</div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                    Turnstile Gate #01: Ready • Sub-200ms
                  </div>
                </div>
              </div>

              {/* Lower Section: Member Live Feed & WhatsApp Queue */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginTop: '1.25rem' }}>
                {/* Real-Time Gate Logs */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Zap size={16} color="#10B981" /> Live Turnstile Access Telemetry
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0.75rem', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', borderLeft: '3px solid #10B981' }}>
                      <span><strong>Rahul Sharma</strong> (Annual VIP)</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>QR PASS GRANTED (162ms)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0.75rem', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', borderLeft: '3px solid #10B981' }}>
                      <span><strong>Priya Verma</strong> (Pro 6-Month)</span>
                      <span style={{ color: '#10B981', fontWeight: 700 }}>NFC CARD GRANTED (148ms)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.55rem 0.75rem', background: 'rgba(239,68,68,0.1)', borderRadius: '8px', borderLeft: '3px solid #EF4444' }}>
                      <span><strong>Vikas Deshmukh</strong> (Expired - 4 Days)</span>
                      <span style={{ color: '#EF4444', fontWeight: 700 }}>GATE LOCKED (FEE DUE)</span>
                    </div>
                  </div>
                </div>

                {/* Automated WhatsApp Dues Queue */}
                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff', marginBottom: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MessageCircle size={16} color="#25D366" /> Automated WhatsApp Fee Recovery Engine
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem' }}>
                    <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.72rem', marginBottom: '0.25rem' }}>
                        <span>To: Amit Kulkarni (+91 9822******)</span>
                        <span style={{ color: '#25D366' }}>SENT VIA WHATSAPP ✓✓</span>
                      </div>
                      <div style={{ color: '#E2E8F0', fontStyle: 'italic', fontSize: '0.78rem' }}>
                        "Hi Amit, your FitCore Gold Pass renews in 2 days. Click here to pay ₹1,499 via UPI & keep your turnstile pass active: [pay.fitcore.in/r/942]"
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.25rem', fontSize: '0.78rem', color: '#94A3B8' }}>
                      <span>Fee Collection Success: <strong>92.4%</strong></span>
                      <span style={{ color: '#38BDF8' }}>Zero Manual Phone Calls</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEMBER MOBILE APP SIMULATION */}
          {activeTab === 'mobile' && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center',
                background: '#F8FAFC',
                borderRadius: '24px',
                padding: '2.5rem',
                border: '1px solid #E2E8F0'
              }}
            >
              {/* Left Column: Mobile App Mockup */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    width: '320px',
                    borderRadius: '40px',
                    background: '#0B132B',
                    padding: '12px',
                    boxShadow: '0 25px 60px -15px rgba(0,0,0,0.3)',
                    border: '4px solid #1E293B',
                    position: 'relative'
                  }}
                >
                  {/* Camera notch */}
                  <div style={{ width: '120px', height: '18px', background: '#000', borderRadius: '0 0 12px 12px', margin: '0 auto 10px auto' }}></div>

                  {/* App Screen Content */}
                  <div style={{ background: '#0F172A', borderRadius: '28px', padding: '1.25rem', color: '#fff' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem' }}>🏋️</div>
                        <span style={{ fontWeight: 800, fontSize: '0.9rem' }}>FitCore Member</span>
                      </div>
                      <span style={{ background: 'rgba(22,163,74,0.2)', color: '#4ADE80', fontSize: '0.68rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: '999px' }}>
                        ACTIVE VIP
                      </span>
                    </div>

                    {/* Member Name */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Welcome back,</div>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>Rahul Sharma</div>
                    </div>

                    {/* Digital QR Gate Pass Card */}
                    <div
                      style={{
                        background: mobileGateStatus === 'UNLOCKED' ? 'linear-gradient(135deg, #15803D, #16A34A)' : 'linear-gradient(135deg, #1E293B, #0F172A)',
                        border: `2px solid ${mobileGateStatus === 'UNLOCKED' ? '#86EFAC' : '#334155'}`,
                        borderRadius: '16px',
                        padding: '1.25rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <div style={{ fontSize: '0.72rem', color: '#CBD5E1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                        DIGITAL TURNSTILE PASS
                      </div>

                      {/* QR Box */}
                      <div
                        style={{
                          width: '130px',
                          height: '130px',
                          background: '#FFFFFF',
                          borderRadius: '12px',
                          margin: '0 auto 0.85rem auto',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                          position: 'relative'
                        }}
                      >
                        <div style={{ fontSize: '3.5rem' }}>📱</div>
                        {mobileGateStatus === 'SCANNING' && (
                          <div style={{ position: 'absolute', inset: 0, background: 'rgba(22,163,74,0.3)', borderRadius: '12px', border: '2px solid #16A34A' }}></div>
                        )}
                      </div>

                      <button
                        onClick={triggerMobileGateTap}
                        disabled={mobileGateStatus !== 'IDLE'}
                        style={{
                          width: '100%',
                          background: mobileGateStatus === 'UNLOCKED' ? '#FFFFFF' : '#16A34A',
                          color: mobileGateStatus === 'UNLOCKED' ? '#15803D' : '#FFFFFF',
                          border: 'none',
                          padding: '0.65rem',
                          borderRadius: '8px',
                          fontWeight: 800,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem'
                        }}
                      >
                        {mobileGateStatus === 'IDLE' && '⚡ Tap to Test Gate Access'}
                        {mobileGateStatus === 'SCANNING' && 'Verifying Token (160ms)...'}
                        {mobileGateStatus === 'UNLOCKED' && '✅ Gate Unlocked! (162ms)'}
                      </button>
                    </div>

                    {/* Today's Workout Routine */}
                    <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '12px', padding: '0.85rem', fontSize: '0.82rem' }}>
                      <div style={{ fontWeight: 700, color: '#CBD5E1', marginBottom: '0.25rem' }}>Today's Target: Chest & Triceps</div>
                      <div style={{ color: '#94A3B8', fontSize: '0.75rem' }}>Trainer: Coach Amit • 6:00 PM Slot</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Mobile App Capabilities */}
              <div>
                <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  A Delighted Gym Member Experience
                </div>
                <h3 style={{ fontSize: '1.85rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                  No Plastic Cards. No Forgotten Keys. Just 1-Tap Entry.
                </h3>
                <p style={{ color: '#64748B', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  Members download the branded FitCore Android or iOS app. Their digital QR token rotates dynamically every 15 seconds to completely prevent screenshot sharing and unauthorized guest entries.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={16} color="#16A34A" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)' }}>Dynamic Anti-Screenshot QR Code:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.88rem' }}>Rotating cryptographic token unlocks turnstiles under 200ms; cannot be forwarded on WhatsApp.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={16} color="#16A34A" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)' }}>1-Tap In-App UPI Renewal:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.88rem' }}>Members renew via Google Pay, PhonePe, or Paytm; turnstile access renews instantly.</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Check size={16} color="#16A34A" />
                    </div>
                    <div>
                      <strong style={{ color: 'var(--color-navy)' }}>Live Crowd Radar:</strong>
                      <div style={{ color: '#64748B', fontSize: '0.88rem' }}>Members can check live gym crowd levels from home before leaving for workout.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REAL HARDWARE TURNSTILE VIDEO */}
          {activeTab === 'video' && (
            <div
              style={{
                background: '#040711',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
                maxWidth: '960px',
                margin: '0 auto'
              }}
            >
              <div style={{ padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                  <span style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>
                    FitCore Hardware & Turnstile Flap Barrier Deployment Reel
                  </span>
                  <span style={{ display: 'block', color: '#94A3B8', fontSize: '0.78rem' }}>
                    Real fitness club installation with sub-200ms optical turnstile gate trigger
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={togglePlay}
                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}
                  >
                    {isPlaying ? <><Pause size={14} /> Pause</> : <><Play size={14} /> Play</>}
                  </button>
                  <button
                    onClick={toggleMute}
                    style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem' }}
                  >
                    {isMuted ? <><VolumeX size={14} /> Unmute</> : <><Volume2 size={14} /> Mute</>}
                  </button>
                </div>
              </div>

              <div style={{ position: 'relative', background: '#000' }}>
                <video
                  ref={videoRef}
                  src="/assets/fitcore-reel.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  style={{ width: '100%', maxHeight: '550px', display: 'block' }}
                />
              </div>

              <div style={{ padding: '1.25rem 1.75rem', background: '#071A3A', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>
                  Interested in installing this smart turnstile setup at your fitness club?
                </div>
                <a
                  href="#book-demo"
                  className="btn"
                  style={{ background: '#16A34A', color: '#fff', padding: '0.55rem 1.25rem', fontSize: '0.85rem' }}
                >
                  Book Hardware Site Visit →
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. WHY GYM OWNERS ARE BUYING FITCORE (CORE ADVANTAGES) */}
      <section id="why-fitcore" style={{ padding: '6rem 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • THE GYM OWNER'S BIGGEST ADVANTAGE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Why Indian Gym Owners Are Switching to FitCore
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Most gym software only keeps names on an Excel sheet. FitCore actually stops lost revenue at the front gate and recovers unpaid fees automatically.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Advantage 1 */}
            <div className="saas-card" style={{ borderTop: '4px solid #EF4444' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FEE2E2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
                🛑
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                1. Stops Revenue Leakage & Proxy Entries
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                <strong>The Problem:</strong> Traditional gyms lose ₹25,000 to ₹50,000 every single month. Friends sneak in, and members whose fees expired 2 weeks ago keep working out because trainers feel awkward stopping them.
              </p>
              <div style={{ background: '#EFF6FF', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: '#1E40AF', borderLeft: '3px solid #1769E0' }}>
                <strong>FitCore Fix:</strong> Turnstile gate physically locks the instant membership expires. Sub-200ms QR checks guarantee only paid members enter.
              </div>
            </div>

            {/* Advantage 2 */}
            <div className="saas-card" style={{ borderTop: '4px solid #16A34A' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
                💬
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                2. Automated WhatsApp Fee Recovery
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                <strong>The Problem:</strong> Gym owners hate making uncomfortable fee collection calls. Paper receipt slips get thrown away, and receptionists forget to follow up.
              </p>
              <div style={{ background: '#F0FDF4', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: '#166534', borderLeft: '3px solid #16A34A' }}>
                <strong>FitCore Fix:</strong> Automated friendly WhatsApp alerts with direct 1-click UPI links send reminders before expiry and on due date. Once paid, the gate immediately re-enables access!
              </div>
            </div>

            {/* Advantage 3 */}
            <div className="saas-card" style={{ borderTop: '4px solid #1769E0' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
                📊
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                3. Total Peace of Mind from Anywhere
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                <strong>The Problem:</strong> Owners are held hostage at the gym reception desk. If they leave for a day, cash receipts go missing and attendance registers are neglected.
              </p>
              <div style={{ background: '#EFF6FF', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: '#1E40AF', borderLeft: '3px solid #1769E0' }}>
                <strong>FitCore Fix:</strong> Cloud telemetry gives live occupancy, today's collections, new admissions, and trainer attendance on the owner's phone 24/7 from anywhere in the world.
              </div>
            </div>

            {/* Advantage 4 */}
            <div className="saas-card" style={{ borderTop: '4px solid #9333EA' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#F3E8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.5rem' }}>
                ⚙️
              </div>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
                4. Single Hardware + Software Provider
              </h3>
              <p style={{ color: '#64748B', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                <strong>The Problem:</strong> Software companies blame the biometric vendor; biometric vendors blame the turnstile fabricator. Gym owners are stuck in the middle.
              </p>
              <div style={{ background: '#FAF5FF', padding: '0.85rem', borderRadius: '10px', fontSize: '0.85rem', color: '#6B21A8', borderLeft: '3px solid #9333EA' }}>
                <strong>FitCore Fix:</strong> Nexcoregen Technologies engineers both the turnstile IoT controllers and the cloud software in-house. Single trusted support team across India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE VS AFTER COMPARISON TABLE */}
      <section id="comparison" style={{ padding: '5.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • THE TRANSFORMATION
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)' }}>
              Traditional Gym vs FitCore Smart Gym
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #CBD5E1' }}>
                  <th style={{ padding: '1.2rem', color: 'var(--color-navy)', fontWeight: 800 }}>Feature / Workflow</th>
                  <th style={{ padding: '1.2rem', color: '#EF4444', fontWeight: 800, width: '42%' }}>❌ Traditional Gym (Manual / Excel)</th>
                  <th style={{ padding: '1.2rem', color: '#15803D', fontWeight: 800, width: '42%', background: '#ECFDF5' }}>✅ FitCore Smart Gym (Automated)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>Gate Access Control</td>
                  <td style={{ padding: '1rem', color: '#64748B' }}>Open door; anyone can enter. Front desk manually glances at people.</td>
                  <td style={{ padding: '1rem', color: '#166534', background: '#F0FDF4', fontWeight: 600 }}>Sub-200ms flap turnstile. Locks automatically if fee is unpaid.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>Fee Due Reminders</td>
                  <td style={{ padding: '1rem', color: '#64748B' }}>Awkward phone calls, delayed messages, forgotten follow-ups.</td>
                  <td style={{ padding: '1rem', color: '#166534', background: '#F0FDF4', fontWeight: 600 }}>Automated WhatsApp alerts with direct UPI payment links.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>Attendance & Registers</td>
                  <td style={{ padding: '1rem', color: '#64748B' }}>Paper registers with forged signatures and lost records.</td>
                  <td style={{ padding: '1rem', color: '#166534', background: '#F0FDF4', fontWeight: 600 }}>100% digital check-in logs with timestamp & photo verification.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>Owner Visibility</td>
                  <td style={{ padding: '1rem', color: '#64748B' }}>Must physically sit at the desk to prevent cash theft.</td>
                  <td style={{ padding: '1rem', color: '#166534', background: '#F0FDF4', fontWeight: 600 }}>Live telemetry on owner's phone: footfall, revenue, trainer logs.</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '1rem', fontWeight: 700, color: 'var(--color-navy)' }}>Member Mobile Pass</td>
                  <td style={{ padding: '1rem', color: '#64748B' }}>Plastic ID cards that members forget at home or lose.</td>
                  <td style={{ padding: '1rem', color: '#166534', background: '#F0FDF4', fontWeight: 600 }}>Dynamic anti-screenshot QR pass on member's mobile phone.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE GYM SAVINGS & ROI CALCULATOR */}
      <section id="roi-calculator" style={{ padding: '6rem 0', background: 'radial-gradient(circle at 50% 100%, #ECFDF5 0%, #F8FAFC 70%)' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • CALCULATE YOUR RETURN ON INVESTMENT
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '0.75rem' }}>
              How Much Revenue Will FitCore Save Your Gym?
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
              Adjust the slider to your active member count and see your estimated uncollected fees recovered.
            </p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid #E2E8F0',
              boxShadow: '0 20px 45px -10px rgba(0,0,0,0.06)'
            }}
          >
            {/* Slider Controls */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontWeight: 700, color: 'var(--color-navy)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sliders size={18} color="#16A34A" /> Active Gym Members:
                </span>
                <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#16A34A' }}>
                  {memberCount} Members
                </span>
              </div>
              <input
                type="range"
                min="80"
                max="800"
                step="10"
                value={memberCount}
                onChange={(e) => setMemberCount(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  height: '10px',
                  borderRadius: '5px',
                  accentColor: '#16A34A',
                  cursor: 'pointer'
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#94A3B8', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                <span>80 Members (Studio)</span>
                <span>400 Members (Standard Club)</span>
                <span>800 Members (Franchise)</span>
              </div>
            </div>

            {/* Results Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
              <div style={{ background: '#F0FDF4', padding: '1.5rem', borderRadius: '16px', border: '1px solid #BBF7D0', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#15803D', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Monthly Fees Recovered
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#166534' }}>
                  ₹{uncollectedFeesRecovered.toLocaleString('en-IN')}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#15803D', marginTop: '0.2rem' }}>
                  Zero proxy workouts / missed dues
                </div>
              </div>

              <div style={{ background: '#EFF6FF', padding: '1.5rem', borderRadius: '16px', border: '1px solid #BFDBFE', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#1E40AF', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Admin Time Saved
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1D4ED8' }}>
                  {hoursSavedPerMonth} Hrs/mo
                </div>
                <div style={{ fontSize: '0.75rem', color: '#1E40AF', marginTop: '0.2rem' }}>
                  Automated WhatsApp & QR entry
                </div>
              </div>

              <div style={{ background: '#FEF3C7', padding: '1.5rem', borderRadius: '16px', border: '1px solid #FDE68A', textAlign: 'center' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#B45309', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  Annual Profit Boost
                </div>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#92400E' }}>
                  ₹{(annualProfitIncrease / 100000).toFixed(1)} Lakhs
                </div>
                <div style={{ fontSize: '0.75rem', color: '#B45309', marginTop: '0.2rem' }}>
                  Direct to gym owner's bottom line
                </div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a
                href="#book-demo"
                className="btn"
                style={{ background: '#16A34A', color: '#fff', padding: '0.85rem 2rem', fontSize: '0.95rem' }}
              >
                Claim Your Free Hardware Trial & Trial Access →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HARDWARE & PRICING PACKAGES */}
      <section id="pricing" style={{ padding: '6rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • SIMPLE & TRANSPARENT PRICING
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Choose the Right Setup for Your Gym
            </h2>
            <p style={{ color: '#64748B', fontSize: '1.05rem' }}>
              Whether you want cloud software with mobile QR entry or full automated turnstile flap barrier hardware, we have you covered.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'stretch' }}>
            {/* Tier 1: Starter */}
            <div className="saas-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  FOR LOCAL FITNESS STUDIOS
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Starter Cloud
                </h3>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  ₹14,999 <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>/ year</span>
                </div>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Full software stack with mobile QR scanner. No hardware turnstile required.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#334155', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Up to 150 Active Members</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Web Admin Portal & Billing</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Digital Member Onboarding & KYC</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Mobile Phone QR Attendance Scanner</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Automated WhatsApp Reminders</li>
                </ul>
              </div>

              <a
                href="#book-demo"
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Choose Starter →
              </a>
            </div>

            {/* Tier 2: Pro Studio (Most Popular with Turnstile) */}
            <div
              className="saas-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '2px solid #16A34A',
                boxShadow: '0 12px 30px rgba(22,163,74,0.15)',
                position: 'relative'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-13px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#16A34A',
                  color: '#fff',
                  padding: '0.2rem 1rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.05em'
                }}
              >
                MOST POPULAR FOR CLUBS
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', color: '#16A34A', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  TURNSTILE IOT HARDWARE SYNC
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Pro Studio + Turnstile
                </h3>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#16A34A', marginBottom: '0.5rem' }}>
                  ₹34,999 <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>/ year + Hardware</span>
                </div>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  The gold standard: Turnstile flap barrier syncs with cloud software in sub-200ms.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#334155', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> <strong>Sub-200ms Hardware Gate Trigger</strong></li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Up to 600 Active Members</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Branded Member Mobile App (Android/iOS)</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Auto-Lock Gate on Expired Membership</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Live Floor Occupancy Radar</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Priority SLA & Hardware Support</li>
                </ul>
              </div>

              <a
                href="#book-demo"
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', background: '#16A34A' }}
              >
                Book Pro Studio Demo →
              </a>
            </div>

            {/* Tier 3: Enterprise Franchise */}
            <div className="saas-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  MULTI-BRANCH GYM CHAINS
                </div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  Enterprise Multi-Branch
                </h3>
                <div style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
                  ₹69,999 <span style={{ fontSize: '0.9rem', color: '#64748B', fontWeight: 500 }}>/ year + Hardware</span>
                </div>
                <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  Engineered for national fitness franchises with multi-lane turnstiles and biometric sync.
                </p>

                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#334155', marginBottom: '2rem' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Unlimited Active Members</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Multi-Branch Central Franchise HUD</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Multi-Turnstile Gate & Biometric Sync</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Nutrition & POS Supplement Store Engine</li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Check size={16} color="#16A34A" /> Dedicated 24/7 Key Account Manager</li>
                </ul>
              </div>

              <a
                href="#book-demo"
                className="btn btn-secondary"
                style={{ width: '100%', textAlign: 'center' }}
              >
                Contact Enterprise Sales →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOOK LIVE DEMO SECTION */}
      <section id="book-demo" style={{ padding: '6rem 0', background: '#071A3A', color: '#fff', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#4ADE80', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • SEE IT BEFORE YOU DECIDE
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#FFFFFF', marginBottom: '1rem' }}>
              Book a Free 15-Minute Live Demo
            </h2>
            <p style={{ color: '#CBD5E1', fontSize: '1.08rem', lineHeight: 1.6 }}>
              We will walk you through the Web Dashboard, Member Mobile App, and show how the sub-200ms Turnstile IoT Gateway integrates with your gym gates.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(10px)',
              borderRadius: '24px',
              padding: '2.5rem',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            {demoSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Demo Request Received!</h3>
                <p style={{ color: '#CBD5E1', fontSize: '1rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
                  Thank you! Our technical lead will call you at <strong>{demoData.phone}</strong> within 4 hours to arrange your live screen-share or on-site turnstile hardware demonstration.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <a
                    href={`https://wa.me/919209282289?text=Hi%20Ankit,%20I%20just%20submitted%20a%20demo%20request%20for%20FitCore%20for%20my%20gym%20${encodeURIComponent(demoData.gymName)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                    style={{ background: '#25D366', color: '#fff' }}
                  >
                    <MessageCircle size={16} /> Instant WhatsApp Connect
                  </a>
                  <button
                    onClick={() => setDemoSubmitted(false)}
                    className="btn btn-white"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={formLabel}>GYM / FITNESS CLUB NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Iron Forge Gym"
                      value={demoData.gymName}
                      onChange={(e) => setDemoData({ ...demoData, gymName: e.target.value })}
                      style={formInput}
                    />
                  </div>
                  <div>
                    <label style={formLabel}>YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Patil"
                      value={demoData.ownerName}
                      onChange={(e) => setDemoData({ ...demoData, ownerName: e.target.value })}
                      style={formInput}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={formLabel}>PHONE / WHATSAPP NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9209282289"
                      value={demoData.phone}
                      onChange={(e) => setDemoData({ ...demoData, phone: e.target.value })}
                      style={formInput}
                    />
                  </div>
                  <div>
                    <label style={formLabel}>CITY / LOCATION *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nagpur, Maharashtra"
                      value={demoData.city}
                      onChange={(e) => setDemoData({ ...demoData, city: e.target.value })}
                      style={formInput}
                    />
                  </div>
                </div>

                <div>
                  <label style={formLabel}>DO YOU CURRENTLY HAVE A TURNSTILE OR BIOMETRIC GATE?</label>
                  <select
                    value={demoData.hasTurnstile}
                    onChange={(e) => setDemoData({ ...demoData, hasTurnstile: e.target.value })}
                    style={{ ...formInput, background: '#0A1B38' }}
                  >
                    <option value="no">No, we want a turnstile gate + software complete setup</option>
                    <option value="existing">Yes, we have existing turnstile/biometric and want to integrate FitCore</option>
                    <option value="software-only">We only want cloud software with mobile QR scanner</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    background: '#16A34A',
                    color: '#fff',
                    padding: '0.9rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    width: '100%',
                    marginTop: '0.5rem'
                  }}
                >
                  Schedule Free Live Demonstration →
                </button>
              </form>
            )}

            {/* Direct WhatsApp Box */}
            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Phone size={20} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>PREFER DIRECT WHATSAPP OR CALL?</div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#fff' }}>+91 9209282289</div>
                </div>
              </div>

              <a
                href="https://wa.me/919209282289?text=Hello%20Ankit,%20I%20want%20a%20demo%20of%20FitCore%20for%20my%20gym"
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{ background: '#25D366', color: '#fff', padding: '0.65rem 1.4rem', fontSize: '0.88rem' }}
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer style={{ padding: '2.5rem 0', background: '#FFFFFF', borderTop: '1px solid #E2E8F0', textAlign: 'center', fontSize: '0.85rem', color: '#64748B' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              onClick={onBackToHome}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                background: '#071A3A',
                padding: '0.35rem 0.85rem',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <Logo variant="dark" size="sm" />
            </div>
            <div>
              © {new Date().getFullYear()} <strong>FitCore OS</strong> • A Proprietary Platform of <strong>Nexcoregen Technologies</strong>.
            </div>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <button onClick={onBackToHome} style={{ background: 'none', border: 'none', color: '#1769E0', cursor: 'pointer', fontWeight: 600 }}>
              Return to NexCoreGen Home
            </button>
            {onNavigateToContact && (
              <button onClick={onNavigateToContact} style={{ background: 'none', border: 'none', color: '#1769E0', cursor: 'pointer', fontWeight: 600 }}>
                Contact NexCoreGen
              </button>
            )}
            <span
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{ cursor: 'pointer', color: '#64748B' }}
            >
              Back to Top ↑
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

const navLink: React.CSSProperties = {
  color: '#475569',
  textDecoration: 'none',
  transition: 'color 0.2s ease'
};

const tabBtnStyle: React.CSSProperties = {
  padding: '0.75rem 1.5rem',
  borderRadius: '10px',
  border: 'none',
  fontWeight: 700,
  fontSize: '0.92rem',
  cursor: 'pointer',
  transition: 'all 0.2s ease'
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
