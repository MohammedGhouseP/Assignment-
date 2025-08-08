// components/Footer.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Footer() {
  const { isLoggedIn, user } = useAuth();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="auth-status">
            {isLoggedIn ? (
              <p className="welcome-message">
                👋 Welcome, <strong>{user?.name}</strong>! You have full access to all features.
              </p>
            ) : (
              <p className="login-prompt">
                🔐 Please log in to access your personalized experience.
              </p>
            )}
          </div>
          
          <div className="footer-info">
            <small>
              Auth Context Demo • Status: {isLoggedIn ? 'Authenticated' : 'Guest'}
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}
