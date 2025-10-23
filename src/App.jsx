import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import "./style.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Internships />
      <Contact />
      <footer>© 2025 Preethi Roja | Built with React</footer>
    </>
  );
};

export default App;