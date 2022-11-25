import React from 'react';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai';
import styles from '../../styles/Teachers.module.css'
import Image from "next/image";
import profile1 from "../assets/profile-1309328823-170667a.jpeg"
import profile2 from "../assets/profile-photo-220453.webp"
import profile3 from "../assets/profile-photo-2379004.jpeg"


function Teachers(props) {
    return (
        <div>
            <div className={styles.section_teachers}>
                <div className={styles.cart}>
                    <Image src={profile1} className={styles.profile}></Image>
                    <span>Diego Choque</span>
                   <div className={styles.link}>
                       <span>{AiFillTwitterCircle()}</span>
                       <span>{AiFillFacebook()}</span>
                       <span>{AiFillLinkedin()}</span>
                   </div>
                </div>
                <div className={styles.cart}>
                    <Image src={profile2} className={styles.profile} ></Image>
                    <span>Juan Carlos Soliz</span>
                   <div className={styles.link}>
                       <span>{AiFillTwitterCircle()}</span>
                       <span>{AiFillFacebook()}</span>
                       <span>{AiFillLinkedin()}</span>
                   </div>
                </div>
                <div className={styles.cart}>
                    <Image src={profile3} className={styles.profile}></Image>
                    <span>Roberto Mendoza</span>
                   <div className={styles.link}>
                       <span>{AiFillTwitterCircle()}</span>
                       <span>{AiFillFacebook()}</span>
                       <span>{AiFillLinkedin()}</span>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Teachers;