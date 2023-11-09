import { useState, useEffect } from "react";
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
import { FaArrowUp } from "react-icons/fa";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScrollToTop && window.pageYOffset > 400) {
        setShowScrollToTop(true);
      } else if (showScrollToTop && window.pageYOffset <= 400) {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScrollToTop]);

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

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-50 p-2 bg-oe-blue text-white rounded-full shadow-lg cursor-pointer hover:bg-oe-orange transition duration-300"
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default App;
