import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <About />
    </Router>
  );
};

export default App;
