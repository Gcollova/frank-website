import React from "react";
import styles from './AboutTwo.module.scss'
import fotoProfile from '../../img/foto-profile.jpeg'
import collabsFoto from '../../img/loghi-collab.jpg'

const AboutTwo = () =>{


    return(
        <>
            <main className={styles.main}>

                <div className={styles.profile}><img src={fotoProfile} alt={fotoProfile}  /></div>
                <img src={collabsFoto} alt={collabsFoto} className={styles.collabs} />
                <div className={styles.info}>
                <div><p><h2>+200</h2><h5>Video Musicali</h5></p></div>
                <div><p><h2>+30</h2><h5>Weddings</h5></p></div>
                <div><p><h2>+40</h2><h5>Spot Aziendali</h5></p></div>
                <div><p><h2>+30</h2><h5>Eventi</h5></p></div>    
                   
                </div>

                <button>GUARDA I MIEI LAVORI</button>
                

            </main>
        </>

    )
}

export default AboutTwo;