import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function HomePage() {
  const { state } = useContext(postContext);
  return (
    <div>
      <div className="home-navigate">
        <span className="fa fa-home">Home</span>
        <span className="fa fa-rocket">Explore</span>
        <span className="fa fa-bookmark-o">Bookmarks</span>
        <span className="fa fa-user-o">Profile</span>
        <button>Create New post</button>
      </div>
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
          <h2>Latest Posts</h2>
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
      </div>
      <div className="sidebar">
        <label htmlFor="search">Search</label>
        <input type="text" name="" id="search" placeholder="Search people, post, anything" />
        <div>
          <h2>Who to follow?</h2>
        </div>
      </div>
    </div>
  );
}
