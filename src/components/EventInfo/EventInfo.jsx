import { useState } from "react";
import BackgroundImage from "../../assets/wall1.jpg";

const EventInfo = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [addOns, setAddOns] = useState([]);

  const packages = [
    {
      name: "Have a Nice Time Out",
      details: [
        "A beautifully curated romantic dinner for two.",
        "Live music and serenades.",
        "Fun couple games and activities.",
        "Personalized love notes and surprise gift."
      ],
      price: "X,XXX FCFA",
    },
    {
      name: "Have a Nice Time Out + Marriage Chancellor",
      details: [
        "Everything in Package 1, plus:",
        "A private session with a Marriage Chancellor for relationship guidance.",
        "Personalized couple reflection session."
      ],
      price: "X,XXX FCFA",
    },
    {
      name: "The Ultimate Romantic Getaway",
      details: [
        "Everything in Package 1 & 2, plus:",
        "Hotel reservations for a luxurious night’s stay.",
        "Breakfast in bed experience.",
        "Custom romantic room décor."
      ],
      price: "X,XXX FCFA",
    }
  ];

  const addOnOptions = [
    "Couple Photoshoot",
    "Personalized Song Dedication",
    "Custom Gift Box",
    "Flower Bouquet & Love Letter",
    "Wine or Champagne Pairing",
  ];

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${BackgroundImage})` }} // Set the background image
      >
        <div className="text-center px-4 sm:px-8 lg:px-16">
      
          <h1 data-aos="fade-down" data-aos-once="true" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 font-serif">
            Our First Smile
          </h1>
      
          <p data-aos="zoom-out" data-aos-delay="400" className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-12 font-cursive">
            A Celebration of Love
          </p>
      
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="200" className="text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mt-8 font-corben"
            style={{textShadow: "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)"}}
          >
            Rediscover your first moments, deepen your bond and create unforgettable memories.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-6 mt-2">
        <h1 className="text-4xl font-bold font-cursive text-gray-900 text-center">Choose Your Love Experience</h1>
        <div className="space-y-6 mt-4">
          {packages.map((pkg, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-xl hover:bg-red-700 hover:text-white hover:scale-105 duration-200">
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
        
        <h2 className="text-2xl font-semibold mt-12 text-center">Customize Your Evening - Request Extras</h2>
        <div className="mt-4">
          {addOnOptions.map((addOn, index) => (
            <div key={index} className="flex items-center space-x-3 text-xl mt-1">
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.target.checked) {
                    setAddOns([...addOns, addOn]);
                  } else {
                    setAddOns(addOns.filter(item => item !== addOn));
                  }
                }}
              />
              <label>{addOn}</label>
            </div>
          ))}
        </div>
        
        <h2 className="text-2xl font-semibold mt-12 text-center">Reserve Your Spot</h2>
        <form className="mt-4 space-y-4">
          <input className="w-full p-2 border rounded" placeholder="Name" />
          <input className="w-full p-2 border rounded" placeholder="Contact Information" />
          <input className="w-full p-2 border rounded" placeholder="Special Requests" />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 hover:scale-105 duration-200">Submit</button>
        </form>
        
      </div>
    </>
  );
};

export default EventInfo;
