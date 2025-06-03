import { SkillCard } from "./SkillCard";
import { ProfileBadge } from "./ProfileBadge";
import type { CodingProfile, SkillCategory } from "./types";

const codingProfiles: CodingProfile[] = [
  {
    platform: "LeetCode",
    link: "https://leetcode.com/piyushghanghav",
    badge:
      "https://img.shields.io/badge/-LeetCode-FFA116?style=flat-square&logo=LeetCode&logoColor=black",
  },
  {
    platform: "GeeksforGeeks",
    link: "https://www.geeksforgeeks.org/user/piyushghanghav10/",
    badge:
      "https://img.shields.io/badge/-GeeksforGeeks-2F8D46?style=flat-square&logo=GeeksforGeeks&logoColor=white",
  },
  {
    platform: "HackerRank",
    link: "https://www.hackerrank.com/piyushghanghav",
    badge:
      "https://img.shields.io/badge/-Hackerrank-00EA64?style=flat-square&logo=HackerRank&logoColor=white",
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/piyushghanghav",
    badge:
      "https://img.shields.io/badge/-CodeChef-5B4638?style=flat-square&logo=CodeChef&logoColor=white",
  },
];

const skillCategories: SkillCategory[] = [
  {
    title: "Development",
    skills: [
      { id: "javascript", title: "JavaScript" },
      { id: "typescript", title: "TypeScript" },
      { id: "python", title: "Python" },
      { id: "java", title: "Java" },
      { id: "cpp", title: "C++" },
      { id: "react", title: "React.js" },
      { id: "nodejs", title: "Node.js" },
      { id: "express", title: "Express.js" },
      { id: "html", title: "HTML5" },
      { id: "css", title: "CSS3" },
      { id: "tailwind", title: "Tailwind CSS" },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { id: "mongodb", title: "MongoDB" },
      { id: "postgresql", title: "PostgreSQL" },
      { id: "mysql", title: "MySQL" },
      { id: "aws", title: "AWS" },
      { id: "docker", title: "Docker" },
      { id: "kubernetes", title: "Kubernetes" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { id: "git", title: "Git" },
      { id: "vscode", title: "VS Code" },
      { id: "postman", title: "Postman" },
      { id: "linux", title: "Linux" },
      { id: "tensorflow", title: "TensorFlow" },
      { id: "pytorch", title: "PyTorch" },
    ],
  },
];

export const SkillsSection = () => (
  <section className="mb-16 space-y-12">
    {/* Skills Container */}
    <div className="relative bg-[--surface0] p-6 md:p-8 rounded-[15px] border border-[--surface1] pt-6">
      <div className="space-y-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className="space-y-4"
          >
            <h3 className="text-xl font-aldrich font-semibold text-[--text]">
              {category.title}
            </h3>
            <div className="relative overflow-hidden">
              <div
                className={`flex gap-4 animate-scroll${idx % 2 ? "-reverse" : ""}`}
                style={{
                  animation: `scroll${idx % 2 ? "-reverse" : ""} ${30 + idx * 5}s linear infinite`,
                }}
              >
                {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                  <SkillCard
                    key={`${skill.id}-${skillIndex}`}
                    skill={skill}
                  />
                ))}
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[--surface0] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[--surface0] to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[--surface1] my-6" />

      {/* Coding Profiles with Tooltips */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {codingProfiles.map((profile, idx) => (
          <ProfileBadge
            key={profile.platform}
            profile={profile}
            index={idx}
          />
        ))}
      </div>
    </div>
  </section>
);
