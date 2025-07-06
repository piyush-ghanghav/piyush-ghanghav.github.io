import { motion } from "framer-motion";
export interface CodingProfile {
  platform: string;
  link: string;
  badge: string;
}


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
        className="h-8"
        loading="lazy"
      />
    </motion.a>
  </motion.div>
);