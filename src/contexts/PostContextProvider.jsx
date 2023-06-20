import { useReducer } from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
import reducer from "../Reducer";

export const postContext = createContext();

export default function PostContextProvider({ children }) {
  const token = localStorage.getItem("token");

  const [state, dispatch] = useReducer(reducer, {
    allPosts: [],
    dataRef: [],
    allUsers: [],
    user: {},
    loggedUserPosts: [],
    bookmarks: [],
  });
  const [search, setSearch] = useState("");

  const searchedUsers =
    search.length > 0
      ? state.allUsers?.filter(({ username }) =>
          username.toLowerCase().includes(search.toLowerCase())
        )
      : state.allUsers;

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
        payload: { post: data.posts, id: id },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function bookmarkHandler(id) {
    try {
      const response = await fetch(`/api/users/bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const bookmarkedPost = state.allPosts.filter((item) =>
        data.bookmarks.includes(item._id)
      );
      dispatch({ type: "BOOKMARK_POST", payload: bookmarkedPost });
    } catch (error) {
      console.log(error);
    }
  }

  async function removeBookmarkHandler(id) {
    try {
      const response = await fetch(`/api/users/remove-bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      const bookmarkedPost = state.allPosts.filter((item) =>
        data.bookmarks.includes(item._id)
      );
      dispatch({ type: "BOOKMARK_POST", payload: bookmarkedPost });
    } catch (error) {
      console.log(error);
    }
  }

  async function dislikePostHandler(id) {
    try {
      const response = await fetch(`/api/posts/dislike/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      dispatch({
        type: "DISLIKE_POST",
        payload: { post: data.posts, id: id },
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function followUser(id) {
    try {
      const response = await fetch(`api/users/follow/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      dispatch({ type: "USER", payload: data.user });
    } catch (error) {
      console.log(error);
    }
  }
  async function unfollowUser(id) {
    try {
      const response = await fetch(`api/users/unfollow/${id}/`, {
        method: "POST",
        headers: {
          authorization: token,
        },
      });
      const data = await response.json();
      dispatch({ type: "USER", payload: data.user });
    } catch (error) {
      console.log(error);
    }
  }

  async function createPost(content) {
    try {
      const response = await fetch("/api/posts/", {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postData: { content } }),
      });
      const data = await response.json();
      dispatch({ type: "GET_ALL_POSTS", payload: data.posts });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAllPosts();
    getAllUsers();
  }, []);
  return (
    <postContext.Provider
      value={{
        state,
        dispatch,
        likeHandler,
        bookmarkHandler,
        removeBookmarkHandler,
        dislikePostHandler,
        followUser,
        unfollowUser,
        createPost,
        setSearch,
        searchedUsers
      }}
    >
      {children}
    </postContext.Provider>
  );
}
