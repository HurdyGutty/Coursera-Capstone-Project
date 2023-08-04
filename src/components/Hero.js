import Main_image from '../pictures/icon_assets/restauranfood.jpg'

const Hero = () => {
    return (
        <section id="hero">
            <article>
                <header>
                    Little Lemon
                </header>
                <p>
                    Chicago
                </p>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button type="button" onClick={{}} >Reserve a table</button>
            </article>
            <img src={Main_image} alt="main image" />
        </section>
    )
}

export default Hero