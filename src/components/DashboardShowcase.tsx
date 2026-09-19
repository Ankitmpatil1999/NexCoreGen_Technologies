import React, { useState } from 'react';
import { 
  Zap, 
  TrendingUp, 
  Users, 
  BarChart3,
  CreditCard,
  Building
} from 'lucide-react';

export const DashboardShowcase: React.FC = () => {
  const [chartMode, setChartMode] = useState<'revenue' | 'traffic'>('revenue');
  const [activeBranch, setActiveBranch] = useState<'mumbai' | 'delhi' | 'bangalore'>('mumbai');

  // Branch data
  const branchData = {
    mumbai: {
      name: 'FitCore Mumbai Flagship',
      footfall: 524,
      occupancy: 146,
      capacity: 250,
      revenue: '₹4,85,000',
      avgLatency: '158ms',
      chartPoints: [32, 45, 40, 65, 58, 85, 94]
    },
    delhi: {
      name: 'FitCore Delhi NCR Studio',
      footfall: 412,
      occupancy: 118,
      capacity: 220,
      revenue: '₹3,92,000',
      avgLatency: '162ms',
      chartPoints: [28, 38, 35, 52, 60, 72, 88]
    },
    bangalore: {
      name: 'FitCore BLR Tech Park Hub',
      footfall: 610,
      occupancy: 172,
      capacity: 260,
      revenue: '₹5,40,000',
      avgLatency: '154ms',
      chartPoints: [35, 48, 55, 68, 75, 92, 102]
    }
  };

  const current = branchData[activeBranch];
  const occupancyPercent = Math.round((current.occupancy / current.capacity) * 100);

  // SVG Chart path calculation
  const points = current.chartPoints;
  const maxVal = Math.max(...points);
  const chartHeight = 110;
  const chartWidth = 480;
  const stepX = chartWidth / (points.length - 1);
  const coords = points.map((p, idx) => ({
    x: idx * stepX,
    y: chartHeight - (p / maxVal) * (chartHeight - 20)
  }));
  const pathD = coords.reduce((acc, curr, idx) => {
    return idx === 0 ? `M ${curr.x} ${curr.y}` : `${acc} L ${curr.x} ${curr.y}`;
  }, '');
  const areaD = `${pathD} L ${chartWidth} ${chartHeight} L 0 ${chartHeight} Z`;

  return (
    <div className="perspective-container" style={{ position: 'relative', width: '100%', maxWidth: '1160px', margin: '0 auto' }}>
      {/* Floating Accent Chip 1 (Top Left) */}
      <div 
        className="floating-chip"
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-15px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          border: '1px solid rgba(0, 242, 254, 0.4)'
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(0, 242, 254, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={16} color="#00f2fe" />
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>VERIFIED HARDWARE GATE SYNC</div>
          <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#fff' }}>&lt;160ms Turnstile Latency</div>
        </div>
      </div>

      {/* Floating Accent Chip 2 (Bottom Right) */}
      <div 
        className="floating-chip"
        style={{
          position: 'absolute',
          bottom: '-25px',
          right: '-10px',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '0.65rem',
          border: '1px solid rgba(16, 185, 129, 0.4)',
          animationDelay: '1.5s'
        }}
      >
        <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <TrendingUp size={16} color="#10b981" />
        </div>
        <div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>DUAL-ENGINE MONETIZATION</div>
          <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#10b981' }}>SaaS ARR + 10% POS Take Rate</div>
        </div>
      </div>

      {/* 3D Tilted Dashboard Frame */}
      <div 
        className="tilted-dashboard"
        style={{
          background: 'rgba(8, 13, 24, 0.95)',
          borderRadius: '24px',
          border: '1px solid rgba(0, 242, 254, 0.25)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Mockup Top Window Bar */}
        <div 
          style={{
            padding: '0.85rem 1.5rem',
            background: 'rgba(11, 18, 34, 0.98)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.75rem'
          }}
        >
          {/* Left Window Pills & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#fbbf24' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
              <span style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>FitCore OS</span>
              <span style={{ fontSize: '0.72rem', color: '#64748b' }}>•</span>
              <span style={{ fontSize: '0.78rem', color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                {current.name}
              </span>
            </div>
          </div>

          {/* Branch Switcher Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {(['mumbai', 'delhi', 'bangalore'] as const).map((branch) => (
              <button
                key={branch}
                onClick={() => setActiveBranch(branch)}
                style={{
                  padding: '0.3rem 0.65rem',
                  borderRadius: '6px',
                  border: activeBranch === branch ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: activeBranch === branch ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                  color: activeBranch === branch ? '#00f2fe' : '#94a3b8',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  textTransform: 'capitalize'
                }}
              >
                {branch}
              </button>
            ))}

            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginLeft: '0.5rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '9999px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                fontSize: '0.7rem',
                fontWeight: 700
              }}
            >
              <span className="pulse-dot pulse-dot-green" style={{ width: '6px', height: '6px' }}></span>
              MQTT ONLINE
            </div>
          </div>
        </div>

        {/* Mockup Dashboard Main Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '70px 1fr', minHeight: '460px' }}>
          {/* Mockup Left Icon Sidebar */}
          <div 
            style={{
              background: 'rgba(9, 14, 26, 0.85)',
              borderRight: '1px solid rgba(255, 255, 255, 0.06)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.25rem 0',
              gap: '1.5rem'
            }}
          >
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(0, 242, 254, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <BarChart3 size={18} color="#00f2fe" />
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={18} color="#64748b" />
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Users size={18} color="#64748b" />
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CreditCard size={18} color="#64748b" />
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Building size={18} color="#64748b" />
            </div>
          </div>

          {/* Mockup Content Area */}
          <div style={{ padding: '1.5rem' }}>
            {/* Top 4 KPI Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {/* Card 1 */}
              <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>TODAY'S FOOTFALL</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff' }}>{current.footfall}</div>
                <div style={{ fontSize: '0.7rem', color: '#10b981' }}>↑ +18.4% vs last week</div>
              </div>

              {/* Card 2 */}
              <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>FLOOR OCCUPANCY</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#00f2fe' }}>
                  {current.occupancy} <span style={{ fontSize: '0.8rem', color: '#64748b' }}>/ {current.capacity}</span>
                </div>
                <div style={{ fontSize: '0.7rem', color: '#00f2fe' }}>{occupancyPercent}% club capacity</div>
              </div>

              {/* Card 3 */}
              <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>MONTHLY REVENUE</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fbbf24' }}>{current.revenue}</div>
                <div style={{ fontSize: '0.7rem', color: '#fbbf24' }}>SaaS + 10% Store Cut</div>
              </div>

              {/* Card 4 */}
              <div className="telemetry-box" style={{ padding: '0.85rem' }}>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>GATE IOT LATENCY</div>
                <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#10b981' }}>{current.avgLatency}</div>
                <div style={{ fontSize: '0.7rem', color: '#10b981' }}>100% Sub-200ms Verified</div>
              </div>
            </div>

            {/* Split Row: Glowing Chart (Left) + Turnstile & Feed (Right) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {/* Glowing SVG Chart Container */}
              <div 
                style={{
                  background: 'rgba(5, 9, 18, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>REVENUE RUN-RATE TELEMETRY</div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#fff' }}>
                      {current.revenue} <span style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>+28% YoY</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <button 
                      onClick={() => setChartMode('revenue')}
                      style={{
                        padding: '0.25rem 0.55rem',
                        fontSize: '0.7rem',
                        borderRadius: '4px',
                        background: chartMode === 'revenue' ? '#6366f1' : 'transparent',
                        color: '#fff',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Revenue
                    </button>
                    <button 
                      onClick={() => setChartMode('traffic')}
                      style={{
                        padding: '0.25rem 0.55rem',
                        fontSize: '0.7rem',
                        borderRadius: '4px',
                        background: chartMode === 'traffic' ? '#00f2fe' : 'transparent',
                        color: chartMode === 'traffic' ? '#040914' : '#94a3b8',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      Footfall
                    </button>
                  </div>
                </div>

                {/* SVG Area Chart */}
                <div style={{ width: '100%', height: '120px', position: 'relative' }}>
                  <svg 
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                    style={{ width: '100%', height: '100%', overflow: 'visible' }}
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00f2fe" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area fill */}
                    <path d={areaD} fill="url(#chartGrad)" />

                    {/* Line stroke */}
                    <path 
                      d={pathD} 
                      fill="none" 
                      stroke="#00f2fe" 
                      strokeWidth="2.5" 
                      className="chart-line-cyan" 
                    />

                    {/* Circle markers */}
                    {coords.map((c, i) => (
                      <circle 
                        key={i} 
                        cx={c.x} 
                        cy={c.y} 
                        r="4" 
                        fill="#060911" 
                        stroke="#00f2fe" 
                        strokeWidth="2" 
                      />
                    ))}
                  </svg>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: '#64748b', marginTop: '0.5rem' }}>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun (Today)</span>
                </div>
              </div>

              {/* Real-time Hardware Gate Monitor & Live Check-ins */}
              <div 
                style={{
                  background: 'rgba(5, 9, 18, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '12px',
                  padding: '1.25rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>LIVE TURNSTILE CONTROLLER</div>
                  <span className="pill-badge pill-emerald" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>
                    <span className="pulse-dot pulse-dot-green"></span>
                    4 GATES ACTIVE
                  </span>
                </div>

                {/* 4 Gates Visual Status Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.65rem', marginBottom: '1rem' }}>
                  <div style={{ padding: '0.6rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.68rem', color: '#10b981', fontWeight: 700 }}>GATE #01 (IN)</div>
                    <div style={{ fontSize: '0.82rem', color: '#fff', fontWeight: 700 }}>UNLOCKED • 154ms</div>
                  </div>

                  <div style={{ padding: '0.6rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700 }}>GATE #02 (IN)</div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700 }}>STANDBY • 162ms</div>
                  </div>

                  <div style={{ padding: '0.6rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700 }}>GATE #03 (OUT)</div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700 }}>STANDBY • 148ms</div>
                  </div>

                  <div style={{ padding: '0.6rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '6px' }}>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', fontWeight: 700 }}>GATE #04 (VIP)</div>
                    <div style={{ fontSize: '0.82rem', color: '#cbd5e1', fontWeight: 700 }}>STANDBY • 150ms</div>
                  </div>
                </div>

                {/* Live Member Stream */}
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600, marginBottom: '0.5rem' }}>
                  RECENT VERIFIED ENTRANCES:
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.6rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', fontSize: '0.75rem' }}>
                    <span style={{ color: '#fff', fontWeight: 600 }}>Ankit Patil (Pro VIP)</span>
                    <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>154ms ✓</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.4rem 0.6rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '6px', fontSize: '0.75rem' }}>
                    <span style={{ color: '#cbd5e1' }}>Priya S. (Annual Pass)</span>
                    <span style={{ color: '#10b981', fontFamily: 'var(--font-mono)' }}>168ms ✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
