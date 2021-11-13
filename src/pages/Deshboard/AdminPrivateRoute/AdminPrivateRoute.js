import React from "react";
import { Redirect, Route } from "react-router-dom";
import useAuth from "../../../context/useAuth";

const AdminPrivateRoute = ({ children, ...rest }) => {
  const { user, admin, adminloadData } = useAuth();
  if (admin && adminloadData) {
    return "";
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
