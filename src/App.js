import './App.css';
import React, { createContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';
import Main from './components/Main';
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';

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
      <AlertMessangeProvider>
        <BookingApiProvider>
          <Main />
        </BookingApiProvider>
      </AlertMessangeProvider>
      <Footer />
    </>
  );
}

export default App;
