import { Download, Layers, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenQrModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQrModal }) => {
  return (
    <section style={{
      position: 'relative',
      padding: '75px 0 65px 0',
      background: 'radial-gradient(120% 80% at 50% -10%, rgba(16, 185, 129, 0.15) 0%, rgba(245, 158, 11, 0.05) 50%, rgba(248, 250, 249, 0) 100%)',
      overflow: 'hidden',
    }}>
      {/* Background Decorative Mesh Circles */}
      <div style={{
        position: 'absolute',
        top: '-150px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Hackathon Credentials Header */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
          <span className="badge badge-green">
            <Sparkles size={13} /> SIH 2026 Grand Finale
          </span>
          <span className="badge badge-gold">
            Problem Statement: SIH26089
          </span>
          <span className="badge badge-dark">
            Ministry of Cooperation (NCCT)
          </span>
          <span className="badge badge-cyan">
            Theme: Smart Automation
          </span>
        </div>

        {/* Hero Title */}
        <h1 style={{
          fontSize: 'clamp(36px, 5.2vw, 62px)',
          fontWeight: 800,
          color: 'var(--ink-950)',
          letterSpacing: '-0.035em',
          maxWidth: '1000px',
          margin: '0 auto 20px auto',
          lineHeight: 1.12,
        }}>
          Dignity for Tradespeople.
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--forest-800) 0%, var(--forest-600) 50%, var(--amber-500) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Cooperative-Owned Gig Marketplace
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 1.8vw, 19.5px)',
          color: 'var(--ink-500)',
          maxWidth: '820px',
          margin: '0 auto 36px auto',
          lineHeight: 1.6,
        }}>
          Digitizing Labour Cooperative Federations across India — replacing extractive 20–30% platform cuts with a transparent <strong>5% non-extractable collective welfare fund</strong> and AI demand forecasting.
        </p>

        {/* Dual Primary CTA Cluster */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href="#downloads" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '15.5px' }}>
            <Download size={19} />
            <span>Download Working APKs</span>
          </a>

          <button onClick={onOpenQrModal} className="btn btn-gold" style={{ padding: '16px 28px', fontSize: '15.5px' }}>
            <Sparkles size={18} />
            <span>Generate PPT QR Code</span>
          </button>

          <a href="#architecture" className="btn btn-outline" style={{ padding: '16px 28px', fontSize: '15.5px' }}>
            <Layers size={18} />
            <span>Explore System Design</span>
          </a>
        </div>

        {/* 4 Interactive Feature Pillars */}
        <div className="grid-4" style={{ marginBottom: '24px' }}>
          <div className="card-luxe" style={{ padding: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Commission Extraction
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--forest-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={18} color="var(--forest-600)" />
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 800, color: 'var(--forest-800)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              0% Cut
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-500)', marginTop: '4px' }}>
              100% of fair service tariffs stay with the cooperative ecosystem.
            </div>
          </div>

          <div className="card-luxe" style={{ padding: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Worker Welfare Pool
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--amber-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={18} color="var(--amber-600)" />
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 800, color: 'var(--amber-600)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              5% Locked
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-500)', marginTop: '4px' }}>
              Non-extractable fund for healthcare, tool insurance & family aid.
            </div>
          </div>

          <div className="card-luxe" style={{ padding: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                Supply Side Vetting
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--forest-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Users size={18} color="var(--forest-600)" />
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 800, color: 'var(--forest-800)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              100% Vetted
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-500)', marginTop: '4px' }}>
              Bulk roster verification through registered Labour Federations.
            </div>
          </div>

          <div className="card-luxe" style={{ padding: '24px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ fontSize: '12px', fontWeight: 800, color: 'var(--ink-400)', textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                AI Demand Model
              </span>
              <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f3e8ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={18} color="#9333ea" />
              </div>
            </div>
            <div style={{ fontSize: '30px', fontWeight: 800, color: '#9333ea', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
              R² = 0.958
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-500)', marginTop: '4px' }}>
              Multi-seasonal GradientBoosting model for shift forecasting.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
