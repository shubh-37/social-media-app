import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function Sidebar() {
  const { state, followUser } = useContext(postContext);
  return (
    <div className="sidebar">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name=""
        id="search"
        placeholder="Search people, post, anything"
      />
      <div>
        <h2>Who to follow?</h2>
        <button>
          <span className="test">Following</span>
          <span className="test2">Unfollow</span>
        </button>
        <ul>
          {state?.allUsers?.map((item) => (
            <li key={item._id}>
              {item.username}
              <button onClick={() => followUser(item._id)}>Follow</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
