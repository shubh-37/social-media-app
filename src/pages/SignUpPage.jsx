import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div>
      <h1>This is the sign up page</h1>
      <form>
        <label htmlFor="fname">First Name</label>
        <input type="text" name="" id="fname" />
        <label htmlFor="lname">Last name</label>
        <input type="text" name="" id="lname" />
        <label htmlFor="username">Username</label>
        <input type="text" name="" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" name="" id="password" />
        <label htmlFor="cpassword">Confirm Password</label>
        <input type="password" name="" id="cpassword" />
        <button type="submit">Sign up</button>
        <Link to="/login">Already have an account? Login now.</Link>
      </form>
    </div>
  );
}
