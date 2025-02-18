"use client";
import React, { useState, useEffect } from "react";
import { Home, FileText, Bell, Search, LogOut, Menu, X } from "lucide-react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      
      // Ensure menu closes when switching to desktop
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "reports", label: "Report", icon: FileText },
    { id: "alarms", label: "Alarms", icon: Bell },
    { id: "search", label: "Search", icon: Search },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  return (
    <div className="w-full px-4 py-3">
      {/* Main Navbar Container */}
      <div className="bg-white max-w mx-auto rounded-xl shadow-lg">
        
        {/* Desktop and Mobile Header */}
        <div className="flex items-center justify-between p-3 md:p-4">
          {/* Left Side: Logo, Title and Last Updated */}
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {isMobile && (
                <button 
                  className="p-1 rounded-lg hover:bg-gray-200 transition-colors duration-200 ease-out"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? (
                    <X size={24} className="text-blue-900" />
                  ) : (
                    <Menu size={24} className="text-blue-900" />
                  )}
                </button>
              )}
              <div className="flex flex-col">
                <a className="text-lg md:text-xl font-bold line-clamp-1 text-blue-900">
                  Flair Bottle Manufacturing
                </a>
                <span className="text-xs md:text-sm text-gray-600 hidden sm:block">
                  Last Updated on: 13-Feb-2025 04:12:40 PM
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
            <div className="bg-[#F3F4F6] px-2 py-1 rounded-full">
              <ul className="flex gap-1">
                {navItems.slice(0, 4).map((item) => (
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

          {/* Logout Button for Desktop */}
          {/* <div className="block md:hidden ml-4">
            <button
              onClick={() => setActiveTab("logout")}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-100 hover:bg-red-200 text-red-800 transition-colors duration-200 ease-out"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div> */}
        </div>

        {/* Mobile Navigation Menu - Slide In from Left */}
        {isMobile && (
          <>
            {/* Mobile Menu Overlay */}
            <div 
              className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out z-40 ${
                isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
              }`}
              onClick={() => setIsMenuOpen(false)}
            ></div>
            
            {/* Mobile Menu Panel */}
            <div 
              className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out transform ${
                isMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } flex flex-col overflow-y-auto`}
            >
              {/* Mobile Menu Header */}
              <div className="p-5 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-900">Menu</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-200"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-blue-900" />
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-600">
                  Last Updated on: 13-Feb-2025 04:12:40 PM
                </div>
              </div>
              
              {/* Mobile Menu Items */}
              <div className="flex-1 py-4 px-2">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ease-out ${
                          activeTab === item.id
                            ? "bg-blue-900 text-white font-bold"
                            : "text-black hover:bg-gray-200"
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
              
              {/* Mobile Menu Footer */}
              <div className="border-t border-gray-200 p-4">
                <span className="text-sm text-gray-500">© 2025 Flair Bottle Manufacturing</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
