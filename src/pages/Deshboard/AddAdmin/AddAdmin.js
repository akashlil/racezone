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
