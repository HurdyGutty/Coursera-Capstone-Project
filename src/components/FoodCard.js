import Delivery from "../pictures/icon_assets/delivery.png"

const FoodCard = ({ food }) => {
    return (
        <article className="food-card">
            <img src={food.image} alt="Greek salad" />
            <div className="card-content">
                <div className="card-head">
                    <header>
                        <h3 className="card-title">{food.name}</h3>
                    </header>
                    <span>${food.price}</span>
                </div>
                <p>{food.description}</p>
                <b>
                    <a href="#">
                        Order a delivery <img src={Delivery} alt="Delivery" />
                    </a>
                </b>
            </div>
        </article>
    )
}

export default FoodCard