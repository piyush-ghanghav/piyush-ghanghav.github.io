import { motion } from 'framer-motion';
import { useState } from 'react';
import OneCard from "@/components/ui/OneCard"; 



interface ProjectArchitecture {
  frontend: string;
  backend: string;
  database: string;
  aiIntegration: string;
  deployment: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  duration: string;
  inProgress?: boolean;
  learnings?: string[]; 
  architecture?: ProjectArchitecture;
}

const projects: Project[] = [
  {
    title: 'AI Mock Interview Prep',
    description: 'AI-driven platform for interview preparation with resume enhancement and mock interviews. Provides personalized feedback based on job descriptions and industry standards.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80',
    duration: 'Sept 2024 - Dec 2024',
    inProgress: false,
    tags: ['GenAI', 'NextJS', 'PostgreSQL', 'Tailwind', 'Clerk', 'Drizzle ORM', 'Vercel'],
    github: 'https://github.com/piyush-ghanghav/Interview-Assistant',
    demo: 'https://mock-interview-assistant.vercel.app/',
    learnings: [
      'Server-side rendering with Next.js and its impact on SEO optimization',
      'Gemini AI integration mock interview generation',
      'Type-safe database operations using Drizzle ORM with PostgreSQL',
      'Real-time AI feedback systems and prompt engineering techniques',
      'Authentication and authorization using Clerk for secure user management',
      'Data visualization for progress tracking and analytics',
      'Deployment strategies with Vercel'
    ],
    
  },
  {
    title: 'Event Management System',
    description: 'A web application for managing events, including scheduling, registrations, and real-time notifications.',
    image: 'Event-Master.png',
    duration: 'Jul 2024 - Sept 2024',
    inProgress: false,
    tags: ['ReactJS', 'NodeJS', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/piyush-ghanghav/event-management-frontend',
    demo: 'https://event-master-webapp.vercel.app/',
    learnings: [
      'Real-time communication using Socket.IO for instant notifications',
      'State management in React for complex event scheduling interfaces',
      'RESTful API design with Node.js and Express for CRUD operations',
      'MongoDB integration for efficient data storage and retrieval',
      'Event-driven architecture and WebSocket connection handling',
      '* **User registration flows and event capacity management**',
      'Responsive design patterns for event listing and detail views'
    ],
    
  },
  {
    title: 'Training Center API',
    description: 'A system for managing courses, trainers, student enrollments, and performance tracking in training centers.',
    image: 'springboot.png',
    duration: 'Feb 2025',
    inProgress: false,
    tags: ['Spring Boot', 'JPA', 'H2'],
    github: 'https://github.com/piyush-ghanghav/Backend_Traini8_Piyush_Ghanghav',
    learnings: [
      'Spring Boot REST API design and implementation from scratch',
      'Jakarta Bean Validation for enforcing data integrity rules',
      'Modular code structuring with layered architecture',
      'Global exception handling using Spring’s @ControllerAdvice',
      'H2 in-memory database configuration for rapid testing and development',
      'Query parameter filtering, dynamic search functionality in REST controllers',
      'API documentation and clear request/response examples for client integration',
    ],
    
  },
  {
    title: 'Parallel AES Encryption & Decryption',
    description: 'High-performance AES encryption and decryption implementation for secure data transmission. Plans to add a UI for ease of use.',
    image: 'parallel_programming.png',
    duration: 'Oct 2024 - Dec 2024',
    inProgress: false,
    tags: ['C++', 'C', 'OpenMP', 'Cryptography'],
    github: 'https://github.com/piyush-ghanghav/Parallel-AES-Implementation',
    learnings: [
      'Advanced Encryption Standard (AES) algorithm implementation from scratch',
      'Parallel programming concepts using OpenMP for performance optimization',
      'Memory management and optimization techniques in C++',
      'Cryptographic security principles and secure data transmission',
      'Performance benchmarking and profiling parallel algorithms',
      'Thread synchronization and race condition prevention',
      'Low-level system programming and compiler optimizations'
    ],
    
  },
  {
    title: 'Social Media Sentiment Analysis',
    description: 'Social media sentiment analysis tool using ML models (SVM, Decision Tree, Random Forest). Features data preprocessing and visual feedback.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    duration: 'Jan 2024 - Mar 2024',
    tags: ['Python', 'Machine Learning', 'NLP', 'Data Visualization'],
    github: 'https://github.com/piyush-ghanghav/social-media-sentiment-analysis',
    learnings: [
      'Natural Language Processing (NLP) techniques for text preprocessing',
      'Machine Learning model comparison: SVM, Decision Tree, and Random Forest',
      'Feature engineering and text vectorization methods (TF-IDF, Bag of Words)',
      'Model evaluation metrics and cross-validation techniques',
      'Data visualization using matplotlib and seaborn for ML insights',
      'Scikit-learn library for machine learning pipeline development',
      'Handling imbalanced datasets and bias in sentiment classification'
    ],
    
  },
  // {
  //   title: 'Excel Validator',
  //   description: 'Excel file validation system with AngularJS. Reduced data entry errors by 20% and improved user satisfaction.',
  //   image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&q=80',
  //   duration: 'Oct 2023 - Dec 2023',
  //   tags: ['AngularJS', 'JavaScript', 'Excel API'],
  //   github: 'https://github.com/piyush-ghanghav/excel-validator',
  //   learnings: [
  //     'AngularJS framework fundamentals and two-way data binding',
  //     'File upload handling and client-side file processing',
  //     'Excel API integration for reading and validating spreadsheet data',
  //     'Form validation patterns and user input sanitization',
  //     'Error handling and user feedback mechanisms',
  //     'Performance optimization for large file processing',
  //     'User experience design for data entry workflows'
  //   ],
    
  // },
  {
    title: 'VSCode Activity Tracker Extension',
    description: 'A Visual Studio Code extension that tracks coding activity, file switches, and time spent per project, providing insights and productivity analytics directly within the editor.',
    image: 'https://ionic.io/blog/wp-content/uploads/2019/03/vs-code-extensions-for-ionic-devs.png',
    duration: 'May 2025 - Jun 2025',
    inProgress: false,
    tags: ['JavaScript', 'VS Code', 'NodeJS'],
    github: 'https://github.com/piyush-ghanghav/activity-tracker-vscode',
    // demo: 'https://marketplace.visualstudio.com/items?itemName=yourusername.activity-tracker',
    learnings: [
      'Building and publishing a VSCode extension using the official API',
      'Tracking editor events and user activity efficiently',
      'Managing extension state and storing analytics data locally',
      'Creating interactive status bar and command palette integrations',
      'Packaging, testing, and releasing extensions on the VSCode Marketplace'
    ],
    
  },
  {
    title: 'Spanish Flash Card App',
    description: 'A React-based flash card app for learning Spanish vocabulary, featuring dictionary lookup and instant translation for effective language practice.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&q=80',
    duration: 'Mar 2025 - Apr 2025',
    inProgress: false,
    tags: ['ReactJS', 'JavaScript', 'Dictionary API', 'Translation API'],
    github: 'https://github.com/piyush-ghanghav/spanish-vocabulary-trainer',
    // demo: 'https://spanish-flash-card-app.vercel.app/',
    learnings: [
      'Integrating third-party dictionary and translation APIs in React',
      'Building interactive flash card components with state management',
      'Implementing spaced repetition for vocabulary retention',
      'Responsive UI design for mobile and desktop',
      'Handling asynchronous API calls and error states gracefully'
    ]
  },
  {
    title: 'Personal Website',
    description: 'A personal portfolio website to showcase projects, skills, certifications, and experience, built with React, Framer Motion, and Tailwind CSS for a modern, interactive, and responsive user experience.',
    image: '/personal_website_v2.png',
    duration: 'Apr 2024 - Present',
    inProgress: false,
    tags: ['ReactJS', 'TypeScript', 'Framer Motion', 'TailwindCSS', ],
    github: 'https://github.com/piyush-ghanghav/piyush-ghanghav.github.io',
    demo: 'https://piyush-ghanghav.github.io/',
    learnings: [
      'Component-driven development with React and TypeScript',
      'Responsive design and utility-first styling using Tailwind CSS',
      'Smooth animations and transitions with Framer Motion',
      'Deploying and managing static sites on GitHub Pages',
      'Clean and minimalistic UI design'
    ]
  },
  // {
  //   title: 'Personal Website V1',
  //   description: 'A personal portfolio website to showcase projects, skills, certifications, and experience, built with React, Framer Motion, and Tailwind CSS for a modern, interactive, and responsive user experience.',
  //   image: '/personal_website_v1.png',
  //   duration: 'Apr 2024 - Present',
  //   inProgress: false,
  //   tags: ['ReactJS', 'TypeScript', 'Framer Motion', 'TailwindCSS', ],
  //   github: 'https://github.com/piyush-ghanghav/Portfolio',
  //   demo: 'https://piyush-ghanghav.netlify.app/',
  //   learnings: [
  //     'Component-driven development with React and TypeScript',
  //     'Responsive design and utility-first styling using Tailwind CSS',
  //     'Smooth animations and transitions with Framer Motion',
  //     'Deploying and managing static sites on Netlify',
  //     'Clean and minimalistic UI design'
  //   ]
  // }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className=" bg-[--base] px-4 py-8">
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
                
                onClick={() => setSelectedProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                </div>
                <div className="p-4 font-aldrich">
                  <h3 className="text-lg font-semibold text-[--text-color]  text-center">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      {selectedProject && (
        <OneCard
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Projects;