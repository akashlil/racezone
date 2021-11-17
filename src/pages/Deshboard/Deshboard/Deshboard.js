import React, { useState } from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
  NavLink,
} from "react-router-dom";
import useAuth from "../../../context/useAuth";
import AddAdmin from "../AddAdmin/AddAdmin";
import AdminPrivateRoute from "../AdminPrivateRoute/AdminPrivateRoute";
import DeshboardHome from "../DeshboardHome/DeshboardHome";
import ManageallOrder from "../ManageallOrder/ManageallOrder";
import ProductAdd from "../ProductAdd/ProductAdd";
import Pay from "../User/Pay/Pay";
import Reviews from "../User/Reviews/Reviews";
import UserOrder from "../User/UserOrder/UserOrder";
import "./Deshboard.css";

const Deshboard = () => {
  let history = useHistory();

  const { user, logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();
  const [active, setActive] = useState("");

  const activeClassOn = (nam) => {
    setActive(nam);
  };
  return (
    <div className="main-continer">
      <nav className="navbar navbar-light bg-black text-white">
        <div className="w-100 d-flex justify-content-between">
          <div className="px-2 order-2 order-md-1">
            <h1>Deshboard</h1>
          </div>
          <div className="px-5 order-1 order-md-2">
            {/* {user.email ? (
              <button className="btn btn-info" onClick={() => logOut(history)}>
                logOut
              </button>
            ) : (
              <Link className="btn btn-info" to={`/login`}>
                Login
              </Link>
            )} */}
            {user.email ? (
              <div className="dropdown" style={{ marginRight: "100px" }}>
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
                      // onClick={userAdminLink}
                    >
                      {admin ? "admin deshboard" : "user deshboard"}
                    </button>
                    <hr />

                    <div className="list-group text-start ">
                      <button
                        onClick={() => logOut(history)}
                        className="list-group-item list-group-item-action border-0"
                      >
                        <i className="fas fa-sign-out-alt ">LogOut</i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  <button className="btn btn-sm btn-success">
                    <i className="fas fa-sign-in-alt ms-2"> Login</i>
                  </button>
                </NavLink>
              </li>
            )}
          </div>
        </div>
      </nav>
      <div className="sidebar">
        <Link className="bg-info" to={`/`}>
          My website
        </Link>
        {admin && (
          <Link
            className={active === 1 ? "active" : ""}
            to={`${url}/addadmin`}
            onClick={() => activeClassOn(1)}
          >
            Admin Add
          </Link>
        )}
        {admin && (
          <Link
            className={active === 2 ? "active" : ""}
            to={`${url}/productadd`}
            onClick={() => activeClassOn(2)}
          >
            Product Add
          </Link>
        )}
        {admin && (
          <Link
            className={active === 3 ? "active" : ""}
            to={`${url}/manage/all/order`}
            onClick={() => activeClassOn(3)}
          >
            Manage All Order
          </Link>
        )}
        {!admin && (
          <Link
            className={active === 4 ? "active" : ""}
            to={`${url}/reviewadd`}
            onClick={() => activeClassOn(4)}
          >
            Review Add
          </Link>
        )}

        {!admin && (
          <Link
            className={active === 5 ? "active" : ""}
            to={`${url}/myorder`}
            onClick={() => activeClassOn(5)}
          >
            My Order
          </Link>
        )}
        {!admin && (
          <Link
            className={active === 6 ? "active" : ""}
            to={`${url}/pay`}
            onClick={() => activeClassOn(6)}
          >
            Oder Pay
          </Link>
        )}

        {/* <Link
          className={active === 2 ? "active" : ""}
          to={`${url}/productadd`}
          onClick={() => activeClassOn(2)}
        >
          Product Add
        </Link> */}
      </div>

      <div className="content">
        <Switch>
          <AdminPrivateRoute path={`${path}/addadmin`}>
            <AddAdmin />
          </AdminPrivateRoute>
          <AdminPrivateRoute path={`${path}/productadd`}>
            <ProductAdd />
          </AdminPrivateRoute>
          <AdminPrivateRoute path={`${path}/manage/all/order`}>
            <ManageallOrder />
          </AdminPrivateRoute>

          <Route path={`${path}/reviewadd`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route path={`${path}/myorder`}>
            <UserOrder></UserOrder>
          </Route>

          <Route path={`${path}`}>
            <DeshboardHome></DeshboardHome>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Deshboard;
