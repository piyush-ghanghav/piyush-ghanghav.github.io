import { motion } from "framer-motion";
import type { CodingProfile } from "./types";

export const ProfileBadge = ({ profile, index }: { profile: CodingProfile; index: number }) => (
  <motion.div className="group/profile relative">
    <motion.a
      href={profile.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-105 transition-all duration-300"
      whileHover={{ y: -2 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
    >
      <img
        src={profile.badge}
        alt={profile.platform}
        className="h-8" // Reduced from h-10
        loading="lazy"
      />
    </motion.a>
  </motion.div>
);