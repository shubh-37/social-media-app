import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
  const { isDarkMode } = useContext(postContext);
  const { guestLogin, loginUser } = useContext(authContext);
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  function inputHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  function submitLogin(e) {
    e.preventDefault();
    loginUser(user);
  }
  return (
    <div
      className="signup-parent"
      style={{
        backgroundColor: isDarkMode ? "#bfdbfe" : "#dbeafe",
        color: isDarkMode ? "black" : "",
      }}
    >
      <h2 className="signup-heading">Login page</h2>
      <form onSubmit={(e) => submitLogin(e)} className="form-parent">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="awesomeShubh"
          required
          onChange={(e) => inputHandler(e)}
        />
        <label htmlFor="password">Password</label>
        <div className="password-container" >
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="shubh@123"
            required
            onChange={(e) => inputHandler(e)}
          />
          <span className="password-toggle" onClick={() => togglePassword()}>
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </span>
        </div>

        <button type="submit" className="signup-btn">
          Login
        </button>
        <Link to="/signup" className="signup-link">
          Don't have an account? Sign up now.
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            guestLogin();
          }}
          className="signup-btn"
        >
          Guest login
        </button>
      </form>
    </div>
  );
}
