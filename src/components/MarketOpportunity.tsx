import React from 'react';
import { TrendingUp, PieChart, DollarSign, Target, Shield } from 'lucide-react';

export const MarketOpportunity: React.FC = () => {
  return (
    <section id="market" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 4rem auto' }}>
          <div className="pill-badge pill-cyan" style={{ marginBottom: '1rem' }}>
            <TrendingUp size={14} color="#00f2fe" />
            <span>VENTURE INVESTMENT THESIS & TAM</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: '1.25rem' }}>
            Massive Market Opportunity &{' '}
            <span className="gradient-text-cyan">High-Margin Unit Economics.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.6 }}>
            India is experiencing a massive fitness renaissance. NexCoreGen Technologies captures market share 
            through an irresistible dual-engine business model: recurring SaaS plus transaction commerce.
          </p>
        </div>

        {/* TAM / SAM / SOM Triad Cards */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem',
            marginBottom: '4.5rem'
          }}
        >
          {/* TAM */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '2.5rem 2rem', 
              border: '1px solid rgba(0, 242, 254, 0.3)',
              background: 'linear-gradient(180deg, rgba(0, 242, 254, 0.08) 0%, rgba(13, 20, 36, 0.8) 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="pill-badge pill-cyan" style={{ fontSize: '0.72rem' }}>TOTAL ADDRESSABLE</span>
              <PieChart size={22} color="#00f2fe" />
            </div>

            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              ₹28,000+ Cr
            </div>
            <div style={{ fontSize: '1rem', color: '#00f2fe', fontWeight: 600, marginBottom: '1rem' }}>
              Indian Fitness & Wellness Economy ($3.4B)
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Growing at an explosive <strong>19.2% CAGR</strong> fueled by post-pandemic health awareness, organized gym chains, and corporate wellness stipends.
            </p>
          </div>

          {/* SAM */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '2.5rem 2rem', 
              border: '1px solid rgba(99, 102, 241, 0.3)',
              background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, rgba(13, 20, 36, 0.8) 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="pill-badge pill-purple" style={{ fontSize: '0.72rem' }}>SERVICEABLE ADDRESSABLE</span>
              <Target size={22} color="#818cf8" />
            </div>

            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              ₹4,500 Cr
            </div>
            <div style={{ fontSize: '1rem', color: '#818cf8', fontWeight: 600, marginBottom: '1rem' }}>
              Enterprise Gym SaaS & Turnstile Access ($540M)
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              65,000+ organized fitness centers, crossfit studios, and sports academies across India transitioning from manual logs to automated smart access.
            </p>
          </div>

          {/* SOM */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '2.5rem 2rem', 
              border: '1px solid rgba(16, 185, 129, 0.3)',
              background: 'linear-gradient(180deg, rgba(16, 185, 129, 0.08) 0%, rgba(13, 20, 36, 0.8) 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <span className="pill-badge pill-emerald" style={{ fontSize: '0.72rem' }}>SERVICEABLE OBTAINABLE</span>
              <TrendingUp size={22} color="#10b981" />
            </div>

            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
              ₹320 Cr
            </div>
            <div style={{ fontSize: '1rem', color: '#10b981', fontWeight: 600, marginBottom: '1rem' }}>
              Initial Tier 1 & 2 Metro Target ($38M)
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Targeting 3,200 prime franchise gyms across Mumbai, NCR, BLR, Pune, and Hyderabad with an average contract value (ACV) of ₹1.05L/yr.
            </p>
          </div>
        </div>

        {/* Business Model Breakdown: Why This Returns Venture Scale Capital */}
        <div 
          className="glass-panel"
          style={{
            padding: '3rem 2.5rem',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ maxWidth: '800px', marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.75rem' }}>
              The Dual-Engine Monetization Moat
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Traditional software companies only charge subscriptions. NexCoreGen captures software revenue <strong>plus</strong> transactional revenue on every supplement shaker, protein tub, and merchandise item sold.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {/* Engine 1 */}
            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <DollarSign size={18} color="#00f2fe" />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Engine #1: Recurring B2B SaaS</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                High-margin annual software licenses priced at <strong>₹14,999 to ₹69,999/yr</strong> per club with 92% gross software margins and zero marginal hosting cost.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#00f2fe', fontWeight: 600 }}>
                ✓ Predictable Recurring ARR
              </div>
            </div>

            {/* Engine 2 */}
            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <TrendingUp size={18} color="#fbbf24" />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Engine #2: 10% Commerce Take Rate</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                Integrated POS and member app store deducts an automated <strong>10% gross platform fee</strong> on all nutrition & supplement sales, turning gyms into direct distribution hubs.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#fbbf24', fontWeight: 600 }}>
                ✓ Expands GMV with No Inventory Risk
              </div>
            </div>

            {/* Engine 3 */}
            <div style={{ padding: '1.5rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Shield size={18} color="#10b981" />
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#fff' }}>Engine #3: Hardware & SLA</h4>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '1rem' }}>
                One-time upfront turnstile gateway deployment kit (₹35,000 - ₹85,000) creates high hardware switching moats, plus ongoing hardware maintenance SLA renewals.
              </p>
              <div style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                ✓ Strong Customer Retention (&gt;96%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
