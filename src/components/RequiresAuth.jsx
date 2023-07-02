import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";

export default function RequiresAuth({ children }) {
  const {isLogin} = useContext(authContext);
  return isLogin ? children : <Navigate to="/landing" />;
}
