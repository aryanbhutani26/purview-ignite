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
  // Double the logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className={cn("overflow-hidden relative", className)}>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex items-center gap-16"
        animate={{
          x: reverse ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 h-12 w-auto grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain filter brightness-0 invert"
            />
          </div>
        ))}
      </motion.div>
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
