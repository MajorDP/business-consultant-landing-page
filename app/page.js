import Hero from "./_components/pages/Hero";
import About from "./_components/pages/About";
import Sectors from "./_components/pages/Sectors";
import Services from "./_components/pages/Services";
import Process from "./_components/pages/Process";
import Testimonials from "./_components/pages/Testimonials";
import Contact from "./_components/pages/Contact";

export default function Home() {
  return (
    <main className="bg-bg-primary text-text-primary mt-12">
      <Hero />
      <About />
      <Sectors />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
