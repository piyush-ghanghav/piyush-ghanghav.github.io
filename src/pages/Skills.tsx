import { motion } from 'framer-motion';
import { Code, Terminal, Globe, Database, Wrench } from 'lucide-react';
import IconCloud from "../components/ui/icon-cloud";

const iconSlugs = [
  // Programming Languages
  "python",
  "javascript",
  "typescript",
  "java",
  "cplusplus",
  "c",
  
  // Web Technologies
  "react",
  "nodedotjs",
  "express",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  
  // Databases
  "mongodb",
  "mysql",
  "postgresql",
  "firebase",
  
  // DevOps & Tools
  "git",
  "docker",
  "amazonaws",
  "linux",
  "visualstudiocode",
  "postman",
  
  // Additional Technologies
  "nextdotjs",
  "prisma",
  "vercel",
  "netlify"
];

const Skills = () => {
  const skillCategories = [
    {
      "title": "Programming Languages",
      "icon": <Terminal className='text-blue-600' />,
      "skills": [
        { "name": "Python", "icon": "python" },
        { "name": "JavaScript", "icon": "js" },
        { "name": "TypeScript", "icon": "typescript" },
        { "name": "Java", "icon": "java" },
        { "name": "C++", "icon": "cpp" },
        { "name": "C", "icon": "c" }
      ]
    },
    {
      "title": "Web Technologies",
      "icon": <Globe className='text-blue-600' />,
      "skills": [
        { "name": "React.js", "icon": "react" },
        { "name": "NextJS", "icon": "next" },
        { "name": "Node.js", "icon": "nodejs" },
        { "name": "Express.js", "icon": "express" },
        { "name": "HTML5", "icon": "html" },
        { "name": "CSS3", "icon": "css" },
        { "name": "Tailwind CSS", "icon": "tailwind" },
        { "name": "Bootstrap", "icon": "bootstrap" }
      ]
    },
    {
      "title": "Databases ",
      "icon": <Database className='text-blue-600' />,
      "skills": [
        { "name": "MongoDB", "icon": "mongodb" },
        { "name": "MySQL", "icon": "mysql" },
        { "name": "PostgreSQL", "icon": "postgresql" },
        // { "name": "Firebase", "icon": "firebase" },
        // { "name": "GraphQL", "icon": "graphql" }
      ]
    },
    {
      "title": "DevOps & Tools",
      "icon": <Wrench className='text-blue-600' />,
      "skills": [
        { "name": "Git", "icon": "git" },
        { "name": "Docker", "icon": "docker" },
        { "name": "AWS", "icon": "aws" },
        { "name": "Linux", "icon": "linux" },
        { "name": "VS Code", "icon": "vscode" },
        { "name": "Postman", "icon": "postman" }
      ]
    }
  ];
  

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 text-gray-900">
          <Code className="text-blue-600" />
          Technical Skills
        </h2>

        {/* Interactive Icon Cloud Section */}
        <motion.div
          initial={{ opacity: 1, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-16 relative group overflow-hidden rounded-xl"
        >
          {/* Gradient Background with Animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          
          {/* Interactive Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-radial from-blue-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
          
          {/* Glass Effect Container */}
          <div className="relative backdrop-blur-sm bg-white/30 p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="h-[500px] w-full flex items-center justify-center">
              <IconCloud iconSlugs={iconSlugs} />
            </div>
          </div>
        </motion.div>

        {/* Detailed Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/30 hover:border-blue-200/50"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group/skill relative"
                  >
                    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100/30 hover:border-blue-200/50 group-hover/skill:bg-blue-50/50">
                      <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-10 h-10 transition-transform duration-300 group-hover/skill:scale-110"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 opacity-0 group-hover/skill:opacity-100 transition-all duration-200 z-20">
                      <div className="relative">
                        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-2 bg-gray-900 text-white py-1 px-2 rounded-md text-xs font-medium text-center shadow-lg whitespace-nowrap">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;