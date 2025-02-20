"use client"; // Force client-side rendering

import { useEffect, useState } from "react";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from "recharts";

const productionData = [
  { shift: 'Shift 1', productionRate: 80, utilization: 75 },
  { shift: 'Shift 2', productionRate: 85, utilization: 78 },
  { shift: 'Shift 3', productionRate: 75, utilization: 70 },
];

const machineData = [
  { date: '10 Jan', runningHour: 10, onHour: 12 },
  { date: '11 Jan', runningHour: 9, onHour: 11 },
  { date: '12 Jan', runningHour: 9, onHour: 11 },
  { date: '13 Jan', runningHour: 10, onHour: 12 },
  { date: '14 Jan', runningHour: 12, onHour: 14 },
  { date: '15 Jan', runningHour: 8, onHour: 10 },
];

const ProductionUtilizationGraphs = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading graphs...</p>;

  return (
    <div className="p-4 space-y-6 ml-[-135px] w-full max-w-[580px] mx-auto"> {/* Shifted Left */}
      {/* Line Graph */}
      <div className="bg-white shadow-lg rounded-lg p-3 mt-32">
        <h2 className="text-xl font-semibold mb-2">Production count vs Average Utilization</h2>
        <ResponsiveContainer width="100%" height={150} fixed>
          <LineChart data={productionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="shift" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="productionRate" stroke="#1E3A8A" strokeWidth={2} />
            <Line type="monotone" dataKey="utilization" stroke="#EF4444" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Graph */}
      <div className="bg-white shadow-lg rounded-lg p-2 min-h-[230px]">
        <h2 className="text-xl font-semibold mb-2">Machine Running Hour vs Machine On Hour</h2>
        <ResponsiveContainer width="100%" height={150}>
        <BarChart data={machineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="runningHour" stackId="a" fill="#1E3A8A" />
            <Bar dataKey="onHour" stackId="a" fill="red" />
        </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductionUtilizationGraphs;
