import axios from "axios";
import { createContext } from "react";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  async function guestLogin() {
    const guestUser = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    const response = await axios.post("/api/auth/login", guestUser);
    console.log(response.data);
  }
  return (
    <authContext.Provider value={{ guestLogin }}>
      {children}
    </authContext.Provider>
  );
}
