// components/Navbar.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isLoggedIn, toggleAuth, user } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>Auth Demo</h2>
        </div>
        
        <div className="nav-items">
          {isLoggedIn && user && (
            <span className="welcome-text">Hello, {user.name}!</span>
          )}
          
          <button 
            className={`auth-button ${isLoggedIn ? 'logout' : 'login'}`}
            onClick={toggleAuth}
          >
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
    </nav>
  );
}
