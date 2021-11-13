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
    fetch(`http://localhost:5000/user/review`, {
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
          class="alert alert-success alert-dismissible fade show col-md-8 mx-auto"
          role="alert"
        >
          <strong>Review submite</strong> Successfully
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessMassage(false)}
          ></button>
        </div>
      )}
      <div className="col-md-8 col-12 mx-auto">
        <div className="card p-5  ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-3">
              <label class="form-label">Your Name</label>
              <input
                type="text"
                {...register("productprice")}
                disabled
                defaultValue={user.displayName}
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Your Email</label>
              <input
                type="text"
                {...register("productprice")}
                disabled
                defaultValue={user.email}
                class="form-control"
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Product Review Rating</label>
              <input
                {...register("rating", { required: true })}
                type="number"
                class="form-control"
              />
              {errors.rating && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div class="mb-3">
              <label class="form-label">Product detials </label>
              <textarea
                {...register("reviewsdets", { required: true })}
                type="text"
                class="form-control"
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
