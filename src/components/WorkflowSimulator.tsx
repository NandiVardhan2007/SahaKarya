import { useState } from 'react';
import { Search, Navigation, Wrench, Receipt, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  statusTag: string;
  tagColor: string;
  customerView: string;
  workerView: string;
  adminAudit: string;
  dataPayload: Record<string, any>;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: 'Service Discovery & Booking Creation',
    subtitle: 'Customer selects trade, time preference, and notes requirements',
    icon: Search,
    statusTag: 'Created',
    tagColor: 'badge-dark',
    customerView: 'Selects Electrician service in Anaparthi Central Hub, enters "Fan wiring repair", reviews fixed standard tariff of ₹450 (zero surge pricing), and taps "Book Now".',
    workerView: 'Worker is currently marked "Online" with GPS streaming active. Waiting for matching broadcast.',
    adminAudit: 'Federation Portal logs new booking request with timestamp and region classification.',
    dataPayload: {
      booking_id: "BK_78491A",
      service_type: "electrician",
      customer_phone: "9876543210",
      lat: 28.6139,
      lng: 77.2090,
      price: 450.0,
      status: "created"
    }
  },
  {
    id: 2,
    title: 'Fair Match Dispatch & Acceptance',
    subtitle: 'Fair scoring algorithm matches closest available certified partner',
    icon: Navigation,
    statusTag: 'Accepted / En Route',
    tagColor: 'badge-green',
    customerView: 'Customer tracking screen opens immediately. Displays "Ramesh Kumar (Verified Electrician)" with 4.9★ rating. Live GPS route shows ~8 min ETA.',
    workerView: 'Incoming offer bottom sheet pops up with haptic vibration and 45s countdown. Worker taps "Accept Job" and clicks "Start Heading (En Route)".',
    adminAudit: 'Live Dispatch map pins worker to booking with Socket.IO room broadcast to federation monitors.',
    dataPayload: {
      worker_id: "WK_RAMESH_01",
      worker_name: "Ramesh Kumar",
      match_score: 94.2,
      distance_km: 1.8,
      status: "en_route"
    }
  },
  {
    id: 3,
    title: 'Arrival & Service Execution',
    subtitle: 'On-site craftsmanship with in-trip messaging and calling',
    icon: Wrench,
    statusTag: 'Arrived / In Progress',
    tagColor: 'badge-gold',
    customerView: 'Customer receives arrival notification. Can use in-app chat ("Please call when at gate") with zero third-party tracking. Service begins.',
    workerView: 'Worker taps "Arrived at Location", meets customer, diagnoses fan wiring, and taps "Start Work".',
    adminAudit: 'Timeline audit logs arrival and work commencement timestamps for transparency.',
    dataPayload: {
      service_status: "started",
      otp_verified: true,
      in_trip_chat_active: true,
      started_at: "2026-08-31T19:05:00Z"
    }
  },
  {
    id: 4,
    title: 'Job Completion & Invoice Settlement',
    subtitle: 'Service finished, customer reviews transparent bill and 5% welfare allocation',
    icon: Receipt,
    statusTag: 'Completed / Payment',
    tagColor: 'badge-green',
    customerView: 'Worker marks work completed. Customer sees "Pay Bill" CTA showing ₹450 total with an explicit note: "₹22.50 (5%) routed to Worker Welfare Pool". Pays via instant UPI.',
    workerView: 'Worker receives instant settlement: ₹427.50 (95%) directly credited to bank account + ₹22.50 credited to collective federation welfare balance.',
    adminAudit: 'Welfare transaction recorded in federation immutable ledger: +₹22.50 credited to welfare pool ID FED_DELHI_01.',
    dataPayload: {
      total_amount: 450.0,
      worker_take_home_95pct: 427.50,
      welfare_fund_5pct: 22.50,
      payment_method: "UPI",
      status: "paid"
    }
  },
  {
    id: 5,
    title: 'Rating, Feedback & Tip',
    subtitle: 'Direct peer evaluation without algorithmic punishment',
    icon: Star,
    statusTag: 'Rated',
    tagColor: 'badge-gold',
    customerView: 'Customer awards 5 stars, selects "Punctual" & "Great Craftsmanship" tags, adds a ₹50 tip, and returns to home dashboard.',
    workerView: 'Partner rating profile increases to 4.92★. Receives push notification with praise tags and tip.',
    adminAudit: 'Worker roster reputation index updated. Positive ratings feed into fair dispatch bonus weights.',
    dataPayload: {
      rating: 5,
      tags: ["Punctual", "Clean Work", "Polite"],
      tip_amount: 50.0,
      worker_new_avg: 4.92
    }
  }
];

export const WorkflowSimulator: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const activeStep = STEPS.find((s) => s.id === activeStepId) || STEPS[0];

  return (
    <section id="workflow" style={{ padding: '80px 0', background: 'var(--bg-main)', borderTop: '1px solid var(--ink-200)' }}>
      <div className="container">
        <div className="section-header">
          <div className="subtitle">Interactive Lifecycle</div>
          <h2 className="title">Real-World Service Workflow Simulation</h2>
          <p className="desc">
            Experience the logical end-to-end lifecycle from customer booking creation, real-time dispatch, to 5% welfare settlement and rating.
          </p>
        </div>

        {/* Stepper Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          overflowX: 'auto',
          paddingBottom: '16px',
          marginBottom: '32px',
        }}>
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isCurrent = step.id === activeStepId;
            const isPast = step.id < activeStepId;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 18px',
                  borderRadius: 'var(--radius-full)',
                  background: isCurrent ? 'var(--primary)' : (isPast ? 'var(--primary-surface)' : '#ffffff'),
                  color: isCurrent ? '#ffffff' : (isPast ? 'var(--primary)' : 'var(--ink-600)'),
                  border: isCurrent ? '1.5px solid var(--primary)' : '1px solid var(--ink-200)',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: isCurrent ? 'rgba(255,255,255,0.25)' : 'transparent',
                }}>
                  {isPast ? <CheckCircle2 size={16} /> : <Icon size={15} />}
                </div>
                <span>Step {step.id}: {step.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Step Simulation Grid */}
        <div className="grid-3" style={{ marginBottom: '28px' }}>
          {/* Customer Perspective */}
          <div className="glass-card" style={{ borderTop: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
                📱 Customer App Flow
              </span>
              <span className={`badge ${activeStep.tagColor}`}>{activeStep.statusTag}</span>
            </div>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-800)', lineHeight: 1.6 }}>
              {activeStep.customerView}
            </p>
          </div>

          {/* Worker Perspective */}
          <div className="glass-card" style={{ borderTop: '4px solid var(--gold-dark)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--gold-dark)', textTransform: 'uppercase' }}>
                🤝 Partner App Flow
              </span>
              <span className="badge badge-gold">Verified Partner</span>
            </div>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-800)', lineHeight: 1.6 }}>
              {activeStep.workerView}
            </p>
          </div>

          {/* Federation / Admin Perspective */}
          <div className="glass-card" style={{ borderTop: '4px solid var(--accent-purple)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--accent-purple)', textTransform: 'uppercase' }}>
                🏛️ Federation Audit Ledger
              </span>
              <span className="badge badge-dark">5% Welfare Lock</span>
            </div>
            <p style={{ fontSize: '14.5px', color: 'var(--ink-800)', lineHeight: 1.6 }}>
              {activeStep.adminAudit}
            </p>
          </div>
        </div>

        {/* Live Payload Preview */}
        <div className="glass-card" style={{ padding: '24px', background: 'var(--ink-900)', color: '#ffffff' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-emerald)' }}></div>
              <span style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: 600, color: '#a7f3d0' }}>
                Live Socket.IO Contract State ({activeStep.statusTag})
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                disabled={activeStepId === 1}
                onClick={() => setActiveStepId((p) => Math.max(1, p - 1))}
                className="btn btn-outline"
                style={{ padding: '6px 14px', fontSize: '12px', background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}
              >
                Previous Step
              </button>
              <button
                disabled={activeStepId === STEPS.length}
                onClick={() => setActiveStepId((p) => Math.min(STEPS.length, p + 1))}
                className="btn btn-primary"
                style={{ padding: '6px 14px', fontSize: '12px' }}
              >
                Next Step <ArrowRight size={14} />
              </button>
            </div>
          </div>

          <pre style={{ margin: 0, fontSize: '13px', color: '#a7f3d0', fontFamily: 'var(--font-mono)' }}>
            <code>{JSON.stringify(activeStep.dataPayload, null, 2)}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
