import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/logo_black.png'
import menu from '../../img/menu-icon.png'
import Sidebar from '../Sidebar'


const Header = () =>{
    
    const [menuState,setMenuState]= useState(false);
    console.log(menuState);

    return(
        <>
            <nav className={styles.nav}>
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