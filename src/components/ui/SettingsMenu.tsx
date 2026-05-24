import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import { HomeIcon } from '../icons/HomeIcon';

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // wait 1 second, then open smoothly
    const openTimer = setTimeout(() => {
      requestAnimationFrame(() => {
        setIsOpen(true); // smooth open
      });

      // close after 3 seconds
      const closeTimer = setTimeout(() => {
        requestAnimationFrame(() => {
          setIsOpen(false); // smooth close
        });
      }, 3000);

      return () => clearTimeout(closeTimer);
    }, 1000);

    return () => clearTimeout(openTimer);
  }, []);

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
            w-full h-full text-[--text-color] 
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : ''}
          `}
        />
      </button>

      {/* Theme Toggle */}
      <div className="
        w-[50px] h-[50px] 
        bg-[--surface1] rounded-[10px]
        flex items-center justify-center
        hover:bg-[--surface2] transition-colors
      ">
        <ThemeToggle />
      </div>

      {isOpen && (
        <div className="flex flex-col gap-[5px] w-full px-[5px]">
          <Link
            to="/"
            className="
              w-[50px] h-[50px] 
              bg-[--surface1] rounded-[10px]
              flex items-center justify-center
              hover:bg-[--surface2] transition-colors
            "
            onClick={() => setIsOpen(false)}
          >
            <HomeIcon/>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
