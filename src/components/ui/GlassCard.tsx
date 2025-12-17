import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: "cyan" | "purple" | "mixed";
  delay?: number;
}

export const GlassCard = ({ 
  children, 
  className, 
  hoverEffect = true,
  delay = 0 
}: GlassCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden",
        "bg-card",
        "border border-border",
        hoverEffect && "transition-all duration-300 hover:-translate-y-1 hover:shadow-soft",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, className, delay = 0 }: FeatureCardProps) => {
  return (
    <GlassCard 
      className={cn("p-6 group cursor-pointer", className)} 
      delay={delay}
    >
      <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
        <div className="text-primary">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </GlassCard>
  );
};

interface ProductCardProps {
  image: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  className?: string;
  delay?: number;
}

export const ProductCard = ({ 
  image, 
  logo, 
  title, 
  subtitle, 
  description, 
  link,
  className, 
  delay = 0 
}: ProductCardProps) => {
  return (
    <motion.div
      className={cn(
        "relative rounded-xl overflow-hidden group bg-card border border-border",
        "min-h-[450px] flex flex-col justify-end",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 p-6">
        <img 
          src={logo} 
          alt={title} 
          className="h-10 mb-3 object-contain"
        />
        <h5 className="text-primary text-sm font-medium mb-1">{title}</h5>
        <h4 className="text-lg font-semibold mb-2 text-foreground">{subtitle}</h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm"
        >
          Know More 
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};