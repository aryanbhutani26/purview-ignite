import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PageTransition } from "@/components/ui/PageTransition";
import {
  Factory, 
  Cross, 
  Shield, 
  Wrench, 
  Building2, 
  Truck,
  Brain,
  Cpu,
  Target,
  Zap,
  Settings,
  Lightbulb,
  Glasses,
  Smartphone,
  Watch,
  Camera,
  Plane,
  Car,
  ArrowRight
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const industries = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Empower field technicians with AR-guided repairs, real-time remote expert assistance, and hands-free documentation.",
    benefits: ["30% faster resolution", "Reduced downtime", "First-time fix rates improved"],
    image: "/images/industrial_solutions/fieldservice.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
  },
  {
    icon: <Cross className="w-8 h-8" />,
    title: "Healthcare",
    description: "Transform patient care with AR-assisted surgeries, medical training simulations, and remote diagnostics.",
    benefits: ["Enhanced precision", "Reduced training time", "Better patient outcomes"],
    image: "/images/industrial_solutions/healthcare.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Streamline production with AR work instructions, quality inspections, and predictive maintenance overlays.",
    benefits: ["40% fewer errors", "Faster onboarding", "Real-time analytics"],
    image: "/images/industrial_solutions/manufacturing.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Defence & Aerospace",
    description: "Mission-critical AR solutions for training, maintenance, and tactical operations with highest security standards.",
    benefits: ["Enhanced situational awareness", "Secure communications", "Advanced training"],
    image: "/images/industrial_solutions/aerospace.png",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Infrastructure",
    description: "Visualize complex systems, manage assets, and conduct remote inspections with AR-powered tools.",
    benefits: ["Improved safety", "Asset visibility", "Reduced travel costs"],
    image: "/images/industrial_solutions/constructions.png",
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20"
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logistics & Supply Chain",
    description: "Optimize warehouse operations, picking accuracy, and fleet management with AR guidance systems.",
    benefits: ["25% faster picking", "Error reduction", "Real-time tracking"],
    image: "/images/industrial_solutions/logistics.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
];

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
    image: "/images/smart_devices/glasses.png",
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smart Phones",
    description: "Leverage the power of smartphones for AR experiences. Use our app to unlock XR capabilities.",
    image: "/images/smart_devices/phone.png",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20"
  },
  {
    icon: <Watch className="w-8 h-8" />,
    title: "Smart Watches",
    description: "Receive notifications and control XR experiences from your wrist with smartwatch integration.",
    image: "/images/smart_devices/watch.png",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Smart Cameras",
    description: "Capture high-quality imagery for XR applications with our compatible smart cameras.",
    image: "/images/smart_devices/camera.png",
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20"
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Smart Drones",
    description: "Capture aerial imagery and create 3D maps with drone integration for XR experiences.",
    image: "/images/smart_devices/drone.png",
    gradient: "from-red-500/20 via-pink-500/20 to-rose-500/20"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Smart Vehicles",
    description: "Enhance driving experiences with AR windshields and in-vehicle XR entertainment.",
    image: "/images/smart_devices/car.png",
    gradient: "from-gray-500/20 via-slate-500/20 to-zinc-500/20"
  },
];

export default function IndustrialSolutions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRequestDemo = () => {
    // Navigate to home page with state to indicate we want to scroll to contact
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                AUGMENTED INDUSTRIAL SOLUTIONS
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Transforming Industries with
                <br />
                <span className="text-gradient">AI XR Innovation</span>
              </h1>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Empower your frontline workforce with intelligent AR solutions that enhance productivity, 
                reduce errors, and accelerate training across every industry vertical.
              </p>
            </FadeInText>
            <FadeInText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton 
                  variant="primary" 
                  size="lg"
                  onClick={handleRequestDemo}
                >
                  Request Demo
                </MagneticButton>
                <MagneticButton variant="secondary" size="lg">
                  View Case Studies
                </MagneticButton>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Industries We <span className="text-gradient">Transform</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our AR/AI solutions are tailored to meet the unique challenges of each industry vertical.
              </p>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
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
                  relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[420px] lg:h-[450px]
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
                    className="absolute top-4 right-4 w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-white drop-shadow-lg">
                      {industry.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                    {/* Industry Title - Overlaid on image */}
                    <motion.div
                      className="pt-4 sm:pt-6 lg:pt-8 z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-lg mb-2">
                        {industry.title}
                      </h3>
                    </motion.div>

                    {/* Industry Info - Bottom section */}
                    <div className="mt-auto">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                        {industry.description}
                      </p>
                      
                      {/* Benefits List */}
                      <ul className="space-y-2 mb-4">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-primary/90 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Learn More Link */}
                      <motion.button
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group/link"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                      <circle cx="100" cy="0" r="60" fill="url(#cornerGradient)" />
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

      {/* 3D Interactive Experience */}
      {/* <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Interactive <span className="text-gradient">3D Experience</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our smart glasses technology with an interactive 3D viewer.
              </p>
            </FadeInText>
          </div>
          <ProductViewer3D />
        </div>
      </section> */}

      {/* AI Services */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Our AI-Powered <span className="text-gradient">Services</span>
              </h2>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <GlassCard 
                key={index} 
                className="p-6 group cursor-pointer"
                delay={index * 0.1}
                glowColor="cyan"
              >
                <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-primary">{service.icon}</div>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible Devices */}
      <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Compatible <span className="text-gradient">Smart Devices</span>
              </h2>
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
                    className="absolute top-4 right-4 w-16 h-16 sm:w-18 sm:h-18 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center z-10"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-white drop-shadow-lg">
                      {device.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 lg:p-7">
                    {/* Device Title - Overlaid on image */}
                    <motion.div
                      className="pt-4 sm:pt-6 lg:pt-8 z-10"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white drop-shadow-lg mb-2">
                        {device.title}
                      </h3>
                    </motion.div>

                    {/* Device Info - Bottom section */}
                    <div className="mt-auto">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                        {device.description}
                      </p>

                      {/* Learn More Link */}
                      <motion.button
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group/link"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/link:rotate-45 transition-transform duration-300" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24">
                    <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                      <circle cx="100" cy="0" r="60" fill="url(#cornerGradient)" />
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12 text-center" glowColor="purple">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-gradient">Operations?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join leading enterprises using our AR/AI solutions to revolutionize their frontline operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton 
                variant="primary" 
                size="lg"
                onClick={handleRequestDemo}
              >
                Contact Us <ArrowRight className="w-5 h-5 ml-2" />
              </MagneticButton>
            </div>
          </GlassCard>
        </div>
      </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
