import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import { useReducer } from 'react';
import timetables from "./contents/availableTimes";
import { renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const initialTimes = () => timetables;

const updateTimes = (state, action) => {
  if (action.day === 0) {
    return state.slice().splice(-2, 2);
  }
  if (action.day === 1) {
    return state.slice(1, -1);
  }
  if (action.day === 2) {
    return state.slice().splice(0, 2);
  }
  return state;
};
const { result } = renderHook(() => useReducer(updateTimes, initialTimes()));
const [availableTimes, dispatchAvailableTimes] = result.current;


test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatchAvailableTimes} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes should return the initial state', () => {
  expect(initialTimes()).toEqual(timetables);
})

test('timetables should be an array', () => {
  expect(timetables).toStrictEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
})

test('updateTimes should return the updated state', () => {
  expect(updateTimes(timetables, { day: 0 })).toEqual(timetables.slice().splice(-2, 2));
  expect(updateTimes(timetables, { day: 1 })).toEqual(timetables.slice(1, -1));
  expect(updateTimes(timetables, { day: 2 })).toEqual(timetables.slice().splice(0, 2));
  expect(updateTimes(timetables, { day: 3 })).toEqual(timetables);
})

test('Renders the BookingForm submit button', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatchAvailableTimes} />);
  const buttonElement = screen.getByText("Make Your Reservation");
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveAttribute("type", "submit");
})

test('Button should fire the handleSubmit function', () => {
  const dispatch = jest.fn();
  console.log = jest.fn();

  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const dateInput = screen.getByLabelText("Choose date");
  const timeInput = screen.getByRole("combobox", { name: "" });
  const guestInput = screen.getByLabelText("Number of guests");
  const occasionInput = screen.getByRole("combobox", { name: "Occasion" });

  const buttonElement = screen.getByText("Make Your Reservation");
  const formElement = screen.getByTestId("booking-form");

  expect(buttonElement).toBeInTheDocument();
  fireEvent.change(dateInput, { target: { value: "2023-08-14" } });
  userEvent.selectOptions(timeInput, "18:00")
  fireEvent.change(guestInput, { target: { value: "1" } })
  userEvent.selectOptions(occasionInput, "Birthday")
  fireEvent.click(buttonElement);
  fireEvent.submit(formElement);

  expect(dispatch).toHaveBeenCalledWith({ day: 1 })
  expect(console.log.mock.calls[0][0]).toStrictEqual({
    date: '2023-08-14',
    time: '18:00',
    guests: '1',
    occasion: 'Birthday'
  })
}
)
