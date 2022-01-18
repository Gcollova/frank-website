import styles from './Carousel.module.scss'
import { carouselData } from "../../libs/carouselData";
import { useState, } from "react";
import { useSwipeable } from "react-swipeable";
import slideLeft from '../../img/slide_left.png'
import slideRight from '../../img/slide_right.png'

const Carousel = () => {
    const [data, setData] = useState(carouselData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flaggerMinus, setFlaggerMinus] = useState(false);
  const [flaggerMax, setFlaggerMax] = useState(false);  
  
  
  

  const updateIndex = (newIndex) => {
    if (newIndex < activeIndex) {
      const shifted = carouselData.splice(carouselData.length - 1, 1);
      carouselData.unshift(...shifted);

      setTimeout(() => {
        setFlaggerMinus(false);
      }, 500);
    } else if (newIndex > activeIndex) {
      setTimeout(() => {
        const shift = carouselData.shift();
        carouselData.push(shift);
        setFlaggerMax(false);
      }, 500);
    }

    setData(carouselData);

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (!flaggerMax) {
        updateIndex(activeIndex + 1);
        setFlaggerMax(true);
      }
    },
    onSwipedRight: () => {
      if (!flaggerMinus || flaggerMax) {
        updateIndex(activeIndex - 1);
        setFlaggerMinus(true);
      }
    },
    });
    return(
        <div {...handlers} >
                <div className={styles.carousel}>
            <div  className={`${styles.inner}`} id="slider" >
                {data.map((image, key) => {
                return (
                    <div   key={key} className={`${styles.slides} ${flaggerMinus ? styles.movementMinus : ""} ${flaggerMax ? styles.movementMax : ""}`}>
                    <img  src={image} alt={`carousel.img`} />
                    </div>
                );
                })}
            </div>
            <div className={styles.indicators}>
                <button className={styles.buttonLeft}
                onClick={() => {
                    if (!flaggerMinus || flaggerMax) {
                    updateIndex(activeIndex - 1);
                    setFlaggerMinus(true);
                    }
                }}
                >
                <img src={slideLeft} alt="slide Left" />
                </button>
                <button className={styles.buttonRight}
                onClick={() => {
                    if (!flaggerMax || flaggerMinus) {
                    updateIndex(activeIndex + 1);
                    setFlaggerMax(true);                    
                    }
                }}
                >
                <img src={slideRight} alt="slide Right" />
                </button>
            </div>
            </div>
        </div>
    )
}

export default Carousel;