import { motion } from "framer-motion";
import { Code2, Globe, Database, Wrench } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-[--blue]" />,
    skills: [
      { name: "Python", icon: "python" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Java", icon: "java" },
      { name: "C++", icon: "cpp" },
    ],
  },
  {
    title: "Web Technologies",
    icon: <Globe className="text-[--blue]" />,
    skills: [
      { name: "React", icon: "react" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "TailwindCSS", icon: "tailwind" },
    ],
  },
  {
    title: "Databases",
    icon: <Database className="text-[--blue]" />,
    skills: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="text-[--blue]" />,
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "AWS", icon: "aws" },
      { name: "Linux", icon: "linux" },
    ],
  },
];

export const SkillsSection = () => (
  <ScrollReveal>
    <section className="mb-16" id="skills">
      <SectionHeader icon={Code2} title="Skills" />
      <div className="grid gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-[--surface0] p-6 rounded-lg border border-[--surface1]"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                {category.icon}
                <h3 className="text-xl font-semibold text-[--text]">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.1 }}
                    className="group relative"
                  >
                    <div className="flex items-center justify-center p-4 bg-[--surface1] rounded-lg
                      hover:bg-[--surface2] transition-all duration-300">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-x-0 -bottom-8 opacity-0 group-hover:opacity-100 
                      transition-all duration-200">
                      <div className="flex justify-center">
                        <span className="bg-[--surface2] text-[--text] text-sm px-2 py-1 rounded">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </ScrollReveal>
);