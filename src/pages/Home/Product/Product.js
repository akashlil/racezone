import React from "react";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const { productname, productprice, productimg, productdes } = product;

  const history = useHistory();
  const PassProductId = (id) => {
    history.push(`/productdetals/${id}`);
  };
  return (
    <div class="col">
      <div class="card h-100">
        <img src={productimg} class="card-img-top" alt="" />
        <div class="card-body ">
          <div className="text-center">
            <h5 class="card-title">{productname}</h5>
            <span className="">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </span>
            <h5 class="card-title py-2">BD: {productprice} tk</h5>
            <p class="card-text " style={{ textAlign: "justify" }}>
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
