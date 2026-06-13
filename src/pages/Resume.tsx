import { Download, Mail, Globe, Linkedin, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackResumeView } from '@/lib/analytics';
import { useEffect } from 'react';

// ─── Print handler ─────────────────────────────────────────────
const handlePrint = () => {
  const el = document.getElementById('resume-content');
  if (!el) return;

  const win = window.open('', '_blank');
  if (!win) return;

  win.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Piyush Ghanghav — Resume</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Arial', sans-serif;
            font-size: 11px;
            line-height: 1.5;
            color: #111;
            background: white;
            padding: 0.5in;
          }
          .resume { max-width: 8.5in; margin: 0 auto; }

          /* Header */
          .r-header { text-align: center; margin-bottom: 14px; }
          .r-name { font-size: 22px; font-weight: 700; letter-spacing: -0.3px; margin-bottom: 6px; }
          .r-contacts { display: flex; justify-content: center; flex-wrap: wrap; gap: 10px 18px; font-size: 10px; color: #444; }
          .r-contacts a { color: #444; text-decoration: none; }

          /* Section */
          .r-section { margin-bottom: 14px; }
          .r-section-title {
            font-size: 11px; font-weight: 700; text-transform: uppercase;
            letter-spacing: 0.08em; border-bottom: 1.5px solid #111;
            padding-bottom: 2px; margin-bottom: 8px;
          }

          /* Entry */
          .r-entry { margin-bottom: 10px; }
          .r-entry-header { display: flex; justify-content: space-between; align-items: flex-start; }
          .r-entry-title { font-weight: 700; font-size: 11px; }
          .r-entry-sub { font-size: 10px; color: #555; margin: 1px 0 4px; }
          .r-entry-date { font-size: 10px; color: #555; white-space: nowrap; }

          /* Bullets */
          .r-bullets { padding-left: 14px; }
          .r-bullets li { margin-bottom: 2px; font-size: 10.5px; }

          /* Tech */
          .r-tech-row { margin-bottom: 4px; font-size: 10.5px; }
          .r-tech-row strong { font-weight: 700; }

          /* Publication */
          .r-pub { margin-bottom: 8px; }
          .r-pub-title { font-weight: 700; font-size: 11px; }
          .r-pub-venue { font-style: italic; font-size: 10px; color: #555; margin-top: 1px; }

          @media print {
            body { padding: 0.4in; }
          }
        </style>
      </head>
      <body>
        ${el.innerHTML}
      </body>
    </html>
  `);
  win.document.close();
  win.print();
  win.close();
};

// ─── Component ─────────────────────────────────────────────────

const Resume = () => {
  useEffect(() => {
    trackResumeView();
  }, []);

  return (

    <div className="min-h-screen bg-bg py-8 px-4">

      {/* Top bar */}
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-1.5 font-mono text-xs text-text-secondary
                   hover:text-accent transition-colors"
        >
          <ArrowLeft size={13} strokeWidth={1.5} />
          Back to portfolio
        </Link>

        <button
          onClick={handlePrint}
          className="btn-primary"
        >
          <Download size={14} strokeWidth={1.5} />
          Download PDF
        </button>
      </div>

      {/* Resume card */}
      <div className="max-w-4xl mx-auto bg-white shadow-elevated rounded-lg overflow-hidden">
        <div id="resume-content" className="resume p-10 text-[#111] font-sans">

          {/* ── Header ───────────────────────────────────────── */}
          <div className="r-header text-center mb-6">
            <h1 className="r-name text-2xl font-bold tracking-tight mb-3">
              Piyush Ghanghav
            </h1>
            <div className="r-contacts flex justify-center flex-wrap gap-x-5 gap-y-1
                          text-[11px] text-gray-500">
              <a href="mailto:piyushghanghav@gmail.com"
                className="flex items-center gap-1 hover:text-gray-800">
                <Mail size={11} /> piyushghanghav@gmail.com
              </a>
              <a href="https://piyush-ghanghav.github.io"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-800">
                <Globe size={11} /> piyush-ghanghav.github.io
              </a>
              <a href="https://linkedin.com/in/piyush-ghanghav"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-800">
                <Linkedin size={11} /> linkedin.com/in/piyush-ghanghav
              </a>
              <a href="https://github.com/piyush-ghanghav"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-800">
                <Github size={11} /> github.com/piyush-ghanghav
              </a>
              <span className="flex items-center gap-1">
                LeetCode · 500+ solved · 1580 contest rating
              </span>
            </div>
          </div>

          {/* ── Profile Summary ───────────────────────────────── */}
          <Section title="Profile Summary">
            <p className="text-[11px] leading-relaxed text-gray-700">
              Computer Engineering Graduate (AIML Honours, 2025) from Sanjivani
              College of Engineering specialising in distributed backend systems
              and full-stack development. Published researcher with 3 peer-reviewed
              papers (IEEE, Springer). Incoming Programmer Analyst at Cognizant.
              500+ LeetCode problems solved with a 500+ day streak. Open to SDE-1
              roles in backend and full-stack engineering.
            </p>
          </Section>

          {/* ── Education ─────────────────────────────────────── */}
          <Section title="Education">
            <Entry
              title="B.Tech · Computer Engineering"
              sub="Sanjivani College of Engineering, Kopargaon"
              date="Dec 2021 – Jun 2025"
              bullets={[
                'GPA: 8.4 / 10.0',
                'Coursework: Data Structures, Algorithms, DBMS, OOP, Computer Networks',
              ]}
            />
            <Entry
              title="Honours Degree · Artificial Intelligence & Machine Learning"
              sub="Sanjivani College of Engineering, Kopargaon · Concurrent with B.Tech"
              date="2023 – 2025"
              bullets={[
                'Advanced specialisation completed alongside B.Tech covering ML, deep learning, NLP, and AI systems.',
              ]}
            />
            <Entry
              title="Higher Secondary Certificate (HSC)"
              sub="Mahaveer Jain High School, Lasalgaon"
              date="2020 – 2021"
              bullets={['Percentage: 93.83%']}
            />
            <Entry
              title="Secondary School Certificate (SSC)"
              sub="Loknete Dattaji Patil Vidyalaya, Lasalgaon"
              date="2018 – 2019"
              bullets={['Percentage: 89.20%']}
            />
          </Section>

          {/* ── Experience & Achievements ─────────────────────── */}
          <Section title="Experience & Achievements">
            <Entry
              title="Programmer Analyst Trainee — Incoming"
              sub="Cognizant Technology Solutions"
              date="2025 →"
              bullets={[
                'Letter of Intent received for GENC PAT programme.',
              ]}
            />
            <Entry
              title="Semi-Finalist · Tata Innovation Challenge"
              sub="Tata Consultancy Services, India"
              date="Nov 2022 – Mar 2023"
              bullets={[
                'Identification of Flood Prone Areas in Urban Settlements using an ML-based approach.',
                'Cleared concept solution, abstract shortlisting, technical presentation, and POC demonstration rounds.',
                'Tech: Machine Learning, Python, GIS, Data Analysis',
              ]}
            />
          </Section>

          {/* ── Projects ──────────────────────────────────────── */}
          <Section title="Projects">
            <Entry
              title="IdeaVault — Distributed AI Productivity OS"
              sub="Next.js · Fastify · FastAPI · PostgreSQL · Redis · BullMQ · Socket.io · pgvector · Docker · OpenTelemetry"
              date="Feb 2026 – May 2026"
              link="github.com/piyush-ghanghav/idea-vault"
              bullets={[
                'Async BullMQ job queue moved AI enrichment off the request cycle — POST /ideas latency dropped from 3–4 s to ~80 ms.',
                'Semantic similarity search and idea graph via pgvector (cosine similarity, ivfflat index) and React Flow visualisation.',
                'SM-2 spaced repetition scheduler, token bucket rate limiting in Redis, and OpenTelemetry tracing propagated across Node.js and Python services.',
              ]}
            />
            <Entry
              title="AI Mock Interview Prep"
              sub="Next.js · PostgreSQL · Gemini AI · Clerk · Drizzle ORM · Vercel"
              date="Sept 2024 – Dec 2024"
              link="github.com/piyush-ghanghav/Interview-Assistant"
              bullets={[
                'AI-driven platform for interview preparation with resume enhancement and mock interviews.',
                'Integrated Gemini API for dynamic question generation based on job descriptions and industry standards.',
                'Implemented type-safe database operations using Drizzle ORM with PostgreSQL and Clerk for auth.',
              ]}
            />
            <Entry
              title="Event Management System"
              sub="React.js · Node.js · MongoDB · Socket.IO"
              date="Jul 2024 – Sept 2024"
              link="github.com/piyush-ghanghav/event-management-frontend"
              bullets={[
                'Full-stack web application for managing events with real-time notifications via Socket.IO.',
                'RESTful API with Node.js and Express; MongoDB for storage; role-based authentication.',
              ]}
            />
            <Entry
              title="Parallel AES Encryption & Decryption"
              sub="C++ · OpenMP · Cryptography"
              date="Oct 2024 – Dec 2024"
              link="github.com/piyush-ghanghav/Parallel-AES-Implementation"
              bullets={[
                'High-performance AES implementation in C++ using OpenMP for parallel processing.',
                'Significant throughput improvement over sequential baseline; benchmarked with profiling tools.',
              ]}
            />
            <Entry
              title="VSCode Activity Tracker Extension"
              sub="JavaScript · VS Code API · Node.js"
              date="May 2025 – Jun 2025"
              link="github.com/piyush-ghanghav/activity-tracker-vscode"
              bullets={[
                'VS Code extension tracking coding activity, file switches, and time per project.',
                'Published on VS Code Marketplace with status bar integration and local analytics storage.',
              ]}
            />
          </Section>

          {/* ── Publications ──────────────────────────────────── */}
          <Section title="Publications">
            <div className="space-y-3">
              <Pub
                title="Social Media Sentiment Analysis Using Machine Learning"
                venue="3rd International Conference on Disruptive Technologies (ICDT 2025), IEEE"
                detail="DOI: 10.1109/ICDT63985.2025.10986650"
                date="March 2025"
                status="Published"
              />
              <Pub
                title="AI Interview Mocker"
                venue="2nd International Conference on Multi-Strategy Learning Environments (ICMSLE 2025), Springer"
                detail="To be published in Springer proceedings — Graphic Era Hill University"
                date="February 2025"
                status="In Press"
              />
              <Pub
                title="Advancing Code Generation: Insights into Large Language Models"
                venue="Journal of Cryptography and Network Security, Design and Codes — Vol. 1, Issue 3"
                detail="Available via journal subscription"
                date="December 2024"
                status="Journal"
              />
            </div>
          </Section>

          {/* ── Technologies ──────────────────────────────────── */}
          <Section title="Technologies">
            <div className="space-y-1.5 text-[11px]">
              {[
                { label: 'Languages', value: 'JavaScript, TypeScript, Python, Java, C++' },
                { label: 'Frontend', value: 'React.js, Next.js, Tailwind CSS, HTML5' },
                { label: 'Backend', value: 'Node.js, Fastify, Express.js, FastAPI, BullMQ, Spring Boot' },
                { label: 'Databases', value: 'PostgreSQL, MongoDB, MySQL, Redis' },
                { label: 'DevOps & Cloud', value: 'Docker, AWS, Git, Linux, Postman' },
                { label: 'ML & AI', value: 'TensorFlow, Scikit-learn, NLP, Pandas' },
              ].map(row => (
                <div key={row.label} className="r-tech-row">
                  <span className="font-bold">{row.label}: </span>
                  <span className="text-gray-700">{row.value}</span>
                </div>
              ))}
            </div>
          </Section>

          {/* ── Certifications ────────────────────────────────── */}
          <Section title="Certifications">
            <div className="space-y-1 text-[11px] text-gray-700">
              {[
                'Business Intelligence & Analytics — NPTEL (IIT Madras) · Elite · Jan–Apr 2024',
                'Project Management — NPTEL (IIT Kanpur) · Elite · Jul–Sep 2024',
                'Industry 4.0 & Industrial IoT — NPTEL (IIT Kharagpur) · Elite · Jul–Oct 2024',
                'AWS Academy Cloud Foundations — AWS Academy · Nov 2023',
                'Linear Algebra for Machine Learning — DeepLearning.AI, Coursera · Dec 2023',
                'Introduction to Cloud Computing — IBM, Coursera · Nov 2023',
              ].map(cert => (
                <div key={cert} className="flex gap-2">
                  <span className="text-gray-400 flex-shrink-0">·</span>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Section>

        </div>
      </div>
    </div>

  );
};

// ─── Small sub-components ──────────────────────────────────────

const Section = ({
  title, children,
}: {
  title: string; children: React.ReactNode;
}) => (
  <div className="mb-5">
    <h2 className="text-[11px] font-bold uppercase tracking-widest
                   border-b border-gray-800 pb-0.5 mb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Entry = ({
  title, sub, date, bullets, link,
}: {
  title: string;
  sub: string;
  date: string;
  bullets: string[];
  link?: string;
}) => (
  <div className="mb-3">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-[11px] font-bold leading-snug">{title}</p>
        <p className="text-[10px] text-gray-500 mt-0.5">
          {sub}
          {link && <span className="ml-2 text-gray-400">· {link}</span>}
        </p>
      </div>
      <span className="text-[10px] text-gray-500 whitespace-nowrap flex-shrink-0">
        {date}
      </span>
    </div>
    <ul className="mt-1.5 ml-3.5 space-y-0.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-[10.5px] text-gray-700 list-disc">{b}</li>
      ))}
    </ul>
  </div>
);

const Pub = ({
  title, venue, detail, date, status,
}: {
  title: string;
  venue: string;
  detail: string;
  date: string;
  status: string;
}) => (
  <div className="r-pub">
    <div className="flex items-start justify-between gap-4">
      <p className="text-[11px] font-bold leading-snug">{title}</p>
      <span className="text-[10px] text-gray-500 whitespace-nowrap flex-shrink-0">
        {date}
      </span>
    </div>
    <p className="text-[10px] italic text-gray-500 mt-0.5">{venue}</p>
    <p className="text-[10px] text-gray-400 mt-0.5">{detail} · <span className="font-medium">{status}</span></p>
  </div>
);

export default Resume;