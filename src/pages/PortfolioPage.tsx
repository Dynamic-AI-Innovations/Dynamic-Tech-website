import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PortfolioSection from "@/components/PortfolioSection";
import CTASection from "@/components/CTASection";

const VALID_TABS = ["rbd", "design", "writing", "tech"];

const PortfolioPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = VALID_TABS.includes(searchParams.get("tab") ?? "") ? searchParams.get("tab")! : "rbd";
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && VALID_TABS.includes(tab)) setActiveTab(tab);
  }, [searchParams]);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <Layout>
      <div className="pt-20">
        <PortfolioSection activeTab={activeTab} onTabChange={handleTabChange} />
        <CTASection />
      </div>
    </Layout>
  );
};

export default PortfolioPage;
