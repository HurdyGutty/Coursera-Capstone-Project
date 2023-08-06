

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="testimonial-card">
            <div className="testimonial-card-head">
                <h3 className="card-title">Rating</h3>
                <b>{testimonial.rating}/5</b>
            </div>
            <div className="testimonial-avatar">
                <img src={testimonial.avatar} alt="avatar" />
                <p>{testimonial.name}</p>
            </div>
            <p>{testimonial.comment}</p>
        </article>
    )
}

export default TestimonialCard