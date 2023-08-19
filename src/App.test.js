import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { fetchAPI, submitAPI } from './mock_api/api';
import { BookingApiProvider } from './context/BookingApiContext';
import { AlertMessangeProvider } from './context/AlertMessage';
import useBookingApi from './customHooks/useBookingApi';
import { act } from 'react-dom/test-utils';


// describe('test BookingForm', () => {

//   const wrapper = ({ children }) => <AlertMessangeProvider><BookingApiProvider>{children}</BookingApiProvider></AlertMessangeProvider>
//   const { result } = renderHook(() => useBookingApi(), { wrapper });
//   const [dateTimes, dispatchDateTimes] = result.current;

//   test('Renders the BookingForm heading', () => {
//     render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
//     const headingElement = screen.getByText("Book Now");
//     expect(headingElement).toBeInTheDocument();
//   })

//   test('Renders the BookingForm submit button', () => {
//     render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatchDateTimes} />, { wrapper });
//     const buttonElement = screen.getByText("Make Your Reservation");
//     expect(buttonElement).toBeInTheDocument();
//     expect(buttonElement).toHaveAttribute("type", "submit");
//   })

//   test('Button should fire the handleSubmit function', async () => {
//     const dispatch = jest.fn();
//     const submitForm = jest.fn();

//     const { rerender } = render(<BookingForm availableTimes={dateTimes.times} dispatch={dispatch} submitForm={submitForm} />, { wrapper });
//     const dateInput = screen.getByLabelText("Choose date");
//     const timeInput = screen.getByRole("combobox", { name: "" });
//     const guestInput = screen.getByLabelText("Number of guests");
//     const occasionInput = screen.getByRole("combobox", { name: "Occasion" });

//     const buttonElement = screen.getByText("Make Your Reservation");
//     const formElement = screen.getByTestId("booking-form");

//     expect(buttonElement).toBeInTheDocument();

//     await act(async () => {
//       fireEvent.change(dateInput, { target: { value: '2015-05-18' } });
//       rerender()
//       expect(dispatch).toHaveBeenCalledWith({ type: 'DATE_CHANGE', date: new Date('2015-05-18') });
//       rerender(<BookingForm availableTimes={dateTimes.times} dispatch={dispatch} submitForm={submitForm} />, { wrapper });
//       setTimeout(() => { }, 2000)
//     })
//     userEvent.selectOptions(timeInput, "17:00")
//     fireEvent.change(guestInput, { target: { value: "1" } })
//     userEvent.selectOptions(occasionInput, "Birthday")
//     fireEvent.click(buttonElement);
//     expect(submitForm).toHaveBeenCalledWith({
//       date: '2015-05-18',
//       time: '17:00',
//       guests: '1',
//       occasion: 'Birthday'
//     })
//   }
//   )
// })



describe('test useBookingApi hook', () => {
  const wrapper = ({ children }) => <AlertMessangeProvider><BookingApiProvider>{children}</BookingApiProvider></AlertMessangeProvider>
  const { result } = renderHook(() => useBookingApi(), { wrapper });
  const [dateTimes, dispatchDateTimes] = result.current;
  it('initial state correct', async () => {

    expect(dateTimes).toBeInstanceOf(Object)
    expect(dateTimes.date.getDate()).toBe(18)

    await waitFor(() => {
      expect(dateTimes.times).toBeInstanceOf(Array)
    })
    await waitFor(async () => {
      setTimeout(() => { }, 2000)
      expect(dateTimes.times.length).toBeGreaterThan(0)
    })
  })

  it('allow to dispatch DATE_CHANGE', async () => {
    act(async () => {
      dispatchDateTimes({ type: 'DATE_CHANGE', date: new Date('2015-05-18') })
      await waitFor(() => {

        expect(dateTimes.times).toBeInstanceOf(Array)
        expect(dateTimes.times).toHaveLength(5)
      })
    });
    console.log(`dateTimes: ${dateTimes.times}`)
  })
})




