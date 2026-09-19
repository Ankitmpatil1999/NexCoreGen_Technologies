import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import type { ProductPipelineItem } from '../types';

interface ProductPipelineProps {
  onOpenPitchDeck: () => void;
  onOpenContact: () => void;
}

const pipelineItems: ProductPipelineItem[] = [
  {
    id: 'fitcore',
    name: 'FitCore OS',
    category: 'Fitness & Franchise Telemetry',
    tagline: 'Flagship Operating System for Pan-India Gyms & Clubs',
    description: 'Central multi-tenant OS unifying sub-200ms turnstile hardware, franchise analytics, POS commerce, and member mobile passes.',
    status: 'Flagship Live',
    statusColor: 'emerald',
    targetMarket: '₹28,000 Cr Fitness & Gym Chains',
    metrics: '<200ms Gate Sync • 99.9% Uptime',
    iconName: 'Cpu',
    features: [
      'Turnstile IoT hardware gateway',
      'Pan-India franchise Super Admin HUD',
      '10% take-rate nutrition store',
      'NFC mobile digital pass'
    ]
  },
  {
    id: 'nexretail',
    name: 'NexRetail OS',
    category: 'Autonomous Commerce',
    tagline: 'Frictionless Cashierless Retail & Shelf Sensor Mesh',
    description: 'Automating high-velocity retail, supplement hubs, and sports nutrition kiosks with RFID weight-sensor shelves and instant tap-and-go billing.',
    status: 'Private Alpha',
    statusColor: 'cyan',
    targetMarket: 'Smart Kiosks & Retail Chains',
    metrics: '99.4% Automated Cart Accuracy',
    iconName: 'Store',
    features: [
      'RFID & load-cell shelf telemetry',
      'Zero-wait checkout processing',
      'Automated inventory replenishment',
      'Theft-prevention sensor sync'
    ]
  },
  {
    id: 'nexaccess',
    name: 'NexAccess IoT Gateway',
    category: 'Universal Physical Security',
    tagline: 'Enterprise Turnstile & Biometric Edge Hardware Controller',
    description: 'Hardware controller board engineered to upgrade existing turnstiles, flap barriers, and magnetic doors in corporate offices and co-working spaces.',
    status: 'In Development',
    statusColor: 'purple',
    targetMarket: 'Corporate Campuses & Co-working',
    metrics: 'Universal Retrofit Architecture',
    iconName: 'Lock',
    features: [
      'Drop-in Wiegand & OSDP protocol support',
      'Cellular LTE / Wi-Fi failover redundancy',
      'Dynamic QR / Apple Pass tokenization',
      'Multi-tenant visitor management'
    ]
  },
  {
    id: 'nexpulse',
    name: 'NexPulse AI',
    category: 'Predictive Intelligence',
    tagline: 'Deep-Learning Churn & Revenue Optimization Engine',
    description: 'Predictive AI model analyzing member workout frequency, gate check-in lapses, and purchasing behavior to prevent cancellations before they happen.',
    status: 'R&D Concept',
    statusColor: 'amber',
    targetMarket: 'All NexCoreGen Platform Clients',
    metrics: '+24% Member Retention Lift',
    iconName: 'BrainCircuit',
    features: [
      'Automated retention outreach triggers',
      'Dynamic renewal discount pricing',
      'Trainer performance scoring',
      'Predictive lifetime value (LTV) cohorts'
    ]
  },
  {
    id: 'nexclinic',
    name: 'NexClinic OS',
    category: 'Physical Therapy & Clinical Health',
    tagline: 'Integrated Sports Medicine & Rehabilitation Suite',
    description: 'Bridging fitness clubs with clinical physiotherapists, orthopedics, and posture biomechanics telemetry for holistic rehabilitation.',
    status: 'R&D Concept',
    statusColor: 'cyan',
    targetMarket: 'Physiotherapy & Rehab Clinics',
    metrics: 'Cross-Ecosystem Synergies',
    iconName: 'Stethoscope',
    features: [
      'Clinical appointment & rehab tracking',
      'Trainer-physio collaborative notes',
      'Wearable motion sensor telemetry',
      'Insurance claim export reports'
    ]
  }
];

export const ProductPipeline: React.FC<ProductPipelineProps> = ({ onOpenPitchDeck, onOpenContact }) => {
  return (
    <section id="pipeline" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-purple" style={{ marginBottom: '1rem' }}>
            <Sparkles size={14} color="#c084fc" />
            <span>THE NEXT-GEN MULTI-PRODUCT ROADMAP</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            One Core Technology Platform.{' '}
            <span className="gradient-text-indigo">Many More Products to Come.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            FitCore OS is just the beginning. NexCoreGen Technologies is building a scalable ecosystem of 
            intelligent operating systems that connect the physical world with cloud software.
          </p>
        </div>

        {/* Pipeline Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            marginBottom: '4rem'
          }}
        >
          {pipelineItems.map((item) => (
            <div
              key={item.id}
              className="glass-card-interactive"
              style={{
                padding: '2.25rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: item.id === 'fitcore' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)',
                background: item.id === 'fitcore' 
                  ? 'linear-gradient(180deg, rgba(16, 185, 129, 0.07) 0%, rgba(13, 20, 36, 0.8) 100%)' 
                  : 'var(--bg-card)'
              }}
            >
              <div>
                {/* Header Row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.category}
                  </span>

                  <span 
                    className={`pill-badge pill-${item.statusColor}`}
                    style={{ fontSize: '0.72rem', padding: '0.2rem 0.65rem' }}
                  >
                    {item.status === 'Flagship Live' && <span className="pulse-dot pulse-dot-green"></span>}
                    {item.status}
                  </span>
                </div>

                {/* Product Name */}
                <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.5rem' }}>
                  {item.name}
                </h3>
                <p style={{ color: '#00f2fe', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>
                  {item.tagline}
                </p>

                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {item.description}
                </p>

                {/* Metrics Pill */}
                <div style={{ padding: '0.65rem 0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.8rem' }}>
                  <div style={{ color: '#64748b', fontSize: '0.7rem' }}>TARGET / ARCHITECTURE</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>{item.metrics}</div>
                </div>

                {/* Feature Bullets */}
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                  {item.features.map((feat, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                      <CheckCircle2 size={15} color="#818cf8" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.id === 'fitcore' ? (
                <a 
                  href="#flagship"
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem' }}
                >
                  Explore FitCore OS Deep Dive <ArrowRight size={16} />
                </a>
              ) : (
                <button
                  onClick={onOpenContact}
                  className="btn btn-secondary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '0.75rem' }}
                >
                  Inquire for Early Access
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Platform Synergy Advantage Callout */}
        <div 
          className="glass-panel"
          style={{
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(0, 242, 254, 0.05) 100%)',
            border: '1px solid rgba(99, 102, 241, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem'
          }}
        >
          <div style={{ maxWidth: '700px' }}>
            <h4 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.75rem' }}>
              The NexCoreGen Platform Flywheel
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Every product in our pipeline shares the same <strong>sub-200ms hardware concurrency layer</strong>, 
              multi-tenant database schemas, and unified commerce settlement engine. This enables rapid product launches with 70% lower engineering costs than single-product competitors.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={onOpenPitchDeck}
              className="btn btn-primary"
              style={{ padding: '0.8rem 1.4rem' }}
            >
              Review Investor Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
