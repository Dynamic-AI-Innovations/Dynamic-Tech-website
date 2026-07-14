import Layout from "@/components/Layout";
import InnovationLabHero from "@/components/InnovationLabHero";
import InnovationLabFocusSection from "@/components/InnovationLabFocusSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const InnovationLabPage = () => {
  usePageTitle(
    "Innovation Lab — Dynamics Technology",
    "Where Dynamics Technology explores emerging technology and unmet needs across African markets before they become products."
  );

  return (
    <Layout>
      <div className="pt-20">
        <InnovationLabHero />
        <InnovationLabFocusSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default InnovationLabPage;
