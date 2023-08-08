import Restaurant_staff_A from "../pictures/icon_assets/Mario and Adrian b.jpg"
import Restaurant_staff_B from "../pictures/icon_assets/restaurant chef B.jpg"
import Chicago from "./Chicago"


const About = () => {
    return (
        <section id="about">
            <article id="about-section-style">
                <Chicago
                    title="Little Lemon"
                    city="Chicago"
                    text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
                />
            </article>
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