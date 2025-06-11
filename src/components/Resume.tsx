import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Book, Terminal, Database, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto p-8 bg-[--surface0] shadow-lg rounded-xl border border-[--surface1] text-[--text] space-y-8"
    >
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-orbitron font-bold">Piyush Ghanghav</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-aldrich">
          <a href="tel:+919604177859" className="flex items-center gap-2 hover:text-[--blue] transition-colors">
            <Phone className="w-4 h-4" />
            +91 9604177859
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Nashik, Maharashtra, India
          </span>
          <a href="mailto:piyushghanghav@gmail.com" className="flex items-center gap-2 hover:text-[--blue] transition-colors">
            <Mail className="w-4 h-4" />
            piyushghanghav@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a 
            href="https://linkedin.com/in/piyush-ghanghav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[--blue] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a 
            href="https://github.com/piyush-ghanghav" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-[--blue] transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </header>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Book className="w-5 h-5 text-[--blue]" />
          <h2 className="text-xl font-orbitron font-semibold">Profile Summary</h2>
        </div>
        <p className="font-aldrich text-sm leading-relaxed">
          Motivated Computer Engineering student and adept problem solver with a solid understanding of data structures,
          algorithms, SQL, data science, and web development. Enthusiastic about exploring new technologies and highly
          skilled in collaborating within team settings.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-[--blue]" />
          <h2 className="text-xl font-orbitron font-semibold">Education</h2>
        </div>
        <div className="space-y-2 font-aldrich">
          <p className="font-semibold">B.Tech - Computer Engineering with Honours in AIML</p>
          <p className="text-sm">Sanjivani College of Engineering, Kopargaon</p>
          <p className="text-sm text-[--subtext0]">2021 - 2025 • GPA: 8.4</p>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-5 h-5 text-[--blue]" />
          <h2 className="text-xl font-orbitron font-semibold">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-aldrich text-sm">
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Terminal className="w-4 h-4 text-[--green]" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {['C++', 'Python', 'Java', 'C', 'TypeScript', 'JavaScript'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[--surface1] rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-[--yellow]" />
                Databases & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'Git', 'Docker'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[--surface1] rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold mb-2">Frontend & Backend</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'Node.js', 'Spring Boot'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[--surface1] rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Linux', 'VS Code', 'IntelliJ', 'Eclipse'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-[--surface1] rounded-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Resume;