import Layout from "@/components/Layout";
import ResearchInstituteSection from "@/components/ResearchInstituteSection";
import CTASection from "@/components/CTASection";
import { usePageTitle } from "@/hooks/use-page-title";

const ResearchInstitutePage = () => {
  usePageTitle(
    "Research Institute — Dynamics Technology",
    "The Dynamics Technology Research Institute turns research into evidence — whitepapers, innovation reports, policy research, and market intelligence for Africa's ecosystem."
  );

  return (
    <Layout>
      <div className="pt-20">
        <ResearchInstituteSection />
        <CTASection />
      </div>
    </Layout>
  );
};

export default ResearchInstitutePage;
