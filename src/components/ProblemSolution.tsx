import React from 'react';
import { AlertTriangle, CheckCircle2, Cpu } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section id="problem-solution" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-purple" style={{ marginBottom: '1rem' }}>
            <span>THE ENTERPRISE PROBLEM & UNFAIR ADVANTAGE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.25rem' }}>
            Why Legacy Fitness Tech is Broken & How{' '}
            <span className="gradient-text-indigo">NexCoreGen Solves It.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            The physical fitness and club management sector has exploded into a ₹28,000 Cr industry in India, 
            yet 85% of operators still bleed capital through fragmented systems and unintegrated hardware.
          </p>
        </div>

        {/* Side by Side Contrast Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem' 
          }}
        >
          {/* Legacy Broken Approach */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '2.5rem 2rem', 
              borderColor: 'rgba(244, 63, 94, 0.25)',
              background: 'linear-gradient(180deg, rgba(244, 63, 94, 0.05) 0%, rgba(13, 20, 36, 0.7) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div 
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '10px', 
                  background: 'rgba(244, 63, 94, 0.15)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <AlertTriangle size={20} color="#f43f5e" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fca5a5' }}>
                The Legacy Dilemma (85% of Market)
              </h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f43f5e', fontSize: '1.2rem', lineHeight: 1 }}>✕</span>
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Hardware-Software Disconnect
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Turnstiles and biometric sensors run on siloed offline DVRs. No link to member subscription validity, causing massive unauthorized entry fraud.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f43f5e', fontSize: '1.2rem', lineHeight: 1 }}>✕</span>
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Severe Revenue Leakage
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Trainers negotiate side deals; front desk logs entries on paper/Excel; expired members continue working out undetected.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f43f5e', fontSize: '1.2rem', lineHeight: 1 }}>✕</span>
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Blind Multi-Branch Operations
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Franchise owners have zero real-time visibility into foot traffic, equipment usage, or daily earnings across cities.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#f43f5e', fontSize: '1.2rem', lineHeight: 1 }}>✕</span>
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Zero Secondary Commerce Capture
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Supplements and merchandise sales happen informally through cash, losing gyms and platforms high-margin retail profits.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* NexCoreGen Solution */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '2.5rem 2rem', 
              borderColor: 'rgba(0, 242, 254, 0.35)',
              background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(13, 20, 36, 0.85) 100%)',
              boxShadow: '0 20px 50px -10px rgba(0, 242, 254, 0.15)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div 
                style={{ 
                  width: '38px', 
                  height: '38px', 
                  borderRadius: '10px', 
                  background: 'rgba(0, 242, 254, 0.2)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}
              >
                <Cpu size={20} color="#00f2fe" />
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#00f2fe' }}>
                The NexCoreGen Unified OS
              </h3>
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Proprietary Sub-200ms Turnstile IoT Sync
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Turnstile hardware directly verifies cryptographic tokens and biometrics in real time. Expired memberships are instantly locked out.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Zero Revenue Leakage Guarantee
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Automated billing, trainer commission escrow, and dynamic member passes eliminate buddy punching and unauthorized access.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Pan-India Franchise Command Center
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Super Admins view live floor occupancy, membership renewal run-rates, and multi-club financial telemetry from any device.
                  </p>
                </div>
              </li>

              <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#f8fafc', display: 'block', marginBottom: '0.2rem' }}>
                    Integrated POS Store with 10% SaaS Rake
                  </strong>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.5 }}>
                    Built-in nutrition & supplement store creates a high-margin secondary revenue engine for both gym owners and NexCoreGen.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
