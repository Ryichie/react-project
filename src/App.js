import React from 'react';
import './App.css';
import About from './components/about'
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Header from './components/header';

export default function App() {
  return (
    <div className = "App" >
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}