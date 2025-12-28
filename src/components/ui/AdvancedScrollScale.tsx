import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface AdvancedScrollScaleProps {
  children: ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  backgroundColor?: string;
  enableParallax?: boolean;
  enableOpacity?: boolean;
}

export const AdvancedScrollScale = ({ 
  children, 
  className = "",
  minScale = 0.8,
  maxScale = 1,
  backgroundColor = "bg-gray-100 dark:bg-gray-900",
  enableParallax = true,
  enableOpacity = true
}: AdvancedScrollScaleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Enhanced scaling with more control points for smoother transitions
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    [minScale, maxScale * 0.95, maxScale, maxScale * 0.95, minScale]
  );
  
  const smoothScale = useSpring(scale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Opacity animation
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [0.6, 1, 1, 0.6]
  );
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 120,
    damping: 25
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section 
      ref={containerRef} 
      className={`relative py-24 overflow-hidden ${backgroundColor} ${className}`}
    >
      {/* Enhanced background with parallax */}
      <motion.div 
        style={{ y: enableParallax ? backgroundY : 0 }}
        className="absolute inset-0"
      >
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/2 to-transparent" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
      
      {/* Main content with advanced scaling */}
      <motion.div
        style={{ 
          scale: smoothScale,
          opacity: enableOpacity ? smoothOpacity : 1,
          y: enableParallax ? y : 0
        }}
        className="relative z-10 transform-gpu"
      >
        {children}
      </motion.div>

      {/* Scroll progress indicator (optional) */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-border/30 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <motion.div
          className="w-full bg-primary rounded-full origin-top"
          style={{ 
            scaleY: scrollYProgress,
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
          }}
        />
      </motion.div>
    </section>
  );
};