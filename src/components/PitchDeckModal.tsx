import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, Mail, Building2, User, Send } from 'lucide-react';

interface PitchDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchDeckModal: React.FC<PitchDeckModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [firm, setFirm] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadOnePager = () => {
    // Generate and download a formatted text/document summary
    const content = `=====================================================
NEXCOREGEN TECHNOLOGIES - INVESTOR EXECUTIVE BRIEF
=====================================================
Company: NexCoreGen Technologies Pvt. Ltd.
Founder: Ankit Patil (Founder & Chief Systems Architect)
Website: https://nexcoregen.internal / FitCore OS Ecosystem

1. EXECUTIVE SUMMARY
NexCoreGen Technologies architects next-generation enterprise operating systems 
and high-concurrency IoT hardware ecosystems for the physical economy. 

2. FLAGSHIP PRODUCT: FITCORE OS
- Pan-India Gym Management, Turnstile IoT & Commerce Operating System.
- Hardware Sync: Sub-200ms RFID/NFC gate unlock via custom ESP32 firmware.
- Central Franchise HUD: Real-time telemetry for multi-club national chains.
- Built-in Commerce: 10% SaaS transaction take-rate on all nutrition/supplements.

3. MARKET OPPORTUNITY (INDIA)
- TAM: ₹28,000+ Cr ($3.4B) Indian Fitness & Physical Wellness Sector (19.2% CAGR).
- SAM: ₹4,500 Cr Gym Management SaaS & Access Control.
- SOM: ₹320 Cr Initial 36-month target across Top 5 Metros.

4. BUSINESS MODEL & MONETIZATION
- Annual SaaS Subscriptions: Starter (₹14,999), Pro Studio (₹34,999), Enterprise (₹69,999).
- Secondary Commerce: 10% platform take-rate on gym store nutrition purchases.
- Turnstile Gateway Deployment: Upfront hardware retrofit fee + recurring SLA.

5. CURRENT INVESTMENT ROUND
- Round: Pre-Seed / Strategic Angel Round Open.
- Use of Proceeds: 45% Enterprise Franchise Sales, 35% IoT R&D, 20% Working Capital.

Direct Founder Contact: Ankit Patil
GitHub: https://github.com/Ankitmpatil1999/NexCoreGen_Technologies
=====================================================`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'NexCoreGen_Technologies_Executive_Brief.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-panel"
        style={{
          maxWidth: '580px',
          width: '100%',
          padding: '2.5rem',
          background: 'rgba(11, 17, 30, 0.98)',
          border: '1px solid rgba(0, 242, 254, 0.4)',
          boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.95), 0 0 50px rgba(0, 242, 254, 0.2)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            cursor: 'pointer'
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div 
              style={{ 
                width: '64px', 
                height: '64px', 
                borderRadius: '50%', 
                background: 'rgba(16, 185, 129, 0.2)', 
                border: '2px solid #10b981',
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1.5rem auto' 
              }}
            >
              <CheckCircle2 size={36} color="#10b981" />
            </div>

            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>
              Investor Packet Dispatched!
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Thank you, <strong>{name}</strong>. The confidential investor deck and data room link have been scheduled for <strong>{email}</strong>. Founder Ankit Patil will be in touch shortly.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <button
                onClick={handleDownloadOnePager}
                className="btn btn-primary"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                <Download size={16} /> Download Executive One-Pager
              </button>
              <button
                onClick={onClose}
                className="btn btn-secondary"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem', fontSize: '0.75rem' }}>
              <ShieldCheck size={14} color="#00f2fe" />
              CONFIDENTIAL INVESTOR DATA ROOM
            </div>

            <h3 style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.5rem' }}>
              Request Confidential Pitch Deck
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '2rem' }}>
              Access our comprehensive seed deck, financial projections, hardware bill-of-materials (BOM), and multi-city franchise expansion models.
            </p>

            {/* Instant One-Pager Direct Download Box */}
            <div 
              style={{
                padding: '1rem 1.25rem',
                background: 'rgba(0, 242, 254, 0.06)',
                border: '1px dashed rgba(0, 242, 254, 0.35)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>
                  Need an Instant Summary?
                </div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                  Download the 1-page executive brief instantly.
                </div>
              </div>
              <button
                type="button"
                onClick={handleDownloadOnePager}
                className="btn btn-secondary"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.78rem' }}
              >
                <Download size={14} color="#00f2fe" />
                Download Brief
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  YOUR FULL NAME *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
                  />
                  <User size={16} color="#64748b" style={inputIconStyle} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  WORK / INSTITUTIONAL EMAIL *
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@venturecapital.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                  <Mail size={16} color="#64748b" style={inputIconStyle} />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#cbd5e1', marginBottom: '0.4rem', fontWeight: 600 }}>
                  FIRM / ANGEL SYNDICATE
                </label>
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="e.g. Angel Investor / Seed Fund"
                    value={firm}
                    onChange={(e) => setFirm(e.target.value)}
                    style={inputStyle}
                  />
                  <Building2 size={16} color="#64748b" style={inputIconStyle} />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', marginTop: '0.5rem', fontSize: '0.95rem' }}
              >
                <Send size={16} /> Request Confidential Data Room
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem 0.75rem 2.6rem',
  background: 'rgba(5, 9, 18, 0.85)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit'
};

const inputIconStyle: React.CSSProperties = {
  position: 'absolute',
  left: '0.85rem',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none'
};
