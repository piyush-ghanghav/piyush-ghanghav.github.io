import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, GraduationCap, ChevronDown, ChevronUp,
  FileText,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────

interface Publication {
  title:    string;
  venue:    string;
  date:     string;
  doi:      string | null;
  status:   'published' | 'in-press' | 'subscription';
  keywords: string[];
}

interface Certificate {
  title:        string;
  organization: string;
  date:         string;
  grade:        string;
  skills:       string[];
  link:         string;
  certImage:    string;
  description:  string;
  instructor:   string;
  duration:     string | null;
}

// ─── Data ─────────────────────────────────────────────────────

const PUBLICATIONS: Publication[] = [
  {
    title:    'Social Media Sentiment Analysis Using Machine Learning',
    venue:    '3rd International Conference on Disruptive Technologies (ICDT 2025) — IEEE',
    date:     'March 2025',
    doi:      'https://doi.org/10.1109/ICDT63985.2025.10986650',
    status:   'published',
    keywords: [/*'Machine Learning'*/'Sentiment Analysis', 'NLP', 'Classical ML',/* 'SVM', 'Random Forest'*/],
  },
  {
    title:    'AI Interview Mocker',
    venue:    '2nd International Conference on Multi-Strategy Learning Environment (ICMSLE 2025) — Springer, Graphic Era Hill University',
    date:     'February 2025',
    doi:      'https://doi.org/10.1007/978-981-96-7059-8_36',
    status:   'published',
    keywords: ['Artificial Intelligence', 'LLMs', 'Ed-Tech', 'Mock Interviews'],
  },
  {
    title:    'Advancing Code Generation: Insights into Large Language Models',
    venue:    'Journal of Cryptography and Network Security, Design and Codes — Vol. 1, Issue 3',
    date:     'December 2024',
    doi:      null,
    status:   'subscription',
    keywords: ['Large Language Models', 'Code Generation', 'Transformers', /*'PLCs'*/],
  },
];

// Featured 6 — shown by default
// Rest shown when expanded
const CERTIFICATES: Certificate[] = [
  {
    title:        'Business Intelligence & Analytics',
    organization: 'NPTEL — IIT Madras',
    date:         'Jan – Apr 2024',
    grade:        'Elite',
    skills:       ['Data Analysis', 'Data Mining', 'Text Mining'],
    link:         'https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs65/Course/NPTEL24CS65S95990001130628650.pdf',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064805/02_IIOT_gyakon.jpg',
    description:  'Advanced business intelligence concepts, data mining algorithms, and actionable insights from complex datasets.',
    instructor:   'Prof. Devendra Jalihal',
    duration:     '12 weeks',
  },
  {
    title:        'Introduction to Industry 4.0 and IIoT',
    organization: 'NPTEL — IIT Kharagpur',
    date:         'Jul – Oct 2024',
    grade:        'Elite',
    skills:       ['IIoT', 'Automation', 'Smart Manufacturing'],
    link:         'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs95/Course/NPTEL24CS95S36720002804195000.pdf',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064805/02_IIOT_gyakon.jpg',
    description:  'Concepts of Industry 4.0 and the Industrial Internet of Things, focusing on automation and smart manufacturing.',
    instructor:   'Prof. Haimanti Banerji',
    duration:     '12 weeks',
  },
  {
    title:        'Project Management',
    organization: 'NPTEL — IIT Kanpur',
    date:         'Jul – Sep 2024',
    grade:        'Elite',
    skills:       ['Leadership', 'Risk Management', 'Scheduling', 'Decision Analysis'],
    link:         'https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/110/noc24-mg75/Course/NPTEL24MG75S43940015102717491.pdf',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/03_Project_Management_no32it.jpg',
    description:  'Project management fundamentals — leadership, scheduling, risk management, and effective decision-making.',
    instructor:   'Prof. Satyaki Roy',
    duration:     '8 weeks',
  },
  {
    title:        'Linear Algebra for Machine Learning and Data Science',
    organization: 'DeepLearning.AI — Coursera',
    date:         'Dec 2023',
    grade:        'Verified Certificate',
    skills:       ['Linear Algebra', 'Machine Learning', 'Mathematics', 'Data Science'],
    link:         'https://coursera.org/verify/RJRG9VYAKGE9',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064765/05_Linear_Algebra_gjv6za.jpg',
    description:  'Advanced linear algebra essential for ML and data science — matrix operations, dimensionality reduction.',
    instructor:   'Dr. Andrew Ng',
    duration:     '4 weeks',
  },
  {
    title:        'AWS Academy Cloud Foundations',
    organization: 'AWS Academy',
    date:         'Nov 2023',
    grade:        'Certificate of Completion',
    skills:       ['Cloud Computing', 'AWS', 'Cloud Foundations'],
    link:         'https://www.credly.com/go/f3PqSvS0',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064764/07_AWS_Academy_Cloud_Foundations_o13t0b.jpg',
    description:  'Foundational AWS cloud services, core concepts, and cloud architecture principles.',
    instructor:   'AWS Academy',
    duration:     '20 hours',
  },
  {
    title:        'Introduction to Cloud Computing',
    organization: 'IBM — Coursera',
    date:         'Nov 2023',
    grade:        'Verified Certificate',
    skills:       ['Cloud Computing', 'Hybrid Multicloud', 'DevOps', 'IaaS PaaS SaaS'],
    link:         'https://coursera.org/verify/BUGD3BF6RJ72',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064757/04_Coursera_Cloud_Computing_rfakpx.jpg',
    description:  'Core cloud computing concepts, hybrid multicloud strategies, and DevOps practices.',
    instructor:   'IBM Cloud Team',
    duration:     '6 weeks',
  },
  // ── Hidden by default (shown on expand) ───────────────────
  {
    title:        'Python — Intro to Data Science and ML A-Z',
    organization: 'Udemy',
    date:         'Apr 2024',
    grade:        'Certificate of Completion',
    skills:       ['Python', 'Data Science', 'Machine Learning'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064762/06_Python_ML_DS_mc9zro.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064762/06_Python_ML_DS_mc9zro.jpg',
    description:  'Introduction to Data Science and Machine Learning using Python.',
    instructor:   'Yassin Marco',
    duration:     '7.5 hours',
  },
  {
    title:        'Building Databases with Redis',
    organization: 'Infosys Springboard',
    date:         'May 2023',
    grade:        'Verified Certificate',
    skills:       ['Redis', 'Database Management', 'Caching'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/08_Building_database_with_REDIS_tfm6uw.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/08_Building_database_with_REDIS_tfm6uw.jpg',
    description:  'Fundamental and advanced Redis concepts for database management and optimisation.',
    instructor:   'Infosys Training Team',
    duration:     'Self-paced',
  },
  {
    title:        'Software Engineering and ALM',
    organization: 'Infosys Springboard',
    date:         'May 2023',
    grade:        'Verified Certificate',
    skills:       ['Software Engineering', 'ALM', 'Agile'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064778/11_Software_Engineering_heivtb.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064778/11_Software_Engineering_heivtb.jpg',
    description:  'Software engineering principles and application lifecycle management.',
    instructor:   'Infosys Training Team',
    duration:     'Self-paced',
  },
  {
    title:        'Linux Shell Programming for Beginners',
    organization: 'Infosys Springboard',
    date:         'May 2023',
    grade:        'Course Completion Certificate',
    skills:       ['Linux', 'Shell Scripting'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/10_Linux_shell_Programming_w2uimp.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/10_Linux_shell_Programming_w2uimp.jpg',
    description:  'Linux shell scripting fundamentals for beginners.',
    instructor:   'Infosys Training Team',
    duration:     'Self-paced',
  },
  {
    title:        'Entrepreneurship Course',
    organization: 'Infosys Springboard',
    date:         'Apr 2024',
    grade:        'Verified Certificate',
    skills:       ['Entrepreneurship', 'Business Strategy', 'Leadership'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/09_EDP_fbc4mq.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/09_EDP_fbc4mq.jpg',
    description:  'Business strategy, startup management, and entrepreneurial leadership.',
    instructor:   'Infosys Training Team',
    duration:     'Self-paced',
  },
  {
    title:        'Career Edge — Young Professional',
    organization: 'TCS iON',
    date:         'Sep 2023',
    grade:        'Certificate of Achievement',
    skills:       ['Professional Skills', 'Communication'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/14_TCS_iON_g0nlfq.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/14_TCS_iON_g0nlfq.jpg',
    description:  'Professional skills programme for early-career professionals.',
    instructor:   'Mehul Mehta',
    duration:     '2 weeks',
  },
  {
    title:        'C++ And PHP Complete Course',
    organization: 'Udemy',
    date:         'Apr 2024',
    grade:        'Certificate of Completion',
    skills:       ['C++', 'PHP', 'Programming'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064780/12_C__And_PHP_fwbdjz.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064780/12_C__And_PHP_fwbdjz.jpg',
    description:  'C++ and PHP programming fundamentals.',
    instructor:   'Krish Valley',
    duration:     '4.5 hours',
  },
  {
    title:        'JavaScript for Beginners',
    organization: 'Udemy',
    date:         'Apr 2024',
    grade:        'Certificate of Completion',
    skills:       ['JavaScript', 'Programming'],
    link:         'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/13_JavaScript_for_Beginners_usprta.jpg',
    certImage:    'https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/13_JavaScript_for_Beginners_usprta.jpg',
    description:  'Comprehensive introduction to JavaScript programming.',
    instructor:   'Yassin Marco',
    duration:     '4 hours',
  },
];

const FEATURED_COUNT = 6;

// ─── Animation ────────────────────────────────────────────────

const cardAnim = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-40px' },
  transition:  { duration: 0.45, ease: [0.4, 0, 0.2, 1], delay },
});

// ─── Status badge config ──────────────────────────────────────

const STATUS_CONFIG = {
  published:    { label: 'Published',   classes: 'bg-accent-muted text-accent' },
  'in-press':   { label: 'In Press',    classes: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
  subscription: { label: 'Journal',     classes: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300' },
};

// ─── Publication card ─────────────────────────────────────────

const PublicationCard = ({
  pub,
  delay,
}: {
  pub:   Publication;
  delay: number;
}) => {
  const status = STATUS_CONFIG[pub.status];

  return (
    <motion.div {...cardAnim(delay)} className="card p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className={`font-mono text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-sm ${status.classes}`}>
              {status.label}
            </span>
            <span className="font-mono text-[10px] text-text-tertiary">{pub.date}</span>
          </div>
          <h3 className="font-display font-semibold text-sm text-text-primary leading-snug">
            {pub.title}
          </h3>
        </div>
        <FileText size={16} strokeWidth={1.5} className="text-text-tertiary flex-shrink-0 mt-0.5" />
      </div>

      {/* Venue */}
      <p className="font-body text-xs text-text-secondary leading-relaxed">
        {pub.venue}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap gap-1.5">
        {pub.keywords.map(kw => (
          <span key={kw} className="skill-tag">{kw}</span>
        ))}
      </div>

      {/* Link */}
      {pub.doi && (
        <a
          href={pub.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-accent hover:text-accent-hover
                     transition-colors w-fit font-mono"
        >
          <ExternalLink size={11} strokeWidth={1.5} />
          View Publication
        </a>
      )}
      {!pub.doi && (
        <p className="font-mono text-[10px] text-text-tertiary italic">
          {pub.status === 'in-press' ? 'DOI pending — to be published by Springer' : 'Available via journal subscription'}
        </p>
      )}
    </motion.div>
  );
};

// ─── Certificate card ─────────────────────────────────────────

const CertCard = ({
  cert,
  delay,
}: {
  cert:  Certificate;
  delay: number;
}) => {
  const isElite = cert.grade === 'Elite';

  return (
    <motion.div {...cardAnim(delay)} className="card p-5 flex flex-col gap-3 group">
      {/* Top accent */}
      <div className={`
        h-0.5 w-full rounded-full
        ${isElite
          ? 'bg-gradient-to-r from-accent to-accent/30'
          : 'bg-gradient-to-r from-border to-transparent'
        }
      `} />

      {/* Icon + title */}
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-md bg-surface-elevated border border-border
                        flex items-center justify-center flex-shrink-0
                        group-hover:border-accent/30 transition-colors">
          <GraduationCap size={14} strokeWidth={1.5} className="text-text-secondary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-sm text-text-primary leading-snug line-clamp-2">
            {cert.title}
          </h3>
          <p className="font-body text-xs text-accent mt-0.5">{cert.organization}</p>
        </div>
      </div>

      {/* Meta row */}
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] text-text-tertiary">{cert.date}</span>
        <span className={`
          font-mono text-[9px] tracking-wide uppercase px-2 py-0.5 rounded-sm
          ${isElite
            ? 'bg-accent-muted text-accent'
            : 'bg-surface-elevated text-text-tertiary border border-border'
          }
        `}>
          {cert.grade}
        </span>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5">
        {cert.skills.slice(0, 3).map(s => (
          <span key={s} className="skill-tag">{s}</span>
        ))}
        {cert.skills.length > 3 && (
          <span className="skill-tag text-text-tertiary">+{cert.skills.length - 3}</span>
        )}
      </div>

      {/* Verify link */}
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-text-tertiary
                     hover:text-accent transition-colors w-fit font-mono mt-auto"
        >
          <ExternalLink size={11} strokeWidth={1.5} />
          Verify
        </a>
      )}
    </motion.div>
  );
};

// ─── Main export ──────────────────────────────────────────────

const CertificationsSection = () => {
  const [expanded, setExpanded] = useState(false);

  const visibleCerts = expanded ? CERTIFICATES : CERTIFICATES.slice(0, FEATURED_COUNT);
  const hiddenCount  = CERTIFICATES.length - FEATURED_COUNT;

  return (
    <div className="flex flex-col gap-16">

      {/* ── Publications ──────────────────────────────────── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <p className="section-label mb-2">05a / research</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Publications
          </h2>
          <p className="font-body text-sm text-text-secondary mt-2">
            Peer-reviewed research across machine learning, AI, and software engineering.
          </p>
        </motion.div>

        {/* Two-column layout: publications left, snapshot right */}
        <div className="grid grid-cols-12 gap-6 items-start">

          {/* Left — publication cards (7/12) */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-4">
            {PUBLICATIONS.map((pub, i) => (
              <PublicationCard key={pub.title} pub={pub} delay={i * 0.08} />
            ))}
          </div>

          {/* Right — sticky research snapshot (5/12) */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="card p-6 flex flex-col gap-5"
            >
              {/* Header */}
              <div>
                <p className="section-label mb-1">Research Snapshot</p>
                <p className="font-body text-xs text-text-tertiary">
                  Across ML, AI, and software engineering
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: PUBLICATIONS.length, label: 'Papers' },
                  { value: '2', label: 'Peer-reviewed' },
                  { value: PUBLICATIONS.filter(p => p.doi !== null).length, label: 'DOI Live' },
                ].map(s => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center justify-center p-3
                               rounded-lg bg-surface-elevated border border-border text-center"
                  >
                    <p className="font-display font-bold text-xl text-text-primary leading-none">
                      {s.value}
                    </p>
                    <p className="font-mono text-[10px] text-text-tertiary mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="w-full h-px bg-border" />

              {/* Venues */}
              <div>
                <p className="section-label mb-3">Published in</p>
                <div className="flex flex-col gap-2">
                  {[
                    { venue: 'IEEE',     detail: 'ICDT 2025 · DOI live',       status: 'published'    },
                    { venue: 'Springer', detail: 'ICMSLE 2025 · In press',      status: 'in-press'     },
                    { venue: 'Journal',  detail: 'Cryptography & Network Sec.', status: 'subscription' },
                  ].map(v => (
                    <div key={v.venue} className="flex items-center gap-3">
                      <span className={`
                        font-mono text-[9px] tracking-wider uppercase px-2 py-0.5
                        rounded-sm flex-shrink-0 w-16 text-center
                        ${v.status === 'published'
                          ? 'bg-accent-muted text-accent'
                          : v.status === 'in-press'
                            ? 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-300'
                            : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'
                        }
                      `}>
                        {v.venue}
                      </span>
                      <p className="font-body text-xs text-text-secondary">{v.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-border" />

              {/* Research keywords */}
              <div>
                <p className="section-label mb-3">Research areas</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Machine Learning', 'NLP', 'Sentiment Analysis',
                    'LLMs', 'Code Generation', 'Ed-Tech', 'Transformers',
                  ].map(kw => (
                    <span key={kw} className="skill-tag">{kw}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Certifications ────────────────────────────────── */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="mb-8"
        >
          <p className="section-label mb-2">05b / certifications</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-text-primary">
            Certifications
          </h2>
          <p className="font-body text-sm text-text-secondary mt-2">
            {CERTIFICATES.length} certifications across cloud, ML, and software engineering.
          </p>
        </motion.div>

        {/* Cert grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {visibleCerts.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} delay={i * 0.05} />
            ))}
          </AnimatePresence>
        </div>

        {/* Show more / less toggle */}
        {hiddenCount > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8"
          >
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="btn-ghost flex items-center gap-2"
            >
              {expanded ? (
                <>
                  <ChevronUp size={15} strokeWidth={1.5} />
                  Show less
                </>
              ) : (
                <>
                  <ChevronDown size={15} strokeWidth={1.5} />
                  Show {hiddenCount} more
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CertificationsSection;