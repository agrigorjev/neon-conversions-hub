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

// Each item has explicit grid placement for a mixed mosaic
// Grid is 6 columns. lg = 3col×2row, md = 2col×1row, sm = 1col×1row
const items: (MosaicItem & { col: string; row: string })[] = [
  // Row 1-2
  { icon: Award, title: "Top Clutch", desc: "Software Dev Company 2025", stat: "Top Clutch", size: "lg", col: "md:col-span-3", row: "md:row-span-2" },
  { icon: Zap, title: "24h Response", desc: "Every time", size: "sm", col: "md:col-span-1", row: "" },
  { icon: Handshake, title: "Microsoft Partner", desc: "Years as Microsoft Partner", stat: "15+", numeric: true, end: 15, suffix: "+", size: "md", col: "md:col-span-2", row: "" },
  { icon: Filter, title: "Rigorous Selection", desc: "~100 per hire", size: "sm", col: "md:col-span-1", row: "" },
  { icon: Clock, title: "Experience", desc: "Years Software Dev Experience", stat: "20+", numeric: true, end: 20, suffix: "+", size: "md", col: "md:col-span-2", row: "" },
  // Row 3-4
  { icon: MessageSquare, title: "Expert Consultation", desc: "Product and tech experts — no account managers.", size: "lg", col: "md:col-span-3", row: "md:row-span-2" },
  { icon: BadgeCheck, title: "Certified Pros", desc: "Microsoft, AWS, Google, Oracle & more", size: "md", col: "md:col-span-2", row: "" },
  { icon: Trophy, title: "Proven Track Record", desc: "Cross-industry", size: "sm", col: "md:col-span-1", row: "" },
  { icon: Users, title: "Senior Engineers", desc: "Senior-Level Engineers", stat: "75%+", numeric: true, end: 75, suffix: "%+", size: "md", col: "md:col-span-2", row: "" },
  { icon: HeartHandshake, title: "Client-Centric", desc: "Your priorities", size: "sm", col: "md:col-span-1", row: "" },
  // Row 5
  { icon: TrendingUp, title: "Client Retention", desc: "5+ years avg", size: "sm", col: "md:col-span-1", row: "" },
  { icon: FolderKanban, title: "50+ Projects", desc: "Delivered", numeric: true, end: 50, suffix: "+", size: "md", col: "md:col-span-2", row: "" },
  { icon: Settings, title: "Tailored Solutions", desc: "Custom IT", size: "sm", col: "md:col-span-1", row: "" },
  { icon: LifeBuoy, title: "Continuous Support", desc: "Post-launch", size: "sm", col: "md:col-span-1", row: "" },
  { icon: Settings, title: "Custom IT", desc: "Tailored solutions for your stack", size: "sm", col: "md:col-span-1", row: "" },
];

// Remove duplicate "Custom IT"
const mosaicItems = items.filter((item, i, arr) => arr.findIndex(x => x.title === item.title) === i);

const sizeStyles = {
  lg: "bg-glass rounded-2xl p-6 border-glow relative overflow-hidden group hover:glow-neon transition-shadow",
  md: "bg-glass rounded-xl p-4 border-glow text-center hover:glow-neon transition-shadow",
  sm: "bg-glass rounded-lg p-3 border-glow flex items-center gap-2 hover:glow-neon transition-shadow",
};

const WhyRoxosoftSection = () => (
  <section id="about" className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

    <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Why Roxosoft</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Our <span className="text-gradient-neon">Edge</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-2.5 max-w-5xl mx-auto">
        {mosaicItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className={`${item.col} ${item.row} ${sizeStyles[item.size]}`}
          >
            {item.size === "lg" && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon" />}

            {item.size === "lg" && (
              <>
                <item.icon className="w-8 h-8 text-primary mb-3" />
                <h4 className="text-lg font-bold text-foreground mb-1">
                  {item.stat && !item.numeric ? item.stat : item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </>
            )}

            {item.size === "md" && (
              <>
                <item.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                {item.numeric ? (
                  <p className="text-xl font-extrabold text-foreground mb-0.5">
                    <AnimatedCounter end={item.end!} suffix={item.suffix!} />
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-foreground mb-0.5">{item.title}</p>
                )}
                <p className="text-[11px] text-muted-foreground">{item.desc}</p>
              </>
            )}

            {item.size === "sm" && (
              <>
                <item.icon className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span className="text-xs font-medium text-foreground whitespace-nowrap">{item.title}</span>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyRoxosoftSection;
