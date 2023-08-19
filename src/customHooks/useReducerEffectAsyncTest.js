import { useEffect, useReducer } from "react";


const useReducerEffectAsyncTest = () => {
    const initialTimes = { date: new Date('2023-08-17'), times: ['12:00', '13:00'] };
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'DATE_CHANGE':
                return { ...state, date: action.date };
            case 'TIMES_CHANGE':
                return { ...state, times: action.times };
            default:
                throw new Error();
        }
    }
    const [dateTimes, dispatchDateTimes] = useReducer(updateTimes, initialTimes);

    useEffect(() => {
        const ac = new AbortController();
        const fetchTimes = async () => {
            const response = await (new Promise(resolve => setTimeout(() => resolve(JSON.stringify(['12:00', '13:00', '14:00', '15:00', '16:00'])), 1000)))
            const times = await JSON.parse(response)
            dispatchDateTimes({ type: 'TIMES_CHANGE', times })
        }
        fetchTimes()
        return () => ac.abort();
    }, [dateTimes.date])

    return [dateTimes, dispatchDateTimes];
}

export default useReducerEffectAsyncTest;