import { useContext, useEffect } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilemodal.css";

export default function ProfileModal({
  closeModal,
  updateProfile,
  saveProfile,
  setAvatar,
}) {
  const avatarLinks = [
    "https://i.ibb.co/jRVZ3Xp/avataaars-6.png",
    "https://i.ibb.co/4KNJz5D/avataaars-5.png",
    "https://i.ibb.co/Z8Sy1Gp/avataaars-4.png",
    "https://i.ibb.co/2nFm3P3/avataaars-3.png",
    "https://i.ibb.co/VTCJfQb/avataaars.png",
    "https://i.ibb.co/Ntbw7Lb/avataaars-2.png",
  ];
  const { state } = useContext(postContext);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          left: "0",
          opacity: "0.5",
          backgroundColor: "grey",
        }}
      ></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="modal-header">
            <h3 style={{ color: "black" }}>Edit your personal information</h3>
          </div>
          <div className="modal-body">
            <ul className="avatars">
              {avatarLinks.map((item) => (
                <li style={{ cursor: "pointer" }}>
                  {" "}
                  <img src={item} alt="" onClick={() => setAvatar(item)} />
                </li>
              ))}
            </ul>
            <label htmlFor="" style={{ color: "black" }}>
              Edit your first name:{" "}
            </label>
            <input
              type="text"
              name="firstName"
              id=""
              defaultValue={state.user.firstName}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="" style={{ color: "black" }}>
              Edit your last name:{" "}
            </label>
            <input
              type="text"
              name="lastName"
              id=""
              defaultValue={state.user.lastName}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="" style={{ color: "black" }}>
              Add a bio
            </label>
            <input
              type="text"
              name="bio"
              id=""
              defaultValue={state.user.bio}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="" style={{ color: "black" }}>
              Add your portfolio link
            </label>
            <input
              type="text"
              name="portfolio_link"
              id=""
              defaultValue={state.user.portfolio_link}
              onChange={(e) => updateProfile(e)}
            />
          </div>
          <div className="modal-footer">
            <button onClick={() => closeModal(false)} className="cancel-btn">
              Cancel
            </button>
            <button onClick={() => saveProfile()}>Edit Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
