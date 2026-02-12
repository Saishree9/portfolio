import React from "react";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="bg-white text-gray-900 max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <footer className="border-t border-gray-200 py-6 text-center text-gray-500 text-sm mt-16">
        © 2026 Saishree L. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
