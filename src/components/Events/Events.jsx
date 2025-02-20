import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import BannerImg from "../../assets/logo.png";
import { FaAnchor, FaLaugh, FaJenkins } from "react-icons/fa";
import BgImg from "../../assets/website/event.jpg";
import AOS from "aos";

const bgImage = {
  backgroundImage: `url(${BgImg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Events = () => {
  return (
    <>
      <span id="events"></span>
      <div style={bgImage}>
        <div className="flex justify-center items-center py-12 sm:py-0">
          <div className="container">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold font-cursive text-red-700">
              Upcoming Events
            </h1>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  className="text-4xl text-center sm:text-4xl font-bold font-cursive"
                >
                  Our First Smile
                </h1>
                <p
                  className="text-xl text-center text-gray-900 tracking-wide leading-5 font-corben"
                >
                  A unique experience that celebrates the joy and beauty 
                  of love, helping couples reminisce about thier first
                  special moments together
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5 ml-3">
                    <div className="flex items-center gap-3">
                      <FaJenkins className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200 " />
                      <span>Premium Services</span>
                    </div>
                    <div
                      className="flex items-center gap-3"
                    >
                      <FaLaugh className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 " />
                      <span>Laughter</span>
                    </div>
                    <div
                      className="flex items-center gap-3"
                    >
                      <FaAnchor className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200" />
                      <span>Emotional Connection</span>
                    </div>
                  </div>
                  <div
                    className="border-l-4 border-primary/50 pl-5 space-y-2 text-left mr-4"
                  >
                    <h1 className="text-2xl font-semibold font-cursive">Registration</h1>
                    <p className="text-sm text-gray-500">
                      Promises to be an event you will never forget.  
                      And we can't wait to have you register below!👇
                    </p>
                    <div className="mt-4">
                      <button className="bg-red-700 hover:bg-red-800 transition-all duration-300 transform hover:scale-105 text-white px-8 py-3 rounded- flex items-center justify-center gap-2 shadow-md">
                        <span className="text-center font-semibold">Save your Spot 😉</span>
                      </button>
                    </div>
                  </div>
                </div>
                <Link to="/event-info">
                  <button className="bg-red-700 hover:bg-red-800 transition-all duration-300 transform hover:scale-105 text-white px-12 mx-auto py-3 rounded-full flex items-center justify-center gap-2 shadow-md">
                    <span className="text-center font-semibold">Get more info</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
