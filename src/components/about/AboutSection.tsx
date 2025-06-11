import Divider from "@/components/ui/Divider";
import { BorderBeam } from "@/components/ui/border-beam";

interface AboutSectionProps {
  sectionRef: (el: HTMLElement | null) => void;
  
}

export const AboutSection = ({ sectionRef }: AboutSectionProps) => (
  <section ref={sectionRef} className="mb-16">
      <div className="relative bg-[--surface0] font-aldrich p-6 md:p-8 rounded-[15px] border border-[--surface1]">
        <BorderBeam className="z-0" />
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-[15px] border-4 border-[--surface1]">
                <img
                  src="/pf.png"
                  alt="Piyush Ghanghav"
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3 mt-5">
              <p className="text-[--text-color] text-justify">
                I am a final-year Computer Engineering student at Sanjivani College of Engineering, Kopargaon. I enjoy exploring various areas in software development and continuously learning new technologies.
              </p>
              <p className="text-[--text-color] mt-4 text-justify">
                I like building applications that are useful and reliable. I focus on writing clean and maintainable code. I take the time to understand how things work and try to improve my skills through regular practice and small projects.
              </p>
              <p className="text-[--text-color] mt-4 text-justify">
               In my free time, I work on personal projects, explore new technologies, and play some chess. I enjoy experimenting with different tools and building small apps to sharpen my skills. I’m always looking for ways to learn more and grow as a developer.
              </p>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Software Development",
              "Machine Learning",
              "Problem Solving",
              "Creativity",
              "Data Structures",
              "Algorithms",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-1.5 bg-[--surface1] text-[--text-color] rounded-[10px] text-sm font-medium hover:bg-[--surface2] transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
  </section>
);
