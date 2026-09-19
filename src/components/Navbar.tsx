import React, { useState, useEffect } from 'react';
import { Cpu, Menu, X, ArrowRight, Download } from 'lucide-react';

interface NavbarProps {
  onOpenPitchDeck: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPitchDeck, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(6, 9, 17, 0.88)' : 'rgba(6, 9, 17, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '0.85rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2), rgba(99, 102, 241, 0.3))',
              border: '1px solid rgba(0, 242, 254, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.25)',
            }}
          >
            <Cpu size={22} color="#00f2fe" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff' }}>
                NexCoreGen
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '0.15rem 0.45rem',
                  borderRadius: '6px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: '#00f2fe',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                }}
              >
                OS
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Technologies
            </div>
          </div>
        </a>

        {/* Round Status Badge for Investors */}
        <div
          className="pill-badge pill-cyan"
          style={{ display: 'none', cursor: 'pointer' }}
          onClick={onOpenPitchDeck}
          id="round-status-badge"
        >
          <span className="pulse-dot pulse-dot-cyan"></span>
          <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Angel / Seed Round Open</span>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <a href="#bento-features" style={navLinkStyle}>Bento Features</a>
          <a href="#flagship" style={navLinkStyle}>FitCore OS</a>
          <a href="#pipeline" style={navLinkStyle}>R&D Pipeline</a>
          <a href="#market" style={navLinkStyle}>TAM & Model</a>
          <a href="#architecture" style={navLinkStyle}>Architecture</a>
          <a href="#pitch-deck" style={navLinkStyle}>Investor Central</a>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
          <button
            onClick={onOpenPitchDeck}
            className="btn btn-secondary"
            style={{ padding: '0.55rem 1.1rem', fontSize: '0.85rem' }}
          >
            <Download size={14} />
            Pitch Deck
          </button>
          <button
            onClick={onOpenContact}
            className="btn btn-primary"
            style={{ padding: '0.55rem 1.2rem', fontSize: '0.85rem' }}
          >
            Schedule Briefing
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            color: '#fff',
            padding: '0.5rem',
            cursor: 'pointer',
            display: 'block',
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            padding: '1.5rem',
            background: 'rgba(6, 9, 17, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          <div className="pill-badge pill-cyan" style={{ alignSelf: 'flex-start' }}>
            <span className="pulse-dot pulse-dot-cyan"></span>
            <span>Seed Round Open • ₹28k Cr TAM</span>
          </div>
          <a href="#bento-features" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Bento Features Architecture</a>
          <a href="#flagship" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>FitCore OS (Flagship)</a>
          <a href="#pipeline" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Innovation Pipeline (Next Products)</a>
          <a href="#market" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Market Opportunity & Economics</a>
          <a href="#architecture" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Hardware & Cloud Architecture</a>
          <a href="#pitch-deck" onClick={() => setMobileMenuOpen(false)} style={mobileNavLinkStyle}>Executive Pitch Deck</a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenPitchDeck(); }}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              <Download size={16} /> View Investor Pitch Deck
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Book Founder Briefing <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Inject responsive CSS helper for desktop display */}
      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          #round-status-badge { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'color 0.2s ease',
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: '#f8fafc',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 600,
  padding: '0.4rem 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
};
