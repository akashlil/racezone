import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../context/useAuth";
import AddAdmin from "../AddAdmin/AddAdmin";
import AdminPrivateRoute from "../AdminPrivateRoute/AdminPrivateRoute";
import ManageallOrder from "../ManageallOrder/ManageallOrder";
import ProductAdd from "../ProductAdd/ProductAdd";
import Reviews from "../User/Reviews/Reviews";
import UserOrder from "../User/UserOrder/UserOrder";
import "./Deshboard.css";

const Deshboard = () => {
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
          <div className="px-2">
            <h1>Deshboard</h1>
          </div>
          <div className="px-5">
            {user.email ? (
              <button className="btn btn-info" onClick={logOut}>
                logOut
              </button>
            ) : (
              <Link className="btn btn-info" to={`/login`}>
                Login
              </Link>
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
            className={active === 5 ? "active" : ""}
            to={`${url}/manage/all/order`}
            onClick={() => activeClassOn(5)}
          >
            Manage All Order
          </Link>
        )}
        {!admin && (
          <Link
            className={active === 3 ? "active" : ""}
            to={`${url}/reviewadd`}
            onClick={() => activeClassOn(3)}
          >
            Review Add
          </Link>
        )}

        {!admin && (
          <Link
            className={active === 4 ? "active" : ""}
            to={`${url}/myorder`}
            onClick={() => activeClassOn(4)}
          >
            My Order
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
          <Route path={`${path}/reviewadd`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/myorder`}>
            <UserOrder></UserOrder>
          </Route>
          <AdminPrivateRoute path={`${path}/addadmin`}>
            <AddAdmin />
          </AdminPrivateRoute>
          <AdminPrivateRoute path={`${path}/productadd`}>
            <ProductAdd />
          </AdminPrivateRoute>
          <AdminPrivateRoute path={`${path}/manage/all/order`}>
            <ManageallOrder />
          </AdminPrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Deshboard;
