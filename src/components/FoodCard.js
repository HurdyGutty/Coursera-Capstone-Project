import Delivery from "../pictures/icon_assets/delivery.png"
import { Link } from "react-router-dom"

const FoodCard = ({ food }) => {

    return (
        <article className="food-card">
            <img src={food.image} alt={food.name} />
            <div className="card-content">
                <div className="card-head">
                    <header>
                        <h3 className="card-title">{food.name}</h3>
                    </header>
                    <span>${food.price}</span>
                </div>
                <p>{food.description}</p>
                <b>
                    <Link to="/order">
                        Order a delivery <img src={Delivery} alt="Delivery" />
                    </Link>
                </b>
            </div>
        </article>
    )
}

export default FoodCard