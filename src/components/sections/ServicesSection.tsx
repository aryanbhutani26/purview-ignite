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
  Lightbulb,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: <Brain className="w-5 h-5" />,
    title: "Cognitive AI & Gen AI",
    description: "Harness the power of cognitive and generative AI to create intelligent, adaptive XR experiences that learn and evolve.",
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Machine Learning & Automation",
    description: "Implement machine learning algorithms and hyper-automation to streamline processes and enhance XR experiences.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "AI-as-a-Service",
    description: "Leverage cutting-edge AI technologies to automate processes, enhance decision-making, and create intelligent XR experiences.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "R&D Innovation",
    description: "Pioneering research and development in AR/XR technologies, pushing the boundaries of what's possible.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Proof of Success",
    description: "Demonstrating measurable outcomes through pilot programs and scalable implementations across industries.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Adhoc Services",
    description: "Custom solutions tailored to specific client needs, from consulting to full-scale deployment.",
  },
];

const devices = [
  {
    icon: <Glasses className="w-6 h-6" />,
    title: "Smart Glasses",
    description: "Experience augmented reality with our compatible smart glasses. Overlay digital information on the physical world.",
    cta: "View Compatible Models",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Smart Phones",
    description: "Leverage the power of smartphones for AR experiences. Use our app to unlock XR capabilities.",
    cta: "Download Mobile App",
  },
  {
    icon: <Watch className="w-6 h-6" />,
    title: "Smart Watches",
    description: "Receive notifications and control XR experiences from your wrist with smartwatch integration.",
    cta: "Check Compatibility",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Smart Cameras",
    description: "Capture high-quality imagery for XR applications with our compatible smart cameras.",
    cta: "Explore Camera Options",
  },
  {
    icon: <Plane className="w-6 h-6" />,
    title: "Smart Drones",
    description: "Capture aerial imagery and create 3D maps with drone integration for XR experiences.",
    cta: "View Drone Solutions",
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Smart Vehicles",
    description: "Enhance driving experiences with AR windshields and in-vehicle XR entertainment.",
    cta: "Discover Vehicle Integration",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden bg-background">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeInText delay={0}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Services
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
              Empowering Businesses with{" "}
              <span className="text-primary">Intelligent Solutions</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Our AI XR solutions enable industries with intelligent remote assistance, 
              accelerate learning with 3D AR models, and document visual inspections in real-time.
            </p>
          </FadeInText>
        </div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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
        <div className="mb-24">
          <FadeInText delay={0.3}>
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              Interactive <span className="text-primary">3D Experience</span>
            </h3>
          </FadeInText>
          <ProductViewer3D />
        </div>

        {/* Compatible Devices */}
        <div className="mb-12">
          <FadeInText>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-foreground">
              Compatible <span className="text-primary">Smart Devices</span>
            </h3>
          </FadeInText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device, index) => (
            <GlassCard 
              key={index} 
              className="p-6 group cursor-pointer"
              delay={index * 0.1}
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                <div className="text-primary">{device.icon}</div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {device.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {device.description}
              </p>
              <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2">
                {device.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};