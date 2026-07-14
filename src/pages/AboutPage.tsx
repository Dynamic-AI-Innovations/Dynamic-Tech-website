import Layout from "@/components/Layout";
import AboutSection from "@/components/AboutSection";
import VisionSection from "@/components/VisionSection";
import WhyUsSection from "@/components/WhyUsSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const AboutPage = () => {
  usePageTitle(
    "About — Dynamics Technology",
    "Africa-based, globally capable. Dynamics Technology is building Africa's Silicon Valley — homegrown innovation engineered to world-class standards."
  );

  return (
    <Layout>
      <div className="pt-20">
        <AboutSection />
        <VisionSection />
        <WhyUsSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default AboutPage;
