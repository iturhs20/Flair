'use client'
import React, { useState, useEffect } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import MachinePopup from "./Machinepopup";

const processSteps = [
  { id: 1, title: "Pipe Making", rate: "85 units/hr", status: "green" },
  { id: 2, title: "Pipe Cutting", rate: "85 units/hr", status: "green" },
  { id: 3, title: "Water Bulging", rate: "85 units/hr", status: "green" },
  { id: 4, title: "Neck Forming", rate: "85 units/hr", status: "red" },
  { id: 5, title: "Bottom Welding", rate: "85 units/hr", status: "green" },
];

function Process() {
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  return (
    <div
      className={`${
        isMobile
          ? "relative w-full mx-auto my-6 px-4"
          : "absolute mt-1 left-[14rem] w-[60%]"
      } rounded-xl`}
    >
      {/* Process Flow Section */}
      <div
        className={`flex ${isMobile ? "flex-col items-center gap-2" : "flex-row items-center justify-center gap-2"} p-3 bg-white rounded-lg shadow-md`}
      >
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex ${isMobile ? "flex-col items-center" : "items-center"}`}
          >
            {/* Step Box with colored border */}
            <div
              className={`${
                step.status === "green" ? "border-green-500" : "border-red-500"
              } bg-[#F3F4F6] ${
                isMobile ? "w-40 h-20 p-2" : "w-32 h-24 p-2"
              } rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border-4`}
              onClick={() => setSelectedMachine(step)}
            >
              <div className="flex items-center gap-1">
                <span className="bg-blue-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  {step.id}
                </span>
              </div>
              <p className="text-center font-semibold text-[12px] mt-1 text-black">{step.title}</p>
              <p className="text-xs text-gray-500">Current Rate: {step.rate}</p>
            </div>

            {/* Arrow between steps */}
            {index !== processSteps.length - 1 && (
              <div className={`${isMobile ? "mt-1" : "mx-2"}`}>
                {isMobile ? (
                  <ArrowDown size={20} className="text-gray-400" />
                ) : (
                  <ArrowRight size={16} className="text-gray-400" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Show MachinePopup if a machine is selected */}
      {selectedMachine && (
        <MachinePopup
          machine={selectedMachine}
          onClose={() => setSelectedMachine(null)}
        />
      )}
    </div>
  );
}

export default Process;
