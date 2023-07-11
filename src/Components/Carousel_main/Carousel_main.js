import { useEffect, useState } from "react";
import Carousel1 from "../CarouselComp/Carousel1/Carousel1";
import Carousel2 from "../CarouselComp/Carousel2/Carousel2";
import "./Carousel_main.css";

const Carousel = () => {
  const [currentCarousel, setCurrentCarousel] = useState(0);
  const carouselObjects = [<Carousel1/>,<Carousel2/>]

  useEffect(() => {
    if (carouselObjects.length-1 < currentCarousel) {
        setCurrentCarousel(0)
    }
    const interval = setInterval(() => setCurrentCarousel(currentCarousel + 1), 5000); 
    return () => {
        clearInterval(interval)
    };
  }, [setCurrentCarousel, carouselObjects.length, currentCarousel]);

    return (
        <div className="carousel-item">
            {carouselObjects[currentCarousel]}
        </div>
    )
};

export default Carousel;

