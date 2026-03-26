import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, Shield, Database, BarChart3, Cpu, Globe, Lock } from "lucide-react";

const generalServices = [
  { icon: Users, title: "Integrated Experts", desc: "Members of our offshore team integrate into yours and work directly for you." },
  { icon: Briefcase, title: "Managed Team", desc: "Our offshore team works for a project manager who reports directly to you." },
  { icon: Rocket, title: "Startup Jumpstart", desc: "Our team knows all about the unique needs of startup companies of any size and budget." },
];

const insuranceServices = [
  { icon: Shield, title: "App Development" },
  { icon: Cpu, title: "Software Development" },
  { icon: Globe, title: "Portal Development" },
  { icon: Database, title: "Automation" },
  { icon: BarChart3, title: "Data Analytics" },
  { icon: Lock, title: "Risk Management" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">What We Do</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our <span className="text-gradient-neon">Services</span></h2>

      {/* General */}
      <div className="mb-20">
        <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">General Software Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {generalServices.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
              className="bg-glass rounded-2xl p-8 border-glow hover:glow-neon transition-shadow group">
              <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg font-semibold mb-3 text-foreground">{s.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Insurance */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Insurance Software Development</h3>
        <p className="text-center text-muted-foreground text-sm mb-8 max-w-xl mx-auto">Specialized solutions for the insurance industry, built with deep domain expertise.</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {insuranceServices.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
              className="bg-glass rounded-xl p-6 border-glow hover:glow-neon transition-shadow text-center group cursor-pointer">
              <s.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm font-medium text-foreground">{s.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ServicesSection;
