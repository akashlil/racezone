import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const AdminPrivateRoute = ({ children, ...rest }) => {
  const { user, admin, loadData } = useAuth();
  if (!admin) {
    return "loding...";
  } else if (loadData) {
    return "loding...";
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRoute;
