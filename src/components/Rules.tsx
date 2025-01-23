import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const Rules = () => {
  const [rules, setRules] = useState({
    trading: "Enter your trading rules here...",
    risk: "Enter your risk management rules here...",
    psychology: "Enter your trading psychology rules here..."
  });

  const handleRuleChange = (category: keyof typeof rules, value: string) => {
    setRules(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 animate-fadeIn hover:shadow-[0_0_20px_rgba(74,222,128,0.05)]">
      <h2 className="text-2xl font-semibold mb-6 text-white">Trading Rules</h2>
      <Tabs defaultValue="trading" className="w-full">
        <TabsList className="mb-4 bg-gray-700/50">
          <TabsTrigger value="trading">Trading</TabsTrigger>
          <TabsTrigger value="risk">Risk Management</TabsTrigger>
          <TabsTrigger value="psychology">Psychology</TabsTrigger>
        </TabsList>
        <TabsContent value="trading">
          <Textarea
            value={rules.trading}
            onChange={(e) => handleRuleChange("trading", e.target.value)}
            className="min-h-[300px] bg-gray-900/50 border-gray-700 text-gray-200"
          />
        </TabsContent>
        <TabsContent value="risk">
          <Textarea
            value={rules.risk}
            onChange={(e) => handleRuleChange("risk", e.target.value)}
            className="min-h-[300px] bg-gray-900/50 border-gray-700 text-gray-200"
          />
        </TabsContent>
        <TabsContent value="psychology">
          <Textarea
            value={rules.psychology}
            onChange={(e) => handleRuleChange("psychology", e.target.value)}
            className="min-h-[300px] bg-gray-900/50 border-gray-700 text-gray-200"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};