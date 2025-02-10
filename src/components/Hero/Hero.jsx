import React from "react";
import HeroPng from "../../assets/coffee2.png";
import BackgroundImage from "../../assets/wall1.jpg";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center text-white"
      style={{ backgroundImage: `url(${BackgroundImage})` }} // Set the background image
    >
      <div className="text-center px-4 sm:px-8 lg:px-16">
        {/* Title */}
        <h1 data-aos="fade-down" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 font-serif">
          Couple Refreshment
        </h1>

        {/* Slogan */}
        <p data-aos="zoom-out" data-aos-delay="400" className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-12 font-cursive">
          Reignite Love, Reconnect, and Create Lasting Memories.
        </p>

        {/* Description */}
        <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200" className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mt-8 font-corben"
        style={{textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)"}}
        >
          "An intimate experience designed for couples to
          reconnect, have fun, and celebrate love in a distraction-free
          environment. It provides a space where partners can deepen their bond,
          rediscover each other, and create beautiful new memories."
        </p>
      </div>
    </div>
  );
};

export default Hero;

