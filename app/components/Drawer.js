"use client";
import React, { useState, useEffect } from "react";
import { Home, LogOut, Menu, X } from "lucide-react";

function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Ensures menu is closed when resizing to desktop
      }
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "logout", label: "Logout", icon: LogOut },
  ];

  return (
    <>
      {/* Desktop Sidebar (Unchanged) */}
      <div className="hidden md:flex flex-col w-48 bg-white shadow-lg rounded-xl p-4 ml-4 mt-1 overflow-hidden mb-4 h-screen fixed">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-8 mt-10">
          <img
            src="/logo.png"
            alt="Flair Bottle Manufacturing Logo"
            className="w-20 sm:w-24 h-auto object-contain"
          />
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 flex flex-col w-full mt-20">
          <ul className="flex flex-col gap-3 bg-[#F3F4F6] px-2 py-1 rounded-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-3 px-3 py-2 w-full rounded-lg transition-all ${
                    activeTab === item.id ? "bg-blue-900 text-white font-bold" : "text-black hover:bg-gray-300"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
