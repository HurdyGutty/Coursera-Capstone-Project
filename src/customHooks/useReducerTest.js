import { useReducer } from "react";


const useReducerTest = () => {
    const initialTimes = { date: new Date, times: [] };
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
    return [dateTimes, dispatchDateTimes];
}

export default useReducerTest;