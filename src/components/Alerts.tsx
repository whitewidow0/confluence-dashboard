import { Card } from "@/components/ui/card";
import { Bell } from "lucide-react";

const alerts = [
  {
    id: 1,
    message: "RSI approaching overbought levels",
    time: "5 min ago",
    type: "warning",
  },
  {
    id: 2,
    message: "New local top formed at $45,230",
    time: "15 min ago",
    type: "success",
  },
];

export const Alerts = () => {
  return (
    <Card className="p-6 bg-white/80 backdrop-blur-sm animate-fadeIn transition-all duration-300 hover:shadow-[0_0_15px_rgba(155,135,245,0.2)] border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Recent Alerts</h3>
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
      <div className="space-y-4">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-2 h-2 rounded-full ${
                  alert.type === "warning" ? "bg-[#9b87f5]" : "bg-[#7E69AB]"
                }`}
              />
              <span className="text-sm text-gray-700">{alert.message}</span>
            </div>
            <span className="text-xs text-gray-500">{alert.time}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};