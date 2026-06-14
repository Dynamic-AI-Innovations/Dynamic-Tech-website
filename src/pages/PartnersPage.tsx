import Layout from "@/components/Layout";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const PartnersPage = () => (
  <Layout>
    <div className="pt-20">
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  </Layout>
);

export default PartnersPage;
