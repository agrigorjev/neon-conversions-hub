import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Rocket, Shield, Database, BarChart3, Cpu, Globe, Lock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const generalServices = [
  { icon: Users, title: "Integrated Experts", desc: "Members of our offshore team integrate into yours and work directly for you." },
  { icon: Briefcase, title: "Managed Team", desc: "Our offshore team works for a project manager who reports directly to you." },
  { icon: Rocket, title: "Startup Jumpstart", desc: "Our team knows all about the unique needs of startup companies of any size and budget." },
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const active = insuranceServices[activeService];

  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-20">Our <span className="text-gradient-neon">Services</span></h2>

        {/* General */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold mb-8 text-center text-muted-foreground">General Software Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {generalServices.map((s, i) => (
              <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}
                className="bg-glass rounded-2xl p-8 border-glow hover:glow-neon transition-shadow group">
                <s.icon className="w-10 h-10 text-primary mb-5 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-semibold mb-3 text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
