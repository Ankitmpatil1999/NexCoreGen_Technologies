import React from 'react';
import { Cpu, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPitchDeck: () => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPitchDeck, onOpenContact }) => {
  return (
    <footer 
      style={{ 
        background: '#04070e', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
        paddingTop: '5rem', 
        paddingBottom: '3rem',
        position: 'relative' 
      }}
    >
      <div className="container">
        {/* Main Footer Links Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '3rem',
            marginBottom: '4rem' 
          }}
        >
          {/* Col 1: Corporate Brand */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div 
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(99, 102, 241, 0.3))',
                  border: '1px solid rgba(0, 242, 254, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Cpu size={20} color="#00f2fe" />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>
                NexCoreGen
              </span>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Architecting next-generation enterprise operating systems and high-concurrency IoT hardware ecosystems for the physical economy.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <a 
                href="https://github.com/Ankitmpatil1999/NexCoreGen_Technologies" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none'
                }}
                aria-label="GitHub Repository"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <button
                onClick={onOpenContact}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f2fe',
                  cursor: 'pointer'
                }}
                aria-label="Email Contact"
              >
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* Col 2: Products & Platform */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              PLATFORM & OS
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li><a href="#flagship" style={footerLinkStyle}>FitCore OS (Gym Flagship)</a></li>
              <li><a href="#simulator" style={footerLinkStyle}>Live Turnstile Simulator</a></li>
              <li><a href="#pipeline" style={footerLinkStyle}>NexRetail OS (Cashierless)</a></li>
              <li><a href="#pipeline" style={footerLinkStyle}>NexAccess IoT Gateway</a></li>
              <li><a href="#pipeline" style={footerLinkStyle}>NexPulse AI (Retention)</a></li>
            </ul>
          </div>

          {/* Col 3: Architecture & Security */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              ENGINEERING & TECH
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li><a href="#architecture" style={footerLinkStyle}>Sub-200ms IoT Concurrency</a></li>
              <li><a href="#architecture" style={footerLinkStyle}>Multi-Tenant Sharding (<code style={{ color: '#00f2fe' }}>gymId</code>)</a></li>
              <li><a href="#architecture" style={footerLinkStyle}>Zero-Trust Anti-Passback</a></li>
              <li><a href="#architecture" style={footerLinkStyle}>Offline Failover Architecture</a></li>
              <li><a href="#flagship" style={footerLinkStyle}>10% POS Commerce Ledger</a></li>
            </ul>
          </div>

          {/* Col 4: Investor Relations */}
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>
              INVESTOR RELATIONS
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.88rem' }}>
              <li><button onClick={onOpenPitchDeck} style={footerBtnStyle}>Executive Pitch Deck</button></li>
              <li><a href="#market" style={footerLinkStyle}>₹28,000 Cr Market TAM</a></li>
              <li><a href="#market" style={footerLinkStyle}>Dual-Engine Unit Economics</a></li>
              <li><a href="#leadership" style={footerLinkStyle}>Founder Leadership (Ankit Patil)</a></li>
              <li><button onClick={onOpenContact} style={footerBtnStyle}>Schedule Founder Briefing</button></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer for Investors */}
        <div 
          style={{
            padding: '1.25rem',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.72rem',
            color: '#64748b',
            lineHeight: 1.6,
            marginBottom: '2rem'
          }}
        >
          <strong>DISCLAIMER & CONFIDENTIALITY:</strong> This website is for informational and institutional presentation purposes for prospective enterprise clients, technology partners, and verified accredited investors evaluating NexCoreGen Technologies Pvt. Ltd. and its product offerings (including FitCore OS). Information herein contains forward-looking statements regarding market size, operational milestones, and technical capabilities subject to industry variables.
        </div>

        {/* Copyright Bar */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            flexWrap: 'wrap', 
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            fontSize: '0.82rem',
            color: '#64748b'
          }}
        >
          <div>
            © {new Date().getFullYear()} NexCoreGen Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: '#94a3b8' }}>Designed with Precision for Deep-Tech & Physical Enterprise</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerLinkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  transition: 'color 0.2s ease',
};

const footerBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  padding: 0,
  font: 'inherit',
  cursor: 'pointer',
  textAlign: 'left'
};
