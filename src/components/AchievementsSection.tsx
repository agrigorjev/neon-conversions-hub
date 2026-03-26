import { motion } from "framer-motion";
import { Award, Handshake, Clock, Users, FolderKanban, TrendingUp } from "lucide-react";

const achievements = [
  { icon: Award, stat: "Top Clutch", label: "Software Dev Company 2025" },
  { icon: Handshake, stat: "15+ Years", label: "Microsoft Partner" },
  { icon: Clock, stat: "20+ Years", label: "Software Development Experience" },
  { icon: TrendingUp, stat: "5+ Years", label: "Average Client Retention" },
  { icon: Users, stat: "75%+", label: "Senior-Level Engineers" },
  { icon: FolderKanban, stat: "50+", label: "Successful Projects" },
];

const AchievementsSection = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
    <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Why Roxosoft</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Businesses <span className="text-gradient-neon">Choose Us</span></h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div key={a.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            className="bg-glass rounded-2xl p-8 border-glow text-center hover:glow-neon transition-shadow">
            <a.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{a.stat}</p>
            <p className="text-sm text-muted-foreground">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
