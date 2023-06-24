import { useContext } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
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
              <PostCard item={item} />
            </li>
          ))}
        </ul>
      </div>

      <Sidebar />
    </div>
  );
}
