import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Contact />
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;
