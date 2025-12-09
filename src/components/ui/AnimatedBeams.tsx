import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface BeamProps {
  className?: string;
}

export const AnimatedBeams = ({ className }: BeamProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(186 100% 42% / 0.4) 0%, transparent 70%)",
          top: "-200px",
          right: "-200px",
        }}
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
        className="absolute w-[800px] h-[800px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(263 70% 50% / 0.4) 0%, transparent 70%)",
          bottom: "-300px",
          left: "-200px",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(186 100% 50% / 0.6), transparent)`,
            width: "100%",
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: i % 2 === 0 ? "hsl(186 100% 50%)" : "hsl(263 70% 60%)",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export const GridPattern = ({ className }: BeamProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(186 100% 50% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(186 100% 50% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <div 
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, hsl(222 47% 5%) 70%)",
        }}
      />
    </div>
  );
};

export const SpotlightEffect = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div 
        className="absolute w-full h-full"
        style={{
          background: `
            radial-gradient(800px circle at 50% 30%, hsl(263 70% 50% / 0.15), transparent 40%),
            radial-gradient(600px circle at 80% 50%, hsl(186 100% 42% / 0.1), transparent 40%)
          `,
        }}
      />
    </motion.div>
  );
};
