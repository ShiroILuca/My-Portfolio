"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Career from "./components/Career";
import Strengths from "./components/Strengths";
import PersonalProjects from "./components/PersonalProjects";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen font-light">
      <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <main>
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Career />
        <Strengths />
        <PersonalProjects />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
