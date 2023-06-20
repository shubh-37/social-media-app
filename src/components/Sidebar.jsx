import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function Sidebar() {
  const { state, followUser, unfollowUser, setSearch, searchedUsers } =
    useContext(postContext);
  return (
    <div className="sidebar">
      <label htmlFor="search">Search</label>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        name=""
        id="search"
        placeholder="Search people..."
      />
      <div>
        <h2>Who to follow?</h2>

        <ul>
          {searchedUsers
            ?.filter((item) => item.username !== state.user.username)
            .map((item) => (
              <li key={item._id}>
                {state.user?.following?.find(
                  ({ username }) => username === item.username
                ) ? (
                  <>
                    {item.username}
                    <button>
                      <span className="test">Following</span>
                      <span
                        className="test2"
                        onClick={() => unfollowUser(item._id)}
                      >
                        Unfollow
                      </span>
                    </button>
                  </>
                ) : (
                  <>
                    {item.username}
                    <button onClick={() => followUser(item._id)}>
                      Follow
                    </button>{" "}
                  </>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
