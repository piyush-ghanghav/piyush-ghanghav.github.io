import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from 'recharts';
import { RefreshCw, ArrowLeft, Eye, FileText, Mail, MousePointer, Lock } from 'lucide-react';
import {
  pipelineRead,
  PROJECT_KEYS,
  SECTION_KEYS,
  DAILY_KEYS,
  setOwnerSession,
} from '@/lib/analytics';

// ─── Password ─────────────────────────────────────────────────
// Change this to whatever you want. Not stored in code if you
// prefer — move to VITE_LOGGER_PASSWORD env var.
const LOGGER_PASSWORD = import.meta.env.VITE_LOGGER_PASSWORD as string ?? 'piyush';

// ─── Types ────────────────────────────────────────────────────

interface AnalyticsData {
  totalViews:      number;
  ownerViews:      number;
  resumeViews:     number;
  contactSubmits:  number;
  dailyData:       { date: string; visits: number }[];
  projectData:     { label: string; clicks: number }[];
  sectionData:     { section: string; views: number; percent: number }[];
  referrerData:    { source: string; count: number }[];
  events:          { type: string; ts: number; device: string; owner?: boolean; ref?: string; project?: string }[];
}

// ─── Fetch all analytics in one pipeline call ─────────────────

const fetchAnalytics = async (): Promise<AnalyticsData> => {
  const commands: unknown[][] = [
    ['GET', 'analytics:total_views'],                                      // 0
    ['GET', 'analytics:resume_views'],                                     // 1
    ['GET', 'analytics:contact_submits'],                                  // 2
    ['LRANGE', 'analytics:events', '0', '49'],                            // 3 — full 50
    ['GET', 'analytics:owner_views'],                                      // 4
    ...DAILY_KEYS.map(d  => ['GET', `analytics:daily:${d}`]),             // 5–18
    ...PROJECT_KEYS.map(p => ['GET', `analytics:project:${p.key}`]),      // 19–24
    ...SECTION_KEYS.map(s => ['GET', `analytics:section:${s}`]),          // 25–30
  ];

  const res = await pipelineRead(commands);
  const val = (i: number): number => Number(res[i]?.result ?? 0);

  const rawEvents = (res[3]?.result as string[] ?? []);
  const events = rawEvents
    .map(e => { try { return JSON.parse(e); } catch { return null; } })
    .filter(Boolean);

  const dailyData = DAILY_KEYS.map((d, i) => ({
    date:   d.slice(5),
    visits: val(5 + i),
  }));

  const projectData = PROJECT_KEYS.map((p, i) => ({
    label:  p.label,
    clicks: val(19 + i),
  })).sort((a, b) => b.clicks - a.clicks);

  const heroViews = val(25) || 1;
  const sectionData = SECTION_KEYS.map((s, i) => ({
    section: s,
    views:   val(25 + i),
    percent: Math.round((val(25 + i) / heroViews) * 100),
  }));

  // Referrer breakdown — computed from the last 50 stored events
  const refCounts: Record<string, number> = {};
  events
    .filter((e: { type: string; ref?: string }) => e.type === 'page_view')
    .forEach((e: { ref?: string }) => {
      const src = e.ref || 'direct';
      refCounts[src] = (refCounts[src] ?? 0) + 1;
    });
  const referrerData = Object.entries(refCounts)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  return {
    totalViews:     val(0),
    ownerViews:     val(4),
    resumeViews:    val(1),
    contactSubmits: val(2),
    dailyData,
    projectData,
    sectionData,
    referrerData,
    events,
  };
};

// ─── Sub-components ───────────────────────────────────────────

const StatCard = ({
  icon, label, value, sub, accent = false, suffix = '',
}: {
  icon:     React.ReactNode;
  label:    string;
  value:    number;
  sub?:     string;
  accent?:  boolean;
  suffix?:  string;
}) => (
  <div className={`rounded-xl p-5 flex flex-col gap-2 border ${
    accent
      ? 'bg-[#065F46] border-[#065F46] dark:bg-surface dark:border-accent/40'
      : 'bg-surface border-border'
  }`}>
    <div className={`flex items-center gap-2 ${accent ? 'text-emerald-300 dark:text-text-tertiary' : 'text-text-tertiary'}`}>
      {icon}
      <span className="font-mono text-[10px] uppercase tracking-wider">{label}</span>
    </div>
    <p className={`font-display font-bold text-3xl ${accent ? 'text-white dark:text-text-primary' : 'text-text-primary'}`}>
      {value}{suffix}
    </p>
    {sub && (
      <p className={`font-mono text-[10px] ${accent ? 'text-emerald-300 dark:text-text-tertiary' : 'text-text-tertiary'}`}>
        {sub}
      </p>
    )}
  </div>
);

const SkeletonCard = () => (
  <div className="bg-surface border border-border rounded-xl p-5 animate-pulse">
    <div className="h-3 w-24 bg-surface-elevated rounded mb-3" />
    <div className="h-8 w-16 bg-surface-elevated rounded" />
  </div>
);

const timeAgo = (ts: number): string => {
  const diff = Date.now() - ts;
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 1)   return 'just now';
  if (mins < 60)  return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  return `${days}d ago`;
};

const EventTypeBadge = ({ type }: { type: string }) => {
  const config: Record<string, string> = {
    page_view:      'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    resume_view:    'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300',
    project_click:  'bg-accent-muted text-accent',
    demo_click:     'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    contact_submit: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300',
  };
  return (
    <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm ${config[type] ?? 'bg-surface-elevated text-text-tertiary'}`}>
      {type.replace('_', ' ')}
    </span>
  );
};

// ─── Main component ───────────────────────────────────────────

const Logger = () => {
  const navigate = useNavigate();

  // ── Auth state ────────────────────────────────────────────────
  const [authed,    setAuthed]    = useState(false);
  const [password,  setPassword]  = useState('');
  const [pwError,   setPwError]   = useState(false);

  // ── Dashboard state ───────────────────────────────────────────
  const [data,        setData]        = useState<AnalyticsData | null>(null);
  const [loading,     setLoading]     = useState(false);
  const [error,       setError]       = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [refreshing,  setRefreshing]  = useState(false);
  const [showOwner,   setShowOwner]   = useState(true); // toggle owner events

  // ── Require easter egg entry ──────────────────────────────────
  useEffect(() => {
    if (sessionStorage.getItem('secretKey') !== 'piyush-secret-key') {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  // ── Password submit ───────────────────────────────────────────
  const handlePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === LOGGER_PASSWORD) {
      setOwnerSession(); // tag this session as owner in analytics
      setAuthed(true);
      setPwError(false);
    } else {
      setPwError(true);
      setPassword('');
    }
  };

  // ── Fetch ─────────────────────────────────────────────────────
  const load = async (isRefresh = false) => {
    if (isRefresh) setRefreshing(true);
    else           setLoading(true);
    setError(false);
    try {
      const result = await fetchAnalytics();
      setData(result);
      setLastUpdated(new Date());
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (authed) load();
  }, [authed]);

  // ── Render: password prompt ───────────────────────────────────
  if (!authed) return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="card p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center">
              <Lock size={18} strokeWidth={1.5} className="text-accent" />
            </div>
            <h1 className="font-display font-bold text-xl text-text-primary mt-2">
              Analytics
            </h1>
            <p className="font-body text-sm text-text-secondary">
              Enter password to access dashboard.
            </p>
          </div>

          <form onSubmit={handlePassword} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-body text-xs font-medium text-text-secondary">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => { setPassword(e.target.value); setPwError(false); }}
                autoFocus
                className={`
                  w-full px-4 py-2.5 rounded-md text-sm font-body
                  bg-surface border transition-colors duration-200
                  text-text-primary focus:outline-none
                  ${pwError
                    ? 'border-error focus:border-error'
                    : 'border-border focus:border-accent'
                  }
                `}
              />
              {pwError && (
                <p className="font-mono text-[10px] text-error">
                  Incorrect password.
                </p>
              )}
            </div>
            <button type="submit" className="btn-primary justify-center">
              Enter
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // ── Render: loading ───────────────────────────────────────────
  if (loading) return (
    <div className="min-h-screen bg-bg p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="h-8 w-48 bg-surface rounded animate-pulse mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <SkeletonCard /><SkeletonCard /><SkeletonCard />
        </div>
        <div className="bg-surface border border-border rounded-xl h-64 animate-pulse mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-surface border border-border rounded-xl h-64 animate-pulse" />
          <div className="bg-surface border border-border rounded-xl h-64 animate-pulse" />
        </div>
      </div>
    </div>
  );

  // ── Render: error ─────────────────────────────────────────────
  if (error) return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="text-center">
        <p className="font-display font-bold text-xl text-text-primary mb-2">
          Failed to load
        </p>
        <p className="font-body text-sm text-text-secondary mb-4">
          Check your Upstash env vars and connection.
        </p>
        <button onClick={() => load()} className="btn-primary">Retry</button>
      </div>
    </div>
  );

  if (!data) return null;

  // Filter events based on owner toggle
  const visibleEvents = showOwner
    ? data.events
    : data.events.filter(ev => !ev.owner);

  const maxProject = Math.max(...data.projectData.map(p => p.clicks), 1);
  const maxSection = Math.max(...data.sectionData.map(s => s.views), 1);

  // ── Render: dashboard ─────────────────────────────────────────
  return (
    <div className="min-h-screen bg-bg">
      <div className="max-w-6xl mx-auto p-6 md:p-10">

        {/* Header */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 rounded-md text-text-tertiary hover:text-text-primary
                         hover:bg-surface-elevated transition-colors"
              aria-label="Back to portfolio"
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>
            <div>
              <h1 className="font-display font-bold text-xl text-text-primary">
                Analytics<span className="text-accent">.</span>
              </h1>
              {lastUpdated && (
                <p className="font-mono text-[10px] text-text-tertiary mt-0.5">
                  Updated {lastUpdated.toLocaleTimeString()}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Owner toggle */}
            <button
              onClick={() => setShowOwner(p => !p)}
              className={`
                font-mono text-[10px] px-3 py-1.5 rounded-md border
                transition-colors duration-200
                ${showOwner
                  ? 'bg-surface-elevated border-border text-text-secondary'
                  : 'bg-accent-muted border-accent/30 text-accent'
                }
              `}
            >
              {showOwner ? 'All events' : 'Visitors only'}
            </button>

            <button
              onClick={() => load(true)}
              disabled={refreshing}
              className="flex items-center gap-2 btn-ghost text-sm"
            >
              <RefreshCw
                size={13} strokeWidth={1.5}
                className={refreshing ? 'animate-spin' : ''}
              />
              Refresh
            </button>
          </div>
        </div>

        {/* ── Top stats ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={<Eye size={14} strokeWidth={1.5} />}
            label="Total Visits"
            value={data.totalViews}
            sub="All time · incl. yours"
          />
          <StatCard
            icon={<Eye size={14} strokeWidth={1.5} className="text-accent" />}
            label="Real Visitors"
            value={Math.max(0, data.totalViews - data.ownerViews)}
            sub={`${data.ownerViews} owner visits excluded`}
            accent
          />
          <StatCard
            icon={<FileText size={14} strokeWidth={1.5} />}
            label="Resume Views"
            value={data.resumeViews}
            sub="/resume page loads"
          />
          <StatCard
            icon={<Mail size={14} strokeWidth={1.5} />}
            label="Conversion"
            value={
              data.totalViews > 0
                ? Math.round((data.contactSubmits / data.totalViews) * 100)
                : 0
            }
            suffix="%"
            sub={`${data.contactSubmits} form submits`}
          />
        </div>

        {/* ── Daily chart ── */}
        <div className="bg-surface border border-border rounded-xl p-6 mb-6">
          <p className="section-label mb-5">Visits — last 14 days</p>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={data.dailyData} barSize={18}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="var(--color-border)"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: 'var(--color-text-tertiary)' }}
                axisLine={false} tickLine={false}
              />
              <YAxis
                allowDecimals={false}
                tick={{ fontSize: 10, fontFamily: 'JetBrains Mono', fill: 'var(--color-text-tertiary)' }}
                axisLine={false} tickLine={false} width={28}
              />
              <Tooltip
                contentStyle={{
                  background:   'var(--color-surface-elevated)',
                  border:       '1px solid var(--color-border)',
                  borderRadius: '8px',
                  fontSize:     '11px',
                  fontFamily:   'JetBrains Mono',
                }}
                cursor={{ fill: 'var(--color-surface-elevated)' }}
              />
              <Bar dataKey="visits" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* ── Middle row ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

          {/* Project clicks */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <MousePointer size={13} strokeWidth={1.5} className="text-text-tertiary" />
              <p className="section-label">Project Clicks</p>
            </div>
            <div className="flex flex-col gap-3">
              {data.projectData.map(p => (
                <div key={p.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-body text-xs text-text-primary">{p.label}</span>
                    <span className="font-mono text-[10px] text-text-tertiary">{p.clicks}</span>
                  </div>
                  <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${(p.clicks / maxProject) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section reach */}
          <div className="bg-surface border border-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <Eye size={13} strokeWidth={1.5} className="text-text-tertiary" />
              <p className="section-label">Section Reach</p>
            </div>
            <div className="flex flex-col gap-3">
              {data.sectionData.map(s => (
                <div key={s.section}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-body text-xs text-text-primary capitalize">
                      {s.section}
                    </span>
                    <span className="font-mono text-[10px] text-text-tertiary">
                      {s.percent}%
                    </span>
                  </div>
                  <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(s.views / maxSection) * 100}%`,
                        background: `color-mix(in srgb, var(--color-accent) ${s.percent}%, var(--color-border))`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Referrer breakdown ── */}
        {data.referrerData.length > 0 && (
          <div className="bg-surface border border-border rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <MousePointer size={13} strokeWidth={1.5} className="text-text-tertiary" />
                <p className="section-label">Traffic Sources</p>
              </div>
              <span className="font-mono text-[10px] text-text-tertiary">
                from last 50 events
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.referrerData.map(r => {
                const max = data.referrerData[0].count;
                return (
                  <div key={r.source}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs text-text-primary">
                        {r.source}
                      </span>
                      <span className="font-mono text-[10px] text-text-tertiary">
                        {r.count} visit{r.count !== 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="h-1.5 bg-surface-elevated rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent/70 rounded-full transition-all duration-500"
                        style={{ width: `${(r.count / max) * 100}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Recent events ── */}
        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-5">
            <p className="section-label">Recent Events</p>
            <span className="font-mono text-[10px] text-text-tertiary">
              {showOwner ? 'showing all' : 'visitors only'}
            </span>
          </div>
          {visibleEvents.length === 0 ? (
            <p className="font-mono text-xs text-text-tertiary">No events yet.</p>
          ) : (
            <div className="flex flex-col divide-y divide-border">
              {visibleEvents.map((ev, i) => (
                <div key={i} className="flex items-center gap-4 py-2.5 flex-wrap">
                  <EventTypeBadge type={ev.type} />
                  {ev.owner && (
                    <span className="font-mono text-[9px] text-text-tertiary
                                     bg-surface-elevated px-1.5 py-0.5 rounded-sm">
                      you
                    </span>
                  )}
                  <span className="font-mono text-[10px] text-text-tertiary">
                    {timeAgo(ev.ts)}
                  </span>
                  <span className="font-mono text-[10px] text-text-secondary">
                    {ev.device}
                  </span>
                  {ev.ref && ev.ref !== 'direct' && (
                    <span className="font-mono text-[10px] text-text-tertiary">
                      via {ev.ref}
                    </span>
                  )}
                  {ev.project && (
                    <span className="font-mono text-[10px] text-accent">
                      {ev.project}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Logger;