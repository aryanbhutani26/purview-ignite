import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Brain, Eye, Cpu, Zap, Layers, Sparkles } from "lucide-react";
import { FullScreenScrollScale } from "./FullScreenScrollScale";
import { GlassCard } from "./GlassCard";
import { MagneticButton } from "./MagneticButton";
import { useNavigate } from "react-router-dom";

const aiXrServices = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms that analyze complex data patterns and provide intelligent insights for better decision making."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Computer Vision",
    description: "Cutting-edge visual recognition technology that enables machines to interpret and understand visual information from the real world."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Neural Processing",
    description: "High-performance neural network processing that mimics human brain functions for complex problem-solving and pattern recognition."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Processing",
    description: "Lightning-fast data processing capabilities that deliver instant results and enable real-time decision making in critical applications."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "3D Modeling & Simulation",
    description: "Advanced 3D modeling tools and simulation environments that create immersive experiences and accurate virtual representations."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Augmented Intelligence",
    description: "Human-AI collaboration platform that enhances human capabilities with artificial intelligence for superior outcomes."
  }
];

export const PremiumFeatureCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <FullScreenScrollScale 
      backgroundColor="bg-gray-100 dark:bg-gray-700"
      minScale={0.85}
      maxScale={1}
      backgroundMinScale={0.3}
      backgroundMaxScale={1}
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">AI/XR INNOVATION</span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            AI/XR Labs enables you to{" "}
            <span className="text-gradient">co-innovate solutions</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Collaborate with our AI/XR experts to develop cutting-edge solutions that transform your industry and create new possibilities.
          </motion.p>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiXrServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 group cursor-pointer h-full" delay={index * 0.1}>
                <div className="mb-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 border border-primary/20">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <MagneticButton 
            variant="primary" 
            size="lg"
            onClick={() => navigate("/augmented-labs")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Explore the Labs now
            <ArrowRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </FullScreenScrollScale>
  );
};