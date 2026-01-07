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
    <div className={cn("overflow-hidden relative w-full py-4", className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div 
        className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 h-24 w-60 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
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
