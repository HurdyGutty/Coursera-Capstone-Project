import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: "1",
        occasion: ""
    })

    const handleDateChange = e => {
        if (Date.prototype.isPrototypeOf(e.target.valueAsDate)) {
            setFormData(data => ({ ...data, date: e.target.valueAsDate.toISOString().substring(0, 10) }))
            dispatch({ day: e.target.valueAsDate.getDay() })
        }

    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <header className="title">
                <h1>Book Now</h1>
            </header>
            <form id="booking-form" data-testid="booking-form" onSubmit={handleSubmit}>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date"
                    value={formData.date}
                    onChange={
                        handleDateChange
                    } />

                <label htmlFor="res-time">Choose time</label>
                <select
                    id="res-time "
                    value={formData.time}
                    onChange={e => setFormData(data => ({ ...data, time: e.target.value }))}
                >
                    <option value="" disabled hidden>Select time</option>
                    {availableTimes.map(time => <option key={time} value={time} >{time}</option>)}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" min="1" max="10" id="guests"
                    value={formData.guests}
                    onChange={e => setFormData(data => ({ ...data, guests: e.target.value }))} />

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    value={formData.occasion}
                    onChange={e => setFormData(data => ({ ...data, occasion: e.target.value }))}>
                    <option value="" disabled hidden>Select occasion</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <button type="submit" >Make Your Reservation</button>
            </form >
        </>
    );
}

export default BookingForm;