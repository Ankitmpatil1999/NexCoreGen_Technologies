import React from 'react';
import { Cpu, Server, Database, Smartphone, ArrowDown } from 'lucide-react';

export const TechArchitecture: React.FC = () => {
  return (
    <section id="architecture" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-purple" style={{ marginBottom: '1rem' }}>
            <Cpu size={14} color="#c084fc" />
            <span>PROPRIETARY HARDWARE & CLUSTER ARCHITECTURE</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Engineering The Deep-Tech Moat:{' '}
            <span className="gradient-text-indigo">Hardware-to-Cloud Concurrency.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            NexCoreGen does not rely on off-the-shelf third-party middleware. We build the full vertical stack: 
            custom IoT firmware, sub-millisecond MQTT brokers, and multi-tenant cloud databases.
          </p>
        </div>

        {/* 4-Tier Interactive Architecture Stack */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '1050px', margin: '0 auto 4rem auto' }}>
          {/* Tier 1: Client Layer */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '1.75rem 2rem', 
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'linear-gradient(90deg, rgba(0, 242, 254, 0.06) 0%, rgba(13, 20, 36, 0.9) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Smartphone size={22} color="#00f2fe" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 700, letterSpacing: '0.05em' }}>
                    TIER 4 • CLIENT APPLICATION LAYER
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
                    React 19 Vite Web HUD & React Native Digital Pass
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>React 19 SPA</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>TypeScript</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>iOS & Android NFC Pass</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '1rem', lineHeight: 1.5 }}>
              Instant rendering with zero runtime bloat. Super Admins control multi-branch clubs through high-concurrency desktop HUDs while gym members tap through turnstiles via their smartphone digital wallet.
            </p>
          </div>

          {/* Connection Divider */}
          <div style={{ display: 'flex', justifyContent: 'center', color: '#6366f1' }}>
            <ArrowDown size={22} />
          </div>

          {/* Tier 2: Cloud Gateway & Concurrency */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '1.75rem 2rem', 
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.06) 0%, rgba(13, 20, 36, 0.9) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Server size={22} color="#818cf8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#818cf8', fontWeight: 700, letterSpacing: '0.05em' }}>
                    TIER 3 • CONCURRENCY & COMMERCE ENGINE
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
                    Node.js REST Services + Redis Real-Time State Broker
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>MQTT TLS 1.3</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>JWT RBAC Security</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>Sub-100ms API Latency</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '1rem', lineHeight: 1.5 }}>
              Handles thousands of concurrent turnstile tap events per second. Automatically processes subscription renewals, validates member active status, and manages the 10% platform take-rate escrow ledger.
            </p>
          </div>

          {/* Connection Divider */}
          <div style={{ display: 'flex', justifyContent: 'center', color: '#10b981' }}>
            <ArrowDown size={22} />
          </div>

          {/* Tier 3: Multi-Tenant Data Layer */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '1.75rem 2rem', 
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.06) 0%, rgba(13, 20, 36, 0.9) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Database size={22} color="#10b981" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 700, letterSpacing: '0.05em' }}>
                    TIER 2 • MULTI-TENANT PERSISTENCE LAYER
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
                    MongoDB Sharded Clusters with Strict Tenant Isolation
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>GymId Partitioning</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>Encrypted PII</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>Automated Daily Backups</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '1rem', lineHeight: 1.5 }}>
              Strict database isolation by <code style={{ color: '#10b981' }}>gymId</code> prevents any cross-tenant data leakage. Compliant with Indian data sovereignty regulations with automated failover replication.
            </p>
          </div>

          {/* Connection Divider */}
          <div style={{ display: 'flex', justifyContent: 'center', color: '#f59e0b' }}>
            <ArrowDown size={22} />
          </div>

          {/* Tier 4: Edge IoT & Physical Hardware */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '1.75rem 2rem', 
              border: '1px solid rgba(245, 158, 11, 0.3)',
              background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.06) 0%, rgba(13, 20, 36, 0.9) 100%)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={22} color="#fbbf24" />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#fbbf24', fontWeight: 700, letterSpacing: '0.05em' }}>
                    TIER 1 • PHYSICAL EDGE HARDWARE GATEWAY
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>
                    ESP32 Firmware + Solenoid Turnstile Relay Engine
                  </h3>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>&lt;200ms Trigger</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>Anti-Passback</span>
                <span className="pill-badge" style={{ fontSize: '0.75rem' }}>Offline Local Cache</span>
              </div>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.88rem', marginTop: '1rem', lineHeight: 1.5 }}>
              Proprietary micro-controller firmware integrates directly with tripod turnstiles, flap barriers, and motorized speed gates. If gym internet drops, offline cryptographic tokens continue granting valid member access uninterrupted.
            </p>
          </div>
        </div>

        {/* Security & Reliability Callout */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
            gap: '1.5rem',
            textAlign: 'center'
          }}
        >
          <div className="telemetry-box">
            <div style={{ color: '#00f2fe', fontSize: '1.8rem', fontWeight: 800 }}>&lt;100ms</div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>Cloud API Latency</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Redis in-memory caching</div>
          </div>

          <div className="telemetry-box">
            <div style={{ color: '#10b981', fontSize: '1.8rem', fontWeight: 800 }}>99.9%</div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>System Availability SLA</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>High-availability cloud clusters</div>
          </div>

          <div className="telemetry-box">
            <div style={{ color: '#818cf8', fontSize: '1.8rem', fontWeight: 800 }}>Zero-Trust</div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>Hardware Token Rotation</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Prevents pass sharing & fraud</div>
          </div>

          <div className="telemetry-box">
            <div style={{ color: '#fbbf24', fontSize: '1.8rem', fontWeight: 800 }}>100%</div>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.25rem' }}>Offline Gate Continuity</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>Zero member lockout on ISP cuts</div>
          </div>
        </div>
      </div>
    </section>
  );
};
