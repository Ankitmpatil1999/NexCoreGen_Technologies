import React from 'react';
import { Code, Award, Compass, Terminal } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <Compass size={14} color="#00f2fe" />
            <span>FOUNDERSHIP & CORE VALUES</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Led by Engineers.{' '}
            <span className="gradient-text-cyan">Built for Decades of Scale.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            NexCoreGen Technologies is founded on a singular conviction: the real world is overdue 
            for intelligent, high-concurrency operating systems that never fail.
          </p>
        </div>

        {/* Founder Spotlight Card */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 4.5rem auto',
            padding: '3rem',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(13, 20, 36, 0.9) 100%)',
            boxShadow: '0 20px 50px -15px rgba(0, 0, 0, 0.8)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
            {/* Founder Visual & Title */}
            <div style={{ textAlign: 'center' }}>
              <div 
                style={{
                  width: '130px',
                  height: '130px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem auto',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #6366f1 100%)',
                  padding: '3px',
                  boxShadow: '0 0 35px rgba(0, 242, 254, 0.3)'
                }}
              >
                <div 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: '#0a0f1d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '2.4rem',
                    fontWeight: 800
                  }}
                >
                  AP
                </div>
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.35rem' }}>
                Ankit Patil
              </h3>
              <div style={{ color: '#00f2fe', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.75rem' }}>
                Founder & Chief Systems Architect
              </div>
              <div className="pill-badge pill-cyan" style={{ fontSize: '0.75rem' }}>
                <span className="pulse-dot pulse-dot-cyan"></span>
                Full-Stack IoT & Systems Engineer
              </div>
            </div>

            {/* Founder Note & Mission */}
            <div>
              <div style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 600, marginBottom: '1rem', lineHeight: 1.4 }}>
                "We don't just write apps — we engineer the physical gate controllers, the cloud concurrency, and the commerce engines that keep businesses running."
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                At NexCoreGen Technologies, we are starting with <strong>FitCore OS</strong> because gym owners and franchise leaders in India have been neglected by legacy pen-and-paper or disjointed generic software. By proving sub-200ms turnstile IoT access control and instant POS monetization, we establish the blueprint for our entire physical economy product pipeline.
              </p>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                  <Code size={16} color="#00f2fe" />
                  <span>React 19 & TypeScript Core</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                  <Terminal size={16} color="#10b981" />
                  <span>ESP32 / MQTT IoT Firmware</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1', fontSize: '0.85rem' }}>
                  <Award size={16} color="#fbbf24" />
                  <span>Zero-Trust Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Principles Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}
        >
          <div className="glass-card-interactive" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#00f2fe', marginBottom: '0.5rem' }}>
              1. Engineering-First Ethos
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
              No marketing smoke and mirrors. Every claim we make is verified through sub-200ms telemetry benchmarks and production-ready source code.
            </p>
          </div>

          <div className="glass-card-interactive" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#818cf8', marginBottom: '0.5rem' }}>
              2. Hardware-Cloud Symbiosis
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
              True enterprise value lies at the intersection of physical sensors and cloud multi-tenancy. We own the complete communication protocol.
            </p>
          </div>

          <div className="glass-card-interactive" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#10b981', marginBottom: '0.5rem' }}>
              3. Absolute Offline Resilience
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
              In emerging markets like India, internet connections drop. Our offline edge caching ensures physical access never halts.
            </p>
          </div>

          <div className="glass-card-interactive" style={{ padding: '1.75rem' }}>
            <h4 style={{ fontSize: '1.15rem', color: '#fbbf24', marginBottom: '0.5rem' }}>
              4. High-Margin Real Cash Flows
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Combining recurring software licenses with direct 10% transaction fees ensures profitable unit economics from Day 1.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
