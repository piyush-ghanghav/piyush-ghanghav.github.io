import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin, Star, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  grade: string;
  achievements: string[];
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Sanjivani College of Engineering",
    period: "2021 - 2025",
    location: "Kopargaon, Maharashtra",
    grade: "8.5 CGPA",
    achievements: [
      "Elite certification in NPTEL courses",
      "Published research paper on ML applications",
      "Full Stack Development with MERN",
      "Data Structures & Algorithms",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mahavir Junior College",
    period: "2019 - 2021",
    location: "Lasalgaon, Maharashtra",
    grade: "93.83%",
    achievements: [
      "Secured 93.83% in Board Examinations",
      "Advanced Mathematics & Physics",
      "Analytical Problem Solving",
    ],
  }
];

export const EducationSection = () => (
  <ScrollReveal>
    <section className="mb-16" id="education">
      <SectionHeader icon={GraduationCap} title="Education" />
      <div className="grid gap-6">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-[--surface0] p-6 rounded-lg border border-[--surface1] hover:border-[--blue]
              transition-all duration-300 hover:shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[--text]">{edu.degree}</h3>
                  <p className="text-[--subtext1] mt-1">{edu.institution}</p>
                </div>
                <span className="text-[--blue] font-medium">{edu.period}</span>
              </div>
              
              <div className="flex items-center gap-4 text-[--subtext1]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>{edu.grade}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[--text]">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">Key Achievements</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-[--subtext1]">
                      <ChevronRight className="w-4 h-4 text-[--blue]" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </ScrollReveal>
);