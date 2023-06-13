import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="home-navigate">
      <NavLink to="/">
        <span className="fa fa-home">Home</span>
      </NavLink>
      <NavLink to="/explore">
        <span className="fa fa-rocket">Explore</span>
      </NavLink>
      <NavLink to="/bookmark">
        <span className="fa fa-bookmark-o">Bookmarks</span>
      </NavLink>
      <NavLink to="/profile">
        <span className="fa fa-user-o">Profile</span>
      </NavLink>
      <button>Create New post</button>
    </div>
  );
}
