import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FullScreenScrollScaleProps {
  children: ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  backgroundColor?: string;
  backgroundMinScale?: number;
  backgroundMaxScale?: number;
}

export const FullScreenScrollScale = ({ 
  children, 
  className = "",
  minScale = 0.8,
  maxScale = 1,
  backgroundColor = "bg-gray-200 dark:bg-gray-800",
  backgroundMinScale = 0.3,
  backgroundMaxScale = 1
}: FullScreenScrollScaleProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Content scaling - smooth transition
  const contentScale = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.8, 1], 
    [minScale, maxScale, maxScale, minScale]
  );
  
  const smoothContentScale = useSpring(contentScale, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Background scaling - starts very small and grows to fill screen
  const backgroundScale = useTransform(
    scrollYProgress, 
    [0, 0.15, 0.85, 1], 
    [backgroundMinScale, backgroundMaxScale, backgroundMaxScale, backgroundMinScale]
  );
  
  const smoothBackgroundScale = useSpring(backgroundScale, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001
  });

  // Opacity for smooth fade in/out
  const opacity = useTransform(
    scrollYProgress, 
    [0, 0.1, 0.9, 1], 
    [0.3, 1, 1, 0.3]
  );
  
  const smoothOpacity = useSpring(opacity, {
    stiffness: 100,
    damping: 30
  });

  // Background position to keep it centered
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <section 
      ref={containerRef} 
      className={`relative py-24 overflow-hidden ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {/* Full Screen Scaling Background */}
      <motion.div
        className={`fixed inset-0 ${backgroundColor} origin-center`}
        style={{ 
          scale: smoothBackgroundScale,
          opacity: smoothOpacity,
          y: backgroundY,
          zIndex: -1
        }}
      />

      {/* Additional background effects that scale with the main background */}
      <motion.div
        className="fixed inset-0 origin-center"
        style={{ 
          scale: smoothBackgroundScale,
          opacity: smoothOpacity,
          zIndex: -1
        }}
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent dark:via-white/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/3 to-transparent" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </motion.div>
      
      {/* Content with independent scaling */}
      <motion.div
        style={{ 
          scale: smoothContentScale,
        }}
        className="relative z-10 transform-gpu"
      >
        {children}
      </motion.div>

      {/* Scroll progress indicator */}
      <motion.div
        className="fixed left-4 top-1/2 -translate-y-1/2 w-1 h-32 bg-border/30 rounded-full overflow-hidden z-20"
        style={{ opacity: smoothOpacity }}
      >
        <motion.div
          className="w-full bg-primary rounded-full origin-top"
          style={{ 
            scaleY: scrollYProgress,
          }}
        />
      </motion.div>
    </section>
  );
};