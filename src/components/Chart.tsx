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
    <Card className="relative p-6 bg-white/80 backdrop-blur-sm h-[400px] animate-fadeIn transition-all duration-300 before:absolute before:w-[101%] before:h-[101%] before:-z-10 before:rounded-lg before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:opacity-0 before:transition-opacity hover:before:opacity-100 before:bg-gradient-to-r before:from-[#9b87f5]/0 before:via-[#9b87f5]/10 before:to-[#9b87f5]/0 border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Price Chart</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">1D</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">1W</button>
          <button className="px-3 py-1 text-sm text-white bg-[#9b87f5] rounded-md">1M</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="date" stroke="#666" />
          <YAxis stroke="#666" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #f0f0f0',
              borderRadius: '8px',
            }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#9b87f5"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};