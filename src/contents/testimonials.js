import JohnDoe from "../pictures/icon_assets/john_doe.jpg"
import JaneDoe from "../pictures/icon_assets/jane_doe.jpg"
import JohnSmith from "../pictures/icon_assets/john_smith.jpg"
import JaneSmith from "../pictures/icon_assets/jane_smith.jpg"

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        rating: 5,
        comment: "Nice place, great food, good service.",
        avatar: JohnDoe,
    },
    {
        id: 2,
        name: "Jane Doe",
        rating: 4,
        comment: "Cosy restaurant, good food, nice service.",
        avatar: JaneDoe,
    },
    {
        id: 3,
        name: "John Smith",
        rating: 2,
        comment: "Not many window seats, food was ok, service was slow.",
        avatar: JohnSmith,
    },
    {
        id: 4,
        name: "Jane Smith",
        rating: 3,
        comment: "Good food, nice service, but the place was a bit too noisy.",
        avatar: JaneSmith,
    }
]

export default testimonials