

const FooterLinks = ({ info }) => {
    return (
        <section className="footer-links">
            <header>
                <h2 className="about-link-title">{info.title}</h2>
            </header>
            <ul>
                {info.links.map((link, index) => {
                    return (
                        <a href={link.link} key={index}>
                            <li>
                                {link.name}
                            </li>
                        </a>
                    )
                })}
            </ul>
        </section>
    )
}

export default FooterLinks