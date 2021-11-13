import React from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../context/useAuth";
const Navbar = () => {
  const history = useHistory();
  const logo = `https://i.ibb.co/0J6xkYj/racezone-logo.png`;
  const { user, logOut, admin } = useAuth();
  const userAdminLink = () => {
    history.push("/deshboard");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: "#333333" }}
    >
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="" style={{ width: "155px", height: "55px" }} />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase d-flex align-items-center  ms-auto mb-2 mb-lg-0 middle-part ">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/show/all/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutus">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact us
              </NavLink>
            </li>

            {user.email ? (
              <li className="nav-item">
                <div className="nav-link m-0 d-md-flex text-center">
                  <div className="d-flex mb-2">
                    <div className="dropdown me-1">
                      <img
                        src={
                          user.photoURL
                            ? user.photoURL
                            : "https://www.dontshake.org/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
                        }
                        type="button"
                        alt=""
                        className="btn p-0 me-md-5 dropdown-toggle rounded-circle"
                        style={{ width: "50px", height: "50px" }}
                        data-bs-toggle="dropdown"
                        data-bs-display="static"
                        aria-expanded="false"
                        id="navbarDarkDropdownMenuLink"
                        role="button"
                      />

                      <div
                        className="dropdown-menu position-absolute  shadow-lg  border-0 rounded-3"
                        aria-labelledby="dropdownMenuOffset"
                        style={{
                          width: "210px",
                        }}
                      >
                        <div className="text-center  ">
                          <img
                            src={
                              user.photoURL
                                ? user.photoURL
                                : "https://www.dontshake.org/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg"
                            }
                            alt=""
                            style={{ width: "100px", height: "100px" }}
                            srcset=""
                            className="rounded-circle"
                          />
                          <p className="fw-bolder  mt-3">{user.displayName}</p>
                          <button
                            className="btn btn-success rounded-pill"
                            onClick={userAdminLink}
                          >
                            {admin ? "admin deshboard" : "user deshboard"}
                          </button>
                          <hr />

                          <div className="list-group text-start ">
                            {/* <Link to="/deshboard/myorder">
                              <button
                                type="button"
                                className="list-group-item list-group-item-action border-0"
                              >
                                <i className="fas fa-book">My Order</i>
                              </button>
                            </Link> */}
                            <button
                              onClick={logOut}
                              className="list-group-item list-group-item-action border-0"
                            >
                              <i className="fas fa-sign-out-alt ">LogOut</i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className="btn btn-sm btn-success">
                    <i className="fas fa-sign-in-alt ms-2"> Login</i>
                  </button>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
