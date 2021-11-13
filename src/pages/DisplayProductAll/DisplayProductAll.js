import React from "react";
import useAllDataLoad from "../../hooks/useAllDataLoad";
import Product from "../Home/Product/Product";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const DisplayProductAll = () => {
  const { productData, dataLoadTime } = useAllDataLoad();
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="my-5">
          <div className="row row-cols-1 row-cols-lg-3  row-cols-md-2 g-4">
            {dataLoadTime ? (
              <div
                className="spinner-border text-success mx-auto"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              productData?.map((product) => (
                <Product product={product} key={product._id}></Product>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DisplayProductAll;
