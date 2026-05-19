import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#08090B] text-[#F3F1EA]">

      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#1A1D24_1px,transparent_1px),linear-gradient(to_bottom,#1A1D24_1px,transparent_1px)]
          bg-[size:64px_64px]
          opacity-15
        "
      />

      <div
        className="
          absolute left-1/2 top-1/3
          h-[500px] w-[500px]
          -translate-x-1/2
          rounded-full
          bg-orange-500/10
          blur-3xl
        "
      />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
    </main>
  );
}