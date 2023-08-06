import Restaurant_staff_A from "../pictures/icon_assets/Mario and Adrian b.jpg"
import Restaurant_staff_B from "../pictures/icon_assets/restaurant chef B.jpg"


const About = () => {
    return (
        <section id="about">
            <div id="about-section-style">
                <header>
                    <h1 className="title">Little Lemon</h1>
                </header>
                <p className="city">Chicago</p>
                <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
            </div>
            <section id="about-pictures">
                <div id="mask-restaurant-chef-A">
                    <img src={Restaurant_staff_A} alt="restaurant staff" />
                </div>
                <div id="mask-restaurant-chef-B">
                    <img src={Restaurant_staff_B} alt="restaurant staff" />
                </div>
            </section>
        </section>
    )
}

export default About