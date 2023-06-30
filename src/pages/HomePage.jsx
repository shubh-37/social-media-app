import { useState } from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/homepage.css";

export default function HomePage() {
  const { state, createPost, recentPosts, dispatch, isDarkMode } = useContext(postContext);
  const [postContent, setPostContent] = useState("");
  function textChange(e) {
    setPostContent(e.target.value);
  }

  function trendHandler() {
    dispatch({ type: "TREND" });
  }
  function recentHandler() {
    dispatch({ type: "RECENT" });
  }
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
      <h2 style={{margin: "1.5rem 1rem"}}>Home</h2>
        <div className="create-post" style={{backgroundColor: isDarkMode ? "#bfdbfe": "#dbeafe", color: isDarkMode ? "black" : ""}}>
          <label htmlFor="new-post"></label>
          <input
            onChange={(e) => textChange(e)}
            type="text"
            name=""
            id="new-post"
            placeholder="What is Happening!?"
            value={postContent}
            style={{backgroundColor: isDarkMode ? "#bfdbfe": "#dbeafe", color: isDarkMode ? "black" : ""}}
          />
          <div style={{borderTop : "1px solid"}}>
            <span className="fa fa-image"></span>
            <span className="fa fa-smile-o"></span>
            <button
              className="create-post-btn"
              onClick={() => {
                createPost(postContent);
                setPostContent("");
              }}
            >
              Post
            </button>
          </div>
        </div>
        <div className="latest-post">
          <div className="sort-btn">
            <button
              onClick={() => trendHandler()}
              style={{
                backgroundColor: state.trend && isDarkMode ? "#bfdbfe" : "",
                color: state.trend && isDarkMode ? "black" : "",
              }}
            >
              {state.trend ? "Showing trendy" : "Trending"}
            </button>
            <button
              onClick={() => recentHandler()}
              style={{
                backgroundColor: state.recent && isDarkMode ? "#bfdbfe" : "",
                color: state.recent && isDarkMode ? "black" : "",
              }}
            >
              {state.recent ? "Showing recent" : "Recent posts"}
            </button>
          </div>
          <ul>
            {recentPosts.map((item) => (
              <li key={item._id}>
                <PostCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}
