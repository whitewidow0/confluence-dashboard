import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const currentTime = new Date().toLocaleTimeString();
  const location = useLocation();

  const isActiveLink = (path: string) => {
    return location.pathname === path ? "text-[#9b87f5]" : "text-gray-600";
  };

  return (
    <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-100 flex items-center justify-between animate-fadeIn">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] bg-clip-text text-transparent relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#9b87f5]/50 before:to-[#7E69AB]/50 before:blur-lg before:-z-10 before:opacity-75">
          Market Pulse
        </h1>
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`${isActiveLink("/")} hover:text-[#9b87f5] transition-colors relative group`}
          >
            Dashboard
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-lg bg-[#9b87f5]/20 transition-opacity" />
          </Link>
          <Link 
            to="/rules" 
            className={`${isActiveLink("/rules")} hover:text-[#9b87f5] transition-colors relative group`}
          >
            Rules
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-lg bg-[#9b87f5]/20 transition-opacity" />
          </Link>
          <Link 
            to="/heatmap" 
            className={`${isActiveLink("/heatmap")} hover:text-[#9b87f5] transition-colors relative group`}
          >
            Heatmap
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-lg bg-[#9b87f5]/20 transition-opacity" />
          </Link>
          <Link 
            to="/analysis" 
            className={`${isActiveLink("/analysis")} hover:text-[#9b87f5] transition-colors relative group`}
          >
            Analysis
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 blur-lg bg-[#9b87f5]/20 transition-opacity" />
          </Link>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500">{currentTime}</span>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5 text-gray-600" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-gray-600" />
        </Button>
      </div>
    </header>
  );
};