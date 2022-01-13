import React from "react";
import styles from './About.module.scss'

const About = () =>{


    return(
        <>
            <main className={styles.main}>

                <div className={styles.paragraph}>
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

            </main>
        </>

    )
}

export default About;