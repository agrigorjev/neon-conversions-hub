import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Star, Quote } from "lucide-react";
import mandaraLogo from "@/assets/mandara-logo.png";
import ellomyntLogo from "@/assets/ellomynt-logo.png";
import craftsmanLogo from "@/assets/craftsman-logo.png";
import filestarLogo from "@/assets/filestar-logo.png";

function TypewriterQuote({ text, speed = 35 }: { text: string; speed?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      if (i > text.length) { setDone(true); clearInterval(timer); }
      else setDisplayed(text.slice(0, i));
    }, speed);
    return () => clearInterval(timer);
  }, [inView, text, speed]);

  return (
    <p ref={ref} className="text-lg font-medium text-foreground leading-relaxed italic min-h-[4.5rem]">
      {"\u201C"}{displayed}
      {!done && <span className="inline-block w-[2px] h-[1.1em] bg-primary ml-0.5 align-middle animate-pulse" />}
      {done && "\u201D"}
    </p>
  );
}

const smallCases = [
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
    name: "Filestar AB (Sweden)",
    tags: "SaaS, C#, AI, Cloud",
    desc: "A SaaS company engaged Roxosoft to assist in developing their product and bringing it to market. The team integrated seamlessly, delivering quality code and significant progress.",
    logo: filestarLogo,
    link: "https://clutch.co/go-to-review/e32937d7-4e2c-462e-bb5d-7106b4d6ea9d/281088",
  },
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`w-4 h-4 ${s <= Math.floor(rating) ? "fill-primary text-primary" : s - 0.5 <= rating ? "fill-primary/50 text-primary" : "text-muted-foreground/30"}`}
      />
    ))}
    <span className="text-sm font-semibold text-foreground ml-1">{rating}</span>
  </div>
);

const CaseStudiesSection = () => (
    <section id="cases" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[hsl(260,80%,65%)]/[0.03] blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[350px] rounded-full bg-primary/[0.04] blur-[90px]" />

      <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Case Studies</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">
        Discover Our <span className="text-gradient-neon">Success Stories</span>
      </h2>
      <p className="text-center text-muted-foreground mb-16 max-w-xl mx-auto">
        Explore how we've helped clients achieve their goals through innovative solutions.
      </p>

      {/* Craftsman — full-width featured */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-glass rounded-2xl overflow-hidden border-glow mb-6"
      >
        <div className="grid md:grid-cols-2">
          {/* Left: Case Study */}
          <a
            href="https://roxosoft.com/case-studies/craftsman"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col"
          >
            <div className="h-56 bg-background/50 flex items-center justify-center p-6">
              <img src={craftsmanLogo} alt="Craftsman Book Co" className="max-h-full max-w-full object-contain" />
            </div>
            <div className="p-8 flex-1">
              <p className="font-mono text-[10px] uppercase tracking-wider text-primary/70 mb-2">
                Enterprise, Cloud, C#, Managed
              </p>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-foreground">Craftsman Book Co (USA)</h4>
                <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We developed Craftsman's flagship SaaS estimating and appraisal products that are fully cloud-based. Converting a Windows-based construction cost estimating program to a browser-based application — a complete and successful replacement of the old product.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-primary/10 text-primary">API Development</span>
                <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-primary/10 text-primary">Application Testing</span>
                <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-primary/10 text-primary">Custom Software</span>
              </div>
            </div>
          </a>

          {/* Right: Customer Feedback */}
          <div className="border-t md:border-t-0 md:border-l border-border/30 p-8 flex flex-col justify-center bg-primary/[0.03]">
            <div className="mb-6">
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              <TypewriterQuote text="I'm impressed with their professional and thorough work ethic, that makes it easy to trust them." />
            </div>
            <div className="mb-6">
              <RatingStars rating={4.5} />
            </div>
            <div className="mt-6 pt-6 border-t border-border/20">
              <p className="text-sm font-semibold text-foreground">Publisher</p>
              <p className="text-xs text-muted-foreground">Book & Data Publishing Company</p>
              <p className="text-xs text-muted-foreground mt-1">$200,000 – $999,999 · Mar 2017 – Ongoing</p>
            </div>
            <p className="text-[10px] text-muted-foreground/50 mt-4 font-mono uppercase tracking-wider">
              Verified Clutch Review
            </p>
          </div>
        </div>
      </motion.div>

      {/* 3 smaller case studies */}
      <div className="grid md:grid-cols-3 gap-6">
        {smallCases.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="group bg-glass rounded-2xl overflow-hidden border-glow hover:glow-neon transition-shadow"
          >
            <div className="h-48 bg-background/50 flex items-center justify-center p-4">
              {c.logo ? (
                <img src={c.logo} alt={c.name} className="max-h-full max-w-full object-contain" />
              ) : (
                <span className="text-3xl font-bold text-foreground/60">{c.name.split(" (")[0]}</span>
              )}
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
