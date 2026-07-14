import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import ProofSection from "@/components/ProofSection";
import EcosystemSection from "@/components/EcosystemSection";
import InnovationTimelineSection from "@/components/InnovationTimelineSection";
import AfricaDashboardSection from "@/components/AfricaDashboardSection";
import AboutSection from "@/components/AboutSection";
import CoreServiceSection from "@/components/CoreServiceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => (
  <Layout>
    <HeroSlider />
    <ProofSection />
    <EcosystemSection />
    <InnovationTimelineSection />
    <AfricaDashboardSection />
    <AboutSection />
    <CoreServiceSection />
    <TestimonialsSection />
    <CTASection />
  </Layout>
);

export default Index;
