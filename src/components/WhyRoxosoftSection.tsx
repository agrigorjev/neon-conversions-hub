import { motion, useInView } from "framer-motion";
import {
  Award, Handshake, Clock, Users, FolderKanban, TrendingUp,
  MessageSquare, BadgeCheck, Zap, Filter, Settings, Trophy, HeartHandshake, LifeBuoy
} from "lucide-react";
import { useRef, useEffect, useState } from "react";

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
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

type MosaicItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
  stat?: string;
  numeric?: boolean;
  end?: number;
  suffix?: string;
  size: "lg" | "md" | "sm";
};

const items: MosaicItem[] = [
  // Large – achievements
  { icon: Award, title: "Top Clutch", desc: "Software Dev Company 2025", stat: "Top Clutch", size: "lg" },
  { icon: MessageSquare, title: "Expert Consultation", desc: "You'll be talking to product and tech experts — no account managers.", size: "lg" },
  // Medium – key stats
  { icon: Handshake, title: "Microsoft Partner", desc: "Years as Microsoft Partner", stat: "15+", numeric: true, end: 15, suffix: "+", size: "md" },
  { icon: Clock, title: "Experience", desc: "Years Software Dev Experience", stat: "20+", numeric: true, end: 20, suffix: "+", size: "md" },
  { icon: BadgeCheck, title: "Certified Pros", desc: "Microsoft, AWS, Google, Oracle & more", size: "md" },
  { icon: Users, title: "Senior Engineers", desc: "Senior-Level Engineers", stat: "75%+", numeric: true, end: 75, suffix: "%+", size: "md" },
  // Small – advantage badges
  { icon: Zap, title: "24h Response", desc: "Every time", size: "sm" },
  { icon: TrendingUp, title: "Client Retention", desc: "5+ years avg", size: "sm" },
  { icon: FolderKanban, title: "50+ Projects", desc: "Delivered", size: "sm" },
  { icon: Filter, title: "Rigorous Selection", desc: "~100 per hire", size: "sm" },
  { icon: Settings, title: "Tailored Solutions", desc: "Custom IT", size: "sm" },
  { icon: Trophy, title: "Proven Track Record", desc: "Cross-industry", size: "sm" },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your priorities", size: "sm" },
  { icon: LifeBuoy, title: "Continuous Support", desc: "Post-launch", size: "sm" },
];

const WhyRoxosoftSection = () => {
  const large = items.filter(i => i.size === "lg");
  const medium = items.filter(i => i.size === "md");
  const small = items.filter(i => i.size === "sm");

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Why Roxosoft</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Our <span className="text-gradient-neon">Edge</span>
        </h2>

        {/* Mosaic grid: 6 columns */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {/* Row 1: 2 large cards (3 cols each) */}
          {large.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="col-span-2 md:col-span-3 bg-glass rounded-2xl p-6 border-glow relative overflow-hidden group hover:glow-neon transition-shadow"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon" />
              <item.icon className="w-8 h-8 text-primary mb-3" />
              <h4 className="text-lg font-bold text-foreground mb-1">
                {item.stat && !item.numeric ? item.stat : item.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}

          {/* Row 2: 4 medium cards (varying spans) */}
          {medium.map((item, i) => {
            // First and last medium span 2 cols, middle ones span 1 col on mobile
            const colSpan = i === 0 || i === 3 ? "col-span-2" : "col-span-1 md:col-span-1";
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className={`${colSpan} md:col-span-${i === 0 || i === 3 ? 2 : 1} bg-glass rounded-xl p-5 border-glow text-center hover:glow-neon transition-shadow`}
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                {item.numeric ? (
                  <p className="text-2xl font-extrabold text-foreground mb-0.5">
                    <AnimatedCounter end={item.end!} suffix={item.suffix!} />
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                )}
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}

          {/* Row 3: small badge pills across full width */}
          <div className="col-span-2 md:col-span-6 flex flex-wrap justify-center gap-2 mt-1">
            {small.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="flex items-center gap-2 bg-glass border-glow rounded-full px-4 py-2 hover:glow-neon transition-shadow"
              >
                <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">{item.title}</span>
                <span className="text-[10px] text-muted-foreground whitespace-nowrap hidden sm:inline">— {item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRoxosoftSection;
