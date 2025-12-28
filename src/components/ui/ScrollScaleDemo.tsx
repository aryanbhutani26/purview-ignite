import { motion } from "framer-motion";
import { FullScreenScrollScale } from "./FullScreenScrollScale";
import { ArrowDown, MousePointer } from "lucide-react";

export const ScrollScaleDemo = () => {
  return (
    <div className="space-y-0">
      {/* Instructions Section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <MousePointer className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">SCROLL TO SEE MAGIC</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Watch the <span className="text-primary">full-screen background</span> scale in
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              As you scroll, the gray background scales from a small circle to fill the entire screen, 
              while the content elements scale independently and maintain perfect positioning.
            </p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-primary mx-auto" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demo Section 1 */}
      <FullScreenScrollScale
        backgroundColor="bg-gray-200 dark:bg-gray-800"
        minScale={0.8}
        maxScale={1}
        backgroundMinScale={0.2}
        backgroundMaxScale={1}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-12 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Full-Screen Background Scaling
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                The gray background starts as a small circle and scales to fill the entire viewport. 
                Content scales independently from 80% to 100% with perfect positioning.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="p-6 bg-primary/5 rounded-xl">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl mb-4 mx-auto" />
                    <h4 className="font-semibold mb-2">Feature {i}</h4>
                    <p className="text-sm text-muted-foreground">
                      Full-screen background with independent content scaling
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </FullScreenScrollScale>

      {/* Demo Section 2 */}
      <FullScreenScrollScale
        backgroundColor="bg-gray-300 dark:bg-gray-700"
        minScale={0.75}
        maxScale={1}
        backgroundMinScale={0.15}
        backgroundMaxScale={1}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Even More Dramatic Effect
              </h3>
              <p className="text-xl text-white/80 mb-8">
                This background scales from an even smaller starting point (15%) to full screen, 
                creating a more dramatic reveal effect perfect for hero sections.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Full-Screen", "Independent Scaling", "Smooth", "Premium"].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </FullScreenScrollScale>

      {/* End Section */}
      <section className="py-16 bg-background text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Perfect for <span className="text-primary">Immersive Experiences</span>
            </h3>
            <p className="text-muted-foreground">
              This full-screen scaling effect creates an immersive, cinematic experience that draws users into your content.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};