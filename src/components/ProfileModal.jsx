import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilemodal.css";

export default function ProfileModal({
  closeModal,
  updateProfile,
  saveProfile,
}) {
  const { state } = useContext(postContext);
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
            <h3>Edit your personal information</h3>
          </div>
          <div className="modal-body">
            <label htmlFor="">Edit your first name: </label>
            <input
              type="text"
              name="firstName"
              id=""
              defaultValue={state.user.firstName}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="">Edit your last name: </label>
            <input
              type="text"
              name="lastName"
              id=""
              defaultValue={state.user.lastName}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="">Add a bio</label>
            <input
              type="text"
              name="bio"
              id=""
              defaultValue={state.user.bio}
              onChange={(e) => updateProfile(e)}
            />
            <label htmlFor="">Add your portfolio link</label>
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
