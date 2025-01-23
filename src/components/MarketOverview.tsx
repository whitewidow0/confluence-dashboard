import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
      <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Bitcoin Price</p>
            <h3 className="text-2xl font-semibold mt-1">$45,230.50</h3>
          </div>
          <span className="flex items-center text-success-DEFAULT">
            <ArrowUpRight className="h-4 w-4" />
            2.4%
          </span>
        </div>
      </Card>
      
      <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Fear & Greed Index</p>
            <h3 className="text-2xl font-semibold mt-1">75</h3>
          </div>
          <span className="px-2 py-1 rounded-full bg-warning-DEFAULT/10 text-warning-foreground text-sm">
            Greed
          </span>
        </div>
      </Card>
      
      <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Market Phase</p>
            <h3 className="text-2xl font-semibold mt-1">Bullish</h3>
          </div>
          <span className="flex items-center text-success-DEFAULT">
            <ArrowUpRight className="h-4 w-4" />
            Strong
          </span>
        </div>
      </Card>
    </div>
  );
};