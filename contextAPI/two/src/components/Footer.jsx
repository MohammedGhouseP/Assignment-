// components/Footer.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { isLight, isDark } = useTheme();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          Context API Demo • 
          {isLight && " Light Theme Active ☀️"}
          {isDark && " Dark Theme Active 🌙"}
        </p>
      </div>
    </footer>
  );
}
