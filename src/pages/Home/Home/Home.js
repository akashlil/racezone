import React from "react";
import "./Home.css";
import Navbar from "../../Shared/Navbar/Navbar";
import HeaderSlider from "../Slider/HeaderSlider";
import Product from "../Product/Product";
import Reviews from "../Reviews/Reviews";
import Footer from "../../Shared/Footer/Footer";
import useAllDataLoad from "../../../hooks/useAllDataLoad";
import { NavLink } from "react-router-dom";
import LatestNews from "../LatestNews/LatestNews";

const Home = () => {
  const { productData, dataLoadTime } = useAllDataLoad();
  return (
    <div>
      <Navbar></Navbar>
      <HeaderSlider></HeaderSlider>
      {/* product show */}
      <div className="section-gap">
        <div className="container">
          <div className="row">
            <div className="text-center ">
              <h5>FEATURED BICYCLES</h5>
              <h1>Find Your Next Bike</h1>
              <p>
                elementum dictum viverra sed lobortis vitae purus Vitae eget
                cursus dictum ac tellus faucibus Porta aliquet
              </p>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3  row-cols-md-2 g-4">
            {dataLoadTime ? (
              <div
                className="spinner-border text-success mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              productData
                ?.slice(0, 6)
                .map((product) => (
                  <Product product={product} key={product._id}></Product>
                ))
            )}
          </div>

          <NavLink to="/show/all/product" className="row text-decoration-none">
            <button className="btn btn-outline-danger mt-5 col-6 col-md-2 mx-auto font-monospace fs-5">
              More Products
            </button>
          </NavLink>
        </div>
      </div>
      <Reviews></Reviews>
      <LatestNews></LatestNews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
