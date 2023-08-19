import { useEffect } from "react";
import { useBookingApiContext } from "../context/BookingApiContext";


const useEffectTestApi = () => {
    const { fetchAPI } = useBookingApiContext();
    const initialTimes = { date: new Date, times: [] };

    useEffect(() => {
        const ac = new AbortController();
        fetchAPI(initialTimes.date)
            .then(response => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                initialTimes.times = JSON.parse(response);
            })
            .catch(error => console.log(error.message));
        return () => ac.abort();
    }, [initialTimes.date])

    return initialTimes;
}

export default useEffectTestApi;