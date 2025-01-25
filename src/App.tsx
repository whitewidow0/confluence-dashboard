import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Rules } from "@/components/Rules";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/major-top" element={<Rules defaultTab="majorTop" />} />
          <Route path="/major-bottom" element={<Rules defaultTab="majorBottom" />} />
          <Route path="/local-top" element={<Rules defaultTab="localTop" />} />
          <Route path="/local-bottom" element={<Rules defaultTab="localBottom" />} />
          <Route path="/heatmap" element={<Index />} />
          <Route path="/analysis" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;