import Navbar from "./components/Navbar/Navbar";
import FAQSection from "./components/FAQSection/FAQSection";
import SponsorSection from "./components/SponsorSection/SponsorSection";
import Explore from "./components/exploreSection/explore";
import Footer from "./components/Footer/Footer";

function App() {
  // do not add css in this file
  return (
    <div className="">
      <Navbar />
      <Explore />
      <SponsorSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;
