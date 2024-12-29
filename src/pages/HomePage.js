import React from "react";
import {Link} from "react-router-dom";
import headerImage from "../assets/photo.jpg";
function HomePage() {
    return (
      <div className="homepage">
        <nav className="navbar">
          <div className="logo">Deep Fake Detection</div>
          <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <header className="header">
          <div className="header-content">
            <h1>Deep fake <br/> detection</h1>
            <p>
              In a digital world filled with synthetic media, our mission is to
              safeguard trust in online content. Our cutting-edge Deepfake
              Detection technology leverages advanced AI models, such as ResNeXt
              Convolutional Neural Networks, to identify manipulated videos and
              images with precision.
            </p>
            <button className="upload-button">Upload Image</button>
          </div>
          <div className="header-image">
            <img
              src={headerImage}
              alt="Deepfake Detection Illustration"
            />
          </div>
        </header>
      </div>
    );
};
  
export default HomePage;