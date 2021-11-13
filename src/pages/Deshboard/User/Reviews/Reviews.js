import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../context/useAuth";

const Reviews = () => {
  const { user } = useAuth();
  const [successMassage, setSuccessMassage] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data["username"] = user.displayName;
    data["useremail"] = user.email;
    data["photoURL"] = user.photoURL;
    fetch(`https://aqueous-gorge-85514.herokuapp.com/user/review`, {
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
          setSuccessMassage(true);
        }
      });
  };
  return (
    <div className="row mt-5">
      {successMassage && (
        <div
          className="alert alert-success alert-dismissible fade show col-md-8 mx-auto"
          role="alert"
        >
          <strong>Review submite</strong> Successfully
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessMassage(false)}
          ></button>
        </div>
      )}
      <div className="col-md-8 col-12 mx-auto">
        <div className="card p-5  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                {...register("productprice")}
                disabled
                defaultValue={user.displayName}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="text"
                {...register("productprice")}
                disabled
                defaultValue={user.email}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Review Rating</label>
              <input
                {...register("rating", { required: true })}
                type="number"
                className="form-control"
              />
              {errors.rating && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Product detials </label>
              <textarea
                {...register("reviewsdets", { required: true })}
                type="text"
                className="form-control"
              />
              {errors.reviewsdets && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
