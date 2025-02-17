"use client";
import React, { useState } from "react";
import { Home, FileText, Bell, Search } from "lucide-react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "reports", label: "Report", icon: FileText },
    { id: "alarms", label: "Alarms", icon: Bell },
    { id: "search", label: "Search", icon: Search },
  ];

  return (
    <div className="w-full px-2">
      {/* Navbar Container */}
      <div className="navbar bg-white max-w-[95%] mx-auto rounded-xl shadow-lg p-3 flex flex-wrap items-center justify-between">
        
        {/* Left Side: Title and Last Updated */}
        <div className="flex-1">
          <div className="flex flex-col ml-3 sm:ml-5">
            <a className="text-lg sm:text-xl font-bold block">
              Flair Bottle Manufacturing
            </a>
            <span className="text-xs sm:text-sm text-gray-600 block">
              Last Updated on: 13-Feb-2025 04:12:40 PM
            </span>
          </div>
        </div>

        {/* Navigation Menu (Responsive) */}
        <div className="bg-gray-200 px-2 py-1 rounded-full flex overflow-x-auto">
          <ul className="flex gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-all ${
                    activeTab === item.id
                      ? "bg-blue-900 text-white font-bold"
                      : "text-black"
                  }`}
                  style={{
                    textDecoration: "none",
                    outline: "none",
                  }}
                >
                  <item.icon
                    size={18}
                    className={activeTab === item.id ? "text-white" : "text-black"}
                  />
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
