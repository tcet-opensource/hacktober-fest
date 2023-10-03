import HeroSection from "../components/HeroSection/HeroSection";
import FAQSection from "../components/FAQSection/FAQSection";
// import Sponsors from "./pages/SponsorSection/Sponsors.jsx";
import Explore from "../components/exploreSection/explore";
import RegisterSection from "../components/RegisterSection/index.jsx";
import MLHSection from "../components/MLHSection/MLHSection";

function Home() {
  // do not add css in this file
  return (
    <div>
      <HeroSection />
      <MLHSection />
      <Explore />
      <FAQSection />
      <RegisterSection />
    </div>
  );
}

export default Home;
