import { CalendarDays } from "lucide-react";

const ConferenceBanner = () => (
  <section className="bg-gradient-neon py-4">
    <div className="container flex items-center justify-center gap-3 text-primary-foreground">
      <CalendarDays className="w-5 h-5 shrink-0" />
      <p className="text-sm md:text-base font-semibold text-center">
        Meet us at the Insurance Software Development Conference 2026 — <span className="underline underline-offset-2">Learn More</span>
      </p>
    </div>
  </section>
);

export default ConferenceBanner;
