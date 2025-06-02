import { motion } from "framer-motion";
import {
  ExternalLink,
  Rocket, 
  Sparkles,
  FileText,
  UserCircle2, 
  Blocks, 
  Newspaper, 
} from "lucide-react";
import { Link } from "react-router-dom";
import Divider from "@/components/ui/Divider";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center gap-[80px] p-5 bg-[--base] text-[--text] md:flex-row flex-col font-inter">
      {/* Left Section */}
      <div className="w-full max-w-[700px] space-y-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-4"
        >
          <Rocket className="w-10 h-10 text-[--blue] md:w-8 md:h-8 hover:rotate-12 transition-transform duration-300" />
          <h1 className="font-pixel text-4xl m-0 md:text-3xl sm:text-2xl text-[--text]">
            Hello! I'm <span className="text-[--blue]">Piyush</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-aldrich text-lg my-3 md:text-base sm:text-sm text-[--text] font-medium tracking-wide"
        >
          Computer engineer here - I enjoy tackling coding challenges and
          building things that work. What's on your mind?
        </motion.p>

        {/* Sparkles Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center px-3 py-2 rounded-lg gap-2 bg-gradient-to-r from-[--rosewater] via-[--blue] to-[--lavender] hover:shadow-md transition-all duration-300"
        >
          <Sparkles className="w-6 h-6 text-white" />
          <p className="font-pixel text-xs text-white sm:text-[15px]">
            An absolute learner
          </p>
        </motion.div>

        <Divider className="my-4" />
        <NavigationButtons />
        <Divider className="my-4" />

        <SocialLinks />
      </div>

      {/* Right Section */}
      <div className="w-full max-w-[468px] flex flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full aspect-square relative rounded-[10px] overflow-hidden"
        >
          <img
            src="/parallel_programming.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <Link to="/Piyush_Ghanghav_Resume.pdf" className={buttonStyles.resume}>
          <FileText className="w-5 h-5" />
          <span className="truncate">Resume</span>
        </Link>
      </div>
    </div>
  );
};

const NavigationButtons = () => {
  const navItems = [
    {
      to: "/about",
      icon: (
        <div className="relative group">
          <UserCircle2 
            size={32} 
            className="text-[--sapphire] transition-all duration-300 " 
          />
          <div className="absolute -inset-1 bg-[--sapphire]/20 rounded-lg blur opacity-0    " />
        </div>
      ),
      title: "About Me",
      description: "Meet your future developer",
    },
    {
      to: "/projects",
      icon: (
        <div className="relative group">
          <Blocks 
            size={32} 
            className="text-[--teal] transition-all duration-300 " 
          />
          <div className="absolute -inset-1 bg-[--teal]/20 rounded-lg blur opacity-0  " />
        </div>
      ),
      title: "Portfolio",
      description: "Works that speak for themselves",
    },
    {
      to: "/articles",
      icon: (
        <div className="relative group">
          <Newspaper 
            size={32} 
            className="text-[--mauve] transition-all duration-300 " 
          />
          <div className="absolute -inset-1 bg-[--mauve]/20 rounded-lg blur opacity-0  " />
        </div>
      ),
      title: "Articles",
      description: "Knowledge and inspiration",
    },
  ];

  return (
    <div className="space-y-4">
      {navItems.map((item, index) => (
        <NavButton key={index} {...item} />
      ))}
    </div>
  );
};

const SocialLinks = () => {
  // Invert theme for better contrast
  const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  
  const socialItems = [
    {
      href: "https://github.com/piyush-ghanghav",
      icon: (
        <img 
          src={`https://skillicons.dev/icons?i=github&theme=${theme}`}
          alt="GitHub"
          className="w-10 h-10 transition-transform duration-300 hover:scale-110"
        />
      ),
    },
    {
      href: "https://linkedin.com/in/piyush-ghanghav",
      icon: (
        <img 
          src={`https://skillicons.dev/icons?i=linkedin&theme=${theme}`}
          alt="LinkedIn"
          className="w-10 h-10 transition-transform duration-300 hover:scale-110"
        />
      ),
    },
    {
      href: "mailto:piyushghanghav@gmail.com",
      icon: (
        <img 
          src={`https://skillicons.dev/icons?i=gmail&theme=light`}
          alt="Gmail"
          className="w-10 h-10 transition-transform duration-300 hover:scale-110"
        />
      ),
    },
  ];

  return (
    <div className="flex justify-center gap-6">
      {socialItems.map((social, index) => (
        <SocialButton key={index} {...social} />
      ))}
    </div>
  );
};

// Update NavButton to support hover animations
type NavButtonProps = {
  to: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

type SocialButtonProps = {
  href: string;
  icon: React.ReactNode;
}
const NavButton = ({ to, icon, title, description }: NavButtonProps) => (
  <Link
    to={to}
    className={`${buttonStyles.nav} group`}
  >
    <div className={buttonStyles.navContent}>
      <span className={buttonStyles.navIcon}>{icon}</span>
      <div className={buttonStyles.navText}>
        <h3 className={buttonStyles.navTitle}>{title}</h3>
        <p className={buttonStyles.navDescription}>{description}</p>
      </div>
    </div>
    <div className="text-[--text] transition-transform group-hover:translate-x-1">
      <ExternalLink className="w-6 h-6 sm:w-[24px] sm:h-[24px]" />
    </div>
  </Link>
);

const SocialButton = ({ href, icon }: SocialButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:-translate-y-1"
  >
    {icon}
  </a>
);

// Centralized Button Styles
const buttonStyles = {
  nav: `
    w-full h-[120px] md:h-[100px] sm:h-[90px]
    bg-[--surface0] rounded-[10px] 
    flex items-center justify-between 
    px-8 md:px-6 sm:px-5
    text-decoration-none box-border
    hover:bg-[--surface1] transition-all
    border border-transparent 
    hover:shadow-lg
  `,
  navContent: `
    flex gap-6 md:gap-5 sm:gap-4 items-center
  `,
  navIcon: `
    w-[48px] h-[48px] md:w-[40px] md:h-[40px] sm:w-[32px] sm:h-[32px]
    text-[--text] flex items-center justify-center
  `,
  navText: `
    flex flex-col gap-2
  `,
  navTitle: `
    font-pixel text-[24px] md:text-[20px] sm:text-[16px]
    text-[--text] m-0 leading-tight
  `,
  navDescription: `
    text-[16px] md:text-[14px] sm:text-[12px]
    text-[--text] m-0 
    font-aldrich
  `,
  social: `
    flex items-center justify-center w-[50px] h-[50px] rounded-[10px] 
    bg-[--surface0] hover:bg-[--surface1] transition-all border border-[--surface1]
  `,
  resume: `
    w-full h-[90px] md:h-[70px] sm:h-[60px] flex items-center justify-center gap-3 
    bg-[--button-color] text-[--button-text-color] rounded-[10px] px-4
    font-pixel text-[18px] md:text-[16px] sm:text-[14px]
    hover:opacity-90 transition-opacity
  `,
};

export default Home;
