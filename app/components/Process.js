import React from "react";
import { ArrowRight } from "lucide-react";

const processSteps = [
  { id: 1, title: "Pipe Making", rate: "85 units/hr", status: "green" },
  { id: 2, title: "Pipe Cutting", rate: "85 units/hr", status: "green" },
  { id: 3, title: "Water Bulging", rate: "85 units/hr", status: "green" },
  { id: 4, title: "Neck Forming", rate: "85 units/hr", status: "red" },
  { id: 5, title: "Bottom Welding", rate: "85 units/hr", status: "green" },
];

function Process() {
  return (
    <div className="absolute mt-1 left-[14rem] w-[60%] rounded-xl">
      {/* Process Flow Section */}
      <div className="flex items-center justify-center gap-2 p-3 bg-white rounded-lg shadow-md">
        {processSteps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step Box */}
            <div className="bg-[#F3F4F6] w-36 h-28 p-3 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center gap-1">
                <span className="bg-blue-900 text-white w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold">
                  {step.id}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    step.status === "green" ? "bg-green-500" : "bg-red-500"
                  }`}
                ></span>
              </div>
              <p className="text-center font-semibold mt-1">{step.title}</p>
              <p className="text-xs text-gray-500">Current Rate: {step.rate}</p>
            </div>
            {/* Arrow between steps */}
            {index !== processSteps.length - 1 && (
              <ArrowRight size={20} className="text-gray-400 mx-1" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
