import React from "react";
import { useForm } from "react-hook-form";

const AddAdmin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const user = { email: data.email };
    fetch(`http://localhost:5000/make/admin`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        reset();
        console.log(data);
      });
  };
  return (
    <div>
      <h1>Add admin </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.email && <span>Email field is required</span>}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddAdmin;
