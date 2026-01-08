import { motion } from "framer-motion";
import { FullScreenScrollScale } from "../ui/FullScreenScrollScale";
import { ArrowUpRight, Glasses, Volume2, Hand } from "lucide-react";

const products = [
  {
    id: "seva",
    title: "SEVA",
    subtitle: "Speech Enabled Voice Assistant",
    description: "Smart glasses for the Visually Impaired and Blind. AI application powered by Purview on Smart glass to enhance daily living experience for the community providing guidance by an Audio companion 'Hello Seva'",
    link: "https://sevavision.com/",
    gradient: "from-cyan-500/20 via-blue-500/20 to-purple-500/20",
    accentColor: "primary",
    icon: <Glasses className="w-8 h-8" />,
    image: "/images/products/seva.png"
  },
  {
    id: "maitri",
    title: "Maîtiri",
    subtitle: "AR Assistive Aids for Hearing Loss ",
    description: "AI AR Platform on smart glasses for the Low hearing and deaf community, enhancing their daily living experience by converting surrounding sound and speech in written text on AR lenses of smart glasses",
    link: "https://maitiri-92.web.app/",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
    accentColor: "primary",
    icon: <Volume2 className="w-8 h-8" />,
    image: "/images/products/maitri.png"
  },
  {
    id: "silenta",
    title: "Silenta",
    subtitle: "Sign Language Communication Assistant",
    description: "Advanced sign language recognition and translation platform. Enables seamless communication between sign language users and others through real-time interpretation. Enhances accessibility and inclusion in educational, professional, and social environments.",
    link: "#",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    accentColor: "primary",
    icon: <Hand className="w-8 h-8" />,
    image: "/images/products/silenta.png"
  },
];

export const ProductsSection = () => {
  return (
    <FullScreenScrollScale
      backgroundColor="bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950"
      minScale={0.85}
      maxScale={1}
      backgroundMinScale={0.3}
      backgroundMaxScale={1}
    >
      {/* Vibrant Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10" id="products">
        {/* Section Header */}
        <div className="text-left mb-10 sm:mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm text-secondary font-medium"></span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
           NexAble:
            {/* <br /> */}
            <span className="text-gradient"> Our augmented assistive aids provide autonomy and dignity</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Empowering millions suffering with sensory losses through innovative AI XR solutions.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              {/* Card */}
              <div className={`
                relative rounded-2xl sm:rounded-3xl overflow-hidden h-[400px] sm:h-[450px] lg:h-[500px]
                bg-gradient-to-br ${product.gradient}
                border border-foreground/10
                group-hover:border-${product.accentColor}/30
                transition-all duration-500
                group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]
                backdrop-blur-sm
              `}>
                {/* Product Image Background - Top 40% */}
                <div className="absolute top-0 left-0 right-0 h-[40%] overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.6 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                </div>

                {/* Product Icon - Overlaid on image */}
                <motion.div 
                  className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-white drop-shadow-lg">
                    {product.icon}
                  </div>
                </motion.div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`,
                    backgroundSize: '30px 30px',
                  }} />
                </div>

                {/* Glow Effect on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                />

                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 lg:p-8">
                  {/* Product Logo/Title - Overlaid on image */}
                  <motion.div
                    className="pt-4 sm:pt-6 lg:pt-8 z-10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg mb-2">
                      {product.title}
                    </h3>
                  </motion.div>

                  {/* Product Info - Bottom section */}
                  <div className="mt-auto">
                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                      {product.subtitle}
                    </h4>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                      {product.description}
                    </p>

                    {/* CTA Link */}
                    <motion.a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center gap-2 
                        text-${product.accentColor} font-semibold
                        hover:gap-4 transition-all duration-300
                        group/link
                      `}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Know More
                      <ArrowUpRight className="w-5 h-5 group-hover/link:rotate-45 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
                    <circle cx="100" cy="0" r="80" fill="url(#cornerGradient)" />
                    <defs>
                      <linearGradient id="cornerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
            <p className="text-sm sm:text-base text-muted-foreground">
              <span className="text-primary font-semibold">Coming Soon:</span> Future Assistive Products for Speech Loss, Dyslexia, Dementia & more
            </p>
          </div>
        </motion.div>
      </div>
    </FullScreenScrollScale>
  );
};