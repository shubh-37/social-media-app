import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function FollowModal({ closeModal, follower }) {
  const { state, isDarkMode } = useContext(postContext);
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          opacity: "0.5",
          backgroundColor: "grey",
          top: "0",
          left: "0",
        }}
      ></div>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-header">
            <div className="close-btn">
              <button onClick={() => closeModal(false)}>X</button>
            </div>
            <h3
              style={{
                color: "black",
                marginTop: "0",
                borderBottom: "1px solid",
              }}
            >
              {follower ? "Followers" : "Following"}
            </h3>
          </div>
          <div className="modal-body">
            <ul>
              {follower
                ? state.user.followers.map((item) => (
                    <li
                      style={{
                        display: "flex",
                        margin: "0.5rem",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          color: isDarkMode ? "black" : "",
                          fontSize: "large",
                        }}
                      >{`${item.firstName} ${item.lastName}`}</p>
                    </li>
                  ))
                : state.user.following.map((item) => (
                    <li
                      style={{
                        display: "flex",
                        margin: "0.5rem",
                        justifyContent: "space-between",
                      }}
                    >
                      <p
                        style={{
                          color: isDarkMode ? "black" : "",
                          fontSize: "large",
                        }}
                      >{`${item.firstName} ${item.lastName}`}</p>

                      <button className="create-post-btn">Following</button>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
