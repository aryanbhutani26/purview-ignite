import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { Send, Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate form data
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        toast({
          title: "Please fill in all required fields",
          description: "Name, email, and message are required.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        company: formData.company.trim() || 'Not specified',
        message: formData.message.trim(),
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        reply_to: formData.email.trim(),
        timestamp: new Date().toLocaleString(),
      };
      
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      toast({
        title: "Message Sent Successfully! ",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", company: "", message: "" });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact us directly at info@purviewtech.ai",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@purviewtech.ai",
      href: "mailto:info@purviewtech.ai",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+44 7780 241774",
      href: "tel:+447780241774",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "London, United Kingdom",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 dark:from-blue-950 dark:via-indigo-950 dark:to-cyan-950">
      {/* Cool Blue Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-indigo-500/15 to-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <FadeInText>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              GET IN TOUCH
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Let's Build the <span className="text-gradient">Future Together</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto px-2">
              Ready to transform your business with AI XR solutions? 
              Contact us for a consultation.
            </p>
          </FadeInText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-5 sm:p-6 lg:p-8" hoverEffect={false}>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground flex items-center gap-3">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                      placeholder="john@company.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground"
                    placeholder="Your Company"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground resize-none"
                    placeholder="Tell us about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transform hover:scale-105 active:scale-95",
                    "shadow-lg hover:shadow-xl"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {contactInfo.map((info, index) => (
              <GlassCard 
                key={index} 
                className="p-6 group"
                delay={index * 0.1}
              >
                <a
                  href={info.href}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{info.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              </GlassCard>
            ))}

            {/* Map Placeholder */}
            <GlassCard className="flex-1 min-h-[150px] sm:min-h-[200px] relative overflow-hidden" hoverEffect={false}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center mt-60">
                  <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-primary mx-auto mb-3 sm:mb-4" />
                  <p className="text-foreground font-medium text-base sm:text-lg mb-2">London, United Kingdom</p>
                  <p className="text-muted-foreground text-sm sm:text-base">Global Operations</p>
                </div>
              </div>
              
              {/* Animated Dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/30"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </GlassCard>
          </motion.div>
        </div>
      </div>

      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <MagneticButton
          variant="primary"
          size="lg"
          className="rounded-full w-12 h-12 sm:w-14 sm:h-14 p-0 shadow-glow animate-pulse-glow"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
        </MagneticButton>
      </motion.div>
    </section>
  );
};
