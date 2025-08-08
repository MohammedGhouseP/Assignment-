// AuthContext.js - Enhanced with debugging improvements
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // 🔧 FIX: Load from localStorage with fallback
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    try {
      return localStorage.getItem('isLoggedIn') === 'true';
    } catch {
      return false; // Fallback for SSR or localStorage errors
    }
  });

  // 🔧 FIX: Persist state changes
  useEffect(() => {
    try {
      localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    } catch (error) {
      console.warn('Failed to persist auth state:', error);
    }
  }, [isLoggedIn]);

  // ✅ Proper toggle function
  const toggleAuth = () => {
    setIsLoggedIn(prevState => !prevState);
  };

  // Additional helper methods
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const value = {
    isLoggedIn,
    toggleAuth,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
