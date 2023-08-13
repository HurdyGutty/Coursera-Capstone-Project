import Main_image from '../pictures/icon_assets/restauranfood.jpg'
import Chicago from './Chicago'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <section id="hero">
            <article>
                <Chicago
                    title="Little Lemon"
                    city="Chicago"
                    text="We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
                />
                <button type="button" onClick={e => navigate("/reservation")} >Reserve a table</button>
            </article>
            <img src={Main_image} alt="main image" />
        </section>
    )
}

export default Hero