import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CaseStudy from "@/pages/case-study";
import Products from "@/pages/products";
import About from "@/pages/about";
import Industries from "@/pages/industries";
import FleetIndustry from "@/pages/industries/fleet";
import ConstructionIndustry from "@/pages/industries/construction";
import Contact from "@/pages/contact";
import Distribution from "@/pages/distribution";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/case-study" component={CaseStudy} />
      <Route path="/products" component={Products} />
      <Route path="/about" component={About} />
      <Route path="/industries" component={Industries} />
      <Route path="/industries/fleet" component={FleetIndustry} />
      <Route path="/industries/construction" component={ConstructionIndustry} />
      <Route path="/contact" component={Contact} />
      <Route path="/distribution" component={Distribution} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;