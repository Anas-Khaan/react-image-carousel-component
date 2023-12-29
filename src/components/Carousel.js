import { useState } from "react";
import './Carousel.css';
function Carousel() {
    let [image, setImage] = useState(1);

    function next() {
        if (image < 5) {
            console.log(image)
            image = image + 1;
            setImage(image)
        }
        else {
            setImage(image = 1)
        }
    };
    function previous() {
        if (image > 1) {
            console.log(image)
            image = image -1;
            setImage(image)
        }
        else {
            setImage(image = 5)
        }
    };

    return (
        <div className="container">
            <button onClick={previous} className="next"> ⬅ Previous </button>
            <img src={`.//images/icon-${image}.jpeg`} className="images"></img>
            <button onClick={next} className="previous">Next ⮕</button>
        </div>
    )
}

export default Carousel;