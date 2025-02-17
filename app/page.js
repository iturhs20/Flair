import Image from "next/image";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import Process from "./components/Process";
import Assets from "./components/Assets";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen ">
      <Navbar />
      <Drawer/>
      <div className="flex">
        <Process /> 
        <Assets /> 
      </div>
    </div>
  );
}
