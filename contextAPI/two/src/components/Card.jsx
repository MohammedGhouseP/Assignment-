// components/Card.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Card({ title, content }) {
  const { theme } = useTheme();

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
      <small>Theme: {theme}</small>
    </div>
  );
}
