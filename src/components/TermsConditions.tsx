import React, { useEffect } from 'react';
import { ArrowLeft, Scale, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

interface TermsConditionsProps {
  onBackToHome: () => void;
  onNavigateToPrivacy: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBackToHome, onNavigateToPrivacy }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms' },
    { id: 'services-scope', title: '2. Scope of Services & SaaS Licenses' },
    { id: 'client-obligations', title: '3. Client Accounts & Security' },
    { id: 'ip-rights', title: '4. Intellectual Property & Code Ownership' },
    { id: 'payments-billing', title: '5. Fees, Invoicing & Subscription Billing' },
    { id: 'fitcore-terms', title: '6. FitCore Hardware & IoT Turnstile Terms' },
    { id: 'service-levels', title: '7. Service Availability & Support SLA' },
    { id: 'prohibited-uses', title: '8. Prohibited Conduct & Reverse Engineering' },
    { id: 'disclaimers', title: '9. Warranties & Limitation of Liability' },
    { id: 'termination', title: '10. Termination & Suspension' },
    { id: 'governing-law', title: '11. Governing Law & Dispute Resolution' },
    { id: 'contact-notices', title: '12. Contact & Formal Notices' },
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
              onClick={onNavigateToPrivacy}
              style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.88rem', cursor: 'pointer' }}
            >
              Privacy Policy →
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
              <Scale size={14} /> COMMERCIAL & USER AGREEMENT
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--color-navy)', marginBottom: '1rem' }}>
              Terms & Conditions
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 1.5rem auto' }}>
              Terms of Service and Master Services Agreement governing the access and usage of <strong>NextcoreGent Technologies</strong> software, SaaS products, and custom engineering services.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', background: '#FFFFFF', padding: '0.5rem 1.25rem', borderRadius: '9999px', border: '1px solid var(--border-color)' }}>
              <span>Effective Date: <strong>September 19, 2026</strong></span>
              <span>•</span>
              <span>Jurisdiction: <strong>Nagpur, Maharashtra, India</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="container" style={{ padding: '4rem 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
          {/* Quick Table of Contents Sticky Sidebar */}
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
              CLAUSE DIRECTORY
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
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Enterprise Contract Queries?</div>
              <a
                href="mailto:nexcoregen@ankitpatil1999.online"
                className="btn btn-primary"
                style={{ width: '100%', fontSize: '0.82rem', padding: '0.6rem 0.8rem' }}
              >
                <Mail size={14} /> Contact Legal Desk
              </a>
            </div>
          </aside>

          {/* Legal Text Sections */}
          <main style={{ maxWidth: '820px' }}>
            {/* Section 1 */}
            <section id="acceptance" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                1. Acceptance of Terms
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                By accessing or browsing the website of <strong>NextcoreGent Technologies</strong>, subscribing to our SaaS applications (including <strong>FitCore OS</strong>), or signing a custom software development contract with us, you ("Client", "User", or "Customer") agree to be bound by these Terms & Conditions. If you are entering into this agreement on behalf of a company, gym franchise, or legal entity, you represent that you possess the full legal authority to bind that organization.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                If you do not agree with any part of these Terms, you must immediately discontinue use of our website, applications, and services.
              </p>
            </section>

            {/* Section 2 */}
            <section id="services-scope" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                2. Scope of Services & SaaS Licenses
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                NextcoreGent Technologies delivers digital products and bespoke technology engineering services across three main models:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.3rem' }}>
                    A. Custom Engineering & Consulting
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Full-cycle Web Development, Mobile Applications (React Native, iOS, Android), UI/UX product design, high-concurrency microservices, and third-party API integrations executed under mutually signed Statements of Work (SOW).
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.3rem' }}>
                    B. Proprietary SaaS Platforms (FitCore OS)
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    Multi-tenant cloud subscription software for fitness centers, athletic clubs, and gym franchises incorporating member dashboards, QR check-in passes, automated fee billing, and hardware turnstile gateway telemetry.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ color: 'var(--color-navy)', display: 'block', marginBottom: '0.3rem' }}>
                    C. Maintenance & Infrastructure Support
                  </strong>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    24/7 cloud server monitoring, database performance tuning, bug fixing, and continuous security patching.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="client-obligations" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                3. Client Accounts, Credentials & Security
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                To access FitCore administrator panels, API keys, or deployment environments, you must maintain active credentials. You agree to:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  'Provide accurate, current, and verifiable company contact and billing details.',
                  'Maintain confidentiality of administrative passwords, 2FA tokens, and turnstile IoT secret keys.',
                  'Notify NextcoreGent immediately at nexcoregen@ankitpatil1999.online in the event of any unauthorized credential breach or suspicious access.',
                  'Ensure that your authorized staff members do not share individual login accounts.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                    <CheckCircle2 size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '4px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 4 */}
            <section id="ip-rights" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                4. Intellectual Property & Code Ownership
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                We maintain clear and fair intellectual property boundaries:
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1rem' }}>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  <li>
                    <strong>Custom Client Deliverables:</strong> Upon full and final settlement of all milestone invoices specified in a development contract, full ownership of client-specific custom source code and UI assets transfers to the client.
                  </li>
                  <li>
                    <strong>NextcoreGent Core Platforms:</strong> All rights, title, trademarks, and copyright in NextcoreGent Technologies' proprietary software, including the FitCore OS platform, turnstile firmware, BhishiPe, algorithms, and backend architectures remain the exclusive property of NextcoreGent Technologies.
                  </li>
                  <li>
                    <strong>Client Data Ownership:</strong> All business records, member lists, revenue metrics, and proprietary assets uploaded by the client remain 100% the property of the client.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="payments-billing" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                5. Fees, Invoicing & Subscription Billing
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Commercial terms for our products and consulting engagements:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                <li><strong>Payment Milestones:</strong> Custom development projects follow staged milestones (e.g. 30% Advance, 40% Development/Alpha, 30% Final Launch & QA handover).</li>
                <li><strong>SaaS Subscriptions:</strong> FitCore OS subscription licenses are billed on monthly or annual renewal cycles. Accounts are billed in advance in Indian Rupees (INR) plus statutory GST (Goods & Services Tax) where applicable.</li>
                <li><strong>Late Payment & Suspension:</strong> Failure to settle invoices within 15 days of the due date may result in temporary rate-limiting or suspension of cloud API endpoints until payment is reconciled.</li>
                <li><strong>Refund Policy:</strong> Custom software engineering hours already executed and delivered are non-refundable. For SaaS subscriptions, clients may cancel anytime to prevent the next renewal cycle.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="fitcore-terms" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                6. FitCore Hardware & IoT Turnstile Terms
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                For clients deploying our hardware controllers (ESP32 / Raspberry Pi IoT gateways connected to gym turnstiles or access barriers):
              </p>
              <div style={{ background: '#FFFFFF', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color)', fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                <p style={{ marginBottom: '0.75rem' }}>
                  <strong>Local Network Requirements:</strong> The client is responsible for providing a stable local internet connection (Wi-Fi or Ethernet LAN) and uninterrupted electrical supply at turnstile gates to ensure sub-200ms cloud gate authorization.
                </p>
                <p>
                  <strong>Hardware Warranty:</strong> NextcoreGent controllers deployed directly by our team include standard hardware warranty against manufacturing defects for 12 months. Physical tampering, water damage, or unauthorized electrical modifications void this warranty.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="service-levels" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                7. Service Availability & Support SLA
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                NextcoreGent Technologies targets a <strong>99.9% uptime</strong> for our cloud APIs and SaaS platforms, excluding scheduled maintenance windows announced at least 48 hours in advance. Emergency support is accessible via dedicated hotline and WhatsApp priority support for production-critical outages.
              </p>
            </section>

            {/* Section 8 */}
            <section id="prohibited-uses" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                8. Prohibited Conduct & Reverse Engineering
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                You expressly agree not to:
              </p>
              <ul style={{ paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li>Decompile, reverse engineer, disassemble, or derive source code from compiled FitCore firmware or proprietary binaries.</li>
                <li>Bypass turnstile gate authentication protocols through unauthorized MQTT packet injection or replay attacks.</li>
                <li>Rent, lease, sub-license, or resell access to the FitCore platform without an authorized reseller partner contract.</li>
                <li>Use our platforms to transmit spam, malware, or unlawful content under the Information Technology Act 2000.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="disclaimers" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                9. Warranties & Limitation of Liability
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                Except as explicitly guaranteed in written enterprise agreements, our services and software are provided on an "AS IS" and "AS AVAILABLE" basis. To the maximum extent permitted under Indian law, NextcoreGent Technologies and founder Ankit Patil shall not be liable for indirect, punitive, or consequential damages (including lost profits, gym revenue loss, or data downtime) resulting from third-party ISP outages or client hardware failure.
              </p>
            </section>

            {/* Section 10 */}
            <section id="termination" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                10. Termination & Suspension
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                Either party may terminate a service agreement if the other party commits a material breach and fails to remedy it within 30 days of written notice. Upon termination, client databases are made available for immediate backup download before scheduled server decommissioning.
              </p>
            </section>

            {/* Section 11 */}
            <section id="governing-law" style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                11. Governing Law & Dispute Resolution
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1rem' }}>
                These Terms shall be governed by and construed in accordance with the substantive laws of the <strong>Republic of India</strong>. In the event of any commercial controversy or dispute arising out of or relating to these terms, the parties agree to first seek amicable settlement through mediation.
              </p>
              <div style={{ background: 'var(--color-primary-light)', padding: '1rem 1.25rem', borderRadius: '10px', borderLeft: '4px solid var(--color-primary)', fontSize: '0.92rem', color: 'var(--color-navy)' }}>
                <strong>Exclusive Jurisdiction:</strong> Any arbitration or legal proceeding that cannot be resolved amicably shall be submitted to the exclusive jurisdiction of the competent courts in <strong>Nagpur, Maharashtra, India</strong>.
              </div>
            </section>

            {/* Section 12 */}
            <section id="contact-notices" style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.65rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>
                12. Contact & Formal Notices
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Formal legal notices, contract renewal requests, or regulatory communications should be directed to:
              </p>

              <div style={{ background: '#071A3A', color: '#fff', borderRadius: '16px', padding: '2rem' }}>
                <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                  NextcoreGent Technologies
                </div>
                <div style={{ color: '#38BDF8', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  ATTN: Legal & Commercial Contracts (Ankit Patil)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={18} color="#38BDF8" />
                    <span>Official Email: <a href="mailto:nexcoregen@ankitpatil1999.online" style={{ color: '#fff', textDecoration: 'underline' }}>nexcoregen@ankitpatil1999.online</a></span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={18} color="#38BDF8" />
                    <span>Direct Hotline: <a href="tel:9209282289" style={{ color: '#fff' }}>+91 9209282289</a></span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin size={18} color="#38BDF8" />
                    <span>Headquarters: Nagpur, Maharashtra, India</span>
                  </div>
                </div>

                <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Business hours: Monday to Saturday, 9:30 AM to 6:30 PM IST.</span>
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
            <button onClick={onNavigateToPrivacy} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}>Privacy Policy</button>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Terms & Conditions</span>
            <button onClick={onBackToHome} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.85rem' }}>Home</button>
          </div>
        </div>
      </footer>
    </div>
  );
};
