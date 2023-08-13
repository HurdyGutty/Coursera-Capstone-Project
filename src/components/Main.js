import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import Order from './Order';
import timetables from "../contents/availableTimes";
import { useReducer } from 'react';

const Main = () => {
    const initialTimes = () => timetables;

    const updateTimes = (state, action) => {
        if (action.type === "update") {
            return action.payload;
        }
        return state;
    };
    const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, initialTimes());
    return (
        <main>
            <Routes>
                <Route
                    path="/menu"
                    element={
                        <>
                            <Hero />
                            <Highlights />
                        </>
                    }
                />
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Testimonials />
                        </>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About />
                    }
                />
                <Route path='/reservation' element={<BookingPage availableTimes={availableTimes} dispatch={dispatchAvailableTimes} />} />
                <Route path='/order' element={
                    <>
                        <Hero />
                        <Order />
                    </>
                } />
            </Routes>
        </main>
    )
}

export default Main