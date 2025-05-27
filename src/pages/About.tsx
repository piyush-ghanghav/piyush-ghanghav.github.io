import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code2,
  Sparkles,
  GraduationCap,
  Code,
  Award,
  MapPin,
  Terminal,
  Lightbulb,
  Star,
  Trophy,
  ChevronRight,
} from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";
import SectionHeader from "@/components/ui/SectionHeader";
import Divider from "@/components/ui/Divider";
import { BorderBeam } from "@/components/ui/border-beam";
import DotNavigation from "@/components/ui/DotNavigation";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const developmentSkills = [
  "javascript",
  "typescript",
  "python",
  "java",
  "react",
  "nodejs",
  "express",
  "html5",
  "css3",
  "tailwindcss",
  "mongodb",
  "postgresql",
  "git",
  "docker",
  "amazonaws",
];

const mlAndToolsSkills = [
  "tensorflow",
  "pytorch",
  "scikitlearn",
  "python",
  "cplusplus",
  "visualstudiocode",
  "postman",
  "linux",
  "kubernetes",
];

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

  const funFacts = [
    {
      fact: "Avid Chess Player",
      link: {
        url: "https://www.chess.com/member/therooooksgambit",
        text: "Chess.com Profile",
      },
    },
    {
      fact: "Photography Enthusiast",
      description:
        "Capture moments through my lens during travels and nature walks",
    },
    {
      fact: "Fitness Freak",
      description:
        "Regular gym-goer and believe in maintaining a healthy work-life balance",
    },
    {
      fact: "Book Worm",
      description:
        "Love reading non-fiction and technical books in my free time.",
    },
    {
      fact: "Coding Enthusiast",
      description:
        "Passionate about solving complex problems and building innovative solutions",
    },
    {
      fact: " Football Fanatic ⚽ (Forca Barca!)",
      description:
        "Passionate about watching, analyzing matches, and staying updated with Football.",
    },

    {
      fact: "Tech Explorer",
      description:
        "Continuously learning new technologies for professional growth",
    },
  ];

  const codingProfiles = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/piyushghanghav",
      icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png",
    },
    {
      platform: "CodeChef",
      link: "https://www.codechef.com/users/piyushghanghav",
      icon: "https://cdn.codechef.com/images/cc-logo.svg",
    },
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/piyushghanghav",
      icon: "https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png",
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/piyushghanghav10/",
      icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg",
    },
  ];

  const experiences = [
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
    {
      title: "Web Development Intern",
      company: "Oasis Infobyte",
      duration: "Aug 23 - Sept 23",
      location: "Remote",
      highlights: [
        "Developed responsive web applications using modern technologies and best practices",
        "Implemented user authentication, API integration, and database management",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "REST APIs",
      ],
    },
  ];

  const education = [
    {
      period: "2021 - 2025",
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institution: "Sanjivani College of Engineering",
      location: "Kopargaon, Maharashtra",
      grade: "8.5 CGPA",
      description:
        "Currently pursuing B.Tech with a focus on cutting-edge technologies and practical implementation. Actively participating in research projects and maintaining academic excellence.",
      achievements: [
        "Secured Elite certification in NPTEL courses",
        "Published research paper on ML applications",
      ],
      learnings: [
        "Full Stack Development (MERN)",
        "Data Structures & Algorithms",
        "Machine Learning & AI",
        "Cloud Computing & DevOps",
      ],
    },
    {
      period: "2019 - 2021",
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science",
      institution: "Mahavir Junior College",
      location: "Lasalgaon, Maharashtra",
      grade: "93.83%",
      description:
        "Completed HSC with distinction, focusing on Physics, Chemistry, and Mathematics. The rigorous curriculum helped develop analytical thinking and problem-solving abilities. Participated actively in science exhibitions and mathematics competitions, laying a strong foundation for engineering studies.",
      achievements: ["Secured 93.83% in Board Examinations"],
      learnings: [
        "Advanced Mathematics & Physics",
        "Analytical Problem Solving",
        "Scientific Research Methods",
      ],
    },
    {
      period: "2018 - 2019",
      degree: "Secondary School Certificate (SSC)",
      specialization: "General",
      institution: "Loknete Dattaji Patil Vidyalaya",
      location: "Lasalgaon, Maharashtra",
      grade: "89.20%",
      description:
        "Completed SSC with distinction, developing strong fundamentals in science and mathematics. Balanced academics with leadership roles and extracurricular activities. Active participation in mathematics competitions fostered logical thinking and problem-solving skills.",
      achievements: [
        "Academic Excellence Award",
        "First Prize in District Mathematics Competition",
        "Student Council Leader",
      ],
      learnings: [
        "Fundamental Mathematics & Science",
        "Time Management & Leadership",
        "Effective Communication Skills",
      ],
    },
  ];

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
        <motion.div className="max-w-5xl mx-auto space-y-32">
          {/* About Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["about"] = el)}
              className="mb-16"
            >
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

          {/* Experience Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["experience"] = el)}
              className="mb-16"
            >
              <SectionHeader icon={Briefcase} title="Experience" />
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <ScrollReveal key={index}>
                    <motion.div className="group relative bg-[--surface0] p-6 md:p-8 rounded-[15px] border border-[--surface1]">
                      <h3 className="text-xl font-semibold text-[--text]">
                        {exp.title}
                      </h3>
                      <p className="text-[--blue] font-medium">{exp.company}</p>
                      <div className="flex items-center gap-2 text-[--subtext0] mt-2 md:mt-0">
                        <span className="text-sm">{exp.duration}</span>
                        <span className="text-sm">•</span>
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      {exp.highlights && (
                        <div className="space-y-3 mb-6">
                          {exp.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[--blue] mt-2 flex-shrink-0"></div>
                              <p className="text-[--text]">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
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
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Coding Profiles Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["coding"] = el)}
              className="mb-16"
            >
              <SectionHeader icon={Code2} title="Coding Profiles" />
              <div className="relative md:hidden">
                <div className="overflow-x-auto pb-6">
                  <div
                    className="flex space-x-4 px-4"
                    style={{ width: "max-content" }}
                  >
                    {codingProfiles.map((profile) => (
                      <motion.a
                        key={profile.platform}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[280px] flex-shrink-0"
                      >
                        <div
                          className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                        p-6 rounded-xl transition-all duration-300 
                        flex flex-col items-center gap-4
                        shadow-sm hover:shadow-lg 
                        border border-blue-100/30 hover:border-blue-200/50
                        min-h-[180px] justify-center"
                        >
                          <img
                            src={profile.icon}
                            alt={profile.platform}
                            className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                          />
                          <span className="text-gray-600 group-hover:text-blue-700 transition-all duration-300 font-medium text-base">
                            {profile.platform}
                          </span>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              </div>

              <div className="hidden md:grid md:grid-cols-4 gap-4">
                {codingProfiles.map((profile) => (
                  <motion.a
                    key={profile.platform}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                    p-6 rounded-xl transition-all duration-300 
                    flex flex-col items-center gap-3 
                    shadow-sm hover:shadow-lg 
                    border border-blue-100/30 hover:border-blue-200/50"
                  >
                    <img
                      src={profile.icon}
                      alt={profile.platform}
                      className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                    <span className="text-gray-600 group-hover:text-blue-700 transition-all duration-300 font-medium">
                      {profile.platform}
                    </span>
                  </motion.a>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Fun Facts Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["facts"] = el)}
              className="mb-16"
            >
              <SectionHeader icon={Sparkles} title="Bits of My Life" />
              <div className="relative md:hidden">
                <div className="overflow-x-auto pb-6">
                  <div
                    className="flex space-x-4 px-4"
                    style={{ width: "max-content" }}
                  >
                    {funFacts.map((item, index) => (
                      <motion.div key={index} className="w-[300px] flex-shrink-0">
                        <div
                          className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                        p-6 rounded-xl transition-all duration-300 
                        shadow-md hover:shadow-xl 
                        border border-blue-100/30 hover:border-blue-200/50
                        min-h-[200px] flex flex-col justify-between"
                        >
                          <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-all duration-300">
                            {item.fact}
                          </h3>
                          <div>
                            <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300 mb-4">
                              {item.description}
                            </p>
                            {item.link && (
                              <a
                                href={item.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {item.link.text}
                                <ChevronRight className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              </div>

              <div className="hidden md:grid md:grid-cols-2 gap-6">
                {funFacts.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="group relative bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 p-6 md:p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/30 hover:border-blue-200/50"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2 group-hover:text-blue-700 transition-all duration-300">
                      {item.fact}
                      {item.link && (
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 font-medium"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {item.link.text}
                        </a>
                      )}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Education Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["education"] = el)}
              className="mb-16"
            >
              <SectionHeader icon={GraduationCap} title="Education" />
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <ScrollReveal key={index}>
                    <motion.div className="group bg-white dark:bg-[#313244] p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                      {/* Header Section with Period and Degree */}
                      <div className="flex justify-between items-start mb-5">
                        <div>
                          <h3 className="font-space text-xl font-semibold text-gray-900 dark:text-[#CDD6F4] tracking-tight">
                            {edu.degree}
                            <span className="text-blue-600 px-4 dark:text-[#89B4FA] font-medium">
                              {edu.specialization}
                            </span>
                          </h3>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 font-medium text-sm tracking-wider bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>

                      {/* Institution Details */}
                      <div className="flex flex-wrap gap-5 mb-5">
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="text-base font-semibold text-gray-800 dark:text-gray-200">
                            {edu.institution}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            {edu.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                            {edu.grade}
                          </span>
                        </div>
                      </div>

                      {/* Overview Section */}
                      <div className="bg-gray-50 dark:bg-gray-800/30 rounded-xl p-5">
                        <h4 className="text-base font-semibold text-gray-900 dark:text-[#CDD6F4] flex items-center gap-2 mb-3">
                          <Lightbulb className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                          Overview
                        </h4>
                        <p className="text-gray-700 dark:text-[#CDD6F4] leading-relaxed text-justify">
                          {edu.description}
                        </p>

                        {/* Achievements Section */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                            <h5 className="text-base font-semibold text-gray-900 dark:text-[#CDD6F4] flex items-center gap-2 mb-3">
                              <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                              Achievements
                            </h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                >
                                  <span className="text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Skills Section */}
          <ScrollReveal>
            <section
              ref={(el) => (sectionRefs.current["skills"] = el)}
              className="mb-16"
            >
              <SectionHeader icon={Code} title="Technical Skills" />
              <div className="space-y-6">
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#313244] p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Code2 className="text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-[#CDD6F4]">
                      Development Stack
                    </h3>
                  </div>

                  <div className="relative">
                    <div
                      className="flex gap-8 animate-scroll"
                      style={{
                        animation: "scroll 40s linear infinite",
                        width: "fit-content",
                      }}
                    >
                      {[...developmentSkills, ...developmentSkills].map(
                        (slug, index) => (
                          <div
                            key={`dev-${index}`}
                            className="group/skill relative flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/30 dark:border-blue-900/30 hover:border-blue-200/50 dark:hover:border-blue-800/50"
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${slug}`}
                              alt={slug}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover/skill:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 -mb-8 opacity-0 group-hover/skill:opacity-100 transition-all duration-200 z-20 pointer-events-none">
                              <div className="flex justify-center">
                                <div className="bg-gray-900 dark:bg-gray-700 text-white py-1 px-2 rounded-md text-xs font-medium shadow-lg whitespace-nowrap">
                                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-[#313244] to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#313244] to-transparent" />
                </div>

                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-[#313244] p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <Terminal className="text-blue-600 dark:text-blue-400" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-[#CDD6F4]">
                      ML & Tools
                    </h3>
                  </div>

                  <div className="relative">
                    <div
                      className="flex gap-8 animate-scroll-reverse"
                      style={{
                        animation: "scroll-reverse 30s linear infinite",
                        width: "fit-content",
                      }}
                    >
                      {[...mlAndToolsSkills, ...mlAndToolsSkills].map(
                        (slug, index) => (
                          <div
                            key={`ml-${index}`}
                            className="group/skill relative flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/30 dark:border-blue-900/30 hover:border-blue-200/50 dark:hover:border-blue-800/50"
                          >
                            <img
                              src={`https://skillicons.dev/icons?i=${slug}`}
                              alt={slug}
                              className="w-full h-full object-contain transition-transform duration-300 group-hover/skill:scale-110"
                            />
                            <div className="absolute inset-x-0 bottom-0 -mb-8 opacity-0 group-hover/skill:opacity-100 transition-all duration-200 z-20 pointer-events-none">
                              <div className="flex justify-center">
                                <div className="bg-gray-900 dark:bg-gray-700 text-white py-1 px-2 rounded-md text-xs font-medium shadow-lg whitespace-nowrap">
                                  {slug.charAt(0).toUpperCase() + slug.slice(1)}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white dark:from-[#313244] to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white dark:from-[#313244] to-transparent" />
                </div>
              </div>
            </section>
          </ScrollReveal>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
