import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import type { CodingProfile } from "./types";

const codingProfiles: CodingProfile[] = [
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

export const CodingProfilesSection = () => {
  return (
    <ScrollReveal>
      <section className="mb-16">
        <SectionHeader icon={Code2} title="Coding Profiles" />
        {/* Your existing profile grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {codingProfiles.map((profile) => (
            <motion.a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center gap-4 p-6 bg-[--surface0] rounded-lg">
                <img
                  src={profile.icon}
                  alt={profile.platform}
                  className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all"
                />
                <span className="text-[--text] group-hover:text-[--blue] transition-colors">
                  {profile.platform}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};