import { useState } from "react";

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
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <h1 className="text-4xl font-bold text-center font-serif">Our First Smile – A Celebration of Love</h1>
      <p className="text-center text-2xl mt-3 font-serif">Rediscover your first moments, deepen your bond, and create unforgettable memories.</p>
      
      <h2 className="text-2xl font-semibold mt-8 text-center">Choose Your Love Experience</h2>
      <div className="space-y-6 mt-4">
        {packages.map((pkg, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-xl hover:bg-red-700 hover:text-white hover:scale-105 duration-200">
            <h3 className="text-xl font-semibold">{pkg.name}</h3>
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
      
      <h2 className="text-2xl font-semibold mt-8">What Couples Say</h2>
      <div className="mt-4 space-y-4">
        <blockquote className="italic border-l-4 pl-3">"An unforgettable experience that brought us closer than ever. Highly recommend!" - Emma & John</blockquote>
        <blockquote className="italic border-l-4 pl-3">"The perfect way to relive our first date. Thank you for such a magical evening." - Sarah & Michael</blockquote>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8">Frequently Asked Questions</h2>
      <div className="mt-4">
        <p><strong>Where is the event taking place?</strong> The event is held at our exclusive venue located in the heart of the city.</p>
        <p><strong>How much does it cost?</strong> Prices vary depending on the selected package and add-ons.</p>
      </div>
    </div>
  );
};

export default EventInfo;
