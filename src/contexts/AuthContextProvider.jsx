import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";
import { postContext } from "./PostContextProvider";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const { state, dispatch } = useContext(postContext);

  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    try {
      const response = await axios.post("/api/auth/login", guestUser);
      const value = JSON.stringify(response.data.foundUser);
      localStorage.setItem("user", value);
      const posts = state?.allPosts?.filter(
        ({ username }) => username === response.data.foundUser.username
      );
      dispatch({ type: "ADD_USER_POST", payload: posts });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <authContext.Provider value={{ guestLogin }}>
      {children}
    </authContext.Provider>
  );
}
