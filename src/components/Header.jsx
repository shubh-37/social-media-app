import { useContext } from "react";
import { postContext } from "../contexts/PostContextProvider";

export default function Header() {
  const { isDarkMode, setIsDarkMode } = useContext(postContext);
  return (
    <div>
      <h2 style={{ color: "#2563eb" }}>Shwitter</h2>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? (
          <span className="fa fa-sun-o"></span>
        ) : (
          <span className="fa fa-moon-o"></span>
        )}
      </button>
    </div>
  );
}
