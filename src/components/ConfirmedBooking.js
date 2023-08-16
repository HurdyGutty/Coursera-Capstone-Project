import { useNavigate } from "react-router-dom";

const ConfirmBooking = () => {
    const navigate = useNavigate()
    return (
        <section>
            <header>
                <h1>Your reservation has been submitted</h1>
            </header>
            <p>Thank you for your reservation. We will contact you shortly about your reservation.</p>
            <button onClick={e => navigate("/")}>Back to home</button>
        </section>
    )
}

export default ConfirmBooking;