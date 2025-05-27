import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import SettingsMenu from './ui/SettingsMenu';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[--base] font-inter relative smooth-scroll">
      <SettingsMenu />
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
};

export default Layout;