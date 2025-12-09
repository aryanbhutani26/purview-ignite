import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { 
  Wrench, 
  Plane, 
  Heart, 
  Factory, 
  Package, 
  Building2 
} from "lucide-react";

const industries = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Field Service",
    description: "Remote assistance and real-time documentation for technicians in the field.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Aerospace & Defence",
    description: "Mission-critical AR solutions for defense and aviation industries.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare",
    description: "AR-assisted surgery, training, and patient care solutions.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Smart factory solutions with AR-guided assembly and quality control.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Warehouse & Logistics",
    description: "AR-powered picking, packing, and inventory management systems.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Construction & Oil & Gas",
    description: "Safety compliance and remote inspection for hazardous environments.",
    color: "from-slate-500 to-zinc-500",
  },
];

export const IndustriesSection = () => {
  return (
    <section id="solutions" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(hsl(186 100% 50%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(186 100% 50%) 1px, transparent 1px)
        `,
        backgroundSize: '100px 100px',
      }} />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <FadeInText>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              INDUSTRIES
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              AI XR Use Cases Across
              <br />
              <span className="text-gradient">All Vertical Segments</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              We aim to solve both industry and society challenges with intelligent AI XR solutions.
            </p>
          </FadeInText>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <GlassCard 
                className="p-5 sm:p-6 lg:p-8 h-full group cursor-pointer" 
                glowColor="mixed"
              >
                {/* Icon with Gradient Background */}
                <div className={`
                  w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6
                  bg-gradient-to-br ${industry.color}
                  flex items-center justify-center
                  group-hover:scale-110 group-hover:rotate-3
                  transition-all duration-300
                  shadow-lg
                `}>
                  <div className="text-white [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6 lg:[&>svg]:w-8 lg:[&>svg]:h-8">{industry.icon}</div>
                </div>

                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {industry.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
