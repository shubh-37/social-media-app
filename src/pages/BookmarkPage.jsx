import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/bookmarkpage.css";

export default function Bookmark() {
  const { state, likeHandler, removeBookmarkHandler, bookmarkHandler } =
    useContext(postContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="bookmark-parent">
      <Navbar />
      <div className="bookmark-main">
        <h2>This is the bookmark page</h2>
        <h3>
          {state.bookmarks.length === 0 && <p>There are no bookmarked posts</p>}
        </h3>
        <ul>
          {state?.bookmarks?.map((item) => (
            <li key={item._id}>
              {console.log(item)}
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
                {state.bookmarks.includes(item) ? (
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
            </li>
          ))}
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
