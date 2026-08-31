import { HeartHandshake, Award, Scale } from 'lucide-react';

export const IdeaDeepDive: React.FC = () => {
  return (
    <section id="overview" style={{ padding: '80px 0', background: '#ffffff' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">Idea & Innovation</div>
          <h2 className="title">Why Labour Cooperatives Win Over Monopolies</h2>
          <p className="desc">
            Aligning with the Ministry of Cooperation vision: empowering certified tradespeople with modern technology without middleman extraction.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid-3" style={{ marginBottom: '56px' }}>
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--primary-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--primary)',
              marginBottom: '20px',
            }}>
              <HeartHandshake size={28} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '12px' }}>
              1. Non-Extractable 5% Welfare Fund
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-600)', lineHeight: 1.6 }}>
              Unlike private VC apps taking 28% for corporate profit, SahaKarya locks exactly 5% into a collective, audited worker welfare fund for emergency health aid, tool replacement, and accident coverage.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--gold-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--gold-dark)',
              marginBottom: '20px',
            }}>
              <Award size={28} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '12px' }}>
              2. Pre-Solved Supply Chain (NCCT)
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-600)', lineHeight: 1.6 }}>
              Zero worker acquisition costs. Labour Cooperative Federations bulk-onboard certified, vetted rosters across electrical, plumbing, carpentry, cleaning, and caregiving trades.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'rgba(14, 165, 233, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)',
              marginBottom: '20px',
            }}>
              <Scale size={28} />
            </div>
            <h3 style={{ fontSize: '19px', fontWeight: 800, marginBottom: '12px' }}>
              3. Data Dignity & Fair Algorithms
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-600)', lineHeight: 1.6 }}>
              No algorithmic punishments, no hidden ratings penalties, and zero location surveillance while offline. Transparent distance-decay and cooldown rotations give every partner equal earning opportunity.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div style={{
          background: 'var(--bg-main)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          border: '1px solid var(--ink-200)',
        }}>
          <h3 style={{ fontSize: '22px', fontWeight: 800, textAlign: 'center', marginBottom: '28px' }}>
            Platform Benchmark Comparison
          </h3>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--ink-200)' }}>
                  <th style={{ padding: '14px 18px', fontSize: '14px', fontWeight: 800, color: 'var(--ink-600)' }}>Metric / Feature</th>
                  <th style={{ padding: '14px 18px', fontSize: '15px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)', borderRadius: '12px 12px 0 0' }}>
                    🏛️ SahaKarya (Cooperative)
                  </th>
                  <th style={{ padding: '14px 18px', fontSize: '14px', fontWeight: 800, color: 'var(--ink-600)' }}>Private Gig Monopolies</th>
                  <th style={{ padding: '14px 18px', fontSize: '14px', fontWeight: 800, color: 'var(--ink-600)' }}>Unorganized Offline</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--ink-200)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: 600 }}>Commission Rate</td>
                  <td style={{ padding: '16px 18px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)' }}>0% Cut (5% Welfare Lock)</td>
                  <td style={{ padding: '16px 18px', color: 'var(--accent-rose)', fontWeight: 600 }}>20% – 30% Extracted</td>
                  <td style={{ padding: '16px 18px' }}>0% (No platform)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--ink-200)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: 600 }}>Worker Social Security</td>
                  <td style={{ padding: '16px 18px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)' }}>Guaranteed Collective Fund</td>
                  <td style={{ padding: '16px 18px', color: 'var(--ink-600)' }}>None (Contractor status)</td>
                  <td style={{ padding: '16px 18px' }}>None</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--ink-200)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: 600 }}>Pricing Structure</td>
                  <td style={{ padding: '16px 18px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)' }}>Transparent Fixed Tariff</td>
                  <td style={{ padding: '16px 18px', color: 'var(--ink-600)' }}>Dynamic Surge Multipliers</td>
                  <td style={{ padding: '16px 18px' }}>Arbitrary Bargaining</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--ink-200)' }}>
                  <td style={{ padding: '16px 18px', fontWeight: 600 }}>Institutional Governance</td>
                  <td style={{ padding: '16px 18px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)' }}>Labour Federation Council</td>
                  <td style={{ padding: '16px 18px', color: 'var(--ink-600)' }}>Unilateral Private Algorithms</td>
                  <td style={{ padding: '16px 18px' }}>Informal Local Agents</td>
                </tr>
                <tr>
                  <td style={{ padding: '16px 18px', fontWeight: 600 }}>AI Demand Forecasting</td>
                  <td style={{ padding: '16px 18px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-surface)', borderRadius: '0 0 12px 12px' }}>7-Day Gradient Boosting</td>
                  <td style={{ padding: '16px 18px', color: 'var(--ink-600)' }}>Proprietary Blackbox</td>
                  <td style={{ padding: '16px 18px' }}>None</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
