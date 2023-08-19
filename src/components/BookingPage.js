import BookingForm from "./BookingForm";


const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
    return (
        <section>
            <header className="title">
                <h1>Book Now</h1>
            </header>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
        </section>
    );
};

export default BookingPage;