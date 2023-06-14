// import { useContext } from "react"
// import { authContext } from "../contexts/AuthContextProvider"
import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilepage.css";

export default function Profile(){
  const { state } = useContext(postContext);
  const user = localStorage.getItem("user");
  const userData = JSON.parse(user);
  console.log(userData);
  return (
    <div className="profile-parent">
      <Navbar />
      <div className="profile-main">
        <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
        <p>{`@${userData.username}`}</p>
        <p>{userData.following.length} following</p>
        <p>{userData.followers.length} follower</p>
        <ul>
          {
            state?.loggedUserPosts?.map(item => (
              <li>
                {item.content}
              </li>
            ))
          }
        </ul>
      </div>
      <Sidebar />
    </div>
  )
}