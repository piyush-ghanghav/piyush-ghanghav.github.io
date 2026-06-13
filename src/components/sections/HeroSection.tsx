import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// ─── Animation Variants ───────────────────────────────────────

/** Name words stagger in with blur-to-sharp — the signature moment */
const nameContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const nameWord = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease: [0.4, 0, 0.2, 1] },
  },
};

/** Generic fade-up for everything else */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1], delay },
  },
});

// ─── Data ─────────────────────────────────────────────────────

const STATS = [
  { value: '3',    label: 'Papers' },
  { value: '9+', label: 'Projects'   },
  { value: '1580',   label: 'LeetCode Rating'    },
];

// ─── Helpers ──────────────────────────────────────────────────

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: 'smooth' });
};

// ─── Component ────────────────────────────────────────────────

const HeroSection = () => {
  const navigate  = useNavigate();
  const [dotClicks, setDotClicks] = useState(0);

  /**
   * Easter egg — 5 clicks on the trailing dot navigates to /logger.
   * Resets automatically after 2 s of inactivity.
   * Preserves the same secret mechanism from the original site.
   */
  useEffect(() => {
    if (dotClicks < 5) return;
    try {
      sessionStorage.setItem('secretKey', 'piyush-secret-key');
      navigate('/logger', { replace: true });
    } catch (_) {console.log('Navigation failed',_);}
    setDotClicks(0);
  }, [dotClicks, navigate]);

  useEffect(() => {
    if (dotClicks === 0) return;
    const t = setTimeout(() => setDotClicks(0), 2000);
    return () => clearTimeout(t);
  }, [dotClicks]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-6 overflow-hidden">

      {/* ── Subtle dot-grid texture (light: 2.5% / dark: 4% opacity) ── */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            'radial-gradient(circle, var(--color-text-primary) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center gap-5 text-center">

        {/* 01 — Role label */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="visible"
        >
          <span className="section-label">
            Programmer Analyst Trainee · Cognizant
          </span>
        </motion.div>

        {/* 02 — Name (signature stagger animation) */}
        <motion.h1
          variants={nameContainer}
          initial="hidden"
          animate="visible"
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl text-text-primary"
          style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}
        >
          <motion.span variants={nameWord} className="inline-block mr-[0.22em]">
            Piyush
          </motion.span>
          <motion.span variants={nameWord} className="inline-block ">
            Ghanghav
          </motion.span>
          {/* Trailing dot — easter egg trigger (5 rapid clicks) */}
          <motion.span
            variants={nameWord}
            className="inline-block text-accent select-none cursor-default"
            onClick={() => setDotClicks(p => p + 1)}
            aria-hidden
          >
            .
          </motion.span>
        </motion.h1>

        {/* 03 — Degree */}
        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className="font-mono text-xs text-accent tracking-[0.1em] uppercase"
        >
          Backend Engineer · Full-Stack Developer
        </motion.p>

        {/* 04 — Bio */}
        <motion.p
          variants={fadeUp(0.75)}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg text-text-secondary max-w-lg leading-relaxed"
        >
         I build distributed systems — async queues, semantic search, real-time pipelines.
        </motion.p>

        {/* 05 — CTAs */}
        <motion.div
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-3 flex-wrap justify-center pt-1"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="btn-primary"
          >
            View Projects
          </button>
          <Link to="/resume" className="btn-ghost">
            <FileText size={15} strokeWidth={1.5} />
            Resume
          </Link>
        </motion.div>

        {/* 06 — Stats */}
        <motion.div
          variants={fadeUp(1.05)}
          initial="hidden"
          animate="visible"
          className="flex items-center pt-3"
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center ">
              <div className="px-6 first:pl-0 last:pr-0 text-center">
                <p className="font-display font-bold text-xl md:text-2xl text-text-primary">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-text-tertiary mt-0.5 tracking-wide">
                  {stat.label}
                </p>
              </div>
              {i < STATS.length - 1 && (
                <div className="mx-3 w-px h-7 bg-border flex-shrink-0" />
              )}
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Scroll indicator ────────────────────────────────────── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        onClick={() => scrollTo('about')}
        className="
          absolute bottom-8 left-1/2 -translate-x-1/2
          flex flex-col items-center gap-1.5
          text-text-tertiary hover:text-accent
          transition-colors duration-200
        "
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={14} strokeWidth={1.5} />
        </motion.div>
      </motion.button>

    </div>
  );
};

export default HeroSection;