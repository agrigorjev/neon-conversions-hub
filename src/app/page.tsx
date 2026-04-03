import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConferenceBanner from "@/components/ConferenceBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyRoxosoftSection from "@/components/WhyRoxosoftSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ConferenceBanner />
      <ServicesSection />
      <WhyRoxosoftSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
