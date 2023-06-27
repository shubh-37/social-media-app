import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";

export default function SignUp() {
  const { signUpUser } = useContext(authContext);
  const [user, setUser] = useState({});
  function userHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  function submitUser(e) {
    e.preventDefault();
    signUpUser(user);
  }
  return (
    <div>
      <h1>This is the sign up page</h1>
      <form onSubmit={(e) => submitUser(e)}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstName"
          id="fname"
          required
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lname"
          required
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="" id="cpassword" required />
        <button type="submit">Sign up</button>
        <Link to="/login">Already have an account? Login now.</Link>
      </form>
    </div>
  );
}
