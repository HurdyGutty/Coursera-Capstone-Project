import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';

function App() {
  return (
    <>
      <Navbar />
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
