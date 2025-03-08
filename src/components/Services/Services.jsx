import React from "react";
import Img2 from "../../assets/logo2.png";
import Img1 from "../../assets/picnic.png";
import Img4 from "../../assets/proposal.png";
import Img5 from "../../assets/talk.png";
import Img from "../../assets/dinner.png";

const ServicesData = [
  {
    id: 1,
    img: Img1,
    name: "Romantic Picnics",
    description:
      "Couples book spots for specially curated picnics designed to foster love and connection",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img,
    name: "Restaurant Experiences",
    description:
      "Restaurant open daily focused on love, offering themed experiences tailored for couples",
    aosDelay: "250",
  },
  {
    id: 3,
    img: Img2,
    name: "Anniversaries",
    description:
      "A special setting to celebrate milestones in your relationship",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    name: "Suprise Proposals",
    description:
      "Thoughtfully planned proposals to make the moment unforgettable",
    aosDelay: "550",
  },
  {
    id: 5,
    img: Img5,
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
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-900">
              Best Experiences For You
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                className="mb-20 rounded-2xl bg-white hover:bg-red-700 hover:text-white relative shadow-xl duration-high group max-w-[325px]"
              >
                <div className="h-[135px]">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
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
