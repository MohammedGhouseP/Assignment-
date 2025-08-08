// ThemeContext.js - Enhanced with debugging improvements  
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // 🔧 FIX: Load from localStorage with fallback
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch {
      return 'light'; // Fallback for SSR or localStorage errors
    }
  });

  // 🔧 FIX: Persist theme changes
  useEffect(() => {
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Failed to persist theme:', error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const setLightTheme = () => setTheme('light');
  const setDarkTheme = () => setTheme('dark');

  const value = {
    theme,
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    isLight: theme === 'light',
    isDark: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
