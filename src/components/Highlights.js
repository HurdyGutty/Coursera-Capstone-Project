import food from '../contents/food'
import FoodCard from './FoodCard'

const Highlights = () => {
    return (
        <section id="highlights">
            <header className='title'>
                This weeks specials!
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
