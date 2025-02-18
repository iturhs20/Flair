'use client';
import React, { useState } from "react";
import { Database, Bell } from "lucide-react";
import Summary from "./Summary";

const Assets = () => {
  const [activeTab, setActiveTab] = useState("assets");

  return (
    <>
      {/* Desktop view */}
      <div className="absolute mt-1 right-0 lg:right-[1rem] w-[360px] bg-white rounded-lg shadow-md p-4 hidden md:block">
        {/* Tab Buttons */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("assets")}
            className={`flex-1 p-2 rounded-t-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === "assets" ? "bg-blue-900 text-white" : "bg-gray-200"
            }`}
          >
            <Database size={18} />
            Assets
          </button>
          <button
            onClick={() => setActiveTab("alerts")}
            className={`flex-1 p-2 rounded-t-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === "alerts" ? "bg-blue-900 text-white" : "bg-gray-200"
            }`}
          >
            <Bell size={18} />
            Alerts
          </button>
        </div>

        {/* Content Section */}
        <div className="border p-4 rounded-b-lg bg-gray-100 overflow-x-auto">
          {activeTab === "assets" ? (
            <table className="w-full border border-collapse text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border p-2">Connected</th>
                  <th className="border p-2">Reporting</th>
                  <th className="border p-2">Not Reported</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">5</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2 bg-red-500 text-white">1</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full border border-collapse text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border p-2">Alerts</th>
                  <th className="border p-2">Counts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">X</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Y</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Z</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">S</td>
                  <td className="border p-2">3</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <Summary />
      </div>

      {/* Mobile view */}
      <div className="block md:hidden w-full shadow-md p-4 mb-4">
        {/* Tab Buttons */}
        <div className="flex">
          <button
            onClick={() => setActiveTab("assets")}
            className={`flex-1 p-2 rounded-t-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === "assets" ? "bg-blue-900 text-white" : "bg-gray-200"
            }`}
          >
            <Database size={18} />
            Assets
          </button>
          <button
            onClick={() => setActiveTab("alerts")}
            className={`flex-1 p-2 rounded-t-lg font-semibold flex items-center justify-center gap-2 ${
              activeTab === "alerts" ? "bg-blue-900 text-white" : "bg-gray-200"
            }`}
          >
            <Bell size={18} />
            Alerts
          </button>
        </div>

        {/* Content Section */}
        <div className="border p-4 rounded-b-lg bg-gray-100 overflow-x-auto">
          {activeTab === "assets" ? (
            <table className="w-full border border-collapse text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border p-2">Connected</th>
                  <th className="border p-2">Reporting</th>
                  <th className="border p-2">Not Reported</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">5</td>
                  <td className="border p-2">4</td>
                  <td className="border p-2 bg-red-500 text-white">1</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <table className="w-full border border-collapse text-center">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="border p-2">Alerts</th>
                  <th className="border p-2">Counts</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">X</td>
                  <td className="border p-2">5</td>
                </tr>
                <tr>
                  <td className="border p-2">Y</td>
                  <td className="border p-2">10</td>
                </tr>
                <tr>
                  <td className="border p-2">Z</td>
                  <td className="border p-2">3</td>
                </tr>
                <tr>
                  <td className="border p-2">S</td>
                  <td className="border p-2">3</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
        <Summary />
      </div>
    </>
  );
};

export default Assets;
