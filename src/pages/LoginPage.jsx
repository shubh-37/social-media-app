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
    <div>
      <h1>Login page</h1>
      <form onSubmit={(e) => submitLogin(e)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => inputHandler(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => inputHandler(e)}
        />
        <button type="submit">Login</button>
        <Link to="/signup">Don't have an account? Sign up now.</Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            guestLogin();
          }}
        >
          Guest login
        </button>
        <Link to="/profile">Profile</Link>
      </form>
    </div>
  );
}
