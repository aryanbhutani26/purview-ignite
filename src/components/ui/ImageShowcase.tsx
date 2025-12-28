import { motion } from "framer-motion";

const imageCategories = [
  {
    title: "AI & Technology",
    images: [
      { src: "/images/ai-brain.jpg", alt: "AI Brain Neural Network", description: "Cognitive AI & Gen AI" },
      { src: "/images/ai-chip.jpg", alt: "AI Processing Chip", description: "AI-as-a-Service" },
      { src: "/images/automation.jpg", alt: "Robotic Automation", description: "Machine Learning & Automation" },
    ]
  },
  {
    title: "AR/XR Technology",
    images: [
      { src: "/images/smart-glasses.jpg", alt: "Smart AR Glasses", description: "Smart Glasses Technology" },
      { src: "/images/ar-overlay.jpg", alt: "AR Information Overlay", description: "AR Data Visualization" },
      { src: "/images/smartphone-ar.jpg", alt: "Smartphone AR Experience", description: "Mobile AR Applications" },
    ]
  },
  {
    title: "Manufacturing & Quality",
    images: [
      { src: "/images/manufacturing.jpg", alt: "Manufacturing Facility", description: "Industrial Manufacturing" },
      { src: "/images/precision-tools.jpg", alt: "Precision Measurement Tools", description: "Quality Control Tools" },
      { src: "/images/quality-control.jpg", alt: "Quality Assurance Process", description: "Quality Management" },
    ]
  },
  {
    title: "Assistive Products",
    images: [
      { src: "/images/seva-glasses.jpg", alt: "SEVA Smart Glasses", description: "SEVA - Voice Assistant" },
      { src: "/images/maitri-assistant.jpg", alt: "Maitri Multi-Language AI", description: "Maîtiri - Language Assistant" },
      { src: "/images/silenta-sign-language.jpg", alt: "Silenta Sign Language AI", description: "Silenta - Sign Language" },
    ]
  },
  {
    title: "Advanced Technology",
    images: [
      { src: "/images/drone-technology.jpg", alt: "Smart Drone Technology", description: "Drone Integration" },
      { src: "/images/team-collaboration.jpg", alt: "Team Collaboration", description: "Collaborative Solutions" },
    ]
  }
];

export const ImageShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Real-World <span className="text-primary">Technology Images</span>
          </motion.h2>
          <motion.p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We've replaced all icons with meaningful, real-world images that better represent our AI XR solutions and technology.
          </motion.p>
        </div>

        <div className="space-y-16">
          {imageCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-center">{category.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={image.src}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                  >
                    <div className="relative rounded-xl overflow-hidden bg-card border border-border group-hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <div className="aspect-video w-full">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {image.description}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">All Icons Replaced with Meaningful Images</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};