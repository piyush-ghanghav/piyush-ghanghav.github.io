import { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronDown, X } from 'lucide-react';
import { Certificate } from '../types/certificate';

interface Props {
  certificate: Certificate;
}

export function CertificateCard({ certificate }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      <div 
        onClick={() => setIsExpanded(true)}
        className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      >
        <div className="relative h-72">
          <img 
            src={certificate.imageUrl} 
            alt={certificate.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-y-[-4px] transition-transform">
              {certificate.title}
            </h3>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-200">
                {certificate.issuer}
              </p>
              <ChevronDown className="text-white w-5 h-5 animate-bounce opacity-70" />
            </div>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsExpanded(false);
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl overflow-hidden flex">
            {/* Left side - Square Image */}
            <div className="w-[500px] h-[500px] flex-shrink-0 relative bg-gray-900">
              <img 
                src={certificate.imageUrl} 
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-6 right-6 p-2 bg-black/30 hover:bg-black/50 rounded-full text-white transition-all duration-300 hover:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Right side - Content */}
            <div className="flex-1 overflow-y-auto max-h-[500px] scrollbar-hide">
              <div className="p-10 space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    {certificate.title}
                  </h3>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 text-sm font-medium bg-blue-500 text-white rounded-full">
                      {certificate.type}
                    </span>
                    <p className="text-gray-600">
                      {certificate.issuer} • {certificate.completionDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: '0%' }}
                      ref={(el) => {
                        if (el) {
                          setTimeout(() => {
                            el.style.width = `${certificate.completionPercentage}%`;
                          }, 100);
                        }
                      }}
                    />
                  </div>
                  <span className="font-medium text-gray-600 min-w-[90px]">
                    {certificate.completionPercentage}% Complete
                  </span>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-1.5 text-sm font-medium bg-gray-100 text-gray-700 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {certificate.testimonial && (
                  <blockquote className="border-l-4 border-blue-500 pl-6 py-2 italic text-gray-600">
                    <p className="text-lg">"{certificate.testimonial.text}"</p>
                    <footer className="text-sm mt-2 font-medium text-gray-500">
                      — {certificate.testimonial.author}
                    </footer>
                  </blockquote>
                )}

                <div className="flex flex-wrap gap-4 pt-6 border-t">
                  {certificate.projectUrl && (
                    <a
                      href={certificate.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors"
                    >
                      <Github size={20} />
                      <span>View Project</span>
                    </a>
                  )}
                  <a
                    href="#"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}