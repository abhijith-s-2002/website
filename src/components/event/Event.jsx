import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Event.module.css'
import eventInfo from "../../Data/eventInfo";
import ani from '../../../animate/stud.json';
import Lottie from 'lottie-react'

export const Event = () => {
    return (
        <div className={styles.eventSectiion} id="event">
            <div className={styles.animationContainer}>
                <Lottie animationData={ani} loop={true} />
            </div>
            <h2 className={styles.title}>event</h2>
            <div className={styles.cardsContainer}>
                {eventInfo.map((event) => (
                    <div className={styles.card} key={event.id}>
                        <img src={getImageUrl(`event/img_${event.id}.jpg`)} alt={event.image} className={styles.img} />
                        <div className={styles.content}>
                            <h2>{event.title}</h2>
                            <p>{event.date}</p>
                            <p>{event.description}</p>
                            <a href={event.registrationLink} className={styles.link}>register</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Event;
