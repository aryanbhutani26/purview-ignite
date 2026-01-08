import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Logo {
  src: string;
  alt: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
  className?: string;
  speed?: number;
  reverse?: boolean;
}

export const LogoMarquee = ({ logos, className, speed = 30, reverse = false }: LogoMarqueeProps) => {
  // Create enough duplicates for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={cn("overflow-hidden relative w-full py-8", className)}>
      {/* Enhanced fade edges with gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
      
      {/* Subtle top and bottom fade */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-background/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-background/50 to-transparent z-10 pointer-events-none" />
      
      <div 
        className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 mx-12 h-24 w-60 flex items-center justify-center cursor-pointer group"
            whileHover={{ 
              scale: 1.1,
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: (index % logos.length) * 0.1,
              ease: "easeOut"
            }}
          >
            <div className="relative group-hover:drop-shadow-2xl transition-all duration-300">
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-indigo-400/0 to-purple-400/0 group-hover:from-blue-400/20 group-hover:via-indigo-400/20 group-hover:to-purple-400/20 dark:group-hover:from-blue-300/30 dark:group-hover:via-indigo-300/30 dark:group-hover:to-purple-300/30 rounded-xl blur-xl transition-all duration-500" />
              
              <img
                src={logo.src}
                alt={logo.alt}
                className="relative max-h-full max-w-full object-contain filter brightness-90 dark:brightness-110 dark:contrast-110 group-hover:brightness-100 dark:group-hover:brightness-125 transition-all duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

interface PartnersSectionProps {
  title: string;
  logos: Logo[];
  className?: string;
}

export const PartnersSection = ({ title, logos, className }: PartnersSectionProps) => {
  return (
    <div className={cn("py-16", className)}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <LogoMarquee logos={logos} speed={40} />
    </div>
  );
};
