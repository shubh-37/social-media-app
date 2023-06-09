import { useState } from "react";
import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/postcard.css";
import EditPost from "./EditPostModal";

export default function PostCard({ item }) {
  const {
    state,
    likeHandler,
    dislikePostHandler,
    removeBookmarkHandler,
    bookmarkHandler,
    deletePost,
    editPost,
    isDarkMode,
  } = useContext(postContext);

  const avatarObj = state.allUsers?.find(
    ({ username }) => username === item.username
  );
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [id, setId] = useState("");
  const [postContent, setPostContent] = useState("");
  const formattedDate = new Date(item.createdAt).toDateString();

  function changeHandler(e, postId) {
    if (e.target.value === "edit") {
      setId(postId);
      setModalOpen(true);
    } else if (e.target.value === "delete") {
      deletePost(postId);
    } else {
      setIsOpen(false);
    }
  }
  function savePost() {
    if (postContent === "") {
      editPost(item._id, item.content);
      setModalOpen(false);
      setIsOpen(false);
    } else {
      editPost(item._id, postContent);
      setModalOpen(false);
      setIsOpen(false);
    }
  }

  function saveChange(e) {
    setPostContent(e.target.value);
  }

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#0f172a" : "#dbeafe",
        color: isDarkMode ? "white" : "black",
      }}
      className="post-parent"
    >
      <div className="heading-post">
        <span className="avatar">
          <img src={avatarObj?.avatar} alt="" />
        </span>
        <h3 className="username">{item?.username}</h3>
        {item?.username === state.user?.username && (
          <>
            {isOpen ? (
              <select
                name=""
                id=""
                onChange={(e) => changeHandler(e, item._id)}
              >
                <option value="">Select one</option>
                <option value="edit">Edit</option>
                <option value="delete">Delete</option>
                <option value="go-back">Go back</option>
              </select>
            ) : (
              <span
                className="fa fa-ellipsis-v"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
              </span>
            )}
          </>
        )}
      </div>

      <p>{item.content}</p>
      <p style={{ color: "grey" }}>{formattedDate}</p>
      <div className="post-icons">
        {item.likes.likedBy.find(
          ({ username }) => username === state.user.username
        ) ? (
          <span
            className="fa fa-heart"
            onClick={() => dislikePostHandler(item._id)}
          >
            <span style={{ margin: "0.4rem" }}>{item.likes.likeCount}</span>
          </span>
        ) : (
          <span className="	fa fa-heart-o" onClick={() => likeHandler(item._id)}>
            <span style={{ margin: "0.3rem" }}>{item.likes.likeCount}</span>
          </span>
        )}

        <span className="fa fa-comment-o"></span>
        <span className="fa fa-share-alt"></span>
        {state.user?.bookmarks?.find(({ _id }) => _id === item._id) ? (
          <span
            className="fa fa-bookmark"
            onClick={() => removeBookmarkHandler(item._id)}
          ></span>
        ) : (
          <span
            className="fa fa-bookmark-o"
            onClick={() => bookmarkHandler(item._id)}
          ></span>
        )}
        {modalOpen && (
          <EditPost
            postId={id}
            editPost={savePost}
            saveChange={saveChange}
            closeModal={setModalOpen}
          />
        )}
      </div>
    </div>
  );
}
