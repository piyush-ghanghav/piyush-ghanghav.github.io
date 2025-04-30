import { useState, useEffect, useMemo, useCallback } from "react";
import {
  Award,
  X,
  Calendar,
  Building2,
  Badge,
  ExternalLink,
  GraduationCap,
  Search,
  SortAsc,
  SortDesc,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


interface Certificate {
  title: string;
  organization: string;
  date: string;
  skills: string[];
  link: string;
  description: string;
  instructor: string;
  duration: string | null;
  grade: string;
  certImage: string; // Add this field
  // thumbnail?: string;
  projects?: string[];
}

interface CertificateCardProps {
  cert: Certificate;
  index: number;
  onClick: () => void;
}

// Update certificate card component with proper typing
const CertificateCard = ({ cert, index, onClick }: CertificateCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    onClick={onClick}
    className="group cursor-pointer bg-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl border border-blue-100 hover:border-blue-300 overflow-hidden"
  >
    <div className="h-20 flex">
  {/* Left side with blue background and graduation cap */}
  <div className="w-full bg-gradient-to-br from-blue-600 to-blue-400 p-6 flex items-center">
    <GraduationCap className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform duration-300" />
  </div>

  
</div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2  transition-colors line-clamp-2">
        {cert.title}
      </h3>
      <p className="text-blue-600 font-medium mb-3">{cert.organization}</p>
      <div className="flex items-center text-gray-500 text-sm mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        {cert.date}
      </div>
      <div className="flex flex-wrap gap-2">
        {cert.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
        {cert.skills.length > 3 && (
          <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
            +{cert.skills.length - 3} more
          </span>
        )}
      </div>
    </div>
  </motion.div>
);

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOrg, setFilterOrg] = useState("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isLoading, setIsLoading] = useState(true);
  // const [currentIndex, setCurrentIndex] = useState<number>(0);

  const certificates = useMemo(
    () => [
      {
        title: "Business Intelligence & Analytics",
        organization: "NPTEL - IIT Madras",
        date: "Jan-Apr 2024",
        skills: [
          "Data Analysis",
          "Data Mining",
          "Text Mining",
        ],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064805/02_IIOT_gyakon.jpg",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs65/Course/NPTEL24CS65S95990001130628650.pdf",
        description:
          "Comprehensive course covering advanced business intelligence concepts and analytical techniques. Learned to apply various data mining algorithms and create actionable insights from complex datasets.",
        instructor: "Prof Devendra Jalihal",
        duration: "12 weeks",
        grade: "Elite",
      },
      {
        title: "Introduction to Industry 4.0 and Industrial Internet of Things",
        organization: "NPTEL - IIT Kharagpur",
        date: "Jul-Oct 2024",
        skills: ["IIOT", "Automation", "Smart Mfg."],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064805/02_IIOT_gyakon.jpg",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs95/Course/NPTEL24CS95S36720002804195000.pdf",
        description:
        "Explored cutting-edge concepts of Industry 4.0 and the Industrial Internet of Things, focusing on automation and smart manufacturing technologies.",
        instructor: "Prof Haimanti Banerji",
        duration: "12 weeks",
        grade: "Elite",
      },
      {
        title: "Project Management",
        organization: "NPTEL - IIT Kanpur",
        date: "Jul-Sep 2024",
        skills: [
          "Collaboration",
          "Risk Management",
          "Leadership",
          "Scheduling",
          "Decision Analysis",
        ],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/03_Project_Management_no32it.jpg",
        link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/110/noc24-mg75/Course/NPTEL24MG75S43940015102717491.pdf",
        description:
        "Developed strong project management skills, including leadership, scheduling, risk management, and effective decision-making.",
        instructor: "Prof. Satyaki Roy",
        duration: "8 weeks",
        grade: "Elite",
      },
      {
        title: "Introduction to Cloud Computing",
        organization: "IBM - Coursera",
        date: "Nov 2023",
        skills: [
          "Cloud Computing",
          "Hybrid Multicloud",
          "DevOps",
          "IaaS PaaS SaaS",
          "Cloud Native",
        ],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064757/04_Coursera_Cloud_Computing_rfakpx.jpg",
        link: "https://coursera.org/verify/BUGD3BF6RJ72",
        description:
        "Introduction to core cloud computing concepts, hybrid multicloud strategies, and DevOps practices.",
        instructor: "IBM Cloud Team",
        duration: "6 weeks",
        grade: "Verified Certificate",
        projects: [
          "Hybrid Multicloud Design",
          "Cloud-Native Application Deployment",
        ],
      },
      {
        title: "Linear Algebra for Machine Learning and Data Science",
        organization: "DeepLearning.AI - Coursera",
        date: "Dec 2023",
        skills: [
          "Linear Algebra",
          "Machine Learning",
          "Mathematics",
          "Data Science",
        ],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064765/05_Linear_Algebra_gjv6za.jpg",
        link: "https://coursera.org/verify/RJRG9VYAKGE9",
        description:
        "Learned advanced linear algebra concepts essential for machine learning and data science applications.",
        instructor: "Dr. Andrew Ng",
        duration: "4 weeks",
        grade: "Verified Certificate",
        projects: [
          "Matrix Transformations for Image Processing",
          "Dimensionality Reduction Techniques",
        ],
      },
      {
        title: "Python-Introduction to Data Science and Machine learning A-Z",
        organization: "Udemy",
        date: "April 23, 2024",
        skills: ["Python", "Data Science", "Machine Learning"],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064762/06_Python_ML_DS_mc9zro.jpg",
        link: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064762/06_Python_ML_DS_mc9zro.jpg",
        description:
        "Introduction to Data Science and Machine Learning using Python.",
        instructor: "Yassin Marco",
        duration: "7.5 hours",
        grade: "Certificate of Completion",
        projects: [],
      },
      {
        "title": "AWS Academy Graduate - AWS Academy Cloud Foundations",
        "organization": "AWS Academy",
        "date": "November 30, 2023",
        "skills": ["Cloud Computing", "AWS Cloud Foundations"],
        "certImage": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064764/07_AWS_Academy_Cloud_Foundations_o13t0b.jpg",
        "link": "https://www.credly.com/go/f3PqSvS0",
        "description": "Completed the AWS Academy Cloud Foundations course, gaining foundational knowledge of AWS cloud services and concepts.",
        "instructor": "AWS Academy", 
        "duration": "20 hours",
        "grade": "Certificate of Completion",
        "projects": [] 
      },
      {
        title: "Building Databases with Redis",
        organization: "Infosys Springboard",
        date: "May 1, 2023",
        skills: ["Database Management", "Redis", "Data Storage", "Caching"],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/08_Building_database_with_REDIS_tfm6uw.jpg",
        link: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/08_Building_database_with_REDIS_tfm6uw.jpg",
        description:
        "Learned fundamental and advanced concepts of Redis for database management and optimization.",
        instructor: "Infosys Training Team",
        duration: "Self-paced",
        grade: "Verified Certificate",
        projects: [
          "Building a Key-Value Store with Redis",
          "Optimizing Data Retrieval with Caching",
        ],
      },
      {
        title: "Entrepreneurship Course",
        organization: "Infosys Springboard",
        date: "April 24, 2024",
        skills: [
          "Entrepreneurship",
          "Business Strategy",
          "Innovation",
          "Leadership",
        ],
        certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/09_EDP_fbc4mq.jpg",
        link: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064773/09_EDP_fbc4mq.jpg",
        description:
          "Gained insights into business strategy, startup management, and entrepreneurial leadership.",
        instructor: "Infosys Training Team",
        duration: "Self-paced",
        grade: "Verified Certificate",
        projects: [],
      },
      {
        "title": "Linux Shell Programming for Beginners",
        "organization": "Infosys Springboard",
        "date": "May 5, 2023",
        "skills": ["Linux", "Shell Scripting", "Programming"],
        "certImage": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/10_Linux_shell_Programming_w2uimp.jpg",
        "link": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/10_Linux_shell_Programming_w2uimp.jpg",
        "description": "Successfully completed the course on Linux Shell Programming for Beginners.",
        "instructor": "Infosys Training Team",
        "duration": "Self-paced", 
        "grade": "Course Completion Certificate",
        "projects": [] 
    },
    {
      title: "Software Engineering and ALM",
      organization: "Infosys Springboard",
      date: "May 20, 2023",
      skills: [
        "Software Engineering",
        "ALM",
      ],
      certImage: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064778/11_Software_Engineering_heivtb.jpg",
      link: "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064778/11_Software_Engineering_heivtb.jpg",
      description:
      "Completed a comprehensive course on software engineering principles and application lifecycle management.",
      instructor: "Infosys Training Team",
      duration: "Self-paced",
      grade: "Verified Certificate",
      projects: [
          "Software Development Lifecycle Implementation",
          "Agile and DevOps Practices",
        ],
      },
      {
        "title": "Career Edge - Young Professional",
        "organization": "TCS iON",
        "date": "September 19, 2023",
        "skills": [
          "Professional Skills", "Administrative Skills", 
        ],
        "certImage":"https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/14_TCS_iON_g0nlfq.jpg",
        "link": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064782/14_TCS_iON_g0nlfq.jpg",  
        "description": "Successfully completed the TCS iON Career Edge Young Professional course covering various professional skills.",
        "instructor": "Mehul Mehta",
        "duration": "Sept 5, 2023 - Sept 19, 2023",
        "grade": "Certificate of Achievement",
        "projects": []
      },
    {
      "title": "C++ And PHP Complete Course 2023",
      "organization": "Udemy",
      "date": "April 24, 2024",
      "skills": ["C++", "PHP", "Programming"],
      "certImage":"https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064780/12_C__And_PHP_fwbdjz.jpg",
      "link": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064780/12_C__And_PHP_fwbdjz.jpg",
      "description": "Completed a course covering both C++ and PHP programming languages.",
      "instructor": "Krish valley",
      "duration": "4.5 hours",
      "grade": "Certificate of Completion",
      "projects": []
    },
    {
    "title": "JavaScript for Beginners - The Complete Introduction to JS",
    "organization": "Udemy",
    "date": "April 24, 2024",
    "skills": ["JavaScript", "Programming"],
    "certImage":"https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/13_JavaScript_for_Beginners_usprta.jpg",
    "link": "https://res.cloudinary.com/dcbkgt3a1/image/upload/v1741064789/13_JavaScript_for_Beginners_usprta.jpg",
    "description": "Completed a comprehensive introductory course to JavaScript.",
    "instructor": "Yassin Marco",
    "duration": "4 hours",
    "grade": "Certificate of Completion",
    "projects": []
},

    ],
    []
  ); // Empty dependency array since certificates are static

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading certificates:', error);
        setIsLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const organizations = [
    "all",
    ...new Set(certificates.map((cert) => cert.organization)),
  ];

  const filteredCertificates = useMemo(() => {
    return certificates
      .filter((cert) => {
        const matchesSearch =
          cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cert.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          );
        const matchesOrg =
          filterOrg === "all" || cert.organization === filterOrg;
        return matchesSearch && matchesOrg;
      })
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });
  }, [certificates, searchTerm, filterOrg, sortOrder]);

  const handleNavigation = useCallback((direction: 'prev' | 'next') => {
    if (!selectedCert) return;
    
    const currentIndex = certificates.findIndex(cert => cert.title === selectedCert.title);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex > 0 ? currentIndex - 1 : certificates.length - 1)
      : (currentIndex < certificates.length - 1 ? currentIndex + 1 : 0);
    
    setSelectedCert(certificates[newIndex]);
  }, [selectedCert, certificates]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedCert) return;
      
      if (e.key === 'ArrowLeft') {
        handleNavigation('prev');
      } else if (e.key === 'ArrowRight') {
        handleNavigation('next');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleNavigation, selectedCert]);

  const LoadingCard = () => (
    <div className="bg-white rounded-xl shadow-lg border border-blue-100 overflow-hidden">
      <div className="h-40 bg-gradient-to-br from-blue-100 to-blue-50 animate-pulse" />
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
        <div className="flex gap-2">
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  );

  const CertificatePreview = ({ cert }: { cert: Certificate }) => (
    <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-50 via-gray-100 to-gray-200 p-6 rounded-xl shadow-2xl hover:shadow-gray-400/20 transition-all duration-300">
      {/* Certificate Image Section */}
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-sm h-auto overflow-hidden rounded-lg bg-white/10 p-3 transform hover:-translate-y-1 transition-all duration-300">
          <img
            src={cert.certImage || "certificates/00_default.jpeg"}
            alt="Certificate Preview"
            className="w-full max-h-72 object-contain rounded-lg transform transition-all duration-500 hover:scale-105 filter drop-shadow-xl"
            onError={(e) => {
              e.currentTarget.src = "certificates/00_default.jpeg";
            }}
          />
        </div>
      </div>

      {/* Certificate Information */}
      <div className="bg-blue-500 backdrop-blur-md rounded-lg p-5 shadow-lg transform ">
        <p className="text-white/95 font-semibold text-lg mb-2">
          {cert.organization}
        </p>
        <p className="text-sm text-white font-medium">{cert.date}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        <section className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-4xl font-bold flex items-center gap-3 text-gray-900">
              <Award className="text-blue-600 h-8 w-8" />
              Professional Certifications
            </h2>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search certifications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={filterOrg}
                  onChange={(e) => setFilterOrg(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {organizations.map((org) => (
                    <option key={org} value={org}>
                      {org === "all" ? "All Organizations" : org}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() =>
                    setSortOrder((prev) =>
                      prev === "newest" ? "oldest" : "newest"
                    )
                  }
                  className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2"
                >
                  {sortOrder === "newest" ? (
                    <SortDesc className="w-4 h-4" />
                  ) : (
                    <SortAsc className="w-4 h-4" />
                  )}
                  {sortOrder === "newest" ? "Newest" : "Oldest"}
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading ? (
              Array(6)
                .fill(0)
                .map((_, index) => <LoadingCard key={index} />)
            ) : filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert, index) => (
                <CertificateCard
                  key={cert.title}
                  cert={cert}
                  index={index}
                  onClick={() => setSelectedCert(cert)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">
                  No certifications found matching your criteria.
                </p>
              </div>
            )}
          </div>
          
        </section>

        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedCert(null)}
            >
              {/* Navigation Buttons - Positioned outside the card */}
              <div className="fixed inset-x-4 top-1/2 -translate-y-1/2 flex justify-between items-center z-50 pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation('prev');
                  }}
                  className="pointer-events-auto p-4 bg-black/50 hover:bg-black/70 transition-colors rounded-full group"
                  aria-label="Previous certificate"
                >
                  <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNavigation('next');
                  }}
                  className="pointer-events-auto p-4 bg-black/50 hover:bg-black/70 transition-colors rounded-full group"
                  aria-label="Next certificate"
                >
                  <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Existing modal content */}
                <div className="flex flex-col md:flex-row h-full">
                  <CertificatePreview cert={selectedCert} />
                  <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <div className="flex justify-between items-start mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {selectedCert.title}
                      </h3>
                      <button
                        onClick={() => setSelectedCert(null)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                      >
                        <X className="w-6 h-6 text-gray-500" />
                      </button>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <p className="text-gray-600 mb-4">
                          {selectedCert.description}
                        </p>
                        <a
                          href={selectedCert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Course Details
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Building2 className="w-4 h-4" />
                            <span>Instructor: {selectedCert.instructor}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>Duration: {selectedCert.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Badge className="w-4 h-4" />
                            <span>Grade: {selectedCert.grade}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Skills Acquired
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedCert.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Certifications;
