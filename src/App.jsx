import React, {useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'

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
    </div>
  )
}

export default App
