import { useContext } from "react";
import { Link } from "react-router-dom";
import { postContext } from "../contexts/PostContextProvider";
import "../css/sidebar.css";

export default function Sidebar() {
  const {
    state,
    followUser,
    unfollowUser,
    setSearch,
    searchedUsers,
    isDarkMode,
  } = useContext(postContext);
  return (
    <div className="sidebar">
      <label htmlFor="search"></label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name=""
        id="search"
        placeholder="Search people..."
      />
      <div>
        <h2>Who to follow?</h2>

        <ul style={{borderTop: "1px solid"}}>
          {searchedUsers
            ?.filter((item) => item.username !== state.user?.username)
            .map((item) => (
              <li key={item._id}>
                {state.user?.following?.find(
                  ({ username }) => username === item.username
                ) ? (
                  <span className="following-user">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: isDarkMode ? "white" : "black",
                        fontSize: "larger",
                      }}
                      to={`/tp/${item.username}`}
                    >
                      {item.username}
                    </Link>

                    <button className="create-post-btn">
                      <span className="test">Following</span>
                      <span
                        className="test2"
                        onClick={() => unfollowUser(item._id)}
                      >
                        Unfollow
                      </span>
                    </button>
                  </span>
                ) : (
                  <span className="follow-user">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: isDarkMode ? "white" : "black",
                        fontSize: "larger",
                      }}
                      to={`/tp/${item.username}`}
                    >
                      {item.username}
                    </Link>
                    <button onClick={() => followUser(item._id)} className="create-post-btn">Follow</button>{" "}
                  </span>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
