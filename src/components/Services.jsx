import React from 'react';
import Image from "next/image";
import image1 from "../assets/pngwing.com (1).png"
import image2 from "../assets/pngwing.com (2).png"
import image3 from "../assets/pngwing.com (4).png"
import image4 from "../assets/pngwing.com (3).png"
import image5 from "../assets/pngwing.com (5).png"
import image6 from "../assets/pngwing.com (6).png"
import styles from "../../styles/Services.module.css"

function Services(props) {
    return (
        <div className={styles.container}>
            <div className={styles.first_line}>
                <div>
                    <Image src={image2} className={styles.image}></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image4}className={styles.image}></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image3} className={styles.image}></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className={styles.second_line}>
                <div>
                <Image src={image5} className={styles.image} ></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image1} className={styles.image_special}></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image6} className={styles.image}></Image>
                    <p>Lorem ipsum dolor si, esse eum provident quae repudiandae saepe similique veniam vero voluptatum.</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Services;