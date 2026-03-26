import { motion } from "framer-motion";
import { MessageSquare, BadgeCheck, Zap, Filter, Settings, Trophy, HeartHandshake, LifeBuoy } from "lucide-react";

const main = [
  { icon: MessageSquare, title: "Expert Consultation", desc: "You'll be talking to product and tech experts — no account managers." },
  { icon: BadgeCheck, title: "Certified Professionals", desc: "Certified with Microsoft, AWS, Google, Oracle, ServiceNow, and more." },
  { icon: Zap, title: "Quick Response Time", desc: "We respond within 24 hours — every time." },
];

const additional = [
  { icon: Filter, title: "Rigorous Selection", desc: "~100 candidates screened per new team member." },
  { icon: Settings, title: "Tailored Solutions", desc: "Customized IT solutions for your specific needs." },
  { icon: Trophy, title: "Proven Track Record", desc: "Successful projects across various industries." },
  { icon: HeartHandshake, title: "Client-Centric", desc: "We prioritize your needs throughout the project." },
  { icon: LifeBuoy, title: "Continuous Support", desc: "Ongoing maintenance and support post-launch." },
];

const AdvantagesSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Our Edge</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Roxosoft <span className="text-gradient-neon">Advantages</span></h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {main.map((a, i) => (
          <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-glass rounded-2xl p-8 border-glow relative overflow-hidden group hover:glow-neon transition-shadow">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon" />
            <a.icon className="w-10 h-10 text-primary mb-5" />
            <h4 className="text-lg font-semibold mb-2 text-foreground">{a.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {additional.map((a, i) => (
          <motion.div key={a.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="bg-glass rounded-xl p-5 border-glow text-center hover:glow-neon transition-shadow">
            <a.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <p className="text-sm font-medium text-foreground mb-1">{a.title}</p>
            <p className="text-xs text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
