import { useReducer } from "react";
import { createContext, useEffect } from "react";
import reducer from "../Reducer";

export const postContext = createContext();

export default function PostContextProvider({ children }) {
  const token = localStorage.getItem("token");
  const userData = JSON.parse(localStorage.getItem("user"));

  const [state, dispatch] = useReducer(reducer, {
    allPosts: [],
    dataRef: [],
    allUsers: [],
    loggedUserPosts: [],
    bookmarks: []
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

  async function likeHandler(id) {
    try {
      const response = await fetch(`/api/posts/like/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      dispatch({
        type: "LIKE_POST",
        payload: { post: data.posts, id: id, user: userData.username },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function bookmarkHandler(id){
    try {
      const response = await fetch(`/api/users/bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        }
      });
      const data = await response.json();
      const bookmarkedPost = state.allPosts.filter(item => data.bookmarks.includes(item._id));
      dispatch({ type: "BOOKMARK_POST", payload: bookmarkedPost});
    } catch (error) {
      console.log(error);
    }
  }

  async function removeBookmarkHandler(id){
    try {
      const response = await fetch(`/api/users/remove-bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: token
        }
      });
      const data = await response.json();
      const bookmarkedPost = state.allPosts.filter(item => data.bookmarks.includes(item._id));
      dispatch({ type: "BOOKMARK_POST", payload: bookmarkedPost});
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);
  return (
    <postContext.Provider value={{ state, dispatch, likeHandler, bookmarkHandler, removeBookmarkHandler }}>
      {children}
    </postContext.Provider>
  );
}
