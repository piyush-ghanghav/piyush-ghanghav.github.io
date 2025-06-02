import { motion } from "framer-motion";

interface ThemeWipeProps {
  isDark: boolean;
}

export const ThemeWipe = ({ isDark }: ThemeWipeProps) => {
  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
      animate={{
        clipPath: isDark
          ? "polygon(100% 0, 0 100%, 100% 100%, 100% 0)"
          : "polygon(0 0, 0 0, 0 100%, 0 0)",
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
      className="fixed inset-0 z-[999] pointer-events-none bg-[--base]"
    />
  );
};