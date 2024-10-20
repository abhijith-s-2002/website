import React from "react";
import {getImageUrl} from '../../utils'
import Ani from '../../../animate/stud.json'
import Lottie from 'lottie-react'
import styles from "./Hero.module.css"
export const Hero = () =>{
    return (
    <section className={styles.container} id="hero">
        <div className={styles.content}>
            
            
            <h1 className={styles.tagLine}>Unleash Potential, Elevate Skills, Inspire Growth.</h1>
            {/*<div className={styles.animationContainer}>
                <Lottie animationData={Ani} loop={true} /> 
                 
            </div>*/}
            <a href="#event" className={styles.button}>UPCOMING EVENTS</a>
            
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </div>
    </section>
    )
} 