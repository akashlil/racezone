import { useContext } from "react";
import { addProvicer } from "./AuthProvider";

const useAuth = () => {
  return useContext(addProvicer);
};

export default useAuth;
