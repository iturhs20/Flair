import React from 'react';

export default function Alarms() {
    return (
        <div className="w-full px-4 py-3">
            <div className="bg-white mx-auto rounded-xl shadow-lg p-4">

                {/* Alarm Count Section */}
                <div className="bg-[#F3F4F6] mt-4 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">13247 Alarms in 2025</h2>
                    <div className="mt-3">
                        {/* Heatmap Representation */}
                        <div className="grid grid-cols-10 gap-1">
                            {[...Array(30)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-purple-500 rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Alarm Breakdown Section */}
                <div className="bg-[#F3F4F6] mt-4 p-4 rounded-lg shadow-md flex justify-between items-center">
                    <h3 className="text-md font-semibold">Alarm breakdown: 2/2/2025, 12:00 AM</h3>
                    <div className="flex items-center space-x-2">
                        <select className="border border-[#1E3A8A] p-2 rounded-md" aria-label="Select Machine">
                            <option>Machine 1</option>
                            <option>Machine 2</option>
                            <option>Machine 3</option>
                        </select>
                        <button className="bg-[#1E3A8A] text-white px-4 py-2 rounded-md shadow hover:bg-[#264971] transition">
                            Export
                        </button>
                    </div>
                </div>

                {/* Alarm Table Section */}
                <div className="bg-[#F3F4F6] mt-4 p-4 rounded-lg shadow-md">
                    <table className="w-full border border-gray-300">
                        <thead>
                            <tr className="bg-[#1E3A8A] text-white">
                                {["Alarm Label", "Created Time", "Originator Name", "Duration", "Type", "Severity", "Status"].map((header) => (
                                    <th key={header} className="border p-3 text-left">{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(7)].map((_, i) => (
                                <tr key={i} className="bg-gray-50 text-center">
                                    {Array(7).fill("").map((_, j) => (
                                        <td key={j} className="border p-3"></td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-3 text-sm">
                        <span>
                            Items per page: 
                            <select className="border p-1 ml-1 rounded-md focus:outline-none">
                                <option>7</option>
                                <option>20</option>
                                <option>50</option>
                            </select>
                        </span>
                        <span>1-7 of 20</span>
                        <div className="flex space-x-2">
                            <button className="px-3 py-1 border rounded-md shadow hover:bg-[#1E3A8A] transition">&lt;</button>
                            <button className="px-3 py-1 border rounded-md shadow hover:bg-[#1E3A8A] transition">&gt;</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
