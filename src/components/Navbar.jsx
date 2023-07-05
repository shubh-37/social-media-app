import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/navbar.css";
import { postContext } from "../contexts/PostContextProvider";
import { authContext } from "../contexts/AuthContextProvider";
import CreatePost from "./CreatePostModal.jsx";
export default function Navbar() {
  const { isDarkMode } = useContext(postContext);
  const { isLogin, logoutUser } = useContext(authContext);
  const [isPostOpen, setIsPostOpen] = useState(false);
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
          {({ isActive }) => (
            <span
              className="fa fa-home"
              style={{
                border: isDarkMode ? "1px solid #2563eb" : "",
                backgroundColor: isActive ? "#3b82f6" : "",
              }}
            >{" "}
              Home
            </span>
          )}
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/explore"
        >
          {({ isActive }) => (
            <span
              className="fa fa-rocket"
              style={{
                border: isDarkMode ? "1px solid #2563eb" : "",
                backgroundColor: isActive ? "#3b82f6" : "",
              }}
            >{" "}
              Explore
            </span>
          )}
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/bookmark"
        >
          {({ isActive }) => (
            <span
              className="fa fa-bookmark-o"
              style={{
                border: isDarkMode ? "1px solid #2563eb" : "",
                backgroundColor: isActive ? "#3b82f6" : "",
              }}
            >{" "}
              Bookmarks
            </span>
          )}
        </NavLink>
        <NavLink
          style={{
            textDecoration: "none",
            color: isDarkMode ? "white" : "black",
          }}
          to="/profile"
        >
          {({ isActive }) => (
            <span
              className="fa fa-user-o"
              style={{
                border: isDarkMode ? "1px solid #2563eb" : "",
                backgroundColor: isActive ? "#3b82f6" : "",
              }}
            >{" "}
              Profile
            </span>
          )}
        </NavLink>
        <button className="create-post-btn" onClick={() => setIsPostOpen(true)}>
          Create New post
        </button>

        {isLogin ? (
          <button className="login-btn" onClick={() => logoutUser()}>
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: isDarkMode ? "white" : "black",
            }}
          >
            <button className="login-btn">Login</button>
          </Link>
        )}
      </div>
      {isPostOpen && <CreatePost closeModal={setIsPostOpen} />}
    </div>
  );
}
