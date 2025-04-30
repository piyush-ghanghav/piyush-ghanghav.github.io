import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ icon, title, skills }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
  >
    <div className="flex items-center gap-3 mb-4">
      <span className="text-blue-400">{icon}</span>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default SkillCategory;