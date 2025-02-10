import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'
import Events from './components/Events/Events'

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
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Events />
    </div>
  )
}

export default App
