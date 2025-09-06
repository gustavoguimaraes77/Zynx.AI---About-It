import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import CEOSection from "@/components/sections/CEOSection";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <CEOSection />
      <Contact />
    </main>
  );
};

export default Index;
