import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, Eye, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
  onNavigateToTerms: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome, onNavigateToTerms }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction & Overview' },
    { id: 'data-we-collect', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Information' },
    { id: 'iot-access', title: '4. FitCore IoT & Turnstile Data' },
    { id: 'data-sharing', title: '5. Sharing & Third-Party Processors' },
    { id: 'data-security', title: '6. Data Security & Encryption' },
    { id: 'user-rights', title: '7. Your Rights Under DPDPA' },
    { id: 'cookies', title: '8. Cookies & Telemetry' },
    { id: 'retention', title: '9. Data Retention & Deletion' },
    { id: 'contact', title: '10. Grievance Officer & Contacts' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--bg-page)', color: 'var(--text-dark)' }}>
      {/* Top Navigation Bar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-color)',
          padding: '1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <button
              onClick={onBackToHome}
              className="btn btn-secondary"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <ArrowLeft size={16} /> Back to Home
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', cursor: 'pointer' }} onClick={onBackToHome}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #1769E0, #38BDF8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1rem'
                }}
              >
                N
              </div>
              <span style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--color-navy)' }}>
                NextcoreGent <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>Technologies</span>
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onNavigateToTerms}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Terms & Conditions →
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header */}
      <div style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%)', padding: '4rem 0 3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                background: 'var(--color-primary-light)',
                color: 'var(--color-primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                marginBottom: '1rem',
                letterSpacing: '0.04em'
              }}
            >
              <Shield size={14} /> LEGAL & COMPLIANCE
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 1.5rem auto' }}>
              How <strong>NextcoreGent Technologies</strong> collects, protects, uses, and respects your personal and corporate information across our software, websites, and SaaS products.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', background: '#FFFFFF', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid var(--border-color)' }}>
              <span>Effective Date: <strong>September 19, 2026</strong></span>
              <span>•</span>
              <span>Compliance: <strong>DPDPA 2023 & IT Act 2000</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
          {/* Quick Table of Contents Sidebar */}
          <aside
            style={{
              position: 'sticky',
              top: '90px',
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
              TABLE OF CONTENTS
            </div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontSize: '0.86rem',
                    color: 'var(--text-dark)',
                    padding: '0.4rem 0.6rem',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    fontWeight: 500
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.background = 'var(--color-primary-light)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-dark)';
                    e.currentTarget.style.background = 'none';
                  }}
                >
                  {s.title}
                </button>
              ))}
            </nav>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Need direct assistance?</div>
              <a
                href="mailto:nexcoregen@ankitpatil1999.online"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.82rem', padding: '0.6rem 0.8rem' }}
              >
                <Mail size={14} /> Contact Privacy Team
              </a>
            </div>
          </aside>

          {/* Legal Text Sections */}
          <main style={{ maxWidth: '820px' }}>
            {/* Section 1 */}
            <section id="introduction" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                1. Introduction & Overview
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Welcome to <strong>NextcoreGent Technologies</strong> ("NextcoreGent", "we", "our", or "us"), founded by <strong>Ankit Patil</strong> and headquartered in Nagpur, Maharashtra, India. We specialize in designing and engineering high-impact digital solutions, custom web and mobile applications, backend microservices, and specialized SaaS operating systems such as <strong>FitCore OS</strong> (Gym Management & Turnstile Access), <strong>BhishiPe</strong>, and <strong>RingPe</strong>.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                This Privacy Policy explains how we collect, store, process, and safeguard the information you provide when you interact with our website, utilize our SaaS platforms, or partner with us for bespoke development services. We adhere strictly to the applicable laws of India, including the <strong>Digital Personal Data Protection Act, 2023 (DPDPA)</strong> and the <strong>Information Technology Act, 2000</strong>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="data-we-collect" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                2. Information We Collect
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Depending on how you interact with our ecosystem, we may collect the following categories of information:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.4rem' }}>
                    A. Information You Voluntarily Provide
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    When you submit an enquiry form, schedule a consultation, or register for our products: your Full Name, Corporate Email Address (<code style={{ background: '#f1f5f9', padding: '2px 5px', borderRadius: '4px' }}>name@company.com</code>), Phone / WhatsApp Number, Company / Organization Name, Project Specifications, and estimated budget.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.4rem' }}>
                    B. Subscription & Commercial Billing Data
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    For clients utilizing FitCore or our custom services: Billing contact details, GST numbers, and payment transaction metadata. Note: We never store complete credit card or debit card numbers on our servers; payments are processed securely via RBI-authorized payment aggregators (e.g. Razorpay, UPI).
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.4rem' }}>
                    C. Technical & Diagnostic Logs
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Browser type, operating system, IP address, referral URLs, access timestamps, and telemetry performance logs generated during platform interaction.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-use" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                3. How We Use Your Information
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We use collected data solely for legitimate business and engineering purposes:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  'To design, architect, develop, and maintain custom software applications contracted by you.',
                  'To authenticate members, process gym check-ins, and manage subscriptions via our FitCore OS platform.',
                  'To respond promptly to queries sent via WhatsApp, Email, or our online enquiry form.',
                  'To prevent fraudulent activity, safeguard turnstile hardware from unauthorized access, and ensure network integrity.',
                  'To dispatch critical service notifications, invoice receipts, and contract milestone updates.',
                  'To satisfy statutory accounting and tax compliance requirements under Indian law.'
                ].map((text, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <div style={{ background: 'var(--color-primary-light)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--color-primary)', fontSize: '0.92rem', color: 'var(--color-navy)' }}>
                <strong>Zero Data Selling:</strong> We do not sell, rent, monetize, or trade your personal or business data to data brokers or advertising networks under any circumstances.
              </div>
            </section>

            {/* Section 4 */}
            <section id="iot-access" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                4. FitCore IoT & Turnstile Access Data
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Our flagship product, <strong>FitCore OS</strong>, connects gym owners' administrative dashboards with physical hardware (turnstiles, flap barriers, RFID/NFC readers, and QR scanners).
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <li style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    <strong>Gate Check-In Logs:</strong> When members scan their dynamic QR code or tap an NFC card at a FitCore turnstile, our IoT gateways log the timestamp, member ID, gate ID, and entry status (Granted/Denied). This information belongs strictly to the gym franchise licensee.
                  </li>
                  <li style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    <strong>Biometric Data Handling:</strong> If a gym integrates biometric fingerprint or facial readers with FitCore, biometric templates are encrypted at the edge device and are never transmitted in raw unhashed form.
                  </li>
                  <li style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    <strong>Multi-Branch Isolation:</strong> Data from one fitness center is strictly sandboxed using tenant isolation and cannot be accessed by any other gym client.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="data-sharing" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                5. Sharing & Third-Party Processors
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We only share data with verified technical service providers essential for software operations:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Cloud Infrastructure Providers:</strong> AWS (Amazon Web Services), Vercel, and Cloudflare for secure hosting, database replication, and DDoS mitigation.</li>
                <li><strong>Payment Processors:</strong> Razorpay, Cashfree, or UPI aggregators for payment settlements and automated invoices.</li>
                <li><strong>Communication Gateways:</strong> WhatsApp Business API and transactional SMS gateways (e.g. Twilio) strictly for sending OTPs, attendance notifications, and payment receipts requested by the user.</li>
                <li><strong>Legal Authorities:</strong> If strictly required by applicable court order, law enforcement investigation, or statutory directive under Indian jurisdiction.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="data-security" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                6. Data Security & Encryption Architecture
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                We implement industry-grade technical and physical safeguards to prevent unauthorized access or data breaches:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <Lock size={22} color="var(--color-primary)" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Encryption in Transit & Rest</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>All network communications enforce TLS 1.3 encryption. Database storage enforces AES-256 encryption.</div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <Eye size={22} color="var(--color-green)" style={{ marginBottom: '0.5rem' }} />
                  <div style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>Role-Based Access Control</div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>Only authenticated personnel with authorized roles can access client production logs or database instances.</div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="user-rights" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                7. Your Rights Under DPDPA (India)
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Under the Indian Digital Personal Data Protection Act (DPDPA 2023), you hold the following rights:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <strong>Right to Access:</strong> You may request a summary of the personal data we hold about you.
                </div>
                <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <strong>Right to Correction & Erasure:</strong> You can ask us to update inaccurate data or erase your information when it is no longer required for legitimate business contracts.
                </div>
                <div style={{ padding: '0.75rem 1rem', background: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-color)', fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                  <strong>Right of Grievance Redressal:</strong> You can contact our designated Grievance Officer regarding any privacy concern.
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="cookies" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                8. Cookies & Telemetry
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Our website uses only essential session cookies and anonymous performance metrics to preserve user preferences (such as language or active tab state). We do not load intrusive third-party cross-site advertising trackers or behavioural profiling cookies. You can manage or disable cookies via your browser settings at any time.
              </p>
            </section>

            {/* Section 9 */}
            <section id="retention" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                9. Data Retention & Deletion
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                We retain client project data and contract records for as long as your service engagement is active or as necessary to fulfill legal obligations. Upon termination of a SaaS subscription (e.g. FitCore), gym owners may export their complete member database in CSV/JSON format, after which production tenant databases are purged within 60 days.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                10. Grievance Officer & Contacts
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                In accordance with the Information Technology Act 2000 and DPDPA Rules, if you have any questions, feedback, or grievance regarding our privacy practices, please contact our designated office:
              </p>

              <div style={{ background: '#071A3A', color: '#fff', borderRadius: '16px', padding: '2rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                  NextcoreGent Technologies
                </div>
                <div style={{ color: '#38BDF8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  ATTN: Data Protection & Grievance Cell (Ankit Patil)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="#38BDF8" />
                    <span>Email: <a href="mailto:nexcoregen@ankitpatil1999.online" style={{ color: '#fff', textDecoration: 'underline' }}>nexcoregen@ankitpatil1999.online</a></span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} color="#38BDF8" />
                    <span>Phone: <a href="tel:9209282289" style={{ color: '#fff' }}>+91 9209282289</a></span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin size={18} color="#38BDF8" />
                    <span>Location: Nagpur, Maharashtra, India</span>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Response time: Usually within 24 to 48 business hours.</span>
                  <button onClick={onBackToHome} className="btn btn-white" style={{ fontSize: '0.82rem', padding: '0.5rem 1rem' }}>
                    Return to Homepage
                  </button>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ padding: '2.5rem 0', background: '#FFFFFF', borderTop: '1px solid var(--border-color)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            © {new Date().getFullYear()} NextcoreGent Technologies. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Privacy Policy</span>
            <button onClick={onNavigateToTerms} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}>Terms & Conditions</button>
            <button onClick={onBackToHome} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}>Home</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
