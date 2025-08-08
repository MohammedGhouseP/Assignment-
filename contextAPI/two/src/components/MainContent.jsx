// components/MainContent.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";
import Card from "./Card";

export default function MainContent() {
  const { theme } = useTheme();

  const cardData = [
    { id: 1, title: "Card One", content: "This is the first themed card component." },
    { id: 2, title: "Card Two", content: "This card also responds to theme changes." },
    { id: 3, title: "Card Three", content: "All cards share the same theme context." }
  ];

  return (
    <main className="main-content">
      <div className="container">
        <h2>Current Theme: <span className="theme-indicator">{theme}</span></h2>
        
        <div className="card-grid">
          {cardData.map(card => (
            <Card 
              key={card.id} 
              title={card.title} 
              content={card.content} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
