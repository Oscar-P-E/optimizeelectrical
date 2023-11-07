import { useState } from "react";
import { Header } from "./components/Header";
import { SideMenu } from "./components/SideMenu";
import { Hero } from "./components/Hero";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Content */}
      <div className="flex flex-col min-h-screen">
        <Header setIsOpen={setIsOpen} />

        {/* Hero image/video with CTA */}
        <Hero />
      </div>
    </div>
  );
};

export default App;
