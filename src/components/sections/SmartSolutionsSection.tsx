import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { 
  Cross, 
  Package, 
  Search, 
  Shield,
  ArrowRight
} from "lucide-react";





const smartSolutions = [
  {
    icon: <Cross className="w-8 h-8" />,
    title: "SmartCare",
    description: "A cutting-edge AR smart glass solution for medical telepresence, SmartCare empowers remote clinical and surgical support, in-house patient care, EMR collaboration during critical golden hours, and immersive medical education. Designed to meet regulatory standards, it features real-time captioning and multilingual translation for silent, life-saving communication.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    features: ["Medical Telepresence", "Real-time Captioning", "Multilingual Translation", "Regulatory Compliant"]
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "SmartPick",
    description: "SmartPick revolutionizes warehouse operations with AR smart glasses that replace traditional handheld devices for vision-based picking and packaging. It delivers real-time visualization and backend system updates, boosting accuracy and efficiency. RFID integration enables automated tracking and seamless inventory management.",
    gradient: "from-green-500/20 via-emerald-500/20 to-teal-500/20",
    features: ["Vision-based Picking", "RFID Integration", "Real-time Updates", "Inventory Management"]
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SmartInspect",
    description: "SmartInspect is an AR-powered inspection tool that streamlines workflows and enables live collaboration with remote experts. Ideal for manufacturing, field services, construction, and aviation, it supports multilingual translation and captioning for global, sound-free teamwork.",
    gradient: "from-blue-500/20 via-cyan-500/20 to-sky-500/20",
    features: ["Live Collaboration", "Remote Expertise", "Multilingual Support", "Cross-Industry"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "SmartSurveillance",
    description: "SmartSurveillance offers advanced AR smart glass capabilities for controlling remote camera views via intuitive head movements. Perfect for navigating large machinery—such as earth movers, cranes, and rovers—and adaptable for drone-mounted surveillance. With AI vision model training, it proactively detects threats and triggers alerts for enhanced situational awareness.",
    gradient: "from-purple-500/20 via-violet-500/20 to-indigo-500/20",
    features: ["Head Movement Control", "AI Threat Detection", "Drone Integration", "Proactive Alerts"]
  }
];

export const SmartSolutionsSection = () => {
  return (
    <section id="smart-solutions" className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-slate-500/20 to-gray-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-gray-500/20 to-zinc-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 via-transparent to-zinc-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <FadeInText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              SMART SOLUTIONS PORTFOLIO
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Our Smart Solutions
              <br />
              <span className="text-gradient">Portfolio</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Discover our comprehensive suite of AR-powered solutions designed to transform 
              industries and enhance operational efficiency across various sectors.
            </p>
          </FadeInText>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {smartSolutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard className={`p-8 h-full bg-gradient-to-br ${solution.gradient} group-hover:shadow-xl transition-all duration-300`} glowColor="mixed">
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary">{solution.icon}</div>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3">
                    {solution.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-primary/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Learn More Link */}
                {/* <motion.div
                  className="flex items-center gap-2 text-primary font-medium cursor-pointer group/link"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="text-sm">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </motion.div> */}

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="100" cy="0" r="50" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};