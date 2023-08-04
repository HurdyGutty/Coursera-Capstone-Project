import food from '../contents/food'
import FoodCard from './FoodCard'

const Highlights = () => {
    return (
        <section id="highlights">
            <header>
                <h1>This weeks specials!</h1>
            </header>
            <button type="button" onClick={{}} >Online Menu</button>
            <div id="food-cards-container">
                <FoodCard food={food["greek salad"]} />
                <FoodCard food={food["bruchetta"]} />
                <FoodCard food={food["lemon dessert"]} />
            </div>
        </section>
    )
}
export default Highlights
