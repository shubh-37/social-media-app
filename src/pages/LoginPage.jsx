import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";

export default function Login() {
  const { guestLogin, loginUser } = useContext(authContext);
  const [user, setUser] = useState({});

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
    <div className="signup-parent">
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
        <input
          type="password"
          name="password"
          id="password"
          placeholder="shubh@123"
          required
          onChange={(e) => inputHandler(e)}
        />
        <button type="submit" className="signup-btn">Login</button>
        <Link to="/signup" className="signup-link">Don't have an account? Sign up now.</Link>
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
