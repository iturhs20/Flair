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
        className={`flex ${
          isMobile
            ? "flex-col items-center gap-4"
            : "flex-row items-center justify-center gap-2"
        } p-3 bg-white rounded-lg shadow-md`}
      >
        {processSteps.map((step, index) => (
          <div
            key={step.id}
            className={`flex ${
              isMobile ? "flex-col items-center" : "items-center"
            }`}
          >
            {/* Step Box */}
            <div
              className={`bg-[#F3F4F6] ${
                isMobile ? "w-44 h-24 p-3" : "w-36 h-28 p-3"
              } rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
              onClick={() => setSelectedMachine(step)}
            >
              <div className="flex items-center gap-2">
                <span className="bg-blue-900 text-white w-7 h-7 flex items-center justify-center rounded-full text-sm font-bold">
                  {step.id}
                </span>
                <span
                  className={`w-3 h-3 rounded-full ${
                    step.status === "green" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </div>
              <p className="text-center font-semibold mt-1">{step.title}</p>
              <p className="text-xs text-gray-500">Current Rate: {step.rate}</p>
            </div>

            {/* Arrow between steps */}
            {index !== processSteps.length - 1 && (
              <div className={`${isMobile ? "mt-2" : "mx-2"}`}>
                {isMobile ? (
                  <ArrowDown size={24} className="text-gray-400" />
                ) : (
                  <ArrowRight size={20} className="text-gray-400" />
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
