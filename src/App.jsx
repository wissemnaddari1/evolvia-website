import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Involved from "./pages/Involved";
import Contact from "./pages/Contact";
import VolunteerForm from "./pages/VolunteerForm";
import NewsletterSignup from "./pages/NewsletterSignup";
import DonationForm from "./pages/DonationForm";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/involved" element={<Involved />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
        <Route path="/newsletter" element={<NewsletterSignup />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;