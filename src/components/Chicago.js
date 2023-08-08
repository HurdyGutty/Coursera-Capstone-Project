

const Chicago = ({ title, city, text }) => {
    return (
        <>
            <header className='title'>
                {title}
            </header>
            <p className='city'>
                {city}
            </p>
            <p className='description_text'>
                {text}
            </p>
        </>
    )
}

export default Chicago;