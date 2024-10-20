import Styles from './Contact.module.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const form = useRef();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nvzs4iw', 'template_65vgdfl', form.current, {
        publicKey: 'aV-pd98lR3gODPwgt',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowConfirmation(true);
          form.current.reset(); // Reset the form
          setTimeout(() => {
            setShowConfirmation(false); // Hide confirmation after 3 seconds
          }, 3000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <>
    <div className={Styles.container} id='contact'>
      <h1 className={Styles.h1}>CONTACT</h1>
      <p className={Styles.p}>Lets get in touch. Send us a message</p>
        <form ref={form} onSubmit={sendEmail} className={Styles.form}>
            <label className={Styles.label}>Name</label>
            <input type="text" name="user_name" className={Styles.input} required />
            <label className={Styles.label}>Email</label>
            <input type="email" name="user_email" className={Styles.input} required />
            <label className={Styles.label}>Message</label>
            <textarea name="message" className={Styles.textarea} />
            <input type="submit" value="Send" className={Styles.input} required/>
        </form>
    </div>
      {showConfirmation && (
        <div className={`${Styles.confirmation} ${showConfirmation ? Styles.show : ''}`}>
          Your message has been sent successfully!
        </div>
      )}
    </>
  );
};

export default Contact;
