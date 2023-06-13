import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";

export default function Login() {
  const { guestLogin } = useContext(authContext);
  return (
    <div>
      <h1>Login page</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
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
      </form>
    </div>
  );
}
