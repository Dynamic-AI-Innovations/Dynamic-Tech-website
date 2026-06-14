import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";

const AboutPage = () => (
  <Layout>
    <div className="pt-20">
      <AboutSection />
      <VisionSection />
      <WhyUsSection />
      <CTASection />
    </div>
  </Layout>
);

export default AboutPage;
