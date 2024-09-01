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
    <Marquee className="p-3"
    autoFill={true}
    >
      <div className="d-flex  justify-content-around">
        {services.map((service, index) => (
          <div
            key={index}
            className="card border-dark mb-3 me-5"
            style={{ width: "18rem", height: "24rem" }}
          >
            <div className="overflow-hidden" style={{ height: "13rem" }}>
              <img
                src={service.image}
                className="card-img-top"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                alt={service.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title text-dark">{service.title}</h5>
              <p className="card-text text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Marquee>
  );
};

export default Carousel;
