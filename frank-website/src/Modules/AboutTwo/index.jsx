import React from "react";
import styles from './AboutTwo.module.scss'

import collabsFoto from '../../img/loghi-collab.jpg'
import { useState } from "react";

const AboutTwo = () =>{
    const [description,setDescription] = useState(false)


    return(
        <>
            <main className={styles.main}>
            
                
                <div className={styles.profile}></div>
                <img src={collabsFoto} alt={collabsFoto} className={styles.collabs} />
                <div className={styles.info}>
                <div><h2>+200</h2><h5>Video Musicali</h5></div>
                <div><h2>+30</h2><h5>Weddings</h5></div>
                <div><h2>+40</h2><h5>Spot Aziendali</h5></div>
                <div><h2>+30</h2><h5>Eventi</h5></div>    
                   
                </div>

                <button onClick={()=> {setDescription(true);document.body.classList.toggle(`${styles.oHidden}`) } }>ABOUT ME</button>
                <button>GUARDA I MIEI LAVORI</button>
                <div className={`${styles.description} ${description ? styles.descriptionHidden : ""}`}>
                    <div>
                        <p>Frank Falletta è un videomaker palermitano, classe 1993.
                            È laureato all'accademia di Belle Arti di Palermo, nell'indirizzo Audio, Video e Multimedia.
                            Da sempre appassionato per il cinema e per il video, inizia nel 2015 la sua esperienza nel settore audiovisivo,
                            realizzando il suo primo videoclip musicale "Apocalisse".
                            Negli anni successivi comincia pian piano ad espandersi sul territorio Europeo,
                            realizzando video a Roma, Firenze, Asiago, Pisa, Chioggia, Milano, Amburgo, Londra e Madrid.
                            Nel 2019 apre il suo studio di produzione video, denominato Shuttle Lab.
                            situato a Bagheria e inizia ad operare anche nel settore del wedding.
                            Ha realizzato video di grosso impatto mediatico come "Non dirmi no" di Alessio Selvaggio,
                            finalista del talent show "All togheter Now" targato Canale 5,
                            "Loyalty" del collettivo agrigentino "92 Impero" e ha contribuito, grazie ai suoi prodotti audiovisivi,
                            all'accrescimento comunicativo dei comuni di Pollina e Bagheria. 
                            Ha partecipato all'iniziativa sociale idealizzata dalla Fondazione Giglio di Cefalù per la
                            "Giornata mondiale Igiene delle mani" e tutt'ora collabora con la fondazione per la creazione
                            di contenuti multimediali destinati alla presentazione dei nuovi reparti o macchinari.
                            È stato scelto come videomaker rappresentante la città di Palermo nell'iniziativa nazionale
                            Heroes Never Sleep. Al momento lavora con più di 100 clienti fra cantanti, musicisti, artigiani, commercianti e privati
                            e collabora con lo studio di produzione musicale Borealis con lo studio fotografico Di Calì.
                        </p>
                    </div>
                 <button onClick={()=> {setDescription(false);document.body.classList.toggle(`${styles.oHidden}`)  } }>Chiudi</button>
                </div>
            
                

            </main>
        </>

    )
}

export default AboutTwo;