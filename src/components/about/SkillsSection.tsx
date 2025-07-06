import { SkillCard } from "./SkillCard";
import { ProfileBadge } from "./ProfileBadge";
export interface CodingProfile {
  platform: string;
  link: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  skills: Array<{
    id: string;
    title: string;
  }>;
}

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
  <section className="mt-0">
    {/* Skills Container */}
    <div className="relative bg-[--surface0] p-6 md:p-8 rounded-[15px] border border-[--surface1] pt-6">
      <div className="">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className={idx < skillCategories.length - 1 ? "mb-2" : ""}
          >
            <h3 className="text-xl font-aldrich font-semibold text-[--text-color] mb-4">
              {category.title}
            </h3>
            <div className="relative overflow-hidden pb-8 mb-0">
              <div
                className={`flex gap-4 animate-scroll${idx % 2 ? "-reverse" : ""}`}
                style={{
                  animation: `scroll${idx % 2 ? "-reverse" : ""} ${30 + idx * 5}s linear infinite`,
                }}
              >
                {[...category.skills, ...category.skills].map((skill, skillIndex) => (
                  <div key={`${skill.id}-${skillIndex}`} className="relative group/skill">
                    <SkillCard skill={skill} />
                    {/* Tooltip */}
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/skill:opacity-100 transition-all duration-300 z-[100] pointer-events-none">
                      <div className="relative">
                        <div className="bg-[--surface1] px-2 py-1 rounded-lg border border-[--surface2] text-xs font-aldrich text-[--text] whitespace-nowrap z-[150]    ">
                          {skill.title}
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-[--surface1]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[--surface0] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[--surface0] to-transparent pointer-events-none" />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[--surface1] mb-6" />

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