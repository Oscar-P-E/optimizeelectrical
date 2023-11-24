import { useState } from "react";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { ServicesList } from "./components/ServicesList";
import { ServiceAreas } from "./components/ServiceAreas";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useTawkTo } from "./hooks/useTawkTo";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useTawkTo();

  return (
    <div>
      <SideMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

      <div className="flex flex-col min-h-screen">
        <Header setIsOpen={setIsOpen} />
        <Hero scrollToContact={() => scrollToSection("contact")} />
      </div>

      <About />
      <Services />
      <ServicesList />
      <ServiceAreas />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
