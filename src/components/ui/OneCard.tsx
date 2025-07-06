import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Github, X, } from 'lucide-react';



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
}


interface OneCardProps {
  onClose?: () => void;
  project: Project;
}

const OneCard = ({ onClose, project }: OneCardProps) => {
  const [isTopHover, setIsTopHover] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const getBadgeUrl = (tag: string) => {
    const badges: { [key: string]: string } = {
      'ReactJS': 'https://img.shields.io/badge/-React-61DAFB?style=flat&logo=react&logoColor=white',
  'TypeScript': 'https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white',
  'JavaScript': 'https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black',
  'HTML5': 'https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white',
  'CSS3': 'https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&logoColor=white',
  'TailwindCSS': 'https://img.shields.io/badge/-Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white',
  'AngularJS': 'https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white',
  'NodeJS': 'https://img.shields.io/badge/-Node.js-339933?style=flat&logo=nodedotjs&logoColor=white',
  'Express': 'https://img.shields.io/badge/-Express-404040?style=flat&logo=express&logoColor=white',
  'Spring Boot': 'https://img.shields.io/badge/-Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white',
  'JPA': 'https://img.shields.io/badge/-JPA-6DB33F?style=flat&logo=spring&logoColor=white',
  'MongoDB': 'https://img.shields.io/badge/-MongoDB-47A248?style=flat&logo=mongodb&logoColor=white',
  'PostgreSQL': 'https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white',
  'H2': 'https://img.shields.io/badge/H2%20Database-005C98?logo=h2database&logoColor=white&style=flat',
  'Python': 'https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=white',
  'C++': 'https://img.shields.io/badge/-C++-00599C?style=flat&logo=cplusplus&logoColor=white',
  'Socket.IO': 'https://img.shields.io/badge/-Socket.IO-25c2a0?style=flat&logo=socketdotio&logoColor=white',
  'OpenMP': 'https://img.shields.io/badge/-OpenMP-358CBB?style=flat&logo=openmp&logoColor=white',
  'Machine Learning': 'https://img.shields.io/badge/-Machine_Learning-FF6F00?style=flat&logo=tensorflow&logoColor=white',
  'NLP': 'https://img.shields.io/badge/-NLP-4A90E2?style=flat&logo=python&logoColor=white',
  'Data Visualization': 'https://img.shields.io/badge/-Data_Visualization-FF6B6B?style=flat&logo=chartdotjs&logoColor=white',
  'GenAI': 'https://img.shields.io/badge/Google%20Gemini-4285F4?logo=googlegemini&logoColor=white&style=flat',
  'NextJS': 'https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white',
  'Tailwind': 'https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white',
  'Clerk': 'https://img.shields.io/badge/-Clerk-6366F1?style=flat&logo=clerk&logoColor=white',
  'Drizzle ORM': 'https://img.shields.io/badge/-Drizzle-0EA5E9?style=flat&logo=drizzle&logoColor=white',
  'Vercel': 'https://img.shields.io/badge/-Vercel-000000?style=flat&logo=vercel&logoColor=white',
  'VS Code': 'https://img.shields.io/badge/-VS%20Code-007ACC?style=flat&logo=visual%20studio%20code&logoColor=white',
  'Postman': 'https://img.shields.io/badge/-Postman-FF6C37?style=flat&logo=postman&logoColor=white',
  'Notion': 'https://img.shields.io/badge/-Notion-000000?style=flat&logo=notion&logoColor=white',
  'Figma': 'https://img.shields.io/badge/-Figma-F24E1E?style=flat&logo=figma&logoColor=white',
  'Canva': 'https://img.shields.io/badge/-Canva-00C4CC?style=flat&logo=canva&logoColor=white',
  'GitHub': 'https://img.shields.io/badge/-GitHub-181717?style=flat&logo=github&logoColor=white',
  'C': 'https://img.shields.io/badge/-C-00599C?style=flat&logo=c&logoColor=white',
};
    return badges[tag] || `https://img.shields.io/badge/-${tag}-gray?style=flat`;
  };

  const CardContent = () => (
    <div className="flex w-full h-full font-aldrich">
      {/* LEFT: */}
      <div className="w-2/4 bg-[--surface1] border-r border-[--surface2] flex flex-col h-full">
        {/* Image */}
        <div className="flex-[8] flex items-center justify-center h-0 min-h-0 p-4">
          <div className="relative w-full h-full rounded-lg overflow-hidden border border-[--surface2]/50 ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-fill rounded-lg hover:scale-105 transition-transform duration-300"
              style={{ 
                objectPosition: 'center top',
                filter: 'contrast(1.05) saturate(1.1)'
              }}
            />
            {/* Subtle overlay for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
            
            
            {project.demo &&<div className="absolute top-2 right-2 w-2 h-2 bg-[--green] rounded-full opacity-70" />}  
          </div>
        </div>
        
        {/* Bottom 20%: Tags & Links */}
        <div className="h-[20%] min-h-[90px] p-4 flex flex-col justify-between gap-2 border-t border-[--surface2]">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map(tag => (
              <span
                key={tag}
                style={{
                  filter: 'brightness(0.92) contrast(0.95) saturate(0.85)',
                  maxHeight: '28px'
                }}
              >
                <img
                  src={getBadgeUrl(tag)}
                  alt={tag}
                  className="h-5 w-auto"
                  title={tag}
                  loading="lazy"
                  style={{ marginRight: 4 }}
                />
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[--surface0] hover:bg-[--surface2] text-[--text] transition-colors"
                title="GitHub"
              >
                <Github />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[--surface0] hover:bg-[--surface2] text-[--text] transition-colors"
                title="Live Demo"
              >
                <Link className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Info panel */}
      <div className="w-2/4 bg-[--surface0] p-8 flex flex-col justify-between relative overflow-y-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-orbitron font-bold text-[--text-color] mb-2">{project.title}</h2>
          <div className="flex items-center gap-2 text-sm text-[--subtext0] mb-2">
            <span>{project.duration}</span>
            {project.inProgress && (
              <span className="ml-2 px-2 py-0.5 bg-[--yellow] text-[--surface0] rounded-full text-xs font-bold">In Progress</span>
            )}
          </div>
          <div className="bg-[--surface1] border-l-4 border-[--red] px-4 py-3 rounded mb-2">
            <h3 className="text-xs font-semibold text-[--red] mb-1">Description</h3>
            <p className="text-sm text-[--text-color]">{project.description}</p>
          </div>

          {/* Learnings Section */}
          {project.learnings && Array.isArray(project.learnings) && project.learnings.length > 0 && (
            <div className="mb-4">
              <div className="bg-[--surface1] border-l-4 border-[--yellow] px-4 py-3 rounded">
              <h3 className="text-xs font-semibold text-[--yellow] mb-1">Learnings</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-[--subtext0]">
                  {project.learnings.map((learning, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: learning }} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        background: 'radial-gradient( rgba(0,0,0,0.5))'
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-8"
      onClick={(e) => {
        if (e.target === e.currentTarget && onClose) {
          onClose();
        }
      }}
      onMouseMove={(e) => {
        const element = e.currentTarget;
        const rect = element.getBoundingClientRect();
        element.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        element.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        const topThreshold = rect.top + 50;
        setIsTopHover(e.clientY <= topThreshold);
      }}
      onMouseLeave={() => {
        setIsTopHover(false);
      }}
    >
      {/* X */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isTopHover ? 1 : 0,
          y: isTopHover ? 0 : -20
        }}
        onClick={() => onClose?.()}
        className="absolute left-1/2 -translate-x-1/2 top-6 bg-white/10 p-1
         rounded-full text-white cursor-pointer text-sm flex items-center justify-center z-50"
      >
        <X className="w-8 h-8" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{
          scale: 1,
          y: isTopHover ? 16 : 0
        }}
        transition={{ duration: 0.2 }}
        className="w-[90vw] h-[80vh] rounded-xl overflow-hidden"
      >
        <CardContent />
      </motion.div>
    </motion.div>
  );
};

export default OneCard;