import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  let history = useHistory();
  let location = useLocation();
  const { googleLogin, registerUser, registerError } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    if (data.password !== data.retypepassword) {
      alert("password not same");
      return;
    } else if (data.password.length < 6) {
      alert("password at last 6 charter");
      return;
    }
    await registerUser(data.email, data.password, data.name, history, location);
    reset();
  };
  return (
    <div className="row flex-md-row flex-column-reverse">
      <div className="col-md-6 p-0">
        <div>
          <img
            src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/login-bg.jpg"
            alt=""
            className="w-100"
            srcset=""
          />
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="p-5">
          {registerError && (
            <div class="alert alert-warning" role="alert">
              <strong>You can`t be Register</strong> {registerError}
            </div>
          )}
          <h1 className="card-title  fw-bolder mb-5">Register User</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Full Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                required
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                required
                className="form-control"
                id="exampleInputPassword1"
              />
              {errors.password && <span>This field is required password</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Re-Type Password
              </label>
              <input
                {...register("retypepassword", { required: true })}
                type="password"
                required
                className="form-control"
                id="exampleInputPassword1"
              />
              {errors.retypepassword && (
                <span>This field is required Retype password</span>
              )}
            </div>

            <button type="submit" className="fs-5 btn btn-info w-100">
              Register
            </button>
          </form>
          <br />
          <br />
          <br />
          <button
            onClick={() => googleLogin(history, location)}
            className="btn btn-danger rounded-3 text-light"
          >
            <i className="fab fa-google me-2"></i>Continue with Google
          </button>
          <br />
          <br />
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
