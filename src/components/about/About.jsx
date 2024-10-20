import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"
import Ani from '../../../animate/about_ani.json'
import Lottie from 'lottie-react'
import { FaCogs, FaLaptopCode, FaBook, FaLightbulb, FaPaintBrush } from 'react-icons/fa';
export const About = () =>{
    return (
        <section className={styles.container} id='about'>
            <div className={styles.animationContainer}>
                <Lottie animationData={Ani} loop={true} /> 
                 
            </div>
            
            <div className={styles.content}>
            
                <ul className={styles.aboutItems}>
                
                    <li className={styles.aboutItem}>
                        
                        <p>
                        ELACSTA, the Electronics and Communication Department Students Association of NSS College of Engineering, Palakkad, was established in 2017. It provides a vibrant platform for students to develop both technical and non-technical skills through engaging workshops, interactive events, and online learning opportunities.<br/>
                        <br/>
                        Our mission is to promote knowledge sharing, collaboration, and continuous learning within the ECE community. We aim to help students stay ahead of industry trends, gain hands-on experience, and grow both professionally and personally.<br/>
                        <br/>
                        By encouraging innovation and skill development, ELACSTA supports its members in becoming well-rounded engineers who are ready to face the challenges of a rapidly evolving world.
                        </p>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}
export default About;