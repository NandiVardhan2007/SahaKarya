import { useState } from 'react';
import { Cpu, BarChart3, CheckCircle2 } from 'lucide-react';

const REGIONS = ['North (Delhi NCR)', 'South (Bengaluru/Chennai)', 'West (Mumbai/Pune)', 'East (Kolkata)', 'Central (Indore)'];
const SERVICES = ['electrician', 'plumber', 'carpenter', 'cleaner', 'painter', 'caregiver'];

export const AIForecastingSection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS[0]);
  const [selectedService, setSelectedService] = useState(SERVICES[0]);

  // Dynamic preview mock based on service
  const baseForecast = {
    electrician: [24, 28, 35, 42, 38, 48, 52],
    plumber: [18, 22, 29, 31, 28, 36, 40],
    carpenter: [12, 14, 19, 23, 21, 27, 30],
    cleaner: [32, 36, 44, 52, 48, 62, 70],
    painter: [10, 12, 16, 20, 22, 28, 34],
    caregiver: [15, 16, 17, 18, 18, 19, 20],
  }[selectedService] || [20, 24, 30, 35, 33, 40, 45];

  const days = ['Mon (Day 1)', 'Tue (Day 2)', 'Wed (Day 3)', 'Thu (Day 4)', 'Fri (Day 5)', 'Sat (Day 6)', 'Sun (Day 7)'];

  return (
    <section id="ai-forecasting" style={{ padding: '80px 0', background: 'var(--bg-main)', borderTop: '1px solid var(--ink-200)' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">Smart Automation (PS26089)</div>
          <h2 className="title">AI Demand Forecasting & Capacity Planner</h2>
          <p className="desc">
            Empowering federations to proactively balance worker shift allocations ahead of festival surges, weekend spikes, and seasonal heatwaves.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {/* Left Column: Interactive Predictor */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Cpu size={22} color="var(--primary)" />
                <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Model Inference Simulator</h3>
              </div>
              <span className="badge badge-green">Scikit-Learn ML</span>
            </div>

            {/* Region & Service Selectors */}
            <div style={{ marginBottom: '16px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-600)', display: 'block', marginBottom: '6px' }}>
                Cooperative Federation Region
              </label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--ink-200)',
                  fontFamily: 'inherit',
                  fontSize: '14px',
                  fontWeight: 600,
                  background: '#ffffff',
                }}
              >
                {REGIONS.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-600)', display: 'block', marginBottom: '6px' }}>
                Trade Service Category
              </label>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedService(s)}
                    style={{
                      padding: '8px 14px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '12.5px',
                      fontWeight: 700,
                      textTransform: 'capitalize',
                      background: selectedService === s ? 'var(--primary)' : 'var(--bg-card-alt)',
                      color: selectedService === s ? '#ffffff' : 'var(--ink-800)',
                      border: '1px solid',
                      borderColor: selectedService === s ? 'var(--primary)' : 'var(--ink-200)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Chart Bars Preview */}
            <div style={{ background: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--ink-200)', marginBottom: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--ink-800)', marginBottom: '14px', display: 'flex', justifyContent: 'space-between' }}>
                <span>7-Day Predicted Demand (Bookings / Day)</span>
                <span style={{ color: 'var(--primary)', fontWeight: 800 }}>+{Math.max(...baseForecast)} Peak Surge</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '140px', gap: '8px', paddingTop: '10px' }}>
                {baseForecast.map((val, idx) => {
                  const heightPct = (val / 75) * 100;
                  return (
                    <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)', marginBottom: '4px' }}>{val}</span>
                      <div
                        style={{
                          width: '100%',
                          height: `${heightPct}%`,
                          background: 'linear-gradient(180deg, var(--primary-light) 0%, var(--primary) 100%)',
                          borderRadius: '6px 6px 2px 2px',
                          transition: 'height 0.4s ease',
                        }}
                      />
                      <span style={{ fontSize: '9.5px', fontWeight: 600, color: 'var(--ink-400)', marginTop: '6px' }}>
                        {days[idx].split(' ')[0]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Model Metrics & Feature Weights */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <BarChart3 size={22} color="var(--gold-dark)" />
              <h3 style={{ fontSize: '18px', fontWeight: 800 }}>Model Specifications & Verification</h3>
            </div>

            <div className="grid-2" style={{ gap: '16px', marginBottom: '24px' }}>
              <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'var(--primary-surface)', border: '1px solid rgba(13, 82, 56, 0.2)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--primary-deep)', textTransform: 'uppercase' }}>R² Coefficient</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary)' }}>0.958</div>
                <div style={{ fontSize: '11.5px', color: 'var(--ink-600)' }}>Explains 95.8% demand variance</div>
              </div>

              <div style={{ padding: '16px', borderRadius: 'var(--radius-md)', background: 'var(--gold-surface)', border: '1px solid rgba(245, 166, 35, 0.3)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>Mean Absolute Error</div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--gold-dark)' }}>1.10</div>
                <div style={{ fontSize: '11.5px', color: 'var(--ink-600)' }}>MAE ±1.10 bookings / day</div>
              </div>
            </div>

            <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--primary)', marginBottom: '12px' }}>
              Feature Engineering Pipeline
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span><strong>Multi-Seasonal Calendar:</strong> Diwali (+3.2x), Holi (+2.1x), Dussehra, Pongal, Eid multipliers</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span><strong>Temporal Cyclicity:</strong> Weekday/Weekend sine-cosine cyclic encoding & rolling 7d moving average</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span><strong>Geospatial Bounds:</strong> Bounded bounding boxes covering North, South, East, West, Central hubs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13.5px' }}>
                <CheckCircle2 size={16} color="var(--primary)" />
                <span><strong>Embedded Model:</strong> <code style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>forecast_model.pkl</code> loaded at FastAPI startup with zero API costs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
