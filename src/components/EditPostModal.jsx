import { useEffect } from "react";
import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/editpost.css";

export default function EditPost({
  postId,
  closeModal,
  saveProfile,
  saveChange,
}) {
  const { state } = useContext(postContext);
  const post = state.loggedUserPosts.find(({ _id }) => _id === postId);
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
          <div className="modal-header">
            <div className="close-btn">
              <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h3>Edit Post</h3>
          </div>
          <div className="modal-body">
            <div className="avatar-img">
              <img src={state.user.avatar} alt="" />
            </div>

            <textarea
              name="content"
              id=""
              cols="10"
              rows="5"
              defaultValue={post.content}
              className="edit"
              onChange={(e) => saveChange(e)}
            ></textarea>
          </div>
          <div className="modal-footer">
            <button onClick={() => closeModal(false)} className="cancel-btn">
              Cancel
            </button>
            <button onClick={() => saveProfile()}>Edit post</button>
          </div>
        </div>
      </div>
    </>
  );
}
