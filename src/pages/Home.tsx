import { motion } from "framer-motion";
import { 
  Sparkles, 
  Newspaper, 
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Divider from "@/components/ui/Divider";
import { AboutIcon } from "@/components/icons/AboutIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ExternalLinkIcon } from "@/components/icons/ExternalLinkIcon";
import { RocketIcon } from "@/components/icons/RocketIcon";
import { PortfolioIcon } from "@/components/icons/PortfolioIcon";
import { ResumeIcon } from "@/components/icons/ResumeIcon";

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  
  const REQUIRED_CLICKS = 5;
  const CLICK_TIMEOUT = 2000;

  useEffect(() => {
    if (clickCount === REQUIRED_CLICKS) {
      try {
        sessionStorage.setItem('secretKey', 'piyush-secret-key');
        navigate('/logger', { replace: true });
        setClickCount(0);
        console.log('Navigation triggered');
      } catch (error) {
        console.error('Navigation failed:', error);
      }
    }

    const timer = setTimeout(() => {
      if (clickCount > 0) {
        setClickCount(0);
      }
    }, CLICK_TIMEOUT);

    return () => clearTimeout(timer);
  }, [clickCount, navigate]);

  const handleRocketClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center gap-[80px] p-5 bg-[--base] md:flex-row flex-col">
      {/* Left Section */}
      <div className="w-full max-w-[700px] space-y-6">
        {/* Header Section */}
        <div className="flex items-center gap-4">
          <div 
            onClick={handleRocketClick}
            role="button"
            tabIndex={0}
            className="cursor-default "
            
          >
            <RocketIcon />
          </div>
          <h1 className="font-pixel font-bold text-4xl m-0 md:text-3xl sm:text-2xl text-[--text-color]">
            Hello! I'm <span className="text-[--blue]">Piyush</span>
          </h1>
        </div>

        <p

          className="font-aldrich text-lg my-3 text-[--text-color]  tracking-wide"
          
        >
          Computer engineer here - I enjoy learning new things, staying organised and
          building things that work. What's on your mind?
        </p>

        <div
          className="inline-flex items-center px-3 py-2 rounded-lg gap-2 bg-gradient-to-r from-[--rosewater] via-[--blue] to-[--lavender] hover:shadow-md transition-all duration-300"
        >
          <Sparkles className="w-6 h-6 text-white dark:text-black" />
          <p className="font-pixel text-xs text-white dark:text-black sm:text-[15px]">
            An absolute learner
          </p>
        </div>

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
            src="/pf.png"
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <Link to="/Piyush_Ghanghav_Resume.pdf" className={buttonStyles.resume}>
          <ResumeIcon />
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
          <AboutIcon/>
      ),
      title: "About Me",
      description: "Meet your future developer",
    },
    {
      to: "/projects",
      icon: (
          <PortfolioIcon />
      ),
      title: "Portfolio",
      description: "Works that speak for themselves",
    },
    {
      to: "/credentials",
      icon: (
          <Newspaper strokeWidth={1.5}/> 
      ),
      title: "Creds",
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
  const socialItems = [
    {
      href: "https://github.com/piyush-ghanghav",
      icon: <GithubIcon />,
    },
    {
      href: "https://linkedin.com/in/piyush-ghanghav",
      icon: (
        <img 
          src={`https://skillicons.dev/icons?i=linkedin&theme=light`}
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
    <div className="text-[--text-color] transition-transform group-hover:translate-x-1">
      <ExternalLinkIcon />
    </div>
  </Link>
);

// Update SocialButton to handle hover effects
const SocialButton = ({ href, icon }: SocialButtonProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group transition-transform hover:-translate-y-1"
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
    text-[--text-color] flex items-center justify-center
  `,
  navText: `
    flex flex-col gap-2
  `,
  navTitle: `
    font-pixel text-[24px] md:text-[20px] sm:text-[16px]
    text-[--text-color] m-0 leading-tight
  `,
  navDescription: `
    text-[16px] md:text-[14px] sm:text-[12px]
    text-[--text-color] m-0 
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
