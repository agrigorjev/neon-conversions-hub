import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cases = [
  { name: "Eltel", desc: "Infrastructure management platform streamlining field operations for a leading Nordic services company.", color: "from-primary/20 to-neon-glow/10" },
  { name: "Rackwise", desc: "Data center infrastructure management solution optimizing resource allocation and energy efficiency.", color: "from-neon-glow/10 to-primary/20" },
  { name: "Mose", desc: "Custom enterprise software enabling real-time collaboration and project tracking at scale.", color: "from-primary/10 to-neon-glow/20" },
];

const CaseStudiesSection = () => (
  <section id="cases" className="py-24 md:py-32">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Case Studies</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Discover Our <span className="text-gradient-neon">Success Stories</span></h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">Explore how we've helped clients achieve their goals through innovative solutions.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="group bg-glass rounded-2xl overflow-hidden border-glow hover:glow-neon transition-shadow cursor-pointer">
            <div className={`h-48 bg-gradient-to-br ${c.color} flex items-center justify-center`}>
              <span className="text-3xl font-bold text-foreground/80">{c.name}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground">{c.name}</h4>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
