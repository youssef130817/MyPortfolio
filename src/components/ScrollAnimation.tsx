import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: isInView ? 0 : 50,
        opacity: isInView ? 1 : 0
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
