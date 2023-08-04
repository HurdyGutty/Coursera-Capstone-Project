

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="testimonial-card">
            <h4>Rating</h4>
            <span>{testimonial.rating}/5</span>
            <img src={testimonial.avatar} alt="avatar" />
            <p>{testimonial.name}</p>
            <p>{testimonial.comment}</p>
        </article>
    )
}

export default TestimonialCard