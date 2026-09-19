import React, { useState } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Smartphone, 
  CheckCircle2, 
  Building2, 
  Lock, 
  Flame, 
  Heart, 
  QrCode,
  Radio
} from 'lucide-react';

export const BentoFeatures: React.FC = () => {
  // Tile 1: Turnstile Gate State
  const [gateUnlocked, setGateUnlocked] = useState(false);
  const [gateLatency, setGateLatency] = useState(156);
  const [tapCount, setTapCount] = useState(142);

  // Tile 4: POS Commerce State
  const [selectedSupplement, setSelectedSupplement] = useState({
    name: 'Hydrolyzed Whey Isolate (2kg)',
    price: 5499
  });
  const [orderDone, setOrderDone] = useState(false);

  // Tile 5: Active Metro
  const [activeCity, setActiveCity] = useState<'mumbai' | 'delhi' | 'bangalore' | 'pune'>('mumbai');

  const handleGateTap = () => {
    const lat = Math.floor(Math.random() * 40) + 142;
    setGateLatency(lat);
    setGateUnlocked(true);
    setTapCount((prev) => prev + 1);
    setTimeout(() => setGateUnlocked(false), 3000);
  };

  const handleCheckout = () => {
    setOrderDone(true);
    setTimeout(() => setOrderDone(false), 3500);
  };

  return (
    <section id="bento-features" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <Zap size={14} color="#00f2fe" />
            <span>FITCORE OS ARCHITECTURE • BENTO GRID</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Flagship Ecosystem Engineered for{' '}
            <span className="gradient-text-cyan">Total Franchise Automation.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            No fragmented tools. FitCore OS unifies IoT edge hardware with multi-tenant cloud software, 
            protecting revenue and driving recurring monetization.
          </p>
        </div>

        {/* The Bento Grid Layout */}
        <div className="bento-grid-main">
          {/* TILE 1: SUB-200MS TURNSTILE IOT (SPAN 8) */}
          <div className="bento-card bento-col-8" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
                  <span className="pill-badge pill-cyan" style={{ fontSize: '0.72rem' }}>
                    <Radio size={12} /> HARDWARE FIRMWARE IOT
                  </span>
                  <span className="pill-badge pill-emerald" style={{ fontSize: '0.72rem' }}>
                    <span className="pulse-dot pulse-dot-green"></span>
                    SUB-200MS SLA
                  </span>
                </div>
                <h3 style={{ fontSize: '1.65rem', color: '#fff' }}>
                  Sub-200ms Turnstile IoT Gateway
                </h3>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                  {gateLatency}ms
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Current Verification Speed</div>
              </div>
            </div>

            {/* Interactive Gate Visual Mockup */}
            <div 
              style={{
                background: 'rgba(5, 9, 18, 0.95)',
                border: gateUnlocked ? '2px solid #10b981' : '1px solid rgba(0, 242, 254, 0.25)',
                borderRadius: '16px',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center',
                boxShadow: gateUnlocked ? '0 0 35px rgba(16, 185, 129, 0.25)' : 'none',
                transition: 'all 0.3s ease',
                marginBottom: '1.5rem'
              }}
            >
              {/* Gate Solenoid State */}
              <div style={{ textAlign: 'center' }}>
                <div 
                  style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '50%',
                    margin: '0 auto 0.75rem auto',
                    background: gateUnlocked ? 'rgba(16, 185, 129, 0.2)' : 'rgba(0, 242, 254, 0.12)',
                    border: `2px solid ${gateUnlocked ? '#10b981' : '#00f2fe'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: gateUnlocked ? '0 0 30px #10b981' : '0 0 15px rgba(0, 242, 254, 0.2)'
                  }}
                >
                  {gateUnlocked ? <CheckCircle2 size={32} color="#10b981" /> : <Lock size={28} color="#00f2fe" />}
                </div>
                <div style={{ fontWeight: 800, fontSize: '1rem', color: gateUnlocked ? '#10b981' : '#fff' }}>
                  {gateUnlocked ? 'RELAY PULSED OPEN' : 'OPTICAL FLAP GATE ARMED'}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                  MQTT Broker: 128.0.1.42 • TLS 1.3
                </div>
              </div>

              {/* Action Button & Logs */}
              <div>
                <button
                  onClick={handleGateTap}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', marginBottom: '0.85rem' }}
                >
                  <Zap size={16} /> Tap Digital NFC / Scan Pass
                </button>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  <strong style={{ color: '#fff' }}>Zero-Trust Logic:</strong> Every tap cryptographically validates active subscription, anti-passback state, and updates live club occupancy.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.85rem', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Tripod & Flap Barrier Support
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> 100% Offline Local Cache Backup
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={16} color="#10b981" /> Solenoid Pulse in &lt;160ms
              </div>
            </div>
          </div>

          {/* TILE 2: REAL-TIME BIOMETRICS & OCCUPANCY (SPAN 4) */}
          <div className="bento-card bento-col-4" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="pill-badge pill-emerald" style={{ fontSize: '0.72rem', marginBottom: '1rem' }}>
                <Heart size={12} /> BIOMETRIC RADAR
              </span>
              <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.5rem' }}>
                Floor Occupancy & Health HUD
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.75rem' }}>
                Sub-second occupancy tracking prevents club overcrowding and calculates equipment density.
              </p>
            </div>

            {/* Circular Radial Meter SVG */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem 0 1.5rem 0' }}>
              <div style={{ position: 'relative', width: '150px', height: '150px' }}>
                <svg width="150" height="150" viewBox="0 0 100 100">
                  {/* Track */}
                  <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                  {/* Progress */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="40" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="8" 
                    strokeDasharray="251.2"
                    strokeDashoffset="98" 
                    strokeLinecap="round"
                    transform="rotate(-90 50 50)"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.5))' }}
                  />
                </svg>

                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '1.7rem', fontWeight: 800, color: '#fff' }}>
                    {tapCount}
                  </div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>/ 250 MAX</div>
                </div>
              </div>
            </div>

            {/* Biometric Sparklines */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f43f5e', fontSize: '0.72rem', fontWeight: 700 }}>
                  <Heart size={12} /> BPM AVG
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>134</div>
                <div style={{ fontSize: '0.68rem', color: '#10b981' }}>Peak Cardio Zone</div>
              </div>

              <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f59e0b', fontSize: '0.72rem', fontWeight: 700 }}>
                  <Flame size={12} /> BURNED
                </div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginTop: '0.2rem' }}>648 kcal</div>
                <div style={{ fontSize: '0.68rem', color: '#00f2fe' }}>81% Daily Goal</div>
              </div>
            </div>
          </div>

          {/* TILE 3: DIGITAL NFC MEMBER PASS (SPAN 4) */}
          <div className="bento-card bento-col-4" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <span className="pill-badge pill-purple" style={{ fontSize: '0.72rem', marginBottom: '1rem' }}>
                <Smartphone size={12} /> ZERO REVENUE LEAKAGE
              </span>
              <h3 style={{ fontSize: '1.45rem', color: '#fff', marginBottom: '0.5rem' }}>
                Dynamic NFC Mobile Pass
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                Cryptographically rotated tokens stored in native Apple Wallet & Google Pay enclaves.
              </p>
            </div>

            {/* Cyber Mobile Pass Visual */}
            <div 
              style={{
                background: 'linear-gradient(135deg, #090e1a 0%, #162035 100%)',
                border: '2px solid rgba(168, 85, 247, 0.4)',
                borderRadius: '16px',
                padding: '1.25rem',
                boxShadow: '0 10px 30px rgba(168, 85, 247, 0.2)',
                marginBottom: '1rem'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#c084fc' }}>FITCORE DIGITAL PASS</span>
                <span className="pill-badge pill-emerald" style={{ fontSize: '0.65rem' }}>ACTIVE VIP</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#fff' }}>Ankit Patil</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Pass ID: #NCG-9482-P • Valid: 2027</div>
              </div>

              <div 
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  padding: '0.75rem',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <QrCode size={30} color="#00f2fe" />
                  <span style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Dynamic QR (Rotates every 30s)</span>
                </div>
                <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 700 }}>VERIFIED</span>
              </div>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
              ✓ Anti-Passback enabled: Gate locks until exit scan is recorded.
            </div>
          </div>

          {/* TILE 4: INTEGRATED NUTRITION COMMERCE (SPAN 8) */}
          <div className="bento-card bento-col-8" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
              <div>
                <span className="pill-badge pill-purple" style={{ fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                  <ShoppingBag size={12} /> DUAL-ENGINE MONETIZATION
                </span>
                <h3 style={{ fontSize: '1.65rem', color: '#fff' }}>
                  Integrated Nutrition Store & 10% Platform Take
                </h3>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24' }}>
                  10% Commission
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Automated Auto-Escrow Split</div>
              </div>
            </div>

            {/* Interactive Catalog + Split Meter */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
              {/* Product Card */}
              <div style={{ padding: '1.25rem', background: 'rgba(5, 9, 18, 0.9)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.5rem' }}>SELECT SUPPLEMENT:</div>
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '0.75rem' }}>
                  <button
                    type="button"
                    onClick={() => setSelectedSupplement({ name: 'Hydrolyzed Whey Isolate (2kg)', price: 5499 })}
                    style={{
                      padding: '0.3rem 0.55rem',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      background: selectedSupplement.price === 5499 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: selectedSupplement.price === 5499 ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: selectedSupplement.price === 5499 ? '#fbbf24' : '#94a3b8',
                      cursor: 'pointer'
                    }}
                  >
                    Whey 2kg
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedSupplement({ name: 'Micronized Creatine (300g)', price: 1299 })}
                    style={{
                      padding: '0.3rem 0.55rem',
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      background: selectedSupplement.price === 1299 ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      border: selectedSupplement.price === 1299 ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.1)',
                      color: selectedSupplement.price === 1299 ? '#fbbf24' : '#94a3b8',
                      cursor: 'pointer'
                    }}
                  >
                    Creatine
                  </button>
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '0.3rem' }}>
                  {selectedSupplement.name}
                </div>
                <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fbbf24', marginBottom: '1rem' }}>
                  ₹{selectedSupplement.price.toLocaleString()}
                </div>

                <button
                  onClick={handleCheckout}
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.75rem', fontSize: '0.88rem' }}
                >
                  Simulate In-App Order
                </button>
              </div>

              {/* Split Breakdown */}
              <div style={{ padding: '1.25rem', background: 'rgba(5, 9, 18, 0.9)', borderRadius: '14px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '0.75rem', fontWeight: 700 }}>
                  INSTANT REVENUE AUTO-SPLIT:
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#cbd5e1' }}>Gym Franchise Payout (90%):</span>
                  <strong style={{ color: '#10b981' }}>₹{(selectedSupplement.price * 0.9).toFixed(2)}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                  <span style={{ color: '#fbbf24' }}>● NexCoreGen 10% SaaS Rake:</span>
                  <strong style={{ color: '#fbbf24' }}>+₹{(selectedSupplement.price * 0.1).toFixed(2)}</strong>
                </div>

                {orderDone ? (
                  <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', borderRadius: '6px', fontSize: '0.75rem', color: '#fff', textAlign: 'center' }}>
                    ✓ Escrow split executed! ₹{(selectedSupplement.price * 0.1).toFixed(2)} credited to NexCoreGen Treasury.
                  </div>
                ) : (
                  <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
                    Automated GST invoice generated with direct vendor dispatch webhook.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* TILE 5: PAN-INDIA COMMAND CENTER (SPAN 12 FULL WIDTH) */}
          <div className="bento-card bento-col-12" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
              <div>
                <span className="pill-badge pill-cyan" style={{ fontSize: '0.72rem', marginBottom: '0.5rem' }}>
                  <Building2 size={12} /> ENTERPRISE SCALE
                </span>
                <h3 style={{ fontSize: '1.65rem', color: '#fff' }}>
                  Pan-India Multi-Branch Franchise Command Center
                </h3>
              </div>

              {/* City Selector */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {(['mumbai', 'delhi', 'bangalore', 'pune'] as const).map((city) => (
                  <button
                    key={city}
                    onClick={() => setActiveCity(city)}
                    style={{
                      padding: '0.45rem 1rem',
                      borderRadius: '8px',
                      border: activeCity === city ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                      background: activeCity === city ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.02)',
                      color: activeCity === city ? '#00f2fe' : '#94a3b8',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {city} Hub
                  </button>
                ))}
              </div>
            </div>

            {/* City Comparative Telemetry Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
              <div className="telemetry-box" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>ACTIVE CLUBS</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', margin: '0.35rem 0' }}>
                  {activeCity === 'mumbai' ? '18 Clubs' : activeCity === 'delhi' ? '14 Clubs' : activeCity === 'bangalore' ? '12 Clubs' : '8 Clubs'}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#10b981' }}>● 100% Turnstile Uptime</div>
              </div>

              <div className="telemetry-box" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MONTHLY RUN-RATE</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fbbf24', margin: '0.35rem 0' }}>
                  {activeCity === 'mumbai' ? '₹24,50,000' : activeCity === 'delhi' ? '₹18,20,000' : activeCity === 'bangalore' ? '₹19,80,000' : '₹9,40,000'}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#64748b' }}>SaaS + POS Commissions</div>
              </div>

              <div className="telemetry-box" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>TOTAL MEMBERS</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00f2fe', margin: '0.35rem 0' }}>
                  {activeCity === 'mumbai' ? '9,480 Members' : activeCity === 'delhi' ? '7,120 Members' : activeCity === 'bangalore' ? '8,300 Members' : '3,600 Members'}
                </div>
                <div style={{ fontSize: '0.72rem', color: '#00f2fe' }}>99.2% KYC Verified</div>
              </div>

              <div className="telemetry-box" style={{ padding: '1.25rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>AVG HARDWARE LATENCY</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#c084fc', margin: '0.35rem 0' }}>
                  158ms
                </div>
                <div style={{ fontSize: '0.72rem', color: '#10b981' }}>SLA Target: &lt;200ms</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
