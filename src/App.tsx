import { useState, useRef } from 'react';
import { 
  Cpu, 
  ArrowRight, 
  Send, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX
} from 'lucide-react';

export function App() {
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoMuted, setVideoMuted] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#090d16', color: '#f8fafc', fontFamily: 'var(--font-sans)' }}>
      {/* 1. SIMPLE CLEAN NAVBAR */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          background: 'rgba(9, 13, 22, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1rem 0'
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00f2fe, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
              }}
            >
              <Cpu size={20} color="#040914" />
            </div>
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                NexCoreGen
              </div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', letterSpacing: '0.05em' }}>
                TECHNOLOGIES
              </div>
            </div>
          </a>

          {/* Clean Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <a href="#about" style={simpleNavLink}>About Us</a>
            <a href="#product" style={simpleNavLink}>Our Product (FitCore)</a>
            <a href="#future" style={simpleNavLink}>Future Products</a>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* 2. SIMPLE HERO SECTION */}
      <section style={{ padding: '5rem 0 4rem 0', textAlign: 'center', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.9rem', borderRadius: '9999px', background: 'rgba(0, 242, 254, 0.1)', border: '1px solid rgba(0, 242, 254, 0.3)', color: '#00f2fe', fontSize: '0.82rem', fontWeight: 600, marginBottom: '1.5rem' }}>
            <span>🚀 Welcoming Investors & Business Partners</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.15, marginBottom: '1.25rem' }}>
            Building Smart Technology for{' '}
            <span style={{ background: 'linear-gradient(135deg, #00f2fe, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Modern Businesses.
            </span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            <strong>NexCoreGen Technologies</strong> is a new-age software and IoT company founded by <strong>Ankit Patil</strong>. We build smart software, mobile apps, and connected hardware to help businesses automate their operations and increase revenue.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#product" className="btn btn-primary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
              Explore Our First Product (FitCore) <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn btn-secondary" style={{ padding: '0.85rem 1.8rem', fontSize: '0.95rem' }}>
              Get In Touch With Us
            </a>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US (SIMPLE & DIRECT) */}
      <section id="about" style={{ padding: '4rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', color: '#fff' }}>Who We Are</h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem' }}>
              Simple, reliable, and modern technology built from the ground up.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={cleanCardStyle}>
              <div style={iconBoxStyle}>💡</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>The Mission</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Most local businesses and gyms still use paper registers or slow, old software. We replace that with fast mobile apps and smart automated entry gates.
              </p>
            </div>

            <div style={cleanCardStyle}>
              <div style={iconBoxStyle}>⚡</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Hardware + Software</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                We don't just build apps on a computer. We connect real physical gates, turnstiles, and scanners so everything works smoothly together in real time.
              </p>
            </div>

            <div style={cleanCardStyle}>
              <div style={iconBoxStyle}>📈</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>Growth & Vision</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
                Starting with the fitness sector with our flagship <strong>FitCore OS</strong>, we are building a foundation to launch multiple smart business products across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FIRST PRODUCT: FITCORE OS */}
      <section id="product" style={{ padding: '5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ color: '#00f2fe', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              OUR FLAGSHIP PRODUCT
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.5rem', marginBottom: '0.75rem', color: '#fff' }}>
              FitCore OS — Smart Gym Management & Gate System
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '700px', margin: '0 auto' }}>
              A complete system for gyms and fitness centers. It manages members, collects fees, and opens entry gates automatically using phone scans.
            </p>
          </div>

          {/* 4 Clean Benefit Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            <div style={cleanCardStyle}>
              <div style={{ color: '#00f2fe', marginBottom: '0.75rem', fontSize: '1.8rem' }}>🚪</div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Smart Gate Entry</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Members scan their phone at the turnstile gate to enter. If their fees are pending, the gate automatically stays locked.
              </p>
            </div>

            <div style={cleanCardStyle}>
              <div style={{ color: '#10b981', marginBottom: '0.75rem', fontSize: '1.8rem' }}>📱</div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Member Mobile App</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Gym members get an easy phone app to check their attendance, see workout plans, and renew their gym membership in 1 click.
              </p>
            </div>

            <div style={cleanCardStyle}>
              <div style={{ color: '#fbbf24', marginBottom: '0.75rem', fontSize: '1.8rem' }}>💰</div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Fees & Payment Tracker</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Gym owners see exactly how much money came in today, which members have pending fees, and sends automatic WhatsApp reminders.
              </p>
            </div>

            <div style={cleanCardStyle}>
              <div style={{ color: '#818cf8', marginBottom: '0.75rem', fontSize: '1.8rem' }}>🏢</div>
              <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.35rem' }}>Multi-Branch Support</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                If you own 2 or 5 gyms in different areas, you can control all of them from one single phone screen.
              </p>
            </div>
          </div>

          {/* Clean Video Showcase */}
          <div style={{ background: '#040711', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '3.5rem' }}>
            <div style={{ padding: '0.85rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', fontWeight: 600, color: '#fff' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }}></span>
                FitCore Real Gym Environment Video Demo
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button onClick={toggleVideo} style={controlBtnStyle}>
                  {videoPlaying ? <Pause size={13} /> : <Play size={13} />}
                  {videoPlaying ? 'Pause' : 'Play'}
                </button>
                <button onClick={toggleMute} style={controlBtnStyle}>
                  {videoMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                  {videoMuted ? 'Unmute' : 'Mute'}
                </button>
              </div>
            </div>

            <video
              ref={videoRef}
              src="/assets/fitcore-reel.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{ width: '100%', maxHeight: '480px', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Simple Pricing Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>Simple Annual Subscription Plans</h3>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
              Affordable packages for single-room gyms to large luxury fitness chains.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#fff' }}>Starter Club</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00f2fe', margin: '0.35rem 0' }}>₹14,999 <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ yr</span></div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Best for small local gyms (up to 150 members) with basic QR attendance.
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(0, 242, 254, 0.08)', borderRadius: '12px', border: '1px solid rgba(0, 242, 254, 0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ fontWeight: 700, color: '#fff' }}>Pro Studio (Popular)</div>
                  <span style={{ fontSize: '0.65rem', background: '#00f2fe', color: '#040914', fontWeight: 800, padding: '0.15rem 0.4rem', borderRadius: '4px' }}>POPULAR</span>
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00f2fe', margin: '0.35rem 0' }}>₹34,999 <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ yr</span></div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                  Includes Smart Turnstile Gate integration, member mobile app & 600 members.
                </div>
              </div>

              <div style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ fontWeight: 700, color: '#fff' }}>Enterprise Chain</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#00f2fe', margin: '0.35rem 0' }}>₹69,999 <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>/ yr</span></div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  Unlimited members, multiple gates, supplement store & franchise dashboard.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FUTURE PIPELINE ("MANY MORE TO COME") */}
      <section id="future" style={{ padding: '4.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#a855f7', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              FUTURE PRODUCTS PIPELINE
            </span>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
              What We Are Building Next ("Many More to Come")
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '650px', margin: '0 auto' }}>
              NexCoreGen Technologies is not just a single app company. We are expanding into multiple industries using the same core smart technology.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={cleanCardStyle}>
              <div style={{ ...iconBoxStyle, color: '#00f2fe' }}>🛒</div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>NexRetail OS</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Smart cashierless retail stores and supplement kiosks where customers tap to enter, pick items, and walk out without standing in billing queues.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#00f2fe', fontWeight: 600 }}>• Status: In Development</div>
            </div>

            <div style={cleanCardStyle}>
              <div style={{ ...iconBoxStyle, color: '#a855f7' }}>🏢</div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>NexAccess Enterprise</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                Smart gate and door access systems for corporate offices, schools, and co-working spaces using mobile NFC cards and QR codes.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#a855f7', fontWeight: 600 }}>• Status: In Development</div>
            </div>

            <div style={cleanCardStyle}>
              <div style={{ ...iconBoxStyle, color: '#10b981' }}>🤖</div>
              <h4 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>NexPulse AI</h4>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>
                An AI assistant that monitors member attendance, alerts owners before members quit, and automatically sends personalized renewal offers.
              </p>
              <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>• Status: R&D Concept</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SIMPLE CONTACT SECTION */}
      <section id="contact" style={{ padding: '5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '0.5rem' }}>Get in Touch</h2>
            <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
              Whether you are an investor wanting to meet the founder or a gym owner looking for a demo, send us a message!
            </p>
          </div>

          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '2.5rem' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '0.5rem' }}>Thank You!</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                  Your message has been sent successfully. Ankit Patil and our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="btn btn-secondary"
                  style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={fieldLabelStyle}>YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={fieldInputStyle}
                    />
                  </div>
                  <div>
                    <label style={fieldLabelStyle}>PHONE / WHATSAPP *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={fieldInputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={fieldLabelStyle}>EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={fieldInputStyle}
                  />
                </div>

                <div>
                  <label style={fieldLabelStyle}>MESSAGE *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're interested in (Investment, Gym Software Demo, or Partnership)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...fieldInputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '0.9rem', fontSize: '0.95rem', marginTop: '0.5rem' }}
                >
                  <Send size={16} /> Send Message to NexCoreGen
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 7. SIMPLE FOOTER */}
      <footer style={{ padding: '2.5rem 0', borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: '#060910', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>NexCoreGen Technologies</span>
            <span style={{ color: '#64748b' }}>•</span>
            <span style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Founded by Ankit Patil</span>
          </div>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} NexCoreGen Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const simpleNavLink: React.CSSProperties = {
  color: '#94a3b8',
  textDecoration: 'none',
  fontSize: '0.9rem',
  fontWeight: 500,
  transition: 'color 0.2s ease'
};

const cleanCardStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.03)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  borderRadius: '14px',
  padding: '1.75rem',
  transition: 'transform 0.2s ease, border-color 0.2s ease'
};

const iconBoxStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  marginBottom: '0.75rem'
};

const controlBtnStyle: React.CSSProperties = {
  background: 'rgba(255, 255, 255, 0.08)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  color: '#fff',
  borderRadius: '6px',
  padding: '0.3rem 0.6rem',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.35rem',
  cursor: 'pointer'
};

const fieldLabelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.75rem',
  color: '#cbd5e1',
  marginBottom: '0.4rem',
  fontWeight: 600,
  letterSpacing: '0.02em'
};

const fieldInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.75rem 1rem',
  background: 'rgba(5, 9, 18, 0.9)',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '0.9rem',
  outline: 'none',
  fontFamily: 'inherit'
};

export default App;
