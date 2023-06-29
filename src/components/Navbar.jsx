import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { postContext } from "../contexts/PostContextProvider";

export default function Navbar() {
  const { isDarkMode } = useContext(postContext);
  return (
    <div className="home-navigate">
      <div style={{ marginLeft: "5rem" }}>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/"
        >
          <span
            style={{ border: isDarkMode ? "1px solid #2563eb" : "" }}
            className="fa fa-home"
          >
            {" "}
            Home
          </span>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/explore"
        >
          <span
            style={{ border: isDarkMode ? "1px solid #2563eb" : "" }}
            className="fa fa-rocket"
          >
            {" "}
            Explore
          </span>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/bookmark"
        >
          <span
            style={{ border: isDarkMode ? "1px solid #2563eb" : "" }}
            className="fa fa-bookmark-o"
          >
            {" "}
            Bookmarks
          </span>
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/profile"
        >
          <span
            style={{ border: isDarkMode ? "1px solid #2563eb" : "" }}
            className="fa fa-user-o"
          >
            {" "}
            Profile
          </span>
        </NavLink>
        <button className="create-post-btn">Create New post</button>

        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
        >
          <button className="login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
}
