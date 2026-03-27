import { motion, useInView } from "framer-motion";
import { Award, Handshake, Clock, Users, FolderKanban, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const achievements = [
  { icon: Award, stat: "Top Clutch", label: "Software Dev Company 2025", numeric: false, span: "md:col-span-2 md:row-span-1" },
  { icon: Handshake, stat: "15+", label: "Years as Microsoft Partner", numeric: true, end: 15, suffix: "+", span: "" },
  { icon: Clock, stat: "20+", label: "Years Software Development Experience", numeric: true, end: 20, suffix: "+", span: "" },
  { icon: TrendingUp, stat: "5+", label: "Years Average Client Retention", numeric: true, end: 5, suffix: "+", span: "" },
  { icon: Users, stat: "75%+", label: "Senior-Level Engineers", numeric: true, end: 75, suffix: "%+", span: "" },
  { icon: FolderKanban, stat: "50+", label: "Successful Projects Delivered", numeric: true, end: 50, suffix: "+", span: "md:col-span-3" },
];

function AnimatedCounter({ end, suffix, duration = 1.8 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 40;
    const increment = end / steps;
    const stepTime = (duration * 1000) / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  delay: Math.random() * 8,
  duration: 6 + Math.random() * 8,
}));

const AchievementsSection = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

    {/* Floating particles */}
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/20 animate-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>

    <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Why Roxosoft</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Why Businesses <span className="text-gradient-neon">Choose Us</span></h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className={`bg-glass rounded-2xl p-8 border-glow text-center hover:glow-neon transition-shadow ${a.span}`}
          >
            <a.icon className="w-8 h-8 text-primary mx-auto mb-4" />
            <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">
              {a.numeric ? (
                <AnimatedCounter end={a.end!} suffix={a.suffix!} />
              ) : (
                a.stat
              )}
            </p>
            <p className="text-sm text-muted-foreground">{a.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
