/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const About = () => {
  return (
    <div>
      {/* Spinner Start */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-secondary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* Spinner End */}
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
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
              <a href="/" className="text-white">
                Pages
              </a>
            </li>
            <li className="breadcrumb-item active text-secondary">About</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
      {/* aboutstart */}
      <div className="container-fluid features overflow-hidden py-5">
        <div className="container">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Who We are?</h5>
            </div>
            <h1 className="display-5 mb-4">
              Brightview telecom is an ISO 9001 and ISO 14001 and ISO 45001
              certified company.
            </h1>
            <p className="mb-0">
              Brightview Telecom Pvt. Ltd is a leading telecom company having
              more than 15 years of expertise in the field of telecom equipment
              installation, commissioning and other telecom activities Like
              Trunkey projects
            </p>
            <p className="mb-0">
              Having more than 250 field teams spanning around 10 telecom
              circles pan India and Nepal. Brightview provides all kind of
              telecom services like RF suvery and Site acquisition ,RF Drive
              Test, RF optimization, EMI and EMF testing, installation of
              Microwave, BTS, BSC, IBS, MSAN, Electrical ,Earth Pit ,Civil work
              with tower foundation, Shelter, Tower, DWDM , Transmission
              equipment, Access Equipment etc. Brightview is a Gold partner of
              Huwaei and Excellent Partner of ZTE .
            </p>
            <p className="mb-0">
              Brightview telecom also provides various IT Solutions including
              Hardware and Software. Having partnered with leading technology
              companies like ACCOPS, AWS, BEL Technologies etc. Brightview
              provides solutions in the field of Cloud computing, Digital
              Virtualization, App development etc.
            </p>
          </div>
        </div>
      </div>
      {/* aboutend */}
      {/* Training Start */}
      <div className="container-fluid training overflow-hidden bg-light py-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">WHAT WE DO ?</h5>
            </div>
            <h1 className="display-5 mb-4">
              Get the Best Service Training with Our Company
            </h1>
            <p className="mb-0">
              BrightViewTelecom specializes in providing top-tier service
              training to ensure your team is equipped with the skills needed
              for optimal communication and connectivity. Our training programs
              are designed to enhance your business operations and drive
              success.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="training-item">
                <div className="training-inner">
                  <img
                    src="img/training-1.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="training-title-name">
                    <a href="/about" className="h4 text-white mb-0">
                      End to End Service Provider for Telecom and IT Solutions.
                    </a>
                    {/* <a href="#" class="h4 text-white mb-0">Coaching</a> */}
                  </div>
                </div>
                <div className="training-content bg-secondary rounded-bottom p-4">
                  <a href="/about">
                    <h4 className="text-white">IELTS Coaching</h4>
                  </a>
                  <p className="text-white-50">
                    RF Survey for 2G, 3G and 4G telecom network.
                  </p>
                  <a
                    className="btn btn-secondary rounded-pill text-white p-0"
                    href="/service"
                  >
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="training-item">
                <div className="training-inner">
                  <img
                    src="img/training-2.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="training-title-name">
                    <a href="/" className="h4 text-white mb-0">
                      EMI and EMF testing for tower radiation, Radiation
                      testing, Drive test and optimization
                    </a>
                    {/* <a href="#" class="h4 text-white mb-0">Coaching</a> */}
                  </div>
                </div>
                <div className="training-content bg-secondary rounded-bottom p-4">
                  <a href="/">
                    <h4 className="text-white">Testing</h4>
                  </a>
                  <p className="text-white-50">
                    EMI and EMF testing for tower radiation, Radiation testing,
                    Drive test and optimization.
                  </p>
                  <a
                    className="btn btn-secondary rounded-pill text-white p-0"
                    href="/service"
                  >
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="training-item">
                <div className="training-inner">
                  <img
                    src="img/training-3.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="training-title-name">
                    <a href="/about" className="h4 text-white mb-0">
                      Installation of all kinds of equipment including
                      Microwave, BTS, BSC, IBS, MSAN etc.
                    </a>
                    {/* <a href="#" class="h4 text-white mb-0">Coaching</a> */}
                  </div>
                </div>
                <div className="training-content bg-secondary rounded-bottom p-4">
                  {/* <a href="#"><h4 class="text-white">PTE Coaching</h4></a> */}
                  <p className="text-white-50">
                    Installation of all kinds of equipment including Microwave,
                    BTS, BSC, IBS, MSAN etc.
                  </p>
                  <a
                    className="btn btn-secondary rounded-pill text-white p-0"
                    href="/service"
                  >
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="training-item">
                <div className="training-inner">
                  <img
                    src="img/training-4.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Image"
                  />
                  <div className="training-title-name">
                    <a href="/service" className="h4 text-white mb-0">
                      Commissioning of various 2G, 3G, 4G equipment.
                    </a>
                    {/* <a href="#" class="h4 text-white mb-0">Coaching</a> */}
                  </div>
                </div>
                <div className="training-content bg-secondary rounded-bottom p-4">
                  <a href="/about">
                    <h4 className="text-white">
                      Commissioning of various 2G, 3G, 4G equipment
                    </h4>
                  </a>
                  {/* <p class="text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis.</p> */}
                  <a
                    className="btn btn-secondary rounded-pill text-white p-0"
                    href="/service"
                  >
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                className="btn btn-primary border-secondary rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.1s"
                href="/services"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Training End */}
    </div>
  );
};

export default About;
