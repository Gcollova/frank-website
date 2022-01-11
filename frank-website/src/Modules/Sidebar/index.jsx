import React from "react";
import styles from './Sidebar.module.scss';
import {SidebarData} from './SidebarData';


const Sidebar =(props)=>{
    
    console.log(props.status)
    return(
        <>
            <div className={props.status===false ? styles.hidden : props.status===undefined? styles.hidden: props.status ? styles.sidebar : styles.hidden}>
            <ul>
            {SidebarData.map((val,key)=>{
                return(
                    <li key={key}  onClick={()=>{window.location.pathname = val.link}}>{val.title}</li>

                )
            })}
            </ul>

            </div>
        </>
    )
}

export default Sidebar