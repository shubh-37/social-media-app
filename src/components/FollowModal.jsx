import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function FollowModal({ closeModal, follower }) {
  const { state } = useContext(postContext);
  return (
    <>
      <div></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            <div className="close-btn">
              <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h3>{follower ? "Followers" : "Following"}</h3>
          </div>
          <div className="modal-body">
            <ul>
              {follower
                ? state.user.followers.map((item) => (
                    <li>
                      <p>{`${item.firstName} ${item.lastName}`}</p>
                    </li>
                  ))
                : state.user.following.map((item) => (
                    <li>
                      <p>{`${item.firstName} ${item.lastName}`}</p>

                      <button>Following</button>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
