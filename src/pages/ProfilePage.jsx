// import { useContext } from "react"
// import { authContext } from "../contexts/AuthContextProvider"
import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilepage.css";

export default function Profile() {
  const { state, dispatch } = useContext(postContext);
  const { logoutUser } = useContext(authContext);

  useEffect(() => {
    (async function getUserPosts() {
      try {
        const response = await axios(`/api/posts/user/${state.user?.username}`);
        dispatch({ type: "ADD_USER_POST", payload: response.data.posts });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="profile-parent">
      <Navbar />
      <div className="profile-main">
        <h2>{`${state.user?.firstName} ${state.user?.lastName}`}</h2>
        <p>{`@${state.user?.username}`}</p>
        <p>{state.user?.following?.length} following</p>
        <p>{state.user?.followers?.length} follower</p>
        <ul>
          {state?.loggedUserPosts?.map((item) => (
            <li key={item._id}>{item.content}</li>
          ))}
        </ul>
        <button onClick={() => logoutUser()}>Logout</button>
      </div>
      <Sidebar />
    </div>
  );
}
