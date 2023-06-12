import { useReducer } from "react";
import { createContext, useEffect } from "react";
import reducer from "../Reducer";

export const postContext = createContext();

export default function PostContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    allPosts: [],
    dataRef: [],
    allUsers: [],
  });
  async function getAllPosts() {
    try {
      const response = await fetch("/api/posts");
      const data = await response.json();
      dispatch({ type: "GET_ALL_POSTS", payload: data.posts });
    } catch (error) {
      console.log(error);
    }
  }

  async function getAllUsers() {
    try {
      const response = await fetch("/api/users");
      const data = await response.json();
      dispatch({ type: "GET_ALL_USERS", payload: data.users });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);
  return (
    <postContext.Provider value={{ state }}>{children}</postContext.Provider>
  );
}
