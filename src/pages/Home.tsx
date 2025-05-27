import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Rocket,
  Sparkles,
  User,
  Briefcase,
  FileText 
} from "lucide-react";
import { Link } from "react-router-dom";
import Divider from "@/components/ui/Divider";

const Home = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center gap-[150px] p-5 bg-[--base] text-[--text] md:flex-row flex-col font-inter">
      {/* Left Section */}
      <div className="w-full max-w-[700px] space-y-[30px]">
        {/* Title */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-5"
        >
          <Rocket className="w-[50px] h-[50px] text-[--text] md:w-[40px] md:h-[40px]" />
          <h1 className="font-pixel text-[38px] m-0 md:text-[32px] sm:text-[28px]">
            Hello! I'm <span className="text-[--blue]">Piyush</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-aldrich text-[20px] my-[15px] md:text-[16px] sm:text-[14px]"
        >
          Computer engineer here - I enjoy tackling coding challenges and building things that work. What's on your mind?
        </motion.p>

        {/* Highlight Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center px-2 py-1 rounded-[10px] gap-2 bg-gradient-to-r from-[--rosewater] via-[--blue] to-[--lavender]"
        >
          <Sparkles className="w-[41px] min-w-[30px] text-[--button-color]" />
          <p className="font-pixel text-[12px] text-[--button-color] sm:text-[10px]">
            Building digital solutions with passion
          </p>
        </motion.div>

        <Divider />

        {/* Navigation Buttons */}
        <div className="space-y-5">
          <NavButton 
            to="/about" 
            icon={<User />} 
            title="About Me" 
            description="Meet your future developer" 
          />
          <NavButton 
            to="/projects" 
            icon={<Briefcase />} 
            title="Portfolio" 
            description="Works that speak for themselves" 
          />
          <NavButton 
            to="/articles" 
            icon={<FileText />} 
            title="Articles" 
            description="Knowledge and inspiration" 
          />
        </div>

        <Divider />

        {/* Social Media */}
        <div className="flex justify-center gap-4 flex-wrap">
          <SocialButton 
            href="https://github.com/piyush-ghanghav"
            icon={<Github size={20} />}
            color="var(--button-color)"
          />
          <SocialButton 
            href="https://linkedin.com/in/piyush-ghanghav"
            icon={<Linkedin size={20} />}
            color="var(--blue-color)"
          />
          <SocialButton 
            href="mailto:piyushghanghav@gmail.com"
            icon={<Mail size={20} />}
            color="var(--lavender-color)"
          />
        </div>
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

        {/* Update Resume Button */}
        <Link
          to="/Piyush_Ghanghav_Resume.pdf"
          className="w-full h-[90px] md:h-[70px] sm:h-[60px] flex items-center justify-center gap-3 
            bg-[--button-color] text-[--button-text-color] rounded-[10px] px-4
            font-pixel text-[18px] md:text-[16px] sm:text-[14px]
            hover:opacity-90 transition-opacity"
        >
          <FileText className="w-5 h-5" />
          <span className="truncate">Resume</span>
        </Link>
      </div>
    </div>
  );
};

// Helper Components
const NavButton = ({ to, icon, title, description }) => (
  <Link 
    to={to}
    className="
      w-full h-[80px] md:h-[70px] 
      bg-[--surface0] rounded-[10px] 
      flex items-center justify-between 
      px-[20px] md:px-[15px] 
      text-decoration-none box-border
      hover:bg-[--surface1] transition-colors
      border border-[--surface1]
    "
  >
    {/* Left Side */}
    <div className="flex gap-[20px] md:gap-[12px] items-center">
      {/* Icon */}
      <span className="
        w-[40px] h-[40px] md:w-[32px] md:h-[32px] 
        text-[--text] flex items-center justify-center
      ">
        {icon}
      </span>

      {/* Text Block */}
      <div className="flex flex-col gap-[5px]">
        <h3 className="
          font-pixel text-[18px] md:text-[14px] sm:text-[12px] 
          text-[--text] m-0
        ">
          {title}
        </h3>
        <p className="
          text-[15px] md:text-[12px] 
          text-[--text] m-0 
          font-aldrich
        ">
          {description}
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="text-[--text]">
      <ExternalLink className="w-6 h-6 sm:w-[24px] sm:h-[24px]" />
    </div>
  </Link>
);

const SocialButton = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center w-[50px] h-[50px] rounded-[10px] 
      bg-[--surface0] hover:bg-[--surface1] transition-all border border-[--surface1]"
    style={{ "--hover-color": color } as React.CSSProperties}
  >
    <span className="text-[--text] group-hover:text-[var(--hover-color)] transition-colors">
      {icon}
    </span>
  </a>
);

export default Home;
