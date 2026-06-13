import { useState, useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About',         href: '#about' },
  { label: 'Projects',      href: '#projects' },
  { label: 'Experience',    href: '#experience' },
  { label: 'Contact',       href: '#contact' },
] as const;

const SECTION_IDS = ['hero', 'about', 'projects', 'experience', 'certifications', 'contact'];

const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Glass effect activates after 20px scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section via IntersectionObserver
  // rootMargin: fires when section crosses the middle 5% band of the viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      // Offset for fixed navbar height (64px)
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const isActive = (href: string) => activeSection === href.replace('#', '');

  return (
    <>
      {/* ── Main navbar ─────────────────────────────────── */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 h-16
          transition-all duration-300
          ${scrolled
            ? 'glass border-b border-border'
            : 'bg-transparent'
          }
        `}
        aria-label="Main navigation"
      >
        <div className="content-container h-full flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => scrollTo('#hero')}
            className="font-display font-bold text-xl text-text-primary hover:text-accent transition-colors"
            aria-label="Go to top"
          >
            Piyush<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                role="listitem"
                className={`
                  relative text-sm font-body font-medium
                  transition-colors duration-200
                  ${isActive(link.href)
                    ? 'text-accent'
                    : 'text-text-secondary hover:text-text-primary'
                  }
                `}
              >
                {link.label}
                {/* Active underline indicator */}
                <span
                  className={`
                    absolute -bottom-1 left-0 right-0 h-px bg-accent rounded-full
                    transition-transform duration-200 origin-left
                    ${isActive(link.href) ? 'scale-x-100' : 'scale-x-0'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-md
                text-text-secondary hover:text-text-primary
                hover:bg-surface-elevated
                transition-colors duration-200
              "
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark'
                ? <Sun  size={18} strokeWidth={1.5} />
                : <Moon size={18} strokeWidth={1.5} />
              }
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              className="
                md:hidden p-2 rounded-md
                text-text-secondary hover:text-text-primary
                transition-colors duration-200
              "
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen
                ? <X    size={20} strokeWidth={1.5} />
                : <Menu size={20} strokeWidth={1.5} />
              }
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile full-screen overlay ───────────────────── */}
      <div
        className={`
          fixed inset-0 z-40 bg-bg
          flex flex-col items-center justify-center
          md:hidden
          transition-opacity duration-300
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col items-center gap-10" role="list">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              role="listitem"
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms'
              }}
              className={`
                font-display font-bold text-4xl
                transition-all duration-300
                ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                ${isActive(link.href)
                  ? 'text-accent'
                  : 'text-text-primary hover:text-accent'
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Section index label at bottom */}
        <p className="absolute bottom-10 font-mono text-xs text-text-tertiary">
          {activeSection && `— ${activeSection}`}
        </p>
      </div>
    </>
  );
};

export default Navbar;