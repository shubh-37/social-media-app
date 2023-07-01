import { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/thirdperson.css";
import FollowModal from "../components/FollowModal";

export default function ThirdPerson() {
  const { userId } = useParams();
  const {
    state,
    followerModal,
    followingModal,
    setFollowerModal,
    setFollowingModal,
  } = useContext(postContext);
  const user = state.allUsers.find(({ username }) => username === userId);
  return (
    <div className="tp-parent">
      <Navbar />
      <div className="profile-main">
        <div style={{ textAlign: "center" }}>
          <div className="avatar-img">
            <img src={user?.avatar} alt="" />
          </div>
          <h2>{`${user?.firstName} ${user?.lastName}`}</h2>
          <p>{`@${user?.username}`}</p>
          <p
            onClick={() => setFollowingModal(!followingModal)}
            style={{ cursor: "pointer" }}
          >
            {user?.following?.length} following
          </p>
          <p
            onClick={() => setFollowerModal(!followerModal)}
            style={{ cursor: "pointer" }}
          >
            {user?.followers?.length} follower
          </p>
          <p>Bio: {user?.bio}</p>
          <p>
            <>Portfolio-url: {user?.portfolio_link}</>
          </p>
        </div>

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
      {followerModal && (
        <FollowModal closeModal={setFollowerModal} follower={true} />
      )}
      {followingModal && (
        <FollowModal closeModal={setFollowingModal} follower={false} />
      )}
    </div>
  );
}
