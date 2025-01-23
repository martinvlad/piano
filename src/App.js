// src/App.js
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Videos from "./components/Videos";
import { ParallaxProvider } from "react-scroll-parallax";
import "./App.css";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <Videos />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
