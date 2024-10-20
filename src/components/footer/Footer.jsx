import React from "react";
import Styles from './Footer.module.css'
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return ( 
        <footer className={Styles.container}>
            <div className={Styles.topLinkContainer}>
                <a href="#nav" className={Styles.topLink}>
                    <img src={getImageUrl("footer/arrow.png")} alt="up arrow" className={Styles.arrow}/>To the top
                </a>
            </div>
            <div className={Styles.link}>
                <a href="https://www.instagram.com/nssce_elacsta/">
                    <img src={getImageUrl("footer/instagram.png")} className={Styles.icons} alt="Instagram"/>
                </a>
                <a href="https://www.linkedin.com/company/nssce_elacsta/">
                    <img src={getImageUrl("footer/linkedin.png")} className={Styles.icons} alt="LinkedIn"/>
                </a>
                <a href="https://github.com/Elacsta2024">
                    <img src={getImageUrl("footer/github.png")} className={Styles.icons} alt="GitHub"/>
                </a>
                <a href="mailto:elacsta2024@gmail.com">
                    <img src={getImageUrl("footer/gmail.png")} className={Styles.icons} alt="GitHub"/>
                </a>
                <a href="https://maps.app.goo.gl/rbkensSBafPF7trcA">
                    <img src={getImageUrl("footer/location.png")} className={Styles.icons} alt="GitHub"/>
                </a>
            </div>
            <div className={Styles.copyright}>
                <p>© {new Date().getFullYear()} ELACSTA. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
