import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router";
import useAuth from "../../context/useAuth";
import useAllDataLoad from "../../hooks/useAllDataLoad";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const ProductDetals = () => {
  const history = useHistory();
  const { Productid } = useParams();
  const { productData, orderList } = useAllDataLoad();
  const { user } = useAuth();
  const findProduct = productData?.find((product) => product._id === Productid);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userOldorderList = orderList.find(
      (order) => order.email === data.email && order.productId === Productid
    );
    if (userOldorderList) {
      alert("This Booking Serviceyou are allready add");
    } else {
      data["email"] = user.email;
      data["productId"] = Productid;
      data["productname"] = findProduct.productname;
      data["productprice"] = findProduct.productprice;
      data["status"] = 1;
      fetch(`https://aqueous-gorge-85514.herokuapp.com/order/product`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            history.push("/deshboard/myorder");
            reset();
          }
        });
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div>
          <div className="text-center" style={{ width: "100%" }}>
            <div className="text-end me-5">
              <h4 className="mt-5">{findProduct?.productname}</h4>
              <h2 className="mt-2 text-danger">
                BD : {findProduct?.productprice} tk
              </h2>
            </div>
            <img
              src={findProduct?.productimg}
              alt=""
              style={{ width: "60%" }}
              srcset=""
            />
          </div>
          <div>
            <div className="bg-black p-2 text-white m-md-5 m-4">
              <h4 className="lh-lg">Product Details</h4>
            </div>
            <div className="m-md-5 m-2 row">
              <div className="row">
                <div className="col-md-4 col-12">
                  <p className="lh-lg">{findProduct?.productdes}</p>
                </div>
                <div className="col-md-7 col-12 mx-0 mx-md-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <label className="form-label">Product Name</label>
                      <input
                        type="text"
                        {...register("productname")}
                        disabled
                        defaultValue={findProduct?.productname}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Product Prices tk</label>
                      <input
                        type="text"
                        {...register("productprice")}
                        disabled
                        defaultValue={findProduct?.productprice}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Enter You Email Show</label>
                      <input
                        {...register("email", { required: true })}
                        type="text"
                        defaultValue={user?.email}
                        className="form-control"
                      />
                      {errors.email && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Enter Your Name</label>
                      <input
                        {...register("name", { required: true })}
                        type="text"
                        defaultValue={user?.displayName}
                        className="form-control"
                      />
                      {errors.name && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Enter Your Phone</label>
                      <input
                        {...register("phone", { required: true })}
                        type="number"
                        className="form-control"
                      />
                      {errors.phone && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Enter Your Shopping Address
                      </label>
                      <textarea
                        {...register("shoppingaddress", { required: true })}
                        type="text"
                        className="form-control"
                      />
                      {errors.shoppingaddress && (
                        <span className="text-danger">
                          This field is required
                        </span>
                      )}
                    </div>

                    {/* <input type="" /> */}
                    <button
                      type="submit"
                      className="btn col-md-3 mx-auto btn-warning"
                    >
                      Places Order Now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductDetals;
