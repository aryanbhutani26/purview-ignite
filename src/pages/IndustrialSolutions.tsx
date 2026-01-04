import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard, FeatureCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ProductViewer3D } from "@/components/3d/ProductViewer3D";
import { PageTransition } from "@/components/ui/PageTransition";
import {
  Factory, 
  Stethoscope, 
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
import { Link } from "react-router-dom";

const industries = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Empower field technicians with AR-guided repairs, real-time remote expert assistance, and hands-free documentation.",
    benefits: ["30% faster resolution", "Reduced downtime", "First-time fix rates improved"],
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "Healthcare",
    description: "Transform patient care with AR-assisted surgeries, medical training simulations, and remote diagnostics.",
    benefits: ["Enhanced precision", "Reduced training time", "Better patient outcomes"],
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Streamline production with AR work instructions, quality inspections, and predictive maintenance overlays.",
    benefits: ["40% fewer errors", "Faster onboarding", "Real-time analytics"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Defence & Aerospace",
    description: "Mission-critical AR solutions for training, maintenance, and tactical operations with highest security standards.",
    benefits: ["Enhanced situational awareness", "Secure communications", "Advanced training"],
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Infrastructure",
    description: "Visualize complex systems, manage assets, and conduct remote inspections with AR-powered tools.",
    benefits: ["Improved safety", "Asset visibility", "Reduced travel costs"],
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: "Logistics & Supply Chain",
    description: "Optimize warehouse operations, picking accuracy, and fleet management with AR guidance systems.",
    benefits: ["25% faster picking", "Error reduction", "Real-time tracking"],
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
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smart Phones",
    description: "Leverage the power of smartphones for AR experiences. Use our app to unlock XR capabilities.",
  },
  {
    icon: <Watch className="w-8 h-8" />,
    title: "Smart Watches",
    description: "Receive notifications and control XR experiences from your wrist with smartwatch integration.",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Smart Cameras",
    description: "Capture high-quality imagery for XR applications with our compatible smart cameras.",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Smart Drones",
    description: "Capture aerial imagery and create 3D maps with drone integration for XR experiences.",
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Smart Vehicles",
    description: "Enhance driving experiences with AR windshields and in-vehicle XR entertainment.",
  },
];

export default function IndustrialSolutions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                <MagneticButton variant="primary" size="lg">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer" glowColor="cyan">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{industry.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {industry.description}
                  </p>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-primary/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Interactive Experience */}
      <section className="py-16 sm:py-24 relative bg-card/30">
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
      </section>

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
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                delay={index * 0.1}
              />
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
              <GlassCard 
                key={index} 
                className="p-6 group cursor-pointer"
                delay={index * 0.1}
                glowColor="cyan"
              >
                <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="text-primary">{device.icon}</div>
                </div>
                <h4 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {device.title}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {device.description}
                </p>
              </GlassCard>
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
              <Link to="/#contact">
                <MagneticButton variant="primary" size="lg">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
