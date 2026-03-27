import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import clutchBadge from "@/assets/clutch-2025-logo.png";
import microsoftBadge from "@/assets/microsoft-certified.png";
import teamPhoto from "@/assets/team.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-40"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

    <div className="container relative z-10 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-6">Custom Software Development</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6">
          We Don't Just Build Software. <span className="text-gradient-neon">We Stay With It.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
          Roxosoft acts as a long-term development partner, building and maintaining reliable software so your team
          doesn't have to.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-neon text-primary-foreground font-semibold glow-neon text-base px-8 hover:opacity-90"
          >
            <a href="#contact">
              Get Started <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-glow text-foreground hover:bg-secondary text-base px-8"
          >
            <a href="#cases">View Case Studies</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-glow text-foreground hover:bg-secondary text-base pl-1.5 pr-6"
          >
            <a href="#about" className="flex items-center gap-3">
              <img src={teamPhoto} alt="Roxosoft team" className="h-11 w-auto rounded-full" />
              Meet the Team
            </a>
          </Button>
        </div>
      </motion.div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-wrap items-center gap-6"
      >
        <div className="bg-glass rounded-xl px-5 py-3 border-glow flex items-center gap-3">
          <img src={clutchBadge} alt="Clutch Top Software Developers 2025" className="h-14 w-auto" />
          <div>
            <p className="text-sm font-semibold text-foreground">Top Developers</p>
            <p className="text-xs text-muted-foreground">Clutch 2025</p>
          </div>
        </div>
        <div className="bg-glass rounded-xl px-5 py-3 border-glow flex items-center gap-3">
          <img src={microsoftBadge} alt="Microsoft Certified Partner" className="h-10 w-auto" />
          <div>
            <p className="text-sm font-semibold text-foreground">Microsoft Partner</p>
            <p className="text-xs text-muted-foreground">Since 2010</p>
          </div>
        </div>
        <div className="bg-glass rounded-xl px-5 py-3 border-glow">
          <p className="text-2xl font-extrabold text-foreground">95%+</p>
          <p className="text-xs text-muted-foreground">Client Retention</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
