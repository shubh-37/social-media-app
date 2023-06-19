import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function Bookmark() {
  const { state, likeHandler } = useContext(postContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div>
      <h3>
        {state.bookmarks.length === 0 && <p>There are no bookmarked posts</p>}
      </h3>
      <ul>
        {state?.bookmarks?.map((item) => (
          <li key={item._id}>
            <h3>{item.username}</h3>
            <p>{item.content}</p>
            <div className="post-icons">
              {item.likes.likedBy.includes(user.username) ? (
                <span className="fa fa-heart">{item.likes.likeCount}</span>
              ) : (
                <span
                  className="	fa fa-heart-o"
                  onClick={() => likeHandler(item._id)}
                >
                  {item.likes.likeCount}
                </span>
              )}

              <span className="fa fa-comment-o"></span>
              <span className="fa fa-share-alt"></span>
              <span className="fa fa-bookmark-o"></span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
