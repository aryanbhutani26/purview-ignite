import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { FullScreenScrollScale } from "./FullScreenScrollScale";

interface ShowcaseCard {
  title: string;
  subtitle: string;
  description: string;
  delay: number;
  image: string;
}

const showcaseFeatures: ShowcaseCard[] = [
  {
    title: "FLEXIBLE",
    subtitle: "LEAD TIMES",
    description: "Flexible lead times and order sizes that adapt to your business needs.",
    delay: 0,
    image: "/images/precision-tools.jpg"
  },
  {
    title: "REAL-TIME",
    subtitle: "PRODUCTION",
    description: "Real-time production visibility for complete transparency across your supply chain.",
    delay: 0.2,
    image: "/images/manufacturing.jpg"
  },
  {
    title: "RIGOROUS",
    subtitle: "QUALITY CONTROL",
    description: "Rigorous quality control that ensures every part is flawless and meets your specifications.",
    delay: 0.4,
    image: "/images/quality-control.jpg"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.9,
    rotateX: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // Premium easing curve
    },
  },
};

const titleVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 1.2,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

export const ManufacturingShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <FullScreenScrollScale 
      backgroundColor="bg-gray-200 dark:bg-gray-800"
      minScale={0.75}
      maxScale={1}
      backgroundMinScale={0.2}
      backgroundMaxScale={1}
      className="min-h-screen flex items-center justify-center"
    >
      {/* Content Container */}
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Inner content background */}
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, hsl(var(--secondary)) 0%, transparent 50%)`,
            backgroundSize: '400px 400px',
          }} />

          <div className="relative z-10">
            {/* Main Title */}
            <motion.div
              className="mb-16 text-center md:text-left"
              variants={titleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Manufacturing Is Now Easy -{" "}
                <br className="hidden md:block" />
                <span className="text-primary">And We Don't Say</span>
                <br />
                That Lightly
              </h1>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {showcaseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative perspective-1000"
                  variants={cardVariants}
                >
                  {/* Glass Card */}
                  <div className="relative p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)] transform-gpu">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Image instead of Icon */}
                      <motion.div
                        className="w-16 h-16 rounded-xl mb-6 overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-primary/50 transition-all duration-300"
                        initial={{ scale: 0, rotate: -90 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 0.8 + index * 0.1,
                          ease: [0.34, 1.56, 0.64, 1]
                        }}
                      >
                        <CheckCircle className="w-6 h-6 text-primary" />
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        className="text-2xl font-bold text-white mb-1 tracking-wide"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {feature.title}
                      </motion.h3>

                      {/* Subtitle */}
                      <motion.p
                        className="text-lg font-semibold text-primary mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.1 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {feature.subtitle}
                      </motion.p>

                      {/* Description */}
                      <motion.p
                        className="text-white/80 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: 1.2 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        {feature.description}
                      </motion.p>
                    </div>

                    {/* Shimmer effect */}
                    <div className="absolute inset-0 rounded-2xl overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              className="text-center"
              variants={buttonVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-primary/50 rounded-xl text-white font-semibold transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                CONSULT AN EXPERT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Floating elements for depth */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/60 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-secondary/60 rounded-full"
            animate={{
              y: [0, 15, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>
    </FullScreenScrollScale>
  );
};