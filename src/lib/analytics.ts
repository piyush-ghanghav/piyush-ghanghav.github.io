/**
 * analytics.ts
 *
 * Lightweight event tracker for the portfolio.
 * All calls are fire-and-forget — analytics never blocks the UI.
 * Token is exposed in VITE_ env (client-side tradeoff, acceptable for
 * a personal portfolio where data isn't sensitive).
 *
 * Redis key schema:
 *   analytics:total_views          → integer counter
 *   analytics:resume_views         → integer counter
 *   analytics:contact_submits      → integer counter
 *   analytics:section:{name}       → integer counter
 *   analytics:project:{key}        → integer counter
 *   analytics:daily:{YYYY-MM-DD}   → integer counter (TTL 30 days)
 *   analytics:events               → list of JSON strings (max 50)
 */

const URL_   = import.meta.env.VITE_UPSTASH_REDIS_REST_URL   as string | undefined;
const TOKEN_ = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN as string | undefined;

/** Returns true if this session belongs to the portfolio owner.
 *  Set automatically when owner logs into the Logger dashboard.
 *  Cleared on tab close (sessionStorage).
 */
export const isOwner = (): boolean => {
  try {
    return sessionStorage.getItem('_isOwner') === '1';
  } catch {
    return false;
  }
};

export const setOwnerSession = (): void => {
  try { sessionStorage.setItem('_isOwner', '1'); } catch { /* */ }
};

// ─── Core pipeline call ───────────────────────────────────────

/** Send a batch of Redis commands in one HTTP request. */
const pipeline = async (commands: unknown[][]): Promise<void> => {
  if (!URL_ || !TOKEN_) return;
  try {
    await fetch(`${URL_}/pipeline`, {
      method:  'POST',
      headers: {
        Authorization:  `Bearer ${TOKEN_}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commands),
      keepalive: true, // survives page unload
    });
  } catch {
    // Fail silently — analytics must never break the app
  }
};

/** Read pipeline — returns parsed result array or empty array on failure. */
export const pipelineRead = async (
  commands: unknown[][],
): Promise<Array<{ result: unknown; error: string | null }>> => {
  if (!URL_ || !TOKEN_) return [];
  try {
    const res = await fetch(`${URL_}/pipeline`, {
      method:  'POST',
      headers: {
        Authorization:  `Bearer ${TOKEN_}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commands),
    });
    return res.json();
  } catch {
    return [];
  }
};

// ─── Helpers ──────────────────────────────────────────────────

const getDevice = (): 'mobile' | 'desktop' =>
  /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop';

const getReferrer = (): string => {
  const ref = document.referrer;
  if (!ref) return 'direct';
  try { return new URL(ref).hostname; } catch { return 'unknown'; }
};

const today = (): string => new Date().toISOString().slice(0, 10);

const toProjectKey = (title: string): string =>
  title.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');

const mkEvent = (type: string, meta: Record<string, string> = {}): string =>
  JSON.stringify({
    type,
    ts:     Date.now(),
    device: getDevice(),
    owner:  isOwner(),
    ...meta,
  });

const EVENTS_KEY  = 'analytics:events';
const TRIM_CMD = ['LTRIM', EVENTS_KEY, '0', '49']; // keep last 50

// ─── Public tracking functions ────────────────────────────────

/** Call once when the portfolio page mounts. */
export const trackPageView = (): Promise<void> => {
  const dateKey   = `analytics:daily:${today()}`;
  const ownerCmds = isOwner()
    ? [['INCR', 'analytics:owner_views']] as unknown[][]
    : [];
  return pipeline([
    ['INCR',   'analytics:total_views'],
    ['INCR',   dateKey],
    ['EXPIRE', dateKey, '2592000'],
    ['LPUSH',  EVENTS_KEY, mkEvent('page_view', { ref: getReferrer() })],
    TRIM_CMD,
    ...ownerCmds,
  ]);
};

/** Call when /resume mounts. */
export const trackResumeView = (): Promise<void> =>
  pipeline([
    ['INCR',  'analytics:resume_views'],
    ['LPUSH', EVENTS_KEY, mkEvent('resume_view')],
    TRIM_CMD,
  ]);

/** Call when a section enters the viewport (once per section per load). */
export const trackSection = (section: string): Promise<void> =>
  pipeline([['INCR', `analytics:section:${section}`]]);

/** Call when a project card is clicked (modal open). */
export const trackProjectClick = (title: string): Promise<void> =>
  pipeline([
    ['INCR',  `analytics:project:${toProjectKey(title)}`],
    ['LPUSH', EVENTS_KEY, mkEvent('project_click', { project: title })],
    TRIM_CMD,
  ]);

/** Call when a "Live Demo" link is clicked. */
export const trackDemoClick = (project: string): Promise<void> =>
  pipeline([
    ['LPUSH', EVENTS_KEY, mkEvent('demo_click', { project })],
    TRIM_CMD,
  ]);

/** Call after contact form sends successfully. */
export const trackContactSubmit = (): Promise<void> =>
  pipeline([
    ['INCR',  'analytics:contact_submits'],
    ['LPUSH', EVENTS_KEY, mkEvent('contact_submit')],
    TRIM_CMD,
  ]);

// ─── Key helpers (used by Logger dashboard) ───────────────────

export const PROJECT_KEYS = [
  { label: 'IdeaVault',           key: toProjectKey('IdeaVault')            },
  { label: 'AI Mock Interview',   key: toProjectKey('AI Mock Interview Prep')},
  { label: 'Event Management',    key: toProjectKey('Event Management System')},
  { label: 'Sentiment Analysis',  key: toProjectKey('Social Media Sentiment Analysis')},
  { label: 'Parallel AES',        key: toProjectKey('Parallel AES Encryption')},
  { label: 'VSCode Tracker',      key: toProjectKey('VSCode Activity Tracker')},
];

export const SECTION_KEYS = [
  'hero', 'about', 'projects', 'experience', 'certifications', 'contact',
];

export const DAILY_KEYS = Array.from({ length: 14 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (13 - i));
  return d.toISOString().slice(0, 10);
});