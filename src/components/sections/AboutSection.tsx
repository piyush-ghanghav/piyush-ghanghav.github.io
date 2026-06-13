import { motion } from 'framer-motion';
import {
  MapPin, BookOpen, ExternalLink,
  Code2, Database, Server, Wrench, Brain, Globe,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────

/** Standard card entrance — triggered on scroll into view */
const cardAnim = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
});

// ─── Data ─────────────────────────────────────────────────────

const STATS = [
  { value: '3', label: 'Papers', sub: 'IEEE · Springer' },
  { value: '9+', label: 'Projects Built', sub: '2 in production' },
  { value: '500+', label: 'LeetCode Solved', sub: '500+ day streak' },
  { value: '1580', label: 'Rating ', sub: 'LeetCode Contest ' },
];

const CURRENTLY = [
  {
    icon: <BookOpen size={14} strokeWidth={1.5} />,
    label: 'Learning',
    value: 'System Design & DSA',
  },
  // {
  //   icon: <Search size={14} strokeWidth={1.5} />,
  //   label: 'Seeking',
  //   value: 'SDE-1 · Backend / Full-stack',
  // },
  {
    icon: <MapPin size={14} strokeWidth={1.5} />,
    label: 'Based in',
    value: 'Pune, India',
  },
];

const PERSONALITY = [
  { emoji: '♟️', text: '1500+ ELO · Play me', href: 'https://www.chess.com/member/therooooksgambit' },
  { emoji: '⚽', text: 'FCB · Més que un club', href: null },
  { emoji: '🌱', text: 'Gardening · Hiking', href: null },
  { emoji: '🏟️', text: 'Dream: Camp Nou', href: null },
];

const SKILLS = [
  {
    icon: <Code2 size={12} strokeWidth={1.5} />,
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go'],
  },
  {
    icon: <Globe size={12} strokeWidth={1.5} />,
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5'],
  },
  {
    icon: <Server size={12} strokeWidth={1.5} />,
    category: 'Backend',
    items: ['Node.js', 'Fastify', 'Express.js', 'FastAPI', 'Spring Boot','BullMQ',],
  },
  {
    icon: <Database size={12} strokeWidth={1.5} />,
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'PGVector'],
  },
  {
    icon: <Wrench size={12} strokeWidth={1.5} />,
    category: 'DevOps & Cloud',
    items: ['Docker', 'AWS', 'Git', 'Linux', 'OpenTelemetry'],  
  },
  {
    icon: <Brain size={12} strokeWidth={1.5} />,
    category: 'ML & AI',
    items: ['TensorFlow', 'Scikit-learn', 'NLP'],
  },
];

// ─── Sub-components ───────────────────────────────────────────

/** Card 1 — Bio (col-span-8) */
const BioCard = () => (
  <motion.div {...cardAnim(0)} className="card p-7 col-span-12 lg:col-span-8 flex flex-col gap-5">

    {/* Header row */}
    <div className="flex items-start gap-4">
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-accent
                        hover:border-accent-hover transition-colors duration-300">
          <img
            src="/pfp1.png"
            alt="Piyush Ghanghav"
            className="w-full h-full object-cover object-top"
          />
        </div>
        {/* Open-to-work pulse dot */}
        <span
          className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5"
          title="Open to SDE-1 roles"
        >
          {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" /> */}
          {/* <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent border-2 border-surface" /> */}
        </span>
      </div>

      {/* Name + status */}
      <div className="flex-1 min-w-0">
        <h3 className="font-display font-bold text-lg text-text-primary leading-tight">
          Piyush Ghanghav
        </h3>
        <p className="font-mono text-xs text-accent mt-0.5">
          Computer Engineering · AIML Honours · 2025
        </p>
        {/* Open to work pill */}
        {/* <span className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1
                         bg-accent-muted text-accent rounded-sm
                         font-mono text-[10px] tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Open to SDE-1 roles
        </span> */}
      </div>
    </div>

    {/* Bio text */}
    <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
      <p>
        I specialise in distributed backend systems and full-stack development.
        My flagship project{' '}
        <span className="text-text-primary font-medium">IdeaVault</span>
        {' '}is a distributed AI productivity system built with Node.js, Fastify,
        FastAPI, PostgreSQL, Redis, BullMQ, and Docker — moving AI enrichment off
        the request path using async job queues cut POST latency from{' '}
        <span className="font-mono text-accent">3–4 s → 80 ms</span>.
      </p>
      <p>
        I published ML research at{' '}
        <span className="text-text-primary font-medium">IEEE ICDT 2025</span>
        {' '}on Social Media Sentiment Analysis
        {/* have solved{' '} */}
        {/* <span className="text-text-primary font-medium">500+ LeetCode problems</span>, */}
        {' '} and hold AWS and IBM cloud certifications.
        Currently deepening system design knowledge while applying to SDE-1 roles.
      </p>
    </div>

    {/* Interest tags */}
    <div className="flex flex-wrap gap-2 pt-1">
      {[
        'Distributed Systems',
        'Backend Engineering',
        'Full Stack',
        // 'Machine Learning',
        'System Design',
        'Async Architectures',
        // 'Problem Solving',
      ].map(tag => (
        <span key={tag} className="skill-tag">{tag}</span>
      ))}
    </div>
  </motion.div>
);

/** Card 2 — Stats (col-span-4) */
const StatsCard = () => (
  <motion.div {...cardAnim(0.1)} className="card p-7 col-span-12 lg:col-span-4
  bg-[#065F46] border border-[#065F46]
    dark:bg-surface dark:border-border"
  >
    <p className="section-label mb-5 text-emerald-200 dark:text-accent">By the numbers</p>
    <div className="grid grid-cols-2 gap-4 h-full">
      {STATS.map(stat => (
        <div
          key={stat.label}
          className="flex flex-col justify-center p-3 rounded-lg
           bg-[rgba(23,106,83,1)] border border-white/10
           hover:bg-[#26745E]
            dark:bg-surface-elevated dark:border-border
            dark:hover:border-accent/30
            transition-colors duration-200
          "
        >
          <p className="font-display font-bold text-2xl text-white dark:text-text-primary leading-none">
            {stat.value}
          </p>
          <p className="font-body text-emerald-100 dark:text-text-primary font-medium mt-1.5">
            {stat.label}
          </p>
          <p className="font-mono text-[10px] text-emerald-300 dark:text-text-tertiary mt-0.5">
            {stat.sub}
          </p>
        </div>
      ))}
    </div>
  </motion.div>
);

/** Card 3 — Currently (col-span-4) */
const CurrentlyCard = () => (
  <motion.div {...cardAnim(0.2)} className="card p-7 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col gap-5">

    <div>
      <p className="section-label mb-4">Currently</p>
      <div className="space-y-3">
        {CURRENTLY.map(item => (
          <div key={item.label} className="flex items-start gap-3">
            <span className="mt-0.5 text-accent flex-shrink-0">{item.icon}</span>
            <div>
              <p className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase">
                {item.label}
              </p>
              <p className="font-body text-sm text-text-primary mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Divider */}
    <div className="w-full h-px bg-border" />

    {/* Personality */}
    <div>
      <p className="section-label mb-3">Beyond code</p>
      <div className="space-y-2">
        {PERSONALITY.map(item => (
          <div key={item.text} className="flex items-center gap-2">
            <span className="text-sm">{item.emoji}</span>
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-text-secondary hover:text-accent
                           transition-colors flex items-center gap-1"
              >
                {item.text}
                <ExternalLink size={10} strokeWidth={1.5} />
              </a>
            ) : (
              <p className="font-body text-xs text-text-secondary">{item.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

/** Card 4 — Skills (col-span-8) */
const SkillsCard = () => (
  <motion.div {...cardAnim(0.3)} className="card p-7 col-span-12 md:col-span-6 lg:col-span-8">
    <p className="section-label mb-5">Tech stack</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
      {SKILLS.map(group => (
        <div key={group.category}>
          {/* Category label */}
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="text-text-tertiary">{group.icon}</span>
            <span className="font-mono text-[10px] text-text-tertiary tracking-wider uppercase">
              {group.category}
            </span>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {group.items.map(item => (
              <span key={item} className="skill-tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

// ─── Main export ──────────────────────────────────────────────

const AboutSection = () => (
  <div>
    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="mb-10"
    >
      <p className="section-label mb-2">02 / about</p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
        About Me
      </h2>
    </motion.div>

    {/* Bento grid */}
    <div className="grid grid-cols-12 gap-4">
      {/* Row 1 */}
      <BioCard />
      <StatsCard />

      {/* Row 2 */}
      <CurrentlyCard />
      <SkillsCard />
    </div>
  </div>
);

export default AboutSection;