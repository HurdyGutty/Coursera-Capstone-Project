import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './BookingPage';
import Order from './Order';

const Main = () => {
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
                    path="/customer-stories"
                    element={
                        <Testimonials />
                    }
                />
                <Route
                    path="/about"
                    element={
                        <About />
                    }
                />
                <Route path='/reservation' element={<BookingPage />} />
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