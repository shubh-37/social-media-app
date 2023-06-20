import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { postContext } from "./PostContextProvider";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const { dispatch } = useContext(postContext);
  const [isLogin, setIslogin] = useState(false);
  const navigate = useNavigate();

  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    try {
      const response = await axios.post("/api/auth/login", guestUser);
      if (response.data.encodedToken) {
        localStorage.setItem("token", response.data.encodedToken);
        dispatch({ type: "USER", payload: response.data.foundUser });
        setIslogin(true);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIslogin(false);
  }
  return (
    <authContext.Provider value={{ guestLogin, isLogin, logoutUser }}>
      {children}
    </authContext.Provider>
  );
}
