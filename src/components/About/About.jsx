/* eslint-disable no-unused-vars */

import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";
import Pdf1 from "../../../assets/about/Diploma_Certificate.pdf"
import Pdf2 from "../../../assets/about/Resume.pdf"

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src= {getImageUrl("about/aboutImg.png")} alt='Laptop Image' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>As a recent software engineering graduate, I’m passionate about turning code into 
                        functional and user-friendly applications. While I may not have years of 
                        professional experience, my enthusiasm for learning and problem-solving drives me forward.</h3>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Education</h3>
                        <p>
                            I hold a Diploma in Software Engineering Technician from Centennial College, Toronto ON with 4.05 GPA.
                        </p>
                        <p> Please view my &nbsp;
                        <a href= {Pdf1}>
                            Graduation Certificate (PDF)
                        </a>
                        &nbsp;and &nbsp;
                        <a href= {Pdf2}>
                            Resume (PDF)
                        </a>
                        &nbsp;to learn more about my qualifications and achievements. 
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Soft Skills </h3>
                        <p>
                        I thrive in dynamic environments and am eager to learn new technologies with qualities of Adaptibility and Quick learning skills. 
                        I value collaboration and communication which makes me a great Team Player. I am passionate about creating elegant solutions to coomplex
                        problems and improving user experiences which showcases my passion and motivation. 
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                    <h3>Future Goals </h3>
                        <p>
                        My goal is to contribute my skills and grow alongside a supportive team in an entry-level software engineering role and make 
                        my way towards the path of Full-Stack Developer in future.  
                        </p>
                        <h2>Let's build something awesome together!</h2>
                </div>
            </li>
        </ul>
    </div>
  </section>
  )
}
