"use client";
import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Home, FileText, Bell, Search, LogOut, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Import for animations

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const checkIfMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [isMenuOpen]);

  const navItems = [
    { id: "home", label: "Home", icon: Home, route: "/" },
    { id: "reports", label: "Report", icon: FileText, route: "/reports" },
    { id: "alarms", label: "Alarms", icon: Bell, route: "/alarms" },
    { id: "search", label: "Search", icon: Search, route: "/search" },
    { id: "logout", label: "Logout", icon: LogOut, route: "/logout" },
  ];

  useEffect(() => {
    const currentTab = navItems.find((item) => item.route === pathname)?.id || "home";
    setActiveTab(currentTab);
  }, [pathname]);

  return (
    <div className="w-full px-4 py-3">
      <div className="bg-white max-w mx-auto rounded-xl shadow-lg">
        <div className="flex items-center justify-between p-3 md:p-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {isMobile && (
                <button
                  className="p-1 rounded-lg hover:bg-gray-200 transition duration-200 ease-out"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                  {isMenuOpen ? <X size={24} className="text-blue-900" /> : <Menu size={24} className="text-blue-900" />}
                </button>
              )}
              <div className="flex flex-col">
                <a className="text-lg md:text-xl font-bold text-blue-900">Flair Bottle Manufacturing</a>
                <span className="text-xs md:text-sm text-gray-600 hidden sm:block">
                  Last Updated on: 13-Feb-2025 04:12:40 PM
                </span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="bg-[#F3F4F6] px-2 py-1 rounded-full">
              <ul className="flex gap-1">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.id} className="min-w-[100px] text-center">
                    <motion.a
                      onClick={() => {
                        if (item.id === "search") {
                          setIsSearchOpen(true); // Open search modal
                        } else {
                          router.push(item.route);
                        }
                      }}
                      className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ease-in-out cursor-pointer ${
                        activeTab === item.id ? "bg-blue-900 text-white font-bold" : "text-black hover:bg-gray-300"
                      }`}
                      initial={{ opacity: 0.5, scale: 0.95 }}
                      animate={{ opacity: 1, scale: activeTab === item.id ? 1.05 : 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <item.icon size={18} color={activeTab === item.id ? "white" : "black"} />
                      <span>{item.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Search Modal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                exit={{ y: -50 }}
                className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-blue-900">Search</h2>
                  <button onClick={() => setIsSearchOpen(false)} className="p-2 rounded-full hover:bg-gray-200">
                    <X size={24} className="text-blue-900" />
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ul className="mt-4 space-y-2">
                  <li className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">Recent Search 1</li>
                  <li className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">Recent Search 2</li>
                  <li className="p-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200">Recent Search 3</li>
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Navbar;
