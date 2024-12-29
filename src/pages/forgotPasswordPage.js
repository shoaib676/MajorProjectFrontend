import React, { useState } from "react";
import {Link} from "react-router-dom";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      setSuccess(true);
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      {success ? (
        <p>Password reset email has been sent. Please check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@gmail.com"
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      )}
    </div>
    </>
  );
};

export default ForgotPasswordPage;