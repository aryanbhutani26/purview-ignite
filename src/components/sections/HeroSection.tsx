import { motion } from "framer-motion";
import { AnimatedBeams, GridPattern, SpotlightEffect } from "../ui/AnimatedBeams";
import { MagneticButton, ScrollDownIndicator } from "../ui/MagneticButton";
import { GradientText } from "../ui/AnimatedText";
import { ArrowRight, Play } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <GridPattern />
      <SpotlightEffect />
      <AnimatedBeams />

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Transforming Reality</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="text-foreground">Future of Business</span>
            <br />
            <span className="text-foreground">Transformation with</span>
            <br />
            <GradientText className="text-5xl md:text-7xl lg:text-8xl">
              AI XR
            </GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Empowering industries with intelligent AR solutions, accelerating learning with 3D models, 
            and enabling real-time field service documentation with smart glasses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton variant="primary" size="lg">
              Read More
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
            <MagneticButton variant="outline" size="lg">
              <Play className="w-5 h-5" />
              Watch Demo
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            {[
              { value: "50+", label: "Global Clients" },
              { value: "99%", label: "Uptime SLA" },
              { value: "30%", label: "Faster Resolution" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <ScrollDownIndicator targetId="services" />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
    </section>
  );
};
