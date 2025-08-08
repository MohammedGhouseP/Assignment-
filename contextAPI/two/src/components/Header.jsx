// components/Header.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <h1>Theme Context Demo</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
