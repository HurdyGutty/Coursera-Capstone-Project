import BookingForm from "./BookingForm";


const BookingPage = ({ availableTimes, dispatch }) => {
    return (
        <>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </>
    );
};

export default BookingPage;