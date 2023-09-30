import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Partners from "./pages/Partners";

function App() {
  // do not add css in this file
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partners" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
