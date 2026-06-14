import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import HeroSlider from "@/components/HeroSlider";
import MarqueeBanner from "@/components/MarqueeBanner";
import AboutSection from "@/components/AboutSection";
import CoreServiceSection from "@/components/CoreServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <HeroSlider />
    <MarqueeBanner />
    <AboutSection />
    <CoreServiceSection />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

export default Index;
