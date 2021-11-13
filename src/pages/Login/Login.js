import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { useForm } from "react-hook-form";

const Login = () => {
  let history = useHistory();
  let location = useLocation();
  const { googleLogin, userLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password, history, location);
  };

  return (
    <div className="row flex-md-row flex-column-reverse">
      <div className="col-md-6 p-0">
        <div className="">
          {" "}
          <img
            src="https://templatekits.themewarrior.com/roadpedal/wp-content/uploads/sites/29/2021/08/login-bg.jpg"
            alt=""
            className="w-100"
            srcset=""
          />
        </div>
      </div>
      <div className="col-md-6 ">
        <div className=" p-5">
          <h1 className="card-title  fw-bolder mb-5">Login With</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
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

            <button type="submit" className="fs-5 btn btn-info w-100">
              Login
            </button>
          </form>
          <br />
          <br />
          <br />
          <button
            onClick={() => googleLogin(history, location)}
            className="btn btn-success rounded-3 text-light"
          >
            <i className="fab fa-google me-2"></i>Continue with Google
          </button>
          <br />
          <br />
          <Link to="/register">Crerate an account</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
