// App.jsx
import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </AuthProvider>
  );
}
