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

export const ClientsSection = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-900 dark:via-blue-950/50 dark:to-indigo-950/30">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 dark:from-blue-300/30 dark:to-indigo-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/15 to-pink-400/15 dark:from-purple-300/25 dark:to-pink-300/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-400/10 via-blue-400/15 to-indigo-400/10 dark:from-cyan-300/20 dark:via-blue-300/25 dark:to-indigo-300/20 rounded-full blur-3xl" />
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-400/40 dark:bg-blue-300/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-indigo-400/40 dark:bg-indigo-300/60 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-purple-400/40 dark:bg-purple-300/60 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(147,197,253,0.15)_1px,transparent_0)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Clients Section */}
        <div className="mb-20 sm:mb-28">
          <div className="text-center mb-12 sm:mb-16">
            <FadeInText>
              <motion.span 
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20 border border-blue-500/20 dark:border-blue-400/30 text-blue-600 dark:text-blue-300 text-sm font-bold mb-6 backdrop-blur-sm shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                 TRUSTED BY
              </motion.span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <motion.h2 
                className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Our{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                    Partners
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </motion.h2>
            </FadeInText>
            <FadeInText delay={0.2}>
              <br />
              <motion.p 
                className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-6 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Purview Technologies collaborates with leading AR innovators
              </motion.p>
            </FadeInText>
          </div>
          <br />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500/50 dark:via-blue-400/50 to-transparent rounded-full" />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 dark:via-indigo-400/50 to-transparent rounded-full" />
            
            <LogoMarquee logos={clientLogos} speed={28} />
          </motion.div>
        </div>

        {/* Partners Section */}
       
      </div>
    </section>
  );
};
