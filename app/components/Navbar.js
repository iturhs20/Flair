"use client";
import React, { useState, useEffect } from "react";
import { Home, FileText, Bell, Search, Menu, X } from "lucide-react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "reports", label: "Report", icon: FileText },
    { id: "alarms", label: "Alarms", icon: Bell },
    { id: "search", label: "Search", icon: Search },
  ];

  return (
    <div className="w-full px-4 py-3">
      {/* Navbar Container */}
      <div className="bg-white max-w-[1200px] mx-auto rounded-xl shadow-lg">
        
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between p-3 md:p-4">
          {/* Left Side: Title and Last Updated */}
          <div className="flex-1">
            <div className="flex flex-col">
              <a className="text-lg md:text-xl font-bold line-clamp-1 text-blue-900">
                Flair Bottle Manufacturing
              </a>
              <span className="text-xs md:text-sm text-gray-600 hidden sm:block">
                Last Updated on: 13-Feb-2025 04:12:40 PM
              </span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="bg-gray-200 px-2 py-1 rounded-full">
              <ul className="flex gap-1">
                {navItems.map((item) => (
                  <li key={item.id} className="min-w-[100px] text-center">
                    <a
                      onClick={() => setActiveTab(item.id)}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 ease-out ${
                        activeTab === item.id
                          ? "bg-blue-900 text-white font-bold"
                          : "text-black hover:bg-gray-300"
                      }`}
                      style={{
                        textDecoration: "none",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      <item.icon
                        size={18}
                        className="transition-colors duration-200 ease-out"
                        color={activeTab === item.id ? "white" : "black"}
                      />
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-out"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-blue-900" />
            ) : (
              <Menu size={24} className="text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className="md:hidden px-3 pb-3 overflow-hidden transition-all duration-300 ease-out"
          style={{ 
            maxHeight: isMenuOpen ? '500px' : '0',
            opacity: isMenuOpen ? 1 : 0,
            visibility: isMenuOpen ? 'visible' : 'hidden',
            transitionProperty: 'max-height, opacity, visibility',
            transitionDelay: isMenuOpen ? '0s, 0s, 0s' : '0s, 0.2s, 0.3s'
          }}
        >
          <div className="bg-gray-200 rounded-xl overflow-hidden">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 transition-colors duration-200 ease-out ${
                      activeTab === item.id
                        ? "bg-blue-900 text-white font-bold"
                        : "text-black hover:bg-gray-300"
                    }`}
                    style={{
                      textDecoration: "none",
                      outline: "none",
                      cursor: "pointer",
                    }}
                  >
                    <item.icon
                      size={20}
                      className="transition-colors duration-200 ease-out"
                      color={activeTab === item.id ? "white" : "black"}
                    />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <span className="text-xs text-gray-600 block mt-3 pl-1">
            Last Updated on: 13-Feb-2025 04:12:40 PM
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;