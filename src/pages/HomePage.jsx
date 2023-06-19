import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/homepage.css";

export default function HomePage() {
  const { state, likeHandler, bookmarkHandler, removeBookmarkHandler, dislikePostHandler } =
    useContext(postContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="create-post">
          <label htmlFor="new-post"></label>
          <input
            type="text"
            name=""
            id="new-post"
            placeholder="What is Happening!?"
          />
          <div>
            <span className="fa fa-image"></span>
            <span className="fa fa-smile-o"></span>
            <button>Post</button>
          </div>
        </div>
        <div className="latest-post">
          <h2>Will show posts of the following and self</h2>
          <ul>
            {state?.allPosts?.map((item) => (
              <li key={item._id}>
                <h3>{item.username}</h3>
                <p>{item.content}</p>
                <div className="post-icons">
                  {item.likes.likedBy.find(({ username }) => username === user.username) ? (
                    <span className="fa fa-heart" onClick={() => dislikePostHandler(item._id)}>{item.likes.likeCount}</span>
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
      </div>
      <Sidebar />
    </div>
  );
}
