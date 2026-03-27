import { motion } from "framer-motion";
import { MessageSquare, BadgeCheck, Zap, Filter, Settings, Trophy, HeartHandshake, LifeBuoy } from "lucide-react";

const main = [
  { icon: MessageSquare, title: "Expert Consultation", desc: "You'll be talking to product and tech experts — no account managers." },
  { icon: BadgeCheck, title: "Certified Professionals", desc: "Certified with Microsoft, AWS, Google, Oracle, ServiceNow, and more." },
  { icon: Zap, title: "Quick Response Time", desc: "We respond within 24 hours — every time." },
];

const ticker = [
  { icon: Filter, title: "Rigorous Selection", desc: "~100 candidates per hire" },
  { icon: Settings, title: "Tailored Solutions", desc: "Custom IT for your needs" },
  { icon: Trophy, title: "Proven Track Record", desc: "Success across industries" },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your priorities first" },
  { icon: LifeBuoy, title: "Continuous Support", desc: "Post-launch maintenance" },
];

const AdvantagesSection = () => (
  <section className="py-24 md:py-32 overflow-hidden">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Our Edge</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Roxosoft <span className="text-gradient-neon">Advantages</span></h2>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
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
    </div>

    {/* Marquee ticker */}
    <div className="relative group">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
        {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
          <div key={i} className="flex-shrink-0 mx-3 flex items-center gap-3 bg-glass border-glow rounded-full px-6 py-3">
            <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.title}</span>
            <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">— {item.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
