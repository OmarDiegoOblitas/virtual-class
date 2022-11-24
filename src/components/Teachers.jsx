import React from 'react';
import {AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook} from 'react-icons/ai';
import styles from '../../styles/Teachers.module.css'

function Teachers(props) {
    return (
        <div>
            <div className={styles.section_teachers}>
                <div>
                    <img src="" alt=""/>
                    <span>roberto </span>
                    <span>{AiFillTwitterCircle()}</span>
                    <span>{AiFillFacebook()}</span>
                    <span>{AiFillLinkedin()}</span>
                </div>
                <div>
                    <img src="" alt=""/>
                    <span>roberto </span>
                    <span>{AiFillTwitterCircle()}</span>
                    <span>{AiFillFacebook()}</span>
                    <span>{AiFillLinkedin()}</span>
                </div>
                <div>
                    <img src="" alt=""/>
                    <span>roberto</span>
                    <span>{AiFillTwitterCircle()}</span>
                    <span>{AiFillFacebook()}</span>
                    <span>{AiFillLinkedin()}</span>
                </div>
            </div>
        </div>
    );
}

export default Teachers;