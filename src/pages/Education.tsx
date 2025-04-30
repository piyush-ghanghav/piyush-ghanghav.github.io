import { useState } from 'react';
import { GraduationCap, Award, MapPin, BookOpen, Trophy, Star, ChevronRight, ChevronLeft, Lightbulb} from 'lucide-react';
import { motion } from 'framer-motion';
import styles from '../styles/Education.module.css';

interface EducationCardProps {
  period: string;
  degree: string;
  specialization: string;
  institution: string;
  location: string;
  grade: string;
  achievements: string[];
  learnings: string[];
  isLeft: boolean;
  description: string;
}

interface Education extends Omit<EducationCardProps, 'isLeft'> {}

// Update EducationCard component to be responsive
function EducationCard({
  period,
  degree,
  specialization,
  institution,
  location,
  grade,
  achievements,
  learnings,
  isLeft,
  description
}: EducationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardStyle = {
    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    transition: 'transform 0.6s ease-in-out',
    transformStyle: 'preserve-3d' as const
  };

  const frontStyle = {
    backfaceVisibility: 'hidden' as const,
    transform: 'rotateY(0deg)',
    position: 'absolute' as const,
    width: '100%',
    height: '100%'
  };

  const backStyle = {
    backfaceVisibility: 'hidden' as const,
    transform: 'rotateY(180deg)',
    position: 'absolute' as const,
    width: '100%',
    height: '100%'
  };

  return (
    <div className="relative mb-24 md:mb-48">
      {/* Timeline line - Hide on mobile, show on desktop */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-[calc(100%+4rem)] z-0">
        <div className="w-0.5 h-full bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-4 border-white shadow-lg z-20">
              <GraduationCap className="w-6 h-6 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="absolute w-20 h-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-full h-full rounded-full bg-blue-400 animate-ping opacity-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout - Stack vertically */}
      <div className="md:hidden space-y-6">
        {/* Card */}
        <div className={`${styles.cardContainer} ${isFlipped ? styles.flipped : ''}`}>
          <motion.div
            className="relative w-full h-full"
            style={cardStyle}
          >
            {/* Front Side */}
            <div style={{
              ...frontStyle,
              backgroundColor: 'white', // Add this
              borderRadius: '0.75rem', // Add this
            }}>
              <div className="relative p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
                <div className="mb-6">
                  <span className="text-blue-600 font-medium text-sm tracking-wider">{period}</span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">{degree}</h3>
                  <p className="text-blue-600 mt-1">{specialization}</p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-semibold text-gray-800">{institution}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-600">{location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{grade}</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsFlipped(true)}
                  className="mt-6 w-full group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 
                    px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="text-blue-700 font-medium">View Details</span>
                  <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Back Side */}
            <div style={{
              ...backStyle,
              backgroundColor: 'white', // Add this
              borderRadius: '0.75rem', // Add this
              height: 'auto', // Add this
              minHeight: '100%', // Add this
            }}>
              <div className="p-4 pt-0 space-y-3">
                <div className="bg-blue-100/50 rounded-xl p-6 pt-2  space-y-3">
                  <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-blue-600" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-100/50 rounded-xl p-6 pt-2 space-y-3">
                  <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    Key Learnings
                  </h4>
                  <ul className="space-y-3">
                    {learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setIsFlipped(false)}
                  className="mt-6 w-full group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 
                    px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:-translate-x-1" />
                  <span className="text-blue-700 font-medium">Back to Overview</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description Card for Mobile - Update z-index */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-0 bg-gradient-to-br from-blue-50 to-blue-100/30 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50"
        >
          <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2 pb-3">
            <Lightbulb className="w-5 h-5 text-blue-600" />
            Academic Insights:
          </h4>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </motion.div>
      </div>

      {/* Desktop layout - Side by side */}
      <div className={`hidden md:flex items-stretch gap-12 ${isLeft ? 'flex-row' : 'flex-row-reverse'} relative z-10`}>
        <div className={`w-1/2 ${isLeft ? 'pr-16' : 'pl-16'}`}>
          <div className={styles.cardContainer}>
            <motion.div
              className="relative w-full h-full"
              style={cardStyle}
            >
              {/* Front Side */}
              <div style={frontStyle}>
                <div className="relative p-8">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />
                  <div className="mb-6">
                    <span className="text-blue-600 font-medium text-sm tracking-wider">{period}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">{degree}</h3>
                    <p className="text-blue-600 mt-1">{specialization}</p>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span className="text-lg font-semibold text-gray-800">{institution}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-600">{location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700 font-medium">{grade}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsFlipped(true)}
                    className="mt-6 w-full group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 
                      px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span className="text-blue-700 font-medium">View Details</span>
                    <ChevronRight className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Back Side */}
              <div style={backStyle}>
                <div className="p-4 pt-0 space-y-3">
                  <div className="bg-blue-100/50 rounded-xl p-6 pt-2  space-y-3">
                    <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-blue-600" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-100/50 rounded-xl p-6 pt-2 space-y-3">
                    <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      Key Learnings
                    </h4>
                    <ul className="space-y-3">
                      {learnings.map((learning, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <ChevronRight className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => setIsFlipped(false)}
                    className="mt-6 w-full group bg-gradient-to-r from-blue-50 to-blue-100/50 hover:from-blue-100 hover:to-blue-200/50 
                      px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ChevronLeft className="w-4 h-4 text-blue-600 transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="text-blue-700 font-medium">Back to Overview</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: isLeft ? 50 : -50  }}
            animate={{ opacity: 1, scale: 1,x: isLeft ? 50 : -50  }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100/30 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100/50"
          >
            <h4 className="text-lg font-semibold text-blue-900 flex items-center gap-2 pb-3">
                      <Lightbulb className="w-5 h-5 text-blue-600" />
                      Academic Insights:
                    </h4>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Update Education component header to be responsive
function Education() {
  const educationData: Education[] = [
    {
      period: "2021 - 2025",
      degree: "Bachelor of Technology",
      specialization: "Computer Science and Engineering",
      institution: "Sanjivani College of Engineering",
      location: "Kopargaon, Maharashtra",
      grade: "8.5 CGPA",
      description: "Currently pursuing B.Tech with a focus on cutting-edge technologies and practical implementation. Actively participating in research projects and maintaining academic excellence. Developed strong problem-solving abilities through hands-on experience with various programming languages and frameworks. Contributing to college technical events and staying updated with emerging technologies.",
      achievements: [
        "Secured Elite certification in NPTEL courses",
        "Published research paper on ML applications",
      ],
      learnings: [
        "Full Stack Development (MERN)",
        "Data Structures & Algorithms",
        "Machine Learning & AI",
        "Cloud Computing & DevOps"
      ]
    },
    {
      period: "2019 - 2021",
      degree: "Higher Secondary Certificate (HSC)",
      specialization: "Science",
      institution: "Mahavir Junior College",
      location: "Lasalgaon, Maharashtra",
      grade: "93.83%",
      description: "Completed HSC with distinction, focusing on Physics, Chemistry, and Mathematics. The rigorous curriculum helped develop analytical thinking and problem-solving abilities. Participated actively in science exhibitions and mathematics competitions, laying a strong foundation for engineering studies.",
      achievements: [
        "Secured 93.83% in Board Examinations",
      ],
      learnings: [
        "Advanced Mathematics & Physics",
        "Analytical Problem Solving",
        "Scientific Research Methods"
      ]
    },
    {
      period: "2018 - 2019",
      degree: "Secondary School Certificate (SSC)",
      specialization: "General",
      institution: "Loknete Dattaji Patil Vidyalaya",
      location: "Lasalgaon, Maharashtra",
      grade: "89.20%",
      description: "Completed SSC with distinction, developing strong fundamentals in science and mathematics. Balanced academics with leadership roles and extracurricular activities. Active participation in mathematics competitions fostered logical thinking and problem-solving skills.",
      achievements: [
        "Academic Excellence Award",
        "First Prize in District Mathematics Competition",
        "Student Council Leader"
      ],
      learnings: [
        "Fundamental Mathematics & Science",
        "Time Management & Leadership",
        "Effective Communication Skills"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100/50">
      <div className="container mx-auto px-4 md:px-6 py-7">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Educational Journey
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700/80 max-w-2xl mx-auto font-medium px-4">
            Building expertise through continuous learning and academic excellence
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto relative">
          {educationData.map((education, index) => (
            <EducationCard 
              key={index}
              {...education}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;