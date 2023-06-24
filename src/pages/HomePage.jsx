import { useState } from "react";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/homepage.css";

export default function HomePage() {
  const { state, createPost } = useContext(postContext);
  const [postContent, setPostContent] = useState("");
  function textChange(e) {
    setPostContent(e.target.value);
  }
  return (
    <div className="home">
      <Navbar />
      <div className="main-content">
        <div className="create-post">
          <label htmlFor="new-post"></label>
          <input
            onChange={(e) => textChange(e)}
            type="text"
            name=""
            id="new-post"
            placeholder="What is Happening!?"
            value={postContent}
          />
          <div>
            <span className="fa fa-image"></span>
            <span className="fa fa-smile-o"></span>
            <button
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
          <h2>Will show posts of the following and self</h2>
          <ul>
            {state?.allPosts?.map((item) => (
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
