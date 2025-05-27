import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import { HomeIcon } from '../HomeIcon';

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`
        fixed top-0 left-5 w-[60px] 
        bg-[--surface0] rounded-b-[10px] 
        flex flex-col items-center gap-[5px] 
        z-[999] overflow-hidden
        transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[500px] pb-[5px]' : 'max-h-[40px]'}
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] my-[5px] cursor-pointer"
        aria-label="Settings menu"
      >
        <ChevronDown 
          className={`
            w-full h-full text-[--text] 
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Settings Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-[5px] w-full px-[5px]"
          >
            {/* Home Button */}
            <Link
              to="/"
              className="
                w-[50px] h-[50px] 
                bg-[--surface1] rounded-[10px]
                flex items-center justify-center
                hover:bg-[--surface2] transition-colors
              "
            >
              <HomeIcon/>
            </Link>

            {/* Theme Toggle Container */}
            <div className="
              w-[50px] h-[50px] 
              bg-[--surface1] rounded-[10px]
              flex items-center justify-center
              hover:bg-[--surface2] transition-colors
            ">
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SettingsMenu;