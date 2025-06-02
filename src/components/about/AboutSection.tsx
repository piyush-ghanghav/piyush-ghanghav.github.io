import { motion } from "framer-motion";
import { User } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Divider from "@/components/ui/Divider";
import { BorderBeam } from "@/components/ui/border-beam";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface AboutSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
}

export const AboutSection = ({ sectionRef }: AboutSectionProps) => (
  <ScrollReveal>
    <section ref={sectionRef} className="mb-16">
      <SectionHeader icon={User} title="About Me" />
      <div className="relative">
        <motion.div className="relative overflow-hidden">
          <div className="relative bg-[--surface0] p-6 md:p-8 rounded-[15px] border border-[--surface1] pt-8">
            <BorderBeam className="z-0" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex my-5">
                  <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[15px] border-4 border-[--surface1]">
                    <img
                      src="/parallel_programming.png"
                      alt="Piyush Ghanghav"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="w-full md:w-2/3 prose prose-gray dark:prose-invert max-w-none mt-5">
                  <p className="text-[--text] text-justify">
                    I am a final-year Computer Engineering student at
                    Sanjivani College of Engineering, Kopargaon. My main
                    area of interest is Full Stack Development, and I also
                    enjoy learning about Machine Learning.
                  </p>
                  <p className="text-[--text] mt-4 text-justify">
                    I like building applications that are useful and
                    reliable. I focus on writing clean and maintainable
                    code. I take the time to understand how things work
                    and try to improve my skills through regular practice
                    and small projects.
                  </p>
                  <p className="text-[--text] mt-4 text-justify">
                    In my free time, I take part in coding events, work on
                    open-source contributions, and write technical
                    articles to share what I learn. I value working with
                    others and believe good communication is as important
                    as technical knowledge.
                  </p>
                </div>
              </div>

              <Divider className="my-6" />

              <div className="flex flex-wrap gap-3 mt-6">
                {[
                  "Full Stack Development",
                  "Machine Learning",
                  "Problem Solving",
                  "Data Structures",
                  "Algorithms",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 bg-[--surface1] text-[--text] rounded-[10px] text-sm 
                    font-medium hover:bg-[--surface2] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </ScrollReveal>
);