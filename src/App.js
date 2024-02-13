import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about'
import Navbar from './components/navbar';
// import Projects from './components/projects';
// import Skills from './components/skills';
// import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element = {<About />} />
        </Routes>
      </main>
    </Router>

    // <main>
    //   <About />
    //   <Projects />
    //   <Skills />
    //   <Contact />
    // </main>
    // <div className="App">
    //   <header className="App-header">
    //     <b>Hey, I'm Richard!</b>
    //     <p>It's nice to meet you.</p>
    //     {/* <img src={miku} className="miku-cute" alt="miku" width={500}/> */}
    //   </header>
    // </div>
  );
}

export default App;
