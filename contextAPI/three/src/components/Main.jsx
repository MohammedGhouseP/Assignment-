// components/Main.jsx
import React from "react";
import { useAuth } from "../context/AuthContext";

export default function Main() {
  const { isLoggedIn, user } = useAuth();

  return (
    <main className="main-content">
      <div className="container">
        <div className="status-card">
          {isLoggedIn ? (
            <div className="logged-in-state">
              <h1>Welcome Back!</h1>
              <p>You are successfully logged in as <strong>{user?.name}</strong>.</p>
              <div className="user-info">
                <p>✅ Authentication Status: <span className="status-active">Active</span></p>
                <p>🆔 User ID: {user?.id}</p>
                <p>⏰ Session: Active since login</p>
              </div>
            </div>
          ) : (
            <div className="logged-out-state">
              <h1>Please Log In</h1>
              <p>You need to log in to access your dashboard and personalized content.</p>
              <div className="user-info">
                <p>❌ Authentication Status: <span className="status-inactive">Not Authenticated</span></p>
                <p>🔒 Access Level: Guest</p>
              </div>
            </div>
          )}
        </div>

        <div className="feature-grid">
          <div className={`feature-card ${!isLoggedIn ? 'disabled' : ''}`}>
            <h3>Dashboard</h3>
            <p>{isLoggedIn ? 'Access your personal dashboard' : 'Login required'}</p>
          </div>
          
          <div className={`feature-card ${!isLoggedIn ? 'disabled' : ''}`}>
            <h3>Profile</h3>
            <p>{isLoggedIn ? 'Manage your profile settings' : 'Login required'}</p>
          </div>
          
          <div className={`feature-card ${!isLoggedIn ? 'disabled' : ''}`}>
            <h3>Settings</h3>
            <p>{isLoggedIn ? 'Configure your preferences' : 'Login required'}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
