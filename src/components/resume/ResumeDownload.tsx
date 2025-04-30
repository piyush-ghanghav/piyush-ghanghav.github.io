// import React from 'react';
import { FileDown } from 'lucide-react';
// In src/components/resume/ResumeDownload.tsx
const ResumeDownload = () => (
  <a
    href="/Piyush_Ghanghav_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-4 right-4 md:bottom-8 md:right-8 bg-blue-600 hover:bg-blue-700 
      text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl 
      flex items-center gap-2
      /* Mobile styles */
      text-sm px-4 py-2.5
      /* Desktop styles */
      md:text-base md:px-6 md:py-3
      /* Safe area padding for mobile */
      safe-bottom safe-right
      /* Hover effect */
      hover:scale-105 active:scale-95"
  >
    <FileDown className="w-4 h-4 md:w-5 md:h-5" />
    <span className="hidden sm:inline">Download Resume</span>
    <span className="sm:hidden">Resume</span>
  </a>
);

export default ResumeDownload;