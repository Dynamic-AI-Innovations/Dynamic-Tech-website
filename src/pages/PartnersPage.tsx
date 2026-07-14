import Layout from "@/components/Layout";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const PartnersPage = () => {
  usePageTitle(
    "Partners — Dynamics Technology",
    "The founders, governments, investors, and organisations building Africa's Silicon Valley alongside Dynamics Technology."
  );

  return (
    <Layout>
      <div className="pt-20">
        <PartnersSection />
        <TestimonialsSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default PartnersPage;
