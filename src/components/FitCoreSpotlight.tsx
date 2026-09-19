import React, { useState, useRef } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Smartphone, 
  Check, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Building2 
} from 'lucide-react';
import type { PricingTier } from '../types';

interface FitCoreSpotlightProps {
  onOpenContact: () => void;
}

const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Club',
    priceYr: '₹14,999',
    period: '/ year',
    description: 'Ideal for boutique fitness studios and single-location local gyms looking to digitize.',
    memberCapacity: 'Up to 150 Active Members',
    hardwareSupport: 'Single Terminal QR Scanner',
    features: [
      'Digital Member Onboarding & KYC',
      'Basic QR Code Attendance Tracking',
      'Standard Financial & Revenue Reports',
      'Trainer Commission Calculator',
      'Community Push Announcements',
      'Email & Community Support'
    ]
  },
  {
    id: 'pro',
    name: 'Pro Studio',
    badge: 'MOST POPULAR',
    isPopular: true,
    priceYr: '₹34,999',
    period: '/ year',
    description: 'Engineered for high-footfall clubs requiring automated turnstile IoT access control.',
    memberCapacity: 'Up to 600 Active Members',
    hardwareSupport: 'Sub-200ms Smart Turnstile IoT Gateway',
    features: [
      'Hardware Turnstile Gate Sync (<200ms)',
      'Live Gym Floor Occupancy Radar',
      'Member Mobile App with NFC Digital Pass',
      'Trainer Workout & Diet Plan Studio',
      'Class & Equipment Scheduling Hub',
      'Priority SLA Support & WhatsApp Alerts'
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise VIP Flagship',
    badge: 'FRANCHISE READY',
    priceYr: '₹69,999',
    period: '/ year',
    description: 'Designed for national multi-branch franchise chains, luxury wellness clubs, and gym networks.',
    memberCapacity: 'Unlimited Active Members',
    hardwareSupport: 'Multi-Gate Turnstile & Biometric Sync',
    features: [
      'Pan-India Multi-Branch Franchise HUD',
      'Integrated Nutrition Store (10% SaaS Rake)',
      'Advanced Biometrics & Calorie Telemetry',
      'Zero-Trust Anti-Passback Hardware Logic',
      'Custom White-Label Mobile App Option',
      'Dedicated 24/7 Enterprise Key Account Manager'
    ]
  }
];

export const FitCoreSpotlight: React.FC<FitCoreSpotlightProps> = ({ onOpenContact }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section id="flagship" style={{ padding: '6rem 0', position: 'relative' }}>
      {/* Background ambient lighting */}
      <div 
        style={{
          position: 'absolute',
          top: '30%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(0, 242, 254, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <span className="pulse-dot pulse-dot-cyan"></span>
            <span>FLAGSHIP PRODUCT #01 • PRODUCTION PROVEN</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            FitCore OS:{' '}
            <span className="gradient-text-cyan">
              Pan-India Gym Management & Turnstile IoT Operating System.
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            The complete operating stack modernizing Indian fitness franchises. Combining edge hardware turnstiles, 
            instant NFC check-ins, multi-club analytics, and nutrition commerce.
          </p>
        </div>

        {/* 4 Feature Pillars Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* Pillar 1 */}
          <div className="glass-card-interactive" style={{ padding: '2rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(0, 242, 254, 0.12)', 
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Zap size={24} color="#00f2fe" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
              Sub-200ms Turnstile IoT
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Hardware-firmware sync for physical tripod and flap turnstiles. Dynamic QR & NFC credentials unlock gates in under 200ms with real-time floor occupancy counting.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="glass-card-interactive" style={{ padding: '2rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(99, 102, 241, 0.12)', 
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Building2 size={24} color="#818cf8" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
              Multi-Branch Franchise HUD
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Single pane of glass for national franchise leaders. Monitor 50+ gyms across Mumbai, Delhi, and Bangalore with live revenue, KYC compliance, and audit trails.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="glass-card-interactive" style={{ padding: '2rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(245, 158, 11, 0.12)', 
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <ShoppingBag size={24} color="#fbbf24" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
              Integrated POS Commerce
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Direct in-app store for supplements, whey protein, and gym merchandise. Deducts an automated 10% platform SaaS commission per sale with direct vendor fulfillment.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="glass-card-interactive" style={{ padding: '2rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(16, 185, 129, 0.12)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}
            >
              <Smartphone size={24} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff' }}>
              Member Pass & Biometrics
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              iOS & Android digital NFC pass, real-time calorie burn telemetry, class reservations, and personal trainer communication without front-desk friction.
            </p>
          </div>
        </div>

        {/* Video Showcase: Cinematic Club Experience Reel */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 5.5rem auto',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            overflow: 'hidden',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 242, 254, 0.15)'
          }}
        >
          {/* Header Bar */}
          <div 
            style={{
              padding: '1rem 1.5rem',
              background: 'rgba(11, 17, 30, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '0.5rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="pulse-dot pulse-dot-cyan"></span>
              <span style={{ fontWeight: 700, fontSize: '0.9rem', color: '#fff' }}>
                FITCORE EXPERIENCE CINEMATIC REEL
              </span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                (Real Club Environment Demonstration)
              </span>
            </div>

            {/* Video Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <button 
                onClick={togglePlay}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '0.4rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button 
                onClick={toggleMute}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '0.4rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  cursor: 'pointer'
                }}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                {isMuted ? 'Unmute' : 'Mute'}
              </button>
            </div>
          </div>

          {/* Video Container */}
          <div style={{ position: 'relative', background: '#000', maxHeight: '520px', overflow: 'hidden' }}>
            <video
              ref={videoRef}
              src="/assets/fitcore-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '520px',
                objectFit: 'cover',
                display: 'block'
              }}
            />

            {/* Overlay Telemetry HUD badge */}
            <div 
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                background: 'rgba(6, 9, 17, 0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '8px',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}
            >
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Zap size={18} color="#00f2fe" />
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                  FitCore Luxury Club Integration
                </div>
                <div style={{ fontSize: '0.7rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                  Active Turnstile Sync: 100% Operational
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Tier SaaS Subscription Monetization Engine */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <div className="pill-badge pill-purple" style={{ marginBottom: '1rem' }}>
            <span>HIGH-MARGIN RECURRING MONETIZATION</span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '1rem' }}>
            FitCore OS Pricing & SaaS Packages
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.5 }}>
            Predictable recurring B2B SaaS ARR coupled with a 10% gross transaction cut on all integrated nutrition orders.
          </p>
        </div>

        {/* Pricing Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {pricingTiers.map((tier) => (
            <div 
              key={tier.id}
              className="glass-panel"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: tier.isPopular ? '2px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                background: tier.isPopular 
                  ? 'linear-gradient(180deg, rgba(0, 242, 254, 0.09) 0%, rgba(13, 20, 36, 0.9) 100%)' 
                  : 'var(--bg-card)',
                boxShadow: tier.isPopular ? '0 20px 45px -10px rgba(0, 242, 254, 0.2)' : 'none'
              }}
            >
              {tier.badge && (
                <div 
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'linear-gradient(135deg, #00f2fe, #3b82f6)',
                    color: '#040914',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.9rem',
                    borderRadius: '9999px',
                    letterSpacing: '0.08em',
                    boxShadow: '0 4px 15px rgba(0, 242, 254, 0.4)'
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div>
                <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>
                  {tier.name}
                </h4>
                <p style={{ color: '#94a3b8', fontSize: '0.88rem', minHeight: '44px', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                  {tier.description}
                </p>

                {/* Price Display */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em' }}>
                    {tier.priceYr}
                  </span>
                  <span style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    {tier.period}
                  </span>
                </div>

                {/* Specs */}
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', marginBottom: '1.75rem', fontSize: '0.82rem' }}>
                  <div style={{ color: '#00f2fe', fontWeight: 600, marginBottom: '0.25rem' }}>
                    {tier.memberCapacity}
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    {tier.hardwareSupport}
                  </div>
                </div>

                {/* Feature List */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  {tier.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                      <Check size={16} color="#00f2fe" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                className={`btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'}`}
                style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem' }}
              >
                Deploy {tier.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
