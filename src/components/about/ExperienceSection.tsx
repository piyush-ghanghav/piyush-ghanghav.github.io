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
  <section className="mb-16">
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group relative bg-[--surface0] p-6 md:p-8 rounded-[15px] border border-[--surface1] 
            hover:border-[--blue] transition-all duration-300 hover:shadow-lg"
        >
          <div className="space-y-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold text-[--text]">{exp.title}</h3>
                <p className="text-[--blue] font-medium">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2 text-[--subtext0]">
                <span className="text-sm">{exp.duration}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">{exp.location}</span>
              </div>
            </div>

            {/* Highlights */}
            {exp.highlights && (
              <div className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[--blue] mt-2 flex-shrink-0" />
                    <p className="text-[--text]">{highlight}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Technologies */}
            {exp.technologies && (
              <div className="flex flex-wrap gap-2 pt-4">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[--surface1] text-[--text] rounded-[10px] text-sm 
                      font-medium hover:bg-[--surface2] transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </section>
);