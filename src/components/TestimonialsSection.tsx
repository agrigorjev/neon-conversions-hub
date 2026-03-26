import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { quote: "Roxosoft delivered exceptional service and expertise. Highly recommend!", reviewer: "John Doe", company: "Company A", rating: 5 },
  { quote: "The team was professional and knowledgeable. They exceeded our expectations.", reviewer: "Jane Smith", company: "Company B", rating: 4 },
  { quote: "Great experience working with Roxosoft. They understood our needs perfectly.", reviewer: "Mike Johnson", company: "Company C", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
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
