import { useContext } from "react";
import { Link } from "react-router-dom";
import { postContext } from "../contexts/PostContextProvider";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(postContext);
  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#020617" : "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ color: "#2563eb", marginTop: "0", marginLeft: "2rem", padding: "0.7rem" }}>
        <Link style={{textDecoration: "none",
              color: "#2563eb"}} to="/">Shwitter</Link>
      </h1>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{
          border: "none",
          backgroundColor: isDarkMode ? "#020617" : "white",
          cursor: "pointer",
        }}
      >
        {isDarkMode ? (
          <span
            className="fa fa-sun-o"
            style={{
              backgroundColor: "#020617",
              color: "white",
              fontSize: "2rem",
              marginRight: "2rem",
            }}
          ></span>
        ) : (
          <span
            className="fa fa-moon-o"
            style={{
              backgroundColor: "white",
              fontSize: "2rem",
              marginRight: "2rem",
            }}
          ></span>
        )}
      </button>
    </div>
  );
}
