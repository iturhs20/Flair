'use client'
import React from "react";

const RunningHours = () => {
  return (
    <>
      {/* Desktop view */}
      <div className="hidden md:block">
        <div className="mt-36 ml-56 mx-auto w-[360px] bg-white rounded-lg shadow-md p-8 min-h-[210px]">
          <table className="w-full border border-collapse text-center">
            <tbody>
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Total Production</td>
                <td className="border p-2">11156</td>
              </tr>
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Average Utilization Percentage</td>
                <td className="border p-2">90%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mt-6 ml-56 mx-auto w-[360px] bg-white rounded-lg shadow-md p-8">
          <table className="w-full border border-collapse text-center">
            <tbody>
              
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Machine On hour</td>
                <td className="border p-2">10 hrs</td>
              </tr>
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Machine Running hour</td>
                <td className="border p-2">8 hrs</td>
              </tr>
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Machine Idle hour</td>
                <td className="border p-2">2 hrs</td>
              </tr>
              <tr className="bg-blue-900 text-white font-semibold">
                <td className="border p-2">Machine Off hour</td>
                <td className="border p-2">2 hrs</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-4 px-4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Running Hours</h3>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Running hour</span>
              <span className="text-gray-600">1:15</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Machine On hour</span>
              <span className="text-gray-600">3 hrs</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Machine Off hour</span>
              <span className="text-gray-600">2 hrs</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RunningHours;
