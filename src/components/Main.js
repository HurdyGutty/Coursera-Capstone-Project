import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import Order from './Order';
import timetables from "../contents/availableTimes";
import { useReducer } from 'react';

const Main = () => {
    const initialTimes = () => timetables;

    const updateTimes = (state, action) => {
        if (action.day === 0) {
            return state.slice().splice(-2, 2);
        }
        if (action.day === 1) {
            return state.slice(1, -1);
        }
        if (action.day === 2) {
            return state.slice().splice(0, 2);
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
                <Route path='/reservation' element={
                    <BookingPage availableTimes={availableTimes} dispatch={dispatchAvailableTimes} />
                } />
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