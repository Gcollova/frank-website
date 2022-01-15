import React from "react";
import styles from "./Sidebar.module.scss";
import { SidebarData } from "./SidebarData";
import { HashLink as Link } from 'react-router-hash-link';



const Sidebar = (props) => {
  console.log(props.status)

 
      
    

  return (
    <>
      <div className={`${styles.sidebar} ${props.status ? styles.hidden : ""}`}>
        <ul>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} >
                <Link to={val.link}>{val.title}</Link> 
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
