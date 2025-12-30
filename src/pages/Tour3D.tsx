import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { ProductViewer3D } from "@/components/3d/ProductViewer3D";
import { ArrowLeft, Eye, MousePointer, Rotate3D } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Tour3D = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "3D Interactive Tour - PurviewTech | Experience AR Technology";
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
            {/* Back Button */}
            <motion.button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </motion.button>

            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Rotate3D className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">INTERACTIVE 3D EXPERIENCE</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-foreground tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Experience Our <span className="text-primary">Smart Glasses</span> in 3D
              </motion.h1>
              
              <motion.p
                className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Explore our AR smart glasses with an interactive 3D model. Rotate, zoom, and discover the innovative features that make our technology stand out.
              </motion.p>

              {/* Instructions */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <MousePointer className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Click & Drag to Rotate</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <Eye className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Scroll to Zoom</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                  <Rotate3D className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Explore All Angles</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3D Interactive Experience */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12">
                <ProductViewer3D />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-24 relative bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl sm:text-4xl font-semibold mb-4 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Key Features of Our <span className="text-primary">Smart Glasses</span>
              </motion.h2>
              <motion.p
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Discover the advanced technology and innovative design that powers our AR solutions.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "High-Resolution Display",
                  description: "Crystal clear AR overlays with advanced optics for immersive experiences.",
                  icon: "🔍"
                },
                {
                  title: "Lightweight Design",
                  description: "Comfortable all-day wear with ergonomic design and premium materials.",
                  icon: "🪶"
                },
                {
                  title: "AI-Powered Processing",
                  description: "Real-time object recognition and intelligent context awareness.",
                  icon: "🧠"
                },
                {
                  title: "Long Battery Life",
                  description: "Extended usage time with fast charging and power-efficient components.",
                  icon: "🔋"
                },
                {
                  title: "Voice Control",
                  description: "Hands-free operation with advanced voice recognition technology.",
                  icon: "🎤"
                },
                {
                  title: "Wireless Connectivity",
                  description: "Seamless integration with smartphones and cloud services.",
                  icon: "📡"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Tour3D;