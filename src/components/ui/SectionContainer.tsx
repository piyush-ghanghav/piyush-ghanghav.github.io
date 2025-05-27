import { motion } from "framer-motion";

interface SectionContainerProps {
  id: string;
  children: React.ReactNode;
  ref: (element: HTMLElement | null) => void;
}

const SectionContainer = ({ id, children, ref }: SectionContainerProps) => (
  <section 
    ref={ref}
    className="min-h-screen snap-start flex items-center justify-center"
  >
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  </section>
);

export default SectionContainer;