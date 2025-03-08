import { useState } from "react";
import BackgroundImage from "../../assets/wall1.jpg";
import Image1 from "../../assets/hotel1.jpg";
import Image2 from "../../assets/hotel2.jpg";
import Image3 from "../../assets/restau2.jpeg";
import Image4 from "../../assets/restau3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const EventInfo = () => {
  const [, setSelectedPackage] = useState(null);
  const [addOns, setAddOns] = useState([]);

  const packages = [
    {
      name: "Have a Nice Time Out",
      details: [
        "A beautifully curated romantic dinner for two.",
        "Live music and serenades.",
        "Fun couple games and activities.",
        "Personalized love notes and surprise gift.",
      ],
      price: "X,XXX FCFA",
    },
    {
      name: "Have a Nice Time Out + Marriage Chancellor",
      details: [
        "Everything in Package 1, plus:",
        "A private session with a Marriage Chancellor for relationship guidance.",
        "Personalized couple reflection session.",
      ],
      price: "X,XXX FCFA",
    },
    {
      name: "The Ultimate Romantic Getaway",
      details: [
        "Everything in Package 1 & 2, plus:",
        "Hotel reservations for a luxurious night’s stay.",
        "Breakfast in bed experience.",
        "Custom romantic room décor.",
      ],
      price: "X,XXX FCFA",
    },
  ];

  const addOnOptions = [
    "Couple Photoshoot",
    "Personalized Song Dedication",
    "Custom Gift Box",
    "Flower Bouquet & Love Letter",
    "Wine or Champagne Pairing",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Wait for 30s before switching images
    cssEase: "linear",
    pauseOnHover: false,
  };

  const images = [Image1, Image2, Image3, Image4, BackgroundImage];

  return (
    <>
      {/* Scrolling Background */}
      <div className="relative h-screen w-full overflow-hidden">
        <Slider {...sliderSettings} className="absolute inset-0 w-full h-full">
          {images.map((img, index) => (
            <div key={index} className="w-full h-screen">
              <div
                className="w-full h-full bg-center bg-cover"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </div>
          ))}
        </Slider>

        {/* Overlay & Text Content */}
        <div className="absolute inset-0 bg-black/40 flex justify-center items-center text-white text-center">
          <div className="px-4 sm:px-8 lg:px-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 font-serif">
              Our First Smile
            </h1>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-12 font-cursive">
              A Celebration of Love
            </p>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div className="max-w-4xl mx-auto p-6 ">
        <h1 className="text-4xl font-bold font-cursive text-gray-900 text-center my-[70px]">
          Choose Your Love Experience
        </h1>
        <div className="space-y-6 mt-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-xl hover:bg-red-700 hover:text-white hover:scale-105 duration-200"
            >
              <h3 className="text-2xl font-semibold">{pkg.name}</h3>
              <ul className="list-disc pl-5 mt-2">
                {pkg.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <p className="mt-3 font-bold">Price: {pkg.price}</p>
              <button
                className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-black hover:scale-105 duration-200"
                onClick={() => setSelectedPackage(pkg.name)}
              >
                Select This Package
              </button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <h2 className="text-2xl font-semibold mt-12 text-center">
          Customize Your Evening - Request Extras
        </h2>
        <div className="mt-4">
          {addOnOptions.map((addOn, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 text-xl mt-1"
            >
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setAddOns([...addOns, addOn]);
                  } else {
                    setAddOns(addOns.filter((item) => item !== addOn));
                  }
                }}
              />
              <label>{addOn}</label>
            </div>
          ))}
        </div>

        {/* Reservation Form */}
        <h2 className="text-2xl font-semibold mt-12 text-center">
          Reserve Your Spot
        </h2>
        <form className="mt-4 space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input
            className="w-full p-2 border rounded"
            placeholder="Contact Information"
          />
          <input
            className="w-full p-2 border rounded"
            placeholder="Special Requests"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 duration-200">
            Submit
          </button>
        </form>

        {/* FAQs Section */}
        <h2 className="text-2xl font-semibold mt-8">
          Frequently Asked Questions
        </h2>
        <div className="mt-4">
          <p>
            <strong>Where is the event taking place?</strong> The event is held
            at our exclusive venue located in the heart of the city.
          </p>
          <p>
            <strong>How much does it cost?</strong> Prices vary depending on the
            selected package and add-ons.
          </p>
        </div>
      </div>
    </>
  );
};

export default EventInfo;
