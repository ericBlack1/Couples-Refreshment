import React from "react";
import BannerImg from "../../assets/logo.png";
import { FaAnchor, FaLaugh, FaJenkins } from "react-icons/fa";
import BgImg from "../../assets/website/event.jpg";

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
        <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 ">
          <div className="container">
          <div className="text-center py-10">
            <h1 className="text-5xl font-bold font-cursive text-red-700">
              Upcoming Events
            </h1>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)] spin"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-4xl text-center sm:text-4xl font-bold font-cursive"
                >
                  Our First Smile
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-xl text-center text-gray-900 tracking-wide leading-5 font-corben"
                >
                  A unique experience that celebrates the joy and beauty 
                  of love, helping couples reminisce about thier first
                  special moments together
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <FaJenkins className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-200 " />
                      <span>Premium Services</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <FaLaugh className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-200 " />
                      <span>Laughter</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <FaAnchor className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-200" />
                      <span>Emotional Connection</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive ">
                      Registration
                    </h1>
                    <p className="text-sm text-gray-500">
                      Promises to be an event you will never forget
                      And we can't wait to have you
                      Register below!👇
                    </p>
                  </div>
                </div>
                <button className="text-conter bg-red-700 hover:scale-105 duration-200 text-white px-6 py-4 rounded-full flex items-center gap-3">
                      <span className="text-center">Save your Spot😉</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;