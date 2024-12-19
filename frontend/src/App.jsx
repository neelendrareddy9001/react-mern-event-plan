import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
    </Router>
  );
};

export default App;
