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
  } = useContext(postContext);
  return (
    <>
      <div className="heading-post">
        <h3 className="username">{item.username}</h3>
        {item.username === state.user.username && (
          <span className="fa fa-ellipsis-v"></span>
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
        {state.user?.bookmarks?.find(
          ({ _id }) => _id === item._id
        ) ? (
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
