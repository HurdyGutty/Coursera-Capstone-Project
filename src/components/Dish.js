

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
        </article>
    )
}

export default Dish