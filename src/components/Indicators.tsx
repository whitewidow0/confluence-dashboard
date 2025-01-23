import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Indicators = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
      <Card className="relative p-6 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">RSI</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Current Value</span>
              <span className="text-sm font-medium text-[#9b87f5]">72</span>
            </div>
            <Progress value={72} className="h-2 bg-gray-100" />
          </div>
          <div className="flex justify-between text-sm text-gray-500 flex-wrap">
            <span>Oversold</span>
            <span>Neutral</span>
            <span>Overbought</span>
          </div>
        </div>
      </Card>

      <Card className="relative p-6 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">MVRV Z-Score</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Current Value</span>
              <span className="text-sm font-medium text-[#9b87f5]">2.5</span>
            </div>
            <Progress value={50} className="h-2 bg-gray-100" />
          </div>
          <div className="flex justify-between text-sm text-gray-500 flex-wrap">
            <span>Undervalued</span>
            <span>Fair Value</span>
            <span>Overvalued</span>
          </div>
        </div>
      </Card>
    </div>
  );
};