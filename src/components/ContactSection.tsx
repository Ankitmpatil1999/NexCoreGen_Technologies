import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<'investor' | 'franchise' | 'hardware' | 'careers'>('investor');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [org, setOrg] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <Mail size={14} color="#00f2fe" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Initiate Contact with{' '}
            <span className="gradient-text-cyan">NexCoreGen Leadership.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            Whether you are evaluating our seed round, looking to pilot FitCore OS in your gym franchise, 
            or exploring hardware integrations, our founding team will respond within 24 hours.
          </p>
        </div>

        {/* Contact Form & Info Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '3rem',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {/* Left Info Column */}
          <div>
            <div className="glass-panel" style={{ padding: '2.5rem', marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>
                Corporate Headquarters & Contacts
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                NexCoreGen Technologies is headquartered in India with rapid deployment capabilities across Mumbai, Pune, Bangalore, Delhi NCR, and Hyderabad.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0, 242, 254, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail size={18} color="#00f2fe" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>FOUNDER & INVESTOR INQUIRIES</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>ankit@nexcoregen.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone size={18} color="#10b981" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>DIRECT HOTLINE / WHATSAPP</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>+91 (Enterprise Priority Line)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MapPin size={18} color="#818cf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>ENGINEERING LAB & R&D</div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>India (Pan-India Turnstile Deployments)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Pitch Badge */}
            <div 
              style={{
                padding: '1.5rem',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <div className="pulse-dot pulse-dot-green"></div>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>
                Currently scheduling 20-minute Zoom introductory briefings with angel investors and fitness franchise owners.
              </span>
            </div>
          </div>

          {/* Right: Submission Form */}
          <div className="glass-panel" style={{ padding: '2.5rem' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div 
                  style={{ 
                    width: '64px', 
                    height: '64px', 
                    borderRadius: '50%', 
                    background: 'rgba(0, 242, 254, 0.15)', 
                    border: '2px solid #00f2fe',
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    margin: '0 auto 1.5rem auto' 
                  }}
                >
                  <CheckCircle2 size={36} color="#00f2fe" />
                </div>

                <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.75rem' }}>
                  Inquiry Dispatched Successfully!
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you, <strong>{name}</strong>. Founder Ankit Patil and our enterprise architecture team will review your inquiry and connect with you shortly.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ padding: '0.75rem 1.5rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Inquiry Type Tabs */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '0.5rem', fontWeight: 600 }}>
                    SELECT NATURE OF INQUIRY:
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    {[
                      { id: 'investor', label: '💼 Angel / VC Investor' },
                      { id: 'franchise', label: '🏋️ Gym Franchise Owner' },
                      { id: 'hardware', label: '⚙️ Turnstile Partner' },
                      { id: 'careers', label: '💡 Engineering Talent' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setInquiryType(tab.id as any)}
                        style={{
                          padding: '0.6rem 0.75rem',
                          borderRadius: '8px',
                          border: inquiryType === tab.id ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                          background: inquiryType === tab.id ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                          color: inquiryType === tab.id ? '#00f2fe' : '#94a3b8',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          textAlign: 'left'
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Patil"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Email & Org */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>FIRM / GYM NAME</label>
                    <input
                      type="text"
                      placeholder="e.g. Golds / Velvet Fitness"
                      value={org}
                      onChange={(e) => setOrg(e.target.value)}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>MESSAGE / SPECIFIC REQUIREMENTS *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your portfolio mandate, club locations, or partnership scope..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.95rem', fontSize: '1rem' }}
                >
                  <Send size={18} /> Send Inquiry to Leadership
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.78rem',
  color: '#cbd5e1',
  marginBottom: '0.4rem',
  fontWeight: 600,
  letterSpacing: '0.02em'
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(5, 9, 18, 0.85)',
  border: '1px solid rgba(255, 255, 255, 0.12)',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit'
};
