import { useContext } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import Sidebar from "../components/Sidebar";
import { postContext } from "../contexts/PostContextProvider";
import "../css/bookmarkpage.css";

export default function Bookmark() {
  const { state } = useContext(postContext);
  return (
    <div className="bookmark-parent">
      <Navbar />
      <div className="bookmark-main">
        <h2>This is the bookmark page</h2>
        <h3>
          {state.user?.bookmarks?.length === 0 && (
            <p>There are no bookmarked posts</p>
          )}
        </h3>
        <ul>
          {state.user?.bookmarks?.map((item) => (
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
