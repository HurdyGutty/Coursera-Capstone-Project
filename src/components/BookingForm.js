import { useState } from "react";
import availableTimes from "../contents/availableTimes";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        date: Date(now),
        time: "17:00",
        guests: "1",
        occasion: ""
    })
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form id="booking-form" style="display: grid; max-width: 200px; gap: 20px" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date"
                value={formData.date}
                onChange={
                    e => setFormData(data => ({ ...data, date: Date(e.target.value) }))
                } />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " value={formData.time} onChange={e => setFormData(data => ({ ...data, time: e.target.value }))}>
                {availableTimes.map(time => <option key={time} value={time} />)}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" defaultValue="1" min="1" max="10" id="guests"
                value={formData.guests}
                onChange={e => setFormData(data => ({ ...data, guests: e.target.value }))} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion"
                value={formData.occasion}
                placeholder="Select occasion"
                onChange={e => setFormData(data => ({ ...data, guests: e.target.value }))}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form >
    );
}

export default BookingForm;