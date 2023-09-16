import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import FAQSection from "./components/FAQSection/FAQSection";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import Explore from "./components/exploreSection/explore";
import Footer from "./components/Footer/Footer";
import React from "react";

function App() {
  // do not add css in this file
  return (
      <div>
      <Navbar />
      <HeroSection />
      <Explore />
      <SponsorSection />
      <FAQSection />
      <Footer />
      </div>
  )
}

export default App;
