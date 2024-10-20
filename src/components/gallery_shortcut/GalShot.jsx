import React from "react";
import Styles from './GalShot.module.css';
import Ani from '../../../animate/gallery.json';

import Lottie from 'lottie-react';

export const GalShot = () =>{
    return ( 
    
    <div className={Styles.container}>
        <div className={Styles.inner}>
            <div className={Styles.innercol}>
                <h3 className={Styles.h3}>Explore Our Gallery</h3>
                <p className={Styles.p}>Discover the highlights of our work and events through our gallery. From stunning images to memorable moments, dive into our collection and see what makes our community unique.Discover the highlights of our work and events through our gallery.</p>
                <a href="#gallery" className={Styles.link}>View Gallery</a> 
            </div>
            <div className={Styles.animationContainer}>
                    <Lottie animationData={Ani} loop={true} /> 
            </div>
        </div>
    </div>
    

    );
}

export default GalShot;