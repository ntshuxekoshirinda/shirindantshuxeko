import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Footer from "@/components/Footer";
import Contact from '@/components/Contact';
import ProjectsSection from "@/components/ProjectsSection";
import AppsSection from "@/components/AppsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Hero />
        <TechMarquee />
        <ProjectsSection/>
        <Contact/>
        <AppsSection />
      </main>
      <Footer />
    </div>
  );
}