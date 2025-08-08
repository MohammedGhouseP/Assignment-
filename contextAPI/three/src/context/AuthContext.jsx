// context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn.toString());
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [isLoggedIn, user]);

  const login = (username = "User") => {
    setIsLoggedIn(true);
    setUser({ name: username, id: Date.now() });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const toggleAuth = () => {
    if (isLoggedIn) {
      logout();
    } else {
      login();
    }
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
    toggleAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
