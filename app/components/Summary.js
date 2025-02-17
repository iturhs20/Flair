'use client'
import React from "react";
import { FileText } from "lucide-react"; // Importing icon

const Summary = () => {
  return (
    <div className="mt-10 mb-10 w-[330px] p-0">
      {/* Summary Header */}
      <div className="bg-blue-900 text-white text-center p-2 rounded-t-lg font-semibold flex items-center justify-center gap-2">
        <FileText size={18} /> Summary
      </div>

      {/* Summary Table */}
      <table className="w-full border border-collapse text-center bg-[#F3F4F6]">
        <tbody>
          <tr>
            <td className="border p-2 font-semibold">Machine On Average</td>
            <td className="border p-2">7%</td>
          </tr>
          <tr>
            <td className="border p-2 font-semibold">Machine Off Average</td>
            <td className="border p-2">5%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
