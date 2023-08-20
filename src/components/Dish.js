

const Dish = ({ dish }) => {
    return (
        <article className="dish-card">
            <header className="dish-title card-title">
                <h3>{dish.name}</h3>
            </header>
            <p className="dish-description">
                {dish.description}
            </p>
            <p className="dish-price">
                ${dish.price}
            </p>
            <img className="dish-image" src={dish.image} alt={dish.name} />
        </article>
    )
}

export default Dish