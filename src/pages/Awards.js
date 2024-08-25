import React from "react";

const Awards = () => {
  return (
    <div>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h3
            className="text-white display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            Our Awards
          </h3>
          <ol
            className="breadcrumb justify-content-center text-white mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="text-white">
                Pages
              </a>
            </li>
            <li className="breadcrumb-item active text-secondary">Awards</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Awards Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-4">
            {[
              "img/certificate1.jpg",
              "img/certificate2.jpg",
              "img/certificate3.jpg",
              "img/partnersawrd.jpeg",
              "img/Huwai2014.png",
              "img/Huwai2015.png",
              "img/Huwaiaward.png",
              "img/Huwaiaward1.png",
              "img/Hu.png",
              "img/Bvtpl.png",
            ].map((image, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 * index}s`}
              >
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={image}
                    className="card-img-top img-fluid rounded"
                    alt={`Award ${index + 1}`}
                    style={{ height: 250, objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-secondary">Award Title</h5>
                    <p className="card-text">
                      Description of the award or achievement. Highlight the
                      significance of the award and its impact on your company.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Awards End */}
    </div>
  );
};

export default Awards;
