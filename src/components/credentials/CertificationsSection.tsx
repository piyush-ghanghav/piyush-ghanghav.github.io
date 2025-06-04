import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

interface Certificate {
  title: string;
  organization: string;
  date: string;
}

const CertificateCard = ({ cert, index }: { cert: Certificate; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group bg-[--surface0] rounded-xl border border-[--surface1] overflow-hidden
      hover:border-[--blue] transition-all duration-300"
  >
    <div className="p-4 space-y-3">
      <h3 className="font-aldrich font-bold text-[--text-color] line-clamp-1">
        {cert.title}
      </h3>
      <div className="flex items-center justify-between text-sm">
        <span className="text-[--subtext0]">{cert.organization}</span>
        <div className="flex items-center gap-1.5 text-xs text-[--subtext0]">
          <Calendar className="w-4 h-4" />
          <span>{cert.date}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const CertificationsSection = () => {
  const certificates = [
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

    // Add more certificates here
  ];

  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={cert.title}
            cert={cert}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};