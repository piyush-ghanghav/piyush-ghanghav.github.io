import { useState, useEffect, useRef } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import DotNavigation from "@/components/ui/DotNavigation";
import { CodingProfilesSection } from "@/components/about/CodingProfilesSection";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { EducationSection } from "@/components/about/EducationSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { AboutSection } from "@/components/about/AboutSection";

const About = () => {
  const [activeSection, setActiveSection] = useState("about");
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const sections = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "coding", label: "Coding Profiles" },
    { id: "facts", label: "Fun Facts" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
  ];

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.5,
        }
      );

      if (sectionRefs.current[id]) {
        observer.observe(sectionRefs.current[id]!);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-[--base] font-inter">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      <DotNavigation
        sections={sections.map((s) => s.label)}
        activeSection={activeSection}
        onDotClick={(section) => {
          const sectionId = sections.find((s) => s.label === section)?.id;
          if (sectionId) scrollToSection(sectionId);
        }}
      />

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-5xl mx-auto space-y-32">
          <AboutSection sectionRef={(el) => (sectionRefs.current["about"] = el)} />
          <CodingProfilesSection />
          <ExperienceSection />
          <EducationSection />
          <SkillsSection />
        </div>
      </div>
    </div>
  );
};

export default About;
