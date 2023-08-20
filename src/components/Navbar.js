import { useState } from "react"
import Logo from "../pictures/icon_assets/Logo.svg"
import Hamburger from "../pictures/icon_assets/🦆 icon _hamburger menu.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [isLinkShown, setIsLinkShown] = useState(false)
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <div id="navbar-links-container" onClick={e => setIsLinkShown(status => !status)}>
                <img src={Hamburger} alt="Menu" />
                <ul id="navbar-links" className={isLinkShown ? "" : "nav-invisible"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/reservation">Reservations</Link></li>
                    <li><Link to="/order">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar