

const TestimonialCard = ({ testimonial }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < testimonial.rating) {
            stars.push(<span className="fa fa-star starred" key={i}></span>)
        } else {
            stars.push(<span className="fa fa-star" key={i}></span>)
        }
    }
    return (
        <article className="testimonial-card">
            <div className="testimonial-card-head">
                <h3 className="card-title">Rating</h3>
                <b>{stars}</b>
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