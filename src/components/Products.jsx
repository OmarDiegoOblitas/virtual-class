import React from 'react';
import Image from 'next/image';
import imageprueba from "../assets/realidad_more.jpeg";
import image2 from "../assets/virtualreal.jpeg"
import styles from "../../styles/Products.module.css"
function Products(props) {
    return (
        <div>
           <div className={styles.first_content}>
               <div>
                   <Image src={imageprueba} alt="imageproduct" className={styles.image}/>
               </div>
               <div className={styles.description}>
                   <h1 className={styles.title_product}>Explore a new world</h1>
                   <p className={styles.info_product}>
                       Bienvenido al mejor curso de programación en ARDUINO para iniciantes. Aquí encontrarás todas las lecciones del curso con las explicaciones detalladas, todos los códigos para que los descargues y los enlaces directos a los videos
                   </p>
                   <button className={styles.button}>View More</button>
               </div>

           </div>
          <div className={styles.second_content}>
              <div className={styles.description}>
                  <h1 className={styles.title_product}>The future is clooser</h1>
                  <p className={styles.info_product}>En este curso de Arduino aprenderás los fundamentos y las aplicaciones con referente a electrónica, robótica y programación de este programa, además de sus características y funciones generales Todo esto, con el fin de llevar a cabo el desarrollo de proyectos. </p>
                  <button className={styles.button}>learn more</button>
              </div>
              <div>
                  <Image src={image2} className={styles.image} alt="image2"></Image>
              </div>
          </div>

        </div>
    );
}

export default Products;