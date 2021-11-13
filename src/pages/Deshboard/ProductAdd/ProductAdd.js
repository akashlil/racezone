import React from "react";
import { useForm } from "react-hook-form";

const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // product add
  const onSubmit = (data) => {
    fetch(`https://aqueous-gorge-85514.herokuapp.com/product/add`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          reset();
        }
      });
  };
  return (
    <div className="row mt-5">
      <div className="col-md-6 col-12">
        <div className="card p-5  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label class="form-label">Product Name</label>
              <input
                {...register("productname", { required: true })}
                type="text"
                class="form-control"
              />
              {errors.productname && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label class="form-label">Product Price</label>
              <input
                {...register("productprice", { required: true })}
                type="text"
                class="form-control"
              />
              {errors.productprice && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label class="form-label">Product Images Link</label>
              <input
                {...register("productimg", { required: true })}
                type="text"
                class="form-control"
              />
              {errors.productimg && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label class="form-label">Product Desprication</label>
              <textarea
                {...register("productdes", { required: true })}
                type="text"
                class="form-control"
              />
              {errors.productdes && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <input type="submit" />
          </form>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <h1>ok</h1>
      </div>
    </div>
  );
};

export default ProductAdd;
