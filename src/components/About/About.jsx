import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./About.module.css";

export const About = () => {
  return (
  <section className={styles.container} id="about">
    <h2 className={styles.title}>About</h2>
    <div className={styles.content}>
        <img src= {getImageUrl("about/aboutImage.png")} alt='Laptop Image' className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/cursorIcon.png")} alt='Cursor icon' />
                <div className={styles.aboutItemText}>
                    <h3>Front-End Developer</h3>
                        <p>
                            Job Description
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/serverIcon.png")} alt='Server icon' />
                <div className={styles.aboutItemText}>
                    <h3>Back-End Developer</h3>
                        <p>
                            Job Description
                        </p>
                </div>
            </li>
            <li className={styles.aboutItem}>
            <img src= {getImageUrl("about/uiIcon.png")} alt='UI icon' />
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                        <p>
                            Job Description
                        </p>
                </div>
            </li>
        </ul>
    </div>
  </section>
  )
}
