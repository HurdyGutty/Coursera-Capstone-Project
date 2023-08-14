import BookingForm from "./BookingForm";


const BookingPage = ({ availableTimes, dispatch }) => {
    return (
        <section>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </section>
    );
};

export default BookingPage;