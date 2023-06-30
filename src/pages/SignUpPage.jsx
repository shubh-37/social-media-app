import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../contexts/AuthContextProvider";
import { postContext } from "../contexts/PostContextProvider";
import "../css/signup.css";

export default function SignUp() {
  const { signUpUser } = useContext(authContext);
  const { isDarkMode } = useContext(postContext);
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
    <div className="signup-parent" style={{backgroundColor: isDarkMode ? "#bfdbfe": "#dbeafe", color: isDarkMode ? "black" : ""}} >
      <h2 className="signup-heading">Sign up now</h2>
      <form onSubmit={(e) => submitUser(e)} className="form-parent">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstName"
          id="fname"
          required
          placeholder="Shubh"
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="lname">Last name</label>
        <input
          type="text"
          name="lastName"
          id="lname"
          required
          placeholder="Arya"
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          required
          placeholder="awesomeShubh"
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          placeholder="shubh@123"
          onChange={(e) => userHandler(e)}
        />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="" id="cpassword" placeholder="shubh@123" required />
        <button type="submit" className="signup-btn">Sign up</button>
        <Link to="/login" className="signup-link">Already have an account? Login now.</Link>
      </form>
    </div>
  );
}
