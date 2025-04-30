// import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

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

interface OutletContextType {
  setHideFooter: (value: boolean) => void;
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { setHideFooter } = useOutletContext<OutletContextType>();

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setHideFooter(true);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setHideFooter(false);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
          <Github className="text-blue-600" />
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-gradient-to-br from-white via-white to-blue-50/50 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/50"
    onClick={onClick}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {project.inProgress && (
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-medium">
          In Progress
        </div>
      )}
    </div>
    <div className="p-8">
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors mb-6">
        {project.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map((tag, i) => (
          <span 
            key={i} 
            className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const handleLinkClick = (url: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999]"
    >
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose}
      />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-gradient-to-br from-white via-white to-blue-50/50 backdrop-blur-sm rounded-xl max-w-2xl w-full shadow-xl border border-blue-100/50"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full text-gray-600 hover:text-gray-900 transition-colors shadow-lg"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <span className="text-blue-600 font-medium">{project.duration}</span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <div className="flex gap-4">
                  <button
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors font-medium"
                    onClick={(e) => handleLinkClick(project.github!, e)}
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </button>
                  {project.demo && (
                    <button
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors font-medium"
                      onClick={(e) => handleLinkClick(project.demo!, e)}
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;