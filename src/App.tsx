import React from "react";
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

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <SideMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        scrollToSection={scrollToSection}
      />

      {/* Content */}
      <div className="flex flex-col min-h-screen">
        <Header setIsOpen={setIsOpen} />

        {/* Hero image/video with CTA */}
        <Hero scrollToContact={() => scrollToSection("contact")} />
      </div>

      {/* About text and image slideshow */}
      <About />

      {/* Residential Electrician, Commercial Electrician, Electrical Upgrades 3 cards */}
      <Services />

      {/* List of Services */}
      <ServicesList />

      {/* Areas we service */}
      <ServiceAreas />

      {/* What our customers are saying */}
      <Testimonials />

      {/* Contact Form and info */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
