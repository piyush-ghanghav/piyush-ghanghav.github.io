// src/pages/about.tsx
import { useState, } from "react";
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Library, 
  FileText,
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { ExperienceSection } from "@/components/about/ExperienceSection";
import { EducationSection } from "@/components/about/EducationSection";
import { SkillsSection } from "@/components/about/SkillsSection";
import { AboutSection } from "@/components/about/AboutSection";
import { AbstractSection } from "@/components/about/AbstractSection";

const About = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  const sections = [
    { 
      id: "about", 
      label: "About Me", 
      icon: <User className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
    },
    { 
      id: "education", 
      label: "Education", 
      icon: <GraduationCap className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
    },
    { 
      id: "experience", 
      label: "Experience", 
      icon: <Briefcase className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
    },
    { 
      id: "skills", 
      label: "Stack & Profiles", 
      icon: <Library className="w-5 h-5" fill="currentColor" strokeWidth={3} />
    },
    { 
      id: "abstract", 
      label: "Abstract", 
      icon: <FileText className="w-5 h-5" fill="currentColor" strokeWidth={1.5} />
    },
  ];

  const SECTION_COMPONENTS = {
    about: AboutSection,
    abstract: AbstractSection,
    education: EducationSection,
    experience: ExperienceSection,
    skills: SkillsSection,
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && currentIdx < sections.length - 1) {
      setCurrentIdx(prev => prev + 1);
    }
    if (isRightSwipe && currentIdx > 0) {
      setCurrentIdx(prev => prev - 1);
    }
  };

  const { id: activeId } = sections[currentIdx];
  const ActiveSection = SECTION_COMPONENTS[activeId as keyof typeof SECTION_COMPONENTS];

  return (
    <div className="min-h-screen bg-[--base] font- relative">
      {/* Title Section */}
      <div
        className="w-full bg-[--base] pt-8 pb-1"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-[700px] lg:max-w-[1000px] mx-auto">
            <h1 className="font-orbitron font-extrabold  text-4xl md:text-3xl sm:text-2xl text-[--text-color] tracking-wider">
              {sections[currentIdx].label}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content with Side Navigation */}
      <div className="container mx-auto px-4 py-8 relative">
        {/* Left Navigation */}
        <button
          onClick={() => setCurrentIdx(prev => Math.max(prev - 1, 0))}
          disabled={currentIdx === 0}
          className="fixed left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[--surface0]/80 
            backdrop-blur-md border border-[--surface1] text-[--text] hover:bg-[--surface1] 
            disabled:opacity-50 transition-all hover:shadow-md hidden md:block"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Navigation */}
        <button
          onClick={() => setCurrentIdx(prev => Math.min(prev + 1, sections.length - 1))}
          disabled={currentIdx === sections.length - 1}
          className="fixed right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[--surface0]/80 
            backdrop-blur-md border border-[--surface1] text-[--text] hover:bg-[--surface1] 
            disabled:opacity-50 transition-all hover:shadow-md hidden md:block"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content with Touch Events */}
        <div 
          className="max-w-[700px] lg:max-w-[1000px] mx-auto"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
              <ActiveSection sectionRef={() => {}} />
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
        <div className="bg-[--surface0]/80 backdrop-blur-md border border-[--surface1] rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center gap-2">
            {sections.map((section, idx) => (
              <button
                key={section.id}
                onClick={() => setCurrentIdx(idx)}
                className={`
                  p-2.5 rounded-full transition-all duration-300
                  ${idx === currentIdx 
                    ? 'bg-[--blue] text-white shadow-md scale-110 ' 
                    : 'text-[--text] hover:bg-[--surface1] hover:shadow-sm'
                  }
                `}
                title={section.label}
              >
                {section.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
