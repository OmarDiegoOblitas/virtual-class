import React from 'react';
import {AiFillYoutube,AiFillTwitterCircle,AiFillFacebook,AiFillBehanceCircle,AiOutlineWhatsApp,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import styles from '../../styles/Footer.module.css'
import logo from "../assets/small-robot-metal-ai-by-Vexels.svg"
import Image from "next/image";

function Footer(props) {
    return (
        <div>
           <div className={styles.content}>
               <div className={styles.footer_info}>
                   <h2>Contact</h2>
                   <span>Ubicacion: <strong>Av.Camacho#523</strong></span>
                   <span>Celular: <strong>+59173292019</strong> </span>
                   <span>WWW.classOnline.com.bo</span>
               </div>

               <div className={styles.second_section}>
                   <h2>ABOUT US</h2>
                   <p>Este curso de arduino ha sido estructurado pedagógicamente mediante recursos educativos compartidos directamente, bajo Licencia Estándar. Así como recursos creados por Academy Notic, compartidos bajo Licencia Creative Commons.

                       Si necesita obtener más información sobre derechos de autor, por favor envíe una solicitud de contacto.</p>
               </div>
           </div>
            <div className={styles.footer_links}>
                    <div className={styles.footer_links_icons}>
                        <Image src={logo} className={styles.icon_logo} alt="icon_logo"></Image>
                        <h1 className={styles.footer_title}>Notic</h1>
                    </div>
                    <div className={styles.logo}>
                        <span className={styles.footer_icon}>{AiFillYoutube()}</span>
                        <span className={styles.footer_icon}>{AiFillFacebook()}</span>
                        <span className={styles.footer_icon}>{AiFillTwitterCircle()}</span>
                        <span className={styles.footer_icon}>{AiFillBehanceCircle()}</span>
                        <span className={styles.footer_icon}>{AiFillLinkedin()}</span>
                        <span className={styles.footer_icon}>{AiFillInstagram()}</span>
                        <span className={styles.footer_icon}>{AiOutlineWhatsApp()}</span>
                    </div>
            </div>
            <div className={styles.footer_end}>
                <p>Derechos reservados®2022</p>
            </div>
        </div>
    );
}

export default Footer;