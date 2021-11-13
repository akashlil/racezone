import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const [SuccessAdminmass, setSuccessAdminmass] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const user = { email: data.email };
    fetch(`https://aqueous-gorge-85514.herokuapp.com/make/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        setSuccessAdminmass(true);
        console.log(data);
      });
  };
  return (
    <div className="row">
      {SuccessAdminmass && (
        <div
          className="alert alert-success alert-dismissible fade show col-md-8 mx-auto"
          role="alert"
        >
          <strong>Admin Add</strong> Successfully
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setSuccessAdminmass(false)}
          ></button>
        </div>
      )}
      <div className="col-md-6">
        <div className=" card p-5 mt-5 mx-auto">
          <h1>Add admin </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", { required: true })}
              className="col-6 p-2"
            />
            {/* errors will return when field validation fails  */}
            {errors.email && <span>Email field is required</span>}

            <input type="submit" className="btn btn-info ms-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
