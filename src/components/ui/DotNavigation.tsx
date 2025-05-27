import { motion } from "framer-motion";

interface DotNavigationProps {
  sections: string[];
  activeSection: string;
  onDotClick: (section: string) => void;
}

const DotNavigation = ({ sections, activeSection, onDotClick }: DotNavigationProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => onDotClick(section)}
          className="group relative flex items-center"
        >
          <motion.div
            className={`w-3 h-3 rounded-full transition-all duration-300 
              ${activeSection === section 
                ? 'bg-[--blue] scale-100' 
                : 'bg-[--surface2] scale-75 hover:scale-90'}`}
            whileHover={{ scale: 1 }}
          />
          <span className="absolute right-full mr-4 py-1 px-2 rounded-md text-sm font-medium 
            bg-[--surface0] text-[--text] opacity-0 -translate-x-2 transition-all duration-300 
            pointer-events-none whitespace-nowrap
            group-hover:opacity-100 group-hover:translate-x-0">
            {section}
          </span>
        </button>
      ))}
    </div>
  );
};

export default DotNavigation;