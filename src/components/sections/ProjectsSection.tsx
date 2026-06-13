import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { trackProjectClick } from '@/lib/analytics';

// ─── Types ────────────────────────────────────────────────────

interface Project {
  title:       string;
  description: string;
  tags:        string[];
  image:       string;
  github?:     string;
  demo?:       string;
  duration:    string;
  learnings?:  string[];
  featured?:   boolean;
}

// ─── Data ─────────────────────────────────────────────────────
// Swap PROJECTS[0] for IdeaVault once ready.
// Mark the flagship with featured: true — it gets the large card slot.

const PROJECTS: Project[] = [
  {
    featured: true,
    title:    'IdeaVault',
    description:
      'Distributed AI productivity OS — captures ideas across life domains, enriches them asynchronously via BullMQ cutting POST latency from 3–4 s to 80 ms, surfaces semantic connections with pgvector, and applies SM-2 spaced repetition to learning goals. Instrumented with OpenTelemetry distributed tracing across Node.js and Python services.',
    image:    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    duration: 'Feb 2026 – May 2026',
    tags:     ['Next.js', 'Fastify', 'FastAPI', 'PostgreSQL', 'Redis', 'BullMQ', 'Socket.io', 'pgvector', 'Docker', 'OpenTelemetry'],
    github:   'https://github.com/piyush-ghanghav/idea-vault',
    learnings: [
      'Async job queue design with BullMQ — retry with exponential backoff, Dead Letter Queue, idempotent consumers',
      'Cache-aside pattern with Redis — invalidation strategy and what not to cache',
      'pgvector semantic similarity search — cosine similarity, ivfflat index, 0.78 threshold tuning',
      'SM-2 spaced repetition algorithm — easiness factor, interval progression, calm queue via cron',
      'OpenTelemetry distributed tracing — W3C traceparent propagation from Fastify to Python, Jaeger export',
      'Redis pub/sub for cross-service event fanout — Socket.io real-time enrichment updates',
      'Token bucket rate limiting in Redis — INCR + TTL, max 10 enrichments per user per hour',
      'Prompt injection guard — sanitizing user input before AI context injection',
      'Graceful degradation — core idea saving works independently of OpenAI availability',
    ],
  },
  {
    title:    'AI Mock Interview Prep',
    description:
      'AI-driven platform for interview preparation with resume enhancement and mock interviews. Provides personalised feedback based on job descriptions and industry standards.',
    image:    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    duration: 'Sept 2024 – Dec 2024',
    tags:     ['GenAI', 'Next.js', 'PostgreSQL', 'Tailwind', 'Clerk', 'Drizzle ORM', 'Vercel'],
    github:   'https://github.com/piyush-ghanghav/Interview-Assistant',
    demo:     'https://mock-interview-assistant.vercel.app/',
    learnings: [
      'Server-side rendering with Next.js and its impact on SEO',
      'Gemini AI integration for mock interview generation',
      'Type-safe database operations using Drizzle ORM with PostgreSQL',
      'Real-time AI feedback systems and prompt engineering techniques',
      'Authentication and authorisation using Clerk for secure user management',
      'Data visualisation for progress tracking and analytics',
    ],
  },
  {
    title:    'Event Management System',
    description:
      'Full-stack web app for managing events with real-time notifications, scheduling, and user registrations powered by Socket.IO.',
    image:    'Event-Master.png',
    duration: 'Jul 2024 – Sept 2024',
    tags:     ['React.js', 'Node.js', 'MongoDB', 'Socket.IO'],
    github:   'https://github.com/piyush-ghanghav/event-management-frontend',
    demo:     'https://event-master-webapp.vercel.app/',
    learnings: [
      'Real-time communication using Socket.IO for instant notifications',
      'State management in React for complex event scheduling interfaces',
      'RESTful API design with Node.js and Express for CRUD operations',
      'MongoDB integration for efficient data storage and retrieval',
    ],
  },
  {
    title:    'Social Media Sentiment Analysis',
    description:
      'ML sentiment analysis using SVM, Decision Tree, and Random Forest with data preprocessing and visual feedback. Research published at IEEE ICDT 2025.',
    image:    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    duration: 'Jan 2024 – Mar 2024',
    tags:     ['Python', 'Scikit-learn', 'NLP', 'Data Viz', 'IEEE'],
    github:   'https://github.com/piyush-ghanghav/social-media-sentiment-analysis',
    learnings: [
      'NLP techniques for text preprocessing and vectorisation',
      'ML model comparison: SVM, Decision Tree, Random Forest',
      'Feature engineering and TF-IDF / Bag of Words',
      'Model evaluation metrics and cross-validation',
      'Published findings at IEEE ICDT 2025',
    ],
  },
  {
    title:    'Parallel AES Encryption',
    description:
      'High-performance AES encryption in C++ using OpenMP for parallel processing, with significant throughput improvement over the sequential baseline.',
    image:    'parallel_programming.png',
    duration: 'Oct 2024 – Dec 2024',
    tags:     ['C++', 'OpenMP', 'Cryptography', 'Systems'],
    github:   'https://github.com/piyush-ghanghav/Parallel-AES-Implementation',
    learnings: [
      'AES algorithm implementation from scratch in C++',
      'Parallel programming with OpenMP for performance optimisation',
      'Memory management and low-level optimisations',
      'Benchmarking and profiling parallel algorithms',
    ],
  },
];
    

// ─── Animation helpers ────────────────────────────────────────

const cardAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-60px' },
  transition:  { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
});

// ─── Tag strip (shared) ───────────────────────────────────────

const TagStrip = ({ tags, max = 4 }: { tags: string[]; max?: number }) => (
  <div className="flex flex-wrap gap-1.5">
    {tags.slice(0, max).map(tag => (
      <span key={tag} className="skill-tag">{tag}</span>
    ))}
    {tags.length > max && (
      <span className="skill-tag text-text-tertiary">+{tags.length - max}</span>
    )}
  </div>
);

// ─── Link buttons (shared) ────────────────────────────────────

const ProjectLinks = ({
  github, demo, size = 'sm',
}: {
  github?: string;
  demo?:   string;
  size?:   'sm' | 'xs';
}) => {
  const base = size === 'sm'
    ? 'flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-200'
    : 'flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium transition-colors duration-200';

  return (
    <div className="flex items-center gap-2">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} bg-surface-elevated hover:bg-surface-subtle
                      text-text-primary border border-border hover:border-accent/30`}
          onClick={e => e.stopPropagation()}
        >
          <Github size={size === 'sm' ? 14 : 12} strokeWidth={1.5} />
          Code
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} btn-primary`}
          onClick={e => e.stopPropagation()}
        >
          <ExternalLink size={size === 'sm' ? 14 : 12} strokeWidth={1.5} />
          Live Demo
        </a>
      )}
    </div>
  );
};

// ─── Featured card (col-span-8) ───────────────────────────────

const FeaturedCard = ({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) => (
  <motion.div
    {...cardAnim(0)}
    className="card col-span-12 lg:col-span-8 overflow-hidden cursor-pointer group"
    onClick={onClick}
  >
    {/* Image */}
    <div className="relative h-52 overflow-hidden bg-surface-elevated">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
        onError={e => {
          (e.currentTarget as HTMLImageElement).src =
            'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80';
        }}
      />
      {/* Featured badge */}
      <div className="absolute top-4 left-4">
        <span className="font-mono text-[10px] tracking-widest uppercase
                         bg-accent text-white px-2.5 py-1 rounded-sm">
          Featured
        </span>
      </div>
      {/* Hover overlay hint */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-1 font-mono text-[10px] text-white tracking-wide">
          View details <ArrowUpRight size={10} />
        </div>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-bold text-xl text-text-primary leading-tight">
            {project.title}
          </h3>
          <p className="font-mono text-[10px] text-text-tertiary mt-1">
            {project.duration}
          </p>
        </div>
      </div>

      <p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
        {project.description}
      </p>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <TagStrip tags={project.tags} max={5} />
        <ProjectLinks github={project.github} demo={project.demo} />
      </div>
    </div>
  </motion.div>
);

// ─── Small card (col-span-4) ──────────────────────────────────

const SmallCard = ({
  project,
  delay,
  onClick,
}: {
  project: Project;
  delay:   number;
  onClick: () => void;
}) => (
  <motion.div
    {...cardAnim(delay)}
    className="card col-span-12 sm:col-span-6 lg:col-span-4 cursor-pointer group
               flex flex-col overflow-hidden lg:h-full"
    onClick={onClick}
  >
    {/* Top accent bar */}
    <div className="h-1 w-full bg-gradient-to-r from-accent/60 to-accent/20
                    group-hover:from-accent group-hover:to-accent/40
                    transition-colors duration-300 flex-shrink-0" />

    <div className="p-5 flex flex-col justify-between gap-3 flex-1">
      {/* Title row */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display font-semibold text-base text-text-primary leading-snug">
          {project.title}
        </h3>
        <ArrowUpRight
          size={14}
          strokeWidth={1.5}
          className="text-text-tertiary group-hover:text-accent flex-shrink-0 mt-0.5
                     transition-colors duration-200"
        />
      </div>

      {/* Duration */}
      <p className="font-mono text-[10px] text-text-tertiary">
        {project.duration}
      </p>

      {/* Description */}
      <p className="text-xs text-text-secondary leading-relaxed line-clamp-3 flex-1">
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex flex-col gap-2.5 pt-1">
        <TagStrip tags={project.tags} max={3} />
        <ProjectLinks github={project.github} demo={project.demo} size="xs" />
      </div>
    </div>
  </motion.div>
);

// ─── Project detail modal ─────────────────────────────────────

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm
                 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1,    y: 0  }}
        exit={{    opacity: 0, scale: 0.96, y: 16  }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="bg-surface border border-border rounded-xl
                   w-full max-w-2xl max-h-[90vh] overflow-hidden
                   flex flex-col shadow-elevated"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        {project.image && (
          <div className="h-44 flex-shrink-0 overflow-hidden bg-surface-elevated">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={e => {
                (e.currentTarget as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80';
              }}
            />
          </div>
        )}

        {/* Content — scrollable */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display font-bold text-xl text-text-primary">
                {project.title}
              </h2>
              <p className="font-mono text-xs text-text-tertiary mt-1">
                {project.duration}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-text-tertiary hover:text-text-primary
                         hover:bg-surface-elevated transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm text-text-secondary leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div>
            <p className="section-label mb-2">Tech Stack</p>
            <TagStrip tags={project.tags} max={project.tags.length} />
          </div>

          {/* Learnings */}
          {project.learnings && project.learnings.length > 0 && (
            <div>
              <p className="section-label mb-3">Key Learnings</p>
              <ul className="space-y-2">
                {project.learnings.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={13}
                      strokeWidth={1.5}
                      className="text-accent flex-shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Links */}
          <div className="pt-1">
            <ProjectLinks github={project.github} demo={project.demo} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// ─── Main export ──────────────────────────────────────────────

const ProjectsSection = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const featured = PROJECTS.find(p => p.featured) ?? PROJECTS[0];
  const rest      = PROJECTS.filter(p => !p.featured).slice(0, 4);

  return (
    <div>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="mb-10"
      >
        <p className="section-label mb-2">03 / projects</p>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
          Things I've Built
        </h2>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Row 1: Featured (8) + first small (4) */}
        <FeaturedCard project={featured} onClick={() => {
          trackProjectClick(featured.title);
          setSelected(featured);
        }} />
        {rest[0] && (
          <SmallCard project={rest[0]} delay={0.1} onClick={() => {
            trackProjectClick(rest[0].title);
            setSelected(rest[0]);
          }} />
        )}

        {/* Row 2: remaining small cards */}
        {rest.slice(1).map((project, i) => (
          <SmallCard
            key={project.title}
            project={project}
            delay={0.15 + i * 0.08}
            onClick={() => {
              trackProjectClick(project.title);
              setSelected(project);
            }}
          />
        ))}
      </div>

      {/* View all */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex justify-center mt-10"
      >
        <a
          href="https://github.com/piyush-ghanghav"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          <Github size={15} strokeWidth={1.5} />
          View all on GitHub
        </a>
      </motion.div>

      {/* Detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default ProjectsSection;