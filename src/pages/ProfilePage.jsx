// import { useContext } from "react"
// import { authContext } from "../contexts/AuthContextProvider"
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilepage.css";

export default function Profile() {
  const { state } = useContext(postContext);
  const { logoutUser } = useContext(authContext);
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
            <li>{item.content}</li>
          ))}
        </ul>
        <button onClick={() => logoutUser()}>Logout</button>
      </div>
      <Sidebar />
    </div>
  );
}
