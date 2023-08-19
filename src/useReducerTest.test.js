import { renderHook, waitFor } from "@testing-library/react";
import useReducerTest from "./customHooks/useReducerTest";
import { act } from "react-dom/test-utils";


describe('test useReducerTest', () => {
    const { result, rerender } = renderHook(() => useReducerTest());
    const [dateTimes, dispatchDateTimes] = result.current;
    it('allow to dispatch DATE_CHANGE', async () => {


        act(async () => {
            dispatchDateTimes({ type: 'DATE_CHANGE', date: new Date('2015-05-18') })

            await waitFor(() => {
                expect(dateTimes.date).toBeInstanceOf(Date)
                console.log(dateTimes)
                expect(dateTimes.date.getDate()).toBe(18)
            })

        });

    })

    it('allow to dispatch TIMES_CHANGE', async () => {

        act(async () => {
            dispatchDateTimes({ type: 'TIMES_CHANGE', times: ["17:00", "17:30", "18:00", "18:30", "19:00"] })

            await waitFor(() => {
                expect(dateTimes.times).toBeInstanceOf(Array)
                console.log(dateTimes)
                expect(dateTimes.times).toHaveLength(5)
            })

        });
    })
})