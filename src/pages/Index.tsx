import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConferenceBanner from "@/components/ConferenceBanner";
import ServicesSection from "@/components/ServicesSection";
import AchievementsSection from "@/components/AchievementsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ConferenceBanner />
    <ServicesSection />
    <AchievementsSection />
    <AdvantagesSection />
    <TestimonialsSection />
    <CaseStudiesSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
