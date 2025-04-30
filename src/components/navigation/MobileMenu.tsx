import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, User, GraduationCap, Code, Award, Briefcase, Mail, X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
}

const menuItems = [
  { path: '/', label: 'Home', icon: <Home size={20} /> },
  { path: '/about', label: 'About', icon: <User size={20} /> },
  { path: '/education', label: 'Education', icon: <GraduationCap size={20} /> },
  { path: '/skills', label: 'Skills', icon: <Code size={20} /> },
  { path: '/certifications', label: 'Certifications', icon: <Award size={20} /> },
  { path: '/projects', label: 'Projects', icon: <Briefcase size={20} /> },
  { path: '/contact', label: 'Contact', icon: <Mail size={20} /> }
];

const menuVariants = {
  closed: {
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  },
  open: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.06
    }
  }
};

const itemVariants = {
  closed: {
    y: 20,
    opacity: 0
  },
  open: {
    y: 0,
    opacity: 1
  }
};

const MobileMenu = ({ isOpen, pathname, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 md:hidden"
        >
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-white/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Menu Content */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="relative h-full flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-gray-900">Menu</span>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-300 group"
                >
                  <X 
                    className="w-6 h-6 text-gray-600 transform transition-transform duration-300 group-hover:rotate-90" 
                  />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-8 px-4">
              <motion.div
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="space-y-4"
              >
                {menuItems.map((item) => (
                  <motion.div
                    key={item.path}
                    variants={itemVariants}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`
                        flex items-center gap-3 px-6 py-4 rounded-xl text-lg
                        transition-all duration-300 relative overflow-hidden group
                        ${pathname === item.path 
                          ? 'bg-blue-50 text-blue-600 font-medium shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50/80 hover:text-blue-600'
                        }
                      `}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </span>
                      {pathname === item.path && (
                        <motion.div
                          layoutId="menu-background"
                          className="absolute inset-0 bg-blue-50"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-100">
              <p className="text-sm text-center text-gray-500">
                © {new Date().getFullYear()} Piyush Ghanghav
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;