import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/ui/PageTransition";
import { FadeInText } from "@/components/ui/AnimatedText";
import { GlassCard } from "@/components/ui/GlassCard";
import { Target, Eye, Award, Users, Calendar, Globe, TrendingUp } from "lucide-react";
import { useEffect } from "react";

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
  { value: "2019", label: "Founded", icon: <Calendar className="w-5 h-5" /> },
  { value: "50+", label: "Enterprise Clients", icon: <Users className="w-5 h-5" /> },
  { value: "15+", label: "Countries", icon: <Globe className="w-5 h-5" /> },
  { value: "100%", label: "Commitment", icon: <TrendingUp className="w-5 h-5" /> }
];

const About = () => {
  useEffect(() => {
    document.title = "About Us - PurviewTech | Leading AI XR Innovation";
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
                  About Purview Technologies
                </span>
              </FadeInText>
              <FadeInText delay={0.1}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-foreground tracking-tight">
                  Leading <span className="text-primary">AI Innovation</span> in XR Solutions
                </h1>
              </FadeInText>
              <FadeInText delay={0.2}>
                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                  Purview Technologies is at the forefront of transforming industries through intelligent 
                  AI XR solutions. We combine cutting-edge augmented reality with advanced artificial 
                  intelligence to create experiences that empower both enterprises and individuals.
                </p>
              </FadeInText>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 relative bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {stats.map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center group" delay={index * 0.1}>
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                      {stat.icon}
                    </div>
                  </div>
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
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
              <FadeInText>
                <h2 className="text-3xl sm:text-4xl font-semibold mb-4 text-foreground">
                  Our Core <span className="text-primary">Values</span>
                </h2>
              </FadeInText>
              <FadeInText delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  The principles that guide our innovation and drive our commitment to excellence.
                </p>
              </FadeInText>
            </div>

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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <div className="text-primary">{value.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 relative bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <FadeInText>
                  <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-foreground">
                    Meet Our <span className="text-primary">Revolutionary Team</span>
                  </h2>
                </FadeInText>
                <FadeInText delay={0.1}>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    Behind every breakthrough innovation is a team of passionate visionaries. Our diverse group 
                    of engineers, designers, and researchers work tirelessly to push the boundaries of what's 
                    possible in AI and XR technology.
                  </p>
                </FadeInText>
                <FadeInText delay={0.2}>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                    From developing cutting-edge smart solutions to creating accessible assistive technologies, 
                    our team combines technical expertise with human empathy to build products that truly 
                    make a difference in people's lives.
                  </p>
                </FadeInText>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <Users className="w-4 h-4" />
                    <span className="text-sm font-medium">Collaborative</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">Expert</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Innovative</span>
                  </div>
                </motion.div>
              </div>

              {/* Team Image */}
              <div className="order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  {/* Main Image Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <div className="aspect-square w-full">
                      <img
                        src="/images/aboutusImage.jpg"
                        alt="Meet Our Revolutionary Team - Purview Technologies team members collaborating"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    
                    {/* Subtle Border */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
                  </div>
                  
                  {/* Decorative Background Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-2xl -z-10" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl -z-10" />
                  
                  {/* Team Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
                  >
                    <div className="backdrop-blur-md bg-white/10 dark:bg-black/20 rounded-xl p-4 border border-white/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-white font-semibold text-lg">Team Purview</h3>
                          <p className="text-white/90 text-sm">Shaping the Future Together</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;