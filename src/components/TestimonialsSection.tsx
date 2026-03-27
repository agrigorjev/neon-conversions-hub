import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I like the founders. We got along very well and I appreciate their honesty and efforts to solve some very difficult problems. They were very responsive. No fuzz.",
    reviewer: "Niels Bosma",
    company: "Founder & CEO, Filestar AB",
    rating: 5,
  },
  {
    quote: "In the years we have been working together, everything has worked perfectly. They have a good will to solve tasks according to our wishes. The fact that we still have them says a lot.",
    reviewer: "Joakim Erlandson",
    company: "Former CEO, Börs Världen Nordic AB",
    rating: 5,
  },
  {
    quote: "I'm impressed with their professional and thorough work ethic, that makes it easy to trust them. They set realistic expectations and generally met them in a timely fashion.",
    reviewer: "Anonymous",
    company: "Publisher, Book & Data Publishing Company",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
    <div className="absolute inset-0 bg-diagonal" />
    <div className="absolute -top-20 right-1/4 w-[350px] h-[350px] rounded-full bg-[hsl(260,80%,65%)]/[0.04] blur-[90px]" />
    <div className="absolute bottom-0 left-10 w-[300px] h-[250px] rounded-full bg-primary/[0.03] blur-[80px]" />
    <div className="container relative z-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4 text-center">Testimonials</p>
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">What Our <span className="text-gradient-neon">Clients Say</span></h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.reviewer} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="bg-glass rounded-2xl p-8 border-glow relative">
            <Quote className="w-8 h-8 text-primary/30 mb-4" />
            <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className={`w-4 h-4 ${j < t.rating ? "fill-primary text-primary" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">{t.reviewer}</p>
            <p className="text-xs text-muted-foreground">{t.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
