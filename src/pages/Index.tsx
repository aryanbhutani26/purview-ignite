import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CursorEffect } from "@/components/ui/CursorEffect";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page metadata
    document.title = "PurviewTech - AI XR Solutions | Transforming Reality";
    
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Custom cursor effect */}
      <CursorEffect />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ProductsSection />
        <IndustriesSection />
        <ClientsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
