// import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Projects from "../Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";



function App() {
  return (
    <main className="App">
      <h1>Moris Portfolio!</h1>

      <section className="navBarContainer">
        <Popup trigger={<button className="nav-btn">Navigation Bar</button>} position="right center">
          <div className="navbar"><NavBar /></div>
        </Popup>
      </section>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </main>
  );
};

export default App;
