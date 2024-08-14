import React from "react";

const Clients = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Clients
          </h3>
          <ol
            className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="index.html" className="text-white">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-white">
                Pages
              </a>
            </li>
            <li className="breadcrumb-item active text-secondary">Services</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      {/* Services Start */}
      <div className="container-fluid service overflow-hidden py-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Our Clients</h5>
            </div>
            {/* <h1 class="display-5 mb-4">Enabling Your Immigration Successfully</h1> */}
            <p className="mb-0">
              {" "}
              Approved By All Major OEMs Including Nokia, Huawei, Ericsson, ZTE,
              Alcatel, NEC, Samsung, NEC Ceragon Etc.
            </p>
            <p className="mb-0">
              Worked With All Major Operators Including Airtel , Vodafone, TTSL,
              RJIL, Samsung, Idea, MTS, Uninor, Videocon, Aircel, BSNL, MTNL
              Etc.
            </p>
            <p className="mb-0">
              {" "}
              Working In Nepal For Huawei &amp; ZTE For Last 5 Years.
            </p>
            <p className="mb-0">Project Executed In 10 Circles Of India</p>
            <p className="mb-0">
              {" "}
              Most Valued Partner Of Huawei For Last 3 Years.
            </p>
          </div>
        </div>
      </div>
      {/* Services End */}
      {/* Counter Facts Start */}
      <div className="container-fluid testimonial overflow-hidden pb-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Telecom Clients</h5>
            </div>
            <h1 className="display-5 mb-4">What Our Clients Say</h1>
            <p className="mb-0">
              Our clients trust BrightViewTelecom for our reliable and
              innovative telecommunication solutions.
            </p>
          </div>
          <div className="marquee">
            <div className="marquee-content">
              {/* Add your images here */}
              <img src="img/ericsson-logo.png" alt="Image 1" />
              <img src="img/huawei-logo.png" alt="Image 2" />
              <img src="img/nokia-logo.png" alt="Image 3" />
              <img src="img/samsung-logo.png" alt="Image 3" />
              <img src="img/five.png" alt="Image 3" />
              <img src="img/ZTE-logo.png" alt="Image 3" />
              <img src="img/jio-logo (1).png" alt="Image 3" />
              <img src="img/three.png" alt="Image 3" />
              <img src="img/two.png" alt="Image 3" />
              <img src="img/one.png" alt="Image 3" />
              <img src="img/four.png" alt="Image 3" />
              {/* Add more images as needed */}
            </div>
            {/* ====================== */}
            {/*/.row*/}
          </div>
        </div>
      </div>
      {/* Counter Facts End */}
      <div className="container py-5">
        <div
          className="section-title text-center mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="sub-style">
            <h5 className="sub-title text-primary px-3">Technology Partner</h5>
          </div>
          <h1 className="display-5 mb-4">What Our Technology Partner say</h1>
          <p className="mb-0">
       
          </p>
        </div>
        <div className="marquee">
          <div className="marquee-content">
            {/* Add your images here */}
            <img src="img/Accops-logo.png" alt="Image 1" />
            <img src="img/aws-logo.png " alt="Image 2" />
            <img src="img/logobel.png" alt="Image 3" />
            <img src="img/Ingram_Micro-logo.png" alt="Image 3" />
            <img src="img/micromen-logo.png" alt="Image 3" />
            <img src="img/tech-data-logo.png" alt="Image 3" />
            {/* Add more images as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
