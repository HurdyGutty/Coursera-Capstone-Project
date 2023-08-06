import Logo from "../pictures/icon_assets/Logo.svg"
import Hamburger from "../pictures/icon_assets/🦆 icon _hamburger menu.svg"

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <div id="navbar-links-container">
                <img src={Hamburger} alt="Menu" />
                <ul id="navbar-links">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Menu</li></a>
                    <a href="#"><li>Reservations</li></a>
                    <a href="#"><li>Order Online</li></a>
                    <a href="#"><li>Login</li></a>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar