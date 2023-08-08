import Main_image from '../pictures/icon_assets/restauranfood.jpg'
import Chicago from './Chicago'

const Hero = () => {
    return (
        <section id="hero">
            <article>
                <Chicago
                    title="Little Lemon"
                    city="Chicago"
                    text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                />
                <button type="button" onClick={{}} >Reserve a table</button>
            </article>
            <img src={Main_image} alt="main image" />
        </section>
    )
}

export default Hero