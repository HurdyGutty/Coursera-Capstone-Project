import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchAPI, submitAPI } from './mock_api/api';
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';
import useBookingApi from './customHooks/useBookingApi';
import { act } from 'react-dom/test-utils';


describe('test BookingForm', () => {

    afterAll(() => {
        jest.restoreAllMocks();
    });

    const wrapper = ({ children }) => <AlertMessangeProvider><BookingApiProvider>{children}</BookingApiProvider></AlertMessangeProvider>
    const { result } = renderHook(() => useBookingApi(), { wrapper });
    const [dateTimes, dispatchDateTimes] = result.current;

    test('Renders the BookingForm fields', () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const dateElement = screen.getByLabelText("Choose date");
        const timeElement = screen.getByLabelText("Choose time");
        const guestElement = screen.getByLabelText("Number of guests");
        const Occasion = screen.getByLabelText("Occasion");
        expect(dateElement).toBeInTheDocument();
        expect(timeElement).toBeInTheDocument();
        expect(guestElement).toBeInTheDocument();
        expect(Occasion).toBeInTheDocument();
    })

    test('Renders the BookingForm submit button', () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const buttonElement = screen.getByText("Make Your Reservation");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute("type", "submit");
    })

    test('Button should fire the handleSubmit function', async () => {
        const dispatch = jest.fn();
        const submitForm = jest.fn();

        const { rerender } = render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatch} submitForm={submitForm} />, { wrapper });
        const dateInput = screen.getByLabelText("Choose date");
        const timeInput = screen.getByRole("combobox", { name: "Choose time" });
        const guestInput = screen.getByLabelText("Number of guests");
        const occasionInput = screen.getByRole("combobox", { name: "Occasion" });

        const buttonElement = screen.getByText("Make Your Reservation");
        const formElement = screen.getByTestId("booking-form");

        expect(buttonElement).toBeInTheDocument();

        await act(async () => {
            await userEvent.clear(dateInput)
            await userEvent.type(dateInput, "2015-05-18")
            await waitFor(() => {
                expect(dispatch).toHaveBeenCalledWith({ type: 'DATE_CHANGE', date: new Date('2015-05-18') });
            })
            setTimeout(() => { }, 2000)
        })
        userEvent.click(timeInput)
        await waitFor(() => {
            expect(screen.getByText("17:00")).toBeInTheDocument();
        })
        userEvent.click(screen.getByText("17:00"))
        fireEvent.change(guestInput, { target: { value: "1" } })
        userEvent.selectOptions(occasionInput, "Birthday")

        fireEvent.click(buttonElement);
        expect(submitForm).toHaveBeenCalledWith({
            date: '2015-05-18',
            time: '17:00',
            guests: '1',
            occasion: 'Birthday'
        })
    }
    )
})



// describe('test useBookingApi hook', () => {
//   const wrapper = ({ children }) => <AlertMessangeProvider><BookingApiProvider>{children}</BookingApiProvider></AlertMessangeProvider>
//   const { result } = renderHook(() => useBookingApi(), { wrapper });
//   const [dateTimes, dispatchDateTimes] = result.current;
//   it('initial state correct', async () => {

//     expect(dateTimes).toBeInstanceOf(Object)
//     expect(dateTimes.date.getDate()).toBe(18)

//     await waitFor(() => {
//       expect(dateTimes.times).toBeInstanceOf(Array)
//     })
//     await waitFor(async () => {
//       setTimeout(() => { }, 2000)
//       expect(dateTimes.times.length).toBeGreaterThan(0)
//     })
//   })

//   it('allow to dispatch DATE_CHANGE', async () => {
//     await act(async () => {
//       dispatchDateTimes({ type: 'DATE_CHANGE', date: new Date('2015-05-18') })
//       await waitFor(() => {

//         expect(dateTimes.times).toBeInstanceOf(Array)
//         expect(dateTimes.times).toHaveLength(5)
//       })
//     });
//     console.log(`dateTimes: ${dateTimes.times}`)
//   })
// })




