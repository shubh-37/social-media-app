import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/createpost.css";
export default function CreatePost({ closeModal }) {
  const { isDarkMode, setPostContent, createPost, postContent } =
    useContext(postContext);
  function textChange(e) {
    setPostContent(e.target.value);
  }
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
      <div className="m-bg">
        <div className="m-con">
          <div className="close-btn">
            <button onClick={() => closeModal(false)}>X</button>
          </div>
          <div className="m-hdr">
            <h3>Let your thoughts flow...</h3>
          </div>

          <div className="m-body">
            <div
              className="create-post"
              style={{
                backgroundColor: isDarkMode ? "#bfdbfe" : "#dbeafe",
                color: isDarkMode ? "black" : "",
              }}
            >
              <label htmlFor="new-post"></label>
              <input
                onChange={(e) => textChange(e)}
                type="text"
                name=""
                id="new-post"
                placeholder="What is Happening!?"
                value={postContent}
                style={{
                  backgroundColor: isDarkMode ? "#bfdbfe" : "#dbeafe",
                  color: isDarkMode ? "black" : "",
                }}
              />
              <div
                style={{
                  borderTop: "1px solid",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span className="fa fa-image"></span>
                  <span className="fa fa-smile-o"></span>
                </div>

                <button
                  className="create-post-btn"
                  onClick={() => {
                    createPost(postContent);
                    setPostContent("");
                    closeModal(false)
                  }}
                  style={{ margin: "0.5rem", fontSize: "large" }}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <div className="m-foot"></div>
        </div>
      </div>
    </>
  );
}
