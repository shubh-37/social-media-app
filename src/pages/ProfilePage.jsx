import { useEffect } from "react";
import { useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilepage.css";
import { useState } from "react";
import ProfileModal from "../components/ProfileModal";

export default function Profile() {
  const { state, dispatch } = useContext(postContext);
  const { logoutUser } = useContext(authContext);
  const [isOpen, setIsOpen] = useState(false);
  const [editProfile, setEditProfile] = useState({});

  function saveProfile() {
    dispatch({ type: "EDIT_USER", payload: { ...state.user, ...editProfile } });
    setIsOpen(false);
  }

  function updateProfile(e) {
    console.log({ editProfile, value: e.target.value });
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
  console.log(state.user.avatar);
  return (
    <div className="profile-parent">
      <Navbar />
      <div className="profile-main">
        <img src={state.user?.avatar} alt="" />
        <h2>{`${state.user?.firstName} ${state.user?.lastName}`}</h2>
        <p>{`@${state.user?.username}`}</p>
        <p>{state.user?.following?.length} following</p>
        <p>{state.user?.followers?.length} follower</p>
        <p>
          {state.user?.bio ? <p>Bio: {state.user?.bio}</p> : <p>Add a bio</p>}
        </p>
        <p>
          {state.user?.portfolio_link ? (
            <p>Portfolio-url: {state.user?.portfolio_link}</p>
          ) : (
            <p>Add your portfolio url</p>
          )}
        </p>
        <button onClick={() => setIsOpen(true)}>Edit profile</button>
        <ul>
          {state?.loggedUserPosts?.map((item) => (
            <li key={item._id}>{item.content}</li>
          ))}
        </ul>
        <button onClick={() => logoutUser()}>Logout</button>
      </div>
      <Sidebar />
      {isOpen && (
        <ProfileModal
          closeModal={setIsOpen}
          updateProfile={updateProfile}
          saveProfile={saveProfile}
        />
      )}
    </div>
  );
}
