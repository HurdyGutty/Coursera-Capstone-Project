import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BookingPage from './BookingPage';
import Order from './Order';
import useBookingApi from '../customHooks/useBookingApi';
import ConfirmBooking from './ConfirmedBooking';
import { submitAPI } from '../mock_api/api';

const Main = () => {
    const navigate = useNavigate();
    const [dateTimes, dispatchDateTimes] = useBookingApi();
    const submitForm = async (formData) => {
        const response = await submitAPI(formData);
        if (JSON.parse(response)) {
            navigate('/reservation-confirmed');
        }
    }
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
                    <BookingPage availableTimes={dateTimes.times} dispatch={dispatchDateTimes} submitForm={submitForm} />
                } />
                <Route path='/reservation-confirmed' element={
                    <ConfirmBooking />
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