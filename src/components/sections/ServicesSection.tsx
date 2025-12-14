import { motion } from "framer-motion";
import { GlassCard, FeatureCard } from "../ui/GlassCard";
import { FadeInText } from "../ui/AnimatedText";
import { ProductViewer3D } from "../3d/ProductViewer3D";
import {
  Glasses, 
  Brain, 
  Smartphone, 
  Watch, 
  Camera, 
  Plane,
  Car,
  Cpu,
  Zap,
  Settings,
  Target,
  Lightbulb
} from "lucide-react";

const services = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Cognitive AI & Gen AI",
    description: "Harness the power of cognitive and generative AI to create intelligent, adaptive XR experiences that learn and evolve.",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Machine Learning & Automation",
    description: "Implement machine learning algorithms and hyper-automation to streamline processes and enhance XR experiences.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "AI-as-a-Service",
    description: "Leverage cutting-edge AI technologies to automate processes, enhance decision-making, and create intelligent XR experiences.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "R&D Innovation",
    description: "Pioneering research and development in AR/XR technologies, pushing the boundaries of what's possible.",
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Proof of Success",
    description: "Demonstrating measurable outcomes through pilot programs and scalable implementations across industries.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Adhoc Services",
    description: "Custom solutions tailored to specific client needs, from consulting to full-scale deployment.",
  },
];

const devices = [
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "Smart Glasses",
    description: "Experience augmented reality with our compatible smart glasses. Overlay digital information on the physical world.",
    cta: "View Compatible Models",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smart Phones",
    description: "Leverage the power of smartphones for AR experiences. Use our app to unlock XR capabilities.",
    cta: "Download Mobile App",
  },
  {
    icon: <Watch className="w-8 h-8" />,
    title: "Smart Watches",
    description: "Receive notifications and control XR experiences from your wrist with smartwatch integration.",
    cta: "Check Compatibility",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Smart Cameras",
    description: "Capture high-quality imagery for XR applications with our compatible smart cameras.",
    cta: "Explore Camera Options",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Smart Drones",
    description: "Capture aerial imagery and create 3D maps with drone integration for XR experiences.",
    cta: "View Drone Solutions",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Smart Vehicles",
    description: "Enhance driving experiences with AR windshields and in-vehicle XR entertainment.",
    cta: "Discover Vehicle Integration",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <FadeInText delay={0}>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              SERVICES
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Empowering Businesses with
              <br />
              <span className="text-gradient">Intelligent Solutions</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Our AI XR solutions enable industries with intelligent remote assistance, 
              accelerate learning with 3D AR models, and document visual inspections in real-time.
            </p>
          </FadeInText>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-24">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* 3D Interactive Experience */}
        <div className="mb-16 sm:mb-24">
          <FadeInText delay={0.3}>
            <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
              Interactive <span className="text-gradient">3D Experience</span>
            </h3>
          </FadeInText>
          <ProductViewer3D />
        </div>

        {/* Compatible Devices */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeInText>
            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4">
              Compatible <span className="text-gradient">Smart Devices</span>
            </h3>
          </FadeInText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {devices.map((device, index) => (
            <GlassCard 
              key={index} 
              className="p-6 group cursor-pointer"
              delay={index * 0.1}
              glowColor="cyan"
            >
              <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary">{device.icon}</div>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {device.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {device.description}
              </p>
              <button className="text-primary text-sm font-medium hover:text-secondary transition-colors flex items-center gap-2">
                {device.cta}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
