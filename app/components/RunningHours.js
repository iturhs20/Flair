'use client'
import React from "react";

const RunningHours = () => {
  return (
    <div className="mt-52 mx-auto w-[360px] bg-white rounded-lg shadow-md p-8">
      <table className="w-full border border-collapse text-center">
        <tbody>
          <tr className="bg-blue-900 text-white font-semibold">
            <td className="border p-2">Running hour</td>
            <td className="border p-2">1:15</td>
          </tr>
          <tr className="bg-blue-900 text-white font-semibold">
            <td className="border p-2">Machine On hour</td>
            <td className="border p-2">3 hrs</td>
          </tr>
          <tr className="bg-blue-900 text-white font-semibold">
            <td className="border p-2">Machine Off hour</td>
            <td className="border p-2">2 hrs</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RunningHours;
