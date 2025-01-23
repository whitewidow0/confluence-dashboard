import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2024-01', price: 42000 },
  { date: '2024-02', price: 44000 },
  { date: '2024-03', price: 43000 },
  { date: '2024-04', price: 45000 },
  { date: '2024-05', price: 47000 },
];

export const Chart = () => {
  return (
    <Card className="p-6 bg-gray-800/50 backdrop-blur-sm border-gray-700 h-[400px] animate-fadeIn hover:shadow-[0_0_20px_rgba(74,222,128,0.05)]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-white">Price Chart</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors">1D</button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:bg-gray-700/50 rounded-md transition-colors">1W</button>
          <button className="px-3 py-1 text-sm text-white bg-gray-700/50 rounded-md">1M</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="date" stroke="#9CA3AF" />
          <YAxis stroke="#9CA3AF" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1F2937',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4ade80"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};