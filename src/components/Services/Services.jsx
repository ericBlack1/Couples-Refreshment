import React from "react";
import Img2 from "../../assets/logo1.jpeg";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Romantic Picnics",
    description:
      "Couples book spots for specially curated picnics designed to foster love and connection",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Restaurant Experiences",
    description:
      "Restaurant open daily focused on love, offering themed experiences tailored for couples",
    aosDelay: "250",
  },
  {
    id: 3,
    img: Img2,
    name: "Romantic Picnics",
    description:
      "Couples book spots for specially curated picnics designed to foster love and connection",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img2,
    name: "Romantic Picnics",
    description:
      "Couples book spots for specially curated picnics designed to foster love and connection",
    aosDelay: "550",
  },
  {
    id: 5,
    img: Img2,
    name: "Couple Retreats",
    description:
      "Exclusive retreats designed for deep bonding, relaxation and adventure",
    aosDelay: "700",
  },
  {
    id: 6,
    img: Img2,
    name: "Relationship Workshops",
    description:
      "Interactive workshops focused on strengthening relationships, communication and intimacy",
    aosDelay: "850",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold font-cursive text-gray-900">
              Best Experiences For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="mb-20 rounded-2xl bg-white hover:bg-red-700 hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
