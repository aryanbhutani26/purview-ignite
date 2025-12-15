import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { 
  Eye, 
  Ear, 
  Hand, 
  Brain, 
  Heart, 
  Users,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Shield,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "seva",
    title: "SEVA",
    subtitle: "Speech Enabled Voice Assistant",
    description: "Smart glasses for the Visually Impaired and Blind. AI application powered by Purview on Smart glass to enhance daily living experience for the community providing guidance by an Audio companion 'Hello Seva'",
    link: "https://sevavision.com/",
    icon: <Eye className="w-12 h-12" />,
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    features: ["Voice-guided navigation", "Object recognition", "Text-to-speech", "Obstacle detection"],
  },
  {
    id: "maitri",
    title: "Maîtiri",
    subtitle: "Multi-Lingual Assistant for Travel and Retail",
    description: "AI-powered voice assistant that supports multiple Indian languages for enhanced customer experience in malls, airports, and public spaces. Provides real-time information, navigation assistance, and service interaction.",
    link: "https://maitiri-92.web.app/",
    icon: <Globe className="w-12 h-12" />,
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    features: ["15+ Indian languages", "Real-time translation", "Navigation assistance", "Service interaction"],
  },
  {
    id: "silenta",
    title: "Silenta",
    subtitle: "Sign Language Communication Assistant",
    description: "Advanced sign language recognition and translation platform. Enables seamless communication between sign language users and others through real-time interpretation. Enhances accessibility and inclusion in educational, professional, and social environments.",
    link: "#",
    icon: <Hand className="w-12 h-12" />,
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    features: ["Real-time recognition", "Two-way translation", "Multiple sign languages", "Educational tools"],
  },
];

const upcomingProducts = [
  { title: "Speech Loss Assistant", icon: <Ear className="w-8 h-8" />, description: "Voice restoration and communication aids" },
  { title: "Dyslexia Support", icon: <Brain className="w-8 h-8" />, description: "Reading and learning assistance tools" },
  { title: "Dementia Care", icon: <Heart className="w-8 h-8" />, description: "Memory support and caregiver tools" },
  { title: "Mobility Aids", icon: <Users className="w-8 h-8" />, description: "Navigation and movement assistance" },
];

const stats = [
  { value: "285M+", label: "Visually Impaired Globally" },
  { value: "70M+", label: "Sign Language Users" },
  { value: "500M+", label: "People with Hearing Loss" },
  { value: "100+", label: "Countries Reached" },
];

export default function AssistiveAids() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6">
                AUGMENTED ASSISTIVE AIDS
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Empowering Independence with
                <br />
                <span className="text-gradient">Autonomy & Dignity</span>
              </h1>
            </FadeInText>
            <FadeInText delay={0.2}>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Our NexAble product line transforms lives by providing innovative AI XR solutions 
                for millions suffering with sensory losses and disabilities.
              </p>
            </FadeInText>
            <FadeInText delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton variant="primary" size="lg">
                  Explore Products
                </MagneticButton>
                <MagneticButton variant="secondary" size="lg">
                  Partner With Us
                </MagneticButton>
              </div>
            </FadeInText>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                NexAble <span className="text-gradient">Products</span>
              </h2>
            </FadeInText>
            <FadeInText delay={0.1}>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our flagship assistive products designed to restore independence and enhance quality of life.
              </p>
            </FadeInText>
          </div>

          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <GlassCard className={`p-6 sm:p-8 bg-gradient-to-br ${product.gradient}`} glowColor="purple">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="mb-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary">
                        {product.icon}
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                        {product.title}
                      </h3>
                      <p className="text-lg font-semibold text-foreground mb-4">
                        {product.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6">
                        {product.description}
                      </p>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                      >
                        Learn More
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {product.features.map((feature, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl bg-background/50 border border-border/50 text-center"
                        >
                          <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <FadeInText>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                COMING SOON
              </span>
            </FadeInText>
            <FadeInText delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Future <span className="text-gradient">Innovations</span>
              </h2>
            </FadeInText>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 text-center h-full opacity-80 hover:opacity-100 transition-opacity">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/30 flex items-center justify-center mx-auto text-muted-foreground">
                    {product.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <GlassCard className="p-8 sm:p-12" glowColor="cyan">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Shield className="w-12 h-12 text-primary mb-6" />
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Our <span className="text-gradient">Mission</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe technology should be inclusive. Our mission is to break down barriers 
                  and create assistive solutions that empower individuals with disabilities to live 
                  independently and with dignity.
                </p>
                <p className="text-muted-foreground">
                  Through innovative AI and AR technologies, we're building a world where everyone 
                  has equal access to information, communication, and opportunities.
                </p>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold mb-1">Accessibility First</h4>
                  <p className="text-sm text-muted-foreground">Designing with inclusivity at the core</p>
                </div>
                <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                  <h4 className="font-semibold mb-1">User-Centered Design</h4>
                  <p className="text-sm text-muted-foreground">Built with and for our community</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <h4 className="font-semibold mb-1">Continuous Innovation</h4>
                  <p className="text-sm text-muted-foreground">Always improving and expanding</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join Us in Making a <span className="text-gradient">Difference</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether you're looking to implement our solutions, partner with us, or support our mission, 
              we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <MagneticButton variant="primary" size="lg">
                  Contact Us <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
