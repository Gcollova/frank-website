import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo_black.png'
import menu from '../../img/menu-icon.png'
import Sidebar from '../Sidebar'


const Header = () =>{
    const [transparency,setTransparency] = useState(false);

    window.addEventListener('scroll',((e)=>{if(window.scrollY > 50){setTransparency(true)} else if(window.scrollY === 0){setTransparency(false)}}))
    
    const [menuState,setMenuState]= useState(false);
    

    return(
        <>
            <nav className={!transparency ? styles.nav :styles.navWhite}>
                <img className={styles.logo} src={logo} alt="Logo" />
                {/* <ul>
                    <li>About</li>
                    <li>Works</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul> */}
                <button onClick={()=> {if(!menuState){setMenuState(true)}else if(menuState){setMenuState(false)}}}><img src={menu} alt="Menu" /></button>
            </nav>
            <Sidebar status={menuState} />
        </>
    )
}

export default Header