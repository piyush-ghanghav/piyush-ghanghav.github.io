/**
 * INDEX — Single page portfolio
 *
 * All sections live here as scroll targets.
 * Build order: Hero → About → Projects → Experience → Certifications → Contact
 *
 * Each section has:
 * - An id for anchor nav + IntersectionObserver
 * - Consistent vertical padding (py-20 desktop / py-12 mobile)
 * - content-container for max-width centering
 *
 * Replace each <SectionPlaceholder> with the real section component
 * as it's built. Don't remove the id or padding wrapper.
 */

import { useEffect } from 'react';
import HeroSection             from '@/components/sections/HeroSection';
import AboutSection            from '@/components/sections/AboutSection';
import ProjectsSection         from '@/components/sections/ProjectsSection';
import ExperienceSection       from '@/components/sections/ExperienceSection';
import CertificationsSection   from '@/components/sections/CertificationsSection';
import ContactSection          from '@/components/sections/ContactSection';
import { trackPageView, trackSection, SECTION_KEYS } from '@/lib/analytics';
// import AboutSection        from '@/components/sections/AboutSection';
// import ProjectsSection     from '@/components/sections/ProjectsSection';
// import ExperienceSection   from '@/components/sections/ExperienceSection';
// import CertificationsSection from '@/components/sections/CertificationsSection';
// import ContactSection      from '@/components/sections/ContactSection';

const Index = () => {
  useEffect(() => {
    // Fire page view once on mount
    trackPageView();

    // Track each section when it enters viewport — fires once per section per load
    const tracked = new Set<string>();
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !tracked.has(entry.target.id)) {
            tracked.add(entry.target.id);
            trackSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 },
    );

    SECTION_KEYS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
  <div>

    {/* ── 01. Hero ─────────────────────────────────────────
        Full viewport height. Name, role, bio, CTAs.
        No section padding wrapper — hero controls its own height.
    ──────────────────────────────────────────────────────── */}
    <section id="hero" className="hero-ambient min-h-screen">
      <HeroSection />
    </section>

    {/* ── 02. About ────────────────────────────────────────
        Bento grid: Bio · Stats · Currently · Skills
    ──────────────────────────────────────────────────────── */}
    <section id="about" className="py-20 md:py-24">
      <div className="content-container">
        <AboutSection />
      </div>
    </section>

    {/* ── 03. Projects ─────────────────────────────────────
        Bento grid: 1 featured + 4 small cards
    ──────────────────────────────────────────────────────── */}
    <section id="projects" className="py-20 md:py-24 bg-surface">
      <div className="content-container">
        <ProjectsSection />
      </div>
    </section>

    {/* ── 04. Experience ───────────────────────────────────
        Timeline: Education + Tata Innovation Achievement
    ──────────────────────────────────────────────────────── */}
    <section id="experience" className="py-20 md:py-24">
      <div className="content-container">
        <ExperienceSection />
      </div>
    </section>

    {/* ── 05. Certifications ───────────────────────────────
        Top 6 visible + "show more" toggle
    ──────────────────────────────────────────────────────── */}
    <section id="certifications" className="py-20 md:py-24 bg-surface">
      <div className="content-container">
        <CertificationsSection />
      </div>
    </section>

    {/* ── 06. Contact ──────────────────────────────────────
        Glass card, EmailJS form, social links
    ──────────────────────────────────────────────────────── */}
    <section id="contact" className="py-20 md:py-24">
      <div className="content-container">
        <ContactSection />
      </div>
    </section>

  </div>
  );
};

export default Index;