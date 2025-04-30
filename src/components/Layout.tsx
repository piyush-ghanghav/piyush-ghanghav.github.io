import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo';
import DesktopMenu from './navigation/DesktopMenu';
import MobileMenu from './navigation/MobileMenu';
import SocialLinks from './footer/SocialLinks';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white text-gray-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] bg-repeat pointer-events-none" />
      
      {/* Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300
          ${isScrolled || isMenuOpen
            ? 'bg-white shadow-sm' 
            : 'bg-transparent'
          }`}
      >
        <nav className="relative px-4 md:px-6 py-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 relative z-50">
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="relative z-50">
              <DesktopMenu pathname={location.pathname} />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-3 hover:bg-blue-50 rounded-lg transition-all duration-300
                active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500/20
                relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <Menu 
                size={24} 
                className={`transform transition-all duration-300
                  ${isMenuOpen ? 'rotate-90 text-blue-600' : 'text-gray-700'}`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="relative z-50">
          <MobileMenu 
            isOpen={isMenuOpen} 
            pathname={location.pathname} 
            onClose={() => setIsMenuOpen(false)}
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 min-h-[calc(100vh-4rem)]">
        <div className="container mx-auto px-4 md:px-6">
          <Outlet context={{ setHideFooter }} />
        </div>
      </main>

      {/* Footer */}
      {!hideFooter && (
        <footer className="relative z-10 py-8 mt-auto bg-gradient-to-b from-transparent to-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <SocialLinks />
            <p className="text-sm text-center text-gray-600 mt-4">
              © {new Date().getFullYear()} Piyush Ghanghav. All rights reserved.
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;