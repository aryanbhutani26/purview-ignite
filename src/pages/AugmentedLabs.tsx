import { useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PageTransition } from "@/components/ui/PageTransition";
import { 
  Microscope, 
  Lightbulb, 
  Rocket, 
  Layers, 
  Cpu, 
  Globe,
  ArrowRight,
  FlaskConical,
  Binary,
  Sparkles,
  Atom,
  Zap,
  Network
} from "lucide-react";
import { Link } from "react-router-dom";

const researchAreas = [
  {
    icon: <Atom className="w-6 h-6" />,
    title: "Extended Reality (XR)",
    description: "Pioneering research in AR, VR, and MR technologies to create immersive experiences that blur the line between physical and digital worlds.",
    tags: ["Spatial Computing", "Mixed Reality", "Holographics"],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Artificial Intelligence",
    description: "Developing cutting-edge AI models for computer vision, natural language processing, and predictive analytics in XR environments.",
    tags: ["Machine Learning", "Deep Learning", "Neural Networks"],
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Edge Computing",
    description: "Building low-latency processing systems that enable real-time AR/AI experiences on wearable devices.",
    tags: ["IoT", "5G Integration", "Edge AI"],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Digital Twins",
    description: "Creating accurate virtual replicas of physical environments and systems for simulation and optimization.",
    tags: ["3D Mapping", "IoT Sensors", "Real-time Sync"],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "GenAI and GenAI Agents",
    description: "Exploring the frontiers of generative models for creating dynamic, context-aware XR content and experiences.",
    tags: ["LLMs", "Image Generation", "3D Synthesis"],
  },
  {
    icon: <Binary className="w-6 h-6" />,
    title: "Quantum Computing",
    description: "Investigating quantum algorithms for complex optimization problems in AR/AI applications.",
    tags: ["Quantum ML", "Optimization", "Cryptography"],
  },
];

const labServices = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Proof of Concept",
    description: "Rapid prototyping and validation of innovative AR/AI concepts with measurable outcomes.",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Applied Research",
    description: "Industry-focused research programs solving real-world challenges with emerging technologies.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Consulting",
    description: "Strategic guidance on technology adoption, roadmapping, and digital transformation.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Incubation Programs",
    description: "Supporting startups and internal ventures in the AR/AI space with resources and mentorship.",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Technology Transfer",
    description: "Licensing and commercializing research breakthroughs for industry applications.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Prototyping",
    description: "Agile development of functional prototypes to test and iterate on innovative ideas.",
  },
];

const collaborations = [
  "Academic Institutions",
  "Research Labs",
  "Industry Partners",
  "Government Agencies",
  "Startups & Ventures",
  "Open Source Community",
];

export default function AugmentedLabs() {
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
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                AUGMENTED LABS (AIXR)
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Where Innovation Meets
                <br />
                <span className="text-gradient">Reality</span>
              </h1>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Our R&D hub pushing the boundaries of AI and Extended Reality technologies. 
                From fundamental research to applied innovations, we're shaping the future of human-computer interaction.
              </p>
            </FadeInText>
            <FadeInText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton variant="primary" size="lg">
                  Explore Research
                </MagneticButton>
                <MagneticButton variant="secondary" size="lg">
                  Collaborate With Us
                </MagneticButton>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Research <span className="text-gradient">Focus Areas</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Exploring the cutting edge of technology to create breakthrough solutions.
              </p>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer" glowColor="cyan">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{area.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Services */}
      <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Lab <span className="text-gradient">Services</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From ideation to commercialization, we provide end-to-end innovation support.
              </p>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer" glowColor="cyan">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12" glowColor="purple">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Microscope className="w-12 h-12 text-accent mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Open <span className="text-gradient">Collaboration</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe in the power of collaboration. Our labs are open to partnerships 
                  with academic institutions, industry leaders, and innovative startups.
                </p>
                <p className="text-muted-foreground">
                  Together, we can accelerate the development of transformative technologies 
                  that benefit humanity.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {collaborations.map((item, index) => (
                  <motion.div
                    key={index}
                    className="p-4 rounded-xl bg-background/50 border border-border/50 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <span className="text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Innovation <span className="text-gradient">Pipeline</span>
              </h2>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Ideation", "Research", "Prototyping", "Commercialization"].map((stage, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-lg">{stage}</h4>
                </GlassCard>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to <span className="text-gradient">Innovate?</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you have a research challenge, a bold idea, or want to explore partnership 
              opportunities, our labs are ready to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <MagneticButton variant="primary" size="lg">
                  Start a Project <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
