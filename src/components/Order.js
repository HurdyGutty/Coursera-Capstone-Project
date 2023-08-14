import mealTimes from "../contents/mealTimes"
import Dish from "./Dish";
import { useState } from "react";

const Order = () => {
    const meals = Object.keys(mealTimes);
    const [meal, setMeal] = useState(meals[0])
    return (
        <section>
            <header className='section-title'>
                ORDER FOR DELIVERY
            </header>
            <div id="meals-time">
                {meals.map(meal =>
                    <button
                        className="meal-catalog"
                        key={meal}
                        value={meal}
                        onClick={e => setMeal(meal)}>
                        {meal}
                    </button>
                )}
            </div>
            <section id="dishes-scroll">
                {mealTimes[meal].map(dish =>
                    <Dish
                        className="dish-card"
                        key={dish.id}
                        dish={dish}
                    />
                )}
            </section>
        </section>
    )
}
export default Order