import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-3xl mx-auto"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 
            bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent
            leading-tight"
        >
          Hi, I'm Piyush Ghanghav
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 px-4"
        >
          A passionate Software Developer building innovative solutions
        </motion.p>

        {/* Social Links - Improved mobile layout */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12 px-4"
        >
          {/* Social buttons with improved touch targets */}
          <SocialButton
            href="https://github.com/piyush-ghanghav"
            icon={<Github />}
            label="GitHub"
          />
          <SocialButton
            href="https://linkedin.com/in/piyush-ghanghav"
            icon={<Linkedin />}
            label="LinkedIn"
          />
          <SocialButton
            href="mailto:piyushghanghav@gmail.com"
            icon={<Mail />}
            label="Email"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 
              text-white rounded-xl hover:bg-blue-700 transition-colors
              shadow-lg hover:shadow-xl text-lg font-medium"
          >
            Learn More
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

const SocialButton = ({ href, icon, label }: { href: string; icon: JSX.Element; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 
      /* Mobile styles */
      p-3 rounded-full
      md:rounded-xl md:px-6 md:py-3
      bg-gradient-to-br from-white to-blue-50/30 hover:to-blue-100/50
      transition-all duration-300 shadow-md hover:shadow-xl
      border border-blue-100/30 hover:border-blue-200/50"
  >
    <span className="text-gray-600 group-hover:text-blue-600 transition-colors">
      {icon}
    </span>
    <span className="hidden md:inline text-gray-600 group-hover:text-blue-600 font-medium transition-colors">
      {label}
    </span>
  </a>
);

export default Home;