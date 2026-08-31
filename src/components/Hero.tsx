import { Download, Layers, ShieldCheck, Sparkles, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenQrModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQrModal }) => {
  return (
    <section style={{
      position: 'relative',
      padding: '70px 0 60px 0',
      background: 'radial-gradient(circle at 50% -10%, rgba(19, 122, 84, 0.12) 0%, rgba(248, 250, 249, 0) 70%)',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Hackathon Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
          <span className="badge badge-green">
            <Sparkles size={14} /> SIH 2026 Grand Finale
          </span>
          <span className="badge badge-gold">
            Problem Statement: SIH26089
          </span>
          <span className="badge badge-dark">
            Ministry of Cooperation (NCCT)
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(36px, 5.5vw, 58px)',
          fontWeight: 800,
          color: 'var(--ink-900)',
          letterSpacing: '-1.5px',
          maxWidth: '960px',
          margin: '0 auto 20px auto',
          lineHeight: 1.15,
        }}>
          Cooperative Services, Fair Dignity.
          <br />
          <span style={{
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 60%, var(--gold-dark) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Non-Extractable Digital Marketplace
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: 'var(--ink-600)',
          maxWidth: '780px',
          margin: '0 auto 36px auto',
          lineHeight: 1.6,
        }}>
          Replacing predatory 20–30% platform commissions with a transparent <strong>5% non-extractable collective welfare fund</strong>, certified cooperative roster onboarding, and real-time AI geospatial dispatch.
        </p>

        {/* Primary Action Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          <a href="#downloads" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
            <Download size={20} />
            <span>Download Working APKs</span>
          </a>

          <button onClick={onOpenQrModal} className="btn btn-gold" style={{ padding: '16px 28px', fontSize: '16px' }}>
            <Sparkles size={18} />
            <span>Live Phone QR Scanner</span>
          </button>

          <a href="#architecture" className="btn btn-outline" style={{ padding: '16px 28px', fontSize: '16px' }}>
            <Layers size={18} />
            <span>Interactive System Design</span>
          </a>
        </div>

        {/* Trust & Metric Cards */}
        <div className="grid-4" style={{ marginTop: '20px' }}>
          <div className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink-400)', textTransform: 'uppercase' }}>Commission Cut</span>
              <ShieldCheck size={20} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary-deep)', fontFamily: 'var(--font-display)' }}>0% Cut</div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-600)', marginTop: '4px' }}>vs 28% extractive Urban Company model</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink-400)', textTransform: 'uppercase' }}>Welfare Allocation</span>
              <TrendingUp size={20} color="var(--gold-dark)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--gold-dark)', fontFamily: 'var(--font-display)' }}>5% Locked</div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-600)', marginTop: '4px' }}>Healthcare, tool insurance & family stipends</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink-400)', textTransform: 'uppercase' }}>Worker Verification</span>
              <Users size={20} color="var(--primary)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--primary)', fontFamily: 'var(--font-display)' }}>100% Vetted</div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-600)', marginTop: '4px' }}>Bulk-onboarded through Labour Federations</div>
          </div>

          <div className="glass-card" style={{ padding: '20px', textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
              <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--ink-400)', textTransform: 'uppercase' }}>AI Demand Model</span>
              <Sparkles size={20} color="var(--accent-purple)" />
            </div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--accent-purple)', fontFamily: 'var(--font-display)' }}>R² 0.958</div>
            <div style={{ fontSize: '12.5px', color: 'var(--ink-600)', marginTop: '4px' }}>7-day multi-seasonal GradientBoosting ML</div>
          </div>
        </div>
      </div>
    </section>
  );
};
