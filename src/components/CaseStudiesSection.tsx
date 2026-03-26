import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import mandaraLogo from "@/assets/mandara-logo.png";
import ellomyntLogo from "@/assets/ellomynt-logo.png";
import craftsmanLogo from "@/assets/craftsman-logo.png";

const cases = [
  {
    name: "Mandara Capital (UK)",
    tags: "FinTech, C#, Azure, ML, PowerBI",
    desc: "Roxosoft's software engineering portfolio includes building a complex and customizable risk management system for a leading London-based hedge fund company.",
    logo: mandaraLogo,
    link: "https://roxosoft.com/case-studies/mandara",
  },
  {
    name: "ElloMynt (USA)",
    tags: "Startup, Crypto, C#, Angular, ASP.NET",
    desc: "ElloMynt offers a fully compliant digital financial services platform for managing both money and cryptocurrencies from one place.",
    logo: ellomyntLogo,
    link: "https://roxosoft.com/case-studies/ellomynt",
  },
  {
    name: "Craftsman Book Co (USA)",
    tags: "Enterprise, Cloud, C#, Managed",
    desc: "We developed Craftsman's flagship SaaS estimating and appraisal products that are fully cloud-based.",
    logo: craftsmanLogo,
    link: "https://roxosoft.com/case-studies/craftsman",
  },
];

const CaseStudiesSection = () => (
  <section id="cases" className="py-24 md:py-32">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Case Studies</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Discover Our <span className="text-gradient-neon">Success Stories</span></h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">Explore how we've helped clients achieve their goals through innovative solutions.</p>
      <div className="grid md:grid-cols-3 gap-6">
        {cases.map((c, i) => (
          <motion.a key={c.name} href={c.link} target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="group bg-glass rounded-2xl overflow-hidden border-glow hover:glow-neon transition-shadow">
            <div className="h-48 bg-background/50 flex items-center justify-center p-4">
              <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mb-2">{c.tags}</p>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-foreground">{c.name}</h4>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
