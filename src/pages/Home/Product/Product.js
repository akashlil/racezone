import React from "react";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const { productname, productprice, productimg, productdes } = product;

  const history = useHistory();
  const PassProductId = (id) => {
    history.push(`/productdetals/${id}`);
  };
  return (
    <div className="col">
      <div className="card h-100">
        <img src={productimg} className="card-img-top" alt="" />
        <div className="card-body ">
          <div className="text-center">
            <h5 className="card-title">{productname}</h5>
            <span className="">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <h5 className="card-title py-2">BD: {productprice} tk</h5>
            <p className="card-text " style={{ textAlign: "justify" }}>
              {productdes.slice(0, 100)}
            </p>
            <button
              className="btn  col-md-6 mx-auto btn-warning"
              onClick={() => PassProductId(product._id)}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
