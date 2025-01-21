/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mfwf9ek', 'template_nvfj737', form.current, {publicKey: 'RR3HMazAwjRKg5m6h',})
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email Sent!");
        },
      (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Get in Touch</h2>
      </div>
      <div>
        <form className={styles.contactform} ref={form} onSubmit={sendEmail}>
          <input type="text" className={styles.name} placeholder="Name" name="from_name" />
          <input type="email" className={styles.email} placeholder="Email" name="from_email"/>
          <textarea className={styles.msg} name="message" rows="5" placeholder="Message" />
          <button  type="submit" value="send" className={styles.submitBtn}>Submit</button>
        </form>
      </div>
     <div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:gohel.arpan@gmail.com">Email Me</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/agohel09">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/ArpanGohel">GitHub</a>
        </li>
      </ul>  
      </div>
      <div className={styles.text}>
      <h3>Copyright &copy; {new Date().getFullYear()} &nbsp; ArpanGohelPortfolio - All Rights Reserved</h3>
      </div>   
    </footer>
  );
};