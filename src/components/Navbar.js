import Logo from "../pictures/icon_assets/Logo.svg"
import Hamburger from "../pictures/icon_assets/🦆 icon _hamburger menu.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <div id="navbar-links-container">
                <img src={Hamburger} alt="Menu" />
                <ul id="navbar-links">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/reservation"><li>Reservations</li></Link>
                    <Link to="/order"><li>Order Online</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar