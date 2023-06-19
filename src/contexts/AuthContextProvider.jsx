import axios from "axios";
import { useContext } from "react";
// import { useEffect } from "react";
import { createContext } from "react";
import { postContext } from "./PostContextProvider";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const { dispatch } = useContext(postContext);

  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    try {
      const response = await axios.post("/api/auth/login", guestUser);
      localStorage.setItem("token", response.data.encodedToken);
      dispatch({type: "USER", payload: response.data.foundUser});
    } catch (error) {
      console.log(error);
    }
  }
  // async function getUserPosts(username) {
  //   try {
  //     const response = await axios(`/api/posts/user/${username}`);
  //     // console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   getUserPosts(userData.username);
  // }, [])
  return (
    <authContext.Provider value={{ guestLogin }}>
      {children}
    </authContext.Provider>
  );
}
