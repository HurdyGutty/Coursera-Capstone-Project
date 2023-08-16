import { useBookingApiContext } from '../context/BookingApiContext';
import { useAlertMessange } from '../context/AlertMessage';
import { useEffect, useReducer } from 'react';

function useBookingApi() {
    const { fetchAPI } = useBookingApiContext();
    const [alertMessange, setAlertMessange] = useAlertMessange();
    const initialTimes = { date: new Date, times: [] };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'FETCH_TIME':
                return { date: state.date, times: action.times };
            case 'DATE_CHANGE':
                return { ...state, date: action.date };
            default:
                throw new Error();
        }
    };
    const [dateTimes, dispatchDateTimes] = useReducer(updateTimes, initialTimes);

    useEffect(() => {
        const ac = new AbortController();
        fetchAPI(dateTimes.date)
            .then(response => {
                if (response.status >= 400 && response.status < 600) {
                    throw new Error("Bad response from server");
                }
                dispatchDateTimes({ type: 'FETCH_TIME', times: JSON.parse(response) });
            })
            .catch(error =>
            (setAlertMessange(
                (alert) => ({ ...alert, booking: error.message })
            )
            ));
        return () => ac.abort();
    }, [dateTimes.date])
    return [dateTimes, dispatchDateTimes];
}

export default useBookingApi;

