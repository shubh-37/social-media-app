import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/thirdperson.css";

export default function ThirdPerson() {
  const { userId } = useParams();
  const { state } = useContext(postContext);
  const user = state.allUsers.find(({ username }) => username === userId);
  console.log(user);
  return (
    <div className="tp-parent">
      <Navbar />
      <div className="profile-main">
        <div className="avatar-img">
          <img src={user?.avatar} alt="" />
        </div>
        <h2>{`${user?.firstName} ${user?.lastName}`}</h2>
        <p>{`@${user?.username}`}</p>
        <p>{user?.following?.length} following</p>
        <p>{user?.followers?.length} follower</p>
        <p>Bio: {user?.bio}</p>
        <p>
          <>Portfolio-url: {user?.portfolio_link}</>
        </p>
        <ul>
          {state?.allPosts
            ?.filter(({ username }) => username === user.username)
            .map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))}
        </ul>
      </div>
      <Sidebar />
    </div>
  );
}

//onClick={() => setFollowingModal(!followingModal)}
//onClick={() => setFollowerModal(!followerModal)}
