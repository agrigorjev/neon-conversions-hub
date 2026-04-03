"use client";

import { motion, useInView } from "framer-motion";
import { Award, MessageSquare, BadgeCheck, Zap, Filter, Handshake, Clock, Users, FolderKanban, HeartHandshake } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ end, suffix, duration = 1.8 }: { end: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const steps = 40;
    const inc = end / steps;
    const stepTime = (duration * 1000) / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const bullets = [
  { icon: Handshake, label: "Microsoft Software Development Partner", value: "15", suffix: " years", end: 15 },
  { icon: Clock, label: "Experience in software development consulting", value: "20+", suffix: "+", end: 20 },
  { icon: HeartHandshake, label: "Most clients stay over", value: "8", suffix: " years", end: 8 },
  { icon: FolderKanban, label: "Projects delivered", value: "50+", suffix: "+", end: 50 },
  { icon: Users, label: "IT experts are seniors", value: "75%+", suffix: "%+", end: 75 },
];

const ticker = [
  { icon: Award, text: "Top Clutch Software Development Company" },
  { icon: MessageSquare, text: "You'll be talking to product and tech experts — no account managers" },
  { icon: BadgeCheck, text: "Certified with Microsoft, AWS, Google, Oracle, ServiceNow, Salesforce & more" },
  { icon: Zap, text: "We will respond to you within 24 hours" },
  { icon: Filter, text: "~100 candidates screened to select each new team member" },
];

const AdvantagesSection = () => (
  <section className="py-24 md:py-32 overflow-hidden relative">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
    <div className="absolute inset-0 bg-dots" />

    <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Our Edge</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Roxosoft <span className="text-gradient-neon">Advantages</span>
      </h2>
      <p className="text-lg md:text-xl text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
        What Makes Roxosoft a Reliable IT Partner
      </p>

      {/* Bullet list */}
      <div className="max-w-2xl mx-auto space-y-5 mb-20">
        {bullets.map((b, i) => (
          <motion.div
            key={b.label}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-4 bg-glass border-glow rounded-xl px-6 py-4"
          >
            <b.icon className="w-6 h-6 text-primary flex-shrink-0" />
            <div className="flex-1">
              <span className="text-sm text-muted-foreground">{b.label}</span>
            </div>
            <span className="text-2xl md:text-3xl font-extrabold text-foreground tabular-nums">
              <AnimatedNumber end={b.end} suffix={b.suffix} />
            </span>
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
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AdvantagesSection;
