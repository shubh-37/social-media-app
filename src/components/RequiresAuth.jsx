import { Navigate } from "react-router-dom";

export default function RequiresAuth({ children }) {
  const encodedToken = localStorage.getItem("token");
  return encodedToken ? children : <Navigate to="/landing" />;
}
