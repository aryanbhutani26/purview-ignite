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
  glowColor = "cyan",
  delay = 0 
}: GlassCardProps) => {
  const glowStyles = {
    cyan: "hover:shadow-[0_0_30px_hsl(186_100%_42%/0.3)]",
    purple: "hover:shadow-[0_0_30px_hsl(263_70%_50%/0.3)]",
    mixed: "hover:shadow-[0_0_30px_hsl(186_100%_42%/0.2),0_0_60px_hsl(263_70%_50%/0.2)]",
  };

  return (
    <motion.div
      className={cn(
        "relative rounded-2xl overflow-hidden",
        "bg-card/60 backdrop-blur-xl",
        "border border-foreground/10",
        hoverEffect && "transition-all duration-500 hover:-translate-y-2",
        hoverEffect && glowStyles[glowColor],
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 pointer-events-none" />
      
      {/* Shimmer Effect */}
      {hoverEffect && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/5 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
        </div>
      )}
      
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
      glowColor="mixed"
    >
      <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <div className="text-primary group-hover:text-secondary transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
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
        "relative rounded-2xl overflow-hidden group",
        "min-h-[500px] flex flex-col justify-end",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        <img 
          src={logo} 
          alt={title} 
          className="h-12 mb-4 object-contain filter brightness-0 invert opacity-90"
        />
        <h5 className="text-primary text-sm font-medium mb-1">{title}</h5>
        <h4 className="text-xl font-semibold mb-3 text-foreground">{subtitle}</h4>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{description}</p>
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:text-secondary transition-colors font-medium text-sm group/link"
        >
          Know More 
          <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};
