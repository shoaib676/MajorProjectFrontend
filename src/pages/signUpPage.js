import React from "react";
import {Link} from "react-router-dom";

const SignUpPage = () => {

  return (
    <>
    <nav className="navbar">
          <div className="logo">Deep Fake Detection</div>
          <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
    <div className="signup-page">
      <h2>Create New Account</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Enter Your Name" />
        <label>Email</label>
        <input type="email" placeholder="hello@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="******" />
        <label>Date of Birth</label>
        <input type="date" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already registered? <a href="/login">Log in</a>
      </p>
    </div>
    </>
  );
};

export default SignUpPage;
