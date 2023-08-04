import Restaurant_staff_A from "../pictures/icon_assets/Mario and Adrian b.jpg"
import Restaurant_staff_B from "../pictures/icon_assets/Mario and Adrian b.jpg"


const About = () => {
    return (
        <section id="about">
            <header>
                <h1>About</h1>
            </header>
            <p>Chicago</p>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <section id="about-pictures">
                <img src={Restaurant_staff_A} alt="restaurant staff" />
                <img src={Restaurant_staff_B} alt="restaurant staff" />
            </section>
        </section>
    )
}

export default About