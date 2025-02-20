import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Calendar, Clock } from "lucide-react";

// Complete machine data map
const machineDataMap = {
  "Pipe Cutting": {
    lastReported: "10:59 11-02-2025",
    utilization: "1000 units",
    ontime: "60 mins",
    runningtime: "50 mins",
    idleTime: "15 mins",
    offtime: "10 mins",
    currentShift: "420 units",
    efficiency: "96%",
    totalToday: "1420 units",
    downtime: "15 min",
  },
  "Pipe Making": {
    lastReported: "11:15 11-02-2025",
    utilization: "850 units",
    ontime: "60 mins",
    runningtime: "50 mins",
    idleTime: "15 mins",
    offtime: "10 mins",
    currentShift: "380 units",
    efficiency: "92%",
    totalToday: "1230 units",
    downtime: "20 min",
  },
  "Water Bulging": {
    lastReported: "09:30 11-02-2025",
    utilization: "750 units",
    ontime: "60 mins",
    runningtime: "50 mins",
    idleTime: "15 mins",
    offtime: "10 mins",
    currentShift: "500 units",
    efficiency: "85%",
    totalToday: "1300 units",
    downtime: "10 min",
  },
  "Neck Forming": {
    lastReported: "12:00 11-02-2025",
    utilization: "500 units",
    ontime: "60 mins",
    runningtime: "50 mins",
    idleTime: "15 mins",
    offtime: "10 mins",
    currentShift: "300 units",
    efficiency: "80%",
    totalToday: "1000 units",
    downtime: "25 min",
  },
  "Bottom Welding": {
    lastReported: "11:45 11-02-2025",
    utilization: "950 units",
    ontime: "60 mins",
    runningtime: "50 mins",
    idleTime: "15 mins",
    offtime: "10 mins",
    currentShift: "450 units",
    efficiency: "93%",
    totalToday: "1350 units",
    downtime: "18 min",
  },
};

const productionDataMap = {
  Shiftwise: [
    { shift: "Shift A", rate: 10 },
    { shift: "Shift B", rate: 25 },
    { shift: "Shift C", rate: 50 },
  ],
  Daily: [
    { shift: "Monday", rate: 300 },
    { shift: "Tuesday", rate: 500 },
    { shift: "Wednesday", rate: 700 },
  ],
  Weekly: [
    { shift: "Week 1", rate: 1500 },
    { shift: "Week 2", rate: 1800 },
    { shift: "Week 3", rate: 2100 },
  ],
  Date: [
    { shift: "09:00", rate: 100 },
    { shift: "10:00", rate: 150 },
    { shift: "11:00", rate: 200 },
    { shift: "12:00", rate: 180 },
    { shift: "13:00", rate: 220 },
    { shift: "14:00", rate: 250 },
  ],
};

function DateTimePicker({ onClose, onApply }) {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");

  return (
    <div className="absolute top-16 right-0 bg-white p-6 rounded-lg shadow-xl border border-gray-200 z-10">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-500" />
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="border rounded-md p-2"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Clock className="w-5 h-5 text-gray-500" />
          <div className="flex items-center gap-2">
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="border rounded-md p-2"
            />
            <span>to</span>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="border rounded-md p-2"
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={() => onApply({ selectedDate, startTime, endTime })}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

function MachinePopup({ machine, onClose }) {
  const [view, setView] = useState("Shiftwise");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [dateTimeFilter, setDateTimeFilter] = useState(null);
  
  // Get machine data with fallback for unknown machine types
  const machineData = machineDataMap[machine.title] || {
    lastReported: "N/A",
    utilization: "N/A",
    ontime: "N/A",
    runningtime: "N/A",
    idleTime: "N/A",
    offtime: "N/A",
    currentShift: "N/A",
    efficiency: "N/A",
    totalToday: "N/A",
    downtime: "N/A",
  };
  
  const [productionData, setProductionData] = useState(productionDataMap[view]);

  const handleViewChange = (newView) => {
    setView(newView);
    if (newView === "Date") {
      setShowDatePicker(true);
    } else {
      setProductionData(productionDataMap[newView]);
      setShowDatePicker(false);
    }
  };

  const handleDateTimeApply = (filter) => {
    setDateTimeFilter(filter);
    setShowDatePicker(false);
    setProductionData(productionDataMap.Date);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[1000px] h-[650px] relative flex gap-8">
        
        {/* Left Sidebar */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-1/3 flex flex-col items-center">
          <div className="w-20 h-20 border-2 border-black rounded-full mb-3"></div>
          <p className="text-xl font-bold">{machine.title}</p>
          <p className="text-lg px-6 py-2 mt-2 rounded-md bg-blue-900 text-white">
            <strong>Shift :</strong> <span className="text-white font-bold"> A </span>
          </p>
          <div className="mt-6 space-y-4 text-gray-700 text-lg">
            <p><strong>Last reported:</strong> <span className="text-blue-700">{machineData.lastReported}</span></p>
            <p><strong>Cumulative utilization:</strong> <span className="text-blue-700">{machineData.utilization}</span></p>
            <p><strong>Machine On time:</strong> <span className="text-blue-700">{machineData.ontime}</span></p>
            <p><strong>Machine Running Time:</strong> <span className="text-blue-700">{machineData.runningtime}</span></p>
            <p><strong>Machine Idle Time:</strong> <span className="text-blue-700">{machineData.idleTime}</span></p>
            <p><strong>Machine Off time:</strong> <span className="text-blue-700">{machineData.offtime}</span></p>
          </div>
        </div>

        {/* Right Content */}
        <div className="w-2/3">
          <h2 className="text-2xl font-bold">Machine Details: {machine.title}</h2>

          {/* Toggle Buttons */}
          <div className="flex gap-3 mt-4 relative">
            {["Shiftwise", "Daily", "Weekly", "Date"].map((btn) => (
              <button
                key={btn}
                className={`px-6 py-2 rounded-md text-lg ${
                  view === btn ? "bg-blue-900 text-white" : "bg-gray-200"
                }`}
                onClick={() => handleViewChange(btn)}
              >
                {btn}
              </button>
            ))}
            
            {showDatePicker && (
              <DateTimePicker
                onClose={() => setShowDatePicker(false)}
                onApply={handleDateTimeApply}
              />
            )}
          </div>

          {/* Date/Time Filter Display */}
          {dateTimeFilter && view === "Date" && (
            <div className="mt-4 text-sm text-gray-600">
              Showing data for: {dateTimeFilter.selectedDate} ({dateTimeFilter.startTime} - {dateTimeFilter.endTime})
            </div>
          )}

          {/* Production Data */}
          <div className="grid grid-cols-3 gap-6 mt-6 text-gray-700 text-lg">
            <p><strong>Current shift production:</strong> <span className="text-blue-700">{machineData.currentShift}</span></p>
            <p><strong>Utilization Rate:</strong> <span className="text-blue-700">{machineData.efficiency}</span></p>
            <p><strong>Total Today:</strong> <span className="text-blue-700">{machineData.totalToday}</span></p>
          </div>

          {/* Graph */}
          <div className="mt-16 h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={productionData}>
                <XAxis dataKey="shift" tick={{ fontSize: 14 }} />
                <YAxis tick={{ fontSize: 14 }} />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#00008B" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Close Button */}
        <button className="absolute top-3 right-3 bg-gray-300 rounded-full p-3 text-xl" onClick={onClose}>✖</button>
      </div>
    </div>
  );
}

export default MachinePopup;