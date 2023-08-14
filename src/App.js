import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <>
      <Navbar />
      {/* <main>
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main> */}
      <Main />
      <Footer />
    </>
  );
}

export default App;
