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
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur consequuntur cupiditate distinctio doloremque, dolorum earum est incidunt inventore minima necessitatibus neque odit pariatur qui, quidem quis soluta tempore veniam!
                   </p>
                   <button className={styles.button}>View More</button>
               </div>

           </div>
          <div className={styles.second_content}>
              <div>
                  <h1>The future is clooser</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad autem consectetur culpa cupiditate dicta dolorum eos, ipsum iste minus modi natus omnis placeat quia sed sequi, tenetur totam ullam!</p>
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