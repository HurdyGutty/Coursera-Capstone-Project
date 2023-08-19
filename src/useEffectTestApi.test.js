import { renderHook, waitFor } from "@testing-library/react";
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';
import useEffectTestApi from "./customHooks/useEffectTestApi";

describe('test useEffectTestApi', () => {
    test('useEffectTestApi should fetch times and update state', async () => {
        const wrapper = ({ children }) => <AlertMessangeProvider><BookingApiProvider>{children}</BookingApiProvider></AlertMessangeProvider>
        const { result, rerender } = renderHook(() => useEffectTestApi(), { wrapper });
        const initialTimes = result.current;
        expect(initialTimes.date).toBeInstanceOf(Date)
        expect(initialTimes.date.getDate()).toBe(18)
        expect(initialTimes.times).toBeInstanceOf(Array)
        await waitFor(() => {
            expect(initialTimes.times.length).toBeGreaterThan(0)
        })
        console.log(initialTimes)

    })
})