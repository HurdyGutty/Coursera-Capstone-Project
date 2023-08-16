import { createContext, useContext } from "react";
import { fetchAPI, submitAPI } from "../mock_api/api"; // Mock https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js

const BookingApiContext = createContext();

export const BookingApiProvider = ({ children }) => {
    return (
        <BookingApiContext.Provider value={{ fetchAPI, submitAPI }}>
            {children}
        </BookingApiContext.Provider>
    )
}

export const useBookingApiContext = () => useContext(BookingApiContext);