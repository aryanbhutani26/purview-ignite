import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Stars } from "lucide-react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true); // Default to dark mode
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const isDarkMode = theme === 'light' ? false : true; // Default to dark if no theme or theme is 'dark'
    setIsDark(isDarkMode);
    
    // Ensure the DOM reflects the correct theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsAnimating(true);
    
    setTimeout(() => {
      const newMode = !isDark;
      setIsDark(newMode);
      
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  return (
    <>
      {/* Full screen transition overlay */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            className="fixed inset-0 z-[100] pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Radial wipe effect */}
            <motion.div
              className={`absolute inset-0 ${isDark ? 'bg-background' : 'bg-cosmic-dark'}`}
              initial={{ clipPath: "circle(0% at 50% 50%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: isDark 
                  ? "hsl(30 20% 98%)" 
                  : "linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(220 40% 12%) 100%)"
              }}
            />
            
            {/* Floating particles during transition */}
            {!isDark && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-neon-cyan"
                    initial={{ 
                      opacity: 0,
                      x: "50vw",
                      y: "50vh",
                      scale: 0
                    }}
                    animate={{ 
                      opacity: [0, 1, 0],
                      x: `${20 + Math.random() * 60}vw`,
                      y: `${20 + Math.random() * 60}vh`,
                      scale: [0, 1.5, 0]
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: i * 0.05,
                      ease: "easeOut"
                    }}
                    style={{
                      boxShadow: "0 0 10px hsl(185 100% 50%), 0 0 20px hsl(185 100% 50%)"
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleTheme}
        className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle theme"
      >
        {/* Background glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isDark 
              ? "linear-gradient(135deg, hsl(185 80% 50% / 0.2), hsl(270 80% 60% / 0.2))"
              : "linear-gradient(135deg, hsl(40 90% 55% / 0.2), hsl(24 95% 53% / 0.2))"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Border */}
        <motion.div
          className="absolute inset-0 rounded-full border"
          animate={{
            borderColor: isDark 
              ? "hsl(185 60% 40% / 0.5)"
              : "hsl(24 60% 60% / 0.5)"
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon container */}
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              className="relative"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Moon className="w-5 h-5 text-neon-cyan" />
              {/* Stars around moon */}
              <motion.div
                className="absolute -top-1 -right-1"
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Stars className="w-2 h-2 text-neon-purple" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Sun className="w-5 h-5 text-primary" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover ring */}
        <motion.div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: isDark 
              ? "0 0 20px hsl(185 100% 50% / 0.3), inset 0 0 10px hsl(185 100% 50% / 0.1)"
              : "0 0 20px hsl(24 95% 53% / 0.3), inset 0 0 10px hsl(24 95% 53% / 0.1)"
          }}
        />
      </motion.button>
    </>
  );
};
