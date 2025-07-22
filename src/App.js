import React from 'react';
import './App.css';
import './styles/responsive.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects />
        <About />
        <Resume />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
