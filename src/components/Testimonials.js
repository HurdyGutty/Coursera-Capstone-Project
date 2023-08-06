import testimonials from "../contents/testimonials"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
    return (
        <section id="testimonials">
            <header>
                <h3 className="title">Testimonials</h3>
            </header>
            <section id="testimonials-cards-container">
                {
                    testimonials.map
                        (
                            (testimonial) =>
                            (
                                <TestimonialCard testimonial={testimonial} key={testimonial.id} />
                            )
                        )
                }
            </section>
        </section>
    )
}

export default Testimonials