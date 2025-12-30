import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { FadeInText } from "../ui/AnimatedText";
import { useNavigate } from "react-router-dom";
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
  ArrowRight,
  Wrench, 
  // Plane, 
  Heart, 
  Factory, 
  Package, 
  Building2 
} from "lucide-react";

interface Device {
  icon: React.ReactNode;
  title: string;
  description: string;
  cta: string;
  secondaryCta?: string;
  tourLink?: string;
}

const industries = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Remote assistance and real-time documentation for technicians in the field.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Aerospace & Defence",
    description: "Mission-critical AR solutions for defense and aviation industries.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare",
    description: "AR-assisted surgery, training, and patient care solutions.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Smart factory solutions with AR-guided assembly and quality control.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Warehouse & Logistics",
    description: "AR-powered picking, packing, and inventory management systems.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Construction & Oil & Gas",
    description: "Safety compliance and remote inspection for hazardous environments.",
    color: "from-slate-500 to-zinc-500",
  },
];



// const services = [
//   {
//     icon: <Brain className="w-8 h-8" />,
//     title: "Cognitive AI & Gen AI",
//     description: "Harness the power of cognitive and generative AI to create intelligent, adaptive XR experiences that learn and evolve.",
//   },
//   {
//     icon: <Cpu className="w-8 h-8" />,
//     title: "Machine Learning & Automation",
//     description: "Implement machine learning algorithms and hyper-automation to streamline processes and enhance XR experiences.",
//   },
//   {
//     icon: <Target className="w-8 h-8" />,
//     title: "AI-as-a-Service",
//     description: "Leverage cutting-edge AI technologies to automate processes, enhance decision-making, and create intelligent XR experiences.",
//   },
//   {
//     icon: <Zap className="w-8 h-8" />,
//     title: "R&D Innovation",
//     description: "Pioneering research and development in AR/XR technologies, pushing the boundaries of what's possible.",
//   },
//   {
//     icon: <Settings className="w-8 h-8" />,
//     title: "Proof of Success",
//     description: "Demonstrating measurable outcomes through pilot programs and scalable implementations across industries.",
//   },
//   {
//     icon: <Lightbulb className="w-8 h-8" />,
//     title: "Adhoc Services",
//     description: "Custom solutions tailored to specific client needs, from consulting to full-scale deployment.",
//   },
// ];

const devices: Device[] = [
  {
    icon: <Glasses className="w-8 h-8" />,
    title: "Smart Glasses",
    description: "Experience augmented reality with our compatible smart glasses. Overlay digital information on the physical world.",
    cta: "View Compatible Models",
    secondaryCta: "Get a tour",
    tourLink: "/3d-tour",
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
  const navigate = useNavigate();

  return (
    <section id="services" className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 dark:from-emerald-950 dark:via-cyan-950 dark:to-blue-950">
      {/* Vibrant Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeInText delay={0}>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Platform Offerings
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

        

        <div className=" mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {industries.map((industry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <GlassCard 
                        className="p-5 sm:p-6 lg:p-8 h-full group cursor-pointer" 
                        glowColor="mixed"
                      >
                        {/* Icon with Gradient Background */}
                        <div className={`
                          w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6
                          bg-gradient-to-br ${industry.color}
                          flex items-center justify-center
                          group-hover:scale-110 group-hover:rotate-3
                          transition-all duration-300
                          shadow-lg
                        `}>
                          <div className="text-white [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8">{industry.icon}</div>
                        </div>
        
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                          {industry.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          {industry.description}
                        </p>
        
                        {/* Hover Arrow */}
                        <motion.div
                          className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                          initial={{ x: -10 }}
                          whileHover={{ x: 0 }}
                        >
                          <span className="text-sm font-medium">Learn More</span>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </motion.div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>

        {/* AI Services Grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <GlassCard 
              key={index} 
              className="p-6 group cursor-pointer"
              delay={index * 0.1}
            >
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
          ))}
        </div> */}

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
              <div className="mb-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300 border border-primary/20">
                <div className="text-primary">{device.icon}</div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {device.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                {device.description}
              </p>
              
              {/* Buttons */}
              <div className="space-y-2">
                <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2 w-full">
                  {device.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                {/* Show "Get a tour" button only for Smart Glasses */}
                {device.secondaryCta && device.tourLink && (
                  <button 
                    onClick={() => navigate(device.tourLink)}
                    className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2 w-full bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg border border-primary/20"
                  >
                    {device.secondaryCta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};