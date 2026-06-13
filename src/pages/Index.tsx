import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HeroSlider from "@/components/HeroSlider";
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
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [portfolioTab, setPortfolioTab] = useState("rbd");

  return (
    <div className="min-h-screen bg-background">
      <Navbar onPortfolioTabSelect={setPortfolioTab} />
      <HeroSection />
      <HeroSlider />
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
      <PortfolioSection activeTab={portfolioTab} onTabChange={setPortfolioTab} />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
