import { useContext } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/explorepage.css";

export default function Explore() {
  const { state } = useContext(postContext);

  return (
    <div className="explore-parent">
      <Navbar />
      <div className="explore-main">
        <h1>this is the explore page</h1>
        <h2>Showing all posts</h2>
        <ul>
          {state?.allPosts?.map((item) => (
            <li key={item._id}>
              <h3>{item.username}</h3>
              <p>{item.content}</p>
              <span className="	fa fa-heart-o"></span>
              <span className="fa fa-comment-o"></span>
              <span className="fa fa-share-alt"></span>
              <span className="fa fa-bookmark-o"></span>
            </li>
          ))}
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
