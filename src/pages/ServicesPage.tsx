import Layout from "@/components/Layout";
import ServicesSection from "@/components/ServicesSection";
import EngagementSection from "@/components/EngagementSection";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const ServicesPage = () => {
  usePageTitle(
    "Engineering — Dynamics Technology",
    "Software, AI, cloud, IoT, and infrastructure — the full engineering stack behind every company, government, and idea Dynamics Technology helps build."
  );

  return (
    <Layout>
      <div className="pt-20">
        <ServicesSection />
        <EngagementSection />
        <IndustriesSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default ServicesPage;
