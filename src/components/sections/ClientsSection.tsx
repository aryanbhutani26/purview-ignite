import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { LogoMarquee } from "../ui/LogoMarquee";

const clientLogos = [
  { src: "/images/logos/kaynes.png", alt: "Kaynes Technology" },
  { src: "/images/logos/medina.png", alt: "Medina" },
  { src: "/images/logos/microlink.png", alt: "Microlink" },
  { src: "/images/logos/metaverse.png", alt: "Metaverse" },
   { src: "/images/logos/vuzix.png", alt: "Vuzix" },
   { src: "/images/logos/rayneo.png", alt: "RayNeo" },
     { src: "/images/logos/digilens.png", alt: "DigiLens" },
];

const partnerLogos = [
  // { src: "/images/logos/vuzix.png", alt: "Vuzix" },
  // { src: "/images/logos/digilens.png", alt: "DigiLens" },
  // { src: "/images/logos/rayneo.png", alt: "RayNeo" },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-indigo-950 dark:via-blue-950 dark:to-cyan-950">
      {/* Cool Blue Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-cyan-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <FadeInText>
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                TRUSTED BY
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                Our <span className="text-gradient">Partners</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Purview Technologies collaborates with leading AR innovators
              </p>
            </FadeInText>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <LogoMarquee logos={clientLogos} speed={28} />
          </motion.div>
        </div>

        {/* Partners Section */}
       
      </div>
    </section>
  );
};
