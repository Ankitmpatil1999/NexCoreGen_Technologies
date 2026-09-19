import React, { useState } from 'react';
import { 
  Zap, 
  Building2, 
  ShoppingBag, 
  Smartphone, 
  CheckCircle2, 
  Flame, 
  Heart, 
  QrCode 
} from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'turnstile' | 'franchise' | 'commerce' | 'member'>('turnstile');

  // Turnstile state
  const [gateStatus, setGateStatus] = useState<'LOCKED' | 'UNLOCKING' | 'UNLOCKED'>('LOCKED');
  const [latencyMs, setLatencyMs] = useState<number>(158);
  const [occupancy, setOccupancy] = useState<number>(142);
  const [lastCheckinTime, setLastCheckinTime] = useState<string>('Just now');
  const [gateLog, setGateLog] = useState<string[]>([
    '[INIT] Hardware MQTT Broker connected: tls://iot.nexcoregen.internal:8883',
    '[READY] Turnstile Flap Gate #01 optical beam online',
    '[STANDBY] Waiting for RFID / NFC / Dynamic QR scan token...'
  ]);

  // Franchise City Selector State
  const [selectedCity, setSelectedCity] = useState<'mumbai' | 'delhi' | 'bangalore' | 'pune'>('mumbai');

  // Commerce Simulator State
  const [selectedProduct, setSelectedProduct] = useState({ name: 'Hydrolyzed Whey Isolate (2kg)', price: 5499 });
  const [orderProcessed, setOrderProcessed] = useState(false);

  // Trigger Turnstile Simulation
  const handleSimulateTurnstileTap = () => {
    if (gateStatus === 'UNLOCKING') return;

    setGateStatus('UNLOCKING');
    const randomLatency = Math.floor(Math.random() * 45) + 140; // 140ms - 185ms

    setTimeout(() => {
      setLatencyMs(randomLatency);
      setGateStatus('UNLOCKED');
      setOccupancy((prev) => prev + 1);
      const timeStr = new Date().toLocaleTimeString();
      setLastCheckinTime(timeStr);
      setGateLog((prev) => [
        `[${timeStr}] [ACCESS GRANTED] NFC Token #NCG-9482 verified in ${randomLatency}ms (Sub-200ms target met)`,
        `[${timeStr}] [TELEMETRY] Gate #01 solenoid relay pulsed OPEN`,
        `[${timeStr}] [AUDIT] Floor occupancy updated to ${occupancy + 1}/250 members`,
        ...prev.slice(0, 4)
      ]);

      // Auto-lock after 3.5s
      setTimeout(() => {
        setGateStatus('LOCKED');
        setGateLog((prev) => [
          `[${new Date().toLocaleTimeString()}] [RELOCKED] Optical sensor cleared. Turnstile Gate #01 secure.`,
          ...prev.slice(0, 5)
        ]);
      }, 3500);
    }, 280);
  };

  const handleSimulateOrder = () => {
    setOrderProcessed(true);
    setTimeout(() => setOrderProcessed(false), 4000);
  };

  return (
    <section id="simulator" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 3rem auto' }}>
          <div className="pill-badge pill-emerald" style={{ marginBottom: '1rem' }}>
            <span className="pulse-dot pulse-dot-green"></span>
            <span>LIVE INTERACTIVE PRODUCT LAB</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Experience the <span className="gradient-text-emerald">NexCoreGen Operating Engine.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Test our sub-200ms turnstile gate trigger, explore franchise telemetry across Indian metros, 
            and see how our automated commerce engine calculates platform revenue in real time.
          </p>
        </div>

        {/* Interactive Sandbox Cockpit */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 45px rgba(16, 185, 129, 0.15)',
            overflow: 'hidden'
          }}
        >
          {/* Cockpit Mode Switcher Tabs */}
          <div 
            style={{
              padding: '0.85rem 1.25rem',
              background: 'rgba(11, 17, 30, 0.95)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              gap: '0.75rem',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            <button
              onClick={() => setActiveTab('turnstile')}
              style={{
                background: activeTab === 'turnstile' ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                border: activeTab === 'turnstile' ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid transparent',
                color: activeTab === 'turnstile' ? '#00f2fe' : '#94a3b8',
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Zap size={16} />
              1. Turnstile IoT Hardware Tap
            </button>

            <button
              onClick={() => setActiveTab('franchise')}
              style={{
                background: activeTab === 'franchise' ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                border: activeTab === 'franchise' ? '1px solid rgba(99, 102, 241, 0.4)' : '1px solid transparent',
                color: activeTab === 'franchise' ? '#818cf8' : '#94a3b8',
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Building2 size={16} />
              2. Franchise Multi-Club Telemetry
            </button>

            <button
              onClick={() => setActiveTab('commerce')}
              style={{
                background: activeTab === 'commerce' ? 'rgba(245, 158, 11, 0.15)' : 'transparent',
                border: activeTab === 'commerce' ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid transparent',
                color: activeTab === 'commerce' ? '#fbbf24' : '#94a3b8',
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ShoppingBag size={16} />
              3. POS Store & 10% SaaS Rake
            </button>

            <button
              onClick={() => setActiveTab('member')}
              style={{
                background: activeTab === 'member' ? 'rgba(16, 185, 129, 0.15)' : 'transparent',
                border: activeTab === 'member' ? '1px solid rgba(16, 185, 129, 0.4)' : '1px solid transparent',
                color: activeTab === 'member' ? '#10b981' : '#94a3b8',
                padding: '0.6rem 1.1rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Smartphone size={16} />
              4. Member Mobile Pass & Biometrics
            </button>
          </div>

          {/* Cockpit Content Area */}
          <div style={{ padding: '2rem', background: 'rgba(8, 12, 22, 0.96)' }}>
            {/* TAB 1: TURNSTILE IOT SIMULATOR */}
            {activeTab === 'turnstile' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  {/* Left Column: Physical Gate Simulator */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <h4 style={{ fontSize: '1.2rem', color: '#fff' }}>
                        Physical Gate Controller (ESP32 IoT Relay)
                      </h4>
                      <span 
                        className={`pill-badge ${gateStatus === 'UNLOCKED' ? 'pill-emerald' : 'pill-cyan'}`}
                        style={{ fontSize: '0.75rem' }}
                      >
                        <span className={`pulse-dot ${gateStatus === 'UNLOCKED' ? 'pulse-dot-green' : 'pulse-dot-cyan'}`}></span>
                        GATE STATE: {gateStatus}
                      </span>
                    </div>

                    {/* Turnstile Visual Box */}
                    <div 
                      style={{
                        height: '200px',
                        borderRadius: '12px',
                        background: gateStatus === 'UNLOCKED' 
                          ? 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(6, 9, 17, 0.9) 100%)' 
                          : 'radial-gradient(circle, rgba(0, 242, 254, 0.1) 0%, rgba(6, 9, 17, 0.9) 100%)',
                        border: gateStatus === 'UNLOCKED' ? '2px solid #10b981' : '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        transition: 'all 0.3s ease',
                        marginBottom: '1.5rem',
                        position: 'relative'
                      }}
                    >
                      <div 
                        style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '50%',
                          background: gateStatus === 'UNLOCKED' ? '#10b981' : '#0f172a',
                          border: `2px solid ${gateStatus === 'UNLOCKED' ? '#34d399' : '#00f2fe'}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: gateStatus === 'UNLOCKED' ? '0 0 35px #10b981' : '0 0 20px rgba(0, 242, 254, 0.2)'
                        }}
                      >
                        {gateStatus === 'UNLOCKED' ? (
                          <CheckCircle2 size={32} color="#040914" />
                        ) : (
                          <Zap size={30} color="#00f2fe" />
                        )}
                      </div>

                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontWeight: 700, fontSize: '1.1rem', color: gateStatus === 'UNLOCKED' ? '#34d399' : '#fff' }}>
                          {gateStatus === 'UNLOCKED' ? 'TURNSTILE #01 UNLOCKED' : 'OPTICAL GATE ARMED'}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                          Verified Latency: <strong style={{ color: '#00f2fe' }}>{latencyMs}ms</strong> (Target &lt;200ms)
                        </div>
                      </div>
                    </div>

                    {/* Interactive Action Button */}
                    <button
                      onClick={handleSimulateTurnstileTap}
                      disabled={gateStatus === 'UNLOCKING'}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '1rem', fontSize: '1rem', gap: '0.75rem' }}
                    >
                      <Zap size={20} />
                      Simulate NFC / QR Turnstile Gate Tap
                    </button>
                  </div>

                  {/* Right Column: Real-time Telemetry & MQTT Logs */}
                  <div>
                    <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1.25rem' }}>
                      Live Edge Hardware Telemetry Feed
                    </h4>

                    {/* Quick Stats Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>LIVE OCCUPANCY</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981' }}>
                          {occupancy} / 250
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Last Tap: {lastCheckinTime}</div>
                      </div>

                      <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>API LATENCY</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f2fe' }}>
                          {latencyMs} ms
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#64748b' }}>SLA Target: &lt;200ms</div>
                      </div>
                    </div>

                    {/* Monospace Live MQTT Event Log */}
                    <div 
                      className="telemetry-box"
                      style={{
                        height: '190px',
                        overflowY: 'auto',
                        fontSize: '0.75rem',
                        lineHeight: 1.6,
                        color: '#94a3b8',
                        background: '#040711'
                      }}
                    >
                      <div style={{ color: '#00f2fe', fontWeight: 700, marginBottom: '0.4rem' }}>
                        [EDGE-GATE-CONSOLE] MQTT TOPIC: gym/in-gate-01/events
                      </div>
                      {gateLog.map((log, index) => (
                        <div key={index} style={{ marginBottom: '0.3rem' }}>
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FRANCHISE MULTI-CLUB TELEMETRY */}
            {activeTab === 'franchise' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>
                      Pan-India Super Admin Franchise Telemetry
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                      Real-time synchronized visibility into all franchise clubs across key Indian fitness hubs.
                    </p>
                  </div>

                  {/* City Selector */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {(['mumbai', 'delhi', 'bangalore', 'pune'] as const).map((city) => (
                      <button
                        key={city}
                        onClick={() => setSelectedCity(city)}
                        style={{
                          background: selectedCity === city ? '#6366f1' : 'rgba(255, 255, 255, 0.05)',
                          color: '#fff',
                          border: 'none',
                          padding: '0.4rem 0.85rem',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textTransform: 'capitalize',
                          cursor: 'pointer'
                        }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>

                {/* City Telemetry Display */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.5rem' }}>
                  <div className="telemetry-box">
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>CLUB BRANCH</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', textTransform: 'capitalize' }}>
                      FitCore {selectedCity} Flagship
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#10b981', marginTop: '0.25rem' }}>
                      ● 100% Turnstiles Online
                    </div>
                  </div>

                  <div className="telemetry-box">
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>TODAY'S FOOTFALL</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#00f2fe' }}>
                      {selectedCity === 'mumbai' ? '482 Check-ins' : selectedCity === 'delhi' ? '395 Check-ins' : selectedCity === 'bangalore' ? '520 Check-ins' : '260 Check-ins'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                      Avg. Gate Latency: 162ms
                    </div>
                  </div>

                  <div className="telemetry-box">
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ACTIVE REVENUE RUN-RATE</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fbbf24' }}>
                      {selectedCity === 'mumbai' ? '₹4,85,000 / mo' : selectedCity === 'delhi' ? '₹3,90,000 / mo' : selectedCity === 'bangalore' ? '₹5,40,000 / mo' : '₹2,35,000 / mo'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                      SaaS + POS Rake
                    </div>
                  </div>

                  <div className="telemetry-box">
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ACTIVE MEMBERS</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#c084fc' }}>
                      {selectedCity === 'mumbai' ? '624 Members' : selectedCity === 'delhi' ? '512 Members' : selectedCity === 'bangalore' ? '710 Members' : '340 Members'}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                      98.4% KYC Approved
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.85rem', color: '#94a3b8' }}>
                  <strong style={{ color: '#fff' }}>Pan-India Network Status:</strong> All 4 hubs reporting zero turnstile hardware dropouts over the last 30 days. Tenant database sharded by <code style={{ color: '#00f2fe' }}>gymId</code> ensures isolated, compliant member data storage.
                </div>
              </div>
            )}

            {/* TAB 3: COMMERCE & 10% SAAS RAKE */}
            {activeTab === 'commerce' && (
              <div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1.25rem', color: '#fff' }}>
                    Automated Nutrition POS & 10% Platform Monetization
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#94a3b8' }}>
                    Demonstrating how NexCoreGen monetizes beyond recurring SaaS fees by capturing a 10% gross commission on all in-app member nutrition purchases.
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  {/* Left: Product Selector */}
                  <div>
                    <label style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block', marginBottom: '0.5rem' }}>
                      SELECT PRODUCT IN CATALOG:
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.25rem' }}>
                      {[
                        { name: 'Hydrolyzed Whey Isolate (2kg)', price: 5499 },
                        { name: 'Micronized Creatine Monohydrate (300g)', price: 1299 },
                        { name: 'BCAA Electrolyte Intra-Workout', price: 1899 },
                        { name: 'NexCore Premium Gym Shaker Bottle', price: 699 }
                      ].map((item) => (
                        <div
                          key={item.name}
                          onClick={() => setSelectedProduct(item)}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            background: selectedProduct.name === item.name ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                            border: selectedProduct.name === item.name ? '1px solid #fbbf24' : '1px solid rgba(255, 255, 255, 0.06)',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <span style={{ fontSize: '0.88rem', color: '#fff' }}>{item.name}</span>
                          <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fbbf24' }}>₹{item.price.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleSimulateOrder}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '0.85rem' }}
                    >
                      Simulate Member In-App Checkout
                    </button>
                  </div>

                  {/* Right: Instant Split Calculation */}
                  <div className="telemetry-box" style={{ padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', marginBottom: '1rem', fontWeight: 700 }}>
                      REAL-TIME TRANSACTION SPLIT (AUTO-ESCROW)
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <span style={{ color: '#cbd5e1' }}>Gross Order Value:</span>
                      <strong style={{ color: '#fff', fontSize: '1.1rem' }}>₹{selectedProduct.price.toLocaleString()}</strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <span style={{ color: '#fbbf24' }}>● NexCoreGen 10% SaaS Rake:</span>
                      <strong style={{ color: '#fbbf24', fontSize: '1.1rem' }}>
                        +₹{(selectedProduct.price * 0.1).toFixed(2)}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <span style={{ color: '#10b981' }}>● Gym Franchise Payout (90%):</span>
                      <strong style={{ color: '#10b981', fontSize: '1.1rem' }}>
                        ₹{(selectedProduct.price * 0.9).toFixed(2)}
                      </strong>
                    </div>

                    {orderProcessed ? (
                      <div 
                        style={{ 
                          marginTop: '1.25rem', 
                          padding: '0.75rem', 
                          background: 'rgba(16, 185, 129, 0.2)', 
                          border: '1px solid #10b981', 
                          borderRadius: '6px',
                          color: '#fff',
                          fontSize: '0.82rem',
                          textAlign: 'center'
                        }}
                      >
                        ✓ Transaction processed! ₹{(selectedProduct.price * 0.1).toFixed(2)} credited to NexCoreGen Treasury escrow instantly.
                      </div>
                    ) : (
                      <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '1rem' }}>
                        Zero payment delay. Vendor dispatch webhook triggers automatically upon order completion.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MEMBER PASS & BIOMETRICS */}
            {activeTab === 'member' && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                  {/* Left: Mobile Phone Simulation Card */}
                  <div 
                    style={{
                      maxWidth: '340px',
                      margin: '0 auto',
                      background: '#040711',
                      borderRadius: '24px',
                      border: '3px solid rgba(0, 242, 254, 0.4)',
                      padding: '1.5rem',
                      boxShadow: '0 0 35px rgba(0, 242, 254, 0.2)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>FITCORE DIGITAL PASS</span>
                      <span className="pill-badge pill-emerald" style={{ fontSize: '0.65rem' }}>ACTIVE PRO</span>
                    </div>

                    {/* Member Name */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff' }}>Ankit Patil</div>
                      <div style={{ fontSize: '0.75rem', color: '#00f2fe' }}>Pass ID: #NCG-9482-P</div>
                    </div>

                    {/* Dynamic QR Code Box */}
                    <div 
                      style={{
                        height: '140px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px dashed rgba(0, 242, 254, 0.4)',
                        borderRadius: '12px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginBottom: '1rem'
                      }}
                    >
                      <QrCode size={54} color="#00f2fe" />
                      <span style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.05em' }}>
                        NFC TAP OR SCAN AT GATE
                      </span>
                    </div>

                    {/* Biometrics */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f43f5e', fontSize: '0.7rem' }}>
                          <Heart size={12} /> BPM
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>134</div>
                      </div>
                      <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#f59e0b', fontSize: '0.7rem' }}>
                          <Flame size={12} /> CALORIES
                        </div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>648 kcal</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Explanatory Details */}
                  <div>
                    <h4 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '0.75rem' }}>
                      Frictionless Digital Member Experience
                    </h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      Members simply hold their phone near the turnstile gate. Cryptographic tokens rotate every 30 seconds to prevent screenshot sharing or buddy punching.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                          <strong>Anti-Passback Verification:</strong> A member cannot scan their pass and hand their phone back to a friend; gate locks until exit scan is recorded.
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                          <strong>Apple Wallet & Google Pay Ready:</strong> Pass directly integrates with native device secure enclaves.
                        </span>
                      </div>
                      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                        <CheckCircle2 size={18} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                          <strong>Trainer Direct Booking:</strong> Schedule PT sessions with biometric progress logs synced automatically.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
