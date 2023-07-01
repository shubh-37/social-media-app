import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilepage.css";
import { useState } from "react";
import ProfileModal from "../components/ProfileModal";
import PostCard from "../components/PostCard";
import FollowModal from "../components/FollowModal";
import { Link } from "react-router-dom";

export default function Profile() {
  const {
    state,
    dispatch,
    isDarkMode,
    followerModal,
    followingModal,
    setFollowerModal,
    setFollowingModal,
  } = useContext(postContext);
  const [isOpen, setIsOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({});
  const [avatar, setAvatar] = useState("");

  function saveProfile() {
    dispatch({ type: "EDIT_USER", payload: { ...state.user, ...editProfile } });
    dispatch({ type: "UPDATE_USERS" });
    setIsOpen(false);
  }

  function withImage(url) {
    setAvatar(url);
    setEditProfile({
      ...editProfile,
      avatar: url,
    });
  }

  function updateProfile(e) {
    if (e.target.value)
      setEditProfile({
        ...editProfile,
        [e.target.name]: e.target.value,
      });
  }
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
        <div style={{ textAlign: "center" }}>
          <div className="avatar-img">
            <img src={state.user?.avatar} alt="" />
          </div>
          <h2>{`${state.user?.firstName} ${state.user?.lastName}`}</h2>
          <p>{`@${state.user?.username}`}</p>
          <p
            onClick={() => setFollowingModal(!followingModal)}
            style={{ cursor: "pointer" }}
          >
            {state.user?.following?.length} following
          </p>
          <p
            onClick={() => setFollowerModal(!followerModal)}
            style={{ cursor: "pointer" }}
          >
            {state.user?.followers?.length} follower
          </p>
          <p>
            {state.user?.bio ? <>Bio: {state.user?.bio} </> : <>Add a bio</>}
          </p>
          <p>
            {state.user?.portfolio_link ? (
              <>
                Portfolio-url:{" "}
                <Link
                  style={{ color: isDarkMode ? "white" : "black" }}
                  to={state.user?.portfolio_link}
                >
                  {state.user?.portfolio_link}
                </Link>
              </>
            ) : (
              <>Add your portfolio url</>
            )}
          </p>
          <button onClick={() => setIsOpen(true)} className="create-post-btn">
            Edit profile
          </button>
        </div>
        <ul>
          {state?.allPosts
            .filter(({ username }) => username === state.user?.username)
            ?.map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))}
        </ul>
      </div>
      <Sidebar />
      {isOpen && (
        <ProfileModal
          closeModal={setIsOpen}
          updateProfile={updateProfile}
          saveProfile={saveProfile}
          setAvatar={withImage}
        />
      )}
      {followerModal && (
        <FollowModal closeModal={setFollowerModal} follower={true} />
      )}
      {followingModal && (
        <FollowModal closeModal={setFollowingModal} follower={false} />
      )}
    </div>
  );
}
