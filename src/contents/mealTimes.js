import greekSalad from '../pictures/icon_assets/greek salad.jpg';
import bruschetta from '../pictures/icon_assets/bruchetta.svg';
import grilledFish from '../pictures/icon_assets/grilled-fish.jpg';
import lambChops from '../pictures/icon_assets/lamb-chops.webp';
import chickenSouvlaki from '../pictures/icon_assets/Chicken-Souvlaki.jpg';
import lemonDessert from '../pictures/icon_assets/lemon dessert.jpg';
import baklava from '../pictures/icon_assets/baklava.png';
import galaktoboureko from '../pictures/icon_assets/galaktoboureko.jpg';
import tzatziki from '../pictures/icon_assets/tzatziki.webp';
import spanakopita from '../pictures/icon_assets/spanakopita.jpg';

const mealTimes = {
    "Lunch": [
        {
            "id": 1,
            "name": "Greek Salad",
            "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            "price": 5.99,
            "image": greekSalad
        },
        {
            "id": 2,
            "name": "Bruchetta",
            "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            "price": 4.99,
            "image": bruschetta
        }
    ],
    "Mains": [
        {
            "id": 3,
            "name": "Grilled Fish",
            "description": "Grilled fish is a simple dish that can be prepared in a variety of ways. The fish is cooked on a grill, usually over hot coals.",
            "price": 12.99,
            "image": grilledFish
        },
        {
            "id": 4,
            "name": "Lamb Chops",
            "description": "Our Lamb chops are the finest cut of lamb that is cooked on the grill and served with a side of vegetables and potatoes.",
            "price": 14.99,
            "image": lambChops
        },
        {
            "id": 5,
            "name": "Chicken Souvlaki",
            "description": "Our Chicken Souvlaki is a Greek orginal dish made with chicken which has been marinated in a mixture of lemon juice, olive oil, garlic, and oregano, then grilled on skewers.",
            "price": 10.99,
            "image": chickenSouvlaki
        }
    ],
    "Desserts": [
        {
            "id": 6,
            "name": "Lemon Dessert",
            "description": "Our Lemon Dessert is a traditional Greek dessert made with a creamy, lemony custard and a crunchy, golden-brown crust of phyllo pastry.",
            "price": 4.99,
            "image": lemonDessert
        },
        {
            "id": 7,
            "name": "Baklava",
            "description": "Baklava is a rich, sweet dessert pastry made of layers of filo filled with chopped nuts, sweetened and held together with syrup or honey.",
            "price": 6.99,
            "image": baklava
        },
        {
            "id": 8,
            "name": "Galaktoboureko",
            "description": "Galaktoboureko is a traditional Greek dessert of semolina custard with filo layers, soaked in a lemon syrup.",
            "price": 5.99,
            "image": galaktoboureko
        }
    ],
    "A La Carte": [
        {
            "id": 9,
            "name": "Lamb Chops",
            "description": "Our Lamb chops are the finest cut of lamb that is cooked on the grill and served with a side of vegetables and potatoes.",
            "price": 14.99,
            "image": lambChops
        },
        {
            "id": 10,
            "name": "Chicken Souvlaki",
            "description": "Our Chicken Souvlaki is a Greek orginal dish made with chicken which has been marinated in a mixture of lemon juice, olive oil, garlic, and oregano, then grilled on skewers.",
            "price": 10.99,
            "image": chickenSouvlaki
        }
    ],
    "Specials": [
        {
            "id": 11,
            "name": "Tzatziki",
            "description": "Our Tzatziki is a Greek sauce made from yogurt, cucumber, garlic, olive oil, and fresh dill, usually served as a dip with pita bread or as a sauce for souvlaki and gyros.",
            "price": 3.99,
            "image": tzatziki
        },
        {
            "id": 12,
            "name": "Spanakopita",
            "description": "Our Spanakopita is a Greek savory pastry made with a special filling and wrapped in phyllo pastry.",
            "price": 4.99,
            "image": spanakopita
        }
    ]
}

export default mealTimes;