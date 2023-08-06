import Main_image from '../pictures/icon_assets/restauranfood.jpg'

const Hero = () => {
    return (
        <section id="hero">
            <article>
                <header className='title'>
                    Little Lemon
                </header>
                <p className='city'>
                    Chicago
                </p>
                <p className='description_text'>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
                <button type="button" onClick={{}} >Reserve a table</button>
            </article>
            <img src={Main_image} alt="main image" />
        </section>
    )
}

export default Hero