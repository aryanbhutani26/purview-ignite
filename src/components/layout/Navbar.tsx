import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { ThemeToggle } from "../ui/ThemeToggle";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; isRoute?: boolean }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "/about" },
  { 
    label: "Offerings", 
    href: "#services",
    children: [
      { label: "Industrial Solutions", href: "/industrial-solutions", isRoute: true },
      { label: "NexAble Assistive Aids", href: "/assistive-aids", isRoute: true },
      { label: "AI XR Lab", href: "/augmented-labs", isRoute: true },
    ]
  },
  { label: "Contact Us", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string, isRoute?: boolean) => {
    if (href === "/about" || isRoute) {
      navigate(href);
    } else if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + href);
      } else {
        const id = href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border py-4" 
            : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("#home");
            }}
            whileHover={{ scale: 1.02 }}
          >
            <img 
              src="/images/logo.png" 
              alt="Purview Technologies" 
              className="w-25 h-20 object-contain"
            />
            {/* <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-tight">
                PURVIEW
              </span>
              <span className="text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                Technologies
              </span>
            </div> */}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors",
                    "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      activeDropdown === item.label && "rotate-180"
                    )} />
                  )}
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-3 py-2 bg-card rounded-lg border border-border min-w-[240px] shadow-soft"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={() => handleNavigation(child.href, child.isRoute)}
                          className="flex items-center gap-3 w-full text-left px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors group"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0" />
                          <span>{child.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <MagneticButton 
              variant="primary" 
              size="sm"
              onClick={() => handleNavigation("#contact")}
            >
              Get Started
            </MagneticButton>
          </div>

          {/* Mobile: Theme Toggle & Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-full max-w-[300px] bg-card border-l border-border p-6 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <button
                      onClick={() => !item.children && handleNavigation(item.href)}
                      className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                    {item.children && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavigation(child.href, child.isRoute)}
                            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-1 group"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors flex-shrink-0" />
                            <span>{child.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 mt-4 border-t border-border">
                  <MagneticButton 
                    variant="primary" 
                    className="w-full"
                    onClick={() => handleNavigation("#contact")}
                  >
                    Get Started
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};