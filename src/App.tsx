import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const InnovationLabPage = lazy(() => import("./pages/InnovationLabPage"));
const VentureStudioPage = lazy(() => import("./pages/VentureStudioPage"));
const ResearchInstitutePage = lazy(() => import("./pages/ResearchInstitutePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen bg-background" />}>
            <Routes>
              <Route path="/"                    element={<Index />} />
              <Route path="/about"               element={<AboutPage />} />
              <Route path="/services"            element={<ServicesPage />} />
              <Route path="/portfolio"           element={<PortfolioPage />} />
              <Route path="/partners"            element={<PartnersPage />} />
              <Route path="/innovation-lab"      element={<InnovationLabPage />} />
              <Route path="/venture-studio"      element={<VentureStudioPage />} />
              <Route path="/research-institute"  element={<ResearchInstitutePage />} />
              <Route path="*"                    element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
