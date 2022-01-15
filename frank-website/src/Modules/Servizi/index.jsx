import styles from "./Servizi.module.scss";
import { carouselData } from "../../libs/carouselData";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const Servizi = () => {
  const [data, setData] = useState(carouselData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [flaggerMinus, setFlaggerMinus] = useState(false);
  const [flaggerMax, setFlaggerMax] = useState(false);
  const [animation, setAnimation] = useState(false);

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

    console.log(carouselData);
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

  return (
    <>
      <div {...handlers} className={styles.main} id="services">
        <div className={styles.carousel}>
          <div className={`${styles.inner}`} id="slider">
            {data.map((image, key) => {
              return (
                <div
                  key={key}
                  className={`${styles.slides} ${
                    flaggerMinus ? styles.movementMinus : ""
                  } ${flaggerMax ? styles.movementMax : ""}`}
                >
                  <img src={image} alt={`carousel.img`} />
                </div>
              );
            })}
          </div>
          <div className={styles.indicators}>
            <button
              onClick={() => {
                if (!flaggerMinus || flaggerMax) {
                  updateIndex(activeIndex - 1);
                  setFlaggerMinus(true);
                }
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (!flaggerMax || flaggerMinus) {
                  updateIndex(activeIndex + 1);
                  setFlaggerMax(true);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servizi;
