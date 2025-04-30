import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, User, GraduationCap, Code, Award, Briefcase, Mail } from 'lucide-react';

interface DesktopMenuProps {
  pathname: string;
}

const menuItems = [
  { path: '/', label: 'Home', icon: <Home size={18} /> },
  { path: '/about', label: 'About', icon: <User size={18} /> },
  { path: '/education', label: 'Education', icon: <GraduationCap size={18} /> },
  { path: '/skills', label: 'Skills', icon: <Code size={18} /> },
  { path: '/certifications', label: 'Certifications', icon: <Award size={18} /> },
  { path: '/projects', label: 'Projects', icon: <Briefcase size={18} /> },
  { path: '/contact', label: 'Contact', icon: <Mail size={18} /> }
];

const DesktopMenu = ({ pathname }: DesktopMenuProps) => {
  return (
    <nav className="hidden md:flex items-center gap-2">
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`
            relative px-4 py-2 rounded-lg flex items-center gap-2 
            transition-all duration-200
            ${pathname === item.path 
              ? 'text-blue-600 font-medium' 
              : 'text-gray-600 hover:text-blue-600'
            }
          `}
        >
          {item.icon}
          <span>{item.label}</span>
          {pathname === item.path && (
            <motion.div
              layoutId="navbar-indicator"
              className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopMenu;