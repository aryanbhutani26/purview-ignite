import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { FadeInText } from "../ui/AnimatedText";
import { SmartSolutionsSection } from "./SmartSolutionsSection";
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
  Cross, 
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
  image: string;
  gradient: string;
}

const industries = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Remote assistance and real-time documentation for technicians in the field.",
    color: "from-cyan-500 to-blue-500",
    image: "/images/industrial_solutions/fieldservice.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Aerospace & Defence",
    description: "Mission-critical AR solutions for defense and aviation industries.",
    color: "from-purple-500 to-indigo-500",
    image: "/images/industrial_solutions/aerospace.png",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20"
  },
  {
    icon: <Cross className="w-8 h-8" />,
    title: "Healthcare",
    description: "AR-assisted surgery, training, and patient care solutions.",
    color: "from-green-500 to-emerald-500",
    image: "/images/industrial_solutions/healthcare.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Smart factory solutions with AR-guided assembly and quality control.",
    color: "from-amber-500 to-orange-500",
    image: "/images/industrial_solutions/manufacturing.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Warehouse & Logistics",
    description: "AR-powered picking, packing, and inventory management systems.",
    color: "from-emerald-500 to-teal-500",
    image: "/images/industrial_solutions/logistics.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Construction & Oil & Gas",
    description: "Safety compliance and remote inspection for hazardous environments.",
    color: "from-slate-500 to-zinc-500",
    image: "/images/industrial_solutions/constructions.png",
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20"
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
    // secondaryCta: "Get a tour",
    // tourLink: "/3d-tour",
    image: "/images/smart_devices/glasses.png",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smart Phones",
    description: "Leverage the power of smartphones for AR experiences. Use our app to unlock XR capabilities.",
    cta: "Download Mobile App",
    image: "/images/smart_devices/phone.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Watch className="w-8 h-8" />,
    title: "Smart Watches",
    description: "Receive notifications and control XR experiences from your wrist with smartwatch integration.",
    cta: "Check Compatibility",
    image: "/images/smart_devices/watch.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Smart Cameras",
    description: "Capture high-quality imagery for XR applications with our compatible smart cameras.",
    cta: "Explore Camera Options",
    image: "/images/smart_devices/camera.png",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Smart Drones",
    description: "Capture aerial imagery and create 3D maps with drone integration for XR experiences.",
    cta: "View Drone Solutions",
    image: "/images/smart_devices/drone.png",
    gradient: "from-cyan-500/20 via-sky-500/20 to-blue-500/20"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Smart Vehicles",
    description: "Enhance driving experiences with AR windshields and in-vehicle XR entertainment.",
    cta: "Discover Vehicle Integration",
    image: "/images/smart_devices/car.png",
    gradient: "from-red-500/20 via-rose-500/20 to-pink-500/20"
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

        

        <div className="mb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Card with Background Image */}
              <div className={`
                relative rounded-2xl sm:rounded-3xl overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]
                bg-gradient-to-br ${industry.gradient}
                border border-foreground/10
                group-hover:border-primary/30
                transition-all duration-500
                group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]
                backdrop-blur-sm
              `}>
                {/* Industry Image Background - Top 40% */}
                <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                  <motion.img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                </div>

                {/* Industry Icon - Overlaid on image */}
                <motion.div 
                  className={`
                    absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl
                    bg-gradient-to-br ${industry.color}
                    flex items-center justify-center z-10 shadow-lg
                  `}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8">
                    {industry.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-5 sm:p-6 lg:p-7">
                  {/* Empty space for image area - Top 40% */}
                  <div className="h-[40%]"></div>

                  {/* Industry Title - Between image and description */}
                  <motion.div
                    className="py-3 z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-foreground mb-0">
                      {industry.title}
                    </h3>
                  </motion.div>

                  {/* Industry Info - Bottom section */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                      {industry.description}
                    </p>

                    {/* Learn More Link */}
                    {/* <motion.div
                      className="flex items-center gap-2 text-primary transition-opacity mt-auto"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Learn More</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div> */}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                    <circle cx="100" cy="0" r="50" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
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

      </div>
      
      {/* Smart Solutions Section */}
      <SmartSolutionsSection />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Card with Background Image */}
              <div className={`
                relative rounded-2xl sm:rounded-3xl overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px]
                bg-gradient-to-br ${device.gradient}
                border border-foreground/10
                group-hover:border-primary/30
                transition-all duration-500
                group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]
                backdrop-blur-sm
              `}>
                {/* Device Image Background - Top 40% */}
                <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                  <motion.img
                    src={device.image}
                    alt={device.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                </div>

                {/* Device Icon - Overlaid on image */}
                <motion.div 
                  className="absolute top-4 right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white drop-shadow-lg">
                    {device.icon}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-5 sm:p-6 lg:p-7">
                  {/* Empty space for image area - Top 40% */}
                  <div className="h-[40%]"></div>

                  {/* Device Title - Between image and description */}
                  <motion.div
                    className="py-3 z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-lg sm:text-xl font-bold text-foreground mb-0">
                      {device.title}
                    </h4>
                  </motion.div>

                  {/* Device Info - Bottom section */}
                  <div className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground text-xs sm:text-sm mb-4">
                      {device.description}
                    </p>
                    
                    {/* Buttons */}
                    <div className="space-y-2 mt-auto">
                      <button className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2 w-full">
                        {device.cta}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      
                      {/* Show "Get a tour" button only for Smart Glasses */}
                      {/* {device.secondaryCta && device.tourLink && (
                        <button 
                          onClick={() => navigate(device.tourLink)}
                          className="text-primary text-sm font-medium hover:text-primary/80 transition-colors flex items-center gap-2 w-full bg-primary/10 hover:bg-primary/20 px-3 py-2 rounded-lg border border-primary/20"
                        >
                          {device.secondaryCta}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )} */}
                    </div>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="100" cy="0" r="50" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};