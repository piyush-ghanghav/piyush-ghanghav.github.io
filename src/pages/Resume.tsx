import React from 'react';
import { Download, Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    if (element) {
      // Create a new window for printing
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <html>
            <head>
              <title>Piyush Ghanghav Resume</title>
              <style>
                body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: white; }
                .resume-container { max-width: 8.5in; margin: 0 auto; }
                .header { text-align: center; margin-bottom: 20px; }
                .name { font-size: 28px; font-weight: bold; margin-bottom: 10px; }
                .contact-info { display: flex; justify-content: center; flex-wrap: wrap; gap: 15px; font-size: 12px; }
                .contact-item { display: flex; align-items: center; gap: 5px; }
                .section { margin-bottom: 20px; }
                .section-title { font-size: 16px; font-weight: bold; text-transform: uppercase; border-bottom: 1px solid #000; padding-bottom: 2px; margin-bottom: 10px; }
                .project-item, .pub-item { margin-bottom: 15px; }
                .project-title { font-weight: bold; }
                .project-description { margin: 5px 0; }
                .tools { font-style: italic; }
                .education-item { margin-bottom: 10px; }
                .degree { font-weight: bold; }
                .university { margin: 2px 0; }
                .gpa { margin: 2px 0; }
                .coursework { margin: 2px 0; }
                .tech-category { margin-bottom: 8px; }
                .tech-label { font-weight: bold; display: inline; }
                .cert-item { margin-bottom: 5px; }
                @media print {
                  body { margin: 0; padding: 10px; }
                  .resume-container { box-shadow: none; }
                }
              </style>
            </head>
            <body>
              ${element.innerHTML}
            </body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Download Button */}
        <div className="flex justify-end p-4 bg-gray-50 border-b">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-[--text-color] rounded hover:bg-blue-700 transition-colors"
          >
            <Download size={16} />
            Download PDF
          </button>
        </div>

        {/* Resume Content */}
        <div id="resume-content" className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Piyush Ghanghav</h1>
            <div className="flex justify-center flex-wrap gap-6 text-sm text-[--text-color]">
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>piyushghanghav@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>9604177859</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe size={14} />
                <span className='hover:text-blue-600'> <a href="https://piyush-ghanghav.github.io"  target="_blank" rel="noopener noreferrer">
    piyush-ghanghav.github.io
  </a></span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={14} />
                <span>linkedin.com/in/piyush-ghanghav</span>
              </div>
              <div className="flex items-center gap-2">
                <Github size={14} />
                <span>github.com/piyush-ghanghav</span>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Profile Summary</h2>
            <p className="text-sm leading-relaxed">
              Enthusiastic Computer Engineering student with hands-on experience in full-stack development, backed by strong
              foundations in data structures and algorithms. Always eager to learn emerging technologies.
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Education</h2>
            <div className="text-sm">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-bold">Sanjivani College of Engineering, Kopargaon, B.Tech Computer Science</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">Dec 2021 – June 2025</div>
                </div>
              </div>
              <div className="ml-4">
                <div className="mb-1">• GPA: 8.4/10.0</div>
                <div>• Coursework: Data Structures, Algorithms, Database Management, Web Development, OOP</div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Projects</h2>
            <div className="text-sm space-y-4">
              <div>
                <div className="font-bold mb-2">AI Interview Assistant <Github size={12} className="inline ml-1" /></div>
                <div className="ml-4 space-y-1">
                  <div>• Developed a personalized interview preparation platform that analyzes resumes and job descriptions to generate custom interview questions</div>
                  <div>• Integrated Gemini API for question generation and Clerk for user authentication</div>
                  <div>• Tools Used: Next.js, PostgreSQL, Gemini API, Clerk</div>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-2">Event Management System <Github size={12} className="inline ml-1" /></div>
                <div className="ml-4 space-y-1">
                  <div>• Designed and built a web application for managing events with real-time updates and attendee tracking</div>
                  <div>• Implemented event filtering, secure authentication, and role-based access</div>
                  <div>• Tools Used: MongoDB, Express.js, React, Node.js</div>
                </div>
              </div>
              
              <div>
                <div className="font-bold mb-2">Parallel AES Encryption and Decryption <Github size={12} className="inline ml-1" /></div>
                <div className="ml-4 space-y-1">
                  <div>• Implemented parallel encryption algorithms to improve speed using modern cryptographic methods</div>
                  <div>• Leveraged OpenMP for parallelization in C++</div>
                  <div>• Tools Used: C++, OpenMP, AES, DES</div>
                </div>
              </div>
            </div>
          </div>

          {/* Publications */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Publications</h2>
            <div className="text-sm space-y-3">
              <div>
                <div className="flex justify-between items-start">
                  <div className="font-bold">Social Media Sentiment Analysis Using Machine Learning</div>
                  <div className="text-right">March 2025</div>
                </div>
                <div className="italic text-[--text-color]">3rd International Conference on Disruptive Technologies (ICDT), DOI: 10.1109/ICDT63985.2025.10986650</div>
              </div>
              
              <div>
                <div className="flex justify-between items-start">
                  <div className="font-bold">Advancing Code Generation: Insights into Large Language Models</div>
                  <div className="text-right">December 2024</div>
                </div>
                <div className="italic text-[--text-color]">Journal of Cryptography and Network Security, Design and Codes, Vol. 1, Issue 3</div>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Technologies</h2>
            <div className="text-sm space-y-2">
              <div><span className="font-bold">Programming Languages:</span> C++(Proficient), Java, Python, JavaScript</div>
              <div><span className="font-bold">Web Development:</span> HTML, CSS, React, Node.js, Express.js, Tailwind</div>
              <div><span className="font-bold">Databases:</span> MySQL, PostgreSQL, MongoDB</div>
              <div><span className="font-bold">Developer Tools:</span> Git, GitHub, IntelliJ IDEA, VS Code, Eclipse, Postman, Docker</div>
              <div><span className="font-bold">Soft Skills:</span> Problem-solving, Teamwork, Attention to detail</div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-lg font-bold uppercase border-b border-black pb-1 mb-4">Certifications</h2>
            <div className="text-sm space-y-1">
              <div>• Linear Algebra for Machine Learning and Data Science, Coursera</div>
              <div>• Business Intelligence and Analytics, NPTEL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;