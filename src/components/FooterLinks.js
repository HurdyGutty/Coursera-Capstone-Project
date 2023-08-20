

const FooterLinks = ({ info }) => {
    return (
        <section className="footer-links">
            <header>
                <h2 className="about-link-title">{info.title}</h2>
            </header>
            <ul>
                {info.links.map((link, index) => {
                    return (
                        <li key={index}>
                            <a href={link.link} >
                                {link.name}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default FooterLinks