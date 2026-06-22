import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Briefcase, MapPin, Star, Calendar } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────

type TimelineItemType = 'education' | 'achievement' | 'work';

interface TimelineItem {
  type:        TimelineItemType;
  title:       string;
  subtitle:    string;
  institution: string;
  location?:   string;
  period:      string;
  grade?:      string;
  tags?:       string[];
  highlight?:  string; // one-line callout — e.g. "8.4 GPA" or "Semi-Finalist"
}

// ─── Data ─────────────────────────────────────────────────────

const TIMELINE: TimelineItem[] = [
  // {
  //   type:        'work',
  //   title:       'Programmer Analyst Trainee',
  //   subtitle:    'Offer letter received · Joining TBD',
  //   institution: 'Cognizant Technology Solutions',
  //   location:    'India',
  //   period:      '2025 →',
  //   highlight:   'Incoming · GENC PAT',
  //   tags:        ['Software Engineering', 'Full Stack'],
  // },
  {
    type:        'achievement',
    title:       'IEEE Research Publication',
    subtitle:    'Social Media Sentiment Analysis using ML models (SVM, Decision Tree, Random Forest)',
    institution: 'IEEE ICDT 2025',
    period:      'Mar 2025',
    highlight:   'Published',
    tags:        ['Python', 'NLP', 'Machine Learning', 'Research'],
  },
  {
    type:        'education',
    title:       'B.Tech · Computer Engineering',
    subtitle:    'Core degree covering Data Structures, Algorithms, DBMS, OOP, Computer Networks, Cloud Computing and Web Development.',
    institution: 'Sanjivani College of Engineering',
    location:    'Kopargaon',
    period:      '2021 – 2025',
    // grade:       '8.4 GPA',
    highlight:   '8.4 GPA',
    tags:        ['Full Stack', 'Systems Programming', 'DSA'],
  },
  {
    type:        'education',
    title:       'Honours · Artificial Intelligence & Machine Learning',
    subtitle:    'Covered advanced ML, deep learning, NLP, and AI systems.',
    institution: 'Sanjivani College of Engineering',
    location:    'Kopargaon',
    period:      '2023 – 2025',
    highlight:   ' Honours',
    tags:        ['Machine Learning', 'Deep Learning', 'NLP', 'AI'],
  },
  {
    type:        'achievement',
    title:       'Semi-Finalist · Tata Innovation Challenge',
    subtitle:    'Identification of Flood Prone Areas in Urban Settlements — ML-based approach. Cleared concept solution, abstract shortlisting, technical presentation, and POC demonstration rounds.',
    institution: 'Tata Consultancy Services',
    location:    'India',
    period:      'Nov 2022 – Mar 2023',
    highlight:   'Semi-Finalist',
    tags:        ['Machine Learning', 'Python', 'GIS', 'Data Analysis'],
  },
  {
    type:        'education',
    title:       'Higher Secondary Certificate (HSC)',
    subtitle:    '',
    institution: 'Mahaveer Jain High School',
    location:    'Lasalgaon',
    period:      '2020 – 2021',
    grade:       '93.83%',
    highlight:   '93.83%',
  },
  {
    type:        'education',
    title:       'Secondary School Certificate (SSC)',
    subtitle:    '',
    institution: 'Loknete Dattaji Patil Vidyalaya',
    location:    'Lasalgaon',
    period:      '2018 – 2019',
    grade:       '89.20%',
    highlight:   '89.20%',
  },
];

// ─── Icon per type ─────────────────────────────────────────────

const TYPE_CONFIG: Record<
  TimelineItemType,
  { icon: React.ReactNode; dotClass: string; badgeClass: string; label: string }
> = {
  work: {
    icon:       <Briefcase size={14} strokeWidth={1.5} />,
    dotClass:   'bg-accent border-accent/30',
    badgeClass: 'bg-accent-muted text-accent',
    label:      'Work',
  },
  achievement: {
    icon:       <Trophy size={14} strokeWidth={1.5} />,
    dotClass:   'bg-amber-400 border-amber-400/30 dark:bg-amber-500',
    badgeClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300',
    label:      'Achievement',
  },
  education: {
    icon:       <GraduationCap size={14} strokeWidth={1.5} />,
    dotClass:   'bg-info border-info/30',
    badgeClass: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300',
    label:      'Education',
  },
};

// ─── Animation ────────────────────────────────────────────────

const itemAnim = (delay = 0) => ({
  initial:     { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, margin: '-40px' },
  transition:  { duration: 0.5, ease: [0.4, 0, 0.2, 1], delay },
});

// ─── Single timeline item ─────────────────────────────────────

const TimelineEntry = ({
  item,
  delay,
  isLast,
}: {
  item:   TimelineItem;
  delay:  number;
  isLast: boolean;
}) => {
  const config = TYPE_CONFIG[item.type];

  return (
    <motion.div {...itemAnim(delay)} className="relative flex gap-5">

      {/* Left column: dot + vertical line */}
      <div className="flex flex-col items-center flex-shrink-0 w-8">
        {/* Icon dot */}
        <div
          className={`
            relative z-10 flex items-center justify-center
            w-8 h-8 rounded-full border-2 text-white
            flex-shrink-0 ${config.dotClass}
          `}
        >
          {config.icon}
        </div>
        {/* Vertical connector */}
        {!isLast && (
          <div className="w-px flex-1 bg-border mt-2 min-h-[2rem]" />
        )}
      </div>

      {/* Right column: card content */}
      <div
        className={`
          card p-5 flex-1 mb-4
          hover:border-accent/20
          transition-colors duration-200
        `}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              {/* Type badge */}
              <span
                className={`
                  font-mono text-[9px] tracking-wider uppercase
                  px-2 py-0.5 rounded-sm ${config.badgeClass}
                `}
              >
                {config.label}
              </span>
              {/* Highlight pill */}
              {item.highlight && (
                <span className="font-mono text-[10px] text-accent tracking-wide">
                  · {item.highlight}
                </span>
              )}
            </div>
            <h3 className="font-display font-semibold text-base text-text-primary leading-snug">
              {item.title}
            </h3>
          </div>

          {/* Period */}
          <div className="flex items-center gap-1 text-text-tertiary flex-shrink-0">
            <Calendar size={11} strokeWidth={1.5} />
            <span className="font-mono text-[10px]">{item.period}</span>
          </div>
        </div>

        {/* Subtitle */}
        {item.subtitle && (
          <p className="text-xs text-text-secondary leading-relaxed mt-2">
            {item.subtitle}
          </p>
        )}

        {/* Meta row */}
        <div className="flex items-center gap-4 mt-3 flex-wrap">
          {/* Institution */}
          <div className="flex items-center gap-1 text-text-secondary">
            {item.type === 'education'
              ? <GraduationCap size={11} strokeWidth={1.5} />
              : item.type === 'work'
                ? <Briefcase size={11} strokeWidth={1.5} />
                : <Trophy size={11} strokeWidth={1.5} />
            }
            <span className="font-body text-xs">{item.institution}</span>
          </div>

          {/* Location */}
          {item.location && (
            <div className="flex items-center gap-1 text-text-tertiary">
              <MapPin size={11} strokeWidth={1.5} />
              <span className="font-body text-xs">{item.location}</span>
            </div>
          )}

          {/* Grade */}
          {item.grade && (
            <div className="flex items-center gap-1 text-text-tertiary">
              <Star size={11} strokeWidth={1.5} />
              <span className="font-mono text-xs">{item.grade}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {item.tags.map(tag => (
              <span key={tag} className="skill-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ─── Snapshot highlights (right column) ──────────────────────
// Pulled from TIMELINE — no new data needed.

const SNAPSHOT = [
  // {
  //   type:  'work'        as TimelineItemType,
  //   title: 'Programmer Analyst Trainee',
  //   sub:   'Cognizant Technology Solutions',
  // },
  {
    type:  'achievement' as TimelineItemType,
    title: 'IEEE Published',
    sub:   'ICDT 2025 · Sentiment Analysis',
  },
  {
    type:  'education'   as TimelineItemType,
    title: 'B.Tech Computer Engineering',
    sub:   'Sanjivani COE · 8.4 GPA · 2021–2025',
  },
  {
    type:  'education'   as TimelineItemType,
    title: 'Honours · AIML',
    sub:   'Sanjivani COE · Concurrent · 2023–2025',
  },
];

const SnapshotCard = () => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: 0.35 }}
    className="card p-6 flex flex-col gap-6"
  >
    {/* Header */}
    <div>
      <p className="section-label mb-1">Career Snapshot</p>
      <p className="font-body text-xs text-text-tertiary">
        Key highlights at a glance
      </p>
    </div>

    {/* Highlights */}
    <div className="flex flex-col gap-3">
      {SNAPSHOT.map(item => {
        const cfg = TYPE_CONFIG[item.type];
        return (
          <div key={item.title} className="flex items-start gap-3">
            {/* Coloured dot */}
            <div
              className={`
                w-2 h-2 rounded-full mt-1.5 flex-shrink-0
                ${cfg.dotClass.split(' ')[0]}
              `}
            />
            <div>
              <p className="font-body text-sm font-medium text-text-primary leading-snug">
                {item.title}
              </p>
              <p className="font-mono text-[10px] text-text-tertiary mt-0.5">
                {item.sub}
              </p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* Status */}
    <div className="flex flex-col gap-3">
      {/* Open to work */}
      {/* <div className="flex items-center gap-2.5">
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full
                           rounded-full bg-accent opacity-60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <p className="font-body text-sm text-text-primary font-medium">
          Open to SDE-1 roles
        </p>
      </div> */}

      {/* Location */}
      {/* <div className="flex items-center gap-2 text-text-secondary">
        <MapPin size={12} strokeWidth={1.5} className="flex-shrink-0" />
        <p className="font-body text-xs">
          Pune · Open to Bangalore, Mumbai, Remote
        </p>
      </div> */}

      {/* Stack preference */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {['Node.js', 'TypeScript', 'FastAPI', 'Redis'].map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* CTA */}
    <button
      onClick={() => {
        const el = document.getElementById('contact');
        if (el) window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 64,
          behavior: 'smooth',
        });
      }}
      className="btn-primary justify-center w-full"
    >
      Get in touch
    </button>
  </motion.div>
);

// ─── Main export ──────────────────────────────────────────────

const ExperienceSection = () => (
  <div>
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="mb-10"
    >
      <p className="section-label mb-2">04 / experience</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
        Education & Achievements
      </h2>
    </motion.div>

    {/* Legend */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex items-center gap-5 mb-8 flex-wrap"
    >
      {Object.entries(TYPE_CONFIG).map(([key, cfg]) => (
        <div key={key} className="flex items-center gap-1.5">
          <div className={`w-2 h-2 rounded-full ${cfg.dotClass.split(' ')[0]}`} />
          <span className="font-mono text-[10px] text-text-tertiary tracking-wide uppercase">
            {cfg.label}
          </span>
        </div>
      ))}
    </motion.div>

    {/* Two-column layout */}
    <div className="grid grid-cols-12 gap-6 items-start">

      {/* Left — timeline (7/12) */}
      <div className="col-span-12 lg:col-span-7">
        {TIMELINE.map((item, i) => (
          <TimelineEntry
            key={`${item.type}-${item.title}`}
            item={item}
            delay={i * 0.08}
            isLast={i === TIMELINE.length - 1}
          />
        ))}
      </div>

      {/* Right — sticky snapshot card (5/12) */}
      <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24">
        <SnapshotCard />
      </div>

    </div>
  </div>
);

export default ExperienceSection;