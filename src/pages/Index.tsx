import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import CoreServiceSection from "@/components/CoreServiceSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import PartnersSection from "@/components/PartnersSection";
import WhyUsSection from "@/components/WhyUsSection";
import EngagementSection from "@/components/EngagementSection";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <MarqueeBanner />
    <AboutSection />
    <CoreServiceSection />
    <ServicesSection />
    <VisionSection />
    <PartnersSection />
    <WhyUsSection />
    <EngagementSection />
    <IndustriesSection />
    <TestimonialsSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
