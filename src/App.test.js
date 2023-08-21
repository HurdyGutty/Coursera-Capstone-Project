import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';
import useBookingApi from './customHooks/useBookingApi';
import { act } from 'react-dom/test-utils';
import React from 'react';



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
    test('Guests has min and max attributes', () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const guestElement = screen.getByLabelText("Number of guests");
        expect(guestElement).toHaveAttribute("min", "1");
        expect(guestElement).toHaveAttribute("max", "10");
    });

    test('Renders error message when date is not selected', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);
        const dateError = await screen.findByText("Date is required");
        expect(dateError).toBeInTheDocument();
    })
    test('Renders error message when time is not selected', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);
        const timeError = await screen.findByText("Time is required");
        expect(timeError).toBeInTheDocument();
    });
    test('Renders error message when number of guests is not selected', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const buttonElement = screen.getByText("Make Your Reservation");
        const guestInput = screen.getByLabelText("Number of guests");
        userEvent.clear(guestInput);
        fireEvent.click(buttonElement);

        const guestError = await screen.findByText("Number of guests is required");
        expect(guestError).toBeInTheDocument();
    });

    test('Renders error message when occasion is not selected', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);

        const occasionError = await screen.findByText("Occasion is required");
        expect(occasionError).toBeInTheDocument();
    });

    test('Renders error message when date of reservation is in the past', async () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const dateInput = screen.getByLabelText("Choose date");
        await userEvent.clear(dateInput)
        await userEvent.type(dateInput, "2015-05-18")
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);

        const dateError = await screen.findByText("Date can not be in the past");
        expect(dateError).toBeInTheDocument();
    });

    test('Renders error message when number of guests is less than 1', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const guestInput = screen.getByLabelText("Number of guests");
        userEvent.clear(guestInput);
        await userEvent.type(guestInput, "0")
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);

        const guestError = await screen.findByText("Minimum of 1 guest");
        expect(guestError).toBeInTheDocument();
    });

    test('Renders error message when number of guests is more than 10', async () => {
        render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
        const guestInput = screen.getByLabelText("Number of guests");
        userEvent.clear(guestInput);
        await userEvent.type(guestInput, "11")
        const buttonElement = screen.getByText("Make Your Reservation");
        fireEvent.click(buttonElement);

        const guestError = await screen.findByText("Maximum of 10 guests");
        expect(guestError).toBeInTheDocument();
    });

    test('Button should fire the handleSubmit function', async () => {
        jest.useFakeTimers().setSystemTime(new Date('2023-08-18'));
        const availableTimes = ["17:00", "18:30", "20:00", "20:30", "23:00"];
        const dispatch = jest.fn();
        const submitForm = jest.fn();
        jest.spyOn(React, 'useEffect').mockImplementation(f => f());
        jest.spyOn(console, 'log')

        const { rerender } = render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />, { wrapper });
        const dateInput = screen.getByLabelText("Choose date");
        const timeInput = screen.getByRole("combobox", { name: "Choose time" });
        const guestInput = screen.getByLabelText("Number of guests");
        const occasionInput = screen.getByRole("combobox", { name: "Occasion" });

        const buttonElement = screen.getByText("Make Your Reservation");
        const formElement = screen.getByTestId("booking-form");

        expect(buttonElement).toBeInTheDocument();

        await act(async () => {
            await userEvent.clear(dateInput)
            await userEvent.type(dateInput, "2200-06-15")
        })
        await waitFor(() => {
            expect(dispatch).toHaveBeenCalledWith({ type: 'DATE_CHANGE', date: new Date('2200-06-15') });
        })
        await waitFor(() => {
            expect(dateInput).toHaveValue("2200-06-15")
        })
        await waitFor(() => {
            expect(React.useEffect).toHaveBeenCalled();
        }, { timeout: 4000 })
        await act(async () => {
            await userEvent.clear(guestInput)
            await userEvent.type(guestInput, "1")
        })
        await waitFor(() => {
            expect(guestInput).toHaveValue(1);
        })
        userEvent.selectOptions(occasionInput, "Birthday")
        await waitFor(() => {
            expect(occasionInput).toHaveValue("Birthday");
        })
        await act(async () => {
            userEvent.click(timeInput)
            const timeOptions = await screen.findAllByTestId("time-options");
            await waitFor(() => {
                expect(timeOptions[0]).toBeInTheDocument();
            })
        })
        userEvent.selectOptions(timeInput, "17:00")
        await userEvent.click(buttonElement);
        await waitFor(() => {
            expect(submitForm).toHaveBeenCalledTimes(1);
            expect(submitForm).toHaveBeenCalledWith({
                date: '2200-06-15',
                time: '17:00',
                guests: 1,
                occasion: 'Birthday'
            })
        })
    }
    )
})





