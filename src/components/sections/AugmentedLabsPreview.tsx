import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { GlassCard } from "../ui/GlassCard";
import { MagneticButton } from "../ui/MagneticButton";
import { 
  Atom,
  Cpu,
  Network,
  Globe,
  Sparkles,
  Binary,
  FlaskConical,
  Microscope,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const researchAreas = [
  {
    icon: <Atom className="w-6 h-6" />,
    title: "Extended Reality (XR)",
    description: "Pioneering research in AR, VR, and MR technologies to create immersive experiences.",
    tags: ["Spatial Computing", "Mixed Reality"],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Artificial Intelligence",
    description: "Developing cutting-edge AI models for computer vision and natural language processing.",
    tags: ["Machine Learning", "Deep Learning"],
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "GenAI and GenAI Agents",
    description: "Exploring generative models for creating dynamic, context-aware XR content.",
    tags: ["LLMs", "Image Generation"],
  },
];

const labServices = [
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Proof of Concept",
    description: "Rapid prototyping and validation of innovative AR/AI concepts.",
  },
  {
    icon: <Microscope className="w-6 h-6" />,
    title: "Applied Research",
    description: "Industry-focused research programs solving real-world challenges.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Consulting",
    description: "Strategic guidance on technology adoption and digital transformation.",
  },
];

export const AugmentedLabsPreview = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/augmented-labs");
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950 dark:via-purple-950 dark:to-pink-950">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-pink-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          {/* <FadeInText>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              AUGMENTED LABS (AIXR)
            </span>
          </FadeInText> */}
          <FadeInText delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              AI XR Lab:
              {/* <br /> */}
              <span className="text-gradient"> Where Innovation Meets Reality</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-lg text-muted-foreground">
              Our R&D hub pushing the boundaries of AI and Extended Reality technologies. 
              From fundamental research to applied innovations, we're shaping the future of human-computer interaction.
            </p>
          </FadeInText>
        </div>

        {/* Research Areas Preview */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Research <span className="text-gradient">Focus Areas</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer" glowColor="cyan">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{area.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {area.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lab Services Preview */}
        <div className="mb-12">
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Lab <span className="text-gradient">Services</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {labServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full group cursor-pointer" glowColor="purple">
                  <div className="mb-4 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="text-primary">{service.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <MagneticButton 
            variant="primary" 
            size="lg"
            onClick={handleExploreClick}
            className="group"
          >
            Explore AI XR Labs
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};