import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full bg-white">
      {/* 1. Fixed Hero in the background */}
      <Hero />

      {/* 2. Scrollable container on top of Hero (z-10) */}
      <div className="relative z-10 w-full pointer-events-none">
        {/* Spacer to show Hero initially, leaving space for the 88px navbar at the bottom */}
        <div className="min-h-screen h-[calc(100svh-70px)] md:h-[calc(100svh-88px)] md:min-h-[calc(100svh-88px)] w-full pointer-events-none" />

        <div className="pointer-events-auto w-full">
          {/* Sticky Navbar */}
          <Navbar />

          {/* Page Sections */}
          <About />
          <TechStack />
          <Projects />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
