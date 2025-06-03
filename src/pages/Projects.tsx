import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  duration: string;
  inProgress?: boolean;
}

const getBadgeUrl = (tag: string) => {
  const badges: { [key: string]: string } = {
    // Frontend
    'ReactJS': 'https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=black',
    'TypeScript': 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white',
    'JavaScript': 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=gray',
    'HTML5': 'https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white',
    'CSS3': 'https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white',
    'TailwindCSS': 'https://img.shields.io/badge/-Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white',
    'AngularJS': 'https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white',
    
    // Backend
    'NodeJS': 'https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white',
    'Express': 'https://img.shields.io/badge/-Express-000000?style=flat&logo=express&logoColor=white',
    'Spring Boot': 'https://img.shields.io/badge/-Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white',
    'JPA': 'https://img.shields.io/badge/-JPA-6DB33F?style=flat&logo=spring&logoColor=white',
    
    // Database
    'MongoDB': 'https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white',
    'PostgreSQL': 'https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white',
    'H2': 'https://img.shields.io/badge/H2%20Database-09476B?logo=h2database&logoColor=fff&style=flat',
    // Languages
    'Python': 'https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white',
    'C++': 'https://img.shields.io/badge/-C++-00599C?style=flat&logo=cplusplus&logoColor=white',
    
    // Tools
    'Socket.IO': 'https://img.shields.io/badge/-Socket.IO-010101?style=flat&logo=socketdotio&logoColor=white',
    'OpenMP': 'https://img.shields.io/badge/-OpenMP-DD6620?style=flat&logo=openmp&logoColor=white',
    
    // AI/ML
    'Machine Learning': 'https://img.shields.io/badge/-Machine_Learning-FF6F00?style=flat&logo=tensorflow&logoColor=white',
    'NLP': 'https://img.shields.io/badge/-NLP-3776AB?style=flat&logo=python&logoColor=white',
    'Data Visualization': 'https://img.shields.io/badge/-Data_Visualization-FF6384?style=flat&logo=chartdotjs&logoColor=white',
  
    'GenAI': 'https://img.shields.io/badge/Google%20Gemini-8E75B2?logo=googlegemini&logoColor=fff&style=flat',
  'NextJS': 'https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white',
  'Tailwind': 'https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white',
  'Clerk': 'https://img.shields.io/badge/-Clerk-3E5DD3?style=flat&logo=clerk&logoColor=white',
  'Drizzle ORM': 'https://img.shields.io/badge/-Drizzle-008080?style=flat&logo=drizzle&logoColor=white',

  };
  return badges[tag] || `https://img.shields.io/badge/-${tag}-gray?style=flat-square`;
}

const projects: Project[] = [
  {
    title: 'AI Mock Interview Prep',
    description: 'AI-driven platform for interview preparation with resume enhancement and mock interviews. Provides personalized feedback based on job descriptions.',
    tags: ['GenAI', 'NextJS', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    github: 'https://github.com/piyush-ghanghav/Interview-Assistant',
    demo: 'https://mock-interview-assistant.vercel.app/',
    inProgress: false,
    duration: 'Sept 2024 - Dec 2024'
  },
  {
    title: 'Event Management System',
    description: 'A web application for managing events, including scheduling, registrations, and real-time notifications.',
    tags: ['ReactJS', 'NodeJS', 'PostgreSQL', 'Socket.IO'],
    image: 'Event-Master.png',
    github: 'https://github.com/piyush-ghanghav/event-management-frontend',
    demo:'https://event-master-webapp.vercel.app/',
    inProgress: false,
    duration: 'Jul 2024 - Sept 2024'
  },
  {
    title: 'Training Center API',
    description: 'A system for managing courses, trainers, student enrollments, and performance tracking in training centers.',
    tags: ['Spring Boot', 'JPA', 'H2'],
    image: 'springboot.png',
    github: 'https://github.com/piyush-ghanghav/Backend_Traini8_Piyush_Ghanghav',
    inProgress: false,
    duration: 'Feb 2025'
  },
  {
    title: 'Parallel AES Encryption & Decryption',
    description: 'High-performance AES encryption and decryption implementation for secure data transmission. Plans to add a UI for ease of use.',
    tags: ['C++', 'OpenMP', 'Cryptography'],
    image: 'parallel_programming.png',
    github: 'https://github.com/piyush-ghanghav/Parallel-AES-Implementation',
    inProgress: false,
    duration: 'Oct 2024 - Dec 2024'
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'Social media sentiment analysis tool using ML models (SVM, Decision Tree, Random Forest). Features data preprocessing and visual feedback.',
    tags: ['Python', 'Machine Learning', 'NLP', 'Data Visualization'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    github: 'https://github.com/piyush-ghanghav/social-media-sentiment-analysis',
    duration: 'Jan 2024 - Mar 2024'
  },
  {
    title: 'WebApp Excel File Validation',
    description: 'Excel file validation system with AngularJS. Reduced data entry errors by 20% and improved user satisfaction.',
    tags: ['AngularJS', 'JavaScript', 'Excel API'],
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80',
    github: 'https://github.com/piyush-ghanghav/excel-validator',
    duration: 'Oct 2023 - Dec 2023'
  },
  
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[--base] px-4 py-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-extrabold font-orbitron mb-6 flex items-center gap-3 text-[--text-color]">
            Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-[--surface0]"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => project.github && window.open(project.github, '_blank')}
              >
                {/* Image Container */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay on Hover */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center p-4 text-center"
                      >
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.1 }}
                          className="text-xl font-bold text-white mb-4"
                        >
                          {project.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.2 }}
                          className="text-gray-200 text-sm leading-relaxed mb-6"
                        >
                          {project.description}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-4"
                        >
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white hover:text-[--blue] transition-colors"
                              onClick={e => e.stopPropagation()}
                            >
                              <Github className="w-5 h-5" />
                              <span>Code</span>
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-white hover:text-[--blue] transition-colors"
                              onClick={e => e.stopPropagation()}
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Demo</span>
                            </a>
                          )}
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Project Info (Always Visible) */}
                <div className="p-4 font-aldrich">
                  <h3 className="text-lg font-semibold text-[--text-color] mb-2">
                    {project.title}
                  </h3>
                  {/* <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-md bg-[--surface1] text-[--text]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div> */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <img
                        key={tag}
                        src={getBadgeUrl(tag)}
                        alt={tag}
                        className="h-5 transition-transform hover:scale-110"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;