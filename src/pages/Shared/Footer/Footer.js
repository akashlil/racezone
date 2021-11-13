import React from "react";

const Footer = () => {
  return (
    <div>
      <div
        className="py-5 mt-5 text-light"
        style={{ backgroundColor: "#333333" }}
      >
        <div className="container">
          <div className="row row-cols-md-4 row-cols-1">
            <div className="cols">
              <h4 className="text-uppercase fw-bold">Contact info</h4>
              <div className="d-flex justify-content-between">
                <p className="fw-bolder text-danger">FaceBook </p>
                <a
                  href="https://www.facebook.com/dream"
                  className="text-decoration-none"
                >
                  www.fb.com/racezone
                </a>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bolder text-danger">Phone: </p>
                <p>+880-1345-3456-244</p>
              </div>
              <div className="d-flex justify-content-between">
                <p className="fw-bolder text-danger">Gmail: </p>
                <p>reaczone@gmail.com</p>
              </div>
            </div>
            <div className="cols">
              <h4 className="text-uppercase fw-bold">About us</h4>
              <div className="text-capitalize">
                <p>Our Story</p>
              </div>
              <div className="text-capitalize">
                <p>travel $ Tips</p>
              </div>
              <div className="text-capitalize ">
                <p>Working With Us</p>
              </div>
            </div>
            <div className="cols">
              <h4 className="text-uppercase fw-bold">Support</h4>
              <div className="text-capitalize">
                <p>Customer Support</p>
              </div>
              <div className="text-capitalize">
                <p>Privacy & Policy</p>
              </div>
              <div className="text-capitalize">
                <p>Contact Channels</p>
              </div>
            </div>
            <div className="cols">
              <h4 className="text-uppercase fw-bold">pay save</h4>
              <div>
                Plug into Paysafe | We provide simple and secure payment
                solutions to businesses of all sizes around the world. Our
                industry-leading capabilities enable .
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 bg-danger">
        <h6 className="text-center text-white">
          Best buy cyckel Is A Leading e-shop In Bangladesh.
        </h6>
      </div>
    </div>
  );
};

export default Footer;
