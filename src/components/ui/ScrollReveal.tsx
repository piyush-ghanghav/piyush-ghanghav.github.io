import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "100%" | "fit-content";
  direction?: "up" | "down";
}

export function ScrollReveal({ 
  children, 
  width = "100%", 
  direction = "up" 
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px" 
  });

  return (
    <div ref={ref} style={{ width, position: "relative" }}>
      <motion.div
        variants={{
          hidden: { 
            opacity: 0, 
            y: direction === "up" ? 75 : -75 
          },
          visible: { 
            opacity: 1, 
            y: 0 
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
          duration: 0.5, 
          ease: [0.25, 0.1, 0.25, 1], 
          delay: 0.1 
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}