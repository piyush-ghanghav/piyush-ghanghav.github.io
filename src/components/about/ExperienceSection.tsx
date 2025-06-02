import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { Experience } from "./types";

const experiences: Experience[] = [
  {
    title: "Semi-Finalist",
    company: "Tata Innovation Challenge",
    duration: "Nov 23 - Mar 23",
    location: "India",
    highlights: [
      "IDENTIFICATION OF FLOOD PRONE AREA IN URBAN SETTLEMENTS (Machine Learning Based Approach)",
      "Concept Solution, Abstract Shortlisting, Technical Presentation, POC Demonstration",
    ],
    technologies: ["Machine Learning", "Python", "Data Analysis", "GIS"],
  },
  // ... other experiences
];

export const ExperienceSection = () => (
  <ScrollReveal>
    <section className="mb-16">
      <SectionHeader icon={Briefcase} title="Experience" />
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <ScrollReveal key={index}>
            {/* Your existing experience card layout */}
          </ScrollReveal>
        ))}
      </div>
    </section>
  </ScrollReveal>
);