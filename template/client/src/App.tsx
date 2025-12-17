import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CaseStudy from "@/pages/case-study";
import Products from "@/pages/products";
import About from "@/pages/about";
import Industries from "@/pages/industries";
import FleetIndustry from "@/pages/industries/fleet";
import ConstructionIndustry from "@/pages/industries/construction";
import ManufacturingIndustry from "@/pages/industries/manufacturing";
import AgriculturalIndustry from "@/pages/industries/agricultural";
import MunicipalIndustry from "@/pages/industries/municipal";
import AutomotiveIndustry from "@/pages/industries/automotive";
import Contact from "@/pages/contact";
import Distribution from "@/pages/distribution";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import KnowledgeBase from "@/pages/knowledge-base";

function AppRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/fleet" component={FleetIndustry} />
      <Route path="/industries/construction" component={ConstructionIndustry} />
      <Route path="/industries/manufacturing" component={ManufacturingIndustry} />
      <Route path="/industries/agricultural" component={AgriculturalIndustry} />
      <Route path="/industries/municipal" component={MunicipalIndustry} />
      <Route path="/industries/automotive" component={AutomotiveIndustry} />
      <Route path="/contact" component={Contact} />
      <Route path="/distribution" component={Distribution} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/knowledge-base" component={KnowledgeBase} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router base="/EPHA">
          <ScrollToTop />
          <Toaster />
          <AppRouter />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;