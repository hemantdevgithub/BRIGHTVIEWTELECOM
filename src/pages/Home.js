/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
// src/pages/Home.js
import React from "react";
import Marquee from "react-fast-marquee";
import Carousel from "../components/Carousel";
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // These are arbitrary settings for large screens
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
    <div>
      {/* Carousel Start */}
      <div className="carousel-header">
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={0}
              className="active"
            />
            <li data-bs-target="#carouselId" data-bs-slide-to={1} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="/home1.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: 900 }}>
                  {/* <h4 class="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp" data-wow-delay="0.1s">Solution For All</h4> */}
                  <h1
                    className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    BRIGHTVIEWTELECOM{" "}
                  </h1>
                  <p
                    className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  >
                    TRANSFORM YOUR BUSINESS TELECOMMUNICATIONS .It is an ISO9001
                    AND ISO 14001 AND ISO 45001 CERTIFIED COMPANY
                  </p>
                  <a
                    className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                    href="/"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/home2.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div className="text-center p-4" style={{ maxWidth: 900 }}>
                  <h5
                    className="text-white text-uppercase fw-bold mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    Innovation for betterment
                  </h5>
                  <h1
                    className="display-1 text-capitalize text-white mb-3 mb-md-4 wow fadeInUp"
                    data-wow-delay="0.3s"
                  >
                    Giving technology a human touch
                  </h1>
                  <p
                    className="text-white mb-4 mb-md-5 fs-5 wow fadeInUp"
                    data-wow-delay="0.5s"
                  ></p>
                  <a
                    className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5 wow fadeInUp"
                    data-wow-delay="0.7s"
                    href="/"
                  >
                    More Details
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-secondary wow fadeInLeft"
              data-wow-delay="0.2s"
              aria-hidden="false"
            />
            <span className="visually-hidden-focusable">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-secondary wow fadeInRight"
              data-wow-delay="0.2s"
              aria-hidden="false"
            />
            <span className="visually-hidden-focusable">Next</span>
          </button>
        </div>
      </div>
      {/* Carousel End */}
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h4
                className="modal-title text-secondary mb-0"
                id="exampleModalLabel"
              >
                Search by keyword
              </h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-5 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="bg-light rounded">
                <img
                  src="img/about-2.png"
                  className="img-fluid w-100"
                  style={{ marginBottom: "-7px" }}
                  alt="Image"
                />
              </div>
            </div>
            <div className="col-xl-7 wow fadeInRight" data-wow-delay="0.3s">
              <h5 className="sub-title pe-3">About</h5>
              <h1 className="display-5 mb-4">
                The best leading telecom company with 10 years of experience
              </h1>
              <p className="mb-4">
                BrightViewTelecom has been at the forefront of the
                telecommunications industry, providing cutting-edge solutions
                that drive business success. Our expertise and innovative
                approach ensure seamless connectivity and superior communication
                for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Services Start */}
      <div className="container-fluid service overflow-hidden pt-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">Our Services</h5>
            </div>
            <h1 className="display-5 mb-4">What Solutions We Provide</h1>
            <p className="mb-0">
              We offer a comprehensive range of telecommunication solutions
              designed to meet your business needs. Our services ensure your
              business stays connected and productive.
            </p>
          </div>
          <Carousel />
          {/* <div className="row  g-4" style={{"display":"flex","flexWrap":"nowrap"}}>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src="img/service-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/" className="h4 text-white mb-0">
                          Civil Work
                        </a>
                      </div>
                      <a
                        className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                        href="/"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/">
                        <h4 className="text-white mb-4 py-3">CIVIL WORK</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4">
                          Civil Work With Tower Foundation, Electrical Work
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill py-3 px-5"
                          href="/"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src="img/service-2.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/" className="h4 text-white mb-0">
                          RF Drive Test
                        </a>
                      </div>
                      <a
                        className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                        href="/"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/">
                        <h4 className="text-white mb-4 py-3">RF Drive Test</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4">
                          RF Drive Test And RF Optimization , EMF , EMI Testing
                          And There Tools Renting
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src="img/service-3.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/" className="h4 text-white mb-0">
                          IWAN
                        </a>
                      </div>
                      <a
                        className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                        href="/"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/">
                        <h4 className="text-white mb-4 py-3">IWAN </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4">IWAN FOR AIRTEL.</p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src="img/service-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/" className="h4 text-white mb-0">
                          Data Center
                        </a>
                      </div>
                      <a
                        className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                        href="/"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/">
                        <h4 className="text-white mb-4 py-3">Data Center</h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4">
                          Experienced Teams For Implementing Server Racks,
                          Subrack, Cabling, Optical Fiber, LAN Cable Laying And
                          Connectivity, Power Cable Connectivity Of 1mm To 300mm
                          Square For Data Centers And Servers Room.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-xl-4 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item">
                <div className="service-inner">
                  <div className="service-img">
                    <img
                      src="img/service-2.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Image"
                    />
                  </div>
                  <div className="service-title">
                    <div className="service-title-name">
                      <div className="bg-primary text-center rounded p-3 mx-5 mb-4">
                        <a href="/" className="h4 text-white mb-0">
                          Wireline Broadband Network{" "}
                        </a>
                      </div>
                      <a
                        className="btn bg-light text-secondary rounded-pill py-3 px-5 mb-4"
                        href="/"
                      >
                        Explore More
                      </a>
                    </div>
                    <div className="service-content pb-4">
                      <a href="/">
                        <h4 className="text-white mb-4 py-3">
                          Wireline Broadband Network
                        </h4>
                      </a>
                      <div className="px-4">
                        <p className="mb-4">
                          Working With Huawei /Alcatel Lucent/Nokia In FTTH
                          Solution Uses One Optical Fiber Network To Bear
                          Multiple Services, Providing High Speed Internet
                          (HSI), Wi-Fi, Voice, Video, And CATV Services For
                          Home-Connected Users In India And Nepal For Bharti
                          Airtel /RJIL/BSNL /Nepal Telecom Etc.
                        </p>
                        <a
                          className="btn btn-primary border-secondary rounded-pill text-white py-3 px-5"
                          href="/"
                        >
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Services End */}
      {/* Features Start */}

      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style mb-3">
              <h5 className="sub-title text-primary px-3 d-inline-block">
                Who We Are?
              </h5>
            </div>
            <h1 className="display-5 fw-bold mb-4">
              WE ARE AN ISO 9001 AND OHSAS 18001 CERTIFIED COMPANY.
            </h1>
            <p className="mb-3">
              Brightview Telecom was incorporated in 2008. Since then,
              Brightview has been providing various solutions to its clients in
              the field of Telecom, IT, and Manpower.
            </p>
            <p className="mb-0">
              With specialized delivery teams, experienced management, and a
              long-term vision, Brightview is a respected name in the field of
              Telecom and IT.
            </p>
          </div>
        </div>
      </div>
      {/* Who We Are Section End */}

      {/* What We Do Section Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="section-title text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ marginBottom: 70 }}
          >
            <div className="sub-style mb-3">
              <h5 className="sub-title text-primary px-3 d-inline-block">
                What We Do?
              </h5>
            </div>
            <h1 className="display-5 fw-bold mb-4">Our Expertise & Services</h1>
            <p className="mb-3">
              Brightview Telecom specializes in the installation of BTS, BSC,
              MSC, Access Network, RF Drive test and optimization, Data center
              setups, and FTTH Solutions.
            </p>
            <p className="mb-0">
              We are experts in providing IT solutions in the field of Cloud,
              App development, ERP, etc. Additionally, we supply both technical
              and non-technical manpower.
            </p>
          </div>
        </div>
      </div>
      {/* Countries We Offer End */}
      {/* testimonial start  */}
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
      <div className="container-fluid testimonial overflow-hidden pb-5">
        <div className="container py-5">
          <div
            className="section-title text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="sub-style">
              <h5 className="sub-title text-primary px-3">
                Technology Partner
              </h5>
            </div>
            <h1 className="display-5 mb-4">What Our Technology Partner say</h1>
            <p className="mb-0"></p>
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
      {/* Testimonial End */}
      {/* ==== */}
      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="fa fa-arrow-up" />
      </a>

      {/* ==== */}
    </div>
  );
};

export default Home;
