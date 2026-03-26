import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container relative z-10">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Get In Touch</p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Let's Build <span className="text-gradient-neon">Together</span></h2>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="md:col-span-3 bg-glass rounded-2xl p-8 border-glow space-y-5">
            <Input placeholder="Full Name" required className="bg-secondary border-border focus:ring-primary" />
            <Input type="email" placeholder="Email" required className="bg-secondary border-border focus:ring-primary" />
            <Input type="tel" placeholder="Phone" className="bg-secondary border-border focus:ring-primary" />
            <Textarea placeholder="About your project" rows={4} required className="bg-secondary border-border focus:ring-primary resize-none" />
            <Button type="submit" disabled={loading} className="w-full bg-gradient-neon text-primary-foreground font-semibold glow-neon hover:opacity-90">
              {loading ? "Sending..." : <>Send Message <Send className="ml-2 w-4 h-4" /></>}
            </Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 flex flex-col gap-8 justify-center">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Email</p>
                <p className="text-sm text-muted-foreground">info@roxosoft.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Phone</p>
                <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">Office</p>
                <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
