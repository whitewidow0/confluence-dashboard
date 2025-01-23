import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <header className="w-full px-6 py-4 bg-gray-800/80 backdrop-blur-lg border-b border-gray-700 flex items-center justify-between animate-fadeIn">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent hover:shadow-[0_0_30px_rgba(74,222,128,0.2)] transition-all duration-300">
          Market Pulse
        </h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all">Dashboard</a>
          <a href="#" className="text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all">Rules</a>
          <a href="#" className="text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all">Heatmap</a>
          <a href="#" className="text-gray-300 hover:text-white hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all">Analysis</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-400">{currentTime}</span>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700/50">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-gray-700/50">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};