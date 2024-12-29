import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ForgotPasswordPage from "./pages/forgotPasswordPage";
import "./styles.css"
import "./App.css";

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
