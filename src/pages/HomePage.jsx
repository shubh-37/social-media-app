import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/homepage.css";

export default function HomePage() {
  const { state } = useContext(postContext);
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
                  <span className="	fa fa-heart-o"></span>
                  <span className="fa fa-comment-o"></span>
                  <span className="fa fa-share-alt"></span>
                  <span className="fa fa-bookmark-o"></span>
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
