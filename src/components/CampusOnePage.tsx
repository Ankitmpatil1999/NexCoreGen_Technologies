import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Shield,
  Layers,
  Cpu,
  GraduationCap,
  Database,
  Calculator,
  CheckCircle2,
  Building2,
  FileText,
  Award,
  PhoneCall,
  School,
  ChevronRight
} from 'lucide-react';
import { Logo } from './Logo';

interface CampusOnePageProps {
  onBackToHome: () => void;
  onNavigateToContact?: () => void;
}

export const CampusOnePage: React.FC<CampusOnePageProps> = ({ onBackToHome }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'modules' | 'ledger' | 'compliance' | 'srs'>('architecture');

  // Ledger Simulator State (Strictly in Paise)
  const [studentStrength, setStudentStrength] = useState<number>(3500);
  const [tuitionFeeRupees, setTuitionFeeRupees] = useState<number>(125000); // 1.25 Lakh INR
  const [scholarshipPercent, setScholarshipPercent] = useState<number>(15); // 15% TFW / Gov Scholarship

  // Calculations in Paise (64-bit integer simulation: 1 INR = 100 Paise)
  const totalTuitionPaise = BigInt(studentStrength) * BigInt(tuitionFeeRupees) * 100n;
  const scholarshipDiscountPaise = (totalTuitionPaise * BigInt(scholarshipPercent)) / 100n;
  const netFeeCollectionPaise = totalTuitionPaise - scholarshipDiscountPaise;

  const formatPaiseToINR = (paise: bigint): string => {
    const rupees = Number(paise / 100n);
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(rupees);
  };

  // Demo Inquiry Form State
  const [institutionForm, setInstitutionForm] = useState({
    instituteName: '',
    pocName: '',
    email: '',
    phone: '',
    category: 'Autonomous Engineering College',
    studentCount: '2500 - 5000'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#F8FAFC', color: '#0F172A', fontFamily: 'inherit' }}>
      {/* 1. TOP STICKY ENTERPRISE HEADER */}
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
                  background: 'linear-gradient(135deg, #1E40AF, #3B82F6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF'
                }}
              >
                <GraduationCap size={20} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A', letterSpacing: '-0.02em' }}>
                    CampusOne
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      padding: '0.15rem 0.45rem',
                      borderRadius: '6px',
                      background: '#DBEAFE',
                      color: '#1D4ED8',
                      textTransform: 'uppercase'
                    }}
                  >
                    Enterprise OS
                  </span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: 600 }}>
                  By NexCoreGen Technology Pvt Ltd
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="#demo-request"
              className="btn btn-primary"
              style={{
                padding: '0.55rem 1.15rem',
                fontSize: '0.85rem',
                borderRadius: '8px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              Request Institutional Demo <ChevronRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section
        style={{
          padding: 'clamp(3.5rem, 6vw, 5.5rem) 0 3.5rem 0',
          background: 'radial-gradient(circle at 50% 0%, #EFF6FF 0%, #F8FAFC 80%)',
          borderBottom: '1px solid #E2E8F0',
          textAlign: 'center'
        }}
      >
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Statutory Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.4rem 1rem',
              background: '#EFF6FF',
              border: '1px solid #BFDBFE',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 800,
              color: '#1D4ED8',
              marginBottom: '1.5rem',
              letterSpacing: '0.04em'
            }}
          >
            <Shield size={14} color="#1D4ED8" /> AICTE • UGC • NBA • NAAC • NEP 2020 ACCREDITATION READY
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
            Unified Smart Campus Operating System for{' '}
            <span style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #3B82F6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Engineering Colleges & Universities.
            </span>
          </h1>

          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.18rem)', color: '#475569', lineHeight: 1.65, maxWidth: '820px', margin: '0 auto 2.25rem auto' }}>
            CampusOne Enterprise consolidates <strong>Academic ERP</strong>, <strong>Dual-Database Multi-Tenant Isolation</strong>, an <strong>Immutable 64-bit Paise Financial Ledger</strong>, <strong>Biometric/RFID IoT Turnstiles</strong>, and <strong>Automated NBA/NAAC Outcome-Based Accreditation</strong> into one battle-tested institutional platform.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <a
              href="#demo-request"
              className="btn btn-primary"
              style={{
                padding: '0.9rem 2rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(29, 78, 216, 0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              Schedule Campus Walkthrough <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919209282289?text=Hello%20Ankit,%20I%20am%20interested%20in%20deploying%20CampusOne%20Enterprise%20for%20our%20Engineering%20College"
              target="_blank"
              rel="noreferrer"
              className="btn"
              style={{
                background: '#25D366',
                color: '#fff',
                padding: '0.9rem 1.8rem',
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <PhoneCall size={18} /> Direct Architect Line
            </a>
          </div>

          {/* 4 Architectural Metrics */}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1D4ED8', fontWeight: 800, fontSize: '1.25rem' }}>
                <Database size={20} /> Dual-DB Multi-Tenant
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Physical Control Plane vs CUG Tenant schema isolation
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#059669', fontWeight: 800, fontSize: '1.25rem' }}>
                <Calculator size={20} /> 64-bit Paise Precision
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Zero-leakage double-entry financial ledger logic
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#7C3AED', fontWeight: 800, fontSize: '1.25rem' }}>
                <Award size={20} /> NBA & NAAC Automation
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Automated CO-PO-PSO direct/indirect attainment matrices
              </div>
            </div>

            <div style={{ textAlign: 'left', padding: '0.5rem 0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#D97706', fontWeight: 800, fontSize: '1.25rem' }}>
                <Cpu size={20} /> IoT Gate Telemetry
              </div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '0.25rem' }}>
                Sub-200ms RFID smart cards & biometric turnstiles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE TABBED SPECIFICATION EXPLORER */}
      <section style={{ padding: '4.5rem 0', background: '#FFFFFF', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ color: '#1D4ED8', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • ENTERPRISE SPECIFICATION MATRIX
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.6rem)', color: '#071A3A', fontWeight: 800 }}>
              Deep Institutional Engineering
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem' }}>
              Inspect the architectural building blocks, 20+ production modules, zero-leakage financial ledger, and statutory accreditation frameworks.
            </p>
          </div>

          {/* Accessible Tabs Header with fade masks */}
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
            aria-label="CampusOne System Capabilities"
          >
            {[
              { id: 'architecture', label: '1. Architecture & Dual-DB', icon: Layers },
              { id: 'modules', label: '2. 20+ Production Modules', icon: School },
              { id: 'ledger', label: '3. Zero-Leakage Paise Ledger', icon: Calculator },
              { id: 'compliance', label: '4. NBA, NAAC & AICTE', icon: Award },
              { id: 'srs', label: '5. IEEE SRS Documentation', icon: FileText }
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
                    background: isSelected ? '#EFF6FF' : 'transparent',
                    border: 'none',
                    borderRadius: '8px 8px 0 0',
                    color: isSelected ? '#1D4ED8' : '#64748B',
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
                  <Icon size={17} color={isSelected ? '#1D4ED8' : '#94A3B8'} />
                  <span>{tab.label}</span>
                  {isSelected && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: '#1D4ED8',
                        borderRadius: '3px 3px 0 0'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* TAB PANEL 1: ARCHITECTURE & DUAL-DB */}
          {activeTab === 'architecture' && (
            <div role="tabpanel" id="panel-architecture" aria-labelledby="tab-architecture">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#DBEAFE', color: '#1E40AF', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    DATA SOVEREIGNTY & ISOLATION
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#071A3A', fontWeight: 800, marginBottom: '1rem' }}>
                    Dual-Database Multi-Tenant Architecture
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                    CampusOne implements strict physical schema isolation to comply with the <strong>Digital Personal Data Protection (DPDP) Act 2023</strong> and educational privacy standards:
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                    <div style={{ padding: '0.85rem 1rem', background: '#F8FAFC', borderRadius: '10px', borderLeft: '4px solid #1E40AF' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem' }}>
                        1. Control Plane Database (`campusone`)
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                        Manages tenant onboarding, subscription license keys, domain routing, unified master identities, and global platform health probes.
                      </div>
                    </div>

                    <div style={{ padding: '0.85rem 1rem', background: '#F8FAFC', borderRadius: '10px', borderLeft: '4px solid #059669' }}>
                      <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem' }}>
                        2. Dedicated Institutional Database (`campusone_cug`)
                      </div>
                      <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                        Physical schema housing student marks, biometric timestamps, double-entry financial ledgers, POS transactions, and faculty appraisals. Zero chance of cross-institution data bleed.
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {['Node.js 24 LTS', 'Express 5', 'TypeScript 6', 'Kysely Query Builder', 'Angular 22', 'Tauri Desktop', 'React Native'].map((t, idx) => (
                      <span key={idx} style={{ padding: '0.3rem 0.75rem', background: '#F1F5F9', color: '#334155', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 700 }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architecture Visual Card */}
                <div style={{ background: '#0B132B', borderRadius: '20px', padding: '2rem', border: '1px solid #1E293B', color: '#F8FAFC', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8' }}>CampusOne System Topology</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>90+ Production Migrations</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#A5B4FC', marginBottom: '0.35rem' }}>
                        API Engine & Outbox Worker Pattern
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#94A3B8', lineHeight: 1.5 }}>
                        REST API with sub-100ms response targets. Asynchronous outbox worker queues dispatching transactional emails, SMS alerts, and turnstile gate commands without blocking the HTTP loop.
                      </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#6EE7B7', marginBottom: '0.35rem' }}>
                        Cross-Platform Client Fleet
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#94A3B8', lineHeight: 1.5 }}>
                        Angular 22 web admin portal with Tauri native desktop encapsulation for offline registrar operations + React Native mobile application with biometric gate unlock.
                      </div>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FDE047', marginBottom: '0.35rem' }}>
                        IoT Edge Gateway Hub
                      </div>
                      <div style={{ fontSize: '0.76rem', color: '#94A3B8', lineHeight: 1.5 }}>
                        Hardware listeners for RFID cards, biometric fingerprint readers, and turnstiles with local buffer sync during campus internet blackouts.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB PANEL 2: 20+ PRODUCTION MODULES */}
          {activeTab === 'modules' && (
            <div role="tabpanel" id="panel-modules" aria-labelledby="tab-modules">
              <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.75rem', color: '#071A3A', fontWeight: 800 }}>
                  20+ Production Institutional Modules
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.92rem' }}>
                  Engineered specifically to solve the operational intricacies of Indian engineering institutes, deemed universities, and polytechnics.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {[
                  {
                    title: 'Outcome-Based Education (OBE)',
                    desc: 'Automated CO-PO-PSO direct/indirect attainment matrices, course articulation mapping, and Bloom’s Taxonomy assessment tracking.',
                    tag: 'NBA Accreditation',
                    color: '#1D4ED8'
                  },
                  {
                    title: 'NAAC RAF & IQAC Engine',
                    desc: 'One-click automated compilation of Self Study Report (SSR) and Annual Quality Assurance Report (AQAR) with cryptographic evidence hashing.',
                    tag: 'NAAC Compliance',
                    color: '#059669'
                  },
                  {
                    title: 'Training & Placement Cell (TPO)',
                    desc: 'CTC analytics, automated eligibility filtering (backlog check, CGPA criteria), company drive scheduling, and offer letter vaults.',
                    tag: 'Career Services',
                    color: '#7C3AED'
                  },
                  {
                    title: 'Dynamic No-Code Approvals',
                    desc: 'Configurable approval DAGs (`Template` -> `StepTemplate` -> `Application` -> `ApprovalStep`) with SLA escalation rules.',
                    tag: 'Workflow Engine',
                    color: '#D97706'
                  },
                  {
                    title: 'Immutable 64-bit Paise Ledger',
                    desc: 'Zero-leakage double-entry accounting strictly in Paise. Manages tuition fees, fine receipts, concessions, and refunds with automated GST.',
                    tag: 'Finance & Accounts',
                    color: '#0284C7'
                  },
                  {
                    title: 'Digital Exam Cell & Hall Tickets',
                    desc: 'Fee-clearance and attendance-governed exam hall tickets with anti-tamper QR code verification and semester grade cards.',
                    tag: 'Examination',
                    color: '#E11D48'
                  },
                  {
                    title: 'Hostel & Dynamic Mess Rebate',
                    desc: 'Room allocation matrix, daily mess check-in tracking, and automated rebate billing calculation on sanctioned student leave.',
                    tag: 'Hostel Administration',
                    color: '#4F46E5'
                  },
                  {
                    title: 'Research & Innovation Vault',
                    desc: 'Scopus and Web of Science publication repository, patent filing milestones, consultancy projects, and seed money utilization.',
                    tag: 'R&D Cell',
                    color: '#0D9488'
                  },
                  {
                    title: 'Anti-Ragging & POSH Redressal',
                    desc: 'Statutory compliance portals for UGC Anti-Ragging affidavits and POSH Internal Complaints Committee (ICC) grievance escalation.',
                    tag: 'Statutory Mandate',
                    color: '#DC2626'
                  },
                  {
                    title: 'IoT Turnstiles & Bus GPS',
                    desc: 'Sub-200ms biometric & RFID flap barrier check-in, real-time campus student headcounts, and live transit fleet tracking.',
                    tag: 'Campus IoT',
                    color: '#9333EA'
                  },
                  {
                    title: 'NEP 2020 Multi-Entry & ABC',
                    desc: 'Academic Bank of Credits (ABC) ID integration, DigiLocker verified credential issuance, and multidisciplinary elective choice baskets.',
                    tag: 'NEP 2020',
                    color: '#EA580C'
                  },
                  {
                    title: 'Faculty Appraisal (PBAS / API)',
                    desc: 'Performance-Based Appraisal System tracking teaching hours, peer reviews, research scores, and automated promotion eligibility.',
                    tag: 'HR & Faculty',
                    color: '#2563EB'
                  }
                ].map((mod, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#FFFFFF',
                      padding: '1.4rem',
                      borderRadius: '14px',
                      border: '1px solid #E2E8F0',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '0.72rem',
                          fontWeight: 800,
                          color: mod.color,
                          background: `${mod.color}15`,
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          marginBottom: '0.75rem',
                          textTransform: 'uppercase'
                        }}
                      >
                        {mod.tag}
                      </span>
                      <h4 style={{ fontSize: '1.05rem', color: '#0F172A', fontWeight: 800, marginBottom: '0.45rem' }}>
                        {mod.title}
                      </h4>
                      <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.55 }}>
                        {mod.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB PANEL 3: ZERO-LEAKAGE FInANCIAL LEDGER SIMULATOR */}
          {activeTab === 'ledger' && (
            <div role="tabpanel" id="panel-ledger" aria-labelledby="tab-ledger">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'center' }}>
                <div>
                  <div style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: '#DCFCE7', color: '#166534', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    FINANCIAL INTEGRITY & ZERO LEAKAGE
                  </div>
                  <h3 style={{ fontSize: '1.8rem', color: '#071A3A', fontWeight: 800, marginBottom: '1rem' }}>
                    Double-Entry Ledger Strictly in 64-bit Paise
                  </h3>
                  <p style={{ color: '#475569', lineHeight: 1.65, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                    Traditional college ERPs store money as floating point numbers (`FLOAT`/`DOUBLE`), introducing micro-rounding discrepancies that cause audits to fail. CampusOne calculates all financial balances strictly in <strong>64-bit unsigned integer Paise</strong> (`BIGINT UNSIGNED`), eliminating rounding errors completely.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', background: '#F8FAFC', padding: '1.5rem', borderRadius: '14px', border: '1px solid #E2E8F0' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Student Enrollment Strength</span>
                        <strong style={{ color: '#1D4ED8' }}>{studentStrength} Students</strong>
                      </div>
                      <input
                        type="range"
                        min="500"
                        max="10000"
                        step="250"
                        value={studentStrength}
                        onChange={(e) => setStudentStrength(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#1D4ED8' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Average Annual Tuition Fee (INR)</span>
                        <strong style={{ color: '#059669' }}>₹{tuitionFeeRupees.toLocaleString('en-IN')}</strong>
                      </div>
                      <input
                        type="range"
                        min="50000"
                        max="350000"
                        step="5000"
                        value={tuitionFeeRupees}
                        onChange={(e) => setTuitionFeeRupees(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#059669' }}
                      />
                    </div>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '0.35rem' }}>
                        <span>Government Scholarship / Fee Waiver (TFW)</span>
                        <strong style={{ color: '#D97706' }}>{scholarshipPercent}%</strong>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        step="1"
                        value={scholarshipPercent}
                        onChange={(e) => setScholarshipPercent(Number(e.target.value))}
                        style={{ width: '100%', accentColor: '#D97706' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Live Simulation Output Card */}
                <div style={{ background: '#0F172A', borderRadius: '20px', padding: '2rem', color: '#F8FAFC', border: '1px solid #1E293B', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.85rem', marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#38BDF8' }}>
                      AUDIT-GRADE LEDGER BALANCING
                    </div>
                    <span style={{ fontSize: '0.72rem', color: '#22C55E', background: 'rgba(34,197,94,0.15)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                      Zero Leakage
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Gross Projected Tuition (Paise)</div>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                        {formatPaiseToINR(totalTuitionPaise)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace' }}>
                        Exact: {totalTuitionPaise.toString()} Paise
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Disbursed Concessions & Scholarships</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F87171' }}>
                        - {formatPaiseToINR(scholarshipDiscountPaise)}
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#64748B', fontFamily: 'monospace' }}>
                        Exact: {scholarshipDiscountPaise.toString()} Paise
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                      <div style={{ fontSize: '0.78rem', color: '#94A3B8' }}>Net Institutional Reconciliation</div>
                      <div style={{ fontSize: '1.9rem', fontWeight: 900, color: '#4ADE80' }}>
                        {formatPaiseToINR(netFeeCollectionPaise)}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#38BDF8', marginTop: '0.35rem' }}>
                        ✓ Automated Double-Entry debit/credit vouchers generated with zero rounding loss
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB PANEL 4: STATUTORY COMPLIANCE & ACCREDITATIONS */}
          {activeTab === 'compliance' && (
            <div role="tabpanel" id="panel-compliance" aria-labelledby="tab-compliance">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#1E40AF' }}>
                    <Award size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    NBA Tier-I & Tier-II (Washington Accord)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Automates Course Outcomes (CO) to Program Outcomes (PO) and Program Specific Outcomes (PSO) mapping. Calculates both direct (internal exams, semester tests) and indirect (exit surveys) attainment levels.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Bloom's Taxonomy Question Paper Tagging
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Automated Articulation Matrices
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Continuous Quality Improvement (CQI) Reports
                    </li>
                  </ul>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#DCFCE7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#166534' }}>
                    <Shield size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    NAAC Revised Assessment (RAF) & IQAC
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Centralizes institutional data across 7 criteria for NAAC accreditation. The Internal Quality Assurance Cell (IQAC) compiles Annual Quality Assurance Reports (AQAR) with live evidence tracking.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> One-Click SSR (Self Study Report) Generation
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Quantitative Metrics (QnM) Auto-Verification
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Data Validation & Verification (DVV) Audit Trail
                    </li>
                  </ul>
                </div>

                <div style={{ background: '#F8FAFC', padding: '1.75rem', borderRadius: '16px', border: '1px solid #E2E8F0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', color: '#B45309' }}>
                    <Building2 size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                    AICTE, UGC, NEP 2020 & DPDP Act
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#64748B', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Mandatory regulatory compliance pipelines: UGC anti-ragging affidavit tracking, POSH Internal Complaints Committee (ICC), NEP 2020 Academic Bank of Credits (ABC), and DPDP 2023 data sovereignty.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.82rem', color: '#334155' }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> Confidential POSH Grievance Vault
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> DigiLocker & ABC ID Synchronization
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={15} color="#16A34A" /> AICTE Approval Process Handbook (APH) Format
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB PANEL 5: IEEE SRS SPECIFICATION DOCUMENTATION */}
          {activeTab === 'srs' && (
            <div role="tabpanel" id="panel-srs" aria-labelledby="tab-srs">
              <div style={{ background: '#F8FAFC', borderRadius: '16px', padding: '2rem', border: '1px solid #E2E8F0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ fontSize: '1.3rem', color: '#071A3A', fontWeight: 800 }}>
                      IEEE Std 830-1998 & ISO/IEC/IEEE 29148:2018 Standards Compliance
                    </h4>
                    <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '0.2rem' }}>
                      Full Software Requirements Specification (SRS) Document Version 4.0.0
                    </div>
                  </div>
                  <span style={{ fontSize: '0.78rem', padding: '0.3rem 0.8rem', background: '#DBEAFE', color: '#1D4ED8', borderRadius: '999px', fontWeight: 700 }}>
                    Official Engineering Spec
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', marginBottom: '0.35rem' }}>
                      Dual-Database Multi-Tenant Model
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5 }}>
                      Strict separation between master control plane and tenant CUG schemas. Automated migration rollback guards and schema version tracking across 90+ DDL scripts.
                    </p>
                  </div>

                  <div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', marginBottom: '0.35rem' }}>
                      Process Model & Schedulers
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5 }}>
                      Independent Node.js API servers paired with dedicated transactional outbox processors and distributed cron worker tasks for report batch generation.
                    </p>
                  </div>

                  <div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.92rem', marginBottom: '0.35rem' }}>
                      Zero-Trust Role-Based Access (RBAC)
                    </div>
                    <p style={{ fontSize: '0.84rem', color: '#64748B', lineHeight: 1.5 }}>
                      Scoped tokens for Registrar, Deans, HODs, Faculty, Parents, and Students with granular row-level tenancy enforcement in every SQL execution.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', background: '#FFFFFF', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #E2E8F0' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#071A3A' }}>
                    Need the complete 1,750+ line technical SRS or College Presentation Deck?
                  </div>
                  <a
                    href="#demo-request"
                    className="btn btn-primary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.82rem', borderRadius: '6px', marginLeft: 'auto' }}
                  >
                    Request SRS Copy
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. INSTITUTIONAL ONBOARDING & DEMO REQUEST */}
      <section id="demo-request" style={{ padding: '5rem 0', background: '#F8FAFC' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ color: '#1D4ED8', fontWeight: 800, fontSize: '0.82rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              • INSTITUTIONAL PARTNERSHIP
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', color: '#071A3A', fontWeight: 800 }}>
              Deploy CampusOne Enterprise at Your Institution
            </h2>
            <p style={{ color: '#64748B', fontSize: '1rem', marginTop: '0.4rem' }}>
              Schedule an executive consultation with our Lead Systems Architect. Tailored for Deans, Principals, Registrars, and IT Directors.
            </p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              border: '1px solid #E2E8F0',
              boxShadow: '0 12px 36px rgba(0,0,0,0.06)'
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#DCFCE7', color: '#16A34A', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
                  <CheckCircle2 size={32} />
                </div>
                <h3 style={{ fontSize: '1.6rem', color: '#071A3A', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Institutional Demo Request Received!
                </h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
                  Thank you. Our engineering team at <strong>NexCoreGen Technology Pvt Ltd</strong> will contact your office within 24 hours to coordinate the technical presentation.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ borderRadius: '8px' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Institution / University Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Government Engineering College / MIT Pune"
                      value={institutionForm.instituteName}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, instituteName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Your Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Rajesh Sharma (Dean Academics)"
                      value={institutionForm.pocName}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, pocName: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. registrar@institute.edu.in"
                      value={institutionForm.email}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, email: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Phone / Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={institutionForm.phone}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, phone: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Institution Type
                    </label>
                    <select
                      value={institutionForm.category}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, category: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFFFFF' }}
                    >
                      <option value="Autonomous Engineering College">Autonomous Engineering College</option>
                      <option value="Private / Deemed University">Private / Deemed University</option>
                      <option value="State Technical University Affiliated">State Technical University Affiliated</option>
                      <option value="Polytechnic / Diploma Institute">Polytechnic / Diploma Institute</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#334155', marginBottom: '0.4rem' }}>
                      Estimated Student Strength
                    </label>
                    <select
                      value={institutionForm.studentCount}
                      onChange={(e) => setInstitutionForm({ ...institutionForm, studentCount: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #CBD5E1', fontSize: '0.9rem', background: '#FFFFFF' }}
                    >
                      <option value="Under 1,500">Under 1,500 Students</option>
                      <option value="1,500 - 3,500">1,500 - 3,500 Students</option>
                      <option value="3,500 - 7,500">3,500 - 7,500 Students</option>
                      <option value="7,500 - 20,000+">7,500 - 20,000+ Students</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    padding: '0.95rem 1.5rem',
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '10px',
                    marginTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Confirm & Schedule Institutional Presentation <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer style={{ background: '#071A3A', color: '#94A3B8', padding: '3.5rem 0 2rem 0', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <Logo variant="dark" size="sm" />
              <span style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '1rem' }}>CampusOne Enterprise</span>
            </div>
            <div style={{ fontSize: '0.8rem', color: '#64748B' }}>
              Corporate Technology Provider: NexCoreGen Technology Pvt Ltd. All Rights Reserved © 2026.
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
