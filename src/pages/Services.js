/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Carousel from "../components/Carousel";

const Services = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Services
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
              <a href="/service" className="text-white">
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
              <h5 className="sub-title text-primary px-3">Our Services</h5>
            </div>
            <h1 className="display-5 mb-4">
              Enabling Your Immigration Successfully
            </h1>
            <p className="mb-0">
              Installation Of BTS, BSC, MSC, Server, Access Network, DWDM And
              SDH Network, GPON,FTTH Equipment Installation And Commissioning
            </p>
            <p className="mb-0">
              Installation Of Multi Service Access Network (Wire Line) Equipment
              Installation And Commissioning.
            </p>
            <p className="mb-0">
              {" "}
              Experience In RF Drive Test And Optimization, SCFT, SSCVT, EMF,
              NARDA Broadband Testing And NBM Activity.
            </p>
            <p className="mb-0">
              {" "}
              Good Experience In Huawei Optix 1832 X-8/16/7500/8800/9800 /500
              /550 ,Alcatel Lucent _Nokia – 7750 SR-14s / 7750 SR-7s / 7750
              SR-12e / 7250 IXR-R6 / 7210 SAS-K30 / 7210 SAS-MXP In OptiX
              Multi-Service Mini-WDM/OTN/OSN/CEN System Combines The OTN And WDM
              Features, Which Enables Customers To Integrate Multiple Access
              Transport Networks Into A Single Network.
            </p>
          </div>
         <Carousel/>
        </div>
      </div>
      {/* Services End */}
    </div>
  );
};

export default Services;
