import Logo from "../pictures/icon_assets/Logo.svg"

const Navbar = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <ul id="navbar-links">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Menu</li></a>
                <a href="#"><li>Reservations</li></a>
                <a href="#"><li>Order Online</li></a>
                <a href="#"><li>Login</li></a>
            </ul>
        </nav>
    )
}

export default Navbar