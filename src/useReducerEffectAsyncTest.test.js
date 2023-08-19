import { renderHook, waitFor } from "@testing-library/react";
import useReducerEffectAsyncTest from "./customHooks/useReducerEffectAsyncTest";
import { act } from "react-dom/test-utils";


describe('test useReducerEffectAsyncTest', () => {
    const { result, rerender } = renderHook(() => useReducerEffectAsyncTest());
    const [dateTimes, dispatchDateTimes] = result.current;
    it('check initial state', async () => {
        expect(dateTimes.date).toBeInstanceOf(Date)
        act(async () => { await rerender() });
        await waitFor(() => {
            expect(dateTimes.date.getDate()).toBe(17)
            expect(dateTimes.times).toBeInstanceOf(Array)
            expect(dateTimes.times.length).toBe(2)
        })
        console.log(dateTimes)
    })
    test('useReducerEffectAsyncTest should update date property', async () => {

        act(async () => {
            dispatchDateTimes({ type: 'DATE_CHANGE', date: new Date('2015-05-19') })
            await waitFor(() => expect(dateTimes.date.getDate()).toBe(19))
        });
    });
    test('useReducerEffectAsyncTest should update times property', async () => {
        console.log(dateTimes)
        act(async () => {
            dispatchDateTimes({ type: 'DATE_CHANGE', date: new Date('2015-05-19') })
            await waitFor(() => {
                expect(dateTimes.date.getDate()).toBe(19)
                expect(dateTimes.times).toBeInstanceOf(Array)
                expect(dateTimes.times).toHaveLength(5)
                console.log(dateTimes)
            })

        });

    });
});