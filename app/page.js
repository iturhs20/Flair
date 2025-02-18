import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Process from "./components/Process";
import Assets from "./components/Assets";
import RunningHours from "./components/RunningHours";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <Navbar />
      <Drawer />
      {/* Flex container for Process, RunningHours, and Assets */}
      <div className="flex flex-col md:flex-row">
        <Process />

        {/* RunningHours component */}
        <div className="md:w-[360px] w-full">
          <RunningHours />
        </div>

        {/* Assets component, appearing below RunningHours in mobile view */}
        <div className="md:w-[360px] w-full mt-8 md:mt-0">
          <Assets />
        </div>
      </div>
    </div>
  );
}
