import mealTimes from "../contents/mealTimes"
import Dish from "./Dish";
import { useState } from "react";

const Order = () => {
    const meals = Object.keys(mealTimes);
    const [meal, setMeal] = useState(meals[0])
    return (
        <section id="order">
            <header className='section-title'>
                ORDER FOR DELIVERY
            </header>
            <div id="meals-time" role="tablist" aria-label="Choosing meals">
                {meals.map(meal =>
                    <div
                        className="meal-catalog"
                        role="tab"
                        aria-selected="true"
                        aria-controls="dishes-scroll"
                        key={meal}
                        value={meal}
                        onClick={e => setMeal(meal)}>
                        {meal}
                    </div>
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