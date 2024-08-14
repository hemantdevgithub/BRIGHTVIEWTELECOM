// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Contact Info</h4>
                <a href="">
                  <i className="fa fa-map-marker-alt me-2" /> 123 Street, New
                  York, USA
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2" /> info@example.com
                </a>
                <a href="">
                  <i className="fas fa-phone me-2" />
                  +91-9891858137
                </a>
                {/* <a href="" class="mb-3"><i class="fas fa-print me-2"></i> +012 345 67890</a> */}
                <div className="d-flex align-items-center">
                  {/* <i class="fas fa-share fa-2x text-secondary me-2"></i> */}
                  <a className="btn mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="btn mx-1" href="">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Opening Time</h4>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Mon - Friday:</h6>
                  <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Satday:</h6>
                  <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                </div>
                <div className="mb-3">
                  <h6 className="text-muted mb-0">Vacation:</h6>
                  <p className="text-white mb-0">All Sunday is our vacation</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">QUICK LINK</h4>
                <a href="/" className="">
                  <i className="fas fa-angle-right me-2" /> Home
                </a>
                <a href="/about" className="">
                  <i className="fas fa-angle-right me-2" /> About{" "}
                </a>
                <a href="/services" className="">
                  <i className="fas fa-angle-right me-2" /> Services
                </a>
                <a href="/awards" className="">
                  <i className="fas fa-angle-right me-2" /> Award
                </a>
                <a href="/clients" className="">
                  <i className="fas fa-angle-right me-2" />
                  Clients
                </a>

                <a href="/contact" className="">
                  <i className="fas fa-angle-right me-2" /> Contact Us
                </a>
                {/* <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Work / Career</a> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-secondary mb-4">Our Partner</h4>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Samsung
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Nokia
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> ZTE
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Vodafone
                </a>
                <a href="#" className="">
                  <i className="fas fa-angle-right me-2" /> Ericson
                </a>
                {/* <a href="#" class=""><i class="fas fa-angle-right me-2"></i> Work / Career</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
