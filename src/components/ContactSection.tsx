"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Send, Paperclip, FileText, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [nda, setNda] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Request sent!", description: "Our founders will review your requirements shortly." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-dots opacity-50" />
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-primary/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[300px] rounded-full bg-[hsl(260,80%,65%)]/[0.04] blur-[80px]" />
      <div className="container relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Get In Touch</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Let's Build <span className="text-gradient-neon">Together</span></h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-glass rounded-2xl p-8 border-glow space-y-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
            <Input placeholder="Name" required className="bg-secondary border-border focus:ring-primary" />
            <Input type="email" placeholder="Corporate Email" required className="bg-secondary border-border focus:ring-primary" />
            <Input type="tel" placeholder="Phone" className="bg-secondary border-border focus:ring-primary" />
            <Textarea placeholder="Please describe your project requirements" rows={4} required className="bg-secondary border-border focus:ring-primary resize-none" />

            <div>
              <input ref={fileRef} type="file" className="hidden" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              {file ? (
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary rounded-md px-3 py-2">
                  <FileText className="w-4 h-4 text-primary shrink-0" />
                  <span className="truncate flex-1">{file.name}</span>
                  <button type="button" onClick={() => setFile(null)} className="text-muted-foreground hover:text-foreground"><X className="w-4 h-4" /></button>
                </div>
              ) : (
                <Button type="button" variant="outline" className="w-full border-dashed border-border text-muted-foreground hover:text-foreground" onClick={() => fileRef.current?.click()}>
                  <Paperclip className="w-4 h-4 mr-2" /> Attach File
                </Button>
              )}
            </div>

            <label className="flex items-center gap-3 cursor-pointer">
              <Checkbox checked={nda} onCheckedChange={(v) => setNda(v === true)} />
              <span className="text-sm text-muted-foreground">I would like you to sign an NDA</span>
            </label>

            <Button type="submit" disabled={loading} className="w-full bg-gradient-neon text-primary-foreground font-semibold glow-neon hover:opacity-90">
              {loading ? "Sending..." : <>Send Request <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">What Happens Next?</h3>
            <div className="space-y-8">
              {[
                { step: 1, title: "We Analyze Your Requirements", desc: "Our founders will personally review your project details and reach out to discuss your vision and goals." },
                { step: 2, title: "NDA & Confidentiality", desc: "If needed, we sign a Non-Disclosure Agreement to ensure your ideas and data stay fully protected." },
                { step: 3, title: "Project Proposal", desc: "We submit a comprehensive project proposal with timeline, milestones, and a transparent cost breakdown." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm shrink-0 border border-primary/30">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
