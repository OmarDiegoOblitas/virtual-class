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
                    <Image src={image5} className={styles.image}alt="services1" ></Image>
                    <span>Fundamentos de la electronica</span>
                    <p>Aprende como se COMPONE la Tarjeta ARDUINO, entiendo lo que lleva la placa y aprende a Descargar el Software y a programar el ARDUINO.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image4}className={styles.image} alt="services2" ></Image>
                    <span>Acelerometro y Giroscopio</span>
                    <p>Aprende como funciona un Acelerómetro y Giroscópio y para este caso usamos un Arduino y un BMI160 para ejemplificar su uso y aplicación.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image3} className={styles.image} alt="services3" ></Image>
                    <span>Temperatura , humedad y presion</span>
                    <p>Control PID de Temperatura con Arduino (Tutorial) explicado en DETALLE y con ejemplo REAL de implementación.</p>
                    <button>Add to Cart</button>
                </div>
            </div>
            <div className={styles.second_line}>
                <div>
                <Image src={image2} className={styles.image} alt="services4" ></Image>
                    <span>Sensores, Wifi y Bluetooth</span>
                    <p>Aprende como usar el módulo HC05/HC06 para realizar una comunicación Bluetooth con Arduino de forma inalámbrica. Códigos y videos tutoriales.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image1} className={styles.image_special} alt="services5" ></Image>
                    <span>Comunicacion serial</span>
                    <p>Aprende como realizar una Comunicación Serial entre Arduino y Simulink/Matlab. O con otro instrumento usando el instrument control toolbox.</p>
                    <button>Add to Cart</button>
                </div>
                <div>
                <Image src={image6} className={styles.image} alt="services6" ></Image>
                    <span>Lenguaje Arduino </span>
                    <p>Variables, Constantes, Crear comentarios, Operadores aritméticos, Uso del for, Manejo de funciones, Arreglos </p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Services;