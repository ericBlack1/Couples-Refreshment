import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Events from './components/Events/Events'
import EventInfo from "./components/EventInfo/EventInfo";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from './components/Contact/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  })
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Services />
            <Events />
          </>} />
          <Route path="/event-info" element={<EventInfo />} />
          <Route path='/about-us' element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
        <Testimonials />
        <Footer />
      </div>
    </Router>
  )
}

export default App
