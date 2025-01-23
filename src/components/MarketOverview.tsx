import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export const MarketOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
      <Card className="relative p-6 bg-white/80 backdrop-blur-sm transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Bitcoin Price</p>
            <h3 className="text-2xl font-semibold mt-1">$45,230.50</h3>
          </div>
          <span className="flex items-center text-[#9b87f5]">
            <ArrowUpRight className="h-4 w-4" />
            2.4%
          </span>
        </div>
      </Card>
      
      <Card className="relative p-6 bg-white/80 backdrop-blur-sm transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Fear & Greed Index</p>
            <h3 className="text-2xl font-semibold mt-1">75</h3>
          </div>
          <span className="px-2 py-1 rounded-full bg-[#9b87f5]/10 text-[#7E69AB] text-sm">
            Greed
          </span>
        </div>
      </Card>
      
      <Card className="relative p-6 bg-white/80 backdrop-blur-sm transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">Market Phase</p>
            <h3 className="text-2xl font-semibold mt-1">Bullish</h3>
          </div>
          <span className="flex items-center text-[#9b87f5]">
            <ArrowUpRight className="h-4 w-4" />
            Strong
          </span>
        </div>
      </Card>
    </div>
  );
};