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
  inProgress?: boolean;
  duration: string;
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
    <div className="min-h-screen bg-[--base] px-4 py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 text-[--text]">
            <Github className="text-[--blue]" />
            My Projects
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
                <div className="relative w-full h-48 overflow-hidden">
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
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[--text] mb-2">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-md bg-[--surface1] text-[--text]"
                      >
                        {tag}
                      </span>
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