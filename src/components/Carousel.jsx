import Marquee from "react-fast-marquee";
const Carousel = () => {
  const services = [
    {
      title: "Civil Work",
      image: "img/service-1.jpg",
      description: "Civil Work With Tower Foundation, Electrical Work",
    },
    {
      title: "RF Drive Test",
      image: "img/service-2.jpg",
      description:
        "RF Drive Test And RF Optimization , EMF , EMI Testing And There Tools Renting",
    },
    {
      title: "IWAN",
      image: "img/service-3.jpg",
      description: "IWAN FOR AIRTEL.",
    },
    {
      title: "Data Center",
      image: "img/service-1.jpg",
      description:
        "Experienced Teams For Implementing Server Racks, Subrack, Cabling, Optical Fiber...",
    },
    {
      title: "Wireline Broadband Network",
      image: "img/service-2.jpg",
      description:
        "Working With Huawei /Alcatel Lucent/Nokia In FTTH Solution Uses One Optical Fiber Network...",
    },
  ];

  return (
      <Marquee className="p-3">
            <div className="flex   justify-around space-x-5 me-4">

      {services.map((service, index) => (
          
        <div
        key={index}
        className="cursor-pointer w-full border-2 border-black sm:w-[18rem] md:w-[20rem] lg:w-[22rem] h-[24rem] group font-poppins bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
          <div className="w-full h-[13rem] overflow-hidden">
            <img
              src={service.image}
              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
              alt={service.title}
              />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
      </Marquee>
  );
};

export default Carousel;
