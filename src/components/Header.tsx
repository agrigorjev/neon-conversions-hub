import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const services = {
  general: [
    { name: "Integrated Experts", href: "#services" },
    { name: "Managed Team", href: "#services" },
    { name: "Startup Jumpstart", href: "#services" },
  ],
  insurance: [
    { name: "App Development", href: "#services" },
    { name: "Software Development", href: "#services" },
    { name: "Portal Development", href: "#services" },
    { name: "Automation", href: "#services" },
    { name: "Data Analytics", href: "#services" },
    { name: "Risk Management", href: "#services" },
  ],
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-glass">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center">
          <img src={logo} alt="Roxosoft" className="h-8 md:h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</a>
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-glass rounded-xl p-6 min-w-[480px] grid grid-cols-2 gap-6"
                >
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">General</p>
                    {services.general.map((s) => (
                      <a key={s.name} href={s.href} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">{s.name}</a>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Insurance</p>
                    {services.insurance.map((s) => (
                      <a key={s.name} href={s.href} className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">{s.name}</a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a href="#cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Studies</a>
          <Button asChild size="sm" className="bg-gradient-neon text-primary-foreground font-semibold glow-neon hover:opacity-90">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden bg-glass">
            <div className="container py-6 flex flex-col gap-4">
              <a href="#about" onClick={() => setMobileOpen(false)} className="text-muted-foreground">About Us</a>
              <a href="#services" onClick={() => setMobileOpen(false)} className="text-muted-foreground">Services</a>
              <a href="#cases" onClick={() => setMobileOpen(false)} className="text-muted-foreground">Case Studies</a>
              <Button asChild className="bg-gradient-neon text-primary-foreground font-semibold w-full">
                <a href="#contact" onClick={() => setMobileOpen(false)}>Contact Us</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
