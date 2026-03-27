import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, Shield, Database, BarChart3, Cpu, Globe, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const generalServices = [
  {
    icon: Users,
    title: "Integrated Experts",
    desc: "Members of our offshore team integrate into yours and work directly for you.",
    detail: "Our integrated experts become a seamless extension of your in-house team. They attend your standups, follow your processes, and communicate in real-time through your preferred channels. Whether you need senior architects, full-stack developers, or QA specialists, we match talent to your exact tech stack and culture. You retain full control over task assignment and priorities while we handle recruitment, onboarding, and HR — so you can scale engineering capacity without the overhead of traditional hiring.",
    highlights: ["Direct communication with your team", "Full alignment with your workflows", "Flexible scaling up or down"],
  },
  {
    icon: Briefcase,
    title: "Managed Team",
    desc: "Our offshore team works for a project manager who reports directly to you.",
    detail: "With our Managed Team model, we assemble a dedicated cross-functional squad — developers, designers, QA engineers, and a project manager — all focused exclusively on your product. The PM serves as your single point of contact, delivering weekly progress reports, managing sprints, and ensuring milestones are hit on time. This model is ideal for companies that want predictable output without micromanaging individual contributors. We bring the process discipline; you bring the vision.",
    highlights: ["Dedicated project manager", "Sprint-based delivery with clear milestones", "Predictable costs and timelines"],
  },
  {
    icon: Rocket,
    title: "Startup Jumpstart",
    desc: "Our team knows all about the unique needs of startup companies of any size and budget.",
    detail: "From MVP to Series A and beyond, we've helped dozens of startups turn ideas into production-ready products. Our Startup Jumpstart program offers lean, iterative development with a focus on speed-to-market. We help you validate assumptions quickly, build investor-ready demos, and architect systems that scale as your user base grows. Budget-conscious pricing, flexible engagement terms, and deep startup ecosystem experience make us the engineering partner early-stage founders trust.",
    highlights: ["MVP development in weeks, not months", "Investor-ready demos and pitches", "Architecture that scales with growth"],
  },
];

const insuranceServices = [
  {
    icon: Shield,
    title: "App Development",
    description: "We build intuitive mobile and web applications tailored for insurance carriers, brokers, and MGAs. From policy quoting tools to claims filing apps, our solutions streamline workflows and improve policyholder engagement across every touchpoint.",
  },
  {
    icon: Cpu,
    title: "Software Development",
    description: "Custom policy administration systems, underwriting engines, and billing platforms built from the ground up. We architect scalable, compliant software that integrates with your existing tech stack and adapts to evolving regulatory requirements.",
  },
  {
    icon: Globe,
    title: "Portal Development",
    description: "Self-service portals for agents, brokers, and policyholders that reduce call center volume and accelerate service delivery. Our portals feature real-time policy management, document access, and seamless payment processing.",
  },
  {
    icon: Database,
    title: "Automation",
    description: "Eliminate manual bottlenecks with intelligent process automation. We automate claims adjudication, policy renewals, document processing, and compliance reporting — cutting operational costs by up to 60% while reducing human error.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Turn raw insurance data into actionable intelligence. Our analytics solutions cover loss ratio analysis, fraud detection, predictive modeling for risk assessment, and real-time dashboards that empower data-driven decision-making.",
  },
  {
    icon: Lock,
    title: "Risk Management",
    description: "Comprehensive risk management platforms that help insurers identify, assess, and mitigate exposure. We build tools for portfolio risk scoring, catastrophe modeling, regulatory compliance tracking, and enterprise risk reporting.",
  },
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const active = insuranceServices[activeService];
  const featured = generalServices[0];
  const others = generalServices.slice(1);

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background: grid + radial glow */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-[hsl(260,80%,65%)]/[0.03] blur-[80px]" />

      <div className="container relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our <span className="text-gradient-neon">Services</span></h2>

        {/* General - Bento Grid */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">General Software Services</h3>
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-6">
            {/* Featured (left) */}
            <motion.div
              key={featured.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="bg-glass rounded-2xl p-8 md:p-10 border-glow glow-neon flex flex-col justify-between md:row-span-2"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <featured.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground">{featured.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">{featured.detail}</p>
                <ul className="space-y-2 mb-8">
                  {featured.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-foreground/80">
                      <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors w-fit">
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Right cards */}
            {others.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-glass rounded-2xl p-6 border-glow hover:glow-neon transition-shadow text-left flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground">{s.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                {s.highlights && (
                  <ul className="mt-3 space-y-1">
                    {s.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-foreground/70">
                        <ArrowRight className="w-3 h-3 text-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Insurance - Accordion Style */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-muted-foreground">Insurance Software Development</h3>
          <p className="text-center text-muted-foreground text-sm mb-10 max-w-xl mx-auto">Specialized solutions for the insurance industry, built with deep domain expertise.</p>

          <div className="grid md:grid-cols-[300px_1fr] gap-6">
            {/* Left menu */}
            <div className="flex flex-col gap-1">
              {insuranceServices.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActiveService(i)}
                  className={cn(
                    "flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-200",
                    i === activeService
                      ? "bg-glass border-glow glow-neon text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  <s.icon className={cn("w-5 h-5 shrink-0", i === activeService ? "text-primary" : "")} />
                  <span className="text-sm font-medium">{s.title}</span>
                </button>
              ))}
            </div>

            {/* Right detail panel */}
            <motion.div
              key={activeService}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-glass rounded-2xl p-8 md:p-10 border-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <active.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{active.title}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{active.description}</p>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline transition-colors w-fit"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
