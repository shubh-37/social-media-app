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

  async function signUpUser(user) {
    try {
      const response = await axios.post("api/auth/signup", user);
      if (response.data.encodedToken) {
        localStorage.setItem("token", response.data.encodedToken);
        dispatch({
          type: "NEW_USER",
          payload: { user: response.data.createdUser },
        });
        setIslogin(true);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser(user) {
    try {
      const response = await axios.post("api/auth/login", user);
      if (response.status === 200) {
        if (response.data.encodedToken) {
          localStorage.setItem("token", response.data.encodedToken);
          dispatch({
            type: "USER",
            payload: { user: response.data.foundUser },
          });
          setIslogin(true);
          navigate("/profile");
          return 'success';
        }
      }
    } catch (error) {
      if (error.response.status === 500) {
        console.log(error.response);
      } else if (error.response.status === 404) {
          return 'failure';
      }
    }
  }

  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    try {
      const response = await axios.post("/api/auth/login", guestUser);
      if (response.data.encodedToken) {
        console.log(response);
        localStorage.setItem("token", response.data.encodedToken);
        dispatch({ type: "USER", payload: { user: response.data.foundUser } });
        setIslogin(true);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function logoutUser() {
    dispatch({ type: "LOGOUT_USER" });
    localStorage.removeItem("token");
    setIslogin(false);
  }
  return (
    <authContext.Provider
      value={{ guestLogin, isLogin, logoutUser, signUpUser, loginUser }}
    >
      {children}
    </authContext.Provider>
  );
}
