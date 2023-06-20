import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/profilemodal.css"

export default function ProfileModal() {
  const { state } = useContext(postContext);
  return (
    <>
      <div></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="close-btn">
            <button>X</button>
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
            />
            <label htmlFor="">Edit your last name: </label>
            <input
              type="text"
              name="lastName"
              id=""
              defaultValue={state.user.lastName}
            />
            <label htmlFor="">Add a bio</label>
            <input type="text" name="bio" id="" defaultValue={state.user.bio} />
            <label htmlFor="">Add your portfolio link</label>
            <input
              type="text"
              name="portfolio_link"
              id=""
              defaultValue={state.user.portfolio_link}
            />
          </div>
          <div className="modal-footer">
            <button>Cancel</button>
            <button>Edit Profile</button>
          </div>
        </div>
      </div>
    </>
  );
}
