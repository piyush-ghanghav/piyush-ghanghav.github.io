import { motion } from 'framer-motion';
import { Briefcase, Sparkles, Code2, User, ChevronRight} from 'lucide-react';
import { BorderBeam } from "@/components/ui/border-beam";
import ResumeDownload from '../components/resume/ResumeDownload';

const About = () => {
  const funFacts = [
    {
      fact: "Avid Chess Player",
      link: {
        url: "https://www.chess.com/member/therooooksgambit",
        text: "Chess.com Profile"
      }
    },
    {
      fact: "Photography Enthusiast",
      description: "Capture moments through my lens during travels and nature walks"
    },
    {
      fact: "Fitness Freak",
      description: "Regular gym-goer and believe in maintaining a healthy work-life balance"
    },
    {
      fact: "Book Worm",
      description: "Love reading non-fiction and technical books in my free time."
    },
    {
      fact: "Coding Enthusiast",
      description: "Passionate about solving complex problems and building innovative solutions",
    },
    {
      fact: " Football Fanatic ⚽ (Forca Barca!)",
      description: "Passionate about watching, analyzing matches, and staying updated with Football."
    },
    
    {
      fact: "Tech Explorer",
      description: "Continuously learning new technologies for professional growth"
    }
  ];
  
  const codingProfiles = [
    {
      platform: "LeetCode",
      link: "https://leetcode.com/piyushghanghav",
      icon: "https://leetcode.com/static/images/LeetCode_logo_rvs.png"
    },
    {
      platform: "CodeChef",
      link: "https://www.codechef.com/users/piyushghanghav",
      icon: "https://cdn.codechef.com/images/cc-logo.svg"
    },
    {
      platform: "HackerRank",
      link: "https://www.hackerrank.com/piyushghanghav",
      icon: "https://www.hackerrank.com/wp-content/uploads/2018/08/hackerrank_logo.png"
    },
    {
      platform: "GeeksforGeeks",
      link: "https://www.geeksforgeeks.org/user/piyushghanghav10/",
      icon: "https://media.geeksforgeeks.org/gfg-gg-logo.svg"
    }
  ];

  const experiences = [
    {
      title: "Semi-Finalist",
      company: "Tata Innovation Challenge",
      duration: "Nov 23 - Mar 23",
      location: "India",
      highlights: [
        "IDENTIFICATION OF FLOOD PRONE AREA IN URBAN SETTLEMENTS (Machine Learning Based Approach)",
        "Concept Solution, Abstract Shortlisting, Technical Presentation, POC Demonstration"
      ],
      technologies: ["Machine Learning", "Python", "Data Analysis", "GIS"]
    },
    {
      title: "Web Development Intern",
      company: "Oasis Infobyte",
      duration: "Aug 23 - Sept 23", 
      location: "Remote",
      highlights: [
        "Developed responsive web applications using modern technologies and best practices",
        "Implemented user authentication, API integration, and database management"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        {/* Hero Section with Improved Layout */}
        <section className="relative mb-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-blue-50/30">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]" />
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Piyush Ghanghav
              </h1>
              <div className="text-gray-600 space-y-2">
                <p className="flex items-center justify-center gap-2 text-sm md:text-base">
                  <span>+91 9604177859</span>
                  <span className="w-1 h-1 rounded-full bg-gray-400" />
                  <span>Nashik, India</span>
                </p>
                <a 
                  href="mailto:piyushghanghav@gmail.com" 
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300"
                >
                  <span>piyushghanghav@gmail.com</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section with Modern Card Design */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <User className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">About Me</h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-white via-white to-blue-50/50 backdrop-blur-sm p-6 md:p-8 rounded-2xl transition-all duration-300 border border-blue-100/50 hover:shadow-xl">
              <BorderBeam className="z-0" />
              <div className="relative z-10 prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  I am a passionate Software Developer with a strong foundation in Computer Science and Engineering. 
                  Currently pursuing my B.Tech from Sanjivani College of Engineering, Kopargaon, 
                  I specialize in Full Stack Development and have a keen interest in Machine Learning.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  My technical journey is driven by a desire to create impactful solutions that solve real-world problems. 
                  I enjoy working with modern technologies and am always eager to learn and adapt to new challenges. 
                  Whether it's building web applications or implementing machine learning models, 
                  I approach each project with enthusiasm and attention to detail.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  {['Full Stack Development', 'Machine Learning', 'Problem Solving', 'Data Structures', 'Algorithms'].map((skill) => (
                    <span 
                      key={skill} 
                      className="px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section with Card Hover Effects */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 p-6 md:p-8 rounded-2xl transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/30 hover:border-blue-200/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                      <span className="text-sm">{exp.duration}</span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  {exp.highlights && (
                    <div className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coding Profiles Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Coding Profiles</h2>
          </div>
          
          {/* Mobile Carousel for Coding Profiles */}
          <div className="relative md:hidden">
            <div className="overflow-x-auto pb-6"> {/* Added padding-bottom */}
              <div 
                className="flex space-x-4 px-4" // Changed to horizontal scrolling with spacing
                style={{ width: 'max-content' }} // Allow natural content width
              >
                {codingProfiles.map((profile) => (
                  <motion.a
                    key={profile.platform}
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[280px] flex-shrink-0" // Fixed width for cards
                  >
                    <div className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                      p-6 rounded-xl transition-all duration-300 
                      flex flex-col items-center gap-4
                      shadow-sm hover:shadow-lg 
                      border border-blue-100/30 hover:border-blue-200/50
                      min-h-[180px] justify-center"
                    >
                      <img 
                        src={profile.icon} 
                        alt={profile.platform} 
                        className="h-12 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                      />
                      <span className="text-gray-600 group-hover:text-blue-700 transition-all duration-300 font-medium text-base">
                        {profile.platform}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Desktop Grid - remains unchanged */}
          <div className="hidden md:grid md:grid-cols-4 gap-4">
            {codingProfiles.map((profile) => (
              <motion.a
                key={profile.platform}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                  p-6 rounded-xl transition-all duration-300 
                  flex flex-col items-center gap-3 
                  shadow-sm hover:shadow-lg 
                  border border-blue-100/30 hover:border-blue-200/50"
              >
                <img 
                  src={profile.icon} 
                  alt={profile.platform} 
                  className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                />
                <span className="text-gray-600 group-hover:text-blue-700 transition-all duration-300 font-medium">
                  {profile.platform}
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Fun Facts with Horizontal Scroll on Mobile */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="text-blue-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Bits of My Life</h2>
          </div>

          {/* Mobile Layout for Fun Facts */}
          <div className="relative md:hidden">
            <div className="overflow-x-auto pb-6"> {/* Added padding-bottom */}
              <div 
                className="flex space-x-4 px-4" // Changed to horizontal scrolling with spacing
                style={{ width: 'max-content' }} // Allow natural content width
              >
                {funFacts.map((item, index) => (
                  <motion.div
                    key={index}
                    className="w-[300px] flex-shrink-0" // Fixed width for cards
                  >
                    <div className="group bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 
                      p-6 rounded-xl transition-all duration-300 
                      shadow-md hover:shadow-xl 
                      border border-blue-100/30 hover:border-blue-200/50
                      min-h-[200px] flex flex-col justify-between"
                    >
                      <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-700 transition-all duration-300">
                        {item.fact}
                      </h3>
                      <div>
                        <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300 mb-4">
                          {item.description}
                        </p>
                        {item.link && (
                          <a 
                            href={item.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.link.text}
                            <ChevronRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {funFacts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50 p-6 md:p-8 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl border border-blue-100/30 hover:border-blue-200/50"
              >
                <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center gap-2 group-hover:text-blue-700 transition-all duration-300">
                  {item.fact}
                  {item.link && (
                    <a 
                      href={item.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {item.link.text}
                    </a>
                  )}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-all duration-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </motion.div>

      {/* Floating Resume Download Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <ResumeDownload />
      </div>
    </div>
  );
};

export default About;
