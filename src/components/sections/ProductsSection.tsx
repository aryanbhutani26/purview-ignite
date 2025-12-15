import { motion } from "framer-motion";
import { FadeInText } from "../ui/AnimatedText";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: "seva",
    title: "SEVA",
    subtitle: "Speech Enabled Voice Assistant",
    description: "Smart glasses for the Visually Impaired and Blind. AI application powered by Purview on Smart glass to enhance daily living experience for the community providing guidance by an Audio companion 'Hello Seva'",
    link: "https://sevavision.com/",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    accentColor: "primary",
  },
  {
    id: "maitri",
    title: "Maîtiri",
    subtitle: "Multi-Lingual Assistant for Travel and Retail",
    description: "AI-powered voice assistant that supports multiple Indian languages for enhanced customer experience in malls, airports, and public spaces. Provides real-time information, navigation assistance, and service interaction.",
    link: "https://maitiri-92.web.app/",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    accentColor: "secondary",
  },
  {
    id: "silenta",
    title: "Silenta",
    subtitle: "Sign Language Communication Assistant",
    description: "Advanced sign language recognition and translation platform. Enables seamless communication between sign language users and others through real-time interpretation. Enhances accessibility and inclusion in educational, professional, and social environments.",
    link: "#",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    accentColor: "primary",
  },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <FadeInText>
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-secondary/10 text-secondary text-xs sm:text-sm font-medium mb-3 sm:mb-4">
              NEXABLE PRODUCTS
            </span>
          </FadeInText>
          <FadeInText delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
              Our AR Assistive Aids Provide
              <br />
              <span className="text-gradient">Autonomy & Dignity</span>
            </h2>
          </FadeInText>
          <FadeInText delay={0.2}>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Empowering millions suffering with sensory losses through innovative AI XR solutions.
            </p>
          </FadeInText>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className={`
                relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]
                bg-gradient-to-br ${product.gradient}
                border border-foreground/10
                group-hover:border-${product.accentColor}/30
                transition-all duration-500
                group-hover:shadow-[0_0_40px_hsl(186_100%_42%/0.2)]
              `}>
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, hsl(186 100% 42% / 0.1) 0%, transparent 50%)`,
                    backgroundSize: '30px 30px',
                  }} />
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 lg:p-8">
                  {/* Product Logo/Title */}
                  <motion.div
                    className="mb-auto pt-4 sm:pt-6 lg:pt-8"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient mb-2">
                      {product.title}
                    </h3>
                  </motion.div>

                  {/* Product Info */}
                  <div>
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                      {product.subtitle}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                      {product.description}
                    </p>

                    {/* CTA Link */}
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center gap-2 
                        text-${product.accentColor} font-semibold
                        hover:gap-4 transition-all duration-300
                        group/link
                      `}
                    >
                      Know More
                      <ArrowUpRight className="w-5 h-5 group-hover/link:rotate-45 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                    <circle cx="100" cy="0" r="80" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(186 100% 42%)" />
                        <stop offset="100%" stopColor="hsl(263 70% 50%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Additional Products Teaser */}
        <motion.div
          className="mt-8 sm:mt-12 text-center px-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm sm:text-base text-muted-foreground">
            <span className="text-primary font-semibold">Coming Soon:</span> Future Assistive Products for Speech Loss, Dyslexia, Dementia & more
          </p>
        </motion.div>
      </div>
    </section>
  );
};
