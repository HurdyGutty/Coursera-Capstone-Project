import footer_info from "../contents/footer_info"
import FooterLinks from "./FooterLinks"
import Restaurant from "../pictures/icon_assets/restaurant.jpg"

const Footer = () => {
    return (
        <footer id="footer">
            <img src={Restaurant} alt="restaurant interior" />
            <section>
                {footer_info.map((info) => <FooterLinks info={info} />)}
            </section>
        </footer>
    )
}

export default Footer