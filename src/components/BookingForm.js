import { useFormik } from 'formik';
import * as Yup from 'yup';



const BookingForm = ({ availableTimes, dispatch, submitForm }) => {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const formik = useFormik({
        initialValues: {
            date: "",
            time: "",
            guests: "1",
            occasion: ""
        },
        validateOnChange: true,
        validationSchema: Yup.object({
            date: Yup.date().min(today, 'Date can not be in the past').required('Required'),
            time: Yup.string().required('Required').oneOf(availableTimes, "We are not open for reservation at this time"),
            guests: Yup.number().min(1, "Minimum of 1 guest").max(10, "Maximum of 10 guests").required('Required'),
            occasion: Yup.string().required('Required').oneOf(["Birthday", "Anniversary"], "We only accept Birthday or Anniversary events")
        }),
        onSubmit: values => {
            submitForm(values)
        }
    })
    const errors = formik.errors;
    const touched = formik.touched;

    const handleDateChange = (e) => {
        formik.handleChange(e)
        if (Date.prototype.isPrototypeOf(e.target.valueAsDate)) {
            dispatch({ type: 'DATE_CHANGE', date: e.target.valueAsDate })
        }
    }

    return (
        <>
            <form id="booking-form" data-testid="booking-form" onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="res-date">Choose date</label>
                    <input type="date"
                        id="res-date"
                        name="date"
                        value={formik.values.date}
                        onChange={
                            handleDateChange
                        }
                        onBlur={formik.handleBlur} />
                    {errors.date && touched.date && (
                        <p>{errors.date}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="res-time">Choose time</label>
                    <select
                        id="res-time"
                        name="time"
                        value={formik.values.time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    >
                        <option value="" disabled hidden>Select time</option>
                        {availableTimes.map(time => <option key={time} value={time} data-testid="time-options" >{time}</option>)}
                    </select>
                    {errors.time && touched.time && (
                        <p>{errors.time}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="guests">Number of guests</label>
                    <input type="number"
                        min="1"
                        max="10"
                        id="guests"
                        name="guests"
                        value={formik.values.guests}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {errors.guests && touched.guests && (
                        <p>{errors.guests}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion"
                        name="occasion"
                        value={formik.values.occasion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}>
                        <option value="" disabled hidden>Select occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {errors.occasion && touched.occasion && (
                        <p>{errors.occasion}</p>
                    )}
                </div>
                <button aria-label="On Click" type="submit" >Make Your Reservation</button>
            </form >
        </>
    );
}

export default BookingForm;