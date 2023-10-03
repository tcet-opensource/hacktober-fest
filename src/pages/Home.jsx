import HeroSection from "../components/HeroSection/HeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
// import Sponsors from "./pages/SponsorSection/Sponsors.jsx";
import Explore from "../components/exploreSection/explore";
import RegisterSection from "../components/RegisterSection/index.jsx";

function Home() {
  // do not add css in this file
  return (
    <div>
      <HeroSection />
      <Explore />
      <RegisterSection />
      <FAQSection />
    </div>
  );
}

export default Home;
