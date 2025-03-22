import React from 'react';
import Header from './Header';
import About from './About';
import Research from './Research';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Research />
      <Contact />
    </div>
  );
}

export default App;