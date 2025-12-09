import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary/20 text-secondary border border-secondary/50 hover:bg-secondary/30",
    outline: "border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/10",
    ghost: "text-foreground hover:bg-foreground/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : { onClick };

  return (
    <Component
      ref={ref as any}
      className={cn(
        "relative inline-flex items-center justify-center font-semibold rounded-full",
        "transition-all duration-300 ease-out",
        "overflow-hidden group",
        variants[variant],
        sizes[size],
        className
      )}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {/* Ripple Effect */}
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 bg-foreground/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
      </span>
      
      {/* Glow Effect */}
      {variant === "primary" && (
        <span className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full" />
      )}
      
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
        "flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors",
        className
      )}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.6 }}
    >
      <span className="text-sm font-medium">Scroll Down</span>
      <motion.div
        className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          className="w-1 h-2 bg-current rounded-full"
          animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </motion.button>
  );
};
