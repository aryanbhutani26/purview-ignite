import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
}

export const MagneticButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  href,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-subtle hover:shadow-soft",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-border bg-transparent text-foreground hover:bg-muted hover:border-foreground/20",
    ghost: "text-foreground hover:bg-muted",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      ref={ref as any}
      className={cn(
        "relative inline-flex items-center justify-center font-medium rounded-lg",
        "transition-all duration-300 ease-out",
        variants[variant],
        sizes[size],
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Component>
  );
};

interface ScrollDownIndicatorProps {
  targetId: string;
  className?: string;
}

export const ScrollDownIndicator = ({ targetId, className }: ScrollDownIndicatorProps) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      className={cn(
        "flex flex-col items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group",
        className
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span 
        className="text-xs font-medium tracking-wider uppercase"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
      </motion.span>
      
      <motion.div 
        className="relative w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2 group-hover:border-foreground transition-colors"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="w-1.5 h-2 bg-current rounded-full"
          animate={{ 
            opacity: [1, 0.4, 1], 
            y: [0, 8, 0],
            scaleY: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        
        {/* Additional animated dots for better visibility */}
        <motion.div
          className="absolute top-3 w-1 h-1 bg-current rounded-full opacity-60"
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 6, 12]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        
        <motion.div
          className="absolute top-4 w-0.5 h-0.5 bg-current rounded-full opacity-40"
          animate={{ 
            opacity: [0, 1, 0],
            y: [0, 4, 8]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </motion.div>
      
      {/* Subtle glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)",
          filter: "blur(8px)"
        }}
      />
    </motion.button>
  );
};