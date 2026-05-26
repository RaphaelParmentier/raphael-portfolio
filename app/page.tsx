import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import JourneyMap from "@/components/sections/JourneyMap";
import TeachingShowcase from "@/components/sections/TeachingShowcase";
import Products from "@/components/sections/Products";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-hidden bg-[#08090B] text-[#F3F1EA]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1A1D24_1px,transparent_1px),linear-gradient(to_bottom,#1A1D24_1px,transparent_1px)] bg-[size:64px_64px] opacity-15" />

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[-12rem] top-[42rem] h-[420px] w-[420px] rounded-full bg-sky-500/5 blur-3xl" />

      <Navbar />
      <Hero />
      <JourneyMap />
      <TeachingShowcase />
      <Products />
      <CurrentlyBuilding />
      <Contact />
      <Footer />
    </main>
  );
}
