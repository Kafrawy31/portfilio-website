"use client";
import Hero from "@/Components/Hero";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/Components/Grid";
import RecentProjects from "@/Components/RecentProjects";
import { navItems } from "@/data";
import SoftSkills from "@/Components/SoftSkills";
import Education from "@/Components/Education";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <SoftSkills />
        <Education />
      </div>
    </main>
  );
}
