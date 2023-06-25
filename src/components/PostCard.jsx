import { useState } from "react";
import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";
import "../css/postcard.css";

export default function PostCard({ item }) {
  const {
    state,
    likeHandler,
    dislikePostHandler,
    removeBookmarkHandler,
    bookmarkHandler,
    deletePost
  } = useContext(postContext);

  const [isOpen, setIsOpen] = useState(false);
  function changeHandler(e, postId) {
    if (e.target.value === "edit") {
      // editPost(postId)
    } else if (e.target.value === "delete") {
      deletePost(postId);
    } else {
      setIsOpen(false);
    }
  }
  return (
    <>
      <div className="heading-post">
        <h3 className="username">{item.username}</h3>
        {item.username === state.user.username && (
          <>
            {isOpen ? (
              <select
                name=""
                id=""
                onChange={(e) => changeHandler(e, item._id)}
              >
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
      <div className="post-icons">
        {item.likes.likedBy.find(
          ({ username }) => username === state.user.username
        ) ? (
          <span
            className="fa fa-heart"
            onClick={() => dislikePostHandler(item._id)}
          >
            {item.likes.likeCount}
          </span>
        ) : (
          <span className="	fa fa-heart-o" onClick={() => likeHandler(item._id)}>
            {item.likes.likeCount}
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
      </div>
    </>
  );
}
