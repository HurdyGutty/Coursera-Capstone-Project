import BookingForm from "./BookingForm";


const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <section>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </section>
    );
};

export default BookingPage;