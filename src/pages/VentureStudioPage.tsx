import Layout from "@/components/Layout";
import VentureStudioProcessSection from "@/components/VentureStudioProcessSection";
import VentureStudioPartnersSection from "@/components/VentureStudioPartnersSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const VentureStudioPage = () => {
  usePageTitle(
    "Venture Studio — Dynamics Technology",
    "The Venture Studio puts a full product, engineering, and design team behind African founders — from first idea to a company that scales."
  );

  return (
    <Layout>
      <div className="pt-20">
        <VentureStudioProcessSection />
        <VentureStudioPartnersSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default VentureStudioPage;
