import axios from "axios";
// import { useEffect } from "react";
import { createContext } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  // const { state, dispatch } = useContext(postContext);
  // const userData = localStorage.getItem("user");

  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    try {
      const response = await axios.post("/api/auth/login", guestUser);
      const value = JSON.stringify(response.data.foundUser);
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", value);
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
