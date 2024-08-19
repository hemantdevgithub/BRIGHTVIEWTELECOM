/* eslint-disable jsx-a11y/anchor-is-valid */
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
                  <i className="fa fa-map-marker-alt me-2" /> S 11-12, SECOND
                  FLOOR ADARSHININ PLAZA 91, ADHCHINI NEW DELHI- 110017 INDIA
                </a>
                <a href="">
                  <i className="fas fa-envelope me-2" />{" "}
                  info@brightviewtelecom.com
                </a>
                <a href="">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16 8h-2q-.425 0-.712-.288T13 7t.288-.712T14 6h2V4q0-.425.288-.712T17 3t.713.288T18 4v2h2q.425 0 .713.288T21 7t-.288.713T20 8h-2v2q0 .425-.288.713T17 11t-.712-.288T16 10z"
                    />
                  </svg>
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
                <a href="" className="">
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
