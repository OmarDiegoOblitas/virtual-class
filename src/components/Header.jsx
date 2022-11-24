import React from 'react';
import styles from'../../styles/Header.module.css'

function Header(props) {
    return (
        <div>
           <div className={styles.header}>
              <div>
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