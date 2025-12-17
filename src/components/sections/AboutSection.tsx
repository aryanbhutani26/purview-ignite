import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Mission",
    description: "To transform how industries operate through intelligent AI XR solutions that enhance productivity and accessibility."
  }, 
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Vision",
    description: "A world where technology bridges gaps, empowers individuals, and creates seamless human-digital experiences."
  }, 
  {
    icon: <Award className="w-5 h-5" />,
    title: "Excellence",
    description: "Committed to delivering cutting-edge solutions that exceed expectations and drive measurable outcomes."
  }, 
  {
    icon: <Users className="w-5 h-5" />,
    title: "Inclusion",
    description: "Creating technology that's accessible to all, including assistive solutions for sensory impairments."
  }
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "15+", label: "Countries" },
  { value: "100%", label: "Commitment" }
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28 relative overflow-hidden bg-background">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeInText>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-foreground tracking-tight">
              Leading <span className="text-primary">AI Innovation</span> in XR Solutions
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-muted-foreground text-lg">
              Purview Technologies is at the forefront of transforming industries through intelligent 
              AI XR solutions. We combine cutting-edge augmented reality with advanced artificial 
              intelligence to create experiences that empower both enterprises and individuals.
            </p>
          </FadeInText>
        </div>

        {/* Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, index) => (
            <GlassCard key={index} className="p-6 text-center" delay={index * 0.1}>
              <motion.div 
                className="text-3xl sm:text-4xl font-semibold text-foreground mb-1"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </GlassCard>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="p-6 h-full group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                    <div className="text-primary">{value.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Global Presence */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center p-12 rounded-xl bg-muted/30 border border-border">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-foreground">
              <span className="text-primary">Global</span> Presence
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Serving clients across <span className="text-primary font-semibold">15+ countries</span> worldwide, 
              delivering enterprise-grade AI XR solutions.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="mt-12 text-center" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            We aim to solve both <span className="text-primary font-semibold">industry</span> and{" "}
            <span className="text-primary font-semibold">society</span> challenges with AI XR
          </p>
        </motion.div>
      </div>
    </section>
  );
};