import { useState, useRef } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        scrollToSection={scrollToSection}
        sections={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef
        }}
      />

      <div className='w-5/6 py-5 m-auto my-10 bg-gray-100 rounded-md'>
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={projectsRef}>
          <Projects />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;