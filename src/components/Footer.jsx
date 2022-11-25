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
                   <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloribus, eaque eligendi magni ratione reiciendis repellat suscipit temporibus vero? Ab alias culpa cum dicta doloribus nesciunt nisi optio provident quisquam?
                   </p>
                   <span>datos: </span>
                   <p>www.classonline.com</p>
                   <span>phone</span>
               </div>
               <div className={styles.second_section}>
                   <h2>ABOUT US</h2>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dignissimos dolorem, facere laboriosam magnam neque nihil perferendis quas, qui ratione reprehenderit sint temporibus unde! Blanditiis doloribus et facere sapiente vel.</p>
               </div>
           </div>
            <div className={styles.footer_links}>
                    <div className={styles.footer_links_icons}>
                        <Image src={logo} className={styles.icon_logo}></Image>
                        <h1 className={styles.footer_title}>Notic</h1>
                    </div>
                    <div className={styles.logo}>
                        <span>{AiFillYoutube()}</span>
                        <span>{AiFillFacebook()}</span>
                        <span>{AiFillTwitterCircle()}</span>
                        <span>{AiFillBehanceCircle()}</span>
                        <span>{AiFillLinkedin()}</span>
                        <span>{AiFillInstagram()}</span>
                        <span>{AiOutlineWhatsApp()}</span>
                    </div>
            </div>
            <div className={styles.footer_end}>
                <p>Derechos reservados®2022</p>
            </div>
        </div>
    );
}

export default Footer;