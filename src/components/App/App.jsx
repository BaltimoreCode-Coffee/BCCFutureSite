// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSection from "../HeroSection/HeroSection";
import ContentSections from "../ContentSections/ContentSections";
import Navbar from "../Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/contents" element={<ContentSections />} />
      </Routes>
    </Router>
  );
}

export default App;
