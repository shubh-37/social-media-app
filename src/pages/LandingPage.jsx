import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import "../css/landingpage.css";

export default function LandingPage() {
  const { isDarkMode } = useContext(postContext);
  const { guestLogin } = useContext(authContext);
  return (
    <div className="landing-parent">
      <div className="landing-content">
        <h1 style={{ color: "#2563eb", marginTop: "0" }}>Shwitter</h1>
        <div>
          <div>
            <h2 style={{ color: isDarkMode ? "white" : "#475569" }}>
              FOLLOW{" "}
              <span
                style={{
                  fontSize: "small",
                  color: isDarkMode ? "grey" : "black",
                }}
              >
                people around the globe
              </span>
            </h2>
          </div>
          <div>
            <h2 style={{ color: isDarkMode ? "white" : "#475569" }}>
              CONNECT{" "}
              <span
                style={{
                  fontSize: "small",
                  color: isDarkMode ? "grey" : "black",
                }}
              >
                with your friends
              </span>{" "}
            </h2>
          </div>
          <div>
            <h2 style={{ color: isDarkMode ? "white" : "#475569" }}>
              SHARE{" "}
              <span
                style={{
                  fontSize: "small",
                  color: isDarkMode ? "grey" : "black",
                }}
              >
                what you're thinking
              </span>{" "}
            </h2>
          </div>
        </div>
        <div>
          <button className="join-btn" onClick={() => guestLogin()}>
            Join Now as Guest
          </button>
          <span className="signup-link">
            <Link
              to="/login"
              style={{
                display: "block",
                textDecoration: "none",
                color: isDarkMode ? "white" : "black",
                marginTop: "1rem",
              }}
            >
              Already have an account?{" "}
              <span
                className="	fa fa-hand-o-left"
                style={{ fontSize: "1.5rem" }}
              ></span>
            </Link>
          </span>
        </div>
      </div>
      <div className="landing-img">
        <img
          src="https://i.ibb.co/F3J3zRg/karsten-winegeart-60-Gsd-OMRFGc-unsplash.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
