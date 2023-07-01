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
        <h2 className="bookmark-heading">Bookmarks</h2>
        <h3 className="no-bookmark">
          {state.user?.bookmarks?.length === 0 && (
            "No bookmarks..."
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
