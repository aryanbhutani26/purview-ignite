import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface ScrollScaleSectionProps {
  children: React.ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  backgroundColor?: string;
}

export const ScrollScaleSection = ({ 
  children, 
  className = "",
  minScale = 0.85,
  maxScale = 1,
  backgroundColor = "bg-gray-100 dark:bg-gray-900"
}: ScrollScaleSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create smooth scaling animation
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [minScale, maxScale, maxScale, minScale]);
  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Optional: Add subtle opacity changes
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.7, 1, 1, 0.7]);
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30
  });

  return (
    <section 
      ref={ref} 
      className={`relative py-24 overflow-hidden ${backgroundColor} ${className}`}
    >
      {/* Background overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5" />
      
      <motion.div
        style={{ 
          scale: smoothScale,
          opacity: smoothOpacity
        }}
        className="relative z-10 transform-gpu"
      >
        {children}
      </motion.div>
    </section>
  );
};