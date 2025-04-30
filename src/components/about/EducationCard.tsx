import React from 'react';
import { motion } from 'framer-motion';

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ 
  degree, 
  institution, 
  year, 
  description 
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl"
  >
    <h3 className="text-xl font-semibold text-blue-400">{degree}</h3>
    <p className="text-lg text-gray-300 mt-2">{institution}</p>
    <p className="text-sm text-gray-400 mt-1">{year}</p>
    <p className="text-gray-400 mt-2">{description}</p>
  </motion.div>
);

export default EducationCard;