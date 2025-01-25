import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface RulesProps {
  defaultTab?: "majorTop" | "majorBottom" | "localTop" | "localBottom";
}

export const Rules = ({ defaultTab = "majorTop" }: RulesProps) => {
  const [rules, setRules] = useState({
    majorTop: "Enter your Major Top identification rules here...",
    majorBottom: "Enter your Major Bottom identification rules here...",
    localTop: "Enter your Local Top identification rules here...",
    localBottom: "Enter your Local Bottom identification rules here..."
  });

  const handleRuleChange = (category: keyof typeof rules, value: string) => {
    setRules(prev => ({
      ...prev,
      [category]: value
    }));
  };

  return (
    <div className="p-6 bg-white/80 backdrop-blur-sm rounded-lg animate-fadeIn relative group">
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-lg bg-[#9b87f5]/10 transition-opacity rounded-lg" />
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trading Rules</h2>
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="majorTop">Major Top</TabsTrigger>
          <TabsTrigger value="majorBottom">Major Bottom</TabsTrigger>
          <TabsTrigger value="localTop">Local Top</TabsTrigger>
          <TabsTrigger value="localBottom">Local Bottom</TabsTrigger>
        </TabsList>
        <TabsContent value="majorTop">
          <Textarea
            value={rules.majorTop}
            onChange={(e) => handleRuleChange("majorTop", e.target.value)}
            className="min-h-[300px]"
          />
        </TabsContent>
        <TabsContent value="majorBottom">
          <Textarea
            value={rules.majorBottom}
            onChange={(e) => handleRuleChange("majorBottom", e.target.value)}
            className="min-h-[300px]"
          />
        </TabsContent>
        <TabsContent value="localTop">
          <Textarea
            value={rules.localTop}
            onChange={(e) => handleRuleChange("localTop", e.target.value)}
            className="min-h-[300px]"
          />
        </TabsContent>
        <TabsContent value="localBottom">
          <Textarea
            value={rules.localBottom}
            onChange={(e) => handleRuleChange("localBottom", e.target.value)}
            className="min-h-[300px]"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};