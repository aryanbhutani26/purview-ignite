import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AugmentedLabsPreview } from "@/components/sections/AugmentedLabsPreview";
// import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";

import { ContactSection } from "@/components/sections/ContactSection";
import { PremiumShowcaseSection } from "@/components/sections/PremiumShowcaseSection";
import { PageTransition } from "@/components/ui/PageTransition";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "PurviewTech - AI XR Solutions | Transforming Reality";
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check if we need to scroll to contact section
    if (location.state?.scrollToContact) {
      // Wait for the page to fully render before scrolling
      const timer = setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500); // Increased delay to ensure all components are rendered
      
      return () => {
        clearTimeout(timer);
        document.documentElement.style.scrollBehavior = 'auto';
      };
    } else {
      window.scrollTo(0, 0);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [location.state]);

  // Clear the navigation state after handling it
  useEffect(() => {
    if (location.state?.scrollToContact) {
      // Clear the state to prevent re-scrolling on re-renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        
        <main>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ServicesSection />
          </motion.div>
          

          {/* Premium Showcase Animations */}
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <PremiumShowcaseSection />
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProductsSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <AugmentedLabsPreview />
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <IndustriesSection />
          </motion.div> */}
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ClientsSection />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ContactSection />
          </motion.div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;