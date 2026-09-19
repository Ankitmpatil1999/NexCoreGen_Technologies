import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Download, 
  Layers 
} from 'lucide-react';
import { DashboardShowcase } from './DashboardShowcase';

interface HeroProps {
  onOpenPitchDeck: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPitchDeck, onOpenContact }) => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        paddingTop: '8rem', 
        paddingBottom: '5rem',
        overflow: 'hidden' 
      }}
    >
      {/* Background glow meshes */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(0, 242, 254, 0.1) 50%, transparent 70%)',
          filter: 'blur(70px)',
          zIndex: 0,
          pointerEvents: 'none',
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Floating Category Tag */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div className="pill-badge pill-cyan" style={{ padding: '0.45rem 1.1rem' }}>
            <span className="pulse-dot pulse-dot-cyan"></span>
            <span>NEXT-GENERATION ENTERPRISE OS & IOT PLATFORMS</span>
          </div>
        </div>

        {/* Main Headline */}
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.4rem)', 
              fontWeight: 800, 
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '1.5rem'
            }}
          >
            Architecting The Operating Systems for the{' '}
            <span className="gradient-text-cyan">Physical Economy.</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 2vw, 1.28rem)', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.6,
              maxWidth: '780px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            <strong>NexCoreGen Technologies</strong> bridges high-throughput cloud infrastructure with 
            sub-200ms edge IoT hardware. Our flagship platform, <strong>FitCore OS</strong>, delivers 
            unrivaled turnstile access control, multi-branch franchise telemetry, and automated commerce for India's ₹28,000 Cr fitness market.
          </p>

          {/* Action CTAs */}
          <div 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '1rem',
              marginBottom: '3.5rem'
            }}
          >
            <a href="#bento-features" className="btn btn-primary" style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}>
              Explore FitCore OS Flagship
              <ArrowRight size={18} />
            </a>
            <button 
              onClick={onOpenPitchDeck} 
              className="btn btn-secondary" 
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
            >
              <Download size={18} color="#00f2fe" />
              Executive Pitch Deck
            </button>
            <button
              onClick={onOpenContact}
              className="btn btn-secondary"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
            >
              Schedule Founder Briefing
            </button>
          </div>
        </div>

        {/* 3D Visual Centerpiece: Dashboard Showcase */}
        <div style={{ marginBottom: '5rem' }}>
          <DashboardShowcase />
        </div>

        {/* Key Investor Metrics Ticker Bar */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1100px',
            margin: '0 auto 4rem auto',
            padding: '1.5rem 2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Metric 1 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(0, 242, 254, 0.1)', 
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Zap size={22} color="#00f2fe" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                &lt;200ms
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>IoT Turnstile Unlock Latency</div>
            </div>
          </div>

          {/* Metric 2 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(16, 185, 129, 0.1)', 
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <TrendingUp size={22} color="#10b981" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                ₹28,000+ Cr
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Indian Fitness & Health TAM</div>
            </div>
          </div>

          {/* Metric 3 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                border: '1px solid rgba(99, 102, 241, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <ShieldCheck size={22} color="#818cf8" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                99.9% Uptime
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Strict Multi-Tenant Isolation</div>
            </div>
          </div>

          {/* Metric 4 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div 
              style={{ 
                width: '46px', 
                height: '46px', 
                borderRadius: '12px', 
                background: 'rgba(245, 158, 11, 0.1)', 
                border: '1px solid rgba(245, 158, 11, 0.3)',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <Layers size={22} color="#fbbf24" />
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                SaaS + 10% Take
              </div>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Dual High-Margin Revenue Engine</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
