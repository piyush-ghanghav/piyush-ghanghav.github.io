import { Github, Linkedin,  ArrowUp,  } from 'lucide-react';

// ─── Data ─────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About',          href: '#about'          },
  { label: 'Projects',       href: '#projects'       },
  { label: 'Experience',     href: '#experience'     },
  { label: 'Publications',   href: '#certifications' },
  { label: 'Contact',        href: '#contact'        },
];

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  `</svg>
);
const SOCIALS = [
  {
    label: 'GitHub',
    href:  'https://github.com/piyush-ghanghav',
    icon:  <Github size={16} strokeWidth={1.5} />,
  },
  {
    label: 'LinkedIn',
    href:  'https://linkedin.com/in/piyush-ghanghav',
    icon:  <Linkedin size={16} strokeWidth={1.5} />,
  },
  {
    label: 'LeetCode',
    href:  'https://leetcode.com/piyush10_',
    icon:  <LeetCodeIcon />,
  },
];

// ─── Helpers ──────────────────────────────────────────────────

const scrollTo = (href: string) => {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// ─── Component ────────────────────────────────────────────────

const Footer = () => (
  <footer className="border-t border-border bg-surface">
    <div className="content-container py-10">

      {/* Main row */}
      <div className="flex flex-col md:flex-row items-start md:items-center
                      justify-between gap-8">

        {/* Logo + tagline */}
        <div className="flex flex-col gap-1.5">
          <button
            onClick={scrollToTop}
            className="font-display font-bold text-lg text-text-primary
                       hover:text-accent transition-colors text-left"
          >
            Piyush<span className="text-accent">.</span>
          </button>
          <p className="font-mono text-[10px] text-text-tertiary tracking-wide">
            Backend & Full-stack Engineer
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {NAV_LINKS.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="font-body text-sm text-text-secondary
                         hover:text-text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {SOCIALS.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-8 h-8 rounded-md flex items-center justify-center
                         text-text-tertiary hover:text-accent
                         hover:bg-surface-elevated border border-transparent
                         hover:border-border transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border my-6" />

      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row items-center
                      justify-between gap-3">
        <p className="font-mono text-[10px] text-text-tertiary">
          © {new Date().getFullYear()} Piyush Ghanghav · Built with React,
          TypeScript & Tailwind CSS
        </p>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 font-mono text-[10px]
                     text-text-tertiary hover:text-accent transition-colors group"
          aria-label="Back to top"
        >
          Back to top
          <ArrowUp
            size={11}
            strokeWidth={1.5}
            className="group-hover:-translate-y-0.5 transition-transform duration-200"
          />
        </button>
      </div>

    </div>
  </footer>
);

export default Footer;