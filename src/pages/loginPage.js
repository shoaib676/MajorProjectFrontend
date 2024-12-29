import React from "react";
import {Link} from "react-router-dom";
const LoginPage = () => {

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

    <div className="login-page">
      <h2>Login</h2>
      <form>
        <label>Email</label>
        <input type="email" placeholder="hello@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="********" />
        <button type="submit">Log In</button>
      </form>
      <a href="/forgot-password">Forgot Password?</a>
      <p>
        Don't have an account? <a href="/signup">Sign up here</a>
      </p>
    </div>
    </>
  );
};

export default LoginPage;