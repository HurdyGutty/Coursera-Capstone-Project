import { createContext, useContext, useState } from "react";


const AlertMessangeContext = createContext();

export const AlertMessangeProvider = ({ children }) => {
    const [alertMessange, setAlertMessange] = useState({});

    return (
        <AlertMessangeContext.Provider value={[alertMessange, setAlertMessange]}>
            {children}
        </AlertMessangeContext.Provider>
    );
}

export const useAlertMessange = () => useContext(AlertMessangeContext);