

const FooterLinks = ({ info }) => {
    return (
        <section id="footer-links">
            <header>
                <h2>{info.title}</h2>
            </header>
            <ul>
                {info.links.map((link) => {
                    return (
                        <a href={link.link}>
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