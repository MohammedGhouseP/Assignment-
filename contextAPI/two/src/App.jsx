// App.jsx
import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
