// src/App.js
import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
