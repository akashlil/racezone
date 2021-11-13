import React from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const addProvicer = createContext(null);
const AuthProvider = ({ children }) => {
  const allData = useFirebase();
  return (
    <addProvicer.Provider value={allData}>{children}</addProvicer.Provider>
  );
};

export default AuthProvider;
