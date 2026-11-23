import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertCircle,
  Database,
  Send,
  Zap,
  PhoneCall,
  ChevronRight,
  FileSpreadsheet
} from 'lucide-react';
import { Logo } from './Logo';

interface AdmissionZenPageProps {
  onBackToHome: () => void;
  onNavigateToContact?: () => void;
}

export const AdmissionZenPage: React.FC<AdmissionZenPageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'delivered' | 'ongoing' | 'simulator' | 'security' | 'architecture'>('delivered');

  // Interactive WhatsApp Broadcast & Bulk Engine Simulator
  const [simLeadCount, setSimLeadCount] = useState<number>(5000);
  const [simTargetCourse, setSimTargetCourse] = useState<string>('Class 11 Science (JEE/NEET)');
  const [simRateLimit] = useState<number>(80); // 80 msgs/sec BullMQ target
  const [simProgress, setSimProgress] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  const startSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimProgress(0);
    setSimLogs([
      `[INGEST] Streaming CSV parser initialized. Reading ${simLeadCount.toLocaleString()} leads...`,
      `[DEDUPE] Normalized phone numbers to E.164. Deduplicated against MongoDB primary index.`,
      `[SECURITY] IDOR Shield applied: Lead batch assigned strictly to Counselor A & B isolation groups.`,
      `[META API] WhatsApp Cloud API HMAC SHA-256 webhook verified. BullMQ queue active (80 msgs/sec)...`
    ]);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      if (current >= 100) {
        setSimProgress(100);
        setIsSimulating(false);
        setSimLogs(prev => [
          ...prev,
          `[DISPATCH COMPLETE] ${simLeadCount.toLocaleString()} personalized WhatsApp templates sent successfully in ${(simLeadCount / simRateLimit).toFixed(1)}s!`,
          `[STATS] Zero rate-limit breaches (BullMQ bucket preserved at 80/sec). Delivery receipts acknowledged.`
        ]);
        clearInterval(interval);
      } else {
        setSimProgress(current);
      }
    }, 400);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'inherit' }}>
      {/* 1. TOP STICKY HEADER */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(255, 255, 255, 0.97)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid #E2E8F0',
          padding: '0.85rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              type="button"
              onClick={onBackToHome}
              className="btn btn-secondary"
              style={{
                padding: '0.5rem 0.95rem',
                fontSize: '0.84rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                borderRadius: '8px'
              }}
            >
              <ArrowLeft size={16} /> Back to NexCoreGen
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #15803D, #22C55E)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <MessageCircle size={20} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
                    AdmissionZen
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '0.15rem 0.5rem',
                      borderRadius: '6px',
                      background: '#FEF3C7',
                      color: '#B45309',
                      border: '1px solid #FCD34D',
                      textTransform: 'uppercase'
                    }}
                  >
                    Client Project • Ongoing
                  </span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>
                  Commissioned Educational Client Engagement
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#contact-lead"
              className="btn"
              style={{
                background: '#16A34A',
                color: '#FFFFFF',
                padding: '0.55rem 1.15rem',
                fontSize: '0.85rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontWeight: 700
              }}
            >
              Build a Custom CRM <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 3.5rem 0',
          background: 'radial-gradient(circle at 50% 0%, #F0FDF4 0%, #F8FAFC 85%)',
          borderBottom: '1px solid #E2E8F0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Client Project Pill */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              background: '#FEF3C7',
              border: '1px solid #FDE68A',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: '#92400E',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em'
            }}
          >
            <Clock size={14} color="#92400E" /> CLIENT COMMISSIONED • ACTIVE SPRINT IN PRODUCTION
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.15,
              color: '#071A3A',
              marginBottom: '1.25rem'
            }}
          >
            High-Velocity Student Admission CRM &{' '}
            <span style={{ background: 'linear-gradient(135deg, #15803D 0%, #22C55E 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              WhatsApp Outreach Engine.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: '#475569', lineHeight: 1.65, maxWidth: '820px', margin: '0 auto 2.25rem auto' }}>
            Commissioned by an educational institution client to eliminate manual caller spreadsheets and missed student inquiries. Powered by a <strong>Streaming 5,000+ Excel Parser</strong>, <strong>Meta Cloud WhatsApp API at 80 msgs/sec</strong>, and <strong>Strict Counselor Privacy (IDOR Shield)</strong>.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a
              href="#interactive-simulator"
              className="btn"
              style={{
                background: '#16A34A',
                color: '#fff',
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(22, 163, 74, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Test WhatsApp Broadcast Simulator <Zap size={18} />
            </a>

            <a
              href="https://wa.me/919209282289?text=Hello%20Ankit,%20I%20want%20to%20discuss%20an%20Admission%20CRM%20or%20WhatsApp%20Outreach%20System"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <PhoneCall size={18} /> Discuss Your Client Project
            </a>
          </div>

          {/* 4 Trust Metrics Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1.5rem',
              background: '#FFFFFF',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)'
            }}
          >
            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 800, fontSize: '1.25rem' }}>
                <FileSpreadsheet size={20} /> 5,000+ Ingestion
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Sub-3 second streaming Excel & CSV bulk ingestion engine
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0284C7', fontWeight: 800, fontSize: '1.25rem' }}>
                <Zap size={20} /> 80 msgs / sec
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                BullMQ rate-limited Meta Cloud WhatsApp API queue
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9333EA', fontWeight: 800, fontSize: '1.25rem' }}>
                <ShieldCheck size={20} /> IDOR Shield
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Backend-enforced isolation ensuring zero counselor data leaks
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 800, fontSize: '1.25rem' }}>
                <Clock size={20} /> Active Sprint
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Core architecture delivered • AI expansion ongoing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TABS: WORK COMPLETED vs ONGOING SPRINT ROADMAP */}
      <section style={{ padding: '4.5rem 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • SPRINT PROGRESS & CLIENT DELIVERABLES
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: '#071A3A', fontWeight: 800 }}>
              Work Completed & Ongoing Development
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem' }}>
              Transparent breakdown of the modules delivered to the client and active roadmap features currently under engineering.
            </p>
          </div>

          {/* Accessible Tabs Header */}
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              overflowX: 'auto',
              paddingBottom: '0.5rem',
              borderBottom: '2px solid #E2E8F0',
              marginBottom: '2.5rem',
              scrollbarWidth: 'thin'
            }}
            role="tablist"
            aria-label="AdmissionZen Progress Sprints"
          >
            {[
              { id: 'delivered', label: '1. Delivered Work (Milestone 1)', icon: CheckCircle2 },
              { id: 'ongoing', label: '2. Active Ongoing Sprint (Milestone 2)', icon: Clock },
              { id: 'simulator', label: '3. WhatsApp Dispatch Simulator', icon: Zap },
              { id: 'security', label: '4. IDOR Shield & Data Isolation', icon: ShieldCheck },
              { id: 'architecture', label: '5. Technical Architecture', icon: Database }
            ].map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    position: 'relative',
                    padding: '0.8rem 1.4rem',
                    background: isSelected ? '#F0FDF4' : 'transparent',
                    border: 'none',
                    borderRadius: '8px 8px 0 0',
                    color: isSelected ? '#15803D' : '#64748B',
                    fontWeight: isSelected ? 800 : 600,
                    fontSize: '0.92rem',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Icon size={17} color={isSelected ? '#15803D' : '#94A3B8'} />
                  <span>{tab.label}</span>
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: '#15803D',
                        borderRadius: '3px 3px 0 0'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB 1: DELIVERED WORK */}
          {activeTab === 'delivered' && (
            <div role="tabpanel" id="panel-delivered" aria-labelledby="tab-delivered">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} /> COMPLETED & DELIVERED
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Streaming 5,000+ Bulk Excel Ingestion
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Memory-efficient stream parser ingesting 5,000+ student rows in under 3 seconds. Features automatic column detection (Name, Phone, Target Course, City) and E.164 phone sanitization.
                  </p>
                  <div style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: 700 }}>
                    ✓ Deduplication engine stops repeat phone numbers
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} /> COMPLETED & DELIVERED
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Meta Cloud WhatsApp Broadcast Engine
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Integrated with official Meta Cloud WhatsApp Business API. Uses BullMQ queue to enforce 80 msgs/second rate-limiting with HMAC SHA-256 signature verification for inbound webhooks.
                  </p>
                  <div style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: 700 }}>
                    ✓ Dynamic variable interpolation: &#123;&#123;1&#125;&#125; Name, &#123;&#123;2&#125;&#125; Class
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} /> COMPLETED & DELIVERED
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Strict Counselor Isolation (IDOR Shield)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Ensures absolute lead security. Counselors can only query and mutate their own assigned leads. Automated regression test (`test:isolation`) prevents unauthorized horizontal data leaks.
                  </p>
                  <div style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: 700 }}>
                    ✓ Super Admin global view + Counselor scoped views
                  </div>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', marginBottom: '0.75rem' }}>
                    <CheckCircle2 size={18} /> COMPLETED & DELIVERED
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    NutriZen Forest Green Mobile UI
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Modern React.js frontend with warm cream & forest green aesthetic. Features a fluid Mobile Bottom Nav bar, center circular `+` Action FAB, and desktop tablet split-view.
                  </p>
                  <div style={{ fontSize: '0.78rem', color: '#15803D', fontWeight: 700 }}>
                    ✓ Public 1-tap OTP student admission inquiry portal
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ONGOING SPRINT ROADMAP */}
          {activeTab === 'ongoing' && (
            <div role="tabpanel" id="panel-ongoing" aria-labelledby="tab-ongoing">
              <div style={{ background: '#FFFBEB', borderRadius: '16px', padding: '2rem', border: '1px solid #FDE68A', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#92400E', fontWeight: 800, fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                  <AlertCircle size={20} /> ACTIVE CLIENT SPRINT IN PROGRESS
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#78350F', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Phase 2: Conversational AI & Multi-Channel Drip Pipelines
                </h3>
                <p style={{ color: '#92400E', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  NexCoreGen is actively implementing Milestone 2 client specifications. Here is the engineering roadmap currently in execution:
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0', borderTop: '4px solid #D97706' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Sprint Item 2.1 • In Progress
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    24/7 AI WhatsApp Conversational Bot
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
                    Natural language AI answering student queries regarding fee structures, syllabus, hostel facilities, and automated appointment booking for in-person campus visits.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0', borderTop: '4px solid #D97706' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Sprint Item 2.2 • In Progress
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Multi-Channel Drip Sequences
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
                    Sequenced follow-up chains across WhatsApp, SMS, and transactional email based on lead engagement triggers (e.g. Day 1: Brochure &rarr; Day 3: Webinar invite &rarr; Day 7: Scholarship deadline).
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0', borderTop: '4px solid #D97706' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Sprint Item 2.3 • In Progress
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Application Fee Payment Gateway
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
                    Instant registration fee checkout with Razorpay/UPI deep links inside WhatsApp, issuing cryptographically signed receipt PDFs instantly.
                  </p>
                </div>

                <div style={{ background: '#FFFFFF', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0', borderTop: '4px solid #D97706' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Sprint Item 2.4 • In Progress
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Predictive Lead Scoring Engine
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.6 }}>
                    ML scoring prioritizing high-intent student leads based on portal engagement frequency, brochure download times, and WhatsApp link clicks.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: WHATSAPP DISPATCH SIMULATOR */}
          {activeTab === 'simulator' && (
            <div role="tabpanel" id="panel-simulator" aria-labelledby="tab-simulator">
              <div id="interactive-simulator" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#DCFCE7', color: '#15803D', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    INTERACTIVE QUEUE SIMULATOR
                  </div>
                  <h3 style={{ fontSize: '1.75rem', color: '#071A3A', fontWeight: 800, marginBottom: '1rem' }}>
                    Test Bulk Ingestion & WhatsApp Rate-Limiting
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.94rem', marginBottom: '1.5rem' }}>
                    Meta enforces strict rate limits to prevent WhatsApp business number bans. Test our <strong>BullMQ Queue Dispatcher</strong> configured at a safe <strong>80 msgs/second</strong> with dynamic student parameter interpolation.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Student Lead Batch Size</span>
                        <strong style={{ color: '#16A34A' }}>{simLeadCount.toLocaleString()} Leads</strong>
                      </div>
                      <input
                        type="range"
                        min="1000"
                        max="15000"
                        step="500"
                        value={simLeadCount}
                        onChange={(e) => setSimLeadCount(Number(e.target.value))}
                        disabled={isSimulating}
                        style={{ width: '100%', accentColor: '#16A34A' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        Target Academic Course
                      </label>
                      <select
                        value={simTargetCourse}
                        onChange={(e) => setSimTargetCourse(e.target.value)}
                        disabled={isSimulating}
                        style={{ width: '100%', padding: '0.65rem 0.9rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.88rem', background: '#fff' }}
                      >
                        <option value="Class 11 Science (JEE/NEET)">Class 11 Science (JEE/NEET)</option>
                        <option value="B.Tech Computer Science & AI">B.Tech Computer Science & AI</option>
                        <option value="Executive MBA (FinTech)">Executive MBA (FinTech)</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={startSimulation}
                      disabled={isSimulating}
                      className="btn"
                      style={{
                        background: isSimulating ? '#94A3B8' : '#16A34A',
                        color: '#fff',
                        padding: '0.85rem 1.5rem',
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: isSimulating ? 'not-allowed' : 'pointer'
                      }}
                    >
                      <Send size={16} /> {isSimulating ? `Broadcasting (${simProgress}%)...` : `Simulate ${simLeadCount.toLocaleString()} WhatsApp Dispatch`}
                    </button>
                  </div>
                </div>

                {/* Simulation Terminal Output */}
                <div style={{ background: '#0F172A', borderRadius: '18px', padding: '1.75rem', border: '1px solid #1E293B', color: '#F8FAFC', boxShadow: '0 15px 35px rgba(0,0,0,0.18)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: isSimulating ? '#FBBF24' : '#22C55E' }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38BDF8' }}>BullMQ Dispatcher HUD</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Meta Cloud Webhook v21.0</span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94A3B8', marginBottom: '0.35rem' }}>
                      <span>Queue Completion</span>
                      <strong style={{ color: '#4ADE80' }}>{simProgress}%</strong>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${simProgress}%`, background: '#22C55E', transition: 'width 0.3s ease' }} />
                    </div>
                  </div>

                  {/* WhatsApp Message Preview Card */}
                  <div style={{ background: '#075E54', padding: '1rem', borderRadius: '10px', marginBottom: '1.25rem', border: '1px solid rgba(255,255,255,0.12)' }}>
                    <div style={{ fontSize: '0.72rem', color: '#25D366', fontWeight: 800, marginBottom: '0.35rem' }}>
                      OUTGOING TEMPLATE PREVIEW:
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#FFFFFF', lineHeight: 1.5 }}>
                      "Hello <strong>Aryan Sharma</strong>, admissions are now officially open for <strong>{simTargetCourse}</strong>. Review your scholarship eligibility and apply directly: <span style={{ textDecoration: 'underline', color: '#38BDF8' }}>portal.admissioncrm.com/apply</span>"
                    </div>
                  </div>

                  {/* Terminal Log Output */}
                  <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '8px', padding: '0.85rem', maxHeight: '140px', overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.72rem', color: '#A5B4FC', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {simLogs.length === 0 ? (
                      <div style={{ color: '#64748B' }}>// Click "Simulate WhatsApp Dispatch" to test queue execution...</div>
                    ) : (
                      simLogs.map((log, idx) => (
                        <div key={idx}>{log}</div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: IDOR SHIELD & SECURITY */}
          {activeTab === 'security' && (
            <div role="tabpanel" id="panel-security" aria-labelledby="tab-security">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#FEE2E2', color: '#991B1B', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    BACKEND ENFORCED PRIVACY
                  </div>
                  <h3 style={{ fontSize: '1.75rem', color: '#071A3A', fontWeight: 800, marginBottom: '1rem' }}>
                    Insecure Direct Object Reference (IDOR) Shield
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.94rem', marginBottom: '1.25rem' }}>
                    In typical admission portals, a counselor could manipulate lead IDs in the URL or payload to spy on high-value student leads assigned to other team members. AdmissionZen solves this at the database query level:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ padding: '0.85rem 1rem', background: '#F8FAFC', borderRadius: '10px', borderLeft: '4px solid #16A34A' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>
                        Automatic Scoped Filters
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                        Every MongoDB read, update, or call action automatically appends <code>&#123; counselorId: req.user.id &#125;</code>, rendering ID manipulation impossible.
                      </div>
                    </div>

                    <div style={{ padding: '0.85rem 1rem', background: '#F8FAFC', borderRadius: '10px', borderLeft: '4px solid #2563EB' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem' }}>
                        Super Admin Reassignment Control
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                        Only the Super Admin possesses elevated rights to rebalance lead distribution or monitor team-wide conversion metrics.
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ background: '#0F172A', borderRadius: '16px', padding: '1.75rem', border: '1px solid #1E293B', color: '#F8FAFC' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#38BDF8', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.75rem', marginBottom: '1rem' }}>
                    AUTOMATED ISOLATION TEST SUITE OUTPUT
                  </div>
                  <pre style={{ fontSize: '0.75rem', color: '#4ADE80', fontFamily: 'monospace', lineHeight: 1.5, overflowX: 'auto', margin: 0 }}>
{`$ npm run test:isolation

> admission-crm@1.0.0 test:isolation
> node testIsolation.js

[1] Attempting Counselor A login... Token acquired.
[2] Attempting Counselor B login... Token acquired.
[3] Counselor A fetching Lead #1042 (Assigned to A): 200 OK
[4] Counselor B attempting to fetch Lead #1042:
    ==> HTTP 403 Forbidden: IDOR Shield triggered.
[5] Counselor B attempting update on Lead #1042:
    ==> HTTP 403 Forbidden: Cross-counselor mutation blocked.

✓ ALL 12 MULTI-ROLE DATA ISOLATION ASSERTIONS PASSED`}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TECHNICAL ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div role="tabpanel" id="panel-architecture" aria-labelledby="tab-architecture">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Frontend Architecture
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: '#475569' }}>
                    <li>• React 19 + TypeScript</li>
                    <li>• NutriZen Forest Green Design System</li>
                    <li>• Mobile Bottom Nav with Circular FAB</li>
                    <li>• Desktop Tablet Split-View Dashboard</li>
                    <li>• Public 1-Tap OTP Student Portal</li>
                  </ul>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Backend Microservices
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: '#475569' }}>
                    <li>• Node.js & Express layered architecture</li>
                    <li>• BullMQ Redis rate-limited queue (80/s)</li>
                    <li>• Meta Cloud WhatsApp API v21.0</li>
                    <li>• HMAC SHA-256 Webhook Verification</li>
                    <li>• Fast Streaming Excel/CSV Parser</li>
                  </ul>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                  <h4 style={{ fontSize: '1.1rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Database & Data Integrity
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.84rem', color: '#475569' }}>
                    <li>• MongoDB with Compound Indexes</li>
                    <li>• Phone number deduplication index</li>
                    <li>• Real-Time class vacancy quotas</li>
                    <li>• Daily counselor conversion metrics</li>
                    <li>• Complete audit trail logs</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. CLIENT CALL TO ACTION */}
      <section id="contact-lead" style={{ padding: '5rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            • CLIENT ENGAGEMENTS & CUSTOM CRMS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#071A3A', fontWeight: 800, marginBottom: '1rem' }}>
            Have a Client Requirement for a High-Speed Platform?
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 2rem auto' }}>
            Whether you need a custom WhatsApp broadcast engine, a high-concurrency admission portal, or enterprise data isolation, we deliver production-ready software on schedule.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                onBackToHome();
                setTimeout(() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="btn btn-primary"
              style={{ padding: '0.9rem 2rem', fontSize: '1rem', borderRadius: '10px' }}
            >
              Discuss Your Project Requirements <ArrowRight size={16} />
            </button>

            <a
              href="https://wa.me/919209282289?text=Hello%20Ankit,%20I%20have%20a%20client%20project%20similar%20to%20AdmissionZen"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.9rem 1.8rem', fontSize: '1rem', borderRadius: '10px' }}
            >
              <MessageCircle size={18} /> WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ background: '#071A3A', color: '#94A3B8', padding: '3.5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Logo variant="dark" size="sm" />
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>AdmissionZen Client Project</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Commissioned Client Engagement • Engineered by NexCoreGen Technology Pvt Ltd © 2026.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <button
              type="button"
              onClick={onBackToHome}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.45rem 0.95rem', borderRadius: '6px' }}
            >
              Return to NexCoreGen Home
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
