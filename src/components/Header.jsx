import React from 'react';
import styles from'../../styles/Header.module.css'
import logo_icon from "../assets/small-robot-metal-ai-by-Vexels.svg"
import Image from "next/image";

function Header(props) {
    return (
        <div>
           <div className={styles.header}>
              <div className={styles.header_logo}>
                  <Image src={logo_icon} width={50} height={50} alt="icon_logo"/>
                  <h1 className={styles.title}>NOTIC</h1>
              </div>
               <div className={styles.button}>
                   <button type="submit">Sign Up</button>
                   <button type="submit">Sign In</button>
               </div>
           </div>
           <div className={styles.links}>
               <ul className={styles.links_title}>
                   <li><a href="#">Course</a></li>
                   <li><a href="#">Product</a></li>
                   <li><a href="#">About</a></li>
                   <li><a href="#">Comunity</a></li>
                   <li><a href="#">Teachers</a></li>
               </ul>
           </div>
        </div>
    );
}

export default Header;