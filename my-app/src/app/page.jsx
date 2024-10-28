"use client";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";
export default function Home() {
  return (
    <div className="top-0 overflow-x-hidden">
      <Navbar />
      <div className="mid flex flex-col lg:flex-row w-full border max-h-[100%]">
        <div className="left w-[100%] lg:w-[15%]">
          <Sidenav/>
        </div>
        <div className="right flex flex-col gap-4 p-2 lg:pl-8 w-[100%]">
          <h1 className="p-4 text-[30px] font-bold">Skill Test</h1>
          <Analytics/>
        </div>
      </div>
    </div>
  );
}
