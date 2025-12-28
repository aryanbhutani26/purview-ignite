import { motion } from "framer-motion";
import { PremiumFeatureCards } from "@/components/ui/PremiumFeatureCards";
import { ManufacturingShowcase } from "@/components/ui/ManufacturingShowcase";
import { ScrollScaleDemo } from "@/components/ui/ScrollScaleDemo";
import { PageTransition } from "@/components/ui/PageTransition";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AnimationDemo = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-6 py-4">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </nav>

        {/* Demo Header */}
        <section className="pt-24 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Premium UI <span className="text-primary">Animations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing smooth, minimal, and high-end animations designed for modern SaaS and tech products.
            </p>
          </motion.div>
        </section>

        {/* Animation Showcases */}
        <div className="space-y-0">
          {/* Scroll Scale Demo */}
          <ScrollScaleDemo />
          
          {/* Feature Cards Animation */}
          <PremiumFeatureCards />
          
          {/* Manufacturing Showcase Animation */}
          <ManufacturingShowcase />
        </div>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-border/50">
          <div className="container mx-auto px-6">
            <p className="text-muted-foreground">
              Built with React, Framer Motion, and Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default AnimationDemo;