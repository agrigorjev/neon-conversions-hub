import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import mishaImg from "@/assets/misha.webp";
import igorImg from "@/assets/igor.webp";

const team = [
  { name: "Misha", role: "Co-Founder & CEO", image: mishaImg },
  { name: "Igor", role: "Co-Founder & CTO", image: igorImg },
];

const TeamSection = () => (
  <section className="py-24 md:py-32">
    <div className="container">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Leadership</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Meet the <span className="text-gradient-neon">Founders</span></h2>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-2xl mx-auto">
        {team.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
            className="bg-glass rounded-2xl border-glow overflow-hidden w-full sm:w-72 text-center group">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground">{t.name}</h3>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
