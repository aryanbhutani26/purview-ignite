import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { Target, Eye, Award, Users } from "lucide-react";
const values = [{
  icon: <Target className="w-6 h-6 text-primary/70" />,
  title: "Mission",
  description: "To transform how industries operate through intelligent AI XR solutions that enhance productivity and accessibility."
}, {
  icon: <Eye className="w-6 h-6 text-primary/70" />,
  title: "Vision",
  description: "A world where technology bridges gaps, empowers individuals, and creates seamless human-digital experiences."
}, {
  icon: <Award className="w-6 h-6 text-primary/70" />,
  title: "Excellence",
  description: "Committed to delivering cutting-edge solutions that exceed expectations and drive measurable outcomes."
}, {
  icon: <Users className="w-6 h-6 text-primary/70" />,
  title: "Inclusion",
  description: "Creating technology that's accessible to all, including assistive solutions for sensory impairments."
}];
const stats = [{
  value: "2019",
  label: "Founded"
}, {
  value: "50+",
  label: "Enterprise Clients"
}, {
  value: "15+",
  label: "Countries"
}, {
  value: "100%",
  label: "Commitment"
}];
export const AboutSection = () => {
  return <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <FadeInText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              ABOUT US
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Leading <span className="text-gradient">AI Innovation</span>
              <br />in XR Solutions
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Purview Technologies is at the forefront of transforming industries through intelligent 
              AI XR solutions. We combine cutting-edge augmented reality with advanced artificial 
              intelligence to create experiences that empower both enterprises and individuals.
            </p>
          </FadeInText>
        </div>

        {/* Stats */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          {stats.map((stat, index) => <GlassCard key={index} className="p-6 text-center" delay={index * 0.1}>
              <motion.div className="text-4xl md:text-5xl font-bold text-gradient mb-2" initial={{
            scale: 0.8
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3 + index * 0.1,
            type: "spring"
          }}>
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </GlassCard>)}
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.15
        }}>
              <GlassCard className="p-8 h-full group" glowColor="purple">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <div className="text-secondary">{value.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>)}
        </div>

        {/* CTA */}
        <motion.div className="mt-16 text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.6
      }}>
          <p className="text-muted-foreground mb-6">
            We aim to solve both <span className="text-primary font-semibold">industry</span> and{" "}
            <span className="text-secondary font-semibold">society</span> challenges with AI XR
          </p>
        </motion.div>
      </div>
    </section>;
};