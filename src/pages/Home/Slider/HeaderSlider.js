import React from "react";
import { NavLink } from "react-router-dom";

const HeaderSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner slider-h ">
        <div className="carousel-item active">
          <div className="slider-cointner">
            <div className="d-flex flex-wrap align-items-center justify-content-center mx-2">
              <div className="col-md-8">
                <img
                  src="https://i.ibb.co/NT6dgvj/847294.jpg"
                  className="img-fluid "
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="mx-4">
                  <h4>Duranta Alloy 21-Spd Xavier R-1904 26 Yellow</h4>
                  <p>
                    Product Details Frame Size: Alloy: 26"X18" Tig Welded ISO
                    Standard , 6061 Grade Fork Alloy Suspension Fork Balde Dia
                    38.9mm Hubs Alloy Hubs With Quick Release Saddle: High Grade
                    Pu Foam Brake Set:
                  </p>
                  <NavLink to="/show/all/product">
                    <button className="btn  col-md-6 mx-auto btn-lg rounder-0  btn-outline-danger">
                      Explore
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="slider-cointner">
            <div className="d-flex flex-wrap align-items-center justify-content-center mx-2">
              <div className="col-md-8">
                <img
                  src="https://i.ibb.co/zP6245g/847293.jpg"
                  className="img-fluid "
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="mx-4">
                  <h4>Duranta Alloy 21-Spd Xavier R-1904 26 Red</h4>
                  <p>
                    Product Details Frame Size: Alloy: 26"X18" Tig Welded ISO
                    Standard , 6061 Grade Fork Alloy Suspension Fork Balde Dia
                    38.9mm Hubs Alloy Hubs With Quick Release Saddle: High Grade
                    Pu Foam Brake Set:
                  </p>
                  <NavLink to="/show/all/product">
                    <button className="btn  col-md-6 mx-auto btn-lg rounder-0  btn-outline-danger">
                      Explore
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item ">
          <div className="slider-cointner">
            <div className="d-flex flex-wrap align-items-center justify-content-center mx-2">
              <div className="col-md-8">
                <img
                  src="https://i.ibb.co/Hzh2Tt2/847298.jpg"
                  className="img-fluid "
                  alt="..."
                />
              </div>
              <div className="col-md-4">
                <div className="mx-4">
                  <h4>Duranta Alloy 21-Spd Xavier R-1905 26 Blue</h4>
                  <p>
                    Product Details Frame Size: Alloy: 26"X18" Tig Welded ISO
                    Standard , 6061 Grade Fork Alloy Suspension Fork Balde Dia
                    38.9mm Hubs Alloy Hubs With Quick Release Saddle: High Grade
                    Pu Foam Brake Set:
                  </p>
                  <NavLink to="/show/all/product">
                    <button className="btn  col-md-6 mx-auto btn-lg rounder-0  btn-outline-danger">
                      Explore
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HeaderSlider;
