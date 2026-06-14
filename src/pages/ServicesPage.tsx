import Layout from "@/components/Layout";
import ServicesSection from "@/components/ServicesSection";
import EngagementSection from "@/components/EngagementSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";

const ServicesPage = () => (
  <Layout>
    <div className="pt-20">
      <ServicesSection />
      <EngagementSection />
      <IndustriesSection />
      <CTASection />
    </div>
  </Layout>
);

export default ServicesPage;
