import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl py-1 mt-10"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col items-center gap-2 text-xs font-inter">
          {/* Top line - Copyright text */}
          <div className="flex items-center gap-2 text-[--text-color]">
            <span>© {currentYear}</span>
            <span>Piyush Ghanghav</span>
            <span>All rights reserved</span>
          </div>
          
          {/* Bottom line - Built with section */}
          <div className="flex items-center gap-2 text-[--text]">
            <span className="opacity-80">Built with</span>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Heart className="w-3.5 h-3.5 text-[--red] fill-[--red]" />
            </motion.div>
            <span className="opacity-80">using</span>
            <div className="flex items-center gap-2">
              {[
                { name: "React", color: "text-[--blue]" },
                { name: "TypeScript", color: "text-[--sapphire]" },
                { name: "Tailwind", color: "text-[--sky]" },
              ].map((tech) => (
                <span 
                  key={tech.name}
                  className={`font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Copyright;