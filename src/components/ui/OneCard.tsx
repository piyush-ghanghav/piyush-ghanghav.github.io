import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, Save, Trash2 } from 'lucide-react';

interface OneCardProps {
  onClose?: () => void;
}

const OneCard = ({ onClose }: OneCardProps) => {
  const [isTopHover, setIsTopHover] = useState(false);
  const [isOutsideCard, setIsOutsideCard] = useState(false);

  // Add escape key listener
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onClose) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const CardContent = () => (
    <div className="flex w-full h-full bg-[#f5f7fb] border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      {/* LEFT: Image mock browser */}
      <div className="w-3/4 bg-white border-r border-gray-300">
        <img
          src="/Event-Master.png"
          alt="Course Screenshot"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT: Info panel */}
      <div className="w-1/4 bg-white p-5 flex flex-col justify-between relative">
        {/* Content */}
        <div className="space-y-4">
          <div className="mb-3">
            <p className="text-gray-500 text-sm truncate">https://spring.academy/cour...</p>
            <p className="text-xs text-gray-400">about 6 months ago ⋄ spring.academy</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-400 px-3 py-2 rounded">
            <h3 className="text-xs font-semibold text-red-500 mb-1">TLDR</h3>
            <p className="text-sm text-gray-700">
              The article discusses how to implement GET requests in a REST API using Spring Boot. It outlines key concepts and provides...
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Web Page', 'GET request', 'REST API', 'Spring Boot', 'Java', 'APIs'].map(tag => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full border border-gray-300"
              >
                {tag}
              </span>
            ))}
            <button className="text-xs text-orange-500 hover:underline font-semibold">+ Add tag</button>
          </div>

          <div>
            <label htmlFor="note" className="text-xs text-gray-500 block mb-1">MIND NOTES</label>
            <input
              id="note"
              type="text"
              placeholder="Type here to add a note..."
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end items-center mt-4 space-x-3 text-gray-500">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Trash2 className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Link className="w-4 h-4" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Save className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        background: isOutsideCard 
          ? 'radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.5), rgba(0,0,0,0.8))'
          : 'rgba(0,0,0,0.5)'
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
        setIsOutsideCard(false);
      }}
    >
      {/* Escape hint */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isTopHover ? 1 : 0,
          y: isTopHover ? 0 : -20 
        }}
        className="fixed top-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm 
          px-4 py-2 rounded-full text-white text-sm flex items-center gap-2"
      >
        Press ESC to close
      </motion.div>

      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ 
          scale: 1,
          y: isTopHover ? 16 : 0
        }}
        transition={{ duration: 0.2 }}
        className="w-full h-[90vh] bg-[#f5f7fb] rounded-xl overflow-hidden"
        onMouseEnter={() => setIsOutsideCard(false)}
        onMouseLeave={() => setIsOutsideCard(true)}
      >
        <CardContent />
      </motion.div>
    </motion.div>
  );
};

export default OneCard;
