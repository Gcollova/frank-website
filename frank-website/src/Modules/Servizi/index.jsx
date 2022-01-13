import styles from './Servizi.module.scss'
import { carouselData } from '../../libs/carouselData'
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Servizi = () =>{
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex =(newIndex)=>{

        if(newIndex < 0){
            newIndex = carouselData.length -1
        }  else if (newIndex >= carouselData.length ){
            
            newIndex = 0
        }

        setActiveIndex(newIndex);

    }


    const handlers = useSwipeable({
        onSwipedLeft:() =>updateIndex(activeIndex +1),
        onSwipedRight:() =>updateIndex(activeIndex -1)
    })


    return(
        <>
            <div {...handlers} className={styles.main}>
            
                <div className={styles.carousel}>
                    <div className={styles.inner} style={{transform:`translateX(-${activeIndex * 100}%)` }}>
                        {carouselData.map((image,key)=>{
                        return(
                            <div key={key} className={styles.slides}><img src={image} alt={`carousel.img`} /></div>
                        )
                        })}
                    </div>
                    <div className={styles.indicators}>
                        <button onClick={()=>{ updateIndex(activeIndex -1) }}>Previous</button>
                        <button onClick={()=>{ updateIndex(activeIndex +1) }}>Next</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Servizi;