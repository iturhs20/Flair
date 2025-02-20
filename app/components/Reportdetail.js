"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

const ReportDetail = () => {
  const [selectedAsset, setSelectedAsset] = useState("Asset 1");
  const [selectedReport, setSelectedReport] = useState("Daily");
  const [selectedAggregation, setSelectedAggregation] = useState("Min,Max,Avg");
  const [selectedDataField, setSelectedDataField] = useState("Good Part");
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="w-full p-4">
      <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Asset Selection */}
          <div className="relative">
            <label className="text-sm mb-1 block">
              Asset<span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F3F4F6] rounded-lg">
              <select
                value={selectedAsset}
                onChange={(e) => setSelectedAsset(e.target.value)}
                className="w-full p-3 rounded-lg appearance-none cursor-pointer bg-[#F3F4F6] text-black focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
              >
                <option>Asset 1</option>
                <option>Asset 2</option>
                <option>Asset 3</option>
                <option>Asset 4</option>
              </select>
            </div>
          </div>

          {/* Report Type */}
          <div className="relative">
            <label className="text-sm mb-1 block">
              Report type<span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F3F4F6] rounded-lg">
              <select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                className="w-full p-3 rounded-lg appearance-none cursor-pointer bg-[#F3F4F6] text-black focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Yearly</option>
              </select>
            </div>
          </div>

          {/* Date Fields */}
          <div>
            <label className="text-sm mb-1 block">
              Start Date<span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F3F4F6] rounded-lg">
              <input
                type="date"
                defaultValue="2025-12-01"
                className="w-full p-3 rounded-lg bg-[#F3F4F6] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="text-sm mb-1 block">
              End Date<span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F3F4F6] rounded-lg">
              <input
                type="date"
                defaultValue="2025-12-01"
                className="w-full p-3 rounded-lg bg-[#F3F4F6] focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
              />
            </div>
          </div>

          {/* Aggregation */}
          <div className="relative">
            <label className="text-sm mb-1 block">
              Aggregation<span className="text-red-500">*</span>
            </label>
            <div className="bg-[#F3F4F6] rounded-lg">
              <select
                value={selectedAggregation}
                onChange={(e) => setSelectedAggregation(e.target.value)}
                className="w-full p-3 rounded-lg appearance-none cursor-pointer bg-[#F3F4F6] text-black focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
              >
                <option>Min,Max,Avg</option>
                <option>Sum</option>
              </select>
            </div>
          </div>

          {/* Data Fields with Search Button */}
          <div className="relative flex gap-2">
            <div className="flex-1">
              <label className="text-sm mb-1 block">
                Data Fields<span className="text-red-500">*</span>
              </label>
              <div className="bg-[#F3F4F6] rounded-lg">
                <select
                  value={selectedDataField}
                  onChange={(e) => setSelectedDataField(e.target.value)}
                  className="w-full p-3 rounded-lg appearance-none cursor-pointer bg-[#F3F4F6] text-black focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
                >
                  <option>Good Part</option>
                  <option>Reject Part</option>
                  <option>Good Shot</option>
                  <option>Bad shot</option>
                </select>
              </div>
            </div>
            <button
              onClick={() => setShowReport(true)}
              className="mt-7 bg-[#1E3A8A] text-white px-3 py-2 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Report Section */}
        {showReport && (
          <div className="mt-8 bg-[#F3F4F6] rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[#1E3A8A]">
                Report Results
              </h2>
              <button className="px-4 py-2 border border-black bg-[#1E3A8A] text-white rounded-lg transition-colors">
                Download Report
              </button>
            </div>
            <div className="min-h-[300px] flex items-center justify-center text-gray-500">
              Report content will be displayed here
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportDetail;
