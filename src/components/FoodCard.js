import Delivery from "../pictures/icon_assets/delivery.png"

const FoodCard = ({ food }) => {
    return (
        <article id="food-card">
            <img src={food.image} alt="Greek salad" />
            <header>
                <h3>{food.name}</h3>
            </header>
            <span>{food.price}</span>
            <p>{food.description}</p>
            <b>Order a delivery</b>
            <img src={Delivery} alt="Delivery" />
        </article>
    )
}

export default FoodCard